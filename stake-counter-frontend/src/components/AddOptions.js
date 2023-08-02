import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const AddOptions = ({unTrackedChain, setUntrackedChain})=>{
    function handleChainAdd(event) {
        const toAdd = event.currentTarget.value;
        const newUntracked = []
        for (let index = 0; index < unTrackedChain.length; index++) {
            const element = unTrackedChain[index];
            if(element !== toAdd){
                newUntracked.push(element)
            }   
        }
        console.log(newUntracked)
        setUntrackedChain(newUntracked);
        
    }
    return(
        <div className="col-md-4">
        <div className="custom-card">
          <div className="card">
              <div className="fav-icons">
                <FontAwesomeIcon icon={faAdd} title={'Add Other Chains'} />
                </div>
            </div>
            <div className="card-body justify-content-center">
              <h5 className="card-title p-3">Add Other Chains</h5>
                <select className="form-select form-select-lg" value="" onChange={handleChainAdd}>
                    <option value="">Select an Option</option>
                    {
                        unTrackedChain.map((chain) => <option value={chain} key={chain}>{chain}</option>)
                    }
                </select>
            </div>
          </div>
        </div>
    )
}

export default AddOptions