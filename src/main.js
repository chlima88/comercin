import { createApp } from "vue";

// import "./style.css";

/* Theme variables - copied from existing project */
import "./theme/global.style.css";

// be sure to add the use(IonicVue)

import App from "./App.vue";
import router from "@/routes/router.js";
import store from "@/store/index.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
