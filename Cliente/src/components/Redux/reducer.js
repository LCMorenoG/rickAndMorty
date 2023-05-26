const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_FAV':
            return { ...state,
                myFavorites: action.payload,
                allCharactersFav: action.payload 
            };

            case 'REMOVE_FAV':
                return { ...state,
                allCharactersFav: action.payload,
                myFavorites: action.payload 
            };

        case "FILTER":
            const allCharactersFiltered = state.allCharactersFav.filter((char) => char.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharactersFiltered
            }

        case "ORDER":
            const allCharactersFavCopy = [...state.myFavorites]
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                        : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state }

    }
}

export default reducer;