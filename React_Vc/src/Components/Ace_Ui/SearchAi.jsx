import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import { FaSearch, FaEllipsisH, FaBars } from "react-icons/fa";
import { RiLayoutRightFill } from "react-icons/ri";
import { toast } from 'react-toastify';
import { UserAppContext } from '../../context/UserAppContext';
import { AiFillDelete } from "react-icons/ai";
import Loader from '../Loader';
import { Link } from 'react-router-dom';
import { GiCrossMark } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const SearchAi = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const { user, token } = useContext(UserAppContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate()


  const handleKeyDown = async (event) => {

    if (!prompt) {
      console.log("Please enter a search query")
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents form submission (if inside a form)
      setLoading(false)
      try {
        const res = await axios.post(`http://localhost:4000/api/chat/search`,
          { prompt },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        console.log(res.data.usersearch)
        setResponse(res.data.response)
      } catch (error) {
        console.log(error);
        toast.error("Error in Search Prompt")
      }
      setLoading(true)
    }
  };

  const SearchPrompt = async () => {
    if (!prompt) {
      console.log("Please enter a search query")
      return;
    }
    setLoading(false)
    try {
      const res = await axios.post(`http://localhost:4000/api/chat/search`,
        { prompt },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      console.log(res.data.response)
      setResponse(res.data.response)
    } catch (error) {
      console.log(error);
      toast.error("Error in Search Prompt")
    }
    setLoading(true)
  }


  const FeathAllAiSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/chat/allsearch`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data.searches)
      setSearchHistory(res.data.searches || []);
    } catch (error) {
      console.log(error);
      toast.error("Error in AllSearch Prompt")
    }
  }



  const DeleteHandler = async (qId) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/chat/${user._id}/query/${qId}`)
      console.log(res.data)
      setData(res.data);
      toast.success("Query Deleted")
    } catch (error) {
      console.log(error);
      toast.error("Error in Delete a Prompt")
    }
  }

  useEffect(() => {
    FeathAllAiSearch()
  }, [searchHistory])

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}

      {
        sidebarOpen ? (<>
          <aside
            className={`${sidebarOpen ? "block" : "hidden"
              } bg-gray-800 p-4 transition-all duration-300 mt-20 overflow-y-auto`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Nexa Ai</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <FaBars className="text-xl" />
              </button>
            </div>

            <nav className="mt-6 space-y-2">


              {
                searchHistory.length === 0 ? (<>
                  <p className="mt-4 text-sm text-gray-400">No previous searches found.</p>
                </>) : (<>
                  <ul className=' space-y-2'>
                    {
                      searchHistory.map((item, index) => {
                        return (
                          <div key={index} className=' flex justify-between gap-2'>
                            <Link to={`/details/${item._id}`}>
                              {
                                searchHistory && (<li className="text-gray-300 hover:bg-gray-700 p-2 rounded w-45"> {item.query} </li>)
                              }
                            </Link>
                            <button onClick={() => DeleteHandler(item._id)} >
                              <AiFillDelete className=' text-2xl' />
                            </button>
                          </div>
                        )
                      })
                    }
                  </ul>
                </>)
              }

            </nav>

          </aside>
        </>) : (<>
          <div onClick={() => setSidebarOpen(true)} className=' mt-20'>
            <RiLayoutRightFill className="text-xl ml-5 mt-3.5" />
            <p className=' ml-2'>LayOut</p>
          </div>
        </>)
      }

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-2xl font-bold">What can I help with?</h1>

        {/* Search Box */}
        <div className="mt-6 flex items-center bg-gray-800 p-3 rounded-full w-2/3 overflow-auto">
          <input
            type="text"
            placeholder="Ask anything"
            className="bg-transparent flex-1 outline-none text-white px-3"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={SearchPrompt} className="p-2"><FaSearch /></button>
          <button className="p-2"><FaEllipsisH /></button>
        </div>



        <div className='mt-8 w-2/3 text-left'> {/* Added margin-top and width for better readability */}
          {
            response && <pre className="bg-gray-800 p-4 rounded-md whitespace-pre-wrap">{response}</pre>
          }
        </div>

        {
          loading ? (<></>) : (<> <Loader /> </>)
        }

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-6">NEXA AI can make mistakes. Check important info.</p>
      </main>


      <button onClick={() => navigate("/")} className="absolute top-32 right-20 text-white text-2xl hover:text-red-500 transition-all">
        <GiCrossMark />
      </button>

    </div>
  )
}

export default SearchAi
