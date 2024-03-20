import React from "react";
import { useForm } from "@formspree/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";

const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please Enter a Valid Email").required("Required"),
  message: yup.string().required("Required"),
});

const onSubmit = async (values, actions) => {
  try {
    toast.success("Your message has been sent successfully!"); // Display success toast
    actions.resetForm();
    console.log("submitted");
  } catch (error) {
    console.error("Error:", error);
    toast.error("An error occurred. Please try again later."); // Display error toast
  }
};

const BasicForm = () => {
  const [state, handleSubmit] = useForm("xdoqdqer");

  const { values, errors, touched, handleChange, handleBlur, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit: async (values, actions) => {
        try {
          await handleSubmit(values);
          onSubmit(values, actions);
        } catch (error) {
          console.error("Error:", error);
          toast.error("An error occurred. Please try again later.");
        }
      },
    });

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="fields">
        <label htmlFor="">Full Name</label>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="fields">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>
      <div className="fields">
        <label htmlFor="">Message</label>
        <textarea
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Write what You want to talk about, Love to here you!!"
          className={errors.message && touched.message ? "input-error" : ""}
        ></textarea>
        {errors.message && touched.message && (
          <p className="error">{errors.message}</p>
        )}
      </div>
      <div className="submit-btn">
        <button
          disabled={isSubmitting}
          type="submit"
          className="submit-contact"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
