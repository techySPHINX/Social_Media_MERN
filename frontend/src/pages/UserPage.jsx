import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [loading,setLoading] =  useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally{
        setLoading(false);
      }
    };

    getUser();
  }, [username, showToast]);

  if(!user && loading){
    return (
      <Flex justifyContent={"center"}>
        <Spinner size="xl" />
      </Flex>
    )
  }

  if(!user  && !loading) return <h1>User Not Found</h1>;

  return (
    <>
      <UserHeader user={user} />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk about Development."
      />
      <UserPost
        likes={1201}
        replies={483}
        postImg="/post2.png"
        postTitle="Let's talk about Development."
      />
      <UserPost
        likes={129}
        replies={487}
        postImg="/post3.png"
        postTitle="Let's talk about Development."
      />
      <UserPost
        likes={126}
        replies={486}
        postTitle="Let's talk about Development."
      />
    </>
  );
};

export default UserPage;
