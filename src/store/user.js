// Seems that's not mandatory to use then catch with every async function that's why in this version this unnecseary parts of code had been deleted
import { alterUser_Inbox, check_admin, check_carrier, fetchData, setUser_Data } from "../API/user";
const state = {
  form: false,
  name: null,
  surrname: null,
  email: null,
  inbox: null,
  phone_number: null,
  admin:false,
  carrier:false,
};

const mutations = {
  setUserData(state, payload) {
    state.name = payload.name;
    state.surrname = payload.surrname;
    state.email = payload.email;
    state.inbox = payload.inbox;
    state.phone_number = payload.phone;
  },
  setForm(state, value) {
    state.form = value;
  },
  setInbox(state,payload){
    state.inbox = payload;
  },
  setAdmin(state,value){
    state.admin = value;
  }  ,
  setCarrier(state,value){
    state.carrier = value;
  }
};

const actions = {
  getUserData({ commit }, { uid }) {
    fetchData(uid)
      .then((response) => {
        if (Object.keys(response).length <= 2) {
          commit("setForm", true);
        } else {
          commit("setUserData", response);
        }
      })
  },
  setUser_data({}, data) {
    setUser_Data(data)
      .catch((error) => {
        console.error(error);
      });
  },
  alterUserInbox({commit},data){
    alterUser_Inbox(data)
    .then(()=>{
      commit("setInbox",data.inbox)
    })
  },
  checkAdmin({commit},email)
  {
    check_admin(email)
    .then((response)=>{
      commit("setAdmin",response)
    })
  },
  checkCarrier({commit},email)
  {
    check_carrier(email)
    .then((response)=>{
      commit("setCarrier",response)
    })
  }
};

const getters = {
  getUserInbox(state) {
    return state.inbox;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
