import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import img from "../../images/project-placeholder.png";

export default function ProjectCard(props) {
  const project = props.project;
  
  return (
    <Card sx={{ minWidth: 350, padding: 2 }}>
      <CardHeader
        title={project.planning_title}
        sx={{ whiteSpace: "normal", wordWrap: "break-word" }}
      />
      <CardMedia
        sx={{ height: 300 }}
        image={project.image ? project.image : img}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" /> {project.planning_start_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <MonetizationOnIcon fontSize="small" /> {(project.planning_value / 1000000).toFixed(1)}M
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              {project.planning_description.substring(0, 150)}...
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" size="medium" color="primary" href={project.planning_url} target="_blank">
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}
