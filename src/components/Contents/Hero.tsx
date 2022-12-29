import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Hero() {
  return (
    <>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 12, pb: 4 }}
      >
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          results for ""
        </Typography>
      </Container>
      {/* End hero unit */}
    </>
  );
}
