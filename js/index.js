const url = `http://localhost:3000/api/cameras/`;

/*connection à l'API */
fetch(url)
  .then((response) => response.json())
  /*test pour verifier connexion */
  .then((response) => alert(JSON.stringify(response)))
  /*Si erreur de connexion */
  .catch((error) => alert("Erreur : " + error));

/* si ok : afficher les produits dans le main */


