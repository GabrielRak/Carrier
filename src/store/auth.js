import { auth, db } from "../firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import router from "../router/index.js";
const state = {
  uid: null,
  authorized: false,
  authError: "",
};

const mutations = {
  setUser(state, payload) {
    state.uid = payload.email;
    state.authorized = payload.authorized;
  },
  setAuthError(state, payload) {
    state.authError = payload;
  },
};

const actions = {
  register({ commit }, { email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        commit("setUser",{
          email:email,
          authorized:true,
        });
        const docRef = doc(db, "users", email);
        setDoc(docRef, {
          uid: user.uid,
          email: email,
        });
        router.push("/login");
      })
      .catch(() => {
        commit("setAuthError", "Address email already taken");
      });
  },
  async login({ commit }, { email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        commit("setUser",{
          email:email,
          authorized:true,
        });
        router.push("/profile");
      })
      .catch(() => {
        commit("setAuthError", "Wrong Credentials");
      });
  },
  logout({ commit }) {
    try {
      signOut(auth);
      commit("setUser",{
        email:null,
        authorized:false,
      });
      router.push("/");
    } catch (error) {
      commit("setAuthError", "Failed");
    }
  },
  observeAuthState({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        commit("setUser", user);
      } else {
        commit("setUser", null);
      }
    });
  },
};

const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
  getUid(state) {
    return state.uid;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
