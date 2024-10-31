import { DocsLayout, Layout } from "@/layouts";
import Home from "@/pages/Home";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Home */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Docs */}
        <Route path="/docs/*" element={<DocsLayout />}></Route>
        {/* Contact */}
        <Route path="/contact/" element={<Layout />}>
          <Route path="" />
        </Route>
        {/* Pricing */}
        <Route path="/pricing/" element={<Layout />}>
          <Route path="" />
        </Route>
        {/* About */}
        <Route path="/about/" element={<Layout />}>
          <Route path="" />
        </Route>
      </Routes>
      <ToastContainer position="top-right" theme="dark" />
    </Suspense>
  );
}

export default App;
