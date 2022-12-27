import Tablee from "./Tablehaber";
import React, { useEffect, useInsertionEffect, useState } from "react";

function Data() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/haberdata")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Tablee
          searchable={true}
          head={[
            { name: "Kanal", sortable: true },
            { name: "Kurulma Tarihi", sortable: true },
            { name: "Abone Sayısı" },
            { name: "İzlenme Sayısı" },
          ]}
          body={items.map((item) => [
            item.bilgi.kanaladi,
            item.bilgi.kurtar,
            item.bilgi.izlenme,
            item.bilgi.abone,
          ])}
        />
        {/* { <ul>
          {items.map((item) => (
            <li className="lii" key={item}>
              {item.fullname}, {item.email}
            </li>
          ))}
        </ul> } */}
      </div>
    );
  }
}
export default Data;
