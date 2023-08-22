import { Routes, Route } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";
import { AddUserPage } from "./pages/AddUserPage";
import { EditPage } from "./pages/EditPage";
import { UserDetailPage } from "./pages/UserDetailPage";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/user/add" element={<AddUserPage />} />
      <Route path="/user/edit/:id" element={<EditPage />} />
      <Route path="/user/:id" element={<UserDetailPage />} />
    </Routes>
  )
}
