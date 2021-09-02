import React, {useState, useEffect } from "react";
import "./Statewise.css";
//   const axios=require('axios');
const Statewise = () => {
    const [data, setstate] = useState([])
    const getCoviddata = async () =>{ 
        const res= await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all',{ 
            method : "GET", 
         mode: 'cors', 
         headers: {} 
        }); 
        const actualdata = await res.json(); 
        console.log(actualdata.Statewise);
        setstate(actualdata.Statewise); 
    } 
     useEffect(() =>{ 
         getCoviddata(); 
     },[]);
    return (
         <>
           <div className="container-fluid mt-5">
               <div className="main-heading">
                   <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA COVID-19 DASHBOARD</span></h1>
               </div>
               <div className="table-responsive">
                   <table className="table table-hover">
                         <thead className="thead-dark">                         
                        <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>

                       </tr>
                       </thead>
                       <tbody>
                       {
                           data.map(currEle=>{
                         return(
                             <tr>
                            <td>State</td>
                        <td>Confirmed</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                        <td>Active</td>
                        <td>Updated</td>
                        </tr>
                         );
                         })  
                       }
                       </tbody>
                   </table>
               </div>
           </div>
        </>
    );
}
export default Statewise;
