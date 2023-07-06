import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles/app.css'

import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from "sweetalert2";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueSweetalert2);
app.mount('#app');

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    timeout: 5000,
    crossdomain: true,
});

api.interceptors.request.use(
    (config) => {
        // exibe o loader antes da requisição ser feita
        Swal.fire({
            title: 'Carregando...',
            text: 'Por favor, aguarde...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        return config;
    },
    (error) => {
        // Caso ocorra um erro na requisição
        Swal.close();

        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => {
        // Remove o loader após a resposta ser recebida
        Swal.close();

        return response;
    },
    (error) => {
        // Caso ocorra um erro na resposta
        Swal.close();

        return Promise.reject(error);
    },
);

export default api;


