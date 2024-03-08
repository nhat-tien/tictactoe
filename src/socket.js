import { io } from "socket.io-client";

const URL  = import.meta.env.VITE_API_STAGE === "production" ? import.meta.env.VITE_API_SERVER_URL : "http://localhost:5000"

export const socket = io(URL)

