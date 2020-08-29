import React, { useEffect } from "react";
import { Anime } from "../../components/Anime";
import { Slider } from "../../components/Slider";
import { viewAllAnime } from "../../requests/animeRequest";
import { connect } from "react-redux";
import auth from "../../helper/auth";
import "./index.scss";
const AnimesPage = (props) => {
  useEffect(() => {
    if (auth.isloggedIn()) {
      props.viewAllAnime();
    }
  }, [props.user]);
  return (
    <div className="animepage">
      <Slider />
      <Anime animes={props.anime.animes} title="Currently Airing" />
    </div>
  );
};

const mapStateToProps = ({ anime, user }) => ({ anime, ...user });
export default connect(mapStateToProps, { viewAllAnime })(AnimesPage);
