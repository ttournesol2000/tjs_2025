import './App.css'
import Button from '../ui/Button/Button'

const App=() => {
  return (
    <>
    <div>DEMAT Breizh</div>
    <Button value="Benjamin" style={{backgroundColor:'black'}} />
    <Button value="Nicolas" />
    <Button value="Lionel" bgColor="grey" />
    <Button value="Jean" />
    <Button value="Louis" bgColor="brown" />
    </>
    
  )
}

export default App