'use strict'
console.log('holis');


const YODA_API_URL = "https://api.funtranslations.com/translate/yoda.json";
const CUOTE_API_URL = "https://api.adviceslip.com/advice";

const btn = document.querySelector('#btn');
const heroText = document.querySelector('#hero-title');
let advice;

btn.onclick = frase;

function getURL(text) {                   // API URL builder function
    return YODA_API_URL + "?" + "text=" + text;
  }

 function frase(YodaUrl){
    fetch(CUOTE_API_URL).then((response)=>response.json()).then((tip)=>{
        advice = tip.slip.advice
        heroText.innerHTML = `"${advice}"`;
    function errorHandler(error) {
        alert("Yoda is tired, try again later (API call limit exceeded).");  // Error handling function 
         }
    function translate(){
        fetch(getURL(advice))
        .then((response) => response.json())
        .then(json => {
          let translatedtext = json.contents.translated;
          advice = translatedtext;
          console.log(advice);
          heroText.innerHTML = `"${advice}"`;
        })
        .catch(errorHandler);
    }
    translate();
    heroText.style.fontSize = "2.5rem";
    btn.innerHTML = `ask again`;
    console.log(advice);
})
}






