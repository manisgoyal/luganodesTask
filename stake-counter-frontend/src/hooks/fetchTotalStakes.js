import axios from 'axios';
const fetchTotalStakes = async (setTotalStakes) => {
    try {
      const response = await axios.get('https://luganodes-backend-y3y3.onrender.com/api/stake/all');
      setTotalStakes(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error('Error fetching total stakes:', error);
    }
  };

export default fetchTotalStakes;