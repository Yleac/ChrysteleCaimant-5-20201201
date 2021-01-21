/*creation constante pour appel de l'url de l'api cameras */
const URL = `http://localhost:3000/api/cameras/`;

/* connection à l'API */
fetch(URL)
  .then((response) => response.json())
  /*test pour verifier connexion */
  .then((response) => alert(JSON.stringify(response)))
  /*Si erreur de connexion */
  .catch((error) => alert("Erreur : " + error));


/*OBJECTIF *** 
Pour chaque produit : utilisation dans l'html de l'id product pour afficher la fiche produit qui comporte :
-la photo, 
-en h2 le nom du produit, 
-en p la description
****/

//création de la variable qui liste les différentes caméras sous forme d'objet 
const camerasList = [
  {
    lenses: ["35mm 1.4", "50mm 1.6"],
    _id: "5be1ed3f1c9d44000030b061",
    name: "Zurss 50S",
    price: 49900,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://localhost:3000/images/vcam_1.jpg",
  },
  {
    lenses: ["50mm 1.8", "60mm 2.8", "24-60mm 2.8/4.5"],
    _id: "5be1ef211c9d44000030b062",
    name: "Hirsch 400DTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 309900,
    imageUrl: "http://localhost:3000/images/vcam_2.jpg",
  },
  {
    lenses: ["25mm 4.5"],
    _id: "5be9bc241c9d440000a730e7",
    name: "Franck JS 105",
    price: 209900,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://localhost:3000/images/vcam_3.jpg",
  },
  {
    lenses: ["50mm 1.7", "35mm 1.4"],
    _id: "5be9c4471c9d440000a730e8",
    name: "Kuros TTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 159900,
    imageUrl: "http://localhost:3000/images/vcam_4.jpg",
  },
  {
    lenses: ["50mm 1.4", "35mm 1.8", "28-200mm 2.8/4.5"],
    _id: "5be9c4c71c9d440000a730e9",
    name: "Katatone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 59900,
    imageUrl: "http://localhost:3000/images/vcam_5.jpg",
  },
];

//Création d'une constante qui utilisera l'id product dans le html (appel de la vignette)
const products = document.getElementById("product");


// On parcourt les Produits : pour chacun des produits
for (const products of camerasList) {
  // creation de l'element image
  let cameraImage = document.createElement("img");
  console.log(cameraImage);
  //ajout de la source de l'image à l'élément crée cameraImage
  cameraImage.src = "imageUrl";
}


