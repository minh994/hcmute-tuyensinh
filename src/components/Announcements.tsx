import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Announcement {
  id: string;
  date: string;
  title: string;
  isNew: boolean;
  link: string;
}

const Announcements = () => {
  const announcements: Announcement[] = [
    {
      id: '1',
      date: '28-04-2025',
      title: 'XÉT TUYỂN THÍ SINH TỰ DO (TỐT NGHIỆP THPT TRƯỚC NĂM 2025)',
      isNew: true,
      link: '/xet-tuyen-thi-sinh-tu-do'
    },
    {
      id: '2',
      date: '13-02-2025',
      title: 'THÔNG TIN TUYỂN SINH ĐẠI HỌC 2025',
      isNew: true,
      link: '/thong-tin-tuyen-sinh-2025'
    },
    {
      id: '3',
      date: '04-02-2025',
      title: 'KẾ HOẠCH TUYỂN TUYỂN GIỚI THIỆU VỀ TRƯỜNG 2025',
      isNew: true,
      link: '/ke-hoach-gioi-thieu-2025'
    },
    {
      id: '4',
      date: '01-02-2025',
      title: 'BAN TƯ VẤN TUYỂN SINH NĂM 2025',
      isNew: true,
      link: '/ban-tu-van-2025'
    },
    {
      id: '5',
      date: '01-02-2025',
      title: 'CÁC NGÀNH TUYỂN SINH NĂM 2025',
      isNew: true,
      link: '/cac-nganh-2025'
    }
  ];

  const mainAnnouncement = {
    title: 'ĐĂNG KÝ DỰ THI MÔN NĂNG KHIẾU 2025',
    date: '11:33 | 30-04-2025',
    views: '767 Lượt xem',
    content: 'Đăng ký dự thi các môn năng khiếu (Vẽ Trang trí màu nước và Vẽ Đầu tượng) để xét vào các ngành Kiến trúc; Kiến trúc nội thất; Thiết kế đồ họa; Thiết kế thời trang.',
    link: '/dang-ky-nang-khieu'
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Main announcement */}
        <div className="w-full md:w-8/12">
          <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
            THÔNG BÁO MỚI
            <span className="ml-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">NEW</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <Link href="/banner" className="block border hover:border-blue-300 transition-colors">
                <Image
                  src="/assets/banner1.jpeg"
                  alt="Banner"
                  width={300}
                  height={120}
                  className="w-full object-cover"
                />
              </Link>

              <div className="bg-[#e5ecf4] p-3">
                <div className="flex justify-center items-center">
                  <div className="mb-2 text-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-bold text-blue-800"> ĐẠI HỌC CHÍNH QUY </span>
                    <span className="text-yellow-500">⭐</span>
                  </div>
                </div>

                <div className="text-center text-sm font-semibold text-blue-800">
                  THÍ SINH ĐĂNG KÝ DỰ THI MÔN NĂNG KHIẾU (VẼ TRANG TRÍ MÀU NƯỚC, VẼ ĐẦU TƯỢNG)
                </div>

                <div className="mt-3 flex justify-center gap-2">
                  <Link href="/dang-ky" className="bg-green-600 text-white text-xs px-4 py-1 rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Đăng ký
                  </Link>
                  <Link href="/huong-dan" className="bg-blue-600 text-white text-xs px-4 py-1 rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hướng dẫn
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-800 font-bold">
                    <Link href={mainAnnouncement.link}>{mainAnnouncement.title}</Link>
                  </CardTitle>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{mainAnnouncement.date}</span>
                    <span>{mainAnnouncement.views}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{mainAnnouncement.content}</p>
                  <div className="mt-4">
                    <Link href={mainAnnouncement.link} className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm flex items-center w-fit">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Xem chi tiết
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="announcement-item">
                    <div className="text-gray-500 text-sm min-w-[110px]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {announcement.date}
                    </div>
                    <Link href={announcement.link} className="text-gray-700 hover:text-blue-600 flex-1">
                      {announcement.title}
                      {announcement.isNew && (
                        <span className="ml-2 tag-new">NEW</span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Sidebar */}
        <div className="w-full md:w-4/12">
          <div className="bg-blue-500 text-white p-3">
            <h2 className="font-medium">Thông Tin Tuyển Sinh</h2>
          </div>
          <div className="border border-t-0 border-gray-300">
            <Link href="/thong-tin-tuyen-sinh" className="sidebar-link">
              Thông Tin Tuyển Sinh
            </Link>
            <Link href="/cac-chuong-trinh-dao-tao" className="sidebar-link">
              Các Chương Trình Đào Tạo
            </Link>
            <Link href="http://uteqa.hcmute.edu.vn" target="_blank" className="sidebar-link">
              Các Ngành Kiểm định AUN
            </Link>
            <Link href="/moi-truong-hoc-tap" className="sidebar-link">
              Môi Trường Học Tập
            </Link>
            <Link href="http://xettuyen.hcmute.edu.vn" target="_blank" className="sidebar-link">
              Đăng Ký Xét Tuyển, Tuyển Thẳng
            </Link>
            <Link href="http://tracuuxettuyen.hcmute.edu.vn" target="_blank" className="sidebar-link">
              Kết Quả Tuyển Sinh
            </Link>
            <Link href="/thu-tuc-nhap-hoc" className="sidebar-link">
              Thủ Tục Nhập Học
            </Link>
            <Link href="/tu-van-huong-nghiep-dh-chinh-quy" className="sidebar-link">
              Tư Vấn Hướng Nghiệp
            </Link>
            <Link href="/hoi-dap" className="sidebar-link">
              Hỏi - Đáp
            </Link>
            <Link href="/lien-he" className="sidebar-link">
              Liên Hệ
            </Link>
          </div>

          <div className="mt-6">
            <div className="relative">
              <Image
                src="/assets/youtube-thumb.jpeg"
                alt="HCMUTE Video"
                width={400}
                height={225}
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 rounded-full p-4 opacity-80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
