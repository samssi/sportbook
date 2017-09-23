import React from "react";
import BookResultForm from "../components/Result/BookResultForm"
import axiosFactory from "../axios/axiosFactory"

const axios = axiosFactory.createSportbookRestClient();

function submit(values) {
    console.log(values);
    axios.put("/runlog", values)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => { console.log("Error") });
}

const BookResult = (onFormSubmit) => (
    <BookResultForm onSubmit={submit} />
)

export default BookResult;