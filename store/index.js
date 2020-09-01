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
      ],
      slider_list: [
        {
          id: '0',
          name: 'Название ресторана',
          delivery_price: '0',
          delivery_time: '20-30',
          minimal_price: '',
          rate: '4.7',
          image: 'https://media-exp1.licdn.com/dms/image/C4E1BAQGZ7wzFPFeyJg/company-background_10000/0?e=2159024400&v=beta&t=WpNDr-pkug9bElz021Toi_uOO7WGJozrK1u5zJTuLxM'
        },
        {
          id: '1',
          name: 'Название ресторана',
          delivery_price: '0',
          delivery_time: '20-30',
          minimal_price: '',
          rate: '4.7',
          image: 'https://mnogoigr96.ru/wp-content/uploads/k-lf-c-nsrdjq_9.jpg'
        },
        {
          id: '2',
          name: 'Название ресторана',
          delivery_price: '0',
          delivery_time: '20-30',
          minimal_price: '200',
          rate: '4.7',
          image: 'https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w'
        },
        {
          id: '3',
          name: 'Название ресторана',
          delivery_price: '0',
          delivery_time: '20-30',
          minimal_price: '200',
          rate: '4.7',
          image: 'https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w'
        },
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
      },
      SLIDER_LIST: state => {
        return state.slider_list
      }
    },
    mutations: {
      SET_INPUT_SEARCH_ADDRESS: (state, payload) => {
        state.inputSearchAddress = payload;
      },
      SET_ADDRESSES: (state, payload) => {
        state.addresses = JSON.parse(payload)
      },
      TOGGLE_DIALOG_LOGIN: (state) => {
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
              "from_bound": {"value": "street"},
              "to_bound": {"value": "street"},
              "locations": [{"region": "москва"}],
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
