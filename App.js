import React from "react";
import ReactDOM from "react-dom";
import  Statewise from "./components/Statewisefolder/Statewise";
// const cors=require('cors');
const App = () =>{
    App.use(cors());
    return (
        <>
        <Statewise/>
        </>
    );
}
export default App;




























// import React from "react";
// import "./index.css";
// import Headers from "./components/Headers/Headers";
// import SimpleBottomNavigation from "./components/Mainnow";
//  import "./App.css";
// function App(){
//     return (
//         <>
//             <Headers/>;
//         <div className="app">
//         <SimpleBottomNavigation/>;
//         </div>
//         </>
//     )
// }
// export default App;






















// //digital clock
// import React,{useState} from "react";
// let time=new Date().toLocaleTimeString();
// const App = () =>{
//     const [ctime,settime]=useState(time);
//     const inc=() =>{
//         time=new Date().toLocaleTimeString();
//         settime(time);
//     };
//     setInterval(inc,1000);
//     return (
//         <h1>{ctime}</h1>
//     );
// }
// export default App;























//hardcore clock
// import React ,{useState}from "react";
// import './index.css'
// let time=new Date().toLocaleTimeString();
// const App = () =>{
//     const state=useState();
//     const [newtime,setTime]=useState(time);
//     const inct = () =>{
//         let time1=new Date().toLocaleTimeString();
//         setTime(time1);
//     };
//     return (
//         <>
//         <h1>{newtime}</h1>
//         <button onClick={inct}><h1>Get Time</h1></button>
//         </>
//     );
// };
// export default App



















//count increase by 1
// import React,{useState} from 'react';
// let count=0;
// const App = () => {
//     const state = useState();
//     const [count,setCount]=useState(0);
//     const Incnum = () => {
//         setCount(count+1);
//     };
//     const dec = () =>{
//         if(count>0)
//         setCount(count-1);
//         else
//         {
//             alert('you reached the lowest limit');
//             setCount(0);
//     }
// };
//     return(
//         <>
//         <div className="maindiv">
//         <div className="centrediv">
//         <h1> {count} </h1>
//         <div className="btndiv">
//         <button onClick={Incnum}>Incre</button>
//         <button onClick={dec}>Decre</button>
//         </div>
//         </div>
//         </div>
//         </>
//     );
// };
// export default App;