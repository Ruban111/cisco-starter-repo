import React, { useState, useEffect } from 'react';

const UserIpCard = ({ ipType }) => {
    const [userIp, setUserIp] = useState(null);
    const [url, setURL] = useState('');

    useEffect(() => {
        if (ipType === 'ipv4') {
            setURL('https://api.ipify.org?format=json');
        } else if (ipType === 'ipv6') {
            setURL('https://api64.ipify.org?format=json');
        }
    }, [ipType]);

    useEffect(() => {
        if (url) {
            fetch(url)
                .then(response => response.json())
                .then(data => setUserIp(data.ip))
                .catch(error => console.error(error));
        }
    }, [url]);

    return (
        <>  <div className="ipCard" style={{borderRadius: '10px', borderColor: 'black', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderStyle: 'solid', borderWidth: '1px', width: '300px', height: '180px', marginLeft: '20px'}}>
            <h2>Your {ipType} Address:</h2>
            {userIp ? <p>{userIp}</p> : <p>Loading {ipType}...</p>}
            </div>
        </>
    );
};

export default UserIpCard;
