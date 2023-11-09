import React, { useState } from 'react';
import axios from 'axios';

import StoryList from './StoryList';

export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/story', {
      title
    });
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

