import { Link, useNavigation } from "react-router-dom";
/* eslint-disable react/prop-types */
const UserData = ({singleUserData}) => {
  // const navigation = useNavigation(); //useNavigation() আমাদের কয়েকটা State return করে, তার মধ্যে একটা state হলো loading state, এই লোডিং স্টেটের সাহায্যে আমরা লোডিং এনিমেশন দেখাতে পারি
  
    const {id, username, name , email, address: {city, zipcode}} = singleUserData;
  return (
    <>
    {/* <div className={navigation.state === "loading" ? "loading" :""}></div> */}
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-2 font-bold text-blue-800">Data of {username}</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>City: {city}</p>
        <p>Zipcode: {zipcode}</p>
        <Link to={`/users/${id}`}>
          <button className="py-3 px-6 bg-blue-700 text-white mt-6 rounded-md">View Details</button>
        </Link>
    </div>
    </>
  )
}

export default UserData