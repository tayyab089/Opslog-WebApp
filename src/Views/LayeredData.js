import React from 'react';
import CardComponent from '../Components/CardComponent';

import turbineImage from '../assets/images/turbine-2.jpg';
import boilerImage from '../assets/images/boiler.jpg';
import bopImage from '../assets/images/bop.jpg';

const LayeredData = () => {
  return (
    <div>
      <div className="Card-Container">
        <CardComponent
          title="TURBINE"
          image={turbineImage}
          destination="/sdata/turbine"
        />
        <CardComponent
          title="BOILER"
          image={boilerImage}
          destination="/sdata/boiler"
        />
        <CardComponent title="BOP" image={bopImage} destination="/sdata/bop" />
      </div>
    </div>
  );
};

export default LayeredData;
