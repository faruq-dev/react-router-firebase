import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{
        //এই অবজেক্ট শুধু মাত্র ব্রাউজারে warning গুলোকে রিমোভ করার জন্য দেওয়া হয়েছে
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersists: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      }}
    />
  </StrictMode>
);
