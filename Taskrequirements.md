--- form validation practice using useEffect()
task--- design naukari registration form https://www.naukri.com/registration/createAccount?othersrcp=22636

cotainer
-- header and content
content
--left pan and right container

leftpan
--sticky wrapper

right container
-- rightpan and footer

rightpan
---register wrapper
------form wrapper and google sign up wrapper

form wrapper
---<form> </form>

## main box padding and margin and gap

<Box
sx={{
          display: "flex",
          gap: 5,
          mt: 5,
        }} >
<Box sx={{ maxWidth: 300 }}>
<StickyCard />
</Box>

        <Box>
          <Footerr />
        </Box>
      </Box>

######

import React from "react";
import { Formik } from "formik";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import \* as yup from "yup";
const userSchema = yup.object().shape({
name: yup
.string()
.required("name is required")
.min(3, "name must be at least 3 chars"),
mobile: yup.string().matches(/^[0-9]{10}$/, "mobile must be 10 digits"),
email: yup.string().email("enter valid email"),
password: yup.string().min(8, "password must be at least 8 chats"),
});
const FormikValidation = () => {
return (
<Container>
<h3>Formik Validation</h3>
<Paper sx={{ p: 5 }}>
<Formik
initialValues={{
            name: "",
            mobile: "",
            email: "",
            password: "",
          }}
//manual validation
// validate={(values) => {
// const errors = {};
// if (!values.name) errors.name = "Name is required!";
// else if (values?.name?.length < 3)
// errors.name = "must be 3 chars long";

          //     if (!values.mobile) errors.mobile = "mobile is must";
          //     else if (/^[0-9]{10}$/.test(values.mobile))
          //       errors.mobile = "Mobile must be 10 digit";

          //     return errors;
          //   }}
          //validation schema
          validationSchema={userSchema}
          onSubmit={(values) => {
            console.log("user: ", values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    label="Name"
                    value={values.name}
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched?.name && errors?.name ? true : false}
                    helperText={touched?.name && errors?.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Mobile"
                    value={values.mobile}
                    name="mobile"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched?.mobile && errors?.mobile ? true : false}
                    helperText={touched?.mobile && errors?.mobile}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    value={values.email}
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched?.email && errors?.email ? true : false}
                    helperText={touched?.email && errors?.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Password"
                    value={values.password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched?.password && errors?.password ? true : false}
                    helperText={touched?.password && errors?.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth type="submit">
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Paper>
    </Container>

);
};

export default FormikValidation;

//Controlled inputs
//value attribute is set then controlled

//uncontrolled inputs
//when value is not set then uncontrolled

//two ways of validation
//1. validating manually --validate
//2. Validating using a schema --schema object
