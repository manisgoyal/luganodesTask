import { Schema, model } from 'mongoose';

const stakeSchema = new Schema({
  chain: { type: String, required: true },
  totalStake: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const Stake = model('Stake', stakeSchema);

export default Stake;
