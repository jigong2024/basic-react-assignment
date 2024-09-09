import axios from "axios";

const todoClient = axios.create({
  baseURL: "http://localhost:3000/todos",
});

export default todoClient;
