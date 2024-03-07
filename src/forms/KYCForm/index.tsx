import StyledTextField from "@/components/StyledTextField";
import { Email, PasswordOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  MenuItem,
  Typography,
} from "@mui/material";
import router from "next/navigation";
import React from "react";
import { Form as FormikForm, Formik } from "formik";

function KycForm() {
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          idNo: "",
          pin: "",
          county: "",
        }}
        // validationSchema={}
        validateOnBlur={false}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, values, touched, handleBlur, handleChange }) => (
          <FormikForm>
            <Grid container spacing="20px" >            
              <Grid item xs={12} md={6}>
                <Grid item>
                  <Typography variant="h6" fontWeight={500}>
                    First Name
                  </Typography>
                  <StyledTextField
                    adornment
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="First Name"
                    variant="outlined"
                    margin="dense"
                    autoComplete="off"
                    autoFocus
                    value={values.fullName || ""}
                    helperText={errors.fullName || null}
                    error={!!errors.fullName && touched.fullName}
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
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" fontWeight={500}>
                    Email Address
                  </Typography>
                  <StyledTextField
                    adornment
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    variant="outlined"
                    margin="dense"
                    autoComplete="off"
                    autoFocus
                    value={values.email || ""}
                    helperText={errors.email || null}
                    error={!!errors.email && touched.email}
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
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" fontWeight={500}>
                    ID Number
                  </Typography>
                  <StyledTextField
                    adornment
                    id="idNo"
                    name="idNo"
                    type="text"
                    placeholder="ID Number"
                    variant="outlined"
                    margin="dense"
                    autoComplete="off"
                    autoFocus
                    value={values.idNo || ""}
                    helperText={errors.idNo || null}
                    error={!!errors.idNo && touched.idNo}
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
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" fontWeight={500}>
                    KRA PIN Number
                  </Typography>
                  <StyledTextField
                    adornment
                    id="pin"
                    name="pin"
                    type="text"
                    placeholder="PIN Number"
                    variant="outlined"
                    margin="dense"
                    autoComplete="off"
                    autoFocus
                    value={values.pin || ""}
                    helperText={errors.pin || null}
                    error={!!errors.pin && touched.pin}
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
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid item>
                  <Typography variant="h6" fontWeight={500}>
                    County
                  </Typography>
                  <StyledTextField
                    adornment
                    id="county"
                    name="county"
                    select
                    placeholder="County"
                    variant="outlined"
                    margin="dense"
                    autoComplete="off"
                    autoFocus
                    value={values.county || ""}
                    helperText={errors.county || null}
                    error={!!errors.county && touched.county}
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
                  >
<MenuItem>
Nairobi
</MenuItem>

                  </StyledTextField>
                </Grid>
              </Grid>
            </Grid>
          </FormikForm>
        )}
      </Formik>
    </>
  );
}

export default KycForm;
