import React from "react";

import uuid from "uuid";
import { paths } from "../api";
import { Header, Row } from "../components";

import "../css/home.css";
const Home = () => {
  const {
    netflixTvPath,
    netflixMoviesPath,
    cwTvPath,
    trendingMoviesPath,
    trendingTvPath,
    actionMoviesPath,
    actionTvPath,
    comedyTvPath,
    comedyMoviesPath,
    horrorTvPath,
    horrorMoviesPath,
    romanceTvPath,
    romanceMoviesPath,
    sciFiTvPath,
    sciFiMoviesPath,
  } = paths;

  const homeRows = [
    {
      title: "Netflix Originals",
      isPoster: true,
      fetchUrls: [netflixTvPath, netflixMoviesPath],
    },
    {
      title: "The CW Originals",
      isPoster: true,
      fetchUrls: [cwTvPath],
    },
    {
      title: "Trending",
      fetchUrls: [trendingTvPath, trendingMoviesPath],
    },
    {
      title: "Action",
      fetchUrls: [actionTvPath, actionMoviesPath],
    },
    {
      title: "Sci-Fi",
      fetchUrls: [sciFiTvPath, sciFiMoviesPath],
    },
    {
      title: "Comedy",
      fetchUrls: [comedyTvPath, comedyMoviesPath],
    },
    {
      title: "Horror",
      fetchUrls: [horrorTvPath, horrorMoviesPath],
    },
    {
      title: "Romance",
      fetchUrls: [romanceTvPath, romanceMoviesPath],
    },
  ];

  return (
    <div className="home">
      <Header />

      <main>
        {/* <Persons /> */}

        {homeRows.map(({ title, isPoster = false, fetchUrls }, key) => (
          <Row
            key={key}
            title={title}
            rowID={uuid.v4()}
            isPoster={isPoster}
            fetchUrls={fetchUrls}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
