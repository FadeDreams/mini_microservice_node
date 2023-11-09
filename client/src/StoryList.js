import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [stories, setStory] = useState([]);
  const fetchStories = async () => {
    const res = await axios.get('http://localhost:4000/story');
    setStory(res.data);
  };
  useEffect(() => {
    fetchStories();
  }, []);
  const renderedStories = Object.values(stories).map(story => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={story.id}
      >
        <div className="card-body">
          <h3>{story.title}</h3>
        </div>
      </div>
    );
  });

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedStories}</div>;
}
