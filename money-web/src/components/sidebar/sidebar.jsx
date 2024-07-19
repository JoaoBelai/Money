import { Link } from "react-router-dom";
import icons from "../../styles/icons.js"
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/"><img className="icon" src={icons.home} alt="Ícone Home" /></Link>
            <Link to="/despesa/add"><img className="icon" src={icons.add} alt="Ícone Home" /></Link>
        </div>
    );
}

export default Sidebar;