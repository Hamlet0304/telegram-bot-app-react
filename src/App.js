import './App.css';
import { useEffect } from 'react';
const { user, onClose } = useTelegram();


function App() {

  const {onToggleButton,tg} = useTelegram();


  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
