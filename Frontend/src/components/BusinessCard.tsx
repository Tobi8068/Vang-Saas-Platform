import { useState } from "react";
import  Rnd  from "react-rnd"; // Import react-rnd

interface CardProps {
  title: string;
  rating: number;
  reviews: number;
  description: string;
}

function Card({ title, rating, reviews, description }: CardProps) {
  const [isOpenButtonClicked, setIsOpenButtonClicked] = useState(false);

  const handleOpenClick = () => {
    setIsOpenButtonClicked(!isOpenButtonClicked);
    console.log("button is clicked");
  };

  return (
    <div className="bg-white flex flex-col justify-between shadow-lg rounded-lg p-4 w-[500px] h-[306px]">
      <div className="flex justify-between items-start">
        {/* Card Content */}
        <div className="flex items-start gap-[28px]">
          <div className="bg-[#d9d9d9] w-[77px] h-[77px] rounded-[5px]"></div>
          <div className="flex flex-col items-start">
            <h3 className="text-[36px] font-bold leading-none">{title}</h3>
            <div className="flex items-center gap-2">
              <p className="text-[20px] font-semibold text-gradient">CRM Tool</p>
              <span className="text-gray-500 text-[16px]">{reviews}+ Reviews</span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-[24px] font-bold leading">{rating}</span>
          <img src="path-to-star-icon" alt="Rating" className="w-[20px] h-[20px]" />
        </div>
      </div>

      {/* Description */}
      <div className="flex items-start p-2 h-[135px] overflow-hidden">
        <p className="text-gray-600 text-left text-[20px]">{description}</p>
      </div>

      {/* Button to Open Popup */}
      <div className="flex items-center justify-center mt-4">
        <button
          className={`font-bold text-[20px] py-1 px-20 rounded-full shadow-xl
              ${isOpenButtonClicked ? 'bg-[#1e1e1e]' : 'bg-lime-300'}
              ${isOpenButtonClicked ? 'text-white' : 'text-[#1e1e1e]'}`}
          onClick={handleOpenClick}
        >
          {isOpenButtonClicked ? "CLOSE" : "OPEN"}
        </button>
      </div>

      {/* Conditional rendering of the resizable and draggable popup */}
      {isOpenButtonClicked && (
        <Rnd
          default={{
            x: 100,  // Initial X position of popup
            y: 100,  // Initial Y position of popup
            width: 320,  // Initial width of popup
            height: 200,  // Initial height of popup
          }}
          minWidth={200}  // Minimum width the popup can be resized to
          minHeight={150}  // Minimum height the popup can be resized to
          bounds="window"  // Popup cannot be dragged outside the window bounds
          style={{
            border: "1px solid black",
            backgroundColor: "#fff",
            padding: "20px",
            zIndex: 1000,  // Ensures the popup is above other elements
          }}
        >
          <div>
            <h3>Resizable Popup</h3>
            <p>This is a resizable and draggable popup window.</p>
            <button onClick={handleOpenClick}>Close Popup</button>
          </div>
        </Rnd>
      )}
    </div>
  );
}

export default Card;