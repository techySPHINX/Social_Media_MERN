
import { Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Homepage from "./pages/HomePage";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import userAtom from "./atoms/usersAtom";
import { useRecoilValue } from "recoil";
import LogoutButton from "./components/LogoutButton";
import UpdateProfilePage from "./pages/UpdateProfilePage";

function App() {
  const user = useRecoilValue(userAtom);
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route path='/' element={user ? <Homepage /> : <Navigate to="/auth"/>} />
        <Route path='/auth' element={!user ? <AuthPage/> :<Navigate to="/"/>} />
        <Route path='/update' element={user ? <UpdateProfilePage/> :<Navigate to="/auth"/>} />
        <Route path="/:username"  element={<UserPage /> }/>
        <Route path="/:username/post/:pid"  element={<PostPage /> }/>
      </Routes>

      {user && <LogoutButton />}
    </Container>
  );
}

export default App;
