import { useState } from 'react'
import './App.css'
import { LightToggle } from './components/LightToggle'
import { LottoNumbers } from './components/LottoNumbers'
import { ClickCounter } from './components/ClickCounter'

function App() {
  const [isLightsOn, setIsLightsOn] = useState<boolean>(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle setIsLightsOn={setIsLightsOn} />
      <div style={{backgroundColor: isLightsOn ? "white" : "black"}}>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers setLottoNumbers={setLottoNumbers} />
      <div className='output'>
        {lottoNumbers.map((number: number) => (
          <span style={{padding: "0 8px"}}>{number}</span>
        ))}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output">{count}</div>
    </div>
  )
}

export default App
