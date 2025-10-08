import './App.css'
import Button from '../ui/Button/Button'

const App=() => {
  return (
    <>
    <div>DEMAT Breizh</div>
    <Button value="Benjamin" style={{backgroundColor:'black'}} />
    <Button value="Nicolas">
      <div>TOTO</div>
      <div>TITI</div>
      </Button>
    <Button value="Lionel" bgColor="grey" />
    <Button value="Jean">Hello</Button>
    <Button value="Louis" style={{backgroundColor:'red'}} bgColor="brown" />
    <Button bgColor="brown" children={
      <>
      <div>HelloWorld1</div>
      <div>HelloWorld2</div>
      </>}>
    </Button>

    </>
    
  )
}

export default App