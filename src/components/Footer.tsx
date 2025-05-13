import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-gray-200">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and contact section */}
          <div className="md:col-span-5">
            <div className="flex flex-col">
              <Image
                src="/assets/logo-lv2.png"
                alt="HCMUTE Logo"
                width={150}
                height={150}
                className="mb-4"
              />
              <h3 className="text-base font-bold text-gray-800 mb-2">Liên Hệ Tuyển Sinh</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p className="font-semibold">Hội Đồng Tuyển Sinh Trường ĐH Sư Phạm Kỹ Thuật TP.HCM</p>
                <p>Phòng Tuyển Sinh & Công Tác Sinh Viên - Phòng Đào Tạo</p>
                <div className="flex items-center mt-3">
                  <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>01 Võ Văn Ngân, Q.Thủ Đức, TP.HCM</p>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p>(028) 3722 5724 - (028) 3896 1333</p>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>tuyensinh@hcmute.edu.vn - huukhanhch@hcmute.edu.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect with HCMUTE */}
          <div className="md:col-span-7">
            <h3 className="text-base font-bold text-gray-800 mb-4">Kết Nối Với HCMUTE</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Input
                type="email"
                placeholder="Nhập địa chỉ email..."
                className="rounded"
              />
              <Button className="bg-blue-500 hover:bg-blue-600">
                Đăng Ký Nhận Tin
              </Button>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="http://hcmute.edu.vn" target="_blank" className="text-gray-700 hover:text-blue-600">
                ĐH Sư Phạm Kỹ Thuật TP.HCM
              </Link>
              <Link href="https://www.facebook.com/SPKT.tuyensinh" target="_blank" className="text-blue-600 hover:text-blue-800">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link href="https://youtu.be/sQH0-tBvyY4" target="_blank" className="text-red-600 hover:text-red-800">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-500 text-white py-3 text-center text-xs">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2017 SOFTWARE TECHNOLOGY CENTER - HCMUTE. All right reserved.</p>
          <p className="mt-2 md:mt-0">HOTLINE TƯ VẤN TUYỂN SINH: (028) 3722 5724</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
