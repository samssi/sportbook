import React from "react";
import Footer from "./Footer"
import Header from "./Header"
import BookResult from "../../containers/BookResult"

const appStyle = {
    fontFamily: "'Indie Flower', cursive",
    fontSize: "30px",
    marginLeft: "15px",
    marginTop: "15px"
}

const Application = () => (
    <div style={appStyle}>
        <Header />
        <BookResult />
        <Footer />
    </div>
);

export default Application;