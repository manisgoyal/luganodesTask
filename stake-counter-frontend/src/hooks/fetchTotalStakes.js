import axios from 'axios';
const fetchTotalStakes = async (setTotalStakes) => {
    try {
      const response = await axios.get('http://localhost:5000/api/stake/all');
      setTotalStakes(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error('Error fetching total stakes:', error);
    }
  };

export default fetchTotalStakes;