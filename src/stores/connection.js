import { defineStore } from "pinia";
import { socket } from "@/socket";

export const useConnectionStore = defineStore("connection", {
  state: () => ({
    isConnected: false,
  }),

  actions: {
    bindEvents() {
      socket.on("connect", () => {
        this.isConnected = true;
      });

      socket.on("disconnect", () => {
        this.isConnected = false;
      });

      socket.on("error", (error) => {
				console.log(error);
      });
    },

    connect() {
      socket.connect();
    },

		toggle() {
			this.isConnected = !this.isConnected;
		}
  },
});
