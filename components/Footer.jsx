import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCar,
  FaRenren,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full mt-12 bg-gray-900 text-gray-300 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 max-[600px]:pl-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Travel Packages</li>
            <li className="py-1">Hotel Bookings</li>
            <li className="py-1">Destination Rides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <div className="flex gap-2 pb-2 items-center">
            <FaRenren className="text-3xl"></FaRenren>
            <h1 className="text-2xl font-semibold mr-4 sm:text-3xl">Trisog</h1>
          </div>
          <p className="py-2">Address: Level-23, Lab-7 complex, Dhaka</p>
          <p className="py-1">Phone : +1203341122</p>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 sm:w-[300px] pt-4 text-2xl">
          <Link href="https://www.facebook.com/imran.ahmedkhan.12382">
            <FaFacebook />
          </Link>
          <Link href="https://www.facebook.com/imran.ahmedkhan.12382">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/imran.ahmedkhan.12382">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
