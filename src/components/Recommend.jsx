import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle:
        "General information. Singapore (the Republic of Singapore) is an island and city state, the smallest country, by surface area, in Southeast Asia. It is a member of the Commonwealth of Nations. Singapore comprises a main island.",
      cost: "38,800",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle:
        "Thailand officially the Kingdom of Thailand, is a country in Southeast Asia, located at the centre of Indochinese Peninsula, spanning 513,120 square kilometres (198,120 sq mi), with a population of almost 70 million.The country is bordered to the north by Myanmar and Laos, to the east by Laos and Cambodia, to the south by the Gulf of Thailand and Malaysia.",
      cost: "54,200",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle:
        "Paris is the capital of France and one of the great European cities. It is for many the most romantic and popular tourist destination on the planet. ... Paris is also known to all as the City of Light, as the French capital was the first to endow its streets with electric light.",
      cost: "45,500",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle:
        "New Zealand is an island country, with two main islands (the North Island and the South Island), in the south-east Pacific.",
      cost: "24,100",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle:
        "Bora Bora is a small South Pacific island northwest of Tahiti. Surrounded by sand-fringed motus and a turquoise lagoon protected by a coral reef",
      cost: "95,400",
    },
    {
      image: Destination6,
      title: "London",
      subTitle:
        "London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre.",
      cost: "38,800",
    },
  ];

  return (
    <Section id="recommend">
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem;
  border-color: #759bcc;

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.9rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #759bcc;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 95%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #11030384;
            width: 2.2rem;
          
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
