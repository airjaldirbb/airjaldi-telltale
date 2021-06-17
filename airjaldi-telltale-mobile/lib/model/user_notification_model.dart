class UserNotification {
  late List<Notifications> notifications;

  UserNotification({required this.notifications});

  UserNotification.fromJson(Map<String, dynamic> json) {
    if (json['notifications'] != null) {
      notifications = <Notifications>[];
      json['notifications'].forEach((v) {
        notifications.add(new Notifications.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.notifications != null) {
      data['notifications'] =
          this.notifications.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Notifications {
  late String sId;
  late String status;
  late String network;
  late String location;
  late String sensor;
  late String batteryvolt;
  late String batterytype;
  late String readingTime;
  late String batteryampere;
  late String message;

  Notifications(
      {required this.sId,
      required this.status,
      required this.network,
      required this.location,
      required this.sensor,
      required this.batteryvolt,
      required this.batterytype,
      required this.readingTime,
      required this.batteryampere,
      required this.message});

  Notifications.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    status = json['status'];
    network = json['network'];
    location = json['location'];
    sensor = json['sensor'];
    batteryvolt = json['batteryvolt'];
    batterytype = json['batterytype'];
    readingTime = json['reading_time'];
    batteryampere = json['batteryampere'];
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['status'] = this.status;
    data['network'] = this.network;
    data['location'] = this.location;
    data['sensor'] = this.sensor;
    data['batteryvolt'] = this.batteryvolt;
    data['batterytype'] = this.batterytype;
    data['reading_time'] = this.readingTime;
    data['batteryampere'] = this.batteryampere;
    data['message'] = this.message;
    return data;
  }
}
