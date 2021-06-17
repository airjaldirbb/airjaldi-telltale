import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'colors.dart';

Widget button(String btnText, BuildContext context, onPressed) {
  return ElevatedButton(
    onPressed: onPressed,
    style: ElevatedButton.styleFrom(
        primary: primaryColor,
        minimumSize: Size(
          double.infinity,
          Get.height * 0.065,
        )),
    child: Text(
      btnText,
      style:
          Theme.of(context).textTheme.headline1!.copyWith(color: Colors.white),
    ),
  );
}
