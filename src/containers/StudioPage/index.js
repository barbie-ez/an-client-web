import React, { useEffect } from "react";
import { viewAllStudio } from "../../requests/studioRequest";
import { connect } from "react-redux";
import auth from "../../helper/auth";
import { Studio } from "../../components/Studio";
import { Container, Row, Col } from "react-bootstrap";
const StudioPage = (props) => {
  useEffect(() => {
    if (auth.isloggedIn()) {
      props.viewAllStudio();
    }
  }, [props.user]);
  return (
    <>
      <div className="background">
        <Container>
          <Row>
            <Col>
              <Studio studios={props.studio.studios} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = ({ studio, user }) => ({ studio, ...user });
export default connect(mapStateToProps, { viewAllStudio })(StudioPage);
