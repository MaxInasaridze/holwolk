import './App.css'
import Card from './components/card/Card'
import { students } from './data'

function App() {  
 


  return (
    <>
      <div className='idk'>
        {
          students.map( (item) => (
            <Card key={item.id} surati={item.image} saxeli={item.firstname} gvari={item.lastname} asaki={item.age} kursi={item.coursetype} daswvreba={item.attendance} stipendia={item.scholarship}/>
          ) )
        }
      </div>
      
    </>
  )
}

export default App
