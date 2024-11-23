import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <div className="container mx-auto pt-16 pb-12">
      <div className="flex justify-between items-center pb-10">
        <div className="min-w-[176px] flex justify-start items-start flex-col">
          <h1 className="font-semibold text-sm text-gray-700">Product</h1>
          <p className="font-semibold text-base text-gray-700">Overview</p>
          <p className="font-semibold text-base text-gray-700">Features</p>
          <p className="font-semibold text-base text-gray-700">Solutions</p>
          <p className="font-semibold text-base text-gray-700">Tutorials</p>
          <p className="font-semibold text-base text-gray-700">Pricing</p>
          <p className="font-semibold text-base text-gray-700">Releases</p>
        </div>
        <div className="min-w-[176px] flex justify-start items-start flex-col">
          <h1 className="font-semibold text-sm text-gray-700">Company</h1>
          <p className="font-semibold text-base text-gray-700">About us</p>
          <p className="font-semibold text-base text-gray-700">Careers</p>
          <p className="font-semibold text-base text-gray-700">Press</p>
          <p className="font-semibold text-base text-gray-700">News</p>
          <p className="font-semibold text-base text-gray-700">Media Kit</p>
          <p className="font-semibold text-base text-gray-700">Contact</p>
        </div>
        <div className="min-w-[176px] flex justify-start items-start flex-col">
          <h1 className="font-semibold text-sm text-gray-700">Resources</h1>
          <p className="font-semibold text-base text-gray-700">Blog</p>
          <p className="font-semibold text-base text-gray-700">Newsletter</p>
          <p className="font-semibold text-base text-gray-700">Events</p>
          <p className="font-semibold text-base text-gray-700">Help centre</p>
          <p className="font-semibold text-base text-gray-700">Tutorials</p>
          <p className="font-semibold text-base text-gray-700">Support</p>
        </div>
        <div className="min-w-[176px] flex justify-start items-start flex-col">
          <h1 className="font-semibold text-sm text-gray-700">Use cases</h1>
          <p className="font-semibold text-base text-gray-700">Startups</p>
          <p className="font-semibold text-base text-gray-700">Enterprise</p>
          <p className="font-semibold text-base text-gray-700">Government</p>
          <p className="font-semibold text-base text-gray-700">SaaS centre</p>
          <p className="font-semibold text-base text-gray-700">Marketplaces</p>
          <p className="font-semibold text-base text-gray-700">Ecommerce</p>
        </div>
        <div className="min-w-[176px] flex justify-start items-start flex-col">
          <h1 className="font-semibold text-sm text-gray-700">Social</h1>
          <p className="font-semibold text-base text-gray-700">Twitter</p>
          <p className="font-semibold text-base text-gray-700">LinkedIn</p>
          <p className="font-semibold text-base text-gray-700">Facebook</p>
          <p className="font-semibold text-base text-gray-700">Github</p>
          <p className="font-semibold text-base text-gray-700">AngelList</p>
          <p className="font-semibold text-base text-gray-700">Dribble</p>
        </div>
        <div className="min-w-[176px] flex justify-start items-start flex-col">
          <h1 className="font-semibold text-sm text-gray-700">Legal</h1>
          <p className="font-semibold text-base text-gray-700">Terms</p>
          <p className="font-semibold text-base text-gray-700">Privacy</p>
          <p className="font-semibold text-base text-gray-700">Cookies</p>
          <p className="font-semibold text-base text-gray-700">Licenses</p>
          <p className="font-semibold text-base text-gray-700">Settings</p>
          <p className="font-semibold text-base text-gray-700">Contact</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center py-6">
        <img src={logo} alt="" />
        <h1 className="text-nowrap text-base font-normal">
          © 2077 Untitled UI. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
