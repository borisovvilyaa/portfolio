// Importing necessary modules
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Specify the correct path to your routing file
import './assets/css/main.css';

// Creating a Vue app instance
const app = createApp(App);

// Using the router in the app
app.use(router);

// Mounting the app on the specified element with ID 'app'
app.mount('#app');
