import React from 'react';


const Exhibit = ({name, children}) =>{
return(
    <div className="Exhibit">
        <h2 className = 'ExhibitHeading'>{name}</h2>
        <div className="ExhibitContent">
                {children}
        </div>
    </div>

);


};
export default Exhibit;