import React from "react";
import ReactDOM from "react-dom";
import FormRenderer, {
  componentTypes
} from "@data-driven-forms/react-form-renderer";
import {
  formFieldsMapper,
  layoutMapper
} from "@data-driven-forms/pf4-component-mapper";

const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: "name",
      label: "Your name"
    }
  ]
};

const Form = () => (
  <FormRenderer
    schema={schema}
    formFieldsMapper={formFieldsMapper}
    layoutMapper={layoutMapper}
    onSubmit={console.log}
  />
);

ReactDOM.render(<Form />, document.getElementById("root"));
