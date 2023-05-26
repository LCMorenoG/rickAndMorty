import axios from "axios";

export const addFav = (character) => {

   try {
   const URL = 'http://localhost:3002/rickandmorty/fav';
   return async (dispatch) => {
      const {data} = await axios.post(URL, character)
         return dispatch({
            type: 'ADD_FAV',
            payload: data
         });
      };
   }
   catch (error) {window.alert("error al agregar a favoritos")      
   }};

   export const removeFav = (id) => {

   try {      
         const URL = 'http://localhost:3002/rickandmorty/fav/' + id;
         return async (dispatch) => {
            const {data} = await axios.delete(URL)
               return dispatch({
                  type: 'REMOVE_FAV',
                  payload: data
         });
            };
   }    
   catch (error) {window.alert("error al eliminar de favoritos")      
   }}; 

export const filterCards = (gender)=>{
    return {type: "FILTER", payload: gender}
}

export const orderCards = (order)=>{
    return {type: "ORDER", payload: order}
}