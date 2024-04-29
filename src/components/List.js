import React, { useState, useEffect } from 'react';
import axios from 'axios'
import beta_model from '../beta_model.png';

function List({ term, updateImg }) {
  const addresses = ["373 Alric Dr", "368 Utica Ln", "376 Utica Ln", "385 Utica Ln"]
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {addresses.map((item, index) => (
          <ItemList term={item}/>
        ))}
      </ul>
    </div>
  )
}

function ItemList({ term }) {
  // console.log(term)
  // const [isLoading, setLoading] = useState(true);
  // const [items, setItems] = useState();
  // const apiUrl = 'http://52.91.96.194:8080/getSolarData?address='.concat(term);
  // useEffect(() => {
  //   axios.get(apiUrl).then(response => {
  //     setItems(response.data);
  //     setLoading(false);
  //   });
  // }, []);

  // if (isLoading) {
  //     return <div className="App">Loading...</div>;
  // }

  const items = {
    'Carbon Offset Factor (kg/MWh)': 100,
    'Max Area (m²)': 500,
    'Max Sunshine Hours per Year': 2000
  };

  console.log(items)
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li class="list-item" key={1} style={{ marginBottom: '10px', cursor: 'pointer' }}>
            <div class="row">{term}</div>
            <div class="row">
              Roof Area: {items['Carbon Offset Factor (kg/MWh)']} ft2
              <span style={{float:'right'}}>
                  No Pool
              </span>
            </div>
            <div class="row">Max Panel Count: {items['Max Area (m²)']} panels
              <span style={{float:'right'}}>
                  No Solar
              </span>
            </div>
            <div class="row">CO2 Savings: {items['Max Sunshine Hours per Year']} kg/MWh</div>
          </li>
      </ul>
    </div>
  );
}

export default List;