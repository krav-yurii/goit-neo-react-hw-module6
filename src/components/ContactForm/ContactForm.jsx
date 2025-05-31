import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contactsSlice.js";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min length for Name is 3")
    .max(50, "Max length for Name is 50")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format must be 000-00-00")
    .required("Number is required"),
});

function ContactForm() {
  const dispatch = useDispatch();


  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
      validateOnMount={true}
    >
      <Form className={styles.container}>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label>
          Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
