import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function EditPage() {

  const navigate = useNavigate();
  const { id } = useParams();

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
    await axios.put('http://localhost:3000/users/' + id, user);
    navigate('/');
  }

  const loadData = async () => {
    const response = await axios.get('http://localhost:3000/users/' + id);
    setUser(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div>
      <div className="editPageText">Edit User Details</div>
      <form onSubmit={SubmitHandler} className="editDetailForm">
        <input type="text" placeholder="Name" name="name" value={user.name} onChange={(e) => ChangeHandler(e.target)} />
        <input type="text" placeholder="Username" name="username" value={user.username} onChange={(e) => ChangeHandler(e.target)} />
        <input type="text" placeholder="Email" name="email" value={user.email} onChange={(e) => ChangeHandler(e.target)} />
        <input type="text" placeholder="Phone" name="phone" value={user.phone} onChange={(e) => ChangeHandler(e.target)} />
        <input type="text" placeholder="Website" name="website" value={user.website} onChange={(e) => ChangeHandler(e.target)} />
        <button >Save</button>
      </form>
    </div>
  )
}
