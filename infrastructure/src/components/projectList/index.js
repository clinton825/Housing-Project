import React from "react";
import Project from "../projectCard/";
import Grid from "@mui/material/Grid";

const ProjectList = (props) => {
  // If no projects are found, show a fallback message
  if (props.projects.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {props.projects.map((p) => (
        <Grid key={p.planning_id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Project project={p} /> {/* Ensure the Project component receives 'project' prop */}
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
