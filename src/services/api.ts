import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "https://1d26-191-34-195-94.ngrok-free.app/api/v1/doctorlife/",
  headers: {
    Authorization: `Bearer ${AsyncStorage.getItem("token")}`,
    "Content-Type": "application/json; charset=utf-8",
  },
});

api.interceptors.request.use((request) => {
  console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

axios.interceptors.response.use((response) => {
  // console.log("Response:", JSON.stringify(response, null, 2));
  return response;
});
