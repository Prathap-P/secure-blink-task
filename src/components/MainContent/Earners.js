import React from "react";
import "../../css/Earners.css"
import christopher from "../../assets/christopher.png"
import jonas from "../../assets/jonas.png"
import luis from "../../assets/luis.png"
import criag from "../../assets/craig.png"

const Earners= ()=>{
    return(
        <div className="Earners">
            <p className="earners-title">Top Earners</p>
            <p className="earners-info">Transforming Your Ideas <br/>Into Reality</p>

            <br></br>

            <div className="earners-list">
                <div className="earner1" >
                    <div>
                        <img src={luis} className="earner-image" id=" earnerimage"/>                
                    </div>
                    <h3 className="amountearned">₹8,00,000</h3>
                </div>

                <div className="earner2">
                    <div>
                        <img src={criag} className="earner-image"  id=" earnerimage"/>
                    </div>
                    <h3 className="amountearned">₹6,00,000</h3>
                </div>
                
                <div className="earner3">
                <div>
                    <img src={christopher} className="earner-image" />
                    </div>
                    <h3 className="amountearned">₹5,00,000</h3>
                </div>
                <div className="earner4">
                    <div>
                    <img src={jonas} className="earner-image"/>
                    </div>
                    <h3 className="amountearned">₹4,50,000</h3>
                </div>
            </div>
            
        </div>

    )
}

export default Earners;