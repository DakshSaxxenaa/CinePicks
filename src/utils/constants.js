const movies = [
    {
        title: "The Shawshank Redemption",
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        genre: "Drama",
        year: 1994,
        description: "Two imprisoned men bond over years, finding redemption through hope and friendship."
    },
    {
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        genre: "Action",
        year: 2008,
        description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos."
    },
    {
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        genre: "Sci-Fi",
        year: 2010,
        description: "A thief enters dreams to steal secrets and attempts one last impossible heist."
    },
    {
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        genre: "Sci-Fi",
        year: 2014,
        description: "Explorers travel through a wormhole to find a new home for humanity."
    },
    {
        title: "Forrest Gump",
        poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        genre: "Drama",
        year: 1994,
        description: "A kind-hearted man unwittingly influences major events in American history."
    },
    {
        title: "Fight Club",
        poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
        genre: "Drama",
        year: 1999,
        description: "An insomniac forms an underground fight club that spirals out of control."
    },
    {
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        genre: "Sci-Fi",
        year: 1999,
        description: "A hacker discovers reality is a simulation and joins a rebellion."
    },
    {
        title: "Parasite",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        genre: "Thriller",
        year: 2019,
        description: "A poor family infiltrates a wealthy household with unexpected consequences."
    },
    {
        title: "Avengers: Endgame",
        poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
        genre: "Action",
        year: 2019,
        description: "The Avengers attempt to undo the catastrophic snap that erased half of life."
    },
    {
        title: "Titanic",
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        genre: "Romance",
        year: 1997,
        description: "A love story unfolds aboard the ill-fated RMS Titanic."
    },
    {
        title: "Joker",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        genre: "Crime",
        year: 2019,
        description: "A troubled comedian descends into madness and becomes Gotham’s Joker."
    },
    {
        title: "Gladiator",
        poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        genre: "Action",
        year: 2000,
        description: "A betrayed Roman general seeks revenge in the arena."
    },
    {
        title: "The Godfather",
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        genre: "Crime",
        year: 1972,
        description: "The aging patriarch of a crime dynasty hands control to his reluctant son."
    },
    {
        title: "Pulp Fiction",
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        genre: "Crime",
        year: 1994,
        description: "Interwoven stories of criminals, violence, and redemption in LA."
    },
    {
        title: "The Wolf of Wall Street",
        poster: "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
        genre: "Biography",
        year: 2013,
        description: "The rise and fall of a stockbroker living a life of excess."
    },
    {
        title: "La La Land",
        poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        genre: "Romance",
        year: 2016,
        description: "Two dreamers fall in love while chasing careers in Los Angeles."
    },
    {
        title: "Whiplash",
        poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
        genre: "Drama",
        year: 2014,
        description: "A young drummer faces a ruthless instructor pushing him to extremes."
    },
    {
        title: "The Social Network",
        poster: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
        genre: "Drama",
        year: 2010,
        description: "The founding of Facebook and the lawsuits that followed."
    },
    {
        title: "Dune: Part Two",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        genre: "Sci-Fi",
        year: 2024,
        description: "Paul Atreides unites with the Fremen to wage war against his enemies."
    },
    {
        title: "Mad Max: Fury Road",
        poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        genre: "Action",
        year: 2015,
        description: "A relentless chase across the wasteland in a post-apocalyptic world."
    },
    {
        title: "Get Out",
        poster: "https://image.tmdb.org/t/p/w500/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg",
        genre: "Horror",
        year: 2017,
        description: "A Black man uncovers a terrifying secret when visiting his girlfriend’s family."
    },
    {
        title: "The Grand Budapest Hotel",
        poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        genre: "Comedy",
        year: 2014,
        description: "The adventures of a legendary concierge and his loyal lobby boy."
    },
    {
        title: "Her",
        poster: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
        genre: "Romance",
        year: 2013,
        description: "A lonely writer falls in love with an intelligent operating system."
    },
    {
        title: "The Silence of the Lambs",
        poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
        genre: "Thriller",
        year: 1991,
        description: "An FBI trainee seeks help from a cannibalistic serial killer to catch another murderer."
    },
    {
        title: "The Truman Show",
        poster: "https://image.tmdb.org/t/p/w500/4p6t3nCGtD1K9C5i6gN6CzJ7X7b.jpg",
        genre: "Drama",
        year: 1998,
        description: "A man discovers his entire life is a reality TV show."
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        genre: "Animation",
        year: 2018,
        description: "Teen Miles Morales becomes Spider-Man in a multiverse of heroes."
    },
    {
        title: "The Departed",
        poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yUJ3ZgZCw8y0qOQG.jpg",
        genre: "Crime",
        year: 2006,
        description: "An undercover cop and a mole in the police try to expose each other."
    },
    {
        title: "No Country for Old Men",
        poster: "https://image.tmdb.org/t/p/w500/6o0oZ1r7bqE4pK5y0v2sG0kR8pQ.jpg",
        genre: "Thriller",
        year: 2007,
        description: "A hunter stumbles upon a drug deal gone wrong and is pursued by a killer."
    },
    {
        title: "The Lion King",
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        genre: "Animation",
        year: 1994,
        description: "A lion cub must embrace his destiny as king after tragedy strikes."
    },
    {
        title: "Oldboy",
        poster: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4QG6z.jpg",
        genre: "Thriller",
        year: 2003,
        description: "A man imprisoned for years seeks revenge after being suddenly released."
    },
    { title: "The Prestige", poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg", genre: "Thriller", year: 2006, description: "Two rival magicians engage in a deadly game of one-upmanship." },
    { title: "Memento", poster: "https://image.tmdb.org/t/p/w500/fQMSaP88cf1nz4qwuNEEFtazuDM.jpg", genre: "Thriller", year: 2000, description: "A man with short-term memory loss hunts for his wife's killer." },
    { title: "Se7en", poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg", genre: "Crime", year: 1995, description: "Detectives pursue a serial killer inspired by the seven deadly sins." },
    { title: "Shutter Island", poster: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRK9aPKgUklvpu2Aw.jpg", genre: "Thriller", year: 2010, description: "A marshal uncovers disturbing truths on a remote island asylum." },
    { title: "Django Unchained", poster: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg", genre: "Western", year: 2012, description: "A freed slave hunts down his wife's captors with a bounty hunter." },
    { title: "The Hateful Eight", poster: "https://image.tmdb.org/t/p/w500/mb6JIDyN0cU8xFwgxk6q9s1kZ8T.jpg", genre: "Western", year: 2015, description: "Strangers with dark secrets are trapped together by a blizzard." },
    { title: "Blade Runner", poster: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg", genre: "Sci-Fi", year: 1982, description: "A hunter tracks rogue androids in a neon-lit dystopia." },
    { title: "Blade Runner 2049", poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", genre: "Sci-Fi", year: 2017, description: "A replicant uncovers secrets that could change the future." },
    { title: "Logan", poster: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg", genre: "Action", year: 2017, description: "An aging Wolverine protects a young mutant on the run." },
    { title: "The Revenant", poster: "https://image.tmdb.org/t/p/w500/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg", genre: "Adventure", year: 2015, description: "A frontiersman survives brutal wilderness and betrayal." },

    { title: "Arrival", poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", genre: "Sci-Fi", year: 2016, description: "A linguist communicates with aliens to prevent global conflict." },
    { title: "Ex Machina", poster: "https://image.tmdb.org/t/p/w500/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg", genre: "Sci-Fi", year: 2014, description: "A programmer evaluates the humanity of an advanced AI." },
    { title: "Gone Girl", poster: "https://image.tmdb.org/t/p/w500/ts996lKsxvjkO2yiYG0ht4qAicO.jpg", genre: "Thriller", year: 2014, description: "A husband becomes the prime suspect in his wife's disappearance." },
    { title: "Prisoners", poster: "https://image.tmdb.org/t/p/w500/yAhqW57pwMAsCgmZpM5zSIVQVTh.jpg", genre: "Thriller", year: 2013, description: "A father takes justice into his own hands to find his missing daughter." },
    { title: "The Imitation Game", poster: "https://image.tmdb.org/t/p/w500/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg", genre: "Biography", year: 2014, description: "Alan Turing helps crack Nazi codes during WWII." },
    { title: "12 Years a Slave", poster: "https://image.tmdb.org/t/p/w500/kb3X943WMIJYVg4SOAyK0pmWL5D.jpg", genre: "Drama", year: 2013, description: "A free man is sold into slavery and struggles to survive." },
    { title: "The Big Short", poster: "https://image.tmdb.org/t/p/w500/isuQWbJPbjybBEWdcCaBUPmU0XO.jpg", genre: "Drama", year: 2015, description: "Outsiders foresee and profit from the financial crash." },
    { title: "Spotlight", poster: "https://image.tmdb.org/t/p/w500/9rAVwN5a1GM6PRMrQJ8I6tlx4cb.jpg", genre: "Drama", year: 2015, description: "Journalists expose abuse within the church." },
    { title: "Black Swan", poster: "https://image.tmdb.org/t/p/w500/2oCqYbKJWQb6rRr6U2cB6g0P1YH.jpg", genre: "Drama", year: 2010, description: "A ballerina’s obsession with perfection unravels her mind." },
    { title: "The Pianist", poster: "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg", genre: "Drama", year: 2002, description: "A Jewish pianist survives Nazi-occupied Warsaw." },

    { title: "A Quiet Place", poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", genre: "Horror", year: 2018, description: "A family must live in silence to avoid deadly creatures." },
    { title: "It", poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", genre: "Horror", year: 2017, description: "Kids face a shape-shifting evil that feeds on fear." },
    { title: "The Conjuring", poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", genre: "Horror", year: 2013, description: "Paranormal investigators confront a demonic presence." },
    { title: "Hereditary", poster: "https://image.tmdb.org/t/p/w500/p81Z8r1d6fQm1kQF4KJIp4jOSAm.jpg", genre: "Horror", year: 2018, description: "A family unravels after dark secrets surface." },
    { title: "The Babadook", poster: "https://image.tmdb.org/t/p/w500/b2W5lWwF5lq1F9M2FfVfX6s9N6P.jpg", genre: "Horror", year: 2014, description: "A mother and son are haunted by a sinister storybook creature." },
    { title: "Get Out", poster: "https://image.tmdb.org/t/p/w500/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg", genre: "Horror", year: 2017, description: "A man uncovers a horrifying conspiracy while visiting his girlfriend’s family." },
    { title: "The Witch", poster: "https://image.tmdb.org/t/p/w500/9uQn0Zy8c9rG1mG8lE7wPp3H0xg.jpg", genre: "Horror", year: 2015, description: "A Puritan family is terrorized by dark forces in the wilderness." },
    { title: "Sinister", poster: "https://image.tmdb.org/t/p/w500/8z1mB7sY0W5m1sI9G1k0uKZy2O3.jpg", genre: "Horror", year: 2012, description: "A writer finds disturbing footage of murders in his new home." },
    { title: "The Ring", poster: "https://image.tmdb.org/t/p/w500/6s8k1fD5b9G1sF4Yp7xQy2KxR1L.jpg", genre: "Horror", year: 2002, description: "A cursed videotape brings death to its viewers." },
    { title: "Insidious", poster: "https://image.tmdb.org/t/p/w500/6Tt4U7Y0JvZp8G6n7N3ZC2P7Z0J.jpg", genre: "Horror", year: 2010, description: "A family battles entities from another realm." },

    { title: "John Wick", poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", genre: "Action", year: 2014, description: "A retired hitman returns to the criminal underworld." },
    { title: "Mad Max: Fury Road", poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", genre: "Action", year: 2015, description: "A nonstop chase across a post-apocalyptic desert." },
    { title: "Die Hard", poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg", genre: "Action", year: 1988, description: "A cop battles terrorists in a Los Angeles skyscraper." },
    { title: "The Raid", poster: "https://image.tmdb.org/t/p/w500/7nBwn6y8y1xF5p0H7u3K3yQYbP0.jpg", genre: "Action", year: 2011, description: "Elite cops fight through a criminal-filled building." },
    { title: "Casino Royale", poster: "https://image.tmdb.org/t/p/w500/zlWBxz2pTA9p45kUTrI8AQiKrHm.jpg", genre: "Action", year: 2006, description: "James Bond faces a high-stakes poker game and betrayal." },

    { title: "The Hangover", poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg", genre: "Comedy", year: 2009, description: "Friends retrace a chaotic night in Las Vegas." },
    { title: "Superbad", poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", genre: "Comedy", year: 2007, description: "Two teens chase popularity and booze before graduation." },
    { title: "Step Brothers", poster: "https://image.tmdb.org/t/p/w500/6jT5xwX3v5w3O9lQdpL1ZrYsmIu.jpg", genre: "Comedy", year: 2008, description: "Two immature adults become reluctant stepbrothers." },
    { title: "The Nice Guys", poster: "https://image.tmdb.org/t/p/w500/4gwc1Xdpj6yFvW5zr0D7gWZ2G0g.jpg", genre: "Comedy", year: 2016, description: "Two private eyes uncover a bizarre conspiracy." },

    { title: "Rocky", poster: "https://image.tmdb.org/t/p/w500/uh4THi7S0Hf4h6n1HA1y7M6Z6hP.jpg", genre: "Drama", year: 1976, description: "An underdog boxer gets a once-in-a-lifetime chance." },
    { title: "Creed", poster: "https://image.tmdb.org/t/p/w500/hKzhV274pkZBSpXfCjzbyb0v8ps.jpg", genre: "Drama", year: 2015, description: "Apollo Creed’s son trains to find his own legacy." },
    { title: "Rush", poster: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg", genre: "Sport", year: 2013, description: "Two rival F1 drivers push each other to the limit." },
    { title: "Ford v Ferrari", poster: "https://image.tmdb.org/t/p/w500/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg", genre: "Sport", year: 2019, description: "American engineers challenge Ferrari at Le Mans." },

    { title: "Up", poster: "https://image.tmdb.org/t/p/w500/8ZTvqvKDQ8emSGUEMjsS4yHAwrp.jpg", genre: "Animation", year: 2009, description: "An old man flies his house to South America." },
    { title: "Toy Story", poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", genre: "Animation", year: 1995, description: "Toys come alive when humans are away." },
    { title: "Finding Nemo", poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg", genre: "Animation", year: 2003, description: "A clownfish searches the ocean for his lost son." },
    { title: "Coco", poster: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg", genre: "Animation", year: 2017, description: "A boy journeys into the Land of the Dead." }
];


export default movies;
