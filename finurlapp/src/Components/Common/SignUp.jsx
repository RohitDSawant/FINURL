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

const SignUp = ({ toggleView }) => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    mobile_no: "",
    pan_number: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box className={styles.signup_form}>
      <Typography mb={2} variant="h6">
        Sign Up
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
            id="fullname"
            size="small"
            required
            type="text"
            // label="Email"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </FormControl>

        <InputLabel
          sx={{ fontSize: "small", fontWeight: 600 }}
          htmlFor="username"
        >
          Username :
        </InputLabel>
        <FormControl
          variant="outlined"
          fullWidth
          sx={{ marginTop: "5px", marginBottom: "10px" }}
        >
          <TextField
            id="username"
            size="small"
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormControl>

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

        <InputLabel sx={{ fontSize: "small", fontWeight: 600 }} htmlFor="email">
          Nobile no :
        </InputLabel>
        <FormControl
          variant="outlined"
          fullWidth
          sx={{ marginTop: "5px", marginBottom: "10px" }}
        >
          <TextField
            id="mobile"
            size="small"
            required
            type="number"
            // label="Email"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
          />
        </FormControl>

        <InputLabel sx={{ fontSize: "small", fontWeight: 600 }} htmlFor="email">
          PAN No :
        </InputLabel>
        <FormControl
          variant="outlined"
          fullWidth
          sx={{ marginTop: "5px", marginBottom: "10px" }}
        >
          <TextField
            id="pan"
            size="small"
            required
            type="text"
            // label="Email"
            name="pan_number"
            value={formData.pan_number}
            onChange={handleChange}
          />
        </FormControl>

        <InputLabel sx={{ fontSize: "small", fontWeight: 600 }} htmlFor="email">
          Pincode :
        </InputLabel>
        <FormControl
          variant="outlined"
          fullWidth
          sx={{ marginTop: "5px", marginBottom: "10px" }}
        >
          <TextField
            id="pincode"
            size="small"
            required
            type="number"
            // label="Email"
            name="pincode"
            value={formData.pincode}
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
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" mt={2} textAlign={"center"}>
        Already have an account ?{" "}
        <Link href={"#"} onClick={toggleView} color={"#fff  "}>
          Login here
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
