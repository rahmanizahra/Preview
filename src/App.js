import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';

function App() {
  const [message, setMessage] = React.useState('Type something');
  
    
  
  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
  };
  return (
    <div className="App" style={{backgroundColor:" rgb(151, 209, 197)"}}>
      <Editor 
      message={message}
      handleMessageChange={handleMessageChange}
      />
      <Preview
      message={message}

      />
      
    </div>
  );
}

export default App;
