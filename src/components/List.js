import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { CSVLink, CSVDownload } from "react-csv";

function List({ term, updateImg }) {
  const [isLoading, setLoading] = useState(true);
  const [addresses, setItems] = useState();
  const apiUrl = 'https://solar-scan-app-z6nwk7pxdq-uw.a.run.app/output?zip_code='.concat(term).concat('&city=San%20Jose&state=CA');
  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const results = Object.entries(addresses).map((item, index) =>
  ([item[0], item[1].has_pool, item[1].has_solar]))
  
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <CSVLink data={results} filename={"solar_scan_results.csv"}>Download Results</CSVLink>
        {Object.entries(addresses).map((item, index) => (
          <ItemList term={item[0]} pool={item[1].has_pool} solar={item[1].has_solar} image={item[1].base64_image}/>
        ))}
      </ul>
    </div>
  )
}

function ItemList({ term, pool, solar, image }) {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState();
  const apiUrl = 'http://54.160.173.202:8080/getSolarData?address='.concat(term);
  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  // const items = {
  //   'Carbon Offset Factor (kg/MWh)': 100,
  //   'Max Area (m²)': 500,
  //   'Max Sunshine Hours per Year': 2000
  // };

  const model_out = 'data:image/png;base64,'.concat(image);
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li class="list-item" key={1} style={{ marginBottom: '10px', cursor: 'pointer' }}>
            <div class="list-item-content">
              <div class="row">{term}</div>
              <div class="row">
                Roof Area: {items['Carbon Offset Factor (kg/MWh)']} ft2
                <span style={{float:'right'}}>
                    {pool ? "Pool": "No Pool"}
                </span>
              </div>
              <div class="row">Max Panel Count: {items['Max Area (m²)']} panels
                <span style={{float:'right'}}>
                  {solar ? "Solar": "No Solar"}
                </span>
              </div>
              <div class="row">CO2 Savings: {items['Max Sunshine Hours per Year']} kg/MWh</div>
            </div>
            <div class="list-item-image">
              <img src={model_out} alt="Image 2"/>
            </div>
          </li>
      </ul>
    </div>
  );
}

export default List;