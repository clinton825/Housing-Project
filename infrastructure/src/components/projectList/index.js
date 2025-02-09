import React from "react";
import Project from "../projectCard/";
import Grid from "@mui/material/Grid";

const ProjectList = (props) => {
  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {props.projects.map((p) => (
        <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Project project={p} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
