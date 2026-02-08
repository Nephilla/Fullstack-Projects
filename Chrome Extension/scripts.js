let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))



// Renders leads if truey

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render()
}

// Adds to array & localStorage from input field value

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render()

    console.log(localStorage.getItem("myLeads"))
})

// Clears array & localStorage

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render()
})

// Render function to display myLeads[] in a <li>

function render() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
            <a target="_blank" href="${myLeads[i]}"> 
            ${myLeads[i]}
            </a >
        </li>
        `
    }
    ulEl.innerHTML = listItems
}
