import Link from 'next/link';
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';

const LastOrders = () => {

  const ordersInfo = [
    {
      id: 1004,
      orderNumber: "DDE-57456951",
      orderDate: "31 مرداد1403",
      cost: 10000,
      allCost: 9985900,
      paymentOperation: "لغو شده",
    },
    {
      id: 1005,
      orderNumber: "DDE-57456951",
      orderDate: "31 مرداد1403",
      cost: 10000,
      allCost: 9985900,
      paymentOperation: "لغو شده",
    },
    {
      id: 1006,
      orderNumber: "DDE-57456951",
      orderDate: "31 مرداد1403",
      cost: 10000,
      allCost: 9985900,
      paymentOperation: "لغو شده",
    },
  ];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-center rtl:text-center text-black">
        <thead className=" bg-mainLightBlue text-white">
          <tr className="py-3">
            <th scope="col" className="px-3 py-3">
              #
            </th>
            <th scope="col" className="px-3 py-3">
              شماره سفارش
            </th>
            <th scope="col" className="px-3 py-3">
              تاریخ ثبت سفارش
            </th>
            <th scope="col" className="px-3 py-3">
              مبلغ قابل پرداخت
            </th>
            <th scope="col" className="px-3 py-3">
              مبلغ کل
            </th>
            <th scope="col" className="px-3 py-3">
              عملیات پرداخت
            </th>
            <th scope="col" className="px-3 py-3">
              جزییات
            </th>
          </tr>
        </thead>
        <tbody>
          {ordersInfo.map((order, index) => (
            <tr key={order.id} className="bg-white border-b border-gray-200">
              <td className="px-4 py-6">{index + 1}</td>
              <td className="px-4 py-6">{order.orderNumber}</td>
              <td className="px-4 py-6">{order.orderDate}</td>
              <td className="px-4 py-6">{order.cost.toLocaleString()} تومان</td>
              <td className="px-4 py-6">
                {order.allCost.toLocaleString()} تومان
              </td>
              <td className="px-4 py-6">{order.paymentOperation}</td>
              <td className="px-4 py-6">
                <Link href="#" className="text-gray-400 text-2xl">
                  <IoIosArrowBack />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LastOrders