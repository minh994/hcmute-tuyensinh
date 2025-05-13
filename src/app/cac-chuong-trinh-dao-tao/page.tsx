import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Các chương trình đào tạo - HCMUTE",
  description: "Thông tin về các chương trình đào tạo tại Đại học Sư phạm Kỹ thuật TP.HCM",
}

const programs = {
  "dai-hoc": [
    {
      id: 1,
      name: "Công nghệ thông tin",
      code: "7480201",
      duration: "4 năm",
      degree: "Kỹ sư",
      description: "Đào tạo chuyên sâu về lập trình, hệ thống thông tin, trí tuệ nhân tạo và bảo mật thông tin.",
      highlights: ["Chương trình đạt chuẩn AUN-QA", "Cơ hội thực tập tại doanh nghiệp", "Đội ngũ giảng viên giàu kinh nghiệm"]
    },
    {
      id: 2,
      name: "Điện tử viễn thông",
      code: "7520207",
      duration: "4 năm",
      degree: "Kỹ sư",
      description: "Đào tạo chuyên sâu về điện tử, viễn thông, IoT và các công nghệ truyền thông hiện đại.",
      highlights: ["Phòng thí nghiệm hiện đại", "Hợp tác với các doanh nghiệp viễn thông", "Cơ hội việc làm rộng mở"]
    },
    {
      id: 3,
      name: "Cơ khí",
      code: "7520103",
      duration: "4 năm",
      degree: "Kỹ sư",
      description: "Đào tạo chuyên sâu về thiết kế, chế tạo và vận hành các hệ thống cơ khí.",
      highlights: ["Xưởng thực hành hiện đại", "Chương trình thực tế tại doanh nghiệp", "Cơ hội nghiên cứu khoa học"]
    }
  ],
  "cao-dang": [
    {
      id: 1,
      name: "Công nghệ thông tin",
      code: "6480201",
      duration: "3 năm",
      degree: "Cao đẳng",
      description: "Đào tạo chuyên sâu về lập trình và ứng dụng công nghệ thông tin.",
      highlights: ["Chương trình thực tế", "Cơ hội liên thông đại học", "Đội ngũ giảng viên giàu kinh nghiệm"]
    }
  ],
  "lien-thong": [
    {
      id: 1,
      name: "Công nghệ thông tin",
      code: "7480201",
      duration: "2 năm",
      degree: "Kỹ sư",
      description: "Chương trình liên thông từ cao đẳng lên đại học ngành Công nghệ thông tin.",
      highlights: ["Rút ngắn thời gian đào tạo", "Chương trình chuyên sâu", "Cơ hội việc làm cao"]
    }
  ]
}

export default function ChuongTrinhDaoTaoPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Các chương trình đào tạo</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Khám phá các chương trình đào tạo đa dạng tại HCMUTE, được thiết kế để trang bị cho sinh viên 
          kiến thức và kỹ năng cần thiết cho sự nghiệp tương lai.
        </p>
      </div>

      <Tabs defaultValue="dai-hoc" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="dai-hoc">Đại học</TabsTrigger>
          <TabsTrigger value="cao-dang">Cao đẳng</TabsTrigger>
          <TabsTrigger value="lien-thong">Liên thông</TabsTrigger>
        </TabsList>

        {Object.entries(programs).map(([key, programList]) => (
          <TabsContent key={key} value={key}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programList.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{program.name}</CardTitle>
                        <CardDescription>Mã ngành: {program.code}</CardDescription>
                      </div>
                      <Badge variant="secondary">{program.degree}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Thời gian: {program.duration}
                      </div>
                      <p className="text-sm">{program.description}</p>
                      <div className="space-y-2">
                        {program.highlights.map((highlight, index) => (
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
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
} 