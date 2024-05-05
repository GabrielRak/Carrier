import { createStore } from "vuex";

import auth from "./auth";
import user from "./user";
import parcels from "./parcels";
import admin from "./admin";
import carrier from "./carrier";
export default createStore({
  modules: {
    auth,
    user,
    parcels,
    admin,
    carrier
  },
});
