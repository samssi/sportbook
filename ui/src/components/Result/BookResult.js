import React from "react";
import BookResultForm from "../../containers/BookResultForm"

const BookResult = () => {
    submit = (values) => {
        console.log(values);
    }
    
    return (
        <BookResultForm onSubmit={this.submit} />
    );
}