import {
  fetchExistingInboxes,
  fetchOrdered_parcels,
  fetchSended_parcels,
  fetchPackage_details,
  sendPackage,
  remove_package,
} from "../API/parcels";
import router from "../router";
const state = {
  orderedParcels: [],
  sendedParcels: [],
  inboxes: [],
  package: null,
  errorMsg: "",
};

const mutations = {
  setOrdered_parcels(state, payload) {
    state.orderedParcels = payload;
  },
  setSended_parcels(state, payload) {
    state.sendedParcels = payload;
  },
  setErrorMsg(state, payload) {
    state.errorMsg = payload;
  },
  setInboxes(state, payload) {
    state.inboxes = payload;
  },
  setPackage(state, payload) {
    state.package = payload;
  },
};

const actions = {
  getOrdered_parcels({ commit }, { phone_number }) {
    fetchOrdered_parcels(phone_number)
      .then((response) => {
        commit("setOrdered_parcels", response);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  fetchInboxes({ commit }) {
    fetchExistingInboxes()
      .then((response) => {
        commit("setInboxes", response);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  getSended_parcels({ commit }, { phone_number }) {
    fetchSended_parcels(phone_number)
      .then((response) => {
        commit("setSended_parcels", response);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  fetchPackageDetails({ commit }, data) {
    fetchPackage_details(data)
      .then((response) => {
        commit("setPackage", response);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  sendParcel({ commit }, data) {
    sendPackage(data)
      .then((response) => {
        commit("setErrorMsg", response);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  removePackage({ commit }, data) {
    remove_package(data)
      .then(() => {
        console.log("Sucessfuly removed data from the databsae");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
