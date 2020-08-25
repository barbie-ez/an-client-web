export default class {
  static isloggedIn() {
    return !!localStorage.getItem("token");
  }

  static saveUserDetails(payload) {
    const { token } = payload;
    delete payload.token;

    localStorage.setItem("user", JSON.stringify(payload));
    localStorage.setItem("token", token);
  }

  static fetchToken() {
    var token = localStorage.getItem("token");
    return token ? token : null;
  }

  static fetchUserDetails() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }
  static logUserOut() {
    localStorage.clear();
  }
}
