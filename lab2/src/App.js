import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Routing/Header";
import Home from "./Routing/Home";
import StudentDetails from "./Routing/StudentDetails";
import Error from "./Routing/Error";
import About from "./Routing/About";

const App = () => {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="students/:id" element={<StudentDetails />} />
            <Route path="about" element={<About />} />
            <Route path="error" element={<Error />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>;
}
export default App;