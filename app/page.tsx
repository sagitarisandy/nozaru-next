import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NozaruLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-yellow-400 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <span className="text-gray-800">君もてっぺんに楽しもう！</span>
          <div className="flex gap-4">
            <span className="bg-yellow-500 px-3 py-1 rounded text-gray-800">オフィシャルホテル</span>
            <span className="bg-yellow-500 px-3 py-1 rounded text-gray-800">オフィシャルキャンプ場</span>
          </div>
        </div>
      </header>

      {/* Decorative Border */}
      <div className="h-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 relative">
        <div className="absolute inset-0 bg-repeat-x" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L15 8L10 16L5 8L10 0Z' fill='%23FCD34D'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 16px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* A1 - Three women with helmets */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A1-qokKHeP09QzFAL1tj4z6Y1HkNQGid0.png"
                alt="Three women ready for adventure"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg px-3 py-1">
                <span className="text-sm text-gray-700">みなさん<br />こんに</span>
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex flex-col items-center justify-center bg-white rounded-full p-8 shadow-lg relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A2-CTa06jaehUGysg1PeVSkFNyys2MS7l.png"
                alt="NOZARU Logo"
                width={200}
                height={120}
                className="mb-4"
              />
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800 mb-2">日本最大をさらに拡大</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-orange-600">8</span>
                    <p className="text-sm text-gray-600">COURSE</p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-orange-600">72</span>
                    <p className="text-sm text-gray-600">ACTIVITY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* A3 - Person zip-lining */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A3-MQbwe38SrI71oN6Sa0BuZetsydALGn.png"
                alt="Person zip-lining through forest"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* A4 - Two people on platform */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A4-mAO0F1uFR3Dg4Umom5tt2Uw8J6dZFd.png"
                alt="Two people on tree platform"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg px-3 py-1">
                <span className="text-sm text-gray-700">みなさん<br />こんに</span>
              </div>
            </div>

            {/* A5 - Group preparing */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A5-HpyWDgia7H9VbG0RZUN4IiQnXsJvHg.png"
                alt="Group preparing for activities"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-lg px-3 py-1">
                <span className="text-sm text-gray-700">みなさん<br />こんに</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Arrows Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* B1 Arrow */}
            <div className="relative flex items-center">
              <div className="bg-yellow-600 text-white px-8 py-3 rounded-lg shadow-lg transform -skew-x-12">
                <span className="inline-block transform skew-x-12 font-bold">⚠️ オフィシャルホテル</span>
              </div>
              <div className="ml-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B1-bpDli8h5BVEpLJgwxSkOLAyxMDUBwF.svg"
                  alt="Arrow"
                  width={60}
                  height={40}
                />
              </div>
            </div>

            {/* B2 Arrow */}
            <div className="relative flex items-center">
              <div className="bg-yellow-500 text-white px-8 py-3 rounded-lg shadow-lg transform -skew-x-12">
                <span className="inline-block transform skew-x-12 font-bold">⚠️ オフィシャルキャンプ場</span>
              </div>
              <div className="ml-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2-zYHmajgMWHeKAQXbnm2kCcGDZmmZt8.svg"
                  alt="Arrow"
                  width={60}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200">
        <div className="container mx-auto px-4">
          <div className="relative bg-yellow-400 rounded-3xl p-8 shadow-xl">
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">ノザルに体験をとろう！</h2>
              <Button className="bg-white text-gray-800 hover:bg-gray-100 rounded-full px-8 py-3 font-bold shadow-lg">
                ⭕ 本のチケット 🔗
              </Button>
              <p className="text-sm text-gray-700 mt-2">予約と入園料のツアーを確認してください</p>
            </div>

            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B3-DO4gAJLEHW8YhMZzuDUw3vGtgM5LrS.svg"
                alt="Mascot character"
                width={100}
                height={100}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-cream-100">
        <div className="container mx-auto px-4">
          <Card className="bg-yellow-50 border-4 border-yellow-400 rounded-3xl p-8 relative">
            
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C1-cqpTpZUWTTi6DrCq7lD7jFAcyp06Ct.svg"
                    alt="Banana decoration"
                    width={40}
                    height={30}
                  />
                  <h2 className="text-2xl font-bold text-gray-800">日本最大をさらに拡大</h2>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C1-cqpTpZUWTTi6DrCq7lD7jFAcyp06Ct.svg"
                    alt="Banana decoration"
                    width={40}
                    height={30}
                  />
                </div>
                <div className="border-t-2 border-dotted border-gray-400 w-full mb-6"></div>
                <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  森にこもろう。空をあそぼう。樹のうえを飛びまわっているとき、いつものセカイがちがって見える。森はウソをつかないから。このハラハラも、このドキドキも、どんなリアルより、本当だ。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* C2 - Forest images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-2">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Forest canopy"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Tree climbing"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-2 bg-yellow-400 rounded-full px-3 py-1 text-center">
                    <span className="text-sm font-bold">森のうえ</span>
                  </div>
                </div>

                {/* C3 - Activity description */}
                <div className="relative bg-yellow-200 rounded-lg p-4">
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 mb-2">樹のうえをとびまわって<br />いるとき</h3>
                    <p className="text-sm text-gray-700">
                      森の中の森のうえ、空の中間をその手足で<br />
                      あし、日本最大のフィールドコースで
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <div className="bg-yellow-400 rounded-full px-4 py-2">
                      <span className="text-sm font-bold">森のうえのあそび</span>
                    </div>
                  </div>
                </div>

                {/* C4 - Safety information */}
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="Safety equipment"
                    width={200}
                    height={150}
                    className="rounded-lg w-full"
                  />
                  <div className="mt-2 bg-yellow-400 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg font-bold">🔒</span>
                      <div>
                        <p className="text-sm font-bold">保険適用</p>
                        <p className="text-xs">20歳以上<br />等で設備</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A2-CTa06jaehUGysg1PeVSkFNyys2MS7l.png"
            alt="NOZARU Logo"
            width={150}
            height={90}
            className="mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-sm text-gray-400">
            © 2024 NOZARU - 那須の森の空中アスレチック. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
