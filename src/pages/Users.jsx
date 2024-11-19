import { useLoaderData } from "react-router-dom";
import UserData from "../components/UserData";

const Users = () => {
  const data = useLoaderData();
  console.dir(data);
  return (
    <section className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-normal text-blue-600 dark:text-blue-400 pt-10 mb-10">
          All Users Information
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {data.map((singleUserData)=>{
            return <UserData key={singleUserData.id} singleUserData={singleUserData}/>
          })}
        </div>
      </div>
    </section>
  );
};

export default Users;
