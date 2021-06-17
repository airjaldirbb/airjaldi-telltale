class Users {
  late String token;
  late String userId;
  late String name;
  late String email;
  late String avatar;

  Users(
      {required this.token,
      required this.userId,
      required this.name,
      required this.email,
      required this.avatar});

  Users.fromJson(Map<String, dynamic> json) {
    token = json['token'];
    userId = json['user_id'];
    name = json['name'];
    email = json['email'];
    avatar = json['avatar'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['token'] = this.token;
    data['user_id'] = this.userId;
    data['name'] = this.name;
    data['email'] = this.email;
    data['avatar'] = this.avatar;
    return data;
  }
}
