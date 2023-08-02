import axios from 'axios';
const handleUpdates= async (currChain) => {
    try {
        const response = await axios.get('http://localhost:5000/api/stake/'+currChain.toLowerCase());
        console.log(response);
    } catch (error) {
      console.error('Error fetching total stakes:', error);
    }
  };
export default handleUpdates;