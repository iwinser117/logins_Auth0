import './App.css';
import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Título y descripción */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Login con OAuth</h1>
        <p className="text-gray-600 mt-2">
          Este es un ejemplo básico del uso de OAuth0 para autenticación.
        </p>
      </header>

      {/* Botones de login y logout */}
      <div className="flex justify-center space-x-4 mb-6">
        <LoginButton />
        <LogoutButton />
      </div>

      {/* Perfil del usuario */}
      <Profile />
    </div>
  );
}

export default App;
