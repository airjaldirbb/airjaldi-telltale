import 'package:airjaldi_telltale/constants/colors.dart';
import 'package:airjaldi_telltale/constants/strings.dart';
import 'package:airjaldi_telltale/screens/login_screen.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'services/api_manager.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  // This widget is the root of your application.
  //getx dependecies injection
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final authController = Get.put(ApiManager());
  late SharedPreferences prefs;
  getUserdetailsLocally() async {
    prefs = await SharedPreferences.getInstance();
    username = prefs.getString("name")!;
    avatar = prefs.getString("avatar")!;
    userId = prefs.getString("userId")!;
  }

  @override
  void initState() {
    getUserdetailsLocally();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          primaryColor: primaryColor,
          primarySwatch: Colors.blue,
          fontFamily: 'Montserrat',
          scaffoldBackgroundColor: Colors.white,
          textTheme: ThemeData.light().textTheme.copyWith(
              headline6: TextStyle(
                  fontSize: 24,
                  fontFamily: 'Montserrat',
                  color: headlineColor,
                  fontWeight: FontWeight.bold),
              headline1: TextStyle(
                  fontSize: 16,
                  fontFamily: 'Montserrat',
                  color: headline1Color,
                  fontWeight: FontWeight.w500))),
      home: LoginScreen(),
    );
  }
}
