import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      inputSearchAddress: '',
      addresses: {},
      login_status: false,
      dialog_login: false,
      products_list: [
        {title: 'Суши', link: '/2'},
        {title: 'Пицца', link: '/3'},
        {title: 'Бургеры', link: '/4'},
        {title: 'Фастфуд', link: '/5'},
        {title: 'Шашлыки', link: '/6'},
        {title: 'Азиатская', link: '/7'},
        {title: 'Десерты', link: '/8'},
        {title: 'Здоровая еда', link: '/9'},
        {title: 'Здоровая еда2', link: '/10'},
        {title: 'Здоровая еда3', link: '/11'},
      ]
    },
    getters: {
      ADDRESSES: state => {
        return state.addresses;
      },
      LOGIN_STATUS: state => {
        return state.login_status;
      },
      DIALOG_LOGIN: state => {
        return state.dialog_login;
      },
      NAVBAR_LINKS: state => {
        return state.products_list.slice(0, 8)
      }
    },
    mutations: {
      SET_INPUT_SEARCH_ADDRESS: (state, payload) => {
        state.inputSearchAddress = payload;
      },
      SET_ADDRESSES: (state, payload) => {
        state.addresses = JSON.parse(payload)
      },
      TOGGLE_DIALOG_LOGIN: (state) =>{
        state.dialog_login = !state.dialog_login;
      },
      LOG_OUT: (state) => {
        state.login_status = false;
      },
      LOG_IN: (state) => {
        state.login_status = true;
      }
    },
    actions: {
      GET_ADDRESSES: async (context, value) => {
        let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        let token = "6ba9600740f87a03b9b94831b3317f8ea7e1ec17";
        let query = value;

        let options = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
          },
          body: JSON.stringify(
            {
              query: query,
              count: 3,
              "from_bound": { "value": "street" },
              "to_bound": { "value": "street" },
              "locations": [{ "region": "москва" }],
              "restrict_value": true
            }
          )
        }

        fetch(url, options)
          .then(response => response.text())
          .then(result => context.commit('SET_ADDRESSES', result))
          .catch(error => console.log("error", error));

      },
    }
  })
}

export default store
