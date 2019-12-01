// fetch("https://api.jikan.moe/v3/anime/1/news") //Noticias anime
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log("Error "+ err))

fetch("https://api.jikan.moe/v3/search/anime?q=boku no hero academia&limit=10") 
.then(res => res.json())
.then(data => {
    console.log(data);
    for(let i=0; i<data.results.length; i++) {
        document.getElementById("data").innerHTML +=   `<div class="anime">
                                                            <img src=${data.results[i].image_url} class="picture">
                                                            <div class="info">
                                                                <h3>${data.results[i].title}</h3>
                                                                <hr/>
                                                                <p><b>Type</b>: ${data.results[i].type}</p>
                                                                <p><b>Episodes</b>: ${data.results[i].episodes}</p>
                                                                <p><b>Score</b>: ${data.results[i].score}</p>
                                                                <p><b>Synopsis</b>: ${data.results[i].synopsis}</p>
                                                            </div>
                                                        </div>`;
    }
   return data;
})
.then( data => {
    var animes = document.getElementsByClassName("anime");
    var arr = Array.from(animes)
    console.log(arr);

    for(let i=0; i<arr.length; i++) {
        arr[i].addEventListener('mouseenter', function(){
            for(let j=0; j<arr.length; j++) {
                if(arr[i] != arr[j]) {
                    arr[j].style.filter = "blur(1.5px)";
                }
            }
        })
        arr[i].addEventListener('mouseleave', function(){
            for(let j=0; j<arr.length; j++) {
                if(arr[i] != arr[j]) {
                    arr[j].style.filter = "blur(0px)";
                }
            }
        })

        arr[i].addEventListener('click', function(){
            console.log(data.results[i].mal_id);    
            fetch("https://api.jikan.moe/v3/anime/"+data.results[i].mal_id) //Individuales
            .then(res => res.json())
            .then(data => {
                console.log(data);
                var yt_url = data.trailer_url.slice(0, -1)+"0"; //Quitar autoplay
                document.getElementById("data").innerHTML= '';  
                document.getElementById("data").innerHTML +=    `<a href="index.html" class="back">Back</a>
                                                                <div class="oneAnime">
                                                                    <h2>${data.title}</h2>
                                                                    <a href="Characters.html">characters</a>
                                                                    <iframe class="ytVideo" src=${yt_url} frameborder="0"></iframe>
                                                                    <div class="infoPosition">
                                                                        <div class="details1">
                                                                            <img src=${data.image_url}>
                                                                        </div>
                                                                        <div class="details2">
                                                                            <p><b>Synopsis</b> <hr class="divide"/>${(data.synopsis === null)?"Próximamente.":data.synopsis}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
            })
            .catch(err => console.log("Error "+ err))
        })
    }

    
    
})
.catch(err => console.log("Error "+ err))





fetch("https://api.jikan.moe/v3/anime/31964/episodes") //personajes anime
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log("Error "+ err))


