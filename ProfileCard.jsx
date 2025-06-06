import "./App.css"; 

function ProfileCard() {
    return (
      <div className="bg-green-100 p-6 rounded-2xl shadow-xl w-80 mx-auto">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <img 
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Fperfil_3106921&psig=AOvVaw10WdDuehysvPEGFkKJdEKt&ust=1749233611643000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODi-5Xx2o0DFQAAAAAdAAAAABAE" 
            alt="Foto de perfil" 
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-300"
          />
          <h2 className="text-2xl font-bold text-green-900">Linda Camacho</h2>
          <p className="text-green-800 mt-1">Matrícula: 12345678</p>
          <p className="text-green-700 mt-1">Carrera</p>
        </div>
      </div>
    )
  }
  
  export default ProfileCard
  