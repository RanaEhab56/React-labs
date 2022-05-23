import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Album from "./Album";

let ArtistDetails = () => {
    let { id } = useParams();
    let [artist, setArtist] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3002/artists/${id}`)
            .then((response) => { return response.json() })
            .then((data) => {
                setArtist(data);
            })
          
    }, []);

    let renderAlbums = ()=>{
        return artist.albums.map((album) => {
            return (
                <Album  key={album.albumId} albumInfo={album} />
            )
        })
    }


    let renderArtist = () => {
        if (artist.name) {
            return (
                <div  >
                    <div className="card my-3 text-center" >
                        <center><img src={"../images/covers/" + artist.cover + ".jpg"} className="img"/></center>
                        <h5 >{artist.name}</h5>
                        <div >
                            <div>
                                <span >BIO: </span>
                                {artist.bio}
                            </div>
                            <div>
                                <span >Genre: </span>
                                {artist.genre}
                            </div>
                            <div>
                                <span >Albums </span>
                                <div >
                                    {renderAlbums()}                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } 
    }
    return (
        <div>
            <center><NavLink  to={'/artists'}>Music DB</NavLink></center>
            {renderArtist()}
        </div>
    );
}

export default ArtistDetails;