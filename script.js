const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let searchTerm = '';


var Books = [];
var first = {
    id: 1,
    name: "Loups des stepp",
    ecrivain: "Herman Hess",
    datedesortie: "1984",
    resume: "Le loup des steppes brosse le portrait d’un homme d’âge mûr, Harry Hailer,Un homme singulier, marginal,qui vit en retrait de la société et de la vie,au milieu de ses livres et de ses concertos de Mozart,ses seules joies… Celles de l’ élévation de l’ âme: «Je suis incapable de comprendre quels plaisirs et quelles joies les hommes recherchent dans les trains et les hôtels bondés,dans les cafés combles où résonne une musique oppressante et tapageuse,dans les bars et les music - halls des villes…» écrit - il dans ses carnets.Vivant en reclus il souffre de cette position,déchiré par les deux facettes de sa personnalité qui se livrent bataille en lui: celle d’ un homme affable et raffiné et d’ autre part celle d’ un« loup des steppes»,sauvage et(auto - ) destructeur.«Un animal égaré dans un monde qui lui est étranger et incompréhensible»."


}
Books.push(first);
var second = {
    id: 2,
    name: "l'egoiste romanitique",
    ecrivain: "Frederique Begbelder",
    datedesortie: "2006",
    resume: "Cette histoire débute en l'an 2000. Oscar Dufresne a trente-quatre ans. C'est un écrivain fictif, comme il y a des malades imaginaires. Il tient son journal dans la presse pour que sa vie devienne passionnante. Il est égoïste, lâche, cynique et obsédé sexuel - bref c'est un homme comme les autres. Ainsi l'auteur définit-il son livre, journal d'un people et chronique d'une génération Il faudrait inventer pour le délire dufresnien,en hommage à Malraux,la dénomination d 'antijournal. C'est un miroir déformant que je promène le long de mon nombril."

}
Books.push(second);
var third = {
    id: 3,
    name: "A la recherche du temps perdu",
    ecrivain: "Marcel Proust",
    datedesortie: "1927",
    resume: "Le narrateur rappelle à lui les souvenirs de la place où il a vécu toutes ses nuits. L’image de sa chambre dans la maison de sa grand-tante, à Combray, s’impose évidemment à lui. Ce souvenir semble imprimé dans son esprit, jusqu’au jour où un nouvel éclat de mémoire ne le remplace. Sa mère lui propose du thé, accompagné de madeleines. Le narrateur commence par refuser ; cependant, il finit par céder et accepter. Du côté de chez Swann plonge le lecteur dans les souvenirs d’enfance du narrateur. Ainsi, au fil des mots, il vient à la rencontre d’un enfant heureux, aimé et choyé. Il assiste, non sans émotion à l’éveil du garçon qui s’émerveille devant les paysages de Combray. Il découvre également la passion naissance de l’enfant envers la lecture."
}
Books.push(third)

var fourth = {
    id: 4,
    name: "Voyage au bout de la nuit",
    ecrivain: "Louis-Ferdinand Céline",
    datedesortie: "1932",
    resume: "Bardamu s’engage dans l’armée par hasard et découvre l’horreur de la première guerre mondiale, mais se lie d’amitié avec Robinson, son frère d’arme. Blessé, puis réformé, il fréquente quelques femmes de basse condition (Lola, Musyne) puis quitte la France pour l’Afrique. Là, il constate la brutalité de la vie coloniale. Bardamu contracte une maladie tropicale et est transporté en bateau jusqu’aux Etats-Unis. Il visite New-York, puis Detroit où il est engagé comme ouvrier chez Ford. La découverte de la vie ouvrière ne l’empêche pas de se lier temporairement à Molly, une prostituée. Mais il rentre en France pour y devenir médecin à Drancy, une ville pauvre. Là, il découvre le quotidien misérable, la mort et la cupidité. Lassé des patients, il s’engage dans une troupe de music-hall tandis que Robinson, qui a rencontré une femme (Madelon), devient aveugle. Il revient à Paris pour travailler dans un hôpital psychiatrique. Le docteur Baryton, qui dirige l’établissement, devient fou. Bardamu dirigera l’hôpital en intérim. Robinson sera tué par sa maîtresse, laissant Bardamu seul, amer et définitivement désillusionné."
}
Books.push(fourth)

var fifth = {
    id: 5,
    name: "L'Etranger",
    ecrivain: "Albert Camus",
    datedesortie: "1942",
    resume: "Paublié en 1942, l'Etranger retrace l'histoire d'un homme ordinaire soumis à l'absurdité de l'existence et de la condition. Rédigé au passé, ce récit propose de suivre le parcours de Meursault, de l'annonce du décès de sa mère jusqu'à sa condamnation pour homicide, un an plus tard. Camus souhaite mettre en lumière l'aspect pessimiste et absurde de la condition humaine en dépeignant un homme qui prend la vie comme elle vient, suit ses instincts et ne s'encombre pas des injonctions sociales."


}
Books.push(fifth)

var sixth = {
    id: 6,
    name: "L'alcool",
    ecrivain: "Guillaume Apollinaire",
    datedesortie: "1913",
    resume: "Alcools est un recueil de poèmes publié en 1913. Il regroupe tous les écrits de Guillaume Apollinaire entre 1898 et 1913. On compte en tout 50 poèmes avec une section rhénane de 9 écrits. Ceux-ci ont pour inspiration le voyage en Allemagne de l'auteur. Les thèmes redondants de ce recueil sont le temps qui passe, les amours déçus, l'automne et la ville. Même si Apollinaire a une vision moderne de la poésie en mélangeant lyrisme et figures de style, il s'inspire de Baudelaire, Ronsard et Mallarmé."
}
Books.push(sixth)

var seventh = {
    id: 7,
    name: "L'Belle du Seigneur",
    ecrivain: "Albert Cohen",
    datedesortie: "1968",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(seventh)

var eighth = {
    id: 8,
    name: "Mémoires d’Hadrien",
    ecrivain: "Marguerite Yourcenar",
    datedesortie: "1951",
    resume: "l s’agit d’un récit historique: l’autobiographie fictive de l’empereur Hadrien (empereur romain qui règne de 117 à 138). C’est donc Hadrien le narrateur: il raconte sa vie à la première personne. Tous les personnages sont des personnages historiques."
}
Books.push(eighth)

var nineth = {
    id: 9,
    name: "L'Usage du monde",
    ecrivain: "Nicolas Bouvier",
    datedesortie: "1963",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(nineth)

var tenth = {
    id: 10,
    name: "Capitale de la douleur",
    ecrivain: "Paul Eluard",
    datedesortie: "1926",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(tenth)

var eleventh = {
    id: 11,
    name: "La Vie mode d’emploi",
    ecrivain: "Georges Perec",
    datedesortie: "1978",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(eleventh)

var twelveth = {
    id: 12,
    name: "L'Amant",
    ecrivain: "Marguerite Duras",
    datedesortie: "1984",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(twelveth)

var Thirteenth = {
    id: 13,
    name: "Le Parti pris des choses",
    ecrivain: "Francis Ponge",
    datedesortie: "1942",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(Thirteenth)

var forteenth = {
    id: 14,
    name: "Huis clos",
    ecrivain: "Jean-Paul Sartre",
    datedesortie: "1944",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(forteenth)

var fifteenth = {
    id: 15,
    name: "Tous les matins du monde",
    ecrivain: "Pascal Quignard",
    datedesortie: "1991",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(fifteenth)

var sixteenth = {
    id: 16,
    name: "Léon l’Africain",
    ecrivain: "Amin Maalouf",
    datedesortie: "1986",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(sixteenth)


var seventeenth = {
    id: 17,
    name: "Air de la solitude",
    ecrivain: "Gustave Roud",
    datedesortie: "1945",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(seventeenth)

var eighteenth = {
    name: "Antigone",
    ecrivain: "Alain-Fournier",
    datedesortie: "1913",
    resume: "Ariane d’Auble, rejetée par sa famille de la haute aristocratie genevoise pour avoir vécu avec une Russe, tente de se suicider après le décès de celle-ci. Elle est sauvée par Adrien Deume, un petit fonctionnaire arriviste qui occupe la chambre d’hôtel voisine de la sienne. Il prend soin d’elle, tombe sous son charme et finit par la demander en mariage. Affaiblie socialement et psychologiquement, Ariane accepte. Mais cette union l’oblige à partager son quotidien avec ses beaux-parents : Hippolyte Deume, insignifiant, et Antoinette Deume, une petite bourgeoise inculte et faussement chrétienne. La jeune déclassée est malheureuse et trompe son mari. Après cinq ans de vie commune avec Adrien, elle croise, au cours d’une soirée, l’un des supérieurs hiérarchiques de son mari, Solal Solal, un Grec naturalisé Français, sous-secrétaire général de la Société des Nations (organisation internationale qui était destinée à préserver la paix en Europe après la Première Guerre mondiale"
}
Books.push(eighteenth)

localStorage.setItem('Books', JSON.stringify(Books));



async function fetchbooks() {

    Books = JSON.parse(localStorage.getItem('Books'));

};




async function showBooks() {

    await fetchbooks();

    console.log(Books)

    results.innerHTML = (



        Books.filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(book => (

            ` 
          <li class="book-item">

            <h3 class="book-name">${book.name}</h3>
            <div class="book-info">
              <h5 class="bookwriter">Ecrivain : ${book.ecrivain}</h5>
            </div>
          </li>
        `
        ))
    );
    console.log(results);
};

showBooks();

function getelement(e) {
    console.log(e.target);
    localStorage.setItem('choosen book', e.target.innerText)



}
// INPUT SETUP




searchInput.addEventListener('input', function(event) {
    searchTerm = event.target.value;
    showBooks();
});