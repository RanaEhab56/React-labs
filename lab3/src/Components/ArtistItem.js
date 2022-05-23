import { NavLink } from "react-router-dom";

let ArtistItem = ({ artistInfo }) => {
    console.log(artistInfo)
    return (
        <div className="alert alert-primary total" >
            <div>
                <img src={"images/covers/" + artistInfo.cover + ".jpg"} alt={artistInfo.name} className="img" />
                <div >
                    <h5 >{artistInfo.name}</h5>
                    <NavLink to={`/artists/${artistInfo.id}`} >More</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ArtistItem;