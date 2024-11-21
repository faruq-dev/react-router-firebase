import { useLoaderData, useNavigate } from "react-router-dom"

const UserDetails = () => {
    const navigate = useNavigate();
    const {name, username, email , address: {city, zipcode}} = useLoaderData();
  return (
    <section className="bg-gray-100">
        <div className="container mx-auto px-4 min-h-screen flex justify-center items-center">
            <div className="bg-white size-fit p-10 rounded-lg shadow-md ">
                <h1 className="text-2xl font-bold dark:text-gray-200 mb-4 text-blue-600">
                    User Details
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Name: {name}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Username: {username}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Email: {email}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                    City: {city}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                    Zip: {zipcode}
                </p>
                <button onClick={()=>navigate('/users')} className="py-3 px-6 bg-blue-700 text-white mt-6 rounded-md">Back to All Users</button>
            </div>
        </div>
    </section>
  )
}

export default UserDetails