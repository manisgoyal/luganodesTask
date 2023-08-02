import React from "react";

const HeaderBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="header" style={{textAlign:"center", padding:"10px"}}>
                        <img className ="header-logo" src={require('../images/Luganodes.png')} alt="LugaNodes Logo" style={{maxWidth:"150px"}}/>
                        <h1>Total Stake Tracker</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar;