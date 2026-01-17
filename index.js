let myLeads = ['www.github.com', 'www.instagram.com', 'www.facebook.com']
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)

})  

let listItems = ""
for (let i = 0; i < myLeads.length; i++){
    listItems += '<li>' + myLeads[i] + '</li>'

    //this way of implementing is more advanced and more prefered!!!
    // const li = document.createElement('li')
    // li.textContent = myLeads[i]
    // ulEl.append(li)
} 
ulEl.innerHTML += listItems


