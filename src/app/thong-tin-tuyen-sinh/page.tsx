import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Thông tin tuyển sinh - HCMUTE",
  description: "Thông tin tuyển sinh Đại học Sư phạm Kỹ thuật TP.HCM",
}

export default function ThongTinTuyenSinhPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Thông tin tuyển sinh</h1>
      
      <Tabs defaultValue="tong-quan" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tong-quan">Tổng quan</TabsTrigger>
          <TabsTrigger value="phuong-thuc">Phương thức xét tuyển</TabsTrigger>
          <TabsTrigger value="nganh-dao-tao">Ngành đào tạo</TabsTrigger>
          <TabsTrigger value="hoi-dap">Hỏi đáp</TabsTrigger>
        </TabsList>

        <TabsContent value="tong-quan">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Tổng quan tuyển sinh</h2>
            <div className="space-y-4">
              <p>
                Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE) là một trong những trường đại học 
                hàng đầu về đào tạo kỹ thuật và công nghệ tại Việt Nam.
              </p>
              <p>
                Năm 2024, trường tuyển sinh với nhiều phương thức xét tuyển đa dạng, 
                tạo cơ hội cho thí sinh có thể lựa chọn phương thức phù hợp với năng lực của mình.
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="phuong-thuc">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Các phương thức xét tuyển</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-medium mb-2">1. Xét tuyển học bạ</h3>
                <p>Xét tuyển dựa trên kết quả học tập THPT</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-medium mb-2">2. Xét tuyển theo kết quả thi THPT</h3>
                <p>Xét tuyển dựa trên kết quả kỳ thi tốt nghiệp THPT</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-medium mb-2">3. Xét tuyển thẳng</h3>
                <p>Dành cho học sinh giỏi, học sinh đạt giải trong các kỳ thi quốc gia</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="nganh-dao-tao">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Các ngành đào tạo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium mb-2">Công nghệ thông tin</h3>
                <p className="text-sm text-muted-foreground">Mã ngành: 7480201</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium mb-2">Điện tử viễn thông</h3>
                <p className="text-sm text-muted-foreground">Mã ngành: 7520207</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium mb-2">Cơ khí</h3>
                <p className="text-sm text-muted-foreground">Mã ngành: 7520103</p>
              </Card>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="hoi-dap">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Hỏi đáp tuyển sinh</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-lg font-medium mb-2">Câu hỏi thường gặp</h3>
                <p className="text-muted-foreground">
                  Tổng hợp các câu hỏi thường gặp về tuyển sinh và đào tạo tại HCMUTE
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-medium mb-2">Liên hệ tư vấn</h3>
                <p className="text-muted-foreground">
                  Hotline: (028) 3896 1234<br />
                  Email: tuyensinh@hcmute.edu.vn
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 