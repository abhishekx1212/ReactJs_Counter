import './App.css'
import ClassComp from './components/ClassComp'
import Counter from './components/Counter'
import Prop from './components/Prop'
import State from './components/State'

function App() {
  let myData = {
    myName: "trigon",
    myId: "1212",   
    myEmail: "trigon@gmail.com"      
  }
  return (
    <>
      {/* <State/> */}
      
      {/* <Prop user={myData} />         */}
      
      {/* <ClassComp user={myData}/> */}
    
      <Counter/>
    </>
  )
}

export default App
