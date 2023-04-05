// Créez un élément div pour l'overlay
let overlay = document.createElement("div");

// Appliquez les styles appropriés pour l'overlay
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.zIndex = "9999";

// Créez un élément img pour l'image
let image = document.createElement("img");

// Définissez la source de l'image
image.src = "https://hips.hearstapps.com/autoweek/assets/s3fs-public/Untitled-1_327.jpg?crop=1xw:0.8xh;center,top&resize=980:*";

// Appliquez les styles appropriés pour l'image
image.style.position = "absolute";
image.style.top = "50%";
image.style.left = "50%";
image.style.transform = "translate(-50%, -50%)";
image.style.zIndex = "10000";

// Ajoutez l'overlay et l'image à la page
overlay.appendChild(image);
document.body.appendChild(overlay);
