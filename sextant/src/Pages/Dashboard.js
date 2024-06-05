import React from "react";
import Header from '../Components/Banner';
import Exhibit from "../Components/Exhibit";


const Dashboard = () =>{

return(<>
<div>
    <Header bannerText={"Sextant"} />
    <Exhibit name="I'm an exhibit!"></Exhibit>
</div>

</>
);

};

export default Dashboard;