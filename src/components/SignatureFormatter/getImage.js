import React, { useState } from 'react';

const ImageSelector = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const getImage = () => {
    switch (selectedOption) {
      case 'PG Baseball':
        return "https://mswrgxsoijhmpqyepekf.supabase.co/storage/v1/object/public/brand/pg_icon_blue_1_10x_s6llnh.png" ;
      case 'PG Softball':
        return <img src="/path/to/dog.jpg" alt="dog" />;
      case 'bird':
        return <img src="/path/to/bird.jpg" alt="bird" />;
      default:
        return <p>Please select an option from the dropdown</p>;
    }
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="PG Baseball">PG Baseball</option>
        <option value="PG Softball">PG Softball</option>
        <option value="PG Apparel">PG Apparel</option>
      </select>
      
    </div>
  );
}

export default ImageSelector;