import Link from "next/link";
import { settings } from "../../../constant";

export default function Header() {
  return (
    <div className="shadow-lg">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center sm:px-4 sm:items-center sm:gap-4 sm:py-2">
            <Link href='/'><img className="rounded-lg" src="/logo.png" alt="do choi gia dung 39k" /></Link>
            <div className="flex gap-8 sm:flex-col sm:gap-0">
                <div className="sm:flex sm:gap-2">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"/>
                        </svg>
                        <div className="sm:hidden">Hotline:</div>
                    </div>
                    
                    <a href={`tel:${settings.phone}`} className="text-red-600 text-[17px] font-[600]">{settings.phone}</a>
                </div>
                <div className="sm:flex sm:gap-2">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                        <div className="sm:hidden">Địa chỉ:</div>
                    </div>
                    <Link href={'https://maps.app.goo.gl/iTs7c1BCwTwtkZLq9'} target="_blank">
                    <div className="text-red-600 text-[17px] font-[600] sm:text-[12px]">363A Nguyễn Văn Khối, P.8, Gò Vấp</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
