import { getCardFromLS } from "../utilities/LocalStorage";
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
// const itemsPer = Math.round((items / 12) * 100);
// const remainingPer = Math.round((remainingItems / 12) * 100);

// const items = selectedCardIds.length


const COLORS = ['#FF444A', '#00C49F']; // Define colors for the two data sets

const PieChartComponent = () => {
  const [items, setItems] = useState(0)
  const selectedCardIds = getCardFromLS();

  useEffect(() => {
    setItems(selectedCardIds.length)
  }, [selectedCardIds])
  const totalItems = 12;
  const remainingItems = totalItems - items;

  console.log(remainingItems, items);
  const data = [
    { name: 'Total Donation ', value: remainingItems },
    { name: 'Your Donation', value: items }
  ];
  const formatTooltip = (value) => `${((value / 12) * 100).toFixed(2)}%`;
  return (
    <div className="flex justify-center items-center  pl-20">
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          data={data}
          cx={200}
          cy={200}
          innerRadius={0}
          outerRadius={125}
          fill="#8884d8"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
            // Format label values as percentages
            const percentage = `${((value / 12) * 100).toFixed(2)}%`;
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
              <text
                x={x}
                y={y}
                fill="black"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
              >
                {percentage}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={formatTooltip} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;