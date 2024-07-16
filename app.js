const API_URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")

async function fetchUsers(api){
    let reponse = await fetch(`${api}/users`)

    reponse
        .json()
        .then((res)=> createCard(res))
        .catch((err)=> console.log(err))
}


fetchUsers(API_URL)


function createCard(data){
    data.forEach((user)=>{
        let card = document.createElement("div")
        card.classList.add("card",)
        card.innerHTML =`
            <h3>${user.name}</h3>
            <h4>${user.username}</h4>
            <h5>${user.email}</h5>`
        wrapper.appendChild(card)
    })
}