// Animes a mostrar en el carrousel de la página de inicio.
const carouselAnimeIds = [1, 2, 3, 4, 5, 6];

// AnimeData UreshiiAPI.
const animeData = [
    {
        id: 3,
        title: "Ouran High School Host Club",
        image: "https://m.media-amazon.com/images/M/MV5BMGMzZTQyMmUtNWUwZS00NDU2LWE1Y2YtZWVkNGM1MGNkZDFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRGGJWD2R-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GRGGJWD2R-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "Te enamorarás de los chicos del Club de Anfitriones de Ouran: Tamaki es un auténtico romántico. Kaoru y Hikaru te ofrecen muestras de amor fraternal. Adorarás al inteligente Kyoya, a la inocente Honey y al varonil Mori. Ah, y no te olvides de Haruhi. Él sabe lo que quieren las chicas; claro, ¡es porque él también es una chica! Los anfitriones deben hacer todo lo posible por ocultar su secreto, pero Haruhi se lo pasa bomba poniendo patas arriba su mundo perfecto.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1",
                episodes: 26,
                slug: "ouran-host-club"
            }
        ],
        generatedDate: "2025-08-28T16:25:21.872Z"
    },
    {
        id: 2,
        title: "DAN DA DAN",
        image: "https://a.storyblok.com/f/178900/1064x1596/bccf76f674/dandadan-key-art-tall.png/m/filters:quality(95)format(webp)",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GG5H5XQ0D-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GG5H5XQ0D-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+16",
        contentWarning: "",
        description: "Cuando Momo, una estudiante de instituto de una familia de médiums espirituales, conoce a su compañero de clase Okarun, un friki del ocultismo, discuten: Momo cree en los fantasmas pero no en los extraterrestres, y Okarun cree en los extraterrestres pero no en los fantasmas. Cuando resulta que ambos fenómenos son reales, en Momo surge un poder oculto y en Okarun el poder de una maldición. Juntos, deberán desafiar a las fuerzas paranormales que amenazan su mundo.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1",
                episodes: 12,
                slug: "dandadan"
            },
            {
                number: 2,
                title: "Temporada 2",
                episodes: 12,
                slug: "dandadan-2nd-season",
                newEpisode: {
                    status: "Nuevo Episodio",
                    date: "2025-07-03",
                    releasedEpisodes: 8,
                    nextEpisode: 9,
                    broadcastInterval: 7
                }
            }
        ],
        generatedDate: "2025-08-27T11:04:12.494Z"
    },
    {
        id: 1,
        title: "Black Clover",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1920/keyart/GRE50KV36-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GRE50KV36-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: true,
        contentRating: "+14",
        contentWarning: "",
        description: "En un mundo en el que la magia lo es todo, Asta y Yuno son dos niños que encuentran abandonados el mismo día en una iglesia. Mientras que Yuno crece demostrando tener unos grandes poderes mágicos, Asta parece ser la única persona en el mundo que no posee capacidad mágica alguna. Eso no importará a los dos jóvenes, que aspirarán a alcanzar el puesto de Rey Mago, el mejor mago de todos. Pero para ello tendrán que ser seleccionados primero por una Orden de Caballeros Mágicos, ¡y Asta no tiene magia!",
        seasons: [
            {
                number: 1,
                title: "Temporada 1",
                episodes: 170,
                slug: "black-clover-tv"
            }
        ],
        generatedDate: "2025-09-07T11:08:44.997Z"
    }
];

const animeConfig = {
    defaultStatus: "pending",
    defaultLinks: {
        baseUrl: "https://www3.animeflv.net/ver/"
    },
    defaultSubtitled: true, 
    defaultDubbed: false
};
