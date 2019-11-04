import axios from "axios";

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    }
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    }
  },
  actions: {
    getParts({ commit }) {
      axios
        .get("/api/parts")
        .then(result => commit("updateParts", result.data));
      // .catch(console.log("~~~"));
    },

    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      axios.post("/api/cart", cart).then(() => commit("addRobotToCart", robot));
    }
  }
};
