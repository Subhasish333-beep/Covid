import { useEffect, useState } from "react";
import React from "react";
import "./data.css";
import axios from "axios";

const TotalData = () => {

  const [total, setTotal] = useState([])

  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json").then((res)=>{
        res.data.statewise.length = 1;
        setTotal(res.data.statewise)
    })
  }, []);

console.log("a", total)
  return (
    <div className="container">

      <h3 className="heading">COVID19<span className="country">INDIA</span></h3>
      <div className="row total-mar">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body conf-back">
              <h5 className="card-title total-conf">Confirmed</h5>
              
                 {
                 total?.map?.((cases) => {
                  return (
                    <>
                      <span className="conf-cases">{cases.confirmed}</span>
                    </>
                      )
                 }
                 )}

             </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body active-back">
              <h5 className="card-title active-cases">Active</h5>
              {
                 total?.map?.((cases) => {
                  return (
                    <>
                      <span className="active-cases">{cases.active}</span>
                    </>
                      )
                 }
                 )}

            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body recov-back">
              <h5 className="card-title recov-cases">Recovered</h5>

              {
                 total?.map?.((cases) => {
                  return (
                    <>
                      <span className="recov-cases">{cases.active}</span>
                    </>
                      )
                 }
                 )}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body death-back">
              <h5 className="card-title death-cases">Deceased</h5>
                 
              {
                 total?.map?.((cases) => {
                  return (
                    <>
                      <span className="death-cases">{cases.deaths}</span>
                    </>
                      )
                 }
                 )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalData;
