/**
 * BASE DE DATOS LOCAL - ROCKIFY
 * Almacena todas las bandas de rock de los 70s, 80s y 90s
 */

const bandasRock = [
  {
    id: 1,
    nombre: "Pink Floyd",
    decada: "70s",
    descripcion: "Legendaria banda de rock progresivo y psicodélico",
    historia: "Pink Floyd fue fundada en 1965 en Londres. Se convirtieron en pioneros del rock psicodélico y progresivo. Bajo la dirección creativa de Roger Waters, produjeron algunos de los álbumes más icónicos de la historia del rock, incluyendo 'Dark Side of the Moon' (1973) y 'The Wall' (1979). La banda se disolvió en 1995 después de una gira de reunión.",
    integrantes: ["Roger Waters", "David Gilmour", "Rick Wright", "Nick Mason"],
    canciones: [
      { titulo: "Wish You Were Here", album: "Wish You Were Here", anio: 1975, youtubeId: "IlV7nJf-AXE" },
      { titulo: "Time", album: "The Dark Side of the Moon", anio: 1973, youtubeId: "JwYX52BP2Sk" },
      { titulo: "Comfortably Numb", album: "The Wall", anio: 1979, youtubeId: "awCM4vWnMx8" },
      { titulo: "Money", album: "The Dark Side of the Moon", anio: 1973, youtubeId: "wHP7zIQm1Z0" },
      { titulo: "Another Brick in the Wall", album: "The Wall", anio: 1979, youtubeId: "YR2RF_vssKc" }
    ]
  },
  {
    id: 2,
    nombre: "Queen",
    decada: "70s",
    descripcion: "Banda británica de rock con influencias operísticas y teatrales",
    historia: "Queen fue formada en 1970 en Londres por Freddie Mercury, Brian May, Roger Taylor y John Deacon. Conocida por sus actuaciones teatrales en vivo, su música versátil y la voz incomparable de Freddie Mercury. Sus éxitos incluyen 'Bohemian Rhapsody', 'Another One Bites the Dust' y 'We Are the Champions'. La banda sigue activa con Adam Lambert como vocalista.",
    integrantes: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    canciones: [
      { titulo: "Bohemian Rhapsody", album: "A Night at the Opera", anio: 1975, youtubeId: "fJ9rUzIMt7o" },
      { titulo: "Another One Bites the Dust", album: "The Game", anio: 1980, youtubeId: "rY0WxgSXdVE" },
      { titulo: "We Are the Champions", album: "News of the World", anio: 1977, youtubeId: "ChGV4t3MrZE" },
      { titulo: "Somebody to Love", album: "A Day at the Races", anio: 1976, youtubeId: "kijycUKxEJw" },
      { titulo: "Don't Stop Me Now", album: "Jazz", anio: 1978, youtubeId: "HgzGwKwLmgM" }
    ]
  },
  {
    id: 3,
    nombre: "David Bowie",
    decada: "70s",
    descripcion: "Artista innovador de rock con continua reinvención musical",
    historia: "David Bowie, nacido David Robert Jones, fue un artista revolucionario que constantemente reinventaba su sonido y imagen. En los 70s, creó álbumes conceptuales como 'The Man Who Sold the World' y 'Ziggy Stardust and the Spiders from Mars'. Su carrera abarcó múltiples décadas con influencias que van desde el glam rock hasta el jazz y la música electrónica.",
    integrantes: ["David Bowie"],
    canciones: [
      { titulo: "Starman", album: "The Rise and Fall of Ziggy Stardust", anio: 1972, youtubeId: "U_7VT6RQhzA" },
      { titulo: "Changes", album: "Hunky Dory", anio: 1971, youtubeId: "pl3vxEudif8" },
      { titulo: "Life on Mars?", album: "Hunky Dory", anio: 1971, youtubeId: "v--IqqusnNQ" },
      { titulo: "Heroes", album: "Heroes", anio: 1977, youtubeId: "lXgkuM2-x7E" },
      { titulo: "Golden Years", album: "Station to Station", anio: 1975, youtubeId: "UO0z5ee_q9c" }
    ]
  },
  {
    id: 4,
    nombre: "The Who",
    decada: "70s",
    descripcion: "Pioneros del rock progresivo británico con óperas rockeras",
    historia: "The Who fue formada en 1964 en Londres. Son conocidos por sus álbumes conceptuales 'Tommy' (1969) y 'Quadrophenia' (1973). La banda revolucionó el rock con sus actuaciones de energía extrema, destruyendo instrumentos en escena. Su influencia en el rock progresivo es fundamental.",
    integrantes: ["Roger Daltrey", "Pete Townshend", "Keith Moon", "John Entwistle"],
    canciones: [
      { titulo: "Baba O'Riley", album: "Who's Next", anio: 1971, youtubeId: "x34icPskFVc" },
      { titulo: "My Generation", album: "The Who Sings My Generation", anio: 1965, youtubeId: "I0sI4P1YILE" },
      { titulo: "Won't Get Fooled Again", album: "Who's Next", anio: 1971, youtubeId: "SHhrZgojLvU" },
      { titulo: "Pinball Wizard", album: "Tommy", anio: 1969, youtubeId: "4AKbUm8GWpE" },
      { titulo: "Behind Blue Eyes", album: "Who's Next", anio: 1971, youtubeId: "JREkgfAG5N0" }
    ]
  },
  {
    id: 5,
    nombre: "Led Zeppelin",
    decada: "70s",
    descripcion: "Banda de rock pesado que definió el género moderno",
    historia: "Led Zeppelin fue formada en 1968 en Londres por Jimmy Page, Robert Plant, John Paul Jones y John Bonham. Son considerados una de las bandas más influyentes de todos los tiempos. Su sonido fusionaba el blues, folk, y rock pesado. Se disolvieron en 1980 tras la muerte de Bonham, pero realizaron una reunión especial en 2007.",
    integrantes: ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"],
    canciones: [
      { titulo: "Whole Lotta Love", album: "Led Zeppelin II", anio: 1969, youtubeId: "tJ-TbVccXpE" },
      { titulo: "Stairway to Heaven", album: "Led Zeppelin IV", anio: 1971, youtubeId: "D_FwqLntkFM" },
      { titulo: "Black Dog", album: "Led Zeppelin IV", anio: 1971, youtubeId: "xgnvYx-r56U" },
      { titulo: "Immigrant Song", album: "Led Zeppelin III", anio: 1970, youtubeId: "ya4DQvjcqWM" },
      { titulo: "Since I've Been Loving You", album: "Led Zeppelin III", anio: 1970, youtubeId: "Jdj1smxH-LU" }
    ]
  },
  {
    id: 6,
    nombre: "The Rolling Stones",
    decada: "70s",
    descripcion: "Legendarios del rock and roll con carrera de más de 6 décadas",
    historia: "The Rolling Stones fueron formados en 1962 en Londres. Con una carrera que ha abarcado más de seis décadas, son una de las bandas más longevas del rock. En los 70s, produjeron algunos de sus álbumes más celebrados como 'Exile on Main St.' y 'Some Girls'. Siguen realizando giras y grabando música.",
    integrantes: ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
    canciones: [
      { titulo: "Sympathy for the Devil", album: "Beggars Banquet", anio: 1968, youtubeId: "MV_3Dpw-BRY" },
      { titulo: "Brown Sugar", album: "Sticky Fingers", anio: 1971, youtubeId: "hHKiGr0qEE8" },
      { titulo: "Paint It Black", album: "Aftermath", anio: 1966, youtubeId: "O4irXQhgMqg" },
      { titulo: "Jumpin' Jack Flash", album: "Through the Past", anio: 1968, youtubeId: "cV0lBwI1EKE" },
      { titulo: "Angie", album: "Goats Head Soup", anio: 1973, youtubeId: "K9H2Sk7rQKI" }
    ]
  },
  {
    id: 7,
    nombre: "AC/DC",
    decada: "80s",
    descripcion: "Pioneros del hard rock australiano con riffs icónicos",
    historia: "AC/DC fue formada en 1973 en Sídney, Australia por los hermanos Angus y Malcolm Young. Su estilo de hard rock directo y potente los convirtió en un fenómeno global. Con Bon Scott primero y Axl Rose después, crearon himnos del rock que definieron una era. Su álbum 'Back in Black' (1980) es uno de los más vendidos de la historia.",
    integrantes: ["Angus Young", "Malcolm Young", "Bon Scott", "Phil Rudd", "Cliff Williams"],
    canciones: [
      { titulo: "Back in Black", album: "Back in Black", anio: 1980, youtubeId: "pAgnJDJN4VA" },
      { titulo: "Highway to Hell", album: "Highway to Hell", anio: 1979, youtubeId: "l482T0yNkeo" },
      { titulo: "You Shook Me All Night Long", album: "Back in Black", anio: 1980, youtubeId: "Lo2qQmj0_h4" },
      { titulo: "Thunderstruck", album: "The Razors Edge", anio: 1990, youtubeId: "v2AC41dglnM" },
      { titulo: "Dirty Deeds Done Dirt Cheap", album: "Dirty Deeds", anio: 1976, youtubeId: "K88UlsFroKk" }
    ]
  },
  {
    id: 8,
    nombre: "Iron Maiden",
    decada: "80s",
    descripcion: "Legendarios del heavy metal británico con vocales épicos",
    historia: "Iron Maiden fue formada en 1975 en Londres por Steve Harris. Con Bruce Dickinson como vocalista, se convirtieron en íconos del heavy metal. Sus álbumes conceptuales y narrativos, con letras inspiradas en la historia y la literatura, los distinguieron del resto. Su carrera ha abarcado más de 40 años con giras mundiales continuas.",
    integrantes: ["Bruce Dickinson", "Steve Harris", "Dave Murray", "Adrian Smith", "Nicko McBrain"],
    canciones: [
      { titulo: "Run to the Hills", album: "The Number of the Beast", anio: 1982, youtubeId: "BGLGzRXY5Bw" },
      { titulo: "The Number of the Beast", album: "The Number of the Beast", anio: 1982, youtubeId: "f_H_HJhq_mQ" },
      { titulo: "Hallowed Be Thy Name", album: "The Number of the Beast", anio: 1982, youtubeId: "yKfEpxWAa5w" },
      { titulo: "Fear of the Dark", album: "Fear of the Dark", anio: 1992, youtubeId: "nWXIZ1qXxKk" },
      { titulo: "Wasted Years", album: "Somewhere in Time", anio: 1986, youtubeId: "Mdu9iKk4fKk" }
    ]
  },
  {
    id: 9,
    nombre: "Metallica",
    decada: "80s",
    descripcion: "Gigantes del thrash metal con influencia global",
    historia: "Metallica fue formada en 1981 en Los Ángeles por Lars Ulrich y James Hetfield. Revolucionaron el metal con su estilo thrash agresivo. Sus álbumes 'Master of Puppets' (1986) y '...And Justice for All' (1988) son considerados obras maestras del género. Su evolución musical ha mantenido su relevancia durante décadas.",
    integrantes: ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"],
    canciones: [
      { titulo: "Enter Sandman", album: "The Black Album", anio: 1991, youtubeId: "CD-E-LDc384" },
      { titulo: "Master of Puppets", album: "Master of Puppets", anio: 1986, youtubeId: "wtQ5mMJ1SH0" },
      { titulo: "One", album: "...And Justice for All", anio: 1988, youtubeId: "WM8bTKq3En4" },
      { titulo: "The Unforgiven", album: "The Black Album", anio: 1991, youtubeId: "EzgGTTtR0kc" },
      { titulo: "Fade to Black", album: "Ride the Lightning", anio: 1984, youtubeId: "KpJJKemyUMg" }
    ]
  },
  {
    id: 10,
    nombre: "Guns N' Roses",
    decada: "80s",
    descripcion: "Banda de hard rock con un sonido crudo y energético",
    historia: "Guns N' Roses fue formada en 1985 en Los Ángeles. Con Axl Rose como vocalista y Slash como guitarrista, se convirtieron en iconos del rock de los 80s. Su álbum debut 'Appetite for Destruction' (1987) fue un fenómeno global. A pesar de conflictos internos, su influencia en el rock sigue siendo inmensa.",
    integrantes: ["Axl Rose", "Slash", "Duff McKagan", "Izzy Stradlin", "Steven Adler"],
    canciones: [
      { titulo: "Welcome to the Jungle", album: "Appetite for Destruction", anio: 1987, youtubeId: "o1tj2zJ2Wvg" },
      { titulo: "Sweet Child o' Mine", album: "Appetite for Destruction", anio: 1987, youtubeId: "1w7OgIMMRc4" },
      { titulo: "Paradise City", album: "Appetite for Destruction", anio: 1987, youtubeId: "Rbm37_-Braw" },
      { titulo: "November Rain", album: "Use Your Illusion I", anio: 1991, youtubeId: "8SbUC-UaAxE" },
      { titulo: "Civil War", album: "Use Your Illusion II", anio: 1991, youtubeId: "KX8pVP_nzT0" }
    ]
  },
  {
    id: 11,
    nombre: "Aerosmith",
    decada: "80s",
    descripcion: "Banda de hard rock estadounidense con un sonido clásico",
    historia: "Aerosmith fue formada en 1970 en Boston. Aunque sus inicios fueron en los 70s, alcanzaron su apogeo en los 80s y 90s. Conocidos por sus solos de guitarra virtuosos y la energía de Steven Tyler en el escenario. Su resurgimiento en los 80s los convirtió en uno de los actos de rock más populares de la era.",
    integrantes: ["Steven Tyler", "Joe Perry", "Tom Hamilton", "Joey Kramer", "Brad Whitford"],
    canciones: [
      { titulo: "Dream On", album: "Aerosmith", anio: 1973, youtubeId: "VJDJs9RKSUE" },
      { titulo: "Walk This Way", album: "Rocks", anio: 1975, youtubeId: "06H0CceP9-8" },
      { titulo: "Dude (Looks Like a Lady)", album: "Permanent Vacation", anio: 1987, youtubeId: "nf0oXY4gS9E" },
      { titulo: "I Don't Want to Miss a Thing", album: "Get a Grip", anio: 1993, youtubeId: "JkK8g6FMIMM" },
      { titulo: "Crazy", album: "Permanent Vacation", anio: 1987, youtubeId: "O7Y2ysM4MzY" }
    ]
  },
  {
    id: 12,
    nombre: "Nirvana",
    decada: "90s",
    descripcion: "Pioneros del grunge que revolucionaron el rock de los 90s",
    historia: "Nirvana fue formada en 1987 en Aberdeen, Washington por Kurt Cobain. Su álbum 'Nevermind' (1991) revolucionó la música rock y llevó el grunge a la corriente principal. La angustia emocional y el sonido crudo de Kurt Cobain resonaron con millones de personas. La banda se disolvió en 1994 tras el suicidio de Cobain.",
    integrantes: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
    canciones: [
      { titulo: "Smells Like Teen Spirit", album: "Nevermind", anio: 1991, youtubeId: "hTWKbfoikeg" },
      { titulo: "Come as You Are", album: "Nevermind", anio: 1991, youtubeId: "vabnZ9-ex7o" },
      { titulo: "Lithium", album: "Nevermind", anio: 1991, youtubeId: "pkcJEvMcnEg" },
      { titulo: "Heart-Shaped Box", album: "In Utero", anio: 1993, youtubeId: "n6P0SitRwy8" },
      { titulo: "Dumb", album: "In Utero", anio: 1993, youtubeId: "o-EFVYFk5lw" }
    ]
  },
  {
    id: 13,
    nombre: "Pearl Jam",
    decada: "90s",
    descripcion: "Banda grunge con influencias de rock clásico",
    historia: "Pearl Jam fue formada en 1990 en Seattle, Washington. Con Eddie Vedder como vocalista, se convirtieron en uno de los principales exponentes del movimiento grunge. Su compromiso con la música auténtica y sus actuaciones en directo los mantiene como una banda respetada. Siguen activos y realizando giras después de más de 30 años.",
    integrantes: ["Eddie Vedder", "Mike McCready", "Stone Gossard", "Jeff Ament", "Matt Cameron"],
    canciones: [
      { titulo: "Jeremy", album: "Vs.", anio: 1992, youtubeId: "MS91knuzoOA" },
      { titulo: "Alive", album: "Ten", anio: 1990, youtubeId: "mtOtnsFI0V0" },
      { titulo: "Black", album: "Ten", anio: 1990, youtubeId: "CS9OO0S5w2k" },
      { titulo: "Better Man", album: "Vitalogy", anio: 1994, youtubeId: "x8kPHC1yYGE" },
      { titulo: "Dissident", album: "Vs.", anio: 1992, youtubeId: "7Z81PZfLr4Q" }
    ]
  },
  {
    id: 14,
    nombre: "Soundgarden",
    decada: "90s",
    descripcion: "Banda grunge con potentes vocales y guitarras pesadas",
    historia: "Soundgarden fue formada en 1984 en Seattle. Con Chris Cornell como vocalista, alcanzaron la fama en los 90s como uno de los gigantes del grunge. Su música fusionaba heavy metal, hard rock y grunge. La banda se disolvió en 1997 tras diferencias creativas, aunque se reunieron en 2010. Desafortunadamente, Cornell falleció en 2017.",
    integrantes: ["Chris Cornell", "Kim Thayil", "Ben Shepherd", "Matt Cameron"],
    canciones: [
      { titulo: "Black Hole Sun", album: "Superunknown", anio: 1994, youtubeId: "3mbBbFH9fAg" },
      { titulo: "Outshined", album: "Badmotorfinger", anio: 1991, youtubeId: "KeSJOMpxFMw" },
      { titulo: "Spoonman", album: "Superunknown", anio: 1994, youtubeId: "T0_zzCLLRvE" },
      { titulo: "Rusty Cage", album: "Badmotorfinger", anio: 1991, youtubeId: "qLEAVEUc9O8" },
      { titulo: "The Day I Tried to Live", album: "Superunknown", anio: 1994, youtubeId: "wKPVbPmVZG8" }
    ]
  },
  {
    id: 15,
    nombre: "Alice in Chains",
    decada: "90s",
    descripcion: "Banda grunge con armonías vocales únicas y sonido oscuro",
    historia: "Alice in Chains fue formada en 1987 en Seattle. Con Layne Staley como vocalista y Jerry Cantrell como guitarrista, crearon un sonido distintivo que fusionaba grunge, metal y hard rock. Sus armonías vocales duales eran características de su sonido. La muerte de Staley en 2002 marcó un punto de quiebre, aunque la banda se ha reformado.",
    integrantes: ["Layne Staley", "Jerry Cantrell", "Mike Starr", "Sean Kinney"],
    canciones: [
      { titulo: "Rooster", album: "Dirt", anio: 1992, youtubeId: "60ok0ZW8iKA" },
      { titulo: "Man in the Box", album: "Facelift", anio: 1990, youtubeId: "TAqXmsTBF7c" },
      { titulo: "Down in a Hole", album: "Dirt", anio: 1992, youtubeId: "qdBjs1kVDIo" },
      { titulo: "Them Bones", album: "Dirt", anio: 1992, youtubeId: "EqONzlD9oXE" },
      { titulo: "Would?", album: "Dirt", anio: 1992, youtubeId: "0CFuCYNx-c0" }
    ]
  }
];
