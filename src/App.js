import './App.css';
import PropertyTypeCard from './components/PropertyTypeCard';
import TestForm from './components/TestForm';
import NewsLetterForm from './components/NewsLetterForm';

// Exercice d'entrainement - Evenements
// Reproduire le formulaire d'inscription à la newsletter de RentUp
// -> champs de saisie de l'email (input type text)
// -> bouton Subscripe (button)
// Au clic sur le bouton, afficher avec la méthode alert ce qui a été saisi dans l'input
// 
// Pour ce faire, je souhaite que vous utilisiez un class component et le state (NewsletterForm)

function App() {
  // 1. Avoir le fond gris
  // 2. Avoir le titre Featured Property Types
  // 3. Avoir le sous-titre Find All Type of Property.
  // 4. Liste des types de properties avec Cercle de couleur, Nom, Nombre de propriétés

  const propertyTypes = [
    {
      name: "Family House",
      count: 122,
      color: "rgba(228, 16, 16,0.1)",
      iconClassName: "family-house"

    },
    {
      name: "House & Villa",
      count: 155,
      color: "rgba(49, 177, 54,0.1)",
      iconClassName: "house-and-villa"
    },
    {
      name: "Apartment",
      count: 300,
      color: "rgba(255, 152, 0,0.1)",
      iconClassName: "apartment"
    },
    {
      name: "Office & Studio",
      count: 80,
      color: "rgba(171, 82, 216,0.1)",
      iconClassName: "office-and-studio"
    },
    {
      name: "Villa & Condo",
      count: 80,
      color: "rgba(17, 158, 226,0.1)",
      iconClassName: "villa-and-condo"
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="featured">
          <h2>Featured Property Types</h2>
          <p>Find All Type of Property</p>
          <div className="row justify-content-center">
            <div className="col-lg col-md-4">
              {propertyTypes.map(item => <PropertyTypeCard type={item}/>)}
            </div>
          </div>
          <TestForm/>
          <NewsLetterForm/>
        </div>
      </div>
    </div>
  );
}

export default App;

