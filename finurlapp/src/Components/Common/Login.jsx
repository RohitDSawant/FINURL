import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Link,
} from "@mui/material";
import styles from "./../../CSS/authentication.module.css";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/Func/Authentication/Authenticate";

const Login = ({ toggleView }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signUp(formData));
  };

  return (
    <Box className={styles.login_form}>
      <Typography mb={4} variant="h6">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <InputLabel sx={{ fontSize: "small", fontWeight: 600 }} htmlFor="email">
          Email :
        </InputLabel>
        <FormControl
          variant="outlined"
          fullWidth
          sx={{ marginTop: "5px", marginBottom: "10px" }}
        >
          <TextField
            id="email"
            size="small"
            required
            type="email"
            // label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <InputLabel
          sx={{ fontSize: "small", fontWeight: 600 }}
          htmlFor="password"
        >
          Password :
        </InputLabel>
        <FormControl
          variant="outlined"
          fullWidth
          sx={{ marginTop: "5px", marginBottom: "10px" }}
        >
          <TextField
            id="password"
            size="small"
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          type="submit"
          id={styles.signup_btn}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
      <Typography variant="body2" mt={2} textAlign={"center"}>
        Don't have an account ?
        <Typography variant="body2">
          <Link href={"#"} onClick={toggleView} color={"#fff  "}>
            Create a new account
          </Link>
        </Typography>
      </Typography>
    </Box>
  );
};

export default Login;
