import React from "react";
import Header from '../Components/Banner';
import Exhibit from "../Components/Exhibit";
import UserIpCard from "../Components/UserIpCard";
import Latency from "../Components/Latency";

const Dashboard = () =>{

return(<>
<div>
    <Header bannerText={"Sextant"} />
    <Exhibit name="Dashboard" ><UserIpCard ipType='ipv4'/></Exhibit>
    <Exhibit  ><UserIpCard ipType='ipv6'/></Exhibit>
    <Exhibit><Latency /></Exhibit>
</div>

</>
);

};

export default Dashboard;