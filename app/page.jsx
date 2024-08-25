"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [openButtons, setOpenButtons] = useState({});
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const options = { weekday: 'long', month: 'numeric', day: 'numeric' };
    const today = now.toLocaleDateString('en-US', options);
    setCurrentDate(today);
  }, []);

  const toggleDropdown = (buttonIndex) => {
    setOpenButtons((prevState) => ({
      ...prevState,
      [buttonIndex]: !prevState[buttonIndex],
    }));
  };

  const buttons = [
    { label: "monday", details: ( 
      <ul style={{ listStyleType: "disc" }}>
        <h1 className="font-bold btitle">linear algebra</h1>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">time: </span>11:00 am - 12:15 pm</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">petit science center: </span>255</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">course number: </span>2641</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">monday & wednesday</span></li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">mohammad shirazi</span></li></p>
        <h1 className="font-bold btitle pt-3">data structures</h1>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">time: </span>3:30 pm - 4:45 pm</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">langdale hall: </span>700</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">course number: </span>2720</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">monday, tuesday*, wednesday</span></li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">muhammad islam</span></li></p>
      </ul>
    ) },
    { label: "tuesday", details: ( 
      <ul style={{ listStyleType: "disc" }}>
        <h1 className="font-bold btitle">american government</h1>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">time: </span>2:15 pm - 3:30 pm</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">library south: </span>102</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">course number: </span>1101</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">tuesday & thursday</span></li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">elizabeth callaghan</span></li></p>
        <h1 className="font-bold btitle pt-3">data structures</h1>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">time: </span>3:45 pm - 4:35 pm</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">classroom south: </span>203</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">course number: </span>2720</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">monday, tuesday*, wednesday</span></li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">muhammad islam</span></li></p>
        <h1 className="font-bold btitle pt-3">codepath intermediate cybersecurity</h1>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">september 16: </span>5:00 pm - 7:00 pm</li></p>
      </ul>
    ) },
    { label: "wednesday", details: ( 
      <ul style={{ listStyleType: "disc" }}>
        <h1 className="font-bold btitle">linear algebra</h1>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">time: </span>11:00 am - 12:15 pm</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">petit science center: </span>255</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">course number: </span>2641</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">monday & wednesday</span></li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">mohammad shirazi</span></li></p>
        <h1 className="font-bold btitle pt-3">data structures</h1>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">time: </span>3:30 pm - 4:45 pm</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">langdale hall: </span>700</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">course number: </span>2720</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">monday, tuesday*, wednesday</span></li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">muhammad islam</span></li></p>
      </ul>
    ) },
    { label: "thursday", details: ( 
      <ul style={{ listStyleType: "disc" }}>
        <h1 className="font-bold btitle">american government</h1>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">time: </span>2:15 pm - 3:30 pm</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">library south: </span>102</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">course number: </span>1101</li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">tuesday & thursday</span></li></p>
        <p className="text-sm pl-5 pt-1 pb-1"><li><span className="font-bold blist">elizabeth callaghan</span></li></p>
      </ul>
    ) },
  ];

  return (
    <main>
      <div>
        
        <div className="flex flex-col justify-between pt-20 pb-2 z-10 max-w-xl w-full items-center text-xl lg:flex">
          <h1 className="title">fall schedule</h1>
        </div>
        <div>
          <p className="date-test flex flex-col items-center justify-between text-sm w-full pb-2 z-10 lg:flex max-w-xl">{currentDate ? `${currentDate}` : "loading date..."}</p>
          </div>
      </div>
      <div className="flex flex-col z-10 pb-3 max-w-xl  w-full justify-between items-center lg:flex text-sm">
        <p className="test">ak</p>
      </div>
      <div className="m-8">
        {buttons.map((button, index) => (
          <div key={index} className="mb-6">
            <button 
              onClick={() => toggleDropdown(index)} 
              className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-400 transition test-2"
            >
              {button.label}
            </button>

            {openButtons[index] && (
              <div className="m-3 p-2 rounded shadow-lg">
                {button.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
