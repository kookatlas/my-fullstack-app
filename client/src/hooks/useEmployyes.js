import { useEffect, useState } from "react";
import axios from "axios";

function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [showList, setShowlist] = useState(false);

  useEffect(() => {
    axios
      .get("/api/employees")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        console.log("error while getting list of employees " + error);
      });
  }, []);

  const handleClick = () => {
    setShowlist(true);
  };

  return {
    employees,
    showList,
    handleClick,
  };
}

export default useEmployees;
