import React from 'react';
import { useState } from 'react';
import LeftBar from './Components/LeftBar';
import SearchBar from './Components/SearchBar';
import CustomSection from './Components/CustomSelection';
import Button from './Components/Button';
import Card from './Components/Card';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenClick = () => {
    console.log('Open button clicked');
  };

  const handleSlideClick = () => {
    console.log('Slide to the next section');
  };

  const sections = [
    {
      title: "Boston Venture Company Stack",
      content: (
        <div className="flex items-center space-x-4">
          <div className="bg-white p-4 rounded-lg shadow-md">SalesForce</div>
          <div className="bg-white p-4 rounded-lg shadow-md">DataBricks</div>
          <div className="bg-white p-4 rounded-lg shadow-md">+ Add New</div>
        </div>
      ),
    },
    {
      title: "Another Stack Example",
      content: (
        <div className="flex items-center space-x-4">
          <div className="bg-white p-4 rounded-lg shadow-md">Example Card 1</div>
          <div className="bg-white p-4 rounded-lg shadow-md">Example Card 2</div>
          <div className="bg-white p-4 rounded-lg shadow-md">Example Card 3</div>
        </div>
      ),
    },
  ];

  const handleSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <LeftBar />
      
      <div className="flex-1 p-4">
        <header className="flex items-center justify-between mb-8">
          <div className="flex space-x-4">
            <Button label="Discover" />
            <Button label="All Stacks" isActive />
            <Button label="My Stack" />
          </div>
          <SearchBar />
        </header>

        <CustomSection
        bgColor="#c7e557"
        title="Boston Venture Company Stack"
        onClick={handleSlideClick}
      >
        <Card
          title="SalesForce"
          rating={4.8}
          reviews="25,652+"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          onOpenClick={handleOpenClick}
        />
        <Card
          title="SalesForce"
          rating={4.8}
          reviews="25,652+"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          onOpenClick={handleOpenClick}
        />
        <Card
          title="SalesForce"
          rating={4.8}
          reviews="25,652+"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          onOpenClick={handleOpenClick}
        />
      </CustomSection>
      </div>
    </div>
  );
};

export default App;
