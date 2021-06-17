import 'dart:convert';

import 'package:airjaldi_telltale/model/assigned_relay.dart';
import 'package:airjaldi_telltale/model/network_realay_model.dart';
import 'package:airjaldi_telltale/model/user_alerts.dart';
import 'package:airjaldi_telltale/model/user_model.dart';
import 'package:airjaldi_telltale/model/user_notification_model.dart';
import 'package:airjaldi_telltale/screens/home_screen.dart';
import 'package:airjaldi_telltale/services/apis.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class ApiManager extends GetxController {
  late SharedPreferences prefs;
  Future<Users> loginUser(String email, password) async {
    Map data = {'email': email, 'password': password};
    var response = await http.post(loginUrl, body: data);
    if (response.statusCode == 200) {
      // If the server did return a 201 CREATED response,
      // then parse the JSON.
      var jsonResponse = json.decode(response.body);
      print(jsonResponse);
      prefs = await SharedPreferences.getInstance();
      prefs.setString("token", jsonResponse['token']);
      prefs.setString("userId", jsonResponse['user_id']);
      prefs.setString("name", jsonResponse['name']);
      prefs.setString("email", jsonResponse['email']);
      prefs.setString("avatar", jsonResponse['avatar']).then((value) {
        Get.offAll(HomeScreenMain(),
            transition: Transition.rightToLeftWithFade);
      });
      Get.snackbar("Login Success", "");

      return Users.fromJson(jsonDecode(response.body));
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      Get.snackbar("Failed to login.!", "");
      throw Exception('Failed to login.');
    }
  }

  Future<NetworkRelay> getNetworkRelays(String id) async {
    final response = await http.get(Uri.parse(relayUrl + id));

    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      var jsonResponse = json.decode(response.body);
      print(jsonResponse);

      return NetworkRelay.fromJson(jsonResponse);
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      Get.snackbar("Failed to get data.!", "");
      throw Exception('Failed to get data');
    }
  }

  Future<UserNotification> getNotification(String id) async {
    final response = await http.get(Uri.parse(NotificationUrl + id));
    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      var jsonResponse = json.decode(response.body);
      print(jsonResponse);

      return UserNotification.fromJson(jsonResponse);
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      Get.snackbar("Failed to get data.!", "");
      throw Exception('Failed to get data');
    }
  }

  Future<UserAlerts> getUserAlerts(String id) async {
    final response = await http.get(Uri.parse(AlertUrl + id));
    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      var jsonResponse = json.decode(response.body);
      print(jsonResponse);

      return UserAlerts.fromJson(jsonResponse);
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      // Get.snackbar("Failed to get data.!", "");
      throw Exception('Failed to get data');
    }
  }

  Future<AssignedRelay> getSingleRelayInfo(String name) async {
    final response = await http.get(Uri.parse(RelayInfo + name));
    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      var jsonResponse = json.decode(response.body);
      print(jsonResponse);

      return AssignedRelay.fromJson(jsonResponse);
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      // Get.snackbar("Failed to get data.!", "");
      throw Exception('Failed to get data');
    }
  }
}
