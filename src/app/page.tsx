
import Category from "@/components/Category/category"
import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import Map from "@/components/Home/map"
import Notification from "@/components/Home/notification"
import Panel from "@/components/Home/panel"
import Product from "@/components/Home/product"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Đồ Chơi Đồ Gia Dụng 39K Gò Vấp Giá Rẻ',
  description: 'Đồ Chơi Đồ Gia Dụng 39K Gò Vấp Giá Rẻ',
}

export default function Home() {
  return (
    <main>
      <Notification />
      <Header />
      <Panel />
      <Category />
      <Product />
      <Map />
      <Footer />
    </main>
  )
}
