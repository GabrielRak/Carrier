import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "./assets/styles/tailwind.css";
import router from "./router";
import firebase from "./firebase/init";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(firebase);
app.mount("#app");
