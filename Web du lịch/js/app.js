import Login from "./log-in.js";
import Register from "./register.js/index.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import 'https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
const firebaseConfig = {
    apiKey: "AIzaSyDcYwibruZQGBcqwsbxQZNRDDbw6FpzJrM",
    authDomain: "spck-jsi08.firebaseapp.com",
    projectId: "spck-jsi08",
    storageBucket: "spck-jsi08.appspot.com",
    messagingSenderId: "145356171401",
    appId: "1:145356171401:web:9b813ea03c5ed60931fe58",
    measurementId: "G-GJVVPCFS57"
  };
const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);
class App {
    container
    activeScreen
    constructor(container) {
        this.container = container
    }

    changeActiveScreen(screen) {
        this.container.innerHTML = ""
        this.activeScreen = screen
        this.activeScreen.initRender(this.container)
    }
}
const container = document.getElementById("app")

const login = new Login(firebaseAuth)
const app = new App(container)
app.changeActiveScreen(login)
// const register = new Register()
// const app = new App(container)
// app.changeActiveScreen(register)
function createElement(tagname,prop){
    const element = document.createElement(tagname)
    for (const key in prop){
        element[key] = prop[key]
    }
    return element
}
let div = createElement("div",{
    innerText: "hello",
    className: "hello",
    id: "hello",
})
console.log(div)
export default app