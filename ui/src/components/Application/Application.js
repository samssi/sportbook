import React from "react";
import Footer from "./Footer"
import Header from "./Header"

const appStyle = {
    fontFamily: "'Indie Flower', cursive",
    fontSize: "30px",
    marginLeft: "15px",
    marginTop: "15px"
}

const Application = () => (
    <div style={appStyle}>
        <Header />
        <Footer />
    </div>
);

export default Application;