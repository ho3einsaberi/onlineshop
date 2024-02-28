import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Switch, Route } from "react-router";
import Courses from "./components/cors/Courses";
import MainLayout from "./components/MainLayouts/MainLayouts";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Archive from "./components/arch/Archive";

const Dev = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MainLayout>
      <Switch>
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/archieve" Component={Archive} />
        <Route path="/" exact Component={Courses} />
      </Switch>

      <script>AOS.init();</script>
    </MainLayout>
  );
};

export default Dev;
