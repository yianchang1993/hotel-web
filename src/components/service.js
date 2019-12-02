import React from "react";
import Title from "./title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Service extends React.Component {
  state = {
    service: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info: "Every guess get a cup of free cocktail every night"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Having a chance to get access to nature easily"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle Bus",
        info:
          "Free shuttle buses help our guess easily get access to the scencery point nearby"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Premium beer avaliable in our bar"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.service.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
