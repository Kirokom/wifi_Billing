// src/MyChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// ১. চার্টের জন্য প্রয়োজনীয় জিনিসগুলো রেজিস্টার করুন
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AllMonthChart = () => {
  // ২. চার্টের ডাটা (১২ মাসের নাম এবং উপার্জন)
  const chartData = {
    labels: [
      'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 
      'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ],
    datasets: [
      {
        label: 'মাসিক উপার্জন (টাকা)',
        data: [12000, 19000, 30000, 25000, 24000, 28000, 32000, 27000, 35000, 40000, 38000, 45000],
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // বারের ভেতরের কালার সাদা (Opaque) করা হলো
        borderColor: 'rgba(255, 255, 255, 1)',     // বারের বর্ডার কালার একদম পিওর সাদা করা হলো
        borderWidth: 1,
      },
    ],
  };

  // ৩. চার্টের অপশনস (এখানে টেক্সট এবং গ্রিডের কালার সাদা করা হয়েছে)
  const options = {
    responsive: true,
    maintainAspectRatio: false, // প্যারেন্ট ডিভের হাইট ঠিকঠাক পাওয়ার জন্য
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff', // লেজেন্ডের লেখার কালার (যেমন: 'মাসিক উপার্জন')
        },
      },
      title: {
        display: true,
        text: '২০২৬ সালের মোট উপার্জন রিপোর্ট',
        color: '#ffffff', // চার্টের মেইন টাইটেল লেখার কালার
        font: {
          size: 16,
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // হালকা সাদা গ্রিড লাইন
        },
        ticks: {
          color: '#ffffff', // X-axis বা মাসের নামগুলোর কালার সাদা
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // হালকা সাদা গ্রিড লাইন
        },
        ticks: {
          color: '#ffffff', // Y-axis বা টাকার অংকগুলোর কালার সাদা
        },
      },
    },
  };

  return (
    // Tailwind ক্লাসের সাথে মানানসই উইডথ ও হাইট সেট করা হয়েছে
    <div className='w-full h-full text-white'>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default AllMonthChart;