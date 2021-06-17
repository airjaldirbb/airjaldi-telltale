class NetworkRelay {
  late List<UserRelay> userRelay;

  NetworkRelay({required this.userRelay});

  NetworkRelay.fromJson(Map<String, dynamic> json) {
    if (json['userRelay'] != null) {
      userRelay = <UserRelay>[];
      json['userRelay'].forEach((v) {
        userRelay.add(new UserRelay.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.userRelay != null) {
      data['userRelay'] = this.userRelay.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class UserRelay {
  late String sId;
  late String relayName;

  UserRelay({required this.sId, required this.relayName});

  UserRelay.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    relayName = json['relayName'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['relayName'] = this.relayName;
    return data;
  }
}
