import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
    // Add social signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Signup Buttons */}
        <button
          onClick={() => handleSocialSignup("Facebook")}
          className="w-full flex items-center justify-center bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 mb-4"
        >
          <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.676 0H1.324C.592 0 0 .592 0 1.324v21.352C0 23.408.592 24 1.324 24H12v-9H9v-3h3v-2.4c0-3 1.793-4.6 4.448-4.6 1.273 0 2.6.2 2.6.2V7H17.16c-1.43 0-1.86.863-1.86 1.753V12h4l-1 3h-3v9h5.676c.732 0 1.324-.592 1.324-1.324V1.324C24 .592 23.408 0 22.676 0z" />
          </svg>
          Sign up with Facebook
        </button>

        <button
          onClick={() => handleSocialSignup("Google")}
          className="w-full flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.488 10.885H12.204v3.662h5.885c-.254 1.389-.93 2.566-1.92 3.44l-.03.226 2.815 2.2.195-.02c1.77-1.632 2.789-4.05 2.789-6.846 0-.744-.073-1.471-.22-2.175zM12.204 23.82c2.412 0 4.445-.792 5.926-2.16l-2.815-2.2c-.785.532-1.798.846-3.112.846-2.39 0-4.412-1.615-5.139-3.782l-.218.018-2.736 2.129-.036.207C4.988 21.147 8.38 23.82 12.204 23.82zM5.816 12.648c-.184-.552-.288-1.144-.288-1.748 0-.604.104-1.196.288-1.748l-.005-.236-2.772-2.163-.18.085c-.566 1.078-.884 2.308-.884 3.626 0 1.317.318 2.547.883 3.625l2.772-2.162.005-.239zM12.204 4.516c1.313 0 2.49.452 3.419 1.337l2.56-2.559C16.647 1.488 14.615.688 12.204.688 8.38.688 4.988 3.36 3.773 6.787l2.78 2.165c.729-2.162 2.75-3.782 5.138-3.782z" />
          </svg>
          Sign up with Google
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to={'/login'}  className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
