import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderNumeric } from "../Form/NumericField"
import { nbsp } from "../../helpers/unicodeMarkup"

const required = value => (value ? undefined : 'Required');
const alphaNumeric = value => (value && /[^0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined);

const booking = {
    marginLeft: "50px"
};

let BookResultForm = (props) => {
    const { handleSubmit } = props;

    return (
    <div style={booking}>
        <form>
            <div>
            <label htmlFor="runDate">On </label>
                <Field 
                 name="runDate" 
                 component="input" 
                 type="text"
                 placeholder="1.1.2017..."
                 />
                 {nbsp}
                <label htmlFor="runInKm">ran for (km)</label>
                <Field 
                  name="runInKm" 
                  component={renderNumeric}
                  type="text"
                  placeholder="6"
                  validate={[required, alphaNumeric]}
                  error={[required, alphaNumeric]}
                  />
                  {nbsp}{nbsp}{nbsp}
                <a href="#" onClick={handleSubmit}>Submit</a>
            </div>
        </form>
    </div>
    );
}

export default reduxForm({form: "bookResultForm"})(BookResultForm)