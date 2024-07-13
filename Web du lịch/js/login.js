import app from './app.js';
import Register from './register.js/index.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
class Login {
    $txtEmail
    $txtPassword
    $btnSubmit
    $formLogin
    $txtGotoRegister
    $firebaseAuth
    constructor(firebaseAuth) {
        this.$txtEmail = document.createElement("input")
        this.$txtEmail.placeholder = "Email"
        this.$txtEmail.type = 'email'

        this.$txtPassword = document.createElement("input")
        this.$txtPassword.placeholder = "holder"
        this.$txtPassword.type = "password"
            
        this.$formLogin = document.createElement("form")
        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.innerHTML = "login"

        this.$txtGotoRegister = document.createElement("a")
        this.$txtGotoRegister.innerHTML = "no account yet?"

        this.$txtGotoRegister.addEventListener("click", this.gotoRegister)

        this.$firebaseAuth = firebaseAuth
    }

    gotoRegister = () => {
        const register = new Register(this.$firebaseAuth)
        app.changeActiveScreen(register)
    }

    initRender = (container) => {

       const Flexcontainer = document.createElement("div")
       Flexcontainer.classList.add("d-flex", "centering", "flex-column")    
       const title = document.createElement("h2")
       title.innerHTML = "login"
       
        Flexcontainer.appendChild(title)
        Flexcontainer.appendChild(this.$txtEmail)
        Flexcontainer.appendChild(this.$txtPassword)
        Flexcontainer.appendChild(this.$btnSubmit)
        Flexcontainer.appendChild(this.$txtGotoRegister)

        this.$formLogin.appendChild(Flexcontainer)
        this.$formLogin.addEventListener("submit", this.login)
        container.appendChild(this.$formLogin)
    }

    login = (e) => {
        e.preventDefault()
        const email = this.$txtEmail.value
        const pass = this.$txtPassword.value

        signInWithEmailAndPassword(this.$firebaseAuth, email, pass)
            .then((userCre) => {
                var user = userCre.user
                console.log(user)
                localStorage.setItem('token', user.accessToken)
        }).catch((error) => {
                alert(error.message)
        })  
    }
}
export default Login