import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./Pages/homePage";

const sampleProject = {
  planning_id: "65",
  planning_title: "€11.1m Factory Project in Co. Carlow",
  planning_category: "Industrial",
  planning_subcategory: "Factory",
  planning_type: "New Build",
  planning_funding_type: "Private",
  planning_stage: "Commencement",
  planning_value: "11100000",
  planning_region: "Leinster",
  planning_county: "Carlow",
  planning_description:
    "The establishment of an Irish Whiskey Distillery & associated visitor facilities at Holloden Hse Demesne, Clorusk Lr, Royal Oak, Bagenalstown.",
  planning_url: "http://www.eplanning.ie/CarlowCC/AppFileRefDetails/1433/0",
  planning_start_date: "2014-12-09",
};

const projects = [sampleProject, sampleProject, sampleProject, sampleProject, sampleProject];

const App = () => {
  return (
      <HomePage projects={projects} />
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
