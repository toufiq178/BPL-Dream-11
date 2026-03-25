import "./App.css";
import Navbar from "./components/homepage/navbar/Navbar";
import Hero from "./components/homepage/hero/Hero";
import { Suspense, useState } from "react";
import Players from "./components/players/Players";


const fetchPlayersData = fetch("/playerData.json").then(res => res.json())

function App() {

  const [coins , setCoins] = useState(100000)

  return (
    <>
      
      <Navbar coins={coins}/>
      <Hero/>

      <Suspense fallback = {<div className=" flex justify-center items-st h-[50vh]"><span className="loading loading-infinity loading-xl"></span></div>}>
        <Players fetchPlayersData = {fetchPlayersData} coins={coins} setCoins={setCoins} />
      </Suspense>
    </>
  );
}

export default App;
