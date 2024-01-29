const filmsNanars = [
    { titre: "Plan 9 from Outer Space", annee: 1959 },
    { titre: "Manos: The Hands of Fate", annee: 1966 },
    { titre: "Robot Monster", annee: 1953 },
    { titre: "The Room", annee: 2003 },
    { titre: "Troll 2", annee: 1990 },
    { titre: "Birdemic: Shock and Terror", annee: 2010 },
    { titre: "Santa Claus Conquers the Martians", annee: 1964 },
    { titre: "The Creeping Terror", annee: 1964 },
    { titre: "Gymkata", annee: 1985 },
    { titre: "Mega Shark vs. Giant Octopus", annee: 2009 },
    { titre: "Attack of the Killer Tomatoes", annee: 1978 },
    { titre: "Hobgoblins", annee: 1988 },
    { titre: "Zardoz", annee: 1974 },
    { titre: "Killer Klowns from Outer Space", annee: 1988 },
    { titre: "Howard the Duck", annee: 1986 },
    { titre: "Showgirls", annee: 1995 },
    { titre: "Mac and Me", annee: 1988 },
    { titre: "Miami Connection", annee: 1987 },
    { titre: "The Happening", annee: 2008 },
    { titre: "Cool as Ice", annee: 1991 },
    { titre: "Battlefield Earth", annee: 2000 },
    { titre: "Gigli", annee: 2003 },
    { titre: "Catwoman", annee: 2004 },
    { titre: "The Wicker Man", annee: 2006 },
    { titre: "Ballistic: Ecks vs. Sever", annee: 2002 },
    { titre: "Batman & Robin", annee: 1997 },
    { titre: "Super Mario Bros.", annee: 1993 },
    { titre: "Street Fighter", annee: 1994 },
    { titre: "The Last Airbender", annee: 2010 },
    { titre: "The Love Guru", annee: 2008 }
];

// Affichage des films nanars
filmsNanars.forEach(film => {
    console.log(`${film.titre} (${film.annee})`);
});

const filmListElement = document.getElementById('filmList');


let btn = document.querySelector("input");

btn.addEventListener("click", updateBtn);

function updateBtn() {
    const searchValue = btn.value.toLowerCase(); 
    filmListElement.innerHTML = '';
    if (btn.value === '') {
        filmsNanars.forEach(film => {
            const li = document.createElement('li');
            li.textContent = `${film.titre} (${film.annee})`;
            filmListElement.appendChild(li);
        });
    }
    else {
        filmsNanars.forEach(film => {
            const { titre, annee } = film;
            const lowerCaseTitre = titre.toLowerCase();
            if (lowerCaseTitre.includes(searchValue) || String(annee).includes(searchValue)) {
                const li = document.createElement('li');
                li.textContent = `${titre} (${annee})`;
                filmListElement.appendChild(li);
            }
        });
    }
}