import { useNavigate } from "react-router-dom"
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-400 animate-bounce">404</h1>
      <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-lg text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => {navigate('/')}}
        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition"
      >
        Go Back Home
      </button>
    </div>
  )
}

export default NotFound