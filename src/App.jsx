import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/header";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
