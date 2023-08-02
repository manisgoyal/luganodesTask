import axios from 'axios';
import Stake from '../models/stake.js';
import { Router } from 'express';

const router = Router();

// Fetch total stake for Cardano
router.get('/cardano', async (req, res) => {
    try {
        const cardanoAPI = 'https://api.koios.rest/api/v0/account_info_cached';
        const response = await axios.post(
            cardanoAPI,
            {
                '_stake_addresses': [
                    process.env.LUGANODES_CARDANO_STAKEADD
                ]
            },
            {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            }
        );

        //   console.log(response.data[0].total_balance);
        const newTotalStake = response.data[0].total_balance / 1000000;
        // API gives in lovelace change to Ada
        await Stake.findOneAndUpdate({ chain: 'Cardano' }, { 'totalStake': newTotalStake,
        'updatedAt': Date.now(),}, { new: true, useFindAndModify: false });

        res.status(200).json({ newTotalStake });
    } catch (error) {
        console.error('Error fetching and storing Cardano total stake:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch total stake for Polkadot
router.get('/polkadot', async (req, res) => {
    try {
        const polkadotAPI = 'https://polkadot.api.subscan.io/api/scan/accounts';
        // Validator Info
        // const response = await axios.post(
        //     'https://polkadot.api.subscan.io/api/scan/staking/validator',
        //     {
        //       'stash': '1vTaLKEyj2Wn9xEkUGixBkVXJAd4pzDgXzz9CuVjhVqhHRQ'
        //     },
        //     {
        //       headers: {
        //         'Content-Type': 'application/json',
        //         'X-API-Key': process.env.SUBSCAN_APIKEY
        //       }
        //     }
        //   );
        //   console.log(response.data.data)
        const response = await axios.post(
            polkadotAPI,
            {
                'row': 1,
                'page': 0,
                'address': [process.env.LUGANODES_POLKADOT_STASHADD]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': process.env.SUBSCAN_APIKEY
                }
            }
        );
        // console.log(response.data.data.list[0])
        const newTotalStake = response.data.data.list[0].balance;

        await Stake.findOneAndUpdate({ chain: 'Polkadot' }, { 'totalStake': newTotalStake,
            'updatedAt': Date.now(),}, { new: true, useFindAndModify: false });

        res.status(200).json({ newTotalStake });
    } catch (error) {
        console.error('Error fetching and storing Polkadot total stake:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch total stake for Kusama
router.get('/kusama', async (req, res) => {
    try {
        const kusumaAPI = 'https://kusama.api.subscan.io/api/scan/accounts';
        const response = await axios.post(
            kusumaAPI,
            {
                'row': 1,
                'page': 0,
                'address': [process.env.LUGANODES_KUSAMA_STASHADD]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': process.env.SUBSCAN_APIKEY
                }
            }
        );
        // console.log(response.data.data.list[0])
        const newTotalStake = response.data.data.list[0].balance;

        await Stake.findOneAndUpdate({ chain: 'Kusama' }, { 'totalStake': newTotalStake,
            'updatedAt': Date.now(),}, { new: true, useFindAndModify: false });

        res.status(200).json({ newTotalStake });
    } catch (error) {
        console.error('Error fetching and storing Kusama total stake:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Get all Stakes
router.get('/all', async (req, res) => {
    try {
      const allStakes = await Stake.find({}); 
      const totalStakes = {}; 
  
      allStakes.forEach((stake) => {
        totalStakes[stake.chain] = {
            "totalStake" : stake.totalStake,
            "updatedAt" : stake.updatedAt
        }
      });
  
      res.json(totalStakes);
    } catch (error) {
      console.error('Error fetching all stakes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
export default router;
