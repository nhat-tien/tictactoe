import { defineStore } from "pinia";
import { socket } from "@/socket";

export const useGameStateStore = defineStore("gameState", {
  state: () => ({
		roomId: "",
		ready: false,
		isEnd: false,
		winner: null,
		board: [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		],
		player: "",
		turn: "x", //fisrt player is x
  }),

  actions: {
    bindEvents() {

      socket.on("ready", ({ready}) => {
        this.ready = ready; 
			});

			socket.on("player", ({player}) => {
				this.player = player;
			})

      socket.on("update_game", ({ newBoard, player}) => {
				this.board = newBoard;
        this.turn = player; 
      });

			socket.on("end_game", ({winner}) => {
        this.isEnd = true;
				this.winner = winner ;
			}); 

    },

		setRoomId( roomId ) {
			this.roomId = roomId; 
		},
		joinRoom() {
			let roomId = this.roomId;
			socket.emit("join_room", {roomId: roomId})
		},

    /*
		* moveLocation: [row: number, col: number]
		*/
		move(moveLocation) {
			socket.emit("move", {roomId: this.roomId, board: this.board, move: moveLocation, player: this.player})
		},

	},
});
