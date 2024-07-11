    const contact = document.createElement("div")
    contact.classList.add("contact")
    const title = document.createElement("h1")
    title.innerHTML = "Contact"
    const info = document.createElement("p")
    info.innerHTML = "We are a team of passionate travelers and adventurers who want to share our love for exploring new places and cultures with others."
    const contactInfo = document.createElement("div")
    contactInfo.classList.add("contact-info")
    const phone = document.createElement("p")
    phone.innerHTML = "Phone: +84 988 990 666"
    const email = document.createElement("p")
    email.innerHTML = "Email: Tourandlife@gmail.com"
    const social = document.createElement("div")
    social.classList.add("social")
    const facebook = document.createElement("a")
    facebook.href = "https://www.facebook.com/Tourandlife"
    facebook.innerHTML = "Facebook"
    const twitter = document.createElement("a")
    twitter.href = "https://www.twitter.com/Tourandlife"
    twitter.innerHTML = "Twitter"
    social.appendChild(facebook)
    social.appendChild(twitter)
    contactInfo.appendChild(phone)
    contactInfo.appendChild(email)
    contactInfo.appendChild(social)
    contact.appendChild(title)
    contact.appendChild(info)
    contact.appendChild(contactInfo)
    container.appendChild(contact)

