import React from "react";
import styled from "styled-components";
import Cardslider from "./Cardslider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <Cardslider data={getMoviesFromRange(0, 10)} title="Trending Now" />
      <Cardslider data={getMoviesFromRange(10, 20)} title="New Releases" />
      <Cardslider data={getMoviesFromRange(20, 30)} title="Blockbuster Movies"/>
      <Cardslider data={getMoviesFromRange(30, 40)} title="Popular on Netflix"/>
      <Cardslider data={getMoviesFromRange(40, 50)} title="Action Movies" />
      <Cardslider data={getMoviesFromRange(50, 60)} title="Epics" />
    </Container>
  );
}

const Container = styled.div``;
