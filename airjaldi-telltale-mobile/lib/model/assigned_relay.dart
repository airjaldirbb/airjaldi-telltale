class AssignedRelay {
  late String sId;
  late String network;
  late String location;
  late int batteryvolt;
  late String voltage;
  late String batterytype;
  late String readingTime;
  late String batteryampere;
  late int iV;

  AssignedRelay(
      {required this.sId,
      required this.network,
      required this.location,
      required this.batteryvolt,
      required this.voltage,
      required this.batterytype,
      required this.readingTime,
      required this.batteryampere,
      required this.iV});

  AssignedRelay.fromJson(Map<String, dynamic> json) {
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
