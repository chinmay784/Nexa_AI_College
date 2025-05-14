import React, { useContext, useEffect, useState } from 'react';
import { UserAppContext } from '../context/UserAppContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { GiCrossMark } from "react-icons/gi";

const Details = () => {
  const { user } = useContext(UserAppContext);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/chat/${user._id}/query/${id}`);
        setData(response.data);
      } catch (err) {
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, user]);

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white px-6">
      <div className="relative bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-2xl transition-all duration-300 hover:shadow-blue-500/50">
        
        {/* Close Button */}
        <button onClick={() => navigate("/search-ai") } className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition-all">
          <GiCrossMark />
        </button>
    
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Query Details</h2>
    
        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center font-semibold">{error}</p>
        ) : (
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-6">
            {/* Query */}
            <div>
              <p className="text-lg text-gray-300 font-semibold">Query:</p>
              <p className="text-gray-200 bg-gray-600 p-3 rounded-md shadow-sm">{data.query.query}</p>
            </div>
    
            {/* Result */}
            <div>
              <p className="text-lg text-gray-300 font-semibold">Result:</p>
              <p className="text-gray-200 bg-gray-600 p-3 rounded-md shadow-sm">{data.query.result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Details;
