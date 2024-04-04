import app from"./app.js"
import Login  from "./log-in.js/index.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"

class Register {
    $txtName
    $txtEmail
    $txtPassword
    $txtConfirmPassword
    $btnSubmit
    $formRegister
    $GotoLogin
    $ErrorMessage
    $firebaseAuth
    constructor(firebaseAuth) {
        
        this.$txtName = document.createElement("input")
        this.$txtName.placeholder = "name"
        this.$txtName.type = "Name"

        this.$txtEmail = document.createElement("input")
        this.$txtEmail.placeholder = "Email"
        this.$txtEmail.type = "email"

        this.$txtPassword = document.createElement("input")
        this.$txtPassword.placeholder = "password"
        this.$txtPassword.type = "password"
        
        this.$txtConfirmPassword = document.createElement("input")
        this.$txtConfirmPassword.placeholder = "conform password"
        this.$txtConfirmPassword.type = "password"

        this.$formRegister = document.createElement("form")
        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.innerHTML = "signin"
        this.$btnSubmit.addEventListener("click", this.register)

        this.$txtGotoLogin = document.createElement("a")
        this.$txtGotoLogin.innerHTML = "no account yet?"

        this.$txtGotoLogin.addEventListener("click", this.gotoLogin)
        this.$ErrorMessage = document.createElement("p");
        // this.$ErrorMessage.classList.add("alert");

        this.$firebaseAuth = firebaseAuth

    }
    setError = (content) => {
        this.$ErrorMessage.innerHTML = content
        if(content == "") {
            this.$ErrorMessage.style.display = "none"
        } else {
            this.$ErrorMessage.style.display = "block"
        }
    }
    gotoLogin = () => {
        const login = new Login()
        app.changeActiveScreen(login)
    }
    register = (e) => {
        e.preventDefault()
        const email = this.$txtEmail.value
        const pass = this.$txtPassword.value
        const name = this.$txtName.value
        const confirm = this.$txtConfirmPassword.value
        this.setError("")

        if (email === "") {
            this.setError("Email cannot be empty!")
            return
        }
        if (pass === "") {
            this.setError("Pass word cannot be empty!")
            return
        }
        if (userName === "") {
            this.setError("User name cannot be empty!")
            return
        }
        if (confirmPass === "") {
            this.setError("Confirm your password!")
            return
        }
        if (confirmPass !== pass) {
            this.setError("Your password not match")
            return


        }
        createUserWithEmailAndPassword(this.$firebaseAuth, email, pass)
            .then((userCre) => {
                var user = userCre.user
                console.log(user)
        }).catch((error) => {
            console.log(error.code)
            console.log(error.message)
            alert(error.message)
            this.setError(error.message)
        })
    }

    initRender = (container) => {
       const Flexcontainer = document.createElement("div")
       Flexcontainer.classList.add("d-flex", "centering", "flex-column")
       const title = document.createElement("h2")
       title.innerHTML = "Register"
       
        Flexcontainer.appendChild(title)
        Flexcontainer.appendChild(this.$txtEmail)
        Flexcontainer.appendChild(this.$txtPassword)
        Flexcontainer.appendChild(this.$txtConfirmPassword)
        Flexcontainer.appendChild(this.$btnSubmit)
        Flexcontainer.appendChild(this.$txtGotoLogin)
        Flexcontainer.appendChild(this.$ErrorMessage)

        this.$formRegister.appendChild(Flexcontainer)
        this.$formRegister.addEventListener("submit", this.register)
        container.appendChild(this.$formRegister)
    }

}
export default Register