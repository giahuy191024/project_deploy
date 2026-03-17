import {useEffect, useState} from 'react'
import './App.css'
interface User{
    id: number;
    name: string;
    email: string;
}
function App() {
    const [user, setUser] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<String | null>();
    const fetchUsers=()=>{
        setIsLoading(true);
        setError(null);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState === 4 && xhr.response===200){
                try{
                    const data = JSON.parse(xhr.response);
                    setUser(data);
                    setError(null);
                }catch (e) {
                    setError("Something went wrong");
                }
            }else {
                setError("Something went wrong");
            }
            setIsLoading(false);
        }
        xhr.onerror=()=>{
            setError("Something went wrong");
            setIsLoading(false);
        }
        xhr.send();
    }
    useEffect(() => {
        fetchUsers();
    },[]);
  return (

      <div>
          <h1>Danh sach nhan vien</h1>
          {isLoading && <p>Loading...</p>}
          {error && <p>Loi : {error}</p>}
          <ul>
              {user.map((user)=>(
                  <li>{user.id}-{user.name}</li>
              ))}
          </ul>
      </div>
  );
}

export default App
