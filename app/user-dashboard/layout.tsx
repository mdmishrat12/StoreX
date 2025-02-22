'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';
import BrandLogo from '@/components/ui/brand-logo/BrandLogo';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <BrandLogo/>
        </div>
        <div className="flex gap-4 items-center">
          <Link href='/cart'> <ShoppingCart className='inline-block'/> Cart </Link>
          <span className="text-gray-700 mr-4"><User className='inline-block'/> John Doe</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={` bg-white w-64 min-h-screen border-r transform transition-transform duration-200 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <nav className="p-4 sticky top-16">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/user-dashboard/profile"
                  className="block p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/user-dashboard/orders"
                  className="block p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/user-dashboard/invoices"
                  className="block p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                >
                  Invoices
                </Link>
              </li>
              <li>
                <Link
                  href="/user-dashboard/wishlist"
                  className="block p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/user-dashboard/settings"
                  className="block p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/user-dashboard/notifications"
                  className="block p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                >
                  Notifications
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}