import axios from 'axios';
const handleUpdates= async (currChain) => {
    try {
        const response = await axios.get('https://luganodes-backend-y3y3.onrender.com/api/stake/'+currChain.toLowerCase());
        // console.log(response);
    } catch (error) {
      console.error('Error fetching total stakes:', error);
    }
  };
export default handleUpdates;