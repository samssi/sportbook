import React from "react";
import { Field, reduxForm } from "redux-form";

const booking = {
    marginLeft: "50px"
};

let BookResultForm = (props) => {
    const { handleSubmit } = props;
    return (
    <div style={booking}>
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="Running (km)"></label>
                <Field name="runInKm" type="text"/>
            </div>
            <div>
                <label htmlFor="Date"></label>
                <Field name="runDate" type="text"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
}

BookResultForm = reduxForm({form: "bookResultForm"})(BookResultForm)

export default BookResultForm;