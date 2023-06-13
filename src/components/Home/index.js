import React, { useState, useEffect, } from 'react';
import Header from '../Header'
import './index.css'

const Home = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };
  
  return (
    <div className="homepage-container">
        <Header />
      <table className="table"  striped bordered hover responsive>
        <thead>
          <tr >
            <th >Category</th>
            <th>Type</th>
            <th >Joke</th>
          </tr>
        </thead>
        <tbody>
          
          {jokes.map((eachjoke) => (
            <tr >
              
              <td  >{eachjoke.category}</td>
              <td >{eachjoke.type}</td>
              <td >{eachjoke.joke}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
    
  );
};

export default Home;
