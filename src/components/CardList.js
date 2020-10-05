import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";
import "./CardList.css";
import Axios from "axios";

function CardList() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await Axios.get("https://covid19.mathdro.id/api");
      const modifiedData = { confirmed, recovered, deaths, lastUpdate };
      setData(modifiedData);
    }
    fetchData();
  }, []);

  return (
    <div className="cardList__container">
      <Cards
        status="Infected"
        description="Number of active cases of covid 19"
        value={!data ? "Loading" : data.confirmed.value}
        date={!data ? "Loading" : data.lastUpdate}
        styling="Infected"
      />
      <Cards
        status="Recovered"
        description="Number of recovered cases from covid 19"
        value={!data ? "Loading" : data.recovered.value}
        date={!data ? "Loading" : data.lastUpdate}
        styling="Recovered"
      />
      <Cards
        status="Deaths"
        description="Number of deaths caused by covid 19"
        value={!data ? "Loading" : data.deaths.value}
        date={!data ? "Loading" : data.lastUpdate}
        styling="Deaths"
      />
    </div>
  );
}

export default CardList;
