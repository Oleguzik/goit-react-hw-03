import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";

function ContactForm({ onAddContact }) {
  const nameId = useId();
  const numberId = useId();
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  function handleSubmit(values, actions) {
    onAddContact({
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    });
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.inputArea}>
        <InputForm id={nameId} type="text" name="name">
          Name
        </InputForm>
        <InputForm id={numberId} type="text" name="number">
          Number
        </InputForm>
        <div>
          <button className={css.btn} type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}

function InputForm({ id, type, name, children }) {
  return (
    <div className={css.inputField}>
      <label htmlFor={id}>{children}</label>
      <Field className={css.input} type={type} name={name} id={id}></Field>
      <span className={css.error}>
        <ErrorMessage as="span" name={name} />
      </span>
    </div>
  );
}

export default ContactForm;
