import React, { useEffect } from "react";
import { Anime } from "../../components/Anime";
import { Slider } from "../../components/Slider";
import { viewAllAnime } from "../../requests/animeRequest";
import { connect } from "react-redux";
const AnimesPage = (props) => {
  useEffect(() => {
    props.viewAllAnime();
  }, []);
  return (
    <>
      <Slider />
      <Anime animes={props.anime.animes} />
    </>
  );
};

const mapStateToProps = ({ anime }) => ({ anime });
export default connect(mapStateToProps, { viewAllAnime })(AnimesPage);
