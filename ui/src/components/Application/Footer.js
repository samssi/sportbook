import React from "react";

const footer = {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    left: "0px",
    bottom: "0px",
    height: "100px",
    width: "100%"
};

const Footer = () => (
    <div style={footer}>
        <p>
            Powered by <a href="https://github.com/samssi/sportbook">SportBook engine</a>
        </p>
    </div>
)

export default Footer;