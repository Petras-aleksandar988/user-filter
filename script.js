const result = document.querySelector("#result");
const search = document.querySelector("#filter");

const listItems = [];

search.addEventListener("input", (e)=>filterData(e.target.value) )
getData()
console.log(listItems);
async function getData() {
    let response = await fetch("https://randomuser.me/api?results=100");
    
    let {results} = await response.json()

    result.innerHTML = ""

    results.forEach(user => {
        let li = document.createElement("li")
        listItems.push(li)
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
        `;
result.append(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
           item.classList.remove("hide")
        } else {
           item.classList.add("hide");
            
        }
       
   })
}