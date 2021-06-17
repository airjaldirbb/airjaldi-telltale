import 'package:airjaldi_telltale/constants/custom_shapes.dart';
import 'package:airjaldi_telltale/constants/strings.dart';
import 'package:airjaldi_telltale/screens/assigned_relays_screen.dart';
import 'package:airjaldi_telltale/screens/login_screen.dart';
import 'package:airjaldi_telltale/screens/main_home_widget.dart';
import 'package:airjaldi_telltale/screens/notification_screen.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

class HomeScreenMain extends StatefulWidget {
  const HomeScreenMain({Key? key}) : super(key: key);

  @override
  _HomeScreenMainState createState() => _HomeScreenMainState();
}

class _HomeScreenMainState extends State<HomeScreenMain> {
  GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
  late SharedPreferences prefs;
  Future<void> getUserdetailsLocally() async {
    prefs = await SharedPreferences.getInstance();
    username = prefs.getString("name")!;
    avatar = prefs.getString("avatar")!;
    userId = prefs.getString("userId")!;
    email = prefs.getString("email")!;
  }

  @override
  void initState() {
    getUserdetailsLocally();

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          title: Text(
            'Welcome',
            style: Theme.of(context)
                .textTheme
                .headline6!
                .copyWith(color: Colors.white),
          ),
          actions: [
            IconButton(
                onPressed: () {
                  Get.to(NotificationScreen(),
                      transition: Transition.rightToLeftWithFade);
                },
                icon: Icon(Icons.notifications_none_outlined)),
          ],
        ),
        drawer: MenuWidget(onClickItem: () async {
          prefs = await SharedPreferences.getInstance();
          prefs.clear();
          Get.offAll(LoginScreen());
        }),
        body: MainWidget());
  }
}

class MenuWidget extends StatelessWidget {
  Function onClickItem;

  MenuWidget({required this.onClickItem});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Drawer(
        child: Container(
          decoration: BoxDecoration(
              border: Border.all(color: Colors.black12.withOpacity(0.05))),
          padding: EdgeInsets.all(8),
          child: Column(
            children: [
              CachedNetworkImage(
                  imageUrl:
                      "https://res.cloudinary.com/airjaldi/image/upload/v1621922035/logo_1_nzz4cs.png"),
              Divider(),
              SizedBox(
                height: Get.height * 0.01,
              ),
              Row(
                children: [
                  CircleAvatar(
                    backgroundImage: CachedNetworkImageProvider(avatar),
                  ),
                  SizedBox(
                    width: Get.width * 0.02,
                  ),
                  Column(
                    children: [
                      Text(
                        username,
                        style: Theme.of(context).textTheme.headline1,
                      ),
                      Text(
                        email,
                        style: Theme.of(context)
                            .textTheme
                            .headline1!
                            .copyWith(color: Colors.black38),
                      ),
                    ],
                  ),
                ],
              ),
              SizedBox(
                height: Get.height * 0.01,
              ),
              Divider(),
              ListTile(
                onTap: () {
                  Get.to(AssignedRelaysScreen(),
                      transition: Transition.rightToLeftWithFade);
                },
                title: Text(
                  'Network relays',
                  style: Theme.of(context).textTheme.headline1,
                ),
                leading: Icon(
                  Icons.sensors_outlined,
                ),
              ),
              Divider(),
              Spacer(),
              button("logout", context, onClickItem)
            ],
          ),
        ),
      ),
    );
  }
}
