import { NavLink } from "react-router-dom";

let Home = () => {
    return (
        <div >
            <center>
                <NavLink to={'/artists'} >Music DB</NavLink>
            </center>
        </div>
    );
}

export default Home;