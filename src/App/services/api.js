import axios from "axios";

export const api = axios.create({
  baseURL: "https://loft-taxi.glitch.me",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
