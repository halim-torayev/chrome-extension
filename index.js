let myLeads = ['www.github.com', 'www.instagram.com', 'www.facebook.com']
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)

})  

for (let i = 0; i < myLeads.length; i++){
    ulEl.textContent += myLeads[i] + "\n"
}