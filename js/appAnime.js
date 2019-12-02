var anime_id =location.search.slice(1);

fetch("https://api.jikan.moe/v3/anime/"+anime_id) //Individuales
.then(res => res.json())
.then(data => {
    console.log(data);
    var yt_url = data.trailer_url.slice(0, -1)+"0"; //Quitar autoplay
    document.getElementById("dataAnime").innerHTML +=    `<a href="index.html" class="back"><i class="fas fa-arrow-alt-circle-left"></i></a>
                                                        <div class="oneAnime">
                                                            <h2>${data.title}</h2>
                                                            <nav class="menuAnime">
                                                                <ul>
                                                                    <li><a href="Characters.html?${data.mal_id}">Characters</a></li>
                                                                    <li><a href="episodes.html?${data.mal_id}">Episodes</a></li>
                                                                    <li><a href="news.html?${data.mal_id}">News</a></li>
                                                                </ul>
                                                            </nav>
                                                            <div class="infoPosition">
                                                                <div class="details1">
                                                                    <img src=${data.image_url}>
                                                                </div>
                                                                <div class="details2">
                                                                    <p><b>Synopsis</b> <hr class="divide"/>${(data.synopsis === null)?"Próximamente.":data.synopsis}</p>
                                                                </div>
                                                            </div>
                                                            <iframe class="ytVideo" src=${yt_url} frameborder="0"></iframe>
                                                        </div>`;
})
.catch(err => console.log("Error "+ err))