import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg mb-4"
          >
            Log In
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center justify-between mb-4">
          <hr className="w-full border-gray-300" />
          <span className="text-gray-500 mx-2">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        {/* Social Logins */}
        <div>
          <button className="w-full flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 rounded-lg mb-3">
            <i className="fab fa-facebook-f mr-2"></i>
            Log in with Facebook
          </button>
          <button className="w-full flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-medium py-2 rounded-lg">
            <i className="fab fa-google mr-2"></i>
            Log in with Google
          </button>
        </div>
        {/* Footer */}
        <p className="text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link to={'/signup'}  className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
