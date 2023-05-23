import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "26955b17686f434e9f5acc30fd8bd08e",
  },
});
