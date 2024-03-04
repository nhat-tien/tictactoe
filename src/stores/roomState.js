import { defineStore } from "pinia";
import { socket } from "@/socket";

export const useRoomStateStore = defineStore("roomState", {
	state: () => ({
		roomId: "",
		ready: false,
	}),
	actions: {
		bindEvents() {
			socket.on("ready", () => {
          socket.emit("join_room", )   
			})
		},
		setRoomId( roomId ) {
			this.roomId = roomId; 
		},
		joinRoom() {
			let roomId = this.roomId;
			socket.emit("join_room", {roomId: roomId})
		}
	} 
})
