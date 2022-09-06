import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    directory: [],
    search: '',
    snackbar: false,
  },
  mutations: {
    //db'den çekilen datanın state'e aktarılması
    getListData(state, data) {
      state.directory = data;
    },
  },
  actions: {
    //db'den veri çeken method
    async getList(context) {
      const { data } = await axios.get("http://localhost:3000/myDirectory");
      context.commit("getListData", data);
    }
  }
});

export default store;