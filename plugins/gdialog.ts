import "gitart-vue-dialog/dist/style.css";
import { GDialog } from "gitart-vue-dialog";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(GDialog)
  })
