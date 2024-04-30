import {
  fetchExistingInboxes,
  fetchOrdered_parcels,
  fetchSended_parcels,
  sendPackage,
} from "../API/parcels";
import router from "../router";
const state = {
  orderedParcels: [],
  sendedParcels: [],
  inboxes: [],
};

const mutations = {
  setOrdered_parcels(state, payload) {
    state.orderedParcels = payload;
  },
  setSended_parcels(state, payload) {
    state.sendedParcels = payload;
  },
  setInboxes(state, payload) {
    state.inboxes = payload;
  },
};

const actions = {
  getOrdered_parcels({ commit }, { phone_number }) {
    fetchOrdered_parcels(phone_number)
      .then((response) => {
        commit("setOrdered_parcels", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchInboxes({ commit }) {
    fetchExistingInboxes()
      .then((response) => {
        commit("setInboxes", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getSended_parcels({ commit }, { phone_number }) {
    fetchSended_parcels(phone_number)
      .then((response) => {
        commit("setSended_parcels", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  sendParcel({ commit }, data) {
    sendPackage(data)
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.error(error);
      });
      router.push("/parcels")
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
