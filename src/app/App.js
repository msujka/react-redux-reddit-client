import './App.css';
import Posts from '../features/posts/Posts';

function App() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1>Michal's <span className="highlight">favourite</span> reddits.</h1>
                </header>
                <div className="App-posts">
                    <Posts />
                </div>
            </div>
        </div>
    );
}

export default App;