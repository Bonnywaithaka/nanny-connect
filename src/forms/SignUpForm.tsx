"use client";
import React from "react";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Form as FormikForm, Formik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Button from "@mui/material/Button";
import { MenuItem, TextField } from "@mui/material";

const SignUpSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  msisdn: Yup.string().required("Please enter the mobile number"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  password: Yup.string().required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const userType = [
  {
    id: "1",
    name: "Nanny",
  },
  {
    id: "2",
    name: "Employer",
  },
];

const SignUpContainer = () => {
  const [passwordIsMasked, setPasswordIsMasked] = React.useState(true);
  const [requestLoading, setRequestLoading] = React.useState(false);

  const [checkBoxValue, setCheckBoxValue] = React.useState("");

  const disableButton = (values, errors) => {
    if (
      values.emailAddress !== "" &&
      values.msisdn !== "" &&
      values.idNumber !== "" &&
      checkBoxValue === "yes" &&
      errors
    ) {
      return false;
    }
    return true;
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          emailAddress: "",
          msisdn: "",
          userType: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
        validateOnBlur={false}
        onSubmit={(values, actions) => {
          setRequestLoading(true);
          console.log(values, actions);
        }}
      >
        {({
          errors,
          values,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
          submitForm,
        }) => (
          <FormikForm>
            <Grid container direction="column">
              <Grid item mt="27px" className="center">
                <Typography
                  variant="h2"
                  color="primary"
                  sx={{
                    marginBottom: 1.25,
                  }}
                >
                  Sign UP
                </Typography>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" fontWeight={500}>
                    First Name
                  </Typography>
                  <TextField
                    id="firstName"
                    error={Boolean(touched.firstName && errors.firstName)}
                    name="firstName"
                    size="medium"
                    type="text"
                    fullWidth
                    placeholder="John"
                    variant="outlined"
                    margin="dense"
                    autoComplete="off"
                    autoFocus
                    helperText={touched.firstName && errors.firstName}
                    value={values.firstName || ""}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Unidentified") {
                        e.preventDefault();
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{
                            paddingRight: "5px",
                            color: "#C8C8C8",
                          }}
                        >
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" fontWeight={500}>
                    Last Name
                  </Typography>
                  <TextField
                    id="lastName"
                    error={Boolean(touched.lastName && errors.lastName)}
                    name="lastName"
                    size="medium"
                    type="text"
                    fullWidth
                    placeholder="Doe"
                    variant="outlined"
                    margin="dense"
                    autoComplete="off"
                    autoFocus
                    helperText={touched.lastName && errors.lastName}
                    value={values.lastName || ""}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Unidentified") {
                        e.preventDefault();
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{
                            paddingRight: "5px",
                            color: "#C8C8C8",
                          }}
                        >
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight={500}>
                  Email
                </Typography>
                <TextField
                  id="emailAddress"
                  error={Boolean(touched.emailAddress && errors.emailAddress)}
                  name="emailAddress"
                  size="medium"
                  type="email"
                  fullWidth
                  placeholder="Eg. Johnmike@safaricom.co.ke"
                  variant="outlined"
                  margin="dense"
                  autoComplete="off"
                  autoFocus
                  helperText={touched.emailAddress && errors.emailAddress}
                  value={values.emailAddress || ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Unidentified") {
                      e.preventDefault();
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{
                          paddingRight: "5px",
                          color: "#C8C8C8",
                        }}
                      >
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight={500}>
                  User Type
                </Typography>
                <TextField
                  id="userType"
                  error={Boolean(touched.userType && errors.userType)}
                  name="userType"
                  select
                  fullWidth
                  size="medium"
                  variant="outlined"
                  margin="dense"
                  autoComplete="off"
                  helperText={touched.userType && errors.userType}
                  value={values.lastName || ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  defaultValue="2"
                  onKeyDown={(e) => {
                    if (e.key === "Unidentified") {
                      e.preventDefault();
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{
                          paddingRight: "5px",
                          color: "#8f9bba",
                        }}
                      >
                        {/* <Padlock /> */}
                      </InputAdornment>
                    ),
                  }}
                >
                  {userType.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight={500}>
                  Phone Number
                </Typography>
                <TextField
                  id="msisdn"
                  error={Boolean(touched.msisdn && errors.msisdn)}
                  name="msisdn"
                  type="tel"
                  placeholder="Eg.0700 000 000"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  size="medium"
                  autoComplete="off"
                  value={values.msisdn || ""}
                  helperText={touched.msisdn && errors.msisdn}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Unidentified") {
                      e.preventDefault();
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{
                          paddingRight: "5px",
                          color: "#8f9bba",
                        }}
                      >
                        {/* <Phone /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight={500}>
                  Password
                </Typography>
                <TextField
                  id="password"
                  error={Boolean(touched.password && errors.password)}
                  name="password"
                  size="medium"
                  fullWidth
                  type={passwordIsMasked ? "password" : "text"}
                  placeholder="Password"
                  variant="outlined"
                  autoComplete="off"
                  margin="dense"
                  helperText={touched.password && errors.password}
                  value={values.password || ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{
                          color: "#8f9bba",
                        }}
                      >
                        <LockOutlinedIcon style={{ height: "20px" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        disablePointerEvents={!values.password || false}
                        sx={{
                          cursor: "pointer",
                          ...(passwordIsMasked
                            ? {
                                opacity: 0.3,
                              }
                            : {
                                opacity: 1,
                              }),
                        }}
                        onClick={() => {
                          setPasswordIsMasked(!passwordIsMasked);
                        }}
                      >
                        {/* <PasswordShow /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight={500}>
                  Confirm Password
                </Typography>
                <TextField
                  id="confirmPassword"
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  name="confirmPassword"
                  type={passwordIsMasked ? "password" : "text"}
                  size="medium"
                  placeholder="Confirm Password"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  margin="dense"
                  value={values.confirmPassword || ""}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{
                          color: "#8f9bba",
                        }}
                      >
                        <LockOutlinedIcon style={{ height: "20px" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        disablePointerEvents={!values.confirmPassword || false}
                        sx={{
                          cursor: "pointer",
                          ...(passwordIsMasked
                            ? {
                                opacity: 0.3,
                              }
                            : {
                                opacity: 1,
                              }),
                        }}
                        onClick={() => {
                          setPasswordIsMasked(!passwordIsMasked);
                        }}
                      >
                        {/* <PasswordShow /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={disableButton(values, errors)}
                >
                  {requestLoading ? (
                    <CircularProgress
                      sx={(theme) => ({
                        // color: theme.palette.white,
                      })}
                    />
                  ) : (
                    <>SIGN UP</>
                  )}
                </Button>
              </Grid>
            </Grid>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default SignUpContainer;
