import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function UsersPage() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
  }

  const removeUser = async (id) => {
    await axios.delete('http://localhost:3000/users/' + id);
    const new_users = users.filter(el => el.id !== id);
    setUsers(new_users);
  }


  return (
    <div>
      <button onClick={() => navigate('/user/add')} className="add">Add new user</button>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map(el => <tr key={el.id}>
              <td className="userId">{el.id}</td>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td className="action">
                <button onClick={() => navigate('/user/edit/' + el.id)} className="edit">edit</button>
                <button onClick={() => navigate('/user/' + el.id)} className="detail">detail</button>
                <button onClick={() => removeUser(el.id)} className="delete">delete</button>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}
