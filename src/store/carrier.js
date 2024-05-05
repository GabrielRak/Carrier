  import {
    becomeCarrier,
    fetchCarrierRequests,
    fetchRequestDetails,
    acceptRequestAPI 
  } from "../API/carriers";
  const state = {
    errorMsg: "",
    CarrierRequests: [],
    requestDetails: null,
  };
  
  const mutations = {
    setCarrierRequests(state, payload) {
      state.CarrierRequests = payload;
    },
    setErrorMsg(state, payload) {
      state.errorMsg = payload;
    },
    setRequestDetails(state, payload) {
      state.requestDetails = payload;
    },
  };
  
  const actions = {
    getCarrierRequests({ commit }) {
      fetchCarrierRequests()
        .then((response) => {
          commit("setCarrierRequests", response);
        })
    },
    getRequestDetails({ commit }, data) {
      fetchRequestDetails(data)
        .then((response) => {
          console.log(response);
          commit("setRequestDetails", response);
        })
    },
  
    acceptRequest({ dispatch },data) {
      acceptRequestAPI(data)
      .then(()=>{
        dispatch("getCarrierRequests");
      })
    },

    denyRequest({ dispatch },data) {
      denyRequestAPI(data)
      .then(()=>{
        dispatch("getCarrierRequests");
      })
    },


    becomeCarrierRequest({ commit }, data) {
        becomeCarrier(data)
          .then((response) => {
            commit("setErrorMsg", response);
          })
          .catch((error) => {
            console.error(error);
          });
      },

  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  