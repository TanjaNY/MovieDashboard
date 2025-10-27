// Movie Database - Sample Data
const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
        runtime: 142,
        director: "Frank Darabont",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "🎬"
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        genre: "Crime",
        rating: 9.2,
        runtime: 175,
        director: "Francis Ford Coppola",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster: "🎭"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        runtime: 152,
        director: "Christopher Nolan",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests.",
        poster: "🦇"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        rating: 8.9,
        runtime: 154,
        director: "Quentin Tarantino",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
        poster: "💼"
    },
    {
        id: 5,
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        rating: 8.8,
        runtime: 142,
        director: "Robert Zemeckis",
        description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
        poster: "🏃"
    },
    {
        id: 6,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        runtime: 148,
        director: "Christopher Nolan",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
        poster: "🌀"
    },
    {
        id: 7,
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 8.7,
        runtime: 136,
        director: "Wachowski Sisters",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        poster: "💊"
    },
    {
        id: 8,
        title: "Goodfellas",
        year: 1990,
        genre: "Crime",
        rating: 8.7,
        runtime: 146,
        director: "Martin Scorsese",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his partners.",
        poster: "🔫"
    },
    {
        id: 9,
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.6,
        runtime: 169,
        director: "Christopher Nolan",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "🚀"
    },
    {
        id: 10,
        title: "The Silence of the Lambs",
        year: 1991,
        genre: "Thriller",
        rating: 8.6,
        runtime: 118,
        director: "Jonathan Demme",
        description: "A young FBI cadet must receive the help of an incarcerated cannibal killer to catch another serial killer.",
        poster: "🦋"
    },
    {
        id: 11,
        title: "Gladiator",
        year: 2000,
        genre: "Action",
        rating: 8.5,
        runtime: 155,
        director: "Ridley Scott",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
        poster: "⚔️"
    },
    {
        id: 12,
        title: "The Departed",
        year: 2006,
        genre: "Crime",
        rating: 8.5,
        runtime: 151,
        director: "Martin Scorsese",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
        poster: "🕵️"
    },
    {
        id: 13,
        title: "The Prestige",
        year: 2006,
        genre: "Drama",
        rating: 8.5,
        runtime: 130,
        director: "Christopher Nolan",
        description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.",
        poster: "🎩"
    },
    {
        id: 14,
        title: "Whiplash",
        year: 2014,
        genre: "Drama",
        rating: 8.5,
        runtime: 106,
        director: "Damien Chazelle",
        description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor.",
        poster: "🥁"
    },
    {
        id: 15,
        title: "The Lion King",
        year: 1994,
        genre: "Animation",
        rating: 8.5,
        runtime: 88,
        director: "Roger Allers",
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        poster: "🦁"
    },
    {
        id: 16,
        title: "Back to the Future",
        year: 1985,
        genre: "Sci-Fi",
        rating: 8.5,
        runtime: 116,
        director: "Robert Zemeckis",
        description: "Marty McFly travels back in time and accidentally prevents his parents from meeting, threatening his own existence.",
        poster: "⏰"
    },
    {
        id: 17,
        title: "The Green Mile",
        year: 1999,
        genre: "Drama",
        rating: 8.6,
        runtime: 189,
        director: "Frank Darabont",
        description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder.",
        poster: "💚"
    },
    {
        id: 18,
        title: "Parasite",
        year: 2019,
        genre: "Thriller",
        rating: 8.6,
        runtime: 132,
        director: "Bong Joon-ho",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        poster: "🪜"
    },
    {
        id: 19,
        title: "Spirited Away",
        year: 2001,
        genre: "Animation",
        rating: 8.6,
        runtime: 125,
        director: "Hayao Miyazaki",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
        poster: "🐉"
    },
    {
        id: 20,
        title: "The Usual Suspects",
        year: 1995,
        genre: "Thriller",
        rating: 8.5,
        runtime: 106,
        director: "Bryan Singer",
        description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat.",
        poster: "🎭"
    },
    {
        id: 21,
        title: "Saving Private Ryan",
        year: 1998,
        genre: "Action",
        rating: 8.6,
        runtime: 169,
        director: "Steven Spielberg",
        description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper.",
        poster: "🎖️"
    },
    {
        id: 22,
        title: "The Pianist",
        year: 2002,
        genre: "Drama",
        rating: 8.5,
        runtime: 150,
        director: "Roman Polanski",
        description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        poster: "🎹"
    },
    {
        id: 23,
        title: "Django Unchained",
        year: 2012,
        genre: "Action",
        rating: 8.4,
        runtime: 165,
        director: "Quentin Tarantino",
        description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        poster: "🤠"
    },
    {
        id: 24,
        title: "WALL-E",
        year: 2008,
        genre: "Animation",
        rating: 8.4,
        runtime: 98,
        director: "Andrew Stanton",
        description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey.",
        poster: "🤖"
    },
    {
        id: 25,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        runtime: 181,
        director: "Russo Brothers",
        description: "After the devastating events, the Avengers assemble once more to reverse Thanos' actions and restore balance.",
        poster: "💎"
    }
];

// Export the data (for use in main.js)
// In a browser environment, this will be available globally
