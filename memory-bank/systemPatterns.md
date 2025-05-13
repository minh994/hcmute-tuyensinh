# Mẫu Hệ thống

## Kiến trúc
- Next.js App Router
- TypeScript cho type safety
- Tailwind CSS cho styling
- Shadcn UI cho components

## Cấu trúc thư mục
```
src/
├── app/           # Routes và pages
├── components/    # UI components
└── lib/          # Utilities và helpers
```

## Design Patterns
- Component-based architecture
- Server-side rendering (SSR)
- Client-side rendering (CSR) khi cần thiết
- Responsive design
- Mobile-first approach

## Quy ước đặt tên
- Components: PascalCase
- Files: kebab-case
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

## State Management
- React Context API
- Local state với useState
- Server state với React Query (nếu cần)

## API Integration
- RESTful API
- Server-side API routes
- Client-side data fetching 