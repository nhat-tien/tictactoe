import { io } from "socket.io-client";

// export const state = reactive({
// 	connected: false,
// 	fooEvents: [],
// 	barEvents: [],
// });

const URL  = import.meta.env.VITE_API_STAGE === "production" ? import.meta.env.VITE_API_SERVER_URL : "http://localhost:5000"
console.log(URL)
export const socket = io(URL)

// socket.on("connect", () => {
//   state.connected = true;
// });
//
// socket.on("disconnect", () => {
//   state.connected = false;
// });
//
// socket.on("foo", (...args) => {
//   state.fooEvents.push(args);
// });
//
// socket.on("bar", (...args) => {
//   state.barEvents.push(args);
// });
