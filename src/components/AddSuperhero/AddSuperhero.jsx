import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useDispatch } from "react-redux";
// import { addItem } from "../../redux/superheroSlice";

const AddSuperhero = () => {
  // const dispatch = useDispatch();
  const initialValues = {
    nickname: "",
    realName: "",
    // originDescription: "",
    // superpowers: "",
    // catchPhrase: "",
    // images: "",
  };

  const validationSchema = Yup.object({
    nickname: Yup.string().required(),
    realName: Yup.string().required(),
    // originDescription: Yup.string().required(),
    // superpowers: Yup.string().required(),
    // catchPhrase: Yup.string().required(),
    // images: Yup.mixed().required("Image is required"),
  });

  const handleSubmit = (values, submitProps) => {
    // dispatch(addItem(values));
    submitProps.resetForm();
  };

  //   const onAddItem = (data) => {
  //     setList((prevList) => {
  //       const newItem = {
  //         name: data.name,
  //         realName: data.realName,
  //       };

  //       return [newItem, ...prevList];
  //     });
  //     return true;
  //   };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <FormikControl
            control="input"
            type="name"
            label="Nickname"
            name="nickname"
          />
          <FormikControl
            control="input"
            type="name"
            label="Real Name"
            name="realName"
          />

          {/* <FormikControl
            control="textarea"
            label="Origin Description"
            name="originDescription"
          />
          <FormikControl
            control="textarea"
            label="Superpovers"
            name="superpowers"
          />
          <FormikControl
            control="textarea"
            label="Catch Phrase"
            name="catchPhrase"
          /> */}

          {/* <FormikControl
            control="input"
            type="file"
            multiple
            label="Superhero Photo"
            name="images"
          /> */}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddSuperhero;
