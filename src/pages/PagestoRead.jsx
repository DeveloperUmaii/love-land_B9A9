import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Footer from '../components/Footer';

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
        {/* Chat GTP Code */}
        {/* <!-- About Us Component --> */}
<div class="bg-green-100 px-20 py-10 rounded-lg  ">
    <h2 class="text-3xl font-semibold text-center text-gray-800 mb-10">About Us</h2>
    <p class="text-lg text-gray-600 mb-4">
        We are an agriculture-based organization, aiming to raise awareness about agricultural land, gardens, and farms.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-1 gap-10">
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-green-600">Agricultural Land</h3>
            <p class="text-gray-500">We work with environmentally-friendly land management practices and introduce modern technologies and innovations to farmers.</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-green-600">Gardens</h3>
            <p class="text-gray-500">We contribute to the development of garden farming with new methods and research-based plant production.</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-green-600">Farms</h3>
            <p class="text-gray-500">We provide modern technology and special training and support to farmers in farm management.</p>
        </div>
    </div>
</div>

 
          <Footer></Footer>
    </div>

  );
}
