import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

//components
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
