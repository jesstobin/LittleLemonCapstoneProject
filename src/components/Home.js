import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../App.css';
import Header from './Header';
import Main from './Main';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSpecified = location.state?.scrollToSpecified;

  useEffect(() => {
    if (scrollToSpecified) {
      const aboutSection = document.getElementById(scrollToSpecified);
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth"});
      }
    }
    navigate(location.pathname, {});
    // eslint-disable-next-line
  },[scrollToSpecified]);

  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default Home;
