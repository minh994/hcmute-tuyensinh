# HCMUTE Tuyển Sinh

Website tuyển sinh chính thức của Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE).

## 🚀 Giới thiệu

Website tuyển sinh HCMUTE được xây dựng với mục đích cung cấp thông tin tuyển sinh chính xác và cập nhật cho thí sinh và phụ huynh. Website được phát triển sử dụng các công nghệ hiện đại để đảm bảo trải nghiệm người dùng tốt nhất.

## 🛠️ Công nghệ sử dụng

- [Next.js 14](https://nextjs.org/) - Framework React hiện đại
- [TypeScript](https://www.typescriptlang.org/) - Ngôn ngữ lập trình type-safe
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components

## 📦 Cài đặt

1. Clone repository:
```bash
git clone https://github.com/your-username/hcmute-tuyensinh.git
cd hcmute-tuyensinh
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

3. Tạo file môi trường:
```bash
cp .env.example .env.local
```

4. Cập nhật các biến môi trường trong file `.env.local`

## 🚀 Chạy dự án

### Môi trường phát triển

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build cho production

```bash
npm run build
# hoặc
yarn build
# hoặc
pnpm build
```

### Chạy bản production

```bash
npm run start
# hoặc
yarn start
# hoặc
pnpm start
```

## 📁 Cấu trúc thư mục

```
src/
├── app/                    # Routes và pages
│   ├── page.tsx           # Trang chủ
│   ├── thong-tin-tuyen-sinh/  # Trang thông tin tuyển sinh
│   ├── cac-chuong-trinh-dao-tao/  # Trang chương trình đào tạo
│   └── moi-truong-hoc-tap/  # Trang môi trường học tập
├── components/            # UI components
│   └── ui/               # Shadcn UI components
├── lib/                  # Utilities và helpers
└── styles/              # Global styles
```

## 🎨 Tùy chỉnh

### Theme

Dự án sử dụng Tailwind CSS cho styling. Bạn có thể tùy chỉnh theme trong file `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Thêm màu sắc của HCMUTE
      },
      // Các tùy chỉnh khác
    }
  }
}
```

### Components

Các components UI được xây dựng dựa trên Shadcn UI. Bạn có thể tùy chỉnh chúng trong thư mục `src/components/ui/`.

## 📝 Tính năng chính

- [x] Trang chủ với thông tin tổng quan
- [x] Trang thông tin tuyển sinh
- [x] Trang chương trình đào tạo
- [x] Trang môi trường học tập
- [ ] Hệ thống đăng ký xét tuyển
- [ ] Tra cứu kết quả
- [ ] Tư vấn tuyển sinh

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm chi tiết.

## 📄 Giấy phép

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 📞 Liên hệ

- Website: [https://hcmute.edu.vn](https://hcmute.edu.vn)
- Email: tuyensinh@hcmute.edu.vn
- Địa chỉ: 1 Võ Văn Ngân, Phường Linh Chiểu, Thành phố Thủ Đức, TP.HCM
