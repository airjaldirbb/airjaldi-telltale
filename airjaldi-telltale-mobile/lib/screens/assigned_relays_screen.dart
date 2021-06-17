import 'dart:async';

import 'package:airjaldi_telltale/constants/colors.dart';
import 'package:airjaldi_telltale/constants/strings.dart';
import 'package:airjaldi_telltale/model/network_realay_model.dart';
import 'package:airjaldi_telltale/screens/relay_info_screen.dart';
import 'package:airjaldi_telltale/services/api_manager.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:get/get.dart';

class AssignedRelaysScreen extends StatefulWidget {
  @override
  _AssignedRelaysScreenState createState() => _AssignedRelaysScreenState();
}

class _AssignedRelaysScreenState extends State<AssignedRelaysScreen> {
  ApiManager _apiManager = Get.find();

  Future<NetworkRelay>? networkRelay;
  late Timer timer;
  Future<void> getRelay() async {
    setState(() {
      networkRelay = _apiManager.getNetworkRelays(userId);
    });
  }

  @override
  void initState() {
    timer = Timer.periodic(Duration(seconds: 25), (Timer t) => getRelay());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Assigned Relays"),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: FutureBuilder<NetworkRelay>(
            future: networkRelay,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                List<UserRelay> list = snapshot.data!.userRelay;
                return ListView.builder(
                    itemCount: list.length,
                    itemBuilder: (context, index) {
                      UserRelay _userRelay = list[index];
                      return InkWell(
                        onTap: () {
                          Get.to(
                              RelayInfoScreen(relayName: _userRelay.relayName),
                              transition: Transition.rightToLeftWithFade);
                        },
                        child: Container(
                            padding: EdgeInsets.all(20),
                            margin: EdgeInsets.only(top: 8),
                            decoration:
                                BoxDecoration(color: Colors.white, boxShadow: [
                              BoxShadow(
                                  color: kShadowcolor,
                                  spreadRadius: -5,
                                  offset: Offset(1, 5),
                                  blurRadius: 10)
                            ]),
                            child: Text(
                              _userRelay.relayName,
                              style: Theme.of(context).textTheme.headline1,
                            )),
                      );
                    });
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              }
              return SpinKitCircle(color: primaryColor);
            },
          ),
        ),
      ),
    );
  }
}
