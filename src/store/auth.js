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
    state.uid = payload.uid;
  },
  setAuthorized(state, is_authorized) {
    state.authorized = is_authorized;
  },
  setAuthError(state, payload) {
    state.authError = payload;
  },
};

const actions = {
  register({ commit }, { email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        commit("setUser", user);
        commit("setAuthorized", true);
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, {
          uid: user.uid,
          email: email,
        });
        router.push("/profile");
      })
      .catch(() => {
        commit("setAuthError", "Failed");
      });
  },
  async login({ commit }, { email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const payload = {
          uid: user.uid,
          is_authorized: true,
        };
        commit("setUser", payload);
        commit("setAuthorized", true);
        commit("setAuthError", null);
        router.push("/profile");
      })
      .catch(() => {
        commit("setAuthError", "Failed");
      });
  },
  logout({ commit }) {
    try {
      signOut(auth);
      const payload = {
        uid: null,
        is_authorized: false,
      };
      router.push("/");
      commit("setUser", payload);
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
