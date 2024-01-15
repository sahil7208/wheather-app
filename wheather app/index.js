const apikey = "a60310426e9812b04e80d2a70b54d209";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid="+`${apikey}`+"&q=";
// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=a60310426e9812b04e80d2a70b54d209&units=metric
console.log(apiurl);
const search = document.querySelector(".searchbar input");
const searchbtn = document.querySelector(".searchbar img");
const image = document.querySelector(".clear img");
 const box = document.getElementById("a");
 const box1 = document.getElementById("b");
 const box2 = document.getElementById("c");

 async function checkWheather(city){
    
    const response = await fetch(apiurl+city);
    
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C" ;
    document.querySelector(".humidity span").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind span").innerHTML = data.wind.speed + " km/hr";
    

    if(data.weather[0].main == "Clouds"){
       image.src ="./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        image.src = " ./images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        image.src = " ./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        image.src = " ./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        image.src = " ./images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        image.src = " ./images/snow.png";
    }
    box.style.display='block';
    box1.style.display='block';
    box2.style.display='grid';
    
}

searchbtn.addEventListener("click", ()=>
{checkWheather(search.value)} );