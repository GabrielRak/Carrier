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
    // fetchPackageDetails({ commit }, data) {
    //   fetchPackage_details(data)
    //     .then((response) => {
    //       commit("setPackage", response);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
  
    // sendParcel({ commit }, data) {
    //   sendPackage(data)
    //     .then((response) => {
    //       commit("setErrorMsg", response);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },

    becomeCarrierRequest({ commit }, data) {
        becomeCarrier(data)
          .then((response) => {
            commit("setErrorMsg", response);
          })
          .catch((error) => {
            console.error(error);
          });
      },
  
    // removePackage({}, data) {
    //   remove_package(data)
    //     .then(() => {
    //       console.log("Sucessfuly removed data from the databsae");
    //       // Also there's gogin to be fetch for giving feedback to sender that the parcel was collected
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  