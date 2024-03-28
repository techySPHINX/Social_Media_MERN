import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return(
    <>
    <UserHeader />   {/*gives information about the header */}
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about Development." />
    <UserPost likes={1201} replies={483} postImg="/post2.png" postTitle="Let's talk about Development." />
    <UserPost likes={129} replies={487} postImg="/post3.png" postTitle="Let's talk about Development." />
    <UserPost likes={126} replies={486}  postTitle="Let's talk about Development." />
     </>
  );
};

export default UserPage;
