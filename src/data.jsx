import React, { useEffect, useState } from "react";
import axios from "axios";
import "./data.css";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      console.log("api", res.data.statewise.slice(1)); //to remove the first set used slice func
      setData(res.data.statewise.slice(1));
    });
  }, []);
  console.log("state", data);
  return (
    
    <div className="container">
      <table className="table table-mar">
        <thead className="table-dark">
          <tr>
            <th scope="col">State</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Active</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deceased</th>
            <th scope="col">Updated Time</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((stats) => {
            return (
              <tr>
                <td>{stats?.state}</td>
                <td>{stats?.confirmed}</td>
                <td>{stats?.active}</td>
                <td>{stats?.recovered}</td>
                <td>{stats?.deaths}</td>
                <td>{stats?.lastupdatedtime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
