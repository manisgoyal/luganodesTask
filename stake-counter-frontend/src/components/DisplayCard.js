import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import handleUpdates from '../hooks/handleUpdates';
import axios from 'axios';
const DisplayCard = ({ currStakes,  chainName, time, unTrackedChain, setUntrackedChain, setTotalStakes}) => {
    const symbols = {
        "Cardano" : "₳",
        "Polkadot" : "DOT",
        "Kusama" : "KSM"
    }
    
    function handleChainRemove(event) {
      const toRemove = event.currentTarget.id.slice(2);
      const newUntracked = unTrackedChain.map((chain) => chain);
      newUntracked.push(toRemove);
      // console.log(newUntracked)
      setUntrackedChain(newUntracked);
      
  }
  function handleChainUpdate(event) {
    const toUpdate = event.currentTarget.id.slice(3);
    handleUpdates(toUpdate);
    fetchTotalStakes();
    
}
const fetchTotalStakes = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/stake/all');
    setTotalStakes(response.data);
    // console.log(response.data);
  } catch (error) {
    console.error('Error fetching total stakes:', error);
  }
};
  return (
    <div className="col-md-4" key={chainName}>
        <div className="custom-card">
          <div className="card">
            <div className="card-img-container">
              <img className="card-img-top" src= {require('../images/' + chainName + '.png')} alt={chainName+ " Logo"} />
              <div className="fav-icons">
                <FontAwesomeIcon icon={faArrowRotateRight} className='updateIcon' title={'Update ' + chainName} id={"up_" + chainName} onClick={handleChainUpdate}/>
                <FontAwesomeIcon icon={faXmark} className='crossIcon' id={"__" + chainName} title={'Stop Tracking ' + chainName} onClick={handleChainRemove}/>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{chainName}</h5>
              <p className="card-text">Value: {currStakes  + " " + symbols[chainName]}</p>
              <p className="card-text">Last Updated: {new Date(time).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DisplayCard;
