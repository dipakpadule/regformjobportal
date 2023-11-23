import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const StickyCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
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
  );
};

export default StickyCard;
