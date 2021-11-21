// const requests = {
//     fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=123`,
//     fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&&language=en-US`,
//     fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99 `,
// }

const API_KEY = process.env.REACT_APP_API_KEY;
const REGION = process.env.REACT_APP_REGION

console.log(API_KEY)
export const sections = {
    movies: {
        sections: [
            { title: 'Popular on Netflix', endpoint: `/movie/popular?api_key=${API_KEY}` },
            {
                title: 'Romance',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Music',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10402&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Sci-Fi',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=878&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Netflix Original',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_watch_providers=8&watch_region=${REGION}`,
                size: 'lg'
            },
            {
                title: 'Drama',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Fantasy',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=14&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Crime',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Mystery',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Action',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Comedy',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Animation',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Adventure',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=12&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Family',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'TV',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10770&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Documentary',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'War',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10752&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'History',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=36&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Western',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=37&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Thriller',
                endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=${REGION}`
            }
        ],
        helpers: {
            searchMovie: `/search/movie?api_key=${API_KEY}&query={{query}}`,
            fetchMovieGenres: `genre/movie/list?api_key=${API_KEY}`,
            fetchMovieVideos: `/movie/{{movie_id}}/videos?api_key=${API_KEY}`,
            fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`,
            fetchMovieRecommendations: `/movie/{{movie_id}}/recommendations?api_key=${API_KEY}`,
            fetchMovieCredits: `/movie/{{movie_id}}/credits?api_key=${API_KEY}`
        }
    },
    series: {
        sections: [
            { title: 'Popular on Netflix', endpoint: `/tv/popular?api_key=${API_KEY}` },
            {
                title: 'War Politics',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10768&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Sci-Fi & Fantasy',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Documentary',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Netflix Original',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_watch_providers=8&watch_region=${REGION}`,
                size: 'lg'
            },
            {
                title: 'Comedy',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Animation',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Drama',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Family',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Mystery',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Action-Adventure',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10759&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Crime',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Reality',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10764&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Soap',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10766&with_watch_providers=8&watch_region=${REGION}`
            },
            {
                title: 'Talk',
                endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10767&with_watch_providers=8&watch_region=${REGION}`
            }
        ],
        helpers: {
            searchTV: `/search/tv?api_key=${API_KEY}&query={{query}}`,
            fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`,
            fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
            fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
            fetchTVAggregateCredits: `/tv/{{tv_id}}/aggregate_credits?api_key=${API_KEY}`,
            fetchTVRecommendations: `/tv/{{tv_id}}/recommendations?api_key=${API_KEY}`,
            fetchTVSeason: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`
        }
    }
};







