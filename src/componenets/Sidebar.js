// Importe React depuis la bibliothèque react.
import React from 'react';

// Importe le fichier CSS associé à ce composant.
import "../App.css";

// Importe le tableau de données SidebarData depuis le fichier 'SidebarData.js'.
import { SidebarData } from  './SidebarData';

// Définit la fonction composant Sidebar.
function Sidebar() {
  // Rendu du composant.
  return (
    // Div principale avec la classe 'Sidebar'.
    <div className="Sidebar">
      
      {/* Div avec la classe 'SidebarTitle' contenant un titre h1 'MyPlanner'. */}
      <div className="SidebarTitle">
        <h1 id='plan'>MyPlanner</h1>
      </div>
      
      {/* Liste non ordonnée (ul) avec la classe 'SidebarList'. */}
      <ul className="SidebarList">
        
        {/* Mapping à travers le tableau SidebarData pour générer des éléments de liste (li). */}
        {SidebarData.map((val, key) => {
          return (
            // Chaque élément de liste (li) a une classe 'row'.
            <li 
              key={key}
              className="row"
              // Ajoute la classe 'active' si l'URL correspond à la propriété Link de l'objet SidebarData actuel.
              id={window.location.pathname === val.Link ? "active" : ""}
              // Définit le comportement de clic pour changer l'URL lorsqu'un élément est cliqué.
              onClick={() => {
                window.location.pathname = val.Link;
              }}
            >
              {/* Div avec l'id 'icon', utilise la classe 'important-icon' si le titre est "Important". */}
              <div id="icon" className={val.title === "Important" ? "important-icon" : ""}>
                {val.icon}
              </div>
              
              {/* Div avec l'id 'title', affiche le titre de l'objet SidebarData actuel. */}
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      
      {/* Fin de la liste non ordonnée (ul). */}
      </ul>
    
    {/* Fin de la div principale. */}
    </div>
  );
}

// Exporte le composant Sidebar comme composant par défaut.
export default Sidebar;
