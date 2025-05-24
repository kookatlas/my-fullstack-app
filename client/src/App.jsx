import {useEffect, useState} from "react"
import axios from "axios"
import './App.css'

function App(){

  const [employees, setEmployees] = useState([]);
  const [showList, setShowList] = useState(false)

  useEffect(()=>{
    axios.get("/api/employees")
    .then(res=>{
      setEmployees(res.data);
    })
    .catch(error => {
      console.error("error fetching the employees " + error);
    })
  },[]);

  const handleClick = ( ) => {
    setShowList(true)
  }
  return (
    <div style={{padding: '2rem'}}>
     <h1>For Employees List</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
      {showList && (
        <div className="output">
      {employees.length === 0 ? (
        <p>Employees list loading</p>
      ) : (
        <ul>
          {employees.map(emp=>(
            <li key={emp.id}>
              <strong>{emp.firstName} {emp.lastName}</strong> - {emp.department} {emp.location}
            </li>
          ))}
        </ul>
      )}
    </div>

      )}
    </div>
  );

}

export default App;