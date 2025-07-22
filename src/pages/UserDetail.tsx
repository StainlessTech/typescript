import { useEffect, useState } from "react";
import Instance from "../api/instance";
import { useParams } from "react-router-dom";
import type { iUser } from "../interface/interface";

const UserDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [getSingleUser, setGetSingleUser] = useState<iUser | null>(null);

  console.log(getSingleUser);

  const singleData = async () => {
    const res = await Instance.get(`/user/viewoneuser/${id}`);
    setGetSingleUser(res.data.data);
  };

  useEffect(() => {
    singleData();
  }, []);

  return (
    <div className=" max-w-[1440px] mx-auto">
      <h1 className=" font-bold my-6">User Detail</h1>
      <section className="  gap-7 shadow-lg p-10">
        <div className=" h-20 w-20 bg-purple-700 rounded-full justify-center items-center flex font-extrabold text-3xl mr-3 text-white">
          {getSingleUser?.username.charAt(0)}
        </div>
        <p>
          {" "}
          <b>Name:</b> {getSingleUser?.username}
        </p>
        <p>
          {" "}
          <b>Email:</b> {getSingleUser?.email}
        </p>
        <p>
          {" "}
          <b>Address:</b>
          {getSingleUser?.address}
        </p>
        <p>
          {" "}
          <b>Age:</b>
          {getSingleUser?.age}
        </p>
        <p>
          {" "}
          <b>Bio:</b>
          {getSingleUser?.bio}
        </p>
      </section>
    </div>
  );
};

export default UserDetail;
