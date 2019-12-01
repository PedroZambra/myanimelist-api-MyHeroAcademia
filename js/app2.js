fetch("https://api.jikan.moe/v3/anime/38408/characters_staff") //personajes anime
.then(res => res.json())
.then(data => {
    console.log(data);
    document.getElementById("dataCharacters").innerHTML += `<a href="index.html" class="back">Back</a></Volver>`;
    for(let i=0; i<data.characters.length; i++) {
        document.getElementById("dataCharacters").innerHTML +=   `<div class="character">
                                                                    <h3>${data.characters[i].name}</h3>
                                                                    <img src=${data.characters[i].image_url}>
                                                                  </div>`
    }
})
.catch(err => console.log("Error "+ err))