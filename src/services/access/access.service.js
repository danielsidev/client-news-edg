
import http from "../http-commom";

class AccessService {

  login(data) {
    return http.post("/access/login", data);
  }

}

export default new AccessService();