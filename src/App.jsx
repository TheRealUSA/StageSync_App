import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; // Importa QueryClient y QueryClientProvider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Body from './components/bodyFooter/body';
import Footer from './components/footer/footer';

// Importa tus componentes y pantallas
import Inicio from './Screens/Inicio';
import Musicos from './Screens/Musicos';
import Oportunidades from './Screens/Oportunidades';
import Precios from './Screens/Precios';
import InicioSesion from './Screens/InicioSesion';
import Registrarse from './Screens/Registrarse';
import RecuperarContrasena from './Screens/RecuperarContrasena';
import Dashboard from './Dashboard/Dashboard';
import Home from './Screens/Admin/Home';
import DataTable from './Screens/Admin/DTmusicos';
import AgregarMusico from './Dashboard/Cruds/Musicos/AgregarMusico';
import VerMusico from './Dashboard/Cruds/Musicos/VerMusico';
import EditarMusico from './Dashboard/Cruds/Musicos/EditarMusico';
import Error404 from './Screens/Error404';

const queryClient = new QueryClient(); // Crea una instancia del QueryClient

function App() {
  return (
    <div className='flex flex-col'>
      <Router>
        <QueryClientProvider client={queryClient}> {/* Proporciona el QueryClient en el ámbito de tu aplicación */}
          <Routes>
            <Route path='/' element={<div> <Navbar/> <Inicio/> <Body/> <Footer/></div>}/>
            <Route path='/Musicos' element={<div> <Navbar/> <Musicos/> <Body/> <Footer/> </div>}/>
            <Route path='/Oportunidades' element={<div> <Navbar/> <Oportunidades/> <Body/> <Footer/> </div>}/>
            <Route path='/Precios' element={<div> <Navbar/> <Precios/> <Body/>  <Footer/> </div>}/>
            <Route path='/InicioSesion' element={<InicioSesion/>}/>
            <Route path='/Registrarse' element={<Registrarse/>}/>
            <Route path='/RecuperarContraseña' element={<RecuperarContrasena/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}>
              <Route index element={<Home/>}/>
              <Route path='Musico' element={<DataTable/>} />
              <Route path='AgregarMusico' element={<AgregarMusico/>} />
              <Route path='VerMusico' element={<VerMusico/>} />
              <Route path='EditarMusico' element={<EditarMusico/>} />
            </Route>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;