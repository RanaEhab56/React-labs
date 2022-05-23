import { Component } from "react";
import { NavLink } from "react-router-dom";
import ArtistItem from "./ArtistItem";

export default class Artists extends Component {
    constructor() {
        super();
        this.state = {
            allArtists: [],
        };
    }

    renderAllArtists = () => {
        if (this.state.allArtists.length > 0) {
            return this.state.allArtists.map((artist) => {
                return (
                    <ArtistItem key={artist.id} artistInfo={artist} />
                )
            })
        } 
      
    }

    render() {
        return (
            <div className="content">            
                <NavLink  to={'/'}>Home</NavLink>
                {this.renderAllArtists()}
            </div>
        )
    }

    componentDidMount() {
        fetch("http://localhost:3002/artists")
        
            .then((response) => { return response.json() })
            .then((data) => {
                this.setState({ allArtists: data })
            })
    }
}