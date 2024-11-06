import {Layout} from "@/layouts";
import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Auth, Home} from "@/pages";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* Home */}
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                {/* Docs */}
                <Route path="/docs/*" element={<Layout />}>
                    
                </Route>
                {/* Contact */}
                <Route path="/contact/" element={<Layout/>}>
                    <Route path=""/>
                </Route>
                {/* Pricing */}
                <Route path="/pricing/" element={<Layout/>}>
                    <Route path=""/>
                </Route>
                {/* About */}
                <Route path="/about/" element={<Layout/>}>
                    <Route path=""/>
                </Route>
                {/* Auth */}
                <Route path="/auth/" element={<Layout/>}>
                    <Route path="" element={<Auth/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
