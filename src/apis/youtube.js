import axios from "axios";

const KEY = "AIzaSyCAxrz3xjwSf4T7wYRH_ew-z0-ZrlsZqHc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "5",
    key: KEY,
  },
});

// npm i --save axios
