import React, { useState, useEffect } from 'react';
import axios from 'axios'

function ItemList({ term }) {
  console.log(term)
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState();
  const apiUrl = 'http://52.91.96.194:8080/getSolarData?address='.concat(term);
  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
      return <div className="App">Loading...</div>;
  }

  console.log(items)
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li class="list-item" key={1} style={{ marginBottom: '10px', cursor: 'pointer' }}>
            <div class="row">{term}</div>
            <div class="row">Roof Area: {items['Carbon Offset Factor (kg/MWh)']} ft2</div>
            <div class="row">Max Panel Count: {items['Max Area (m²)']} panels</div>
            <div class="row">CO2 Savings: {items['Max Sunshine Hours per Year']} kg/MWh</div>
          </li>
      </ul>
    </div>
  );
}

export default ItemList;