import React from "react";
// import { Formik } from "formik";
import logo from "./logo.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
// import Button from "@mui/material/Button";

const RegForm = () => {
  return (
    <>
      <Container maxWidth="xl">
        {/* header */}
        <Box sx={{ minHeight: "5em", bgcolor: "#fff" }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 2em 0 2em",
              alignItems: "center",
            }}
          >
            <Grid item>
              <img src={logo} alt="logo" />
            </Grid>
            <Grid item>
              <Typography component="h6">
                Already Registered?{" "}
                <Link href="#" underline="none">
                  Login{" "}
                </Link>
                here
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Main container */}
        <Box sx={{ minHeight: "100dvh", padding: 2 }}>
          {/* sticky card left side */}
          <Box sx={{ maxWidth: 300, position: "fixed" }}>
            <Card sx={{ minWidth: 275, mt: 4 }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={require("./boy.jpg")}
                  alt="Paella dish"
                  sx={{ width: "9em" }}
                />
                <Typography variant="h6" component="span" sx={{ mb: 1 }}>
                  On registering, you can
                </Typography>
                <Grid container>
                  <Grid item sx={{ display: "flex", mb: 1 }}>
                    <CheckCircleRoundedIcon
                      variant="div"
                      sx={{ color: "green", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="div">
                      Build your profile and let recruiters find you
                    </Typography>
                  </Grid>
                  <Grid item sx={{ display: "flex", mb: 1 }}>
                    <CheckCircleRoundedIcon
                      variant="div"
                      sx={{ color: "green", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="div">
                      Get job postings delivered right to your email
                    </Typography>
                  </Grid>
                  <Grid item sx={{ display: "flex" }}>
                    <CheckCircleRoundedIcon
                      variant="div"
                      sx={{ color: "green", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="div">
                      Find a job and grow your career
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegForm;
