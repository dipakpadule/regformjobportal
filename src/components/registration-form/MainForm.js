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

const MainForm = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, mt: 2 }}>
        Find a job & grow your career{" "}
      </Typography>
      <form>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grid item>
            <InputLabel htmlFor="fullname" sx={{ fontWeight: "bold" }}>
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
            <InputLabel htmlFor="email" sx={{ fontWeight: "bold" }}>
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
            <InputLabel htmlFor="password" sx={{ fontWeight: "bold" }}>
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
            <InputLabel htmlFor="mobilenumber" sx={{ fontWeight: "bold" }}>
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
          <Grid item>
            <InputLabel htmlFor="workstatus" sx={{ fontWeight: "bold", mb: 1 }}>
              Work Status
            </InputLabel>
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

        <Grid item>
          <Typography sx={{ mt: 2 }}>
            By clicking Register, you agree to the Terms and Conditions &
            Privacy of ToppersSkill.com
          </Typography>
          <Button variant="contained" sx={{ mt: 3 }}>
            Register Now
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default MainForm;
