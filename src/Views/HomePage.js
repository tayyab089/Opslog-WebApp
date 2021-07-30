import React from 'react';
import CardComponent from '../Components/CardComponent';

import dataImage from '../assets/images/data_table_2.jpg';
import analyticsImage from '../assets/images/analytics.jpg';
import reportImage from '../assets/images/report.jpg';

export default function HomePage() {
  return (
    <div>
      <div className="Card-Container">
        <CardComponent
          title="Data"
          image={dataImage}
          description="Raw uploaded data"
          destination="/data"
        />
        <CardComponent
          title="Analytics"
          image={analyticsImage}
          description="Meaningful results from the acquired data"
          destination="/data"
        />
        <CardComponent
          title="Report"
          image={reportImage}
          description="Shiftwise reports on data submission"
          destination="/report"
        />
      </div>
    </div>
  );
}
