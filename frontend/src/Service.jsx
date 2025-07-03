import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";

const Service = () => {
  const [oldupdate, newupdate] = useState(true);
  const [oldarray, newarray] = useState([]);

  const takebackendservices = async () => {
    try {
      const response = await fetch(" https://mern-application-with-sql.onrender.com/home/services", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const gh = await response.json();
      if (response.ok) {
        console.log(gh.details);
        newarray(gh.details);
      } else {
        console.error("Failed to fetch services:", gh);
      }
    } catch (error) {
      console.error("Error fetching services:", error.message);
    }
  };

  useEffect(() => {
    takebackendservices();
  }, []);

  return (
    <>
      <Navbar value={newupdate} value2={oldupdate} />

      <div className="flex justify-center mb-8">
        <h1
          style={{
            color: "white",
            fontSize: "55px",
            textDecoration: "underline",
            textDecorationColor: "#1877F2",
          }}
        >
          Services
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {oldarray?.map((curr, index) => (
            <div
              key={curr.id || index}
              style={{ border: "2px solid white" }}
              className="p-4 mb-8 md:w-[400px] rounded-xl shadow-xl bg-[#111827]"
            >
              <div className="flex justify-center">
                <img src="design.png" alt="service" style={{ height: "200px" }} />
              </div>

              <div className="mt-4">
                <h3 className="text-white text-xl font-bold mb-2">{curr.title}</h3>
                <p className="text-white mb-4">{curr.description}</p>
                <div className="text-right text-white font-semibold text-lg">
                  ₹{parseFloat(curr.price).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
