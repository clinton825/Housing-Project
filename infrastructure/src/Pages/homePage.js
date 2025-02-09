import React from "react";
import Grid from "@mui/material/Grid";
import ProjectList from "../components/projectList";

const HomePage = (props) => {
  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <h1>HomePage</h1>
      </Grid>
      <Grid item xs={12}>
        <ProjectList projects={props.projects} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
