import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import injection from "../../assets/images/injection.jpg";

const Sidebar = () => {
  const categories = [
    // Medicine
    'Paracetamol', 'Ibuprofen', 'Cough Syrup', 'Antibiotics', 'Vitamin C',
    'Zinc Tablets', 'Eye Drops', 'Insulin', 'Pain Relief Spray', 'First Aid Kit',

    // Summer Essentials
    'Sunscreen', 'Aloe Vera Gel', 'Cooling Talc', 'Summer Lotion', 'Electrolyte Drink',
    'Face Mist', 'Lip Balm SPF', 'Hydration Tablets', 'Mint Oil', 'After Sun Cream',

    // Derma Care
    'Face Wash', 'Moisturizer', 'Sunscreen Gel', 'Anti-Acne Cream', 'Vitamin C Serum',
    'Retinol Cream', 'Face Scrub', 'Toner', 'Micellar Water', 'Night Cream',

    // Ayurveda
    'Chyawanprash', 'Ashwagandha', 'Triphala', 'Giloy Juice', 'Neem Capsules',
    'Amla Tablets', 'Turmeric Powder', 'Ayurvedic Hair Oil', 'Brahmi Syrup', 'Aloe Vera Juice',

    // Mother Care
    'Maternity Vitamins', 'Stretch Mark Cream', 'Nursing Pads', 'Pregnancy Pillow', 'Mother’s Protein Powder',
    'Lactation Supplements', 'Belly Butter', 'Baby Oil', 'Nipple Cream', 'Body Lotion for Moms'
  ];

  const groupedCategories = Array.from({ length: 5 }, (_, i) =>
    categories.slice(i * 10, (i + 1) * 10)
  );

  const groupNames = [
    'Medicine',
    'Summer Essentials',
    'Derma Care',
    'Ayurveda',
    'Mother Care'
  ];

  const brandFilters = {
    'On Stock': ['Himalaya', 'Mamaearth', 'Patanjali', 'Cetaphil', 'Dabur', 'Johnson & Johnson'],
    'On Sales': ['Nivea', 'Ponds', 'Garnier', 'Biotique', 'Vaseline', 'L’Oréal'],
    'Brand Categories': ['WOW Skin Science', 'Minimalist', 'The Ordinary', 'Lotus', 'Neutrogena', 'Plum']
  };

  const [openDropdowns, setOpenDropdowns] = useState(
    [true, false, false, false, false, false, false, false]
  );

  const [priceRange, setPriceRange] = useState([100, 1000]);

  const toggleDropdown = (index) => {
    const updated = [...openDropdowns];
    updated[index] = !updated[index];
    setOpenDropdowns(updated);
  };

  const handlePriceChange = (_, newValue) => {
    setPriceRange(newValue);
  };

  const renderBrandFilter = (title, index, brands) => (
    <div className="filterBox">
      <div
        className="dropdown-header"
        onClick={() => toggleDropdown(index)}
      >
        <span>{title}</span>
        <span>{openDropdowns[index] ? '-' : '+'}</span>
      </div>
      {openDropdowns[index] && (
        <div className="scroll">
          <ul className="category-list">
            {brands.map((brand, i) => (
              <li key={i}>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox size="small" />}
                  label={<span className="label-text">{brand}</span>}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-scroll">
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>
          {groupedCategories.map((group, idx) => (
            <div key={idx} className="category-group">
              <div
                className="dropdown-header"
                onClick={() => toggleDropdown(idx)}
              >
                <span>{groupNames[idx]}</span>
                <span>{openDropdowns[idx] ? '-' : '+'}</span>
              </div>

              {openDropdowns[idx] && (
                <div className="scroll">
                  <ul className="category-list">
                    {group.map((cat, i) => (
                      <li key={i}>
                        <FormControlLabel
                          className="w-100"
                          control={<Checkbox size="small" />}
                          label={<span className="label-text">{cat}</span>}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="filterBox">
          <h6>FILTER BY PRICE</h6>
          <div className="price-slider">
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={5000}
              size="small"
              sx={{ color: '#1976d2' }}
            />
            <div className="price-range">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>

        {renderBrandFilter('On Stock', 5, brandFilters['On Stock'])}
        {renderBrandFilter('On Sales', 6, brandFilters['On Sales'])}
        {renderBrandFilter('Brand Categories', 7, brandFilters['Brand Categories'])}
        <div className="sidebar-banner">
      <img
  src={injection}
  alt="Offer Banner"
  className="sidebar-image w-100"
/>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
