import axios from "axios";

const url = "http://localhost:5000/posts"; //connecting to the backend url

export const fetchPosts = () => axios.get(url);
