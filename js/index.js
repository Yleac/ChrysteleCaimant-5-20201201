/*creation constante pour appel de l'url de l'api cameras */
const URL = `http://localhost:3000/api/cameras/`;

// declaration de la variable cameras (cf ligne 11)
let cameras; 

/* connection à l'API */
fetch(URL)
  .then((response) => response.json())
  .then((response) => {
    cameras = response; //on rempli la variable cameras avec la reponse (la liste des différentes données cameras dispos dans l'API)

    //Création d'une constante qui utilisera (pointe vers) l'id "product" deja présente ds le html (appel de la vignette)
    const productsContainer = document.getElementById("products");

    // On parcourt les Produits. Pour chacun des produit de la cameraList :
    for (const camera of cameras) {
      //on crée la vignette
      let productContainer = document.createElement("div");
      productContainer.classList.add("product");

      //apparence des cartes pour chaque produit (boostrap)
      productContainer.classList.add("card");
      productContainer.classList.add("mb-4");
      productContainer.classList.add("mb-lg-0");
      productContainer.classList.add("text-center");
      productContainer.classList.add("border-0");
      
      //on crée l'image du produit
      let productImage = document.createElement("img");
      productImage.src = camera.imageUrl;
      productImage.alt = camera.name;

      //on ajoute l'image à la vignette
      productContainer.appendChild(productImage);

      //on crée le nom du produit
      let productName = document.createElement("h3");
      let productNametext = document.createTextNode(camera.name);
      productName.appendChild(productNametext);

      //on ajoute le h3 à la vignette
      productContainer.appendChild(productName);

      //on crée le paragraphe pour le prix
      let productPrice = document.createElement("p");
      let priceIneuro = (camera.price / 100).toFixed(2);
      let productPricetext = document.createTextNode(priceIneuro + " EUR");
      productPrice.appendChild(productPricetext);

      //on ajoute le prix à la vignette
      productContainer.appendChild(productPricetext);

      // Création du bouton lien vers la page detail produit
      let aTag = document.createElement("a");
      aTag.setAttribute("href", './produit.html');
      aTag.textContent = "Voir détail produit";
      aTag.addEventListener ("mouseover", function(){this.style.backgroundColor = "black";});
      aTag.addEventListener("mouseout", function (){this.style.backgroundColor = "gray";});


      //on ajoute le lien à la vignette
      productContainer.appendChild(aTag);

      //ajout des class boostrap pour apparence bouton (boostrap)
      aTag.classList.add("btn"); 
      aTag.classList.add("btn-secondary");
      aTag.classList.add("stretched-link");


      //**Enfin, on ajoute la vignette au conteneur**
      productsContainer.appendChild(productContainer);
    }
  })

  /*Si erreur de connexion */
  .catch((error) => alert("Erreur : " + error));
