import React from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Footerr = () => {
  return (
    <Box sx={{ mt: 2, padding: 3 }}>
      <Box>
        <Link href="#" underline="none" sx={{ borderRight: "1px solid gray" }}>
          About Us{" "}
        </Link>
        <Link href="#" underline="none" sx={{ borderRight: "1px solid gray" }}>
          Contact Us{" "}
        </Link>
        <Link href="#" underline="none" sx={{ borderRight: "1px solid gray" }}>
          FAQs{" "}
        </Link>
        <Link href="#" underline="none">
          Privacy and Policy{" "}
        </Link>
      </Box>
      <Typography variant="body2">
        All rights reserved © 2023 Toppers Skills Ltd.
      </Typography>
    </Box>
  );
};

export default Footerr;
