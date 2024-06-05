import React from "react";
import Header from '../Components/Banner';
import Exhibit from "../Components/Exhibit";
import UserIpCard from "../Components/UserIpCard";


const Dashboard = () =>{

return(<>
<div>
    <Header bannerText={"Sextant"} />
    <Exhibit name="I'm an exhibit!" ><UserIpCard ipType='ipv4'/></Exhibit>
    <Exhibit  ><UserIpCard ipType='ipv6'/></Exhibit>
</div>

</>
);

};

export default Dashboard;