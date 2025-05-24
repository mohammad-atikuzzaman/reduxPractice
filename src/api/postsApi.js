import axios from "axios";

const fetchPost=async()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
      return response.data;
}

export default fetchPost