import '../App.css'
import useEmployees from "../hooks/useEmployyes"


function EmployeesList(){

    const {employees, showList, handleClick } = useEmployees(); //CURRLY BRACES as useEmployees() returns object (so here Object Distruction)


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


export default EmployeesList;