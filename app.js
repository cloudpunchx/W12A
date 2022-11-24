// params found in docs of API
function search(){
    axios.request({
        url: `https://rickandmortyapi.com/api/character`,
        params: {
            name: document.getElementById(`searchBar`).value
        }
    }).then(characterSuccess).catch(characterFailure);
}

// debugger not working
// can't get innerHTML to clear, but I changed it to innertext = Test and the text showed up
function characterSuccess(response){
    // response.data.results because the variables were nested in the array-object
    let data = response.data.results;
    // let searchResults = document.getElementById(`characterProfiles`);
    // searchResults.innerHTML = ``;
    // this didn't work either
    // document.getElementById(`characterProfiles`).innerHTML = ``;
    // for of loop because we don't care what order this happens in
    for (let profile of data){
        // inserting the data served to us
        document.body.insertAdjacentHTML(`beforeend`, `<h2>${profile.name}`)
        document.body.insertAdjacentHTML(`beforeend`, `<p>${profile.status}</p>`)
        document.body.insertAdjacentHTML(`beforeend`, `<img src="${profile.image}" alt="${profile.name}">`)
    }
} 

function characterFailure(error){
    console.log(error);
}

document.getElementById(`searchButton`).addEventListener(`click`, search);