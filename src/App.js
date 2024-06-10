import './App.css';

function App() {
  const chrome = window.chrome;
  const redirectToUrl = () => {
    chrome.tabs.create({
      url: `https://www.useforward.app/`,
    });

  };

  return (
    <div className="App">
      <button onClick={redirectToUrl}>Sign in</button>
    </div>
  );
}

export default App;
