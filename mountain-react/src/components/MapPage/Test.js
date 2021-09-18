import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { weather } from '../../utils/weather';
import { weatherURL } from '../../utils/config';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //=== weather variable star ===//
    const locations = weather.map((location) => location.locationName);
    // console.log(locations); //for check
    const elements = weather.map((element) => element.elementName);
    // console.log(elements); //for check
    const parameters = weather.map((parameter) => parameter.parameterName);
    // console.log(parameters); //for check
    //=== weather variable end ===//

    async function mapLData() {
      try {
        const result = await axios.get(
          `${weatherURL}&locationName=${locations}&elementName=${elements}&parameterName=${parameters}`
        );
        let location = result.data.records.location;
        console.log('parameter', location); //for check
        setData(location);
      } catch (e) {
        console.log(e);
      }
    }
    mapLData();
  }, []);

  return (
    <>
      {data.map((item, i) => (
        <ul key={i}>
          {item.parameter[0].parameterValue === '臺北市' ? (
            <li>
              {item.parameter[0].parameterValue}
              {item.weatherElement[0].elementValue}
              {item.weatherElement[1].elementValue}
            </li>
          ) : (
            ''
          )}
        </ul>
      ))}
    </>
  );
}

export default Test;
