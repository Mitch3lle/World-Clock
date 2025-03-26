setInterval( function(){


let losAngelesElement = document.querySelector("#los-angeles");

let losAngelesDateElement = document.querySelector(".date");
let losAngelesTimeElement = document.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss[<small>]A[</small>]");


/*let parisElement = document.querySelector("#paris");

let parisDateElement = document.querySelector(".date");
let parisTimeElement = document.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>]");
},1000);*/
let parisElement = document.querySelector("#paris");

let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>]");
},1000);