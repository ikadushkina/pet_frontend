import styles from "./SignUp.module.scss";
import { useFormik } from "formik";
import userState from "../../store/userState";
import { Button } from "../../atoms/Button";
import Input from "../../atoms/Input";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react";
import * as Yup from "yup";

export default observer(() => {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (userState.data) navigate("/");
  }, [userState.data]);

  console.log(formik.errors, formik);
  return (
    <div className={styles.root}>
      <span>SIGN UP</span>
      <div className={styles.form}>
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
        <Button onClick={onSubmit}>Sign Up</Button>
      </div>
    </div>
  );
});
