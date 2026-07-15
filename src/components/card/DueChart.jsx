// src/DueChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2'; // ১. Bar এর জায়গায় Line ইম্পোর্ট করা হয়েছে
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,  // ২. লাইনের পয়েন্টের জন্য যোগ করা হয়েছে
  LineElement,   // ৩. লাইনের জন্য যোগ করা হয়েছে
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// চার্টের উপাদানগুলো রেজিস্টার করুন
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

const DueChart = () => {
  // চার্টের ডাটা (১২ মাসের নাম এবং বকেয়া টাকা)
  const chartData = {
    labels: [
      'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 
      'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ],
    datasets: [
      {
        label: 'মাসIC বকেয়া (টাকা)',
        data: [4000, 2500, 6000, 1500, 3000, 4500, 2000, 5000, 3500, 1800, 2200, 5500],
        borderColor: 'rgba(59, 130, 246, 1)',       // লাইনের রঙ (Tailwind blue-500)
        backgroundColor: 'rgba(59, 130, 246, 0.2)', // লাইনের নিচের শ্যাডো/ফিল কালার (ঐচ্ছিক)                             // লাইনটিকে কিছুটা স্মুথ/কার্ভ করার জন্য (০ দিলে একদম সোজা থাকবে)
                         // নরমাল অবস্থায় পয়েন্টের সাইজ
      },
    ],
  };

  // চার্টের অপশনস
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff',
          font: {
            family: 'sans-serif',
            size: 13,
          }
        },
      },
      title: {
        display: true,
        text: '২০২৬ সালের মোট বকেয়া (Due) রিপোর্ট',
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold',
        }
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.08)',
        },
        ticks: {
          color: '#ffffff',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.08)',
        },
        ticks: {
          color: '#ffffff',
        },
      },
    },
  };

  return (
    <div className='w-full h-full bg-[#0f172a] text-white p-6 rounded-xl shadow-lg border border-slate-800'>
      {/* <Bar /> এর পরিবর্তে <Line /> ব্যবহার করা হয়েছে */}
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DueChart;