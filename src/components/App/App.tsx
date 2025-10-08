import './App.css'
import Button from '../ui/Button/Button'

const App=() => {
  return (
    <>
    <div>DEMAT Breizh</div>
    <Button children="Benjamin" style={{backgroundColor:'black'}} bgColor="red" />
    <Button bgColor="grey">
      <div>TOTO</div>
      <div>TITI</div>
      </Button>
    <Button children="Lionel" bgColor="grey" />
    <Button bgColor="grey">Hello</Button>
    <Button children="Louis" style={{backgroundColor:'red'}} bgColor="brown" />
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