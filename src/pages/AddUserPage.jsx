import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function AddUserPage() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });

  const ChangeHandler = (target) => {
    setUser({ ...user, [target.name]: target.value });
  }

  const SubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users', user);
    navigate('/');
  }


  return (
    <div>
      <div className="addPageText">Add New User</div>
      <form onSubmit={SubmitHandler} className="addPageForm">
        <input type="text" placeholder="Name" name="name" value={user.name} onChange={(e) => ChangeHandler(e.target)} />
        <input type="text" placeholder="Username" name="username" value={user.username} onChange={(e) => ChangeHandler(e.target)} />
        <input type="text" placeholder="Email" name="email" value={user.email} onChange={(e) => ChangeHandler(e.target)} />
        <input type="text" placeholder="Phone" name="phone" value={user.phone} onChange={(e) => ChangeHandler(e.target)} />
        <input type="text" placeholder="Website" name="website" value={user.website} onChange={(e) => ChangeHandler(e.target)} />
        <button>Save</button>
      </form>
    </div>
  )
}
