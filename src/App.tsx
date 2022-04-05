import React from "react";
import { Routes, Route } from "react-router-dom";

import Article from "./Article";
import BreathingExercise from "./BreathingExercise";
import Chess from "./Chess";
import ContactForm from "./ContactForm";
import Header from "./Header";

const App = () => {
    return (
        <>
            <Header />
            <div className="container" id="content">
                <Routes>
                    <Route path="article" element={<Article />} />
                    <Route path="chess" element={<Chess />} />
                    <Route path="contact" element={<ContactForm />} />
                    <Route path="/" element={<BreathingExercise />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
