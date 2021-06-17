import 'dart:async';

import 'package:airjaldi_telltale/constants/colors.dart';
import 'package:airjaldi_telltale/model/user_alerts.dart';
import 'package:airjaldi_telltale/services/api_manager.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:syncfusion_flutter_gauges/gauges.dart';

class MainWidget extends StatefulWidget {
  @override
  _MainWidgetState createState() => _MainWidgetState();
}

class _MainWidgetState extends State<MainWidget> {
  ApiManager _apiManager = Get.find();
  Future<UserAlerts>? _alerts;
  late SharedPreferences prefs;
  late String uid;
  late Timer timer;
  Future<void> getUidAlerts() async {
    prefs = await SharedPreferences.getInstance();
    uid = prefs.getString("userId")!;
    if (uid != null) {
      setState(() {
        _alerts = _apiManager.getUserAlerts(uid);
      });
    }
  }

  @override
  void initState() {
    timer = Timer.periodic(Duration(seconds: 3), (Timer t) => getUidAlerts());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            padding: EdgeInsets.all(20),
            decoration: BoxDecoration(color: Colors.white, boxShadow: [
              BoxShadow(
                  color: kShadowcolor,
                  spreadRadius: -5,
                  offset: Offset(1, 5),
                  blurRadius: 10)
            ]),
            child: Column(
              children: [
                FutureBuilder<UserAlerts>(
                  future: _alerts,
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      List<Alert> list = snapshot.data!.alert;
                      if (list.length == 0) {
                        return Center(child: Text('No alerts found'));
                      }
                      return ListView.builder(
                          physics: NeverScrollableScrollPhysics(),
                          shrinkWrap: true,
                          itemCount: list.length,
                          itemBuilder: (context, index) {
                            Alert _alert = list[index];
                            var nedle = double.parse(_alert.voltage);

                            return Container(
                                padding: EdgeInsets.all(20),
                                margin: EdgeInsets.only(top: 8),
                                decoration: BoxDecoration(
                                    color: Colors.white,
                                    boxShadow: [
                                      BoxShadow(
                                          color: kShadowcolor,
                                          spreadRadius: -5,
                                          offset: Offset(1, 5),
                                          blurRadius: 10)
                                    ]),
                                child: Column(
                                  children: [
                                    Text(
                                      "Following relays need your attention",
                                      style:
                                          Theme.of(context).textTheme.headline1,
                                    ),
                                    Text('The network needs your attention'),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        _alert.location,
                                        style:
                                            Theme.of(context).textTheme.headline5,
                                      ),
                                    ),
                                    Text(_alert.network),
                                    SfRadialGauge(axes: <RadialAxis>[
                                      RadialAxis(
                                          minimum: 0,
                                          maximum: 16,
                                          ranges: <GaugeRange>[
                                            GaugeRange(
                                                startValue: 0,
                                                endValue: 10,
                                                color: Colors.red,
                                                startWidth: 10,
                                                endWidth: 10),
                                            GaugeRange(
                                                startValue: 10,
                                                endValue: 14,
                                                color: Colors.orange,
                                                startWidth: 10,
                                                endWidth: 10),
                                            GaugeRange(
                                                startValue: 14,
                                                endValue: 16,
                                                color: Colors.green,
                                                startWidth: 10,
                                                endWidth: 10)
                                          ],
                                          pointers: <GaugePointer>[
                                            NeedlePointer(value: nedle)
                                          ],
                                          annotations: <GaugeAnnotation>[
                                            GaugeAnnotation(
                                                widget: Container(
                                                    child: Text(_alert.voltage,
                                                        style: TextStyle(
                                                            fontSize: 25,
                                                            fontWeight:
                                                                FontWeight
                                                                    .bold))),
                                                angle: 90,
                                                positionFactor: 0.5)
                                          ])
                                    ]),
                                  ],
                                ));
                          });
                    } else if (snapshot.hasError) {
                      return Text('${snapshot.error}');
                    }
                    return SpinKitCircle(color: primaryColor);
                  },
                ),
              ],
            ),
          )
        ],
      ),
    ));
  }
}
