import React from 'react';

function ItemList({ items }) {
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li class="list-item" key={index} style={{ marginBottom: '10px', cursor: 'pointer' }}>
            <div class="row">{item.address}</div>
            <div class="row">Roof Area: {item.area} ft2</div>
            <div class="row">Max Panel Count: {item.panels} panels</div>
            <div class="row">CO2 Savings: {item.co2} kg/MWh</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;