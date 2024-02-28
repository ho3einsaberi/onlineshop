import React from "react";
import { Fragment } from "react";
import TopNav from "../Navs/TopNav";
import MainNav from "../Navs/MainNav";
import Footer from "../common/Footer";
import { withRouter } from "react-router-dom";
import Courses from "./../cors/Courses";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Archive from './../arch/Archive';

const MainLayout = (props) => {
  const { pathname } = props.location;
  return (
    <Fragment>
      <TopNav />
      {pathname === "/" ? <MainNav /> : null}
      {pathname === "/" ? <Courses /> : null}
      {pathname === "/login" ? <Login /> : null}
      {pathname === "/register" ? <Register /> : null}
      {pathname === "/archieve" ? <Archive/> : null}


      
      <Footer />
    </Fragment>
  );
};

export default withRouter(MainLayout);
