import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Môi trường học tập - HCMUTE",
  description: "Khám phá môi trường học tập hiện đại tại Đại học Sư phạm Kỹ thuật TP.HCM",
}

const facilities = [
  {
    id: 1,
    title: "Thư viện hiện đại",
    description: "Thư viện với hơn 100,000 đầu sách, phòng đọc sách rộng rãi và hệ thống máy tính hiện đại.",
    image: "/images/facilities/library.jpg",
    features: ["Phòng đọc sách 24/7", "Kết nối wifi tốc độ cao", "Phòng học nhóm", "Máy tính hiện đại"]
  },
  {
    id: 2,
    title: "Phòng thí nghiệm",
    description: "Hệ thống phòng thí nghiệm được trang bị đầy đủ thiết bị hiện đại phục vụ nghiên cứu và thực hành.",
    image: "/images/facilities/lab.jpg",
    features: ["Thiết bị hiện đại", "Phòng thí nghiệm chuyên ngành", "Hỗ trợ nghiên cứu khoa học"]
  },
  {
    id: 3,
    title: "Khu thể thao",
    description: "Khu liên hợp thể thao với đầy đủ sân bóng đá, bóng rổ, bóng chuyền và phòng tập gym.",
    image: "/images/facilities/sports.jpg",
    features: ["Sân bóng đá cỏ nhân tạo", "Sân bóng rổ", "Phòng tập gym", "Bể bơi"]
  }
]

const activities = [
  {
    id: 1,
    title: "Câu lạc bộ học thuật",
    description: "Các câu lạc bộ học thuật giúp sinh viên phát triển kỹ năng chuyên môn và mở rộng kiến thức.",
    image: "/images/activities/academic.jpg",
    clubs: ["CLB Công nghệ thông tin", "CLB Điện tử", "CLB Cơ khí", "CLB Ngoại ngữ"]
  },
  {
    id: 2,
    title: "Hoạt động văn nghệ",
    description: "Các hoạt động văn nghệ đa dạng giúp sinh viên phát triển tài năng và giao lưu.",
    image: "/images/activities/arts.jpg",
    clubs: ["CLB Âm nhạc", "CLB Múa", "CLB Kịch", "CLB Nhiếp ảnh"]
  },
  {
    id: 3,
    title: "Tình nguyện",
    description: "Các hoạt động tình nguyện giúp sinh viên phát triển kỹ năng mềm và đóng góp cho cộng đồng.",
    image: "/images/activities/volunteer.jpg",
    clubs: ["CLB Tình nguyện", "CLB Môi trường", "CLB Vì cộng đồng"]
  }
]

const campusLife = [
  {
    id: 1,
    title: "Ký túc xá",
    description: "Ký túc xá hiện đại với đầy đủ tiện nghi, an ninh 24/7 và môi trường học tập tốt.",
    image: "/images/campus/dormitory.jpg",
    features: ["Phòng máy lạnh", "Wifi tốc độ cao", "Khu vực học tập", "An ninh 24/7"]
  },
  {
    id: 2,
    title: "Nhà ăn",
    description: "Hệ thống nhà ăn đa dạng với nhiều lựa chọn món ăn đảm bảo dinh dưỡng.",
    image: "/images/campus/canteen.jpg",
    features: ["Đa dạng món ăn", "Giá cả hợp lý", "Vệ sinh an toàn", "Không gian rộng rãi"]
  },
  {
    id: 3,
    title: "Khu vực giải trí",
    description: "Các khu vực giải trí giúp sinh viên thư giãn sau giờ học.",
    image: "/images/campus/recreation.jpg",
    features: ["Quán cà phê", "Khu vực picnic", "Sân chơi", "Khu vực đọc sách"]
  }
]

export default function MoiTruongHocTapPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Môi trường học tập</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Khám phá môi trường học tập hiện đại, năng động tại HCMUTE - nơi ươm mầm tài năng và phát triển toàn diện
        </p>
      </div>

      <Tabs defaultValue="co-so-vat-chat" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="co-so-vat-chat">Cơ sở vật chất</TabsTrigger>
          <TabsTrigger value="hoat-dong">Hoạt động sinh viên</TabsTrigger>
          <TabsTrigger value="doi-song">Đời sống học tập</TabsTrigger>
        </TabsList>

        <TabsContent value="co-so-vat-chat">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <Card key={facility.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{facility.title}</CardTitle>
                  <CardDescription>{facility.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {facility.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hoat-dong">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {activity.clubs.map((club, index) => (
                      <div key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        <span className="text-sm">{club}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="doi-song">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusLife.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-purple-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 