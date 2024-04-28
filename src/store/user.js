import { fetchData, setUser_Data } from "../API/user";
const state = {
  form: false,
  name: null,
  surrname: null,
  email: null,
  inbox: null,
  phone_number: null,
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
      .catch((error) => {
        console.log(error);
      });
  },
  setUser_data({ commit }, data) {
    setUser_Data(data)
      .then((response) => {
        console.log("Succes");
      })
      .catch((error) => {
        console.error(error);
      });
  },
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
