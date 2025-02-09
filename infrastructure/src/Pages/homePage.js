import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProjectList from "../components/projectList";

const HomePage = () => {
  const [projects, setProjects] = useState([]); // Ensure projects starts as an array

  useEffect(() => {
    fetch(
      `https://api12.buildinginfo.com/api/v2/bi/projects/t-projects?api_key=${process.env.REACT_APP_BUILDING_INFO_API_KEY}&ukey=${process.env.REACT_APP_BUILDING_INFO_USER_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Update this line to use data.data.rows instead of data.projects
        setProjects(data.data.rows || []); 
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <h1>HomePage</h1>
      </Grid>
      <Grid item xs={12}>
        <ProjectList projects={projects} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
