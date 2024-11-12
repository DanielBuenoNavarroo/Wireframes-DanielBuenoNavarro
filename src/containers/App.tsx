import { DocsLayout, Layout } from "@/layouts";
import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About, Auth, Home } from "@/pages";
import { DocsItems } from "@/lib/data";

function App() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home - ReactKit";
        break;
      case "/about":
        document.title = "About - ReactKit";
        break;
      case "/contact":
        document.title = "Contact - ReactKit";
        break;
      case "/pricing":
        document.title = "Pricing - ReactKit";
        break;
      case "/auth":
        document.title = "Auth - ReactKit";
        break;
      default:
        if (location.pathname.startsWith("/docs")) {
          document.title = "Documentación - ReactKit";
        } else {
          document.title = "ReactKit";
        }
        break;
    }
  }, [location]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Home */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* Docs */}
          <Route path="/docs/*" element={<DocsLayout />}>
            {DocsItems.flatMap((section) =>
              section.links.map((link, index) => (
                <Route
                  key={index}
                  path={link.url}
                  element={<link.component />}
                />
              ))
            )}
          </Route>
          {/* Contact */}
          <Route path="/contact/" element={<Layout />}>
            <Route path="" />
          </Route>
          {/* Pricing */}
          <Route path="/pricing/" element={<Layout />}>
            <Route path="" />
          </Route>
          {/* About */}
          <Route path="/about/*" element={<Layout />}>
            <Route path="" element={<About />} />
          </Route>
          {/* Auth */}
          <Route path="/auth/" element={<Layout />}>
            <Route path="" element={<Auth />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
