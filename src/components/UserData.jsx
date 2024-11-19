/* eslint-disable react/prop-types */
const UserData = ({singleUserData}) => {
    const {username, name , email, address: {city, zipcode}} = singleUserData;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-2 font-bold text-blue-800">Data of {username}</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>City: {city}</p>
        <p>Zipcode: {zipcode}</p>
  
    </div>
  )
}

export default UserData