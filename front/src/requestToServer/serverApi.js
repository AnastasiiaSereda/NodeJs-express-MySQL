import axios from "axios";

class PostApiUserPost {
  
  static url = "https://httpbin.org";

  static async addValue(t, w, f) {
    return await axios.post(
      `${this.url}/post`,
      { title: t, wavelength: w, frequency: f },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
export default PostApiUserPost;