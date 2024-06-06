import React, { useState, useEffect } from 'react';

const Latency = () => {
    const [latency, setLatency] = useState(null);

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:55455");

        const sendTime = Date.now();
        
        socket.addEventListener("open", () => {
            socket.send(sendTime.toString());
        });

        socket.addEventListener("message", (event) => {
            const serverTime = event.data;
            const receiveTime = Date.now();
            const latenc = receiveTime - serverTime;
            setLatency(latenc);
        });

        
    }, []);

    return (
        <><div className="ipCard" style={{borderRadius: '10px', borderColor: 'black', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderStyle: 'solid', borderWidth: '1px', width: '300px', height: '180px', marginLeft: '20px'}}>
        <h2>Latency</h2>
        {latency !== null ? <p style={{fontSize: '40px'}}>{latency} ms</p> : <p>Calculating...</p>}
        </div>
        </>
    );
};

export default Latency;
