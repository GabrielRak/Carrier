import {
  fetchExistingInboxes,
  fetchOrdered_parcels,
  fetchSended_parcels,
  fetchPackage_details,
  sendPackage,
  remove_package,
  getImageUrl,
} from "../API/parcels";
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
  setImageUrl(state, payload) {
    state.imageUrl = payload;
  }
};

const actions = {
  getOrdered_parcels({ commit }, { phone_number }) {
    fetchOrdered_parcels(phone_number)
      .then((response) => {
        commit("setOrdered_parcels", response);
      })
  },
  fetchInboxes({ commit }) {
    fetchExistingInboxes()
      .then((response) => {
        commit("setInboxes", response);
      })
  },
  getSended_parcels({ commit }, { phone_number }) {
    fetchSended_parcels(phone_number)
      .then((response) => {
        commit("setSended_parcels", response);
      })
  },

  fetchPackageDetails({ commit }, data) {
    fetchPackage_details(data)
      .then((response) => {
        commit("setPackage", response);
        if(response.image) {
          this.dispatch("parcels/getImageUrl", response.image);
        } else {
          commit("setImageUrl", "");
        }
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

  removePackage({}, data) {
    remove_package(data)
      .then(() => {
        console.log("Sucessfuly removed data from the databsae");
        // Also there's gogin to be fetch for giving feedback to sender that the parcel was collected
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getImageUrl({ commit }, data) {
    getImageUrl(data)
      .then((response) => {
        commit("setImageUrl", response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
