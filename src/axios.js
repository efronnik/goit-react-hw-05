import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjVmZGRlYzA0ZjZkMzg0ZWJkOWY3ODllOGZjZjlhNCIsInN1YiI6IjY2MjE3YWFjZTRiNTc2MDE0YWJiYzk1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eMu-wFNbkwYM_UrzLCQrdhtt-igdZPqjQEh-bA_3-MU`,
  },
  params: {
    language: "en-US",
  },
});

export default instance;
