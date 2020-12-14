const textarea=document.querySelector(".textarea");
const btn=document.querySelector(".btn");
btn.addEventListener("click",clickbtn)
const img=document.querySelector(".content .img")
const contentheading1=document.querySelector(".content .heading1")
const contentheading2=document.querySelector(".content .heading2")
const contentheading3=document.querySelector(".content .heading3")
const contentheading4=document.querySelector(".content .heading4")
const contentheading5=document.querySelector(".content .heading5")
const contentheading6=document.querySelector(".content .heading6")
const contentheading7=document.querySelector(".content .heading7")


function error(){
    alert("oops something happened")
}




function clickbtn(){

fetch(`https://api.weatherapi.com/v1/current.json?key=6b92d33f29994aeebb323446202709&q=${textarea.value}`)
.then(reponse=>{ return reponse.json()})
.then(data=>{
    
    
    
    img.classList.add("imgtag")
    console.log(img)
    img.setAttribute("src"," ")
    img.src=(data.current.condition.icon)
    
    

    contentheading1.innerText=data.location.name
    contentheading2.innerText=data.location.region
    contentheading3.innerText=data.location.country
    contentheading4.innerText=data.current.temp_c + " ℃"
    contentheading5.innerText=data.current.condition.text
    contentheading6.innerText="Humidity "+data.current.humidity
    contentheading7.innerText="wind_kph "+data.current.wind_kph
})
.catch(error)

}