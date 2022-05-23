import styles from "./Login.module.scss";
import { useFormik } from "formik";
import userState from "../../store/userState";
import { Button } from "../../atoms/Button";
import Input from "../../atoms/Input";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import * as Yup from "yup";
import AuthLayout from "../../components/AuthLayout";
import LoadingPage from "../../components/LoadingPage";

export default observer(() => {
  const loading = userState.loading;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("This field is required"),
      email: Yup.string().email("Invalid email").required("This field is required")
    })
  });

  const onSubmit = async () => {
    await userState.login(formik.values);
  };

  return (
    <AuthLayout>
      <span className={styles.text}>Log In</span>
      <Input
        name="email"
        label="Enter you email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email ? formik.errors.email : ""}
        />
      <Input
        type="password"
        name="password"
        label="Enter your password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password ? formik.errors.password : ""}
        />
      <Button className={styles.button} onClick={onSubmit} disabled={!formik.isValid}>Login</Button>
      <span>Don`t have account yet? <br/> Just <NavLink to="/sign-up">Sign Up!</NavLink></span>
      {
        loading && <LoadingPage />
      }
    </AuthLayout>
  );
});
