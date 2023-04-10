// Créer un élément div pour le bandeau rouge
const bandeau = document.createElement('div');

// Ajouter les styles CSS pour le bandeau
bandeau.style.position = 'fixed';
bandeau.style.top = '0';
bandeau.style.left = '0';
bandeau.style.width = '100%';
bandeau.style.height = '50px';
bandeau.style.background = 'red';
bandeau.style.color = 'white';
bandeau.style.textAlign = 'center';
bandeau.style.paddingTop = '10px';
bandeau.style.boxSizing = 'border-box';
bandeau.style.zIndex = '9999';

// Ajouter le texte pour le bandeau
bandeau.textContent = 'Bandeau rouge en haut de la page';

setTimeout(function() {
    // Ajouter le bandeau à la page
   document.body.insertBefore(bandeau, document.body.firstChild);
  }, 2000);
