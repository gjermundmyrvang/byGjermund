import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function MyApps() {
  const testimonials = [
    {
      quote:
        "App created with React Native. This app gathers relevant weather data from OsloMET and displays it for small aircraft pilots",
      name: "Aiborn WX",
      designation: "Developer: Gjermund Myrvang",
      src: "/airbornmorn.png",
      href: "https://apps.apple.com/no/app/airborn-wx/id6748150074?l=nb",
    },
    {
      quote:
        "App created for personal use, but my friends also wanted it so I published it on the AppStore",
      name: "Coffee Stats",
      designation: "Developer: Gjermund Myrvang",
      src: "/coffeemorn.png",
      href: "https://apps.apple.com/no/app/coffee-stats/id6744176367?l=nb",
    },
    {
      quote:
        "App created just for fun. This app lets you login and create your own receipes. The receipes are stored in the cloud.",
      name: "Private Pantry",
      designation: "Developer: Gjermund Myrvang",
      src: "/MyPantry.png",
      href: "https://apps.apple.com/no/app/private-pantry/id6747010672?l=nb",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
