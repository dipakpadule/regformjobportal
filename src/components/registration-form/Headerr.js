import React from "react";
import logo from "./logo.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Headerr = () => {
  return (
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
  );
};

export default Headerr;
