import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../Redux/action';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';



const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

   const [isFav, setFavs] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
      setFavs(!isFav)

   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavs(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className='cards'>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }


         <div className='face front'>
            <img src={image} alt="" />
         </div>

         <div className='face back'>

            <button>
               <Link to={`/detail/${id}`}>
                  <p>Name: "{name}"</p>
               </Link>
            </button>
            <p>Status: "{status}"</p>
            <p>Species: "{species}"</p>
            <p>Gender: "{gender}"</p>
            <p>Origin: "{origin}"</p>
            {onClose&&<button onClick={() => { onClose(id) }}>Close</button>}
         </div>


      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)


