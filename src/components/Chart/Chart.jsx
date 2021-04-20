import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';



const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      setDailyData(await fetchDailyData());
      
    }

    fetchMyAPI();
  }, []);



 
  return (
   <h1>Chart</h1>
  )
}

export default Chart;






