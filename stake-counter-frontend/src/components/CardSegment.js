import React from 'react';
import DisplayCard from './DisplayCard';
import AddOptions from './AddOptions';

const CardSegment = ({ totalStakes, unTrackedChain, setUntrackedChain, setTotalStakes }) => {
    return (
        <div className="container">
            <div className="row">
                {Object.keys(totalStakes).map((chain) => (
                    (!unTrackedChain.includes(chain)) ?
                        <DisplayCard key={chain} currStakes={totalStakes[chain].totalStake} chainName={chain} time={totalStakes[chain].updatedAt} unTrackedChain={unTrackedChain} setUntrackedChain={setUntrackedChain} setTotalStakes={setTotalStakes}/>
                        : null
                ))}
                {(unTrackedChain.length !== 0) ? <AddOptions unTrackedChain={unTrackedChain} setUntrackedChain={setUntrackedChain} setTotalStakes={setTotalStakes}/> : null}
            </div>
        </div>
    );
};

export default CardSegment;
