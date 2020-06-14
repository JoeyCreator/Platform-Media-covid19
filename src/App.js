import React from "react";
import "./styles.css";
import PageFooter from "./components/PageFooter.js";
import Blog from "./components/Blog.js";
import Navbar from "./components/Navbar.js";
import Charts from "./components/Charts.js";
import Charts2 from "./components/Charts2.js";
import SiteAlerts from "./components/SiteAlerts.js";
import Alerts from "./components/Alerts.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Alerts />
      <SiteAlerts />
      <h1>COVID-19 HEALTH / PLATFORM MEDIA</h1>
      <Charts />
      <Charts2 />
      <iframe
        src="https://experience.arcgis.com/experience/4ab8757241cc4d3fab81c8f86a501ce9"
        height="550"
        width="100%"
      />
      <Blog />
      <PageFooter />
    </div>
  );
}
