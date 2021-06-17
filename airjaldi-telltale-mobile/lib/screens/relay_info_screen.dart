import 'dart:async';

import 'package:airjaldi_telltale/constants/colors.dart';
import 'package:airjaldi_telltale/model/assigned_relay.dart';
import 'package:airjaldi_telltale/services/api_manager.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:get/get.dart';
import 'package:syncfusion_flutter_gauges/gauges.dart';

class RelayInfoScreen extends StatefulWidget {
  final String relayName;
  RelayInfoScreen({required this.relayName});

  @override
  _RelayInfoScreenState createState() => _RelayInfoScreenState();
}

class _RelayInfoScreenState extends State<RelayInfoScreen> {
  ApiManager _apiManager = Get.find();
  late Timer timer;
  Future<AssignedRelay>? _assignedRelay;
  Future<void> getRelayInfo() async {
    setState(() {
      _assignedRelay = _apiManager.getSingleRelayInfo(widget.relayName);
      print("relayname:${widget.relayName}");
    });
  }

  @override
  void initState() {
    timer = Timer.periodic(Duration(seconds: 5), (Timer t) => getRelayInfo());

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Relay Info'),
      ),
      body: FutureBuilder<AssignedRelay>(
        future: _assignedRelay,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            var nedle = double.parse(snapshot.data!.voltage);

            return Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    snapshot.data!.location,
                    style: Theme.of(context).textTheme.headline5,
                  ),
                ),
                Text(snapshot.data!.network),
                Container(
                  padding: EdgeInsets.all(20),
                  margin: EdgeInsets.only(top: 8),
                  decoration: BoxDecoration(color: Colors.white, boxShadow: [
                    BoxShadow(
                        color: kShadowcolor,
                        spreadRadius: -5,
                        offset: Offset(1, 5),
                        blurRadius: 10)
                  ]),
                  child: SfRadialGauge(axes: <RadialAxis>[
                    RadialAxis(minimum: 0, maximum: 16, ranges: <GaugeRange>[
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
                    ], pointers: <GaugePointer>[
                      NeedlePointer(value: nedle)
                    ], annotations: <GaugeAnnotation>[
                      GaugeAnnotation(
                          widget: Container(
                              child: Text(snapshot.data!.voltage,
                                  style: TextStyle(
                                      fontSize: 25,
                                      fontWeight: FontWeight.bold))),
                          angle: 90,
                          positionFactor: 0.5)
                    ])
                  ]),
                ),
              ],
            );
          } else if (snapshot.hasError) {
            return Text('${snapshot.error}');
          }
          return SpinKitCircle(color: primaryColor);
        },
      ),
    );
  }
}
