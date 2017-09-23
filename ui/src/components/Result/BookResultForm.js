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
                <Field 
                  name="runInKm" 
                  component="input"
                  type="text"
                  placeholder="6"
                  />
            </div>
            <div>
                <label htmlFor="Date"></label>
                <Field 
                 name="runDate" 
                 component="input" 
                 type="text"
                 placeholder="1.1.2017..."
                 />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
}

export default reduxForm({form: "bookResultForm"})(BookResultForm)