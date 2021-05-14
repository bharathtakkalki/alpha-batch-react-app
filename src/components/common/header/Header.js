import logo from "../../../logo.svg";
import {useHistory} from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import {HiSearch} from "react-icons/hi"
import { useState } from "react";

const Header = ({ selected }) => {
    const [searchText,setSearchText] = useState()
    const history = useHistory();

    const redirectTo = (path) =>{
        history.push(path)
    }

    const searchInputChangeHandler = (event) => {
        setSearchText(event.target.value)
        // API call & get the data based on search 
    }

    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <nav className="nav-bar">
                <p className={`link ${selected === "HOME" ? "selected" : ""}`} onClick={() => redirectTo("/")}>Home</p>
                <p className={`link ${selected === "WORK" ? "selected" : ""}`} onClick={() => redirectTo("/work")}>Work</p>
                <p className={`link ${selected === "RESUME"? "selected" : ""}`} onClick={() => redirectTo("/resume")}>Resume</p>
                <p className={`link ${selected === "CONTACT" ? "selected" : ""}`} onClick={() => redirectTo("/contact-us")}>Contact</p>
                <SearchBar icon={<HiSearch />} onChange={searchInputChangeHandler} value={searchText} placeholder="Search..."/>
            </nav>
            
        </header>
    )
}


export default Header;