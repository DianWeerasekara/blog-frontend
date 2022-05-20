import Home from "./pages/home/Home";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Updatepage from "./pages/update/Updatepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
      <TopBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog/:id"  element={<Single />} />
          <Route path="update/:id" element={<Updatepage />} />
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}


export default App;
