import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo-lv1.png"
              alt="HCMUTE Logo"
              width={120}
              height={120}
              className="mr-4"
            />
            <div className="flex flex-col">
              <h1 className="text-[#2e4b7a] font-bold text-lg md:text-xl uppercase leading-tight">
                Trường Đại Học <br />
                <span className="text-[#2e4b7a]">Sư Phạm Kỹ Thuật TP. Hồ Chí Minh</span>
              </h1>
              <p className="text-gray-600 text-xs md:text-sm">
                HCMC University of Technology and Education
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-4 md:mt-0 flex items-center">
          <div className="text-[#d92753] text-xl md:text-4xl font-bold mr-6">
            TUYỂN SINH
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Tên ngành dự tuyển..."
              className="w-48 md:w-64 rounded-full pr-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
