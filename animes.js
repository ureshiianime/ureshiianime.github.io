// Animes a mostrar en el carrousel de la página de inicio.
const carouselAnimeIds = [1, 2, 3, 4, 5, 21];

// AnimeData UreshiiAPI.
const animeData = [
    {
        id: 21,
        title: "Película | Black Clover: Mahou Tei no Ken",
        image: "https://image.tmdb.org/t/p/original/nqaSA9MW9nZLbl7NKVDlTQ2Fwwo.jpg",
        banner: "https://files.peakd.com/file/peakd-hive/helchjr/23wC1UDZyHoGYFiEhUHA2NYWFR3861vPbM15hinQoRoVTTix7ZnLt8vnvy4MUCb3HVHZR.png",
        logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76af57fc-7d8b-4116-8c09-75841b6d2da8/dbmt5i0-681aa9ed-9f39-43f6-9d29-cfb23030bf9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NmFmNTdmYy03ZDhiLTQxMTYtOGMwOS03NTg0MWI2ZDJkYTgvZGJtdDVpMC02ODFhYTllZC05ZjM5LTQzZjYtOWQyOS1jZmIyMzAzMGJmOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.68cW1Ac8gR-bV2B8_Z1RM9dVVCw9PSF0Mk58aDvBgRI",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "Black Clover: Mahou Tei no Ken (2023) es la primera película de la popular serie Black Clover. La historia se centra en Asta y los Caballeros Mágicos enfrentándose al regreso de cuatro antiguos Reyes Magos, revividos para destruir el Reino del Trébol. Entre ellos destaca Conrad Leto, un ex Rey Mago con ideales radicales que busca reformar el mundo mágico. Con intensas batallas, poderes épicos y animación espectacular, la película ofrece acción continua y revela más sobre el pasado del reino. Es una aventura emocionante que complementa perfectamente la serie principal.",
        seasons: [
            {
                number: 1,
                title: "Película",
                episodes: 1,
                slug: "black-clover-mahou-tei-no-ken"
            }
        ],
        generatedDate: "2025-10-04T10:20:14.672Z"
    },
    {
        id: 20,
        title: "Attack on Titan",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/323c82257b2f6567fabbb7bd55bfa753.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GR751KNZY-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+16",
        contentWarning: "",
        description: "Ataque a los Titanes (Shingeki no Kyojin) es un innovador anime de acción que combina drama, terror y animación, con una intrincada trama, brutales batallas y profundos temas filosóficos. La humanidad sobrevive tras enormes muros que la resguardan de los titanes devoradores de hombres. Cuando un titán colosal destruye su hogar y mata a su madre, Eren Jaeger se une a la Legión de Reconocimiento junto a sus amigos Mikasa y Armin, solo para descubrir que él mismo puede transformarse en titán. En su lucha por la supervivencia de la humanidad, Eren descubre conspiraciones, intrigas políticas y los aterradores orígenes de los titanes. La serie presenta un complejo elenco de personajes, cada uno con un papel clave en la lucha de la humanidad por sobrevivir. Las historias de Eren Jaeger, Mikasa Ackermann, Armin Arlelt y otros abordan temas como el trauma, la ideología y la naturaleza cíclica de la violencia, lo que convierte a Ataque a los Titanes en un drama psicológico y una epopeya de acción. Ataque a los Titanes tuvo cuatro temporadas y se estrenó en abril de 2013, con sus tres primeras a cargo de Wit Studio. Ataque a los Titanes: La Temporada Final, producida por MAPPA, se emitió en varias partes entre diciembre de 2020 y noviembre de 2023. Luego, sus dos especiales, Ataque a los Titanes: La Temporada Final - LOS CAPÍTULOS FINALES, se reunieron en la película Ataque a los Titanes: EL ÚLTIMO ATAQUE.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Shingeki no Kyojin)",
                episodes: 25,
                slug: "shingeki-no-kyojin"
            },
            {
                number: 2,
                title: "Temporada 2 (Shingeki no Kyojin Season 2)",
                episodes: 12,
                slug: "shingeki-no-kyojin-season-2"
            },
            {
                number: 3,
                title: "Temporada 3 (Shingeki no Kyojin Season 3)",
                episodes: 12,
                slug: "shingeki-no-kyojin-season-3"
            },
            {
                number: 4,
                title: "Temporada 3 (Shingeki no Kyojin Season 3 Part 2)",
                episodes: 10,
                slug: "shingeki-no-kyojin-season-3-part-2"
            }
        ],
        generatedDate: "2025-09-28T14:15:05.291Z"
    },
    {
        id: 19,
        title: "Tokyo Ghoul: Pinto",
        image: "https://www3.animeflv.net/uploads/animes/covers/2342.jpg",
        banner: "https://image.tmdb.org/t/p/original/98o16o9Nlb5nv56f3j8AAA8bndo.jpg",
        logo: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABe0ZYDJJPv9v1Qsw_4ZbcpwVXyX7aOGmqTROSJuKfzKIU9KV5AmQjcjI_mLLCXtuuoM7kv01_i5cY4OcRj4HhUSjCepfgMfWkw.png?r=933",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+16",
        contentWarning: "",
        description: "Un vistazo al pasado de Tsukiyama Shuu y su vínculo con Chie Hori, mostrando el lado humano de un ghoul.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Tokyo Ghoul: Pinto)",
                episodes: 1,
                slug: "tokyo-ghoul-pinto"
            }
        ],
        generatedDate: "2025-09-28T13:59:57.770Z"
    },
    {
        id: 18,
        title: "Tokyo Ghoul",
        image: "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G6NV7Z50Y-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G6NV7Z50Y-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+16",
        contentWarning: "",
        description: "Dos años después de la incursión en Anteiku, el CCG selecciona al joven Haise Sasaki para liderar un equipo rebelde de humanos infundidos con poderes ghoul.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Tokyo Ghoul)",
                episodes: 12,
                slug: "tokyo-ghoul"
            },
            {
                number: 2,
                title: "Temporada 2 (Tokyo Ghoul √A)",
                episodes: 12,
                slug: "tokyo-ghoul-2"
            },
            {
                number: 3,
                title: "Temporada 3 (Tokyo Ghoul:re)",
                episodes: 12,
                slug: "tokyo-ghoulre"
            },
            {
                number: 4,
                title: "Temporada 4 (Tokyo Ghoul:re 2nd Season)",
                episodes: 12,
                slug: "tokyo-ghoulre-2nd-season"
            }
        ],
        generatedDate: "2025-09-28T13:53:52.073Z"
    },
    {
        id: 17,
        title: "Jujutsu Kaisen",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRDV0019R-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GRDV0019R-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+16",
        contentWarning: "",
        description: "JUJUTSU KAISEN es un manga con historia y dibujo de Gege Akutami que se publica en la Weekly Shonen Jump. Poco después de su debut se estrenaba la adaptación animada, producida por Studio MAPPA. Actualmente hay varias temporadas del anime, comenzando con la primera (24 episodios), siguiéndole la aclamada película precuela JUJUTSU KAISEN 0, y posteriormente la segunda temporada en julio de 2023. La serie está disponible subtitulada y doblada. ¡Sigue al joven Yuji Itadori en esta serie de acción sobrenatural mientras entrena como hechicero y explora el violento mundo de las maldiciones! Yuji Itadori se traga un dedo maldito para salvar a alguien de su clase y ahora Ryomen Sukuna, un poderoso hechicero malvado conocido como el Rey de las Maldiciones, vive en su alma. Las maldiciones son seres sobrenaturales creadas a partir de las emociones negativas de los humanos. Esta energía maldita puede usarse como fuente de poder por parte de los hechiceros y de los espíritus malditos. Guiado por los hechiceros, Yuji Itadori se une a la Escuela Técnica de Hechicería de Tokio, una organización que se enfrenta a las maldiciones. Con la ayuda de su profesor, Satoru Gojo, Itadori hace amistad con Megumi Fushiguro y Nobara Kurosaki, ambos estudiantes de primer año como él.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Jujutsu Kaisen (TV)",
                episodes: 24,
                slug: "jujutsu-kaisen-tv"
            },
            {
                number: 2,
                title: "Temporada 2 (Jujutsu Kaisen 2nd Season)",
                episodes: 23,
                slug: "jujutsu-kaisen-2nd-season"
            }
        ],
        generatedDate: "2025-09-28T13:36:34.296Z"
    },
    {
        id: 16,
        title: "Solo Leveling",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/f2d6d93f5ba4a24bcb3b0d1322a645ff.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GDKHZEJ0K-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GDKHZEJ0K-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+16",
        contentWarning: "",
        description: "Solo Leveling es la aclamada adaptación al anime de la novela y el webtoon de Chugong y DUBU, animada por A-1 Pictures. La historia sigue a Sung Jinwoo, el cazador más débil del mundo, al que elige un misterioso «sistema» tras sobrevivir por los pelos a una incursión mortal en una mazmorra. Ese poder le permite ser más fuerte, más allá de los límites humanos, y se convierte en presa en depredador mientras descubre la oscura verdad que se oculta tras las mazmorras infestadas de monstruos. La primera temporada de Solo Leveling (12 episodios), que se estrenó el 7 de enero de 2024, narra la transformación de Jinwoo: de cazador indefenso de rango E a una fuerza imparable. En Solo Leveling Segunda Temporada - Álzate desde las Sombras (13 episodios), la tensión aumenta a medida que Jingwoo domina sus habilidades de nigromante y lidera un ejército de sombras mientras oculta su verdadero poder al resto de cazadores. Su misión final: salvar a su madre y asegurar el futuro de su familia. Dirigido por Shunsuke Nakashige y con una potente banda sonora compuesta por Hiroyuki SAWANO, el anime da vida a toda la emblemática acción del webtoon. Con su adictivo sistema de progresión, combates espectaculares y tramas llenas de misterio, Solo Leveling se ha convertido en un fenómeno mundial entre los fans de la fantasía oscura y el shounen de acción.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Ore dake Level Up na Ken)",
                episodes: 12,
                slug: "ore-dake-level-up-na-ken"
            },
            {
                number: 2,
                title: "Temporada 2 (Ore dake Level Up na Ken Season 2: Arise from the Shadow)",
                episodes: 13,
                slug: "ore-dake-level-up-na-ken-season-2-arise-from-the-shadow"
            }
        ],
        generatedDate: "2025-09-28T12:21:22.556Z"
    },
    {
        id: 15,
        title: "Sword Art Online",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/13d6e1ce564b2080bcc39f8ef1288690.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR49G9VP6-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GR49G9VP6-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "En un futuro cercano, un Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) llamado Sword Art Online permite que los jugadores se introduzcan en el juego directamente mediante el uso del Nerve Gear, un casco que les sumerge por completo.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Sword Art Online)",
                episodes: 25,
                slug: "sword-art-online"
            },
            {
                number: 2,
                title: "Temporada Especial (Sword Art Online: Extra Edition)",
                episodes: 1,
                slug: "sword-art-online-extra-edition"
            },
            {
                number: 3,
                title: "Temporada 2 (Sword Art Online II)",
                episodes: 24,
                slug: "sword-art-online-2"
            },
            {
                number: 4,
                title: "Temporada 3 (Sword Art Online: Alicization)",
                episodes: 24,
                slug: "sword-art-online-alicization"
            },
            {
                number: 5,
                title: "Temporada 4 (Sword Art Online: Alicization - War of Underworld)",
                episodes: 23,
                slug: "sword-art-online-alicization-war-of-underworld"
            }
        ],
        generatedDate: "2025-09-28T12:14:58.979Z"
    },
    {
        id: 14,
        title: "Kimetsu no Yaiba",
        image: "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY5P48XEY-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GY5P48XEY-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+16",
        contentWarning: "",
        description: "Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente de la masacre, ha sufrido una transformación en demonio. Destrozado por los acontecimientos Tanjiro decide convertirse en un matademonios para poder devolver a su hermana a la normalidad y matar al demonio que masacró a su familia.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Kimetsu no Yaiba)",
                episodes: 26,
                slug: "kimetsu-no-yaiba"
            },
            {
                number: 2,
                title: "Temporada 2 (Kimetsu no Yaiba: Mugen Ressha-hen Arc TV)",
                episodes: 7,
                slug: "kimetsu-no-yaiba-mugen-resshahen-arc-tv"
            },
            {
                number: 3,
                title: "Temporada 3 (Kimetsu no Yaiba: Yuukaku-hen)",
                episodes: 11,
                slug: "kimetsu-no-yaiba-yuukakuhen"
            },
            {
                number: 4,
                title: "Temporada 4 (Kimetsu no Yaiba: Katanakaji no Sato-hen)",
                episodes: 11,
                slug: "kimetsu-no-yaiba-katanakaji-no-satohen"
            },
            {
                number: 5,
                title: "Temporada 5 (Kimetsu no Yaiba: Hashira Geiko-hen)",
                episodes: 8,
                slug: "kimetsu-no-yaiba-hashira-geikohen"
            }
        ],
        generatedDate: "2025-09-28T11:53:02.658Z"
    },
    {
        id: 13,
        title: "Dr. Stone",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/29e0d306dbff3a163acadf66a35b3cf5.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GYEXQKJG6-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GYEXQKJG6-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "Senku es un joven extremadamente inteligente con un gran don para la ciencia y una ácida personalidad, y su mejor amigo es Taiju, que es muy buena persona pero más apto para usar los músculos que para pensar. Cuando tras cierto incidente toda la humanidad acaba convertida en piedra, ellos logran despertarse en un mundo miles de años después, con la civilización humana completamente desaparecida y con toda la humanidad congelada en piedra como ellos estuvieron. Ahora es su obligación rescatar a la gente y crear un nuevo mundo.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Dr. Stone)",
                episodes: 24,
                slug: "dr-stone"
            },
            {
                number: 2,
                title: "Temporada 2 (Dr. Stone: Stone Wars)",
                episodes: 11,
                slug: "dr-stone-stone-wars"
            },
            {
                number: 3,
                title: "Temporada Especial (Dr. Stone: Ryuusui)",
                episodes: 1,
                slug: "dr-stone-ryuusui"
            },
            {
                number: 4,
                title: "Temporada 3 (Dr. Stone: New World)",
                episodes: 22,
                slug: "dr-stone-new-world"
            },
            {
                number: 5,
                title: "Temporada 4 (Dr. Stone: Science Future)",
                episodes: 24,
                slug: "dr-stone-science-future"
            }
        ],
        generatedDate: "2025-09-28T11:02:16.029Z"
    },
    {
        id: 12,
        title: "Kuroko no basket NG-Shu",
        image: "https://m.media-amazon.com/images/M/MV5BNzM4YmJmNzktNGJlYi00YzRmLTk4YjAtMzFhOTNiNmE1NTI2XkEyXkFqcGc@._V1_.jpg",
        banner: "https://grimmfeather.wordpress.com/wp-content/uploads/2015/11/ng-shuu-3rd-season_7-1.jpg",
        logo: "https://static.wikia.nocookie.net/kurokonobasuke/images/9/9a/Kuroko_no_Basuke_logo.png/revision/latest?cb=20110829134558",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "Especial animado adaptado de cada tomo recopilatorio del manga original de Tadatoshi Fujimaki.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Especial Animado)",
                episodes: 12,
                slug: "kuroko-no-basket-ng-shu"
            }
        ],
        generatedDate: "2025-09-28T10:52:35.956Z"
    },
    {
        id: 11,
        title: "Kuroko no Basket",
        image: "https://m.media-amazon.com/images/M/MV5BYmI3NDAyZGUtYWZiZC00YWIwLTgyNDQtYjZmOGFmNTkzODYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G62P48X56-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G62P48X56-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "El equipo de baloncesto de la preparatoria Teiko. La clase que produjo tres temporadas perfectas de un solo golpe, con cinco jugadores que solo se ven una vez en su generación, llamados La Generación Milagrosa.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Kuroko no Basuke)",
                episodes: 25,
                slug: "kuroko-no-basuke"
            },
            {
                number: 2,
                title: "Temporada 2 (Kuroko no Basuke 2)",
                episodes: 26,
                slug: "kuroko-no-basuke-2"
            },
            {
                number: 3,
                title: "Temporada 3 (Kuroko no Basuke 3)",
                episodes: 25,
                slug: "kuroko-no-basket-3"
            },
            {
                number: 4,
                title: "Temporada 3 (Episodio 26) https://www3.animeflv.net/ver/kuroko-no-basket-3-25.5",
                episodes: 0,
            }
        ],
        generatedDate: "2025-09-28T10:47:17.556Z"
    },
    {
        id: 10,
        title: "The Seven Deadly Sins (Nanatsu no Taizai)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6at_HI2EoCH1WwLvX941nOn58Cgu4xnHBRHKM3wE830xTMahYaoESbo1hX4RUU3vvyliA",
        banner: "https://wallpaper.dog/large/16992856.jpg",
        logo: "https://image.tmdb.org/t/p/original/1GBuTmYHrwpXmzofwjcKRFfP640.png",
        inMyList: false,
        subtitled: true,
        dubbed: true,
        contentRating: "+14",
        contentWarning: "",
        description: "Los “Siete Pecados Capitales”, un grupo de caballeros malignos que conspiraron para derrocar al Reino de Britania, se dice que fueron erradicados por los Caballeros Sagrados, aunque algunos dicen que aún viven. Diez años después, los Caballeros Sagrados dieron un golpe de estado y asesinaron al rey, convirtiéndose en los nuevos y tiránicos regidores del reino. Elizabeth, la única hija del rey, emprende un viaje para encontrar a los “Siete Pecados Capitales” y conseguir su ayuda para recuperar el reino.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Nanatsu no Taizai)",
                episodes: 26,
                slug: "nanatsu-no-taizai"
            },
            {
                number: 2,
                title: "Temporada Especial (Nanatsu no Taizai: Seisen no Shirushi)",
                episodes: 4,
                slug: "nanatsu-no-taizai-seisen-no-shirushi"
            },
            {
                number: 3,
                title: "Temporada 2 (Nanatsu no Taizai: Imashime no Fukkatsu)",
                episodes: 24,
                slug: "nanatsu-no-taizai-imashime-no-fukkatsu"
            },
            {
                number: 4,
                title: "Temporada 3 (Nanatsu no Taizai: Kamigami no Gekirin)",
                episodes: 24,
                slug: "nanatsu-no-taizai-kamigami-no-gekirin"
            },
            {
                number: 5,
                title: "Temporada 4 (Nanatsu no Taizai: Fundo no Shinpan)",
                episodes: 24,
                slug: "nanatsu-no-taizai-fundo-no-shinpan"
            }
        ],
        generatedDate: "2025-09-28T10:18:36.082Z"
    },
    {
        id: 9,
        title: "Fruits Basket",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/0a34f193aa46a27cd75f5ee553834c41.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G6ZJMGEXY-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G6ZJMGEXY-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "Tohru Honda pensó que su vida se encaminaba hacia la desgracia cuando una tragedia familiar la dejó viviendo en una tienda de campaña. Cuando el misterioso clan Soma descubre su pequeño hogar, de repente se encuentra viviendo con Yuki, Kyo y Shigure Soma. Pero pronto descubre que su familia tiene un extraño secreto: ¡cuando son abrazados por el sexo opuesto, se transforman en los animales del Zodíaco!",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Fruits Basket)",
                episodes: 25,
                slug: "fruits-basket-2019"
            },
            {
                number: 2,
                title: "Temporada 2 (Fruits Basket 2nd Season)",
                episodes: 25,
                slug: "fruits-basket-2nd-season"
            },
            {
                number: 3,
                title: "Temporada 3 (Fruits Basket: The Final)",
                episodes: 13,
                slug: "fruits-basket-the-final"
            }
        ],
        generatedDate: "2025-09-28T09:53:57.112Z"
    },
    {
        id: 8,
        title: "Aggressive Retsuko",
        image: "https://m.media-amazon.com/images/M/MV5BNmRkYTMwMzQtZmE5Mi00MTI3LTkyNTYtMDBkM2MyNDZkODBmXkEyXkFqcGc@._V1_.jpg",
        banner: "https://sm.ign.com/ign_ap/review/a/aggretsuko/aggretsuko-season-4-review_eg67.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/63/Logo_for_the_Sanrio_Netflix_series_Aggretsuko.png",
        inMyList: false,
        subtitled: true,
        dubbed: true,
        contentRating: "+12",
        contentWarning: "",
        description: "Retsuko es una panda roja antropomórfica de 25 años, soltera, Sangre tipo “A”, quien trabaja en el departamento de contabilidad de una compañía comercial japonesa. Retsuko sufre la constante frustración cotidiana por sus avasalladores superiores y sus desagradables compañeros de trabajo. Por ello, desahoga sus emociones en el bar de karaoke todas las noches, donde canta death metal. Después de cinco años de rutina diaria de trabajo, la relación con sus compañeros de trabajo comienza a cambiar, lo que modificará su vida para mejor... o para peor.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1",
                episodes: 11,
                slug: "aggretsuko"
            }
        ],
        generatedDate: "2025-09-28T09:40:06.111Z"
    },
    {
        id: 7,
        title: "The Rising Of The Shield Hero",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/2231404e8aee575ed8ab71b51f948556.jpg",
        banner: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G6W4QKX0R-backdrop_wide",
        logo: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G6W4QKX0R-title_logo-en-us",
        inMyList: false,
        subtitled: true,
        dubbed: false,
        contentRating: "+14",
        contentWarning: "",
        description: "Iwatani Naofumi es el típico otaku, al menos hasta que un día encuentra en la biblioteca un libro que lo transporta a otro mundo. Allí se convertirá en el Héroe del Escudo, uno de los Cuatro Héroes Cardinales, y tendrá que luchar contra las Olas de la Catástrofe junto a los héroes de la espada, la lanza y el arco. Emocionado ante la perspectiva de vivir una gran aventura, Naofumi parte de viaje con su grupo. No obstante, al cabo de unos pocos días lo traicionan y pierde su dinero, su dignidad y el respeto de los que le rodean.",
        seasons: [
            {
                number: 1,
                title: "Temporada 1 (Tate no Yuusha no Nariagari)",
                episodes: 25,
                slug: "tate-no-yuusha-no-nariagari"
            },
            {
                number: 2,
                title: "Temporada 2 (Tate no Yuusha no Nariagari Season 2)",
                episodes: 13,
                slug: "tate-no-yuusha-no-nariagari-season-2"
            },
            {
                number: 3,
                title: "Temporada 3 (Tate no Yuusha no Nariagari Season 3)",
                episodes: 12,
                slug: "tate-no-yuusha-no-nariagari-season-3"
            },
            {
                number: 4,
                title: "Temporada 4 (Tate no Yuusha no Nariagari Season 4)",
                episodes: 12,
                slug: "tate-no-yuusha-no-nariagari-season-4"
            }
        ],
        generatedDate: "2025-09-28T09:32:36.590Z"
    },
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
