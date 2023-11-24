import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import StickyCard from "./StickyCard";
import Footerr from "./Footerr";
import Headerr from "./Headerr";
import MainForm from "./MainForm";
import GoogleBtn from "./GoogleBtn";
import Paper from "@mui/material/Paper";

const RegFormPage = () => {
  return (
    <>
      <Headerr />
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", gap: 5, mt: 5, padding: "0 3em 0 3em" }}>
          <Box sx={{ flexGrow: 1, minWidth: 280 }}>
            <Box sx={{ maxWidth: 280, position: "fixed" }}>
              <StickyCard />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 3 }}>
            <Paper>
              <Box sx={{ display: "flex", p: 1 }}>
                <MainForm />
                <Box sx={{ mt: 22 }}>
                  <GoogleBtn />
                </Box>
              </Box>
            </Paper>
            <Footerr />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegFormPage;
