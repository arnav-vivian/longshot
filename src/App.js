import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;

// // export default App;
// import Table from "./components/Table";
// import data from "./assets/Data.json";
// import Home from "./pages/Home";
// function App() {
//   const getHeadings = () => {
//     return Object.keys(data[0]);
//   }

//   return (
//     <>

//       <div className="container">
//         <Table theadData={getHeadings()} tbodyData={data} />
//       </div>

//     </>
//   );
// }
// export default App;
