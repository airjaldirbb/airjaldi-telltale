import 'package:airjaldi_telltale/constants/colors.dart';
import 'package:airjaldi_telltale/constants/custom_shapes.dart';
import 'package:airjaldi_telltale/screens/home_screen.dart';
import 'package:airjaldi_telltale/services/api_manager.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  ApiManager _apiManager = Get.find();
  bool _obscureText = true;
  bool _loading = false;
  late SharedPreferences prefs;
  TextEditingController _emailController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();
  login() {
    if (_emailController.text.isEmpty || _passwordController.text.isEmpty) {
      setState(() {
        _loading = false;
      });
      return Get.snackbar("All fields are required!", "");
    }
    try {
      setState(() {
        _loading = true;
      });
      _apiManager
          .loginUser(
              _emailController.text.trim(), _passwordController.text.trim())
          .catchError((error) {
        setState(() {
          _loading = false;
        });
      });
    } catch (e) {
      print("error:$e");
    }
  }

  checkLoggedInUser() async {
    prefs = await SharedPreferences.getInstance();
    var token = prefs.getString("token");
    if (token != null) {
      Get.off(HomeScreenMain());
    }
  }

  @override
  void initState() {
    checkLoggedInUser();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Container(
          padding: EdgeInsets.all(20),
          child: SingleChildScrollView(
            child: Column(
              children: [
                CachedNetworkImage(
                  imageUrl:
                      'https://res.cloudinary.com/airjaldi/image/upload/v1621922035/logo_1_nzz4cs.png',
                  height: Get.height * 0.25,
                ),
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
                      Container(
                        child: Text(
                          'Login',
                          style: Theme.of(context).textTheme.headline6,
                        ),
                        alignment: Alignment.topLeft,
                      ),
                      SizedBox(
                        height: Get.height * 0.035,
                      ),
                      TextField(
                        controller: _emailController,
                        decoration: InputDecoration(
                          labelText: "Your email",
                          border: OutlineInputBorder(),
                        ),
                      ),
                      SizedBox(
                        height: Get.height * 0.025,
                      ),
                      TextField(
                        controller: _passwordController,
                        obscureText: _obscureText,
                        keyboardType: TextInputType.visiblePassword,
                        decoration: InputDecoration(
                            labelText: "Your password",
                            border: OutlineInputBorder(),
                            suffix: GestureDetector(
                              onTap: () {
                                setState(() {
                                  _obscureText = !_obscureText;
                                });
                              },
                              child: Icon(
                                !_obscureText
                                    ? Icons.visibility
                                    : Icons.visibility_off,
                                color: primaryColor,
                              ),
                            )),
                      ),
                      SizedBox(
                        height: Get.height * 0.025,
                      ),
                      _loading
                          ? SpinKitCircle(color: primaryColor)
                          : button("Login", context, () {
                              login();
                            })
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
