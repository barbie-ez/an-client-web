import React, { useEffect } from "react";
import { viewAllGenre } from "../../requests/genreRequest";
import { connect } from "react-redux";
import auth from "../../helper/auth";
import { Genre } from "../../components/Genre";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
const GenrePage = (props) => {
  useEffect(() => {
    if (auth.isloggedIn()) {
      props.viewAllGenre();
    }
  }, [props.user]);
  return (
    <>
      <div className="background">
        <Container>
          <Row>
            <Col>
              <Genre genres={props.genre.genres} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = ({ genre, user }) => ({ genre, ...user });
export default connect(mapStateToProps, { viewAllGenre })(GenrePage);
