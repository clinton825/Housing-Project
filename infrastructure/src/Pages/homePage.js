import React from "react";
import Grid from "@mui/material/Grid2";
import ProjectCard from "../components/projectCard";

const HomePage = (props) => {
  const projects = props.projects;
    
  return (
  <Grid container>
      <Grid size={12}>
          <h1> HomePage </h1>
      </Grid>
      <Grid size ={3}>
        <ProjectCard project ={projects[0]} />
      </Grid>
    </Grid>
  );
};
export default HomePage;
