"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Form as FormikForm, Formik } from "formik";
import { useRouter } from "next/navigation";
import RouterLink from "next/link";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import { Email, Lock, PasswordOutlined } from "@mui/icons-material";
import errorHandler from "../utils/errorHandler";
import isEmptyObject from "../utils/isEmptyObject";
import StyledTextField from "../components/StyledTextField";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password"),
});

const ForgotPasswordGrid = styled(Grid)(({ theme }) => ({
  marginBottom: "1.4em",
  alignItems: "right",
  textAlign: "right",
  color: theme.palette.primary.main,
  fontFamily: "Futura",
}));

const ForgotPasswordLink = styled(Link)(() => ({
  fontSize: "1.2em",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
}));

const CreateAccountLink = styled(Link)(() => ({
  fontWeight: 500,
  cursor: "pointer",
}));

function SIgnInForm() {
  const router = useRouter();
  const [passwordIsMasked, setPasswordIsMasked] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState();
  const [requestLoading, setRequestLoading] = React.useState(false);

  const disableButton = (values, errors) => {
    if (
      values.username !== "" &&
      values.password !== "" &&
      isEmptyObject(errors)
    ) {
      return false;
    }
    return true;
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      validateOnBlur={false}
      onSubmit={(values) => {
        setErrorMessage("Error");
        setRequestLoading(true);
      }}
    >
      {({ errors, values, touched, handleBlur, handleChange }) => (
        <FormikForm>
          <Grid container spacing="20px">
            <Grid item xs={12} className="center">
              <Typography
                variant="h1"
                fontWeight="700px"
                fontFamily="Futura"
                fontSize="40px"
                textAlign="center"
                sx={{
                  marginBottom: 1.25,
                }}
              >
                Nanny Connect
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                <Typography variant="h3">Login</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid item>
                <Typography variant="h6" fontWeight={500}>
                  Usename/Email
                </Typography>
                <StyledTextField
                  adornment
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Email Address"
                  variant="outlined"
                  margin="dense"
                  autoComplete="off"
                  autoFocus
                  value={values.username || ""}
                  helperText={errors.username || null}
                  error={!!errors.username && touched.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Unidentified") {
                      e.preventDefault();
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
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
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" fontWeight={500}>
                  Password
                </Typography>
                <StyledTextField
                  adornment
                  id="password"
                  name="password"
                  error={!!errors.password && touched.password}
                  type={passwordIsMasked ? "password" : "text"}
                  variant="outlined"
                  placeholder="Password"
                  autoComplete="off"
                  margin="dense"
                  size="medium"
                  value={values.password || ""}
                  helperText={errors.password || null}
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
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        style={{
                          visibility: !values.password ? "hidden" : "visible",
                        }}
                        position="end"
                        disablePointerEvents={!values.password || false}
                        sx={{
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
                        <PasswordOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {errorMessage ? (
                  <Typography
                    variant="body1"
                    sx={(theme) => ({
                      color: "red",
                    })}
                  >
                    {errorMessage}
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
              <ForgotPasswordGrid item xs={12}>
                <RouterLink href="/forgot-password">
                  <ForgotPasswordLink>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: "13px",
                      }}
                    >
                      <Lock />
                      Forgot Password?
                    </Box>
                  </ForgotPasswordLink>
                </RouterLink>
              </ForgotPasswordGrid>
            </Grid>

            <Grid item xs={12} className="center">
              <Button
                size="large"
                variant="contained"
                fullWidth
                type="submit"
                disabled={disableButton(values, errors)}
                sx={{
                  borderRadius: "200px",
                }}
                onClick={() => {
                  router.push("/account/nanny");
                }}
              >
                {requestLoading ? (
                  <CircularProgress
                    sx={(theme) => ({
                      color: "#fff",
                    })}
                  />
                ) : (
                  <>LOGIN</>
                )}
              </Button>
            </Grid>
            <Grid item xl={1} xs={4} />
          </Grid>
        </FormikForm>
      )}
    </Formik>
  );
}

export default SIgnInForm;
