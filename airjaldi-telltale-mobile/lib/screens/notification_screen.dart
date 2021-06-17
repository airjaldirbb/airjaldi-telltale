import 'dart:async';

import 'package:airjaldi_telltale/constants/colors.dart';
import 'package:airjaldi_telltale/constants/strings.dart';
import 'package:airjaldi_telltale/model/user_notification_model.dart';
import 'package:airjaldi_telltale/services/api_manager.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:get/get.dart';

class NotificationScreen extends StatefulWidget {
  @override
  _NotificationScreenState createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  ApiManager _apiManager = Get.find();
  Future<UserNotification>? _notification;
  late Timer timer;
  Color _getColorByEvent(String status) {
    if (status == "green") return Color(0xFF028402);
    if (status == "red") return Color(0xFFFA1702);
    return Colors.orange;
  }

  Future<void> getNotify() async {
    setState(() {
      _notification = _apiManager.getNotification(userId);
    });
  }

  @override
  void initState() {
    timer = Timer.periodic(Duration(seconds: 3), (Timer t) => getNotify());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Notifications'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: FutureBuilder<UserNotification>(
            future: _notification,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                List<Notifications> list = snapshot.data!.notifications;
                return ListView.builder(
                    itemCount: list.length,
                    itemBuilder: (context, index) {
                      Notifications _notify = list[index];

                      return Container(
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
                          child: Row(
                            children: [
                              Expanded(
                                child: Container(
                                    decoration: BoxDecoration(
                                        shape: BoxShape.circle,
                                        color:
                                            _getColorByEvent(_notify.status)),
                                    child: Icon(
                                      Icons.sensors_outlined,
                                      size: Get.height * 0.05,
                                      color: Colors.white,
                                    )),
                              ),
                              Expanded(
                                child: Column(
                                  children: [
                                    Text(
                                      _notify.location +
                                          "(${_notify.network})" +
                                          " ${_notify.message}",
                                      style:
                                          Theme.of(context).textTheme.headline1,
                                    ),
                                    Text(
                                      _notify.readingTime,
                                      style: Theme.of(context)
                                          .textTheme
                                          .subtitle2!
                                          .copyWith(
                                              color: headlineColor
                                                  .withOpacity(0.5)),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ));
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
