class UserAlerts {
  late List<Alert> alert;

  UserAlerts({required this.alert});

  UserAlerts.fromJson(Map<String, dynamic> json) {
    if (json['alert'] != null) {
      alert = <Alert>[];
      json['alert'].forEach((v) {
        alert.add(new Alert.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.alert != null) {
      data['alert'] = this.alert.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Alert {
  late String sId;
  late String network;
  late String location;
  late int batteryvolt;
  late String voltage;
  late String batterytype;
  late String readingTime;
  late String batteryampere;
  late int iV;

  Alert(
      {required this.sId,
      required this.network,
      required this.location,
      required this.batteryvolt,
      required this.voltage,
      required this.batterytype,
      required this.readingTime,
      required this.batteryampere,
      required this.iV});

  Alert.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    network = json['network'];
    location = json['location'];
    batteryvolt = json['batteryvolt'];
    voltage = json['voltage'];
    batterytype = json['batterytype'];
    readingTime = json['reading_time'];
    batteryampere = json['batteryampere'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['network'] = this.network;
    data['location'] = this.location;
    data['batteryvolt'] = this.batteryvolt;
    data['voltage'] = this.voltage;
    data['batterytype'] = this.batterytype;
    data['reading_time'] = this.readingTime;
    data['batteryampere'] = this.batteryampere;
    data['__v'] = this.iV;
    return data;
  }
}
