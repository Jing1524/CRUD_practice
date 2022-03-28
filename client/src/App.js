import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={7}>
              <Typography>Place holder for posts component</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>Place holder for form component</Typography>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
