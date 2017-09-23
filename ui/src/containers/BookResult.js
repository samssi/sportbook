import React from "react";
import BookResultForm from "../components/Result/BookResultForm"

function submit(values) {
    console.log(values);
}

const BookResult = (onFormSubmit) => (
    <BookResultForm onSubmit={submit} />
)

export default BookResult;