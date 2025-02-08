import React from "react";
import Grid from "@mui/material/Grid2";

const HomePage = (props) => {
  const projects = props.projects;
    
  return (
  <Grid container>
      <Grid size={12}>
          <h1> HomePage </h1>
      </Grid>
    </Grid>
  );
};
export default HomePage;
