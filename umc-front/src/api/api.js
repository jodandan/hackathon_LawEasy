import axios from "axios";

const axiosWithLaw = axios.create({
  baseURL: "http://43.202.93.57:8080",
  headers: {
    "Content-type": "application/json",
    "X-ACCESS-TOKEN":
      "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJtZW1iZXJJZCI6MiwiaWF0IjoxNjg4NDE2NTQ5LCJleHAiOjE2ODk4ODc3Nzh9.ptEXyDZRFSy-hxU0ZEUzBKc0D9THCiJcfWXmykZ5iqQ",
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

export const getLawer = (category) =>
  axiosWithLaw.get(`/lawyers?category=${category}`);
