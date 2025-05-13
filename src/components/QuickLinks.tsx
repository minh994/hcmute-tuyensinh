import React from 'react';
import Link from 'next/link';

const QuickLinks = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="space-y-1">
          <Link href="http://xettuyenqt.hcmute.edu.vn" target="_blank" className="flex items-center text-sm md:text-base hover:text-blue-700">
            <span className="text-red-500 mr-2">👉</span>
            <span className="text-pink-600 font-medium">XÉT TUYỂN CHƯƠNG TRÌNH LIÊN KẾT ĐÀO TẠO QUỐC TẾ</span>
          </Link>

          <Link href="https://kanghidro.github.io/simple-redirect-link?id=tuyen-sinh-ute-ds-tu-van-vien" target="_blank" className="flex items-center text-sm md:text-base hover:text-blue-700">
            <span className="text-green-500 mr-2">👉</span>
            <span className="text-green-600 font-medium">DANH SÁCH TƯ VẤN VIÊN CHUYÊN NGÀNH PHỤC VỤ TUYỂN SINH</span>
          </Link>

          <Link href="https://kanghidro.github.io/simple-redirect-link?id=tuyen-sinh-ute-vr-360" target="_blank" className="flex items-center text-sm md:text-base hover:text-blue-700">
            <span className="text-purple-500 mr-2">👉</span>
            <span className="text-purple-600 font-medium">THAM QUAN TRỰC TUYẾN KHUÔN VIÊN TRƯỜNG ĐH SƯ PHẠM KỸ THUẬT TP.HCM</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
