import React from 'react';
import icon from './assets/foto.png'; 

import ProfileCard from './ProfileCard'
import './App.css'

function App() {
  return (
    <div className="bg-green-100 p-6 rounded-2xl shadow-xl w-80 mx-auto">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <img 
            src={icon} 
            alt="Foto de perfil" 
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-300"
          />
          <h2 className="text-2xl font-bold text-green-900">Linda Camacho</h2>
          <p className="text-green-800 mt-1">Matrícula: 12345678</p>
          <p className="text-green-700 mt-1">Carrera</p>
          <p className="text-green-700 mt-1">Genero: </p>
        </div>
      </div>
  );
}

export default App