fetch("https://newsdata.io/api/1/news?apikey=pub_93757ff541fdf5faeb25c49ef763515cf6f9&q=news&country=in&language=en")
    .then(data => data.json())
    .then(Data => {
        const Text = Data.results[0].title;
        const Element = document.getElementById('jokeElement');

        Element.innerHTML = Text;
    })