import React from "react";
import Footer from "./Footer"

const fontStyle = {
    fontFamily: "'Indie Flower', cursive",
    fontSize: "30px"
}

const Application = () => (
    <div style={fontStyle}>
        <div>SportBook</div>
        <Footer />
    </div>
);

export default Application;