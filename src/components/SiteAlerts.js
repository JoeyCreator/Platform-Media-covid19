import React from "react";
import { MDBContainer, MDBAlert } from "mdbreact";

const SiteAlerts = () => {
  return (
    <MDBContainer>
      <MDBAlert color="warning" dismiss>
        <i class="fa fa-exclamation-triangle" />
        <strong>ATTENTION</strong> For the most up to date information regarding
        COVID-19 in Canada, please consult Canada Deptartment of Health. This
        site should not be used for life saving information - instead, rather, a
        source for numbers and statistics.
      </MDBAlert>
    </MDBContainer>
  );
};

export default SiteAlerts;
