import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  // Blogs data fetched using useLoaderData
  const blogs = useLoaderData();

  // Transform blogs into data suitable for the chart
  const chartData = blogs.map((blog, index) => ({
    name: `Books: ${blog.sur_name}`, // Use page number as the label
    title: blog.title,       // Add title to tooltip
    value: blog.number_of_pages * 1,     // Example: Use ID to generate value dynamically
  }));

  return (
    <div className="">
          <div className="">
            <h1 className='   drop-shadow-xl text-center text-5xl font-bold rounded-lg mx-96 p-4 bg-[#5dff2c] text-[#ffffff]'>Chart for reading page </h1>
            
          </div>

          <div className=' rounded-xl m-10 border border-[#2020202d] p-7 py-10 bg-[#2020201a]'>
            <BarChart
              width={1220}
              height={400}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value, name, props) => [value, props.payload.title]} />
              <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>
    </div>

  );
}
