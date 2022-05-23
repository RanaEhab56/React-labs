import React from "react";
import Home from "./Components/Home";
import ArtistDetails from "./Components/ArtistDetails";
import Artists from "./Components/Artists"
import Error from "./Components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom"

let App = ()=>{
  return (
     <BrowserRouter>
        <Routes>
           <Route path="" element={<Home />}/>
           <Route path="home" element={<Home />}/>
           <Route path="artists" element={<Artists />}/>
            <Route path="artists/:id" element={<ArtistDetails />}/>
            <Route path="error" element={<Error />} />
            <Route path="*" element={<Error />} />
        </Routes>
     </BrowserRouter>
  )
}

export default App;