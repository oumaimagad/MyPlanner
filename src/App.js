// Importe React depuis la bibliothèque react.
import React from 'react';

// Importe le fichier CSS associé à ce composant.
import './App.css';

// Importe le composant TodoWrapper depuis le fichier 'todowrapper.js'.
import { Todowrapper } from './componenets/todowrapper';

// Importe le composant Sidebar depuis le fichier 'Sidebar.js'.
import Sidebar from './componenets/Sidebar';

// Définit la fonction composant App.
function App() {
  // Rendu du composant.
  return (
    // Div principale avec la classe 'App'.
    <div className="App " >
      
      {/* Div avec l'id 'side', contenant le composant Sidebar. */}
      <div id='side'>
        <Sidebar />
      </div>
      
      {/* Div avec l'id 'to', contenant le composant Todowrapper. */}
      <div id='to'>
        <Todowrapper /> 
      </div>
      
    {/* Fin de la div principale. */}
    </div>
  );
}

// Exporte le composant App comme composant par défaut.
export default App;

