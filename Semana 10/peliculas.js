async function fetchMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ce628b679dmshd9eba26283a6f28p189baejsnabf23a061ca2',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayMovies(result)
    } catch (error) {
        console.error(error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies");
    let html = ""
    movies.forEach(movie => {
        const tarjeta = `
        <div class = "col-md-3">
            <div class "card">
                <img src = "${movie.image}" class = "card-img-top">
                <div class = "card-body">
                    <h5 class = "card-title"> ${movie.title} </h5>
                    <p> ${movie.description} </p>
                </div>
            </div>
        </div>
        `;
        html += tarjeta 
    });
    moviesContainer.innerHTML = html
}

fetchMovies()