const demo = document.getElementById("demo");
const demoContainer = document.getElementById("demo-container");
const closeDemo = document.getElementById("close-demo");


const call = document.getElementById("call");
const callContainer = document.getElementById("call-container");
const closeCall = document.getElementById("close-call");


const reach = document.getElementById("reach");
const contactContainer = document.getElementById("contact-container");
const closeReach = document.getElementById("close-contact");


const openToggle = document.getElementById("open-toggle");
const navlistContainer = document.getElementById("navlist-container");
const closeToggle = document.getElementById("close-toggle");


demo.addEventListener("click", () => {
    demoContainer.classList.add("show");
});

closeDemo.addEventListener("click", () => {
    demoContainer.classList.remove("show");
});

call.addEventListener("click", () => {
    callContainer.classList.add("show");
});

closeCall.addEventListener("click", () => {
    callContainer.classList.remove("show");
});

reach.addEventListener("click", () => {
    contactContainer.classList.add("show");
});

closeReach.addEventListener("click", () => {
    contactContainer.classList.remove("show");
});

openToggle.addEventListener("click", () => {
    navlistContainer.classList.add("show");
});

closeToggle.addEventListener("click", () => {
    navlistContainer.classList.remove("show");
});