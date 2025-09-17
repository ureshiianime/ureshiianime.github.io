// Animes a mostrar en el carrousel de la página de inicio.
const carouselAnimeIds = [1, 2, 3, 4, 5, 6];

// AnimeData UreshiiAPI.
const animeData = [
    {
        id: 6,
        title: "Boruto: Naruto Next Generations",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/65e3612d8770257c6a0820412be2cd37.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR75Q020Y-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GR75Q020Y-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "En Konoha han entrado en una era de paz y modernidad. Los altos edificios despuntan en las calles, las pantallas gigantes muestran imágenes de todo tipo y los medios de transporte conectan los vairos distritos. Pese a que sigue siendo una aldea ninja, el número de civiles ha aumentado y la vida de los ninja ha cambiado.  Boruto Uzumaki es hijo del Séptimo Hokage, Naruto Uzumaki, y se ha unido a la Academia Ninja para aprender. Otros estudiantes lo menosprecian de inmediato y consideran que solo está ahí por ser hijo del Hokage, pero pronto Boruto disipará todas esas dudas sobre él.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1",
                episodes: 293,
                slug: "boruto-naruto-next-generations-tv"
            }
        ],
        generatedDate: "2025-09-17T08:56:52.660Z"
    },
    {
        id: 5,
        title: "Naruto Shippuden",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/01ec367b44f0a568430a957e042639af.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GYQ4MW246-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GYQ4MW246-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "Naruto quiere ser el mejor ninja en la tierra. La acción comienza tras los dos años y medio que el protagonista, Naruto Uzumaki, ha pasado entrenando con su maestro Jiraiya. En ella reaparecen todos los personajes de la serie anterior pero con más experiencia y fuerza. Además, la Organización Akatsuki entra en acción, tras su breve aparición en la parte anterior, y se revelan sus objetivos.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1",
                episodes: 500,
                slug: "naruto-shippuden-hd"
            }
        ],
        generatedDate: "2025-09-17T08:46:44.979Z"
    },
    {
        id: 4,
        title: "Naruto",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY9PJ5KWR-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GY9PJ5KWR-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: true,
        contentRating: "+14",
        contentWarning: "",
        description: "Naruto Uzumaki es un niño marginado en la aldea ninja en la que vive. En su interior reside el poder de una bestia que estuvo al borde de destruir el pueblo años atrás, el Kyubi, el zorro de nueve colas, lo que hace que nadie quiera acercarse a él por considerarlo maldito. Pese a su soledad y su tristeza, Naruto quiere ser un ninja, pero no uno cualquiera: quiere ser Hokage, el líder de la aldea. En su camino, sus convicciones atraerán a muchos amigos y compañeros de viaje.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1",
                episodes: 220,
                slug: "naruto"
            }
        ],
        generatedDate: "2025-09-17T08:42:17.268Z"
    },
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
