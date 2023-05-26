import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {

    return (
        <div className={style.nav}>
            <SearchBar className={style.SearchBar} onSearch={onSearch} />
            <button>
                <Link to='/About'>About</Link>
            </button>
            <button>
                <Link to='/Home'>Home</Link>
            </button>
            <button>
                <Link to='/favorites'>Favorites</Link>
            </button>
        </div>
    )
};

export default NavBar;