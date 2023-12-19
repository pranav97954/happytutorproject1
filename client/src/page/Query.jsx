import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Query = () => {
  const [queries, setQueries] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  useEffect(() => {
    // Fetch past queries from the server
    axios.get('http://localhost:3001/get-queries')
      .then(response => {
        setQueries(response.data);
      })
      .catch(error => {
        console.error('Error fetching queries:', error);
      });
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleNewQueryChange = (event) => {
    setNewQuery(event.target.value);
  };
  
  const handleReplyTextChange = (event) => {
    setReplyText(event.target.value);
  };

  const handlePostQuery = () => {
    // Post new query to the server
    axios.post('http://localhost:3001/post-query', { query: newQuery })
      .then(response => {
        // Update the local state with the new query
        setQueries([...queries, response.data]);
        setNewQuery(''); // Clear the input field
      })
      .catch(error => {
        console.error('Error posting query:', error);
      });
  };

  const handlePostReply = (queryId) => {
    // Post reply to the server
    axios.post(`http://localhost:3001/post-reply/${queryId}`, { reply: replyText })
      .then(response => {
        // Update the local state with the new reply
        const updatedQueries = queries.map(query => {
          if (query._id === queryId) {
            return { ...query, replies: [...(query.replies || []), response.data] };
          }
          return query;
        });
        setQueries(updatedQueries);
        setReplyText(''); // Clear the reply input field
        setReplyingTo(null); // Clear replyingTo state
      })
      .catch(error => {
        console.error('Error posting reply:', error);
      });
  };

  const startReply = (queryId) => {
    setReplyingTo(queryId);
  };

  return (
    <div>
      <h2>Past Queries</h2>
      <ul>
        {queries.map(query => (
          <li key={query._id}>
            {query.text}
            {query.replies && (
              <ul>
                {query.replies.map(reply => (
                  <li key={reply._id}>{reply.text}</li>
                ))}
              </ul>
            )}
            {replyingTo === query._id ? (
              <div>
                <textarea value={replyText} onChange={handleReplyTextChange} />
                <button onClick={() => handlePostReply(query._id)}>Post Reply</button>
              </div>
            ) : (
              <button onClick={() => startReply(query._id)}>Reply</button>
            )}
          </li>
        ))}
      </ul>

      <h2>Post a New Query</h2>
      <div>
        <textarea value={newQuery} onChange={handleNewQueryChange} />
      </div>
      <div>
        <button onClick={handlePostQuery}>Post Query</button>
      </div>
    </div>
  );
};

export default Query;