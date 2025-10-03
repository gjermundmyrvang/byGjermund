import React from "react";
import FlowingMenu from "./FlowingMenu";

export default function MyProjects() {
  const myProjects = [
    {
      text: "Creative Dataviz Project",
      image: "/creative.png",
      link: "https://www.gjermundmyrvang.com/pages/dataviz",
    },
    {
      text: "Rapid Iteration",
      image: "/rapid.png",
      link: "https://www.gjermundmyrvang.com/pages/rapid",
    },
    {
      text: "Airborn Team18",
      image: "/team18.png",
      link: "https://www.gjermundmyrvang.com/pages/airborn",
    },
    {
      text: "Hysj",
      image: "/hysj.png",
      link: "https://www.gjermundmyrvang.com/pages/hysj",
    },
    {
      text: "Airborn WX",
      image: "/airbornmorn.png",
      link: "https://www.gjermundmyrvang.com/pages/airbornwx",
    },
    {
      text: "Coffee Stats App",
      image: "/coffeemorn.png",
      link: "https://www.gjermundmyrvang.com/pages/coffee",
    },
  ];
  return <FlowingMenu items={myProjects} />;
}
