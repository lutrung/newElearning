import React from "react";
import { Route } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
export default function HomeTemplates(props) {
  console.log(props);
  let { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <Route component={Header} />
            <Component {...propsRoute} />
            <Route component={Footer} />
          </>
        );
      }}
    />
  );
}
