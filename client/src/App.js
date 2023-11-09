import logo from './logo.svg';
import './App.css';
import StoryCreate from './StoryCreate';
import StoryList from './StoryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StoryCreate />
        <StoryList />

      </header>
      );
    </div>
  )
}

export default App;
