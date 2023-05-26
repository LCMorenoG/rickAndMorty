import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation(); // guarda la propiedad pathname de Location

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const login = async (userData) => {

      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3002/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      }
      catch (error) {
         window.alert("Email o password incorrectos")
      }
   }



   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id) => {
      try {
         const response = await axios(`http://localhost:3002/rickandmorty/character/${id}`)
         const personaje = response.data;

         if (personaje.name) {
            setCharacters((oldChars) => [...oldChars, personaje]);
         } else {
            throw Error();
         }
      }
      catch (error) {
         window.alert('¡No hay personajes con este ID!')
      }
   }



   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   };

   return (

      <div>
         {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
         <div className={style.App}>




            <Routes>
               <Route path="/" element={<Forms login={login} />} />
               <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
               <Route path="/about" element={<About />} />
               <Route path="/detail/:id" element={<Detail />} />
               <Route path="/favorites" element={<Favorites />} />
            </Routes>

         </div>
      </div>

   );

}

export default App;
