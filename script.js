const textarea=document.querySelector(".textarea");
const btn=document.querySelector(".btn");
btn.addEventListener("click",clickbtn)
const contentheading1=document.querySelector(".content .heading1")
const contentheading2=document.querySelector(".content .heading2")
const contentheading3=document.querySelector(".content .heading3")
const contentheading4=document.querySelector(".content .heading4")
const contentheading5=document.querySelector(".content .heading5")


function error(){
    alert("oops something happened")
}

function clickbtn(){

fetch(`https://api.weatherapi.com/v1/current.json?key=6b92d33f29994aeebb323446202709&q=${textarea.value}`)
.then(reponse=>{ return reponse.json()})
.then(data=>{
    console.log(data)
    contentheading1.innerText=data.location.name
    contentheading2.innerText=data.location.region
    contentheading3.innerText=data.location.country
    contentheading4.innerText=data.current.temp_c + " ℃"
    contentheading5.innerText=data.current.condition.text
})
.catch(error)

}