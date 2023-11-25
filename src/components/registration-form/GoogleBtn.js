import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GoogleBtn = () => {
  return (
    <>
      <Typography variant="body2" sx={{ fontWeight: "bold", letterSpacing: 1 }}>
        Continue with
      </Typography>
      <Button
        variant="outlined"
        sx={{ textTransform: "capitalize", mt: 0.5, borderRadius: 5 }}
        startIcon={<GoogleIcon sx={{ color: "red" }} />}
      >
        Google
      </Button>
    </>
  );
};

export default GoogleBtn;
