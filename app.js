const API_URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")
const loader = document.querySelector(".loader")

async function fetchUsers(api){
    let reponse = await fetch(`${api}/users`)

    reponse
        .json()
        .then((res)=> createCard(res))
        .catch((err)=> console.log(err))
        .finally(()=>{
            loader.style.display = "none"
        })
}


fetchUsers(API_URL)


function createCard(data){
    data.forEach((user)=>{
        let card = document.createElement("div")
        card.classList.add("card",)
        card.innerHTML =`
            <div class="card_img">
                <img src="tg_avatarka.jpg" alt="">
            </div>
            <h3>${user.name}</h3>
            <h4>${user.username}</h4>
            <h5>${user.email}</h5>`
        wrapper.appendChild(card)
    })
}