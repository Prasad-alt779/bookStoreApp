import { Routes, Route,  } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

const App = () => {
 

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/course"
          element={<Courses />}/>
        

        <Route path="/signup" element={<Signup />} />
      </Routes>
   <Toaster />
    </div>
  );
};

export default App; 