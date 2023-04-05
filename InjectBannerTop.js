// Créez un élément div pour le bandeau rouge
let bandeau = document.createElement("div");

// Appliquez les styles appropriés pour le bandeau
bandeau.style.backgroundColor = "red";
bandeau.style.width = "100%";
bandeau.style.height = "50px";
bandeau.style.position = "fixed";
bandeau.style.top = "0";

// Trouvez le corps de la page et déplacez-le vers le bas
let corps = document.body;
corps.style.marginTop = "50px";

// Ajoutez le bandeau à la page
corps.insertBefore(bandeau, corps.firstChild);