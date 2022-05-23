import { NavLink } from "react-router-dom";

let Album = ({ albumInfo }) => {
    return (
        <div  className="col-lg-4 content">
            <div className="card alert alert-primary text-center" >
                <img src={"../images/albums/" + albumInfo.cover + ".jpg"} alt={albumInfo.name} className="card-img-top" />
                <div>
                    <h5 >{albumInfo.title}</h5>
                    <h6>{albumInfo.year}</h6>
                    <a href="#" className="btn btn-primary">Buy | ${albumInfo.price}</a>
                </div>
            </div>
        </div>
    )
}

export default Album;