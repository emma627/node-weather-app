const form = document.querySelector("form")
const input = document.querySelector("input")
const messageOneImg = document.querySelector(".messageOneImg")
const messageTwoImg = document.querySelector(".messageTwoImg")
const messageOne = document.querySelector(".messageOne")
const messageTwo = document.querySelector(".messageTwo")

const imgOne = document.createElement("img")
const imgTwo = document.createElement("img")

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = input.value
   

fetch(`/weather?address=${location}`)
.then((response)=>{
    response.json()
    .then( (data)=>{
        if(data.error){
            messageOne.textContent = data.error
            input.value = ""
        }else{
            imgOne.src ="/img/location.png"
            imgOne.className="locationIcon"
            messageOneImg.appendChild(imgOne)
            messageOne.textContent = data.location
            imgTwo.src ="/img/weather-news.png"
            imgTwo.className="weatherNewsIcon"
            messageTwoImg.appendChild(imgTwo)
            messageTwo.textContent = data.forecast
            input.value = ""

        }
    })
})
    
})