import axios from "axios";

const axiosWithLaw = axios.create({
  baseURL: "http://43.202.93.57:8080",
  headers: {
    "Content-type": "application/json",
    "X-ACCESS-TOKEN":
      "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJtZW1iZXJJZCI6MywiaWF0IjoxNjg4NDE1NzIzLCJleHAiOjE2ODk4ODY5NTJ9.ZVeDC-aHs7ZCaoImf26ej-49_jBTXVJp1b4opqRQK6s",
  },
});

export const loginUser = (user) => axiosWithLaw.post("/members/login", user);

export const signupUser = (data) => axiosWithLaw.post("/members/signup", data);

export const certifyUser = (email) =>
  axiosWithLaw.post("/members/certify", email);

export const getPostList = (category) =>
  axiosWithLaw.get(`/posts/1/${category}`);

export const addPost = (post) => axiosWithLaw.post("/posts", post);

export const getPost = (id) => axiosWithLaw.get(`/posts/${id}`);

export const deletePost = (id) => axiosWithLaw.patch(`/posts/${id}`);

export const addComment = (id, comment) =>
  axiosWithLaw.post(`/comments/${id}`, comment);

export const editComment = (id, comment) =>
  axiosWithLaw.patch(`/comments/${id}`, comment);
