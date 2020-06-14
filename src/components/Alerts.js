import React from "react";

const Alerts = () => {
  return (
    <div class="alert alert-dismissible alert-danger">
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <i class="fas fa-radiation-alt" />
      <strong>COVID-19</strong>{" "}
      <a href="#" class="alert-link">
        <i class="fas fa-exclamation-circle" />
        State of emergency
      </a>{" "}
      Stay Home, Stay Safe
    </div>
  );
};

export default Alerts;
