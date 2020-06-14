import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer
} from "mdbreact";

const Blog = () => {
  return (
    <MDBContainer>
      <MDBRow className="mb-4">
        <MDBCol sm="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>World Health Organization</MDBCardTitle>
              <MDBCardText>
                Official Public Service Announcement on Coronavirus from the
                WHO. Learn about Symptoms, Prevention, Travel Advisory and
                Common FAQs on Coronavirus. Advice for the public. Learn about
                Coronavirus. Official info on COVID-19. Official WHO website.
              </MDBCardText>
              <MDBBtn color="primary">Learn More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Health Canada</MDBCardTitle>
              <MDBCardText>
                Canada's Chief Public Health Officer of Canada is in close
                contact with provincial and territorial Chief Medical Officers
                of Health to ensure that any cases of COVID- ... Health Canada
                is recalling five types of hand sanitizers sold in Canadian
                stores that are made with industrial-grade ethanol,
              </MDBCardText>
              <MDBBtn color="primary">Learn More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Blog;
