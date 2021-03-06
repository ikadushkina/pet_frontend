import styles from "./SignUp.module.scss";
import { useFormik } from "formik";
import userState from "../../store/userState";
import { Button } from "../../atoms/Button";
import Input from "../../atoms/Input";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import * as Yup from "yup";
import AuthLayout from "../../components/AuthLayout";

export default observer(() => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("This field is required"),
      password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("This field is required"),
      email: Yup.string().email("Invalid email").required("This field is required")
    })
  });

  const onSubmit = async () => {
    await userState.signUp(formik.values);
  };

  return (
    <AuthLayout>
      <span className={styles.text}>SIGN UP</span>
      <Input
        name="name"
        label="Come up with your nickname..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name ? formik.errors.name : ""}
        />
      <Input
        name="email"
        label="...enter your email..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email ? formik.errors.email : ""}
        />
      <Input
        type="password"
        name="password"
        label="...and come up with your password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password ? formik.errors.password : ""}
        />
      <Button className={styles.button} onClick={onSubmit} disabled={!formik.isValid}>Sign Up</Button>
      <span>Already has account? Just <NavLink to="/login">login!</NavLink></span>
    </AuthLayout>
  );
});
