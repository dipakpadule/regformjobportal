import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import StickyCard from "./StickyCard";
import Footerr from "./Footerr";
import Headerr from "./Headerr";
import MainForm from "./MainForm";

const RegFormPage = () => {
  return (
    <Container maxWidth="xl">
      <Headerr />
      <Box sx={{ display: "flex", gap: 5, mt: 5 }}>
        <Box sx={{ maxWidth: 300 }}>
          <StickyCard />
        </Box>

        <Box sx={{ flexGrow: 3 }}>
          <MainForm />
          <Footerr />
        </Box>
      </Box>
    </Container>
  );
};

export default RegFormPage;
