//Défintion de l'URL à appeler
const URL =
  "http://127.0.0.1:5001/pokemon/hasard";

const getBouton = document.getElementById("Bouton");
getBouton.addEventListener('click', async () => {
  try{

    //Lancement de l'appel
    fetch(URL)
      .then(function (response) {
        //Debug de la réponse et affichage dans la console
        // console.log(response);
    
        //Renvoi de la transformation de la réponse en JSON
        return response.json();
      })
    
      .then((data) => {
        // console.log(data.results);
        const tableBody = document.getElementById("Tableau");
    
        const row = tableBody.insertRow();
        row.insertCell(0).innerHTML = '<div class="container mt-5"><button type="button" class="btn btn-primary" id="Bouton">Supprimer</button></div>';
        row.insertCell(1).textContent = data.name.french;
        row.insertCell(2).textContent = data.type;
        row.insertCell(3).textContent = data.name.english;
        row.insertCell(4).textContent = data.id;
      })
  }
  catch{
    console.log("Erreur");
  }
});