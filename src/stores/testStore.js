import { defineStore } from "pinia";
import { socket } from "@/socket";

export const useTestStore = defineStore("test", {
	state: () => ({
		roomId: "",
		ready: false,
	}),
	actions: {
		bindEvents() {
			socket.on("ready", ({ready}) => {
				console.log(ready)
				this.ready = true;
			})
			socket.on("update_game", ({board, turn}) => {
				console.log(board);
				console.log(turn);
			})
			socket.on("error", ({errMsg}) => {
				console.log(errMsg)
			})
		},
		setRoomId( roomId ) {
			this.roomId = roomId; 
		},
		joinRoom() {
			let roomId = this.roomId;
			socket.emit("join_room", {roomId: roomId})
		},
		makeMove() {
      socket.emit("move",{ roomId: this.roomId, board: "test board", move: "test move", turn: "test turn" })
		}
	} 
})
