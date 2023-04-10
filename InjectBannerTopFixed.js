// Créer un élément div pour le bandeau rouge
const bandeau = document.createElement('div');

// Ajouter les styles CSS pour le bandeau
bandeau.style.top = '0';
bandeau.style.left = '0';
bandeau.style.width = '100%';
bandeau.style.height = '100px';
bandeau.style.background = 'red';
bandeau.style.color = 'white';
bandeau.style.textAlign = 'center';
bandeau.style.paddingTop = '50px';
bandeau.style.boxSizing = 'border-box';
bandeau.style.zIndex = '9999';
bandeau.style.fontSize = '30px';

// Ajouter le texte pour le bandeau
bandeau.textContent = 'Banner injected in top of the page';

setTimeout(function() {
    // Ajouter le bandeau à la page
   document.body.insertBefore(bandeau, document.body.firstChild);
  }, 2000);
