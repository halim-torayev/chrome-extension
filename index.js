let myLeads = ['www.github.com', 'www.instagram.com', 'www.facebook.com']
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)

})  

for (let i = 0; i < myLeads.length; i++){
    console.log(myLeads[i] + " ")
}