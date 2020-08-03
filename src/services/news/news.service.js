import http from "../http-commom";
const path = "news";
class NewsService {
  getAll() {
    return http.get("/news");
  }

  get(id) {
    return http.get(`/news/${id}`);
  }

  create(data) {
    return http.post("/news", data);
  }

  update(id, data) {
    return http.put(`/news/${id}`, data);
  }

  delete(id) {
    return http.delete(`/news/${id}`);
  }

}

export default new NewsService();