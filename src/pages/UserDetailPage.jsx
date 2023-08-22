import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function UserDetailPage() {

  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
     loadUser();
  }, []);

  const loadUser = async () => {
    const response = await axios.get('http://localhost:3000/users/' + id);
    setUser(response.data);
  }


  return (
    <div>
      <div className="detailPageText">Detail Page</div>
      <div className="detailForm">
        <div><span className="title">Name:</span> {user.name}</div>
        <div><span className="title">Username:</span> {user.username}</div>
        <div><span className="title">Email:</span> {user.email}</div>
        <div><span className="title">Phone:</span> {user.phone}</div>
        <div><span className="title">Website:</span> {user.website}</div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  )
}
