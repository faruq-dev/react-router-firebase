import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "users",
          element: <Users />,
          loader: () => fetch("https://jsonplaceholder.typicode.com/users/"), //এখানে loader ইউজ করলে User কম্পোনেন্টে useLoaderData() ব্যবহার করতে হবে। ফলে আমরা আগে যেভাবে Async await ও useEffect দিয়ে API থেকে ডাটা fetch করতাম সেটা করা লাগবে না, সেই কাজগুলো useLoaderData() নিজেই করে দিবে।
        },
        {
          path: 'users/:userID',
          element: <UserDetails/>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
          //react router dom আমাদেরকে params নামে একটা অবজেক্ট দেয়, সেটাকে আমরা ডিস্ট্রাকচার করে নিলাম {params} এভাবে, (https://drive.google.com/file/d/1ug3FNGczdcvy09w4C_l9VYi8L4cKbGdV/view) এই ভিডিওর ৪৬.০০ মিনিটে params নিয়ে আলোচনা করা হয়েছে। এই params থেকে আমরা params.userID দিয়ে লিংকটাকে ধরতে পারবো (ডায়নামিকালি লিংকটাকে এখানে fetch এর ভেতরে বসাতে পারব)।

          //এখানে loader ইউজ করলে UserDetails() কম্পোনেন্টে useLoaderData() ব্যবহার করতে হবে।
        }
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    //এই অবজেক্ট শুধু মাত্র ব্রাউজারে warning গুলোকে রিমোভ করার জন্য দেওয়া হয়েছে
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    },
  }
);

export default router;
