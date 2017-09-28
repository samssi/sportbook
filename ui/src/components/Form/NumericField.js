import React from "react";

export const renderNumeric = ({input, label, type, meta: { touched, error }}) => {
    return (
    <span>
        <input {...input} placeholder={label} type={type} style={validationStyle(touched, error)} />
    </span>
    );
}

const errorStyle = {
    color: "red"
};

const validationStyle = (touched, error) => {
    if (touched && error) {
        return errorStyle;
    }
    else {
        return {};
    }
}

