import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import * as yup from "yup";
import { Formik } from "formik";
const userSchema = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 chars"),
  email: yup.string().email("enter valid email").required("email is required"),
  password: yup
    .string()
    .min(8, "password must be at least 8 chats")
    .required("password is required"),
  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "mobile must be 10 digits")
    .required("mobile is required"),
});

const MainForm = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, mt: 2 }}>
        Find a job & grow your career{" "}
      </Typography>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          mobile: "",
          whatsapp: false,
        }}
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
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: "bold" }}>Full name</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  autoFocus
                  autoComplete="off"
                  label="What is your name?"
                  value={values.name}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched?.name && errors?.name ? true : false}
                  helperText={touched?.name && errors?.name}
                  sx={{ mt: 1 }}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: "bold" }}>Email ID</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  label="Tell us your Email ID"
                  value={values.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched?.email && errors?.email ? true : false}
                  helperText={touched?.email && errors?.email}
                  sx={{ mt: 1 }}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: "bold" }}>Password</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Create a password for your account"
                  value={values.password}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched?.password && errors?.password ? true : false}
                  helperText={touched?.password && errors?.password}
                  sx={{ mt: 1 }}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography htmlFor="mobile" sx={{ fontWeight: "bold" }}>
                  Mobile number
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Mobile Number"
                  value={values.mobile}
                  type="number"
                  name="mobile"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched?.mobile && errors?.mobile ? true : false}
                  helperText={touched?.mobile && errors?.mobile}
                  sx={{ mt: 1 }}
                ></TextField>
              </Grid>
              {/* Work Status */}
              <Grid item>
                <Typography
                  htmlFor="workstatus"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  Work Status
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Card
                    sx={{
                      minWidth: 320,
                      border: "1px solid black",
                      borderRadius: 5,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ fontSize: 15 }}>
                        I'm Experienced
                      </Typography>
                      <Typography variant="body2">
                        I have work experience (excluding internships)
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 320,
                      border: "1px solid #fff",
                      borderRadius: 5,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ fontSize: 15 }}>
                        I'm a Fresher
                      </Typography>
                      <Typography variant="body2">
                        I am a student/ Haven't worked after graduation
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="whatsapp"
                    onChange={() => (values.whatsapp = !values.whatsapp)}
                  />
                }
                label="Send me important updates on"
              />
              <Link
                underline="none"
                color="black"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <WhatsAppIcon
                  variant="div"
                  sx={{ color: "green", fontSize: 20 }}
                />
                <Typography> WhatsApp</Typography>
              </Link>
            </Grid>

            <Grid item>
              <Typography sx={{ mt: 2 }}>
                By clicking Register, you agree to the Terms and Conditions &
                Privacy of ToppersSkill.com
              </Typography>
              <Button variant="contained" type="submit" sx={{ mt: 3 }}>
                Register Now
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default MainForm;
