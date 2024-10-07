import React from 'react';

const data = [
  {
    heading: "Stock Total",
    price: "$150,000",
    desc: "Increased by 60%",
    className: "purple",
  },
  {
    heading: "Total Profit",
    price: "$25,000",
    desc: "Increased by 30%",
    className: "blue",
  },
  {
    heading: "Unique Visitors",
    price: "$250,000",
    desc: "Increased by 80%",
    className: "orange",
  },
];

const StatsCard = () => {
  return (
    <div>
      <section className="dashboard-stats">
        {data.map((item, index) => (
          <div key={index} className={`stat-card ${item.className}`}>
            <h3>{item.heading}</h3>
            <p>{item.price}</p>
            <span>{item.desc}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StatsCard;