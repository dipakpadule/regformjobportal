import React from "react";

import Paper from "@mui/material/Paper";
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

const MainForm = () => {
  return (
    <Paper sx={{ padding: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Find a job & grow your career{" "}
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Grid item>
          <InputLabel htmlFor="fullname" sx={{ fontWeight: "semi-bold" }}>
            Full name
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            label="What is your name?"
            type="text"
            name="name"
            sx={{ mt: 1 }}
          ></TextField>
        </Grid>
        <Grid item>
          <InputLabel htmlFor="fullname" sx={{ fontWeight: "semi-bold" }}>
            Email ID
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            label="Tell us your Email ID"
            type="email"
            name="email"
            sx={{ mt: 1 }}
          ></TextField>
        </Grid>
        <Grid item>
          <InputLabel htmlFor="fullname" sx={{ fontWeight: "semi-bold" }}>
            Password
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            label="Create a password for your account"
            type="password"
            name="password"
            sx={{ mt: 1 }}
          ></TextField>
        </Grid>
        <Grid item>
          <InputLabel htmlFor="fullname" sx={{ fontWeight: "semi-bold" }}>
            Mobile number
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            label="Mobile Number"
            type="tel"
            name="mobile"
            sx={{ mt: 1 }}
          ></TextField>
        </Grid>
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <FormControlLabel
          control={<Checkbox name="whatsapp" />}
          label="Send me important updates on"
        />
        <Link
          underline="none"
          color="black"
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <WhatsAppIcon variant="div" sx={{ color: "green", fontSize: 20 }} />
          <Typography> WhatsApp</Typography>
        </Link>
      </Grid>

      <Typography sx={{ mt: 2 }}>
        By clicking Register, you agree to the Terms and Conditions & Privacy
        Policy of ToppersSkill.com
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }}>
        Register Now
      </Button>
    </Paper>
  );
};

export default MainForm;
