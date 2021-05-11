import React from 'react';



const Pricing = ({backToHome}) =>{
    return (
        <div className="pricing">
            <h1>
                Welcome to Pricing Page 
            </h1>
            <h3> Learning is very Expensive!!!</h3>
            <button onClick={backToHome}>Go Back To Home Page</button>
        </div>
    )
}

export default Pricing;