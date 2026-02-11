import './footer.css'
import logo from "../../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="footer w-full py-7 px-12  font-[sans-serif]">
            <div className="grid max-md:grid-cols-1 max-xl:grid-cols-3 xl:grid-cols-5 xl:gap-20 max-xl:gap-8">
                <div className="max-xl:col-span-full xl:col-span-2">
                    <div className="max-xl:max-w-2xl">
                        <div className="items-center flex gap-2 mb-6">
                            <img className='h-16' src={logo} alt="" />
                            <div className="text-2xl text-gray-300 drop-shadow-xl flex items-center gap-1">
                                <div className="font-bold text-[#5c5c14] drop-shadow-xl">Hetalbon</div>Eco Resort</div>
                        </div>
                        <p className=' text-white'>Sundarban National Park<br />
                            Bali Hatkhola,9,Bally <br />
                            Gosaba - 743370<br />
                        </p>

                    </div>
                    <ul className="flex items-center mt-12 space-x-4">
                        <li className="bg-green-800  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://www.facebook.com/HetalbonEcoResort/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-gray-300" viewBox="0 0 24 24">
                                    <path
                                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                        data-original="#000000" />
                                </svg>
                            </a>
                        </li>

                        <li className="bg-green-800  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://www.youtube.com/@HetalbonEcoResortSundarban">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-green-700"
                                    viewBox="0 0 682.667 682.667">
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z" data-original="#fff" />
                                        </clipPath>
                                    </defs>
                                    <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path
                                            d="M492 255.75c0-39.49-3.501-75.479-7.497-103.698-5.191-36.655-34.801-64.96-71.646-68.567C373.764 79.658 318.529 75.75 256 75.75c-62.529 0-117.764 3.908-156.857 7.735-36.845 3.607-66.455 31.912-71.646 68.567C23.501 180.271 20 216.26 20 255.75c0 39.49 3.501 75.479 7.497 103.698 5.191 36.655 34.801 64.96 71.646 68.567 39.093 3.827 94.328 7.735 156.857 7.735 62.529 0 117.764-3.908 156.857-7.735 36.845-3.607 66.455-31.912 71.646-68.567C488.499 331.229 492 295.24 492 255.75Z"
                                            data-original="#000000" />
                                        <path
                                            d="m245.5 185.291 75.914 45.165c19.448 11.57 19.448 39.518 0 51.088L245.5 326.709c-20.024 11.913-45.5-2.39-45.5-25.544v-90.33c0-23.154 25.476-37.457 45.5-25.544Z"
                                            data-original="#000000" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li className="bg-green-800  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://www.instagram.com/hetalbonecoresortsundarban/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="fill-gray-300" viewBox="0 0 24 24">
                                    <path
                                        d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-7">
                    <h4 className="text-lg font-semibold mb-3 text-green-700">

                        Top Sections</h4>
                    <ul className="space-y-1">
                        <li><a href="/services" className="text-gray-300 hover:text-gray-100 text-sm">
                            Our Services</a></li>
                        <li><a href="/gallery" className="text-gray-300 hover:text-gray-100 text-sm">
                            Gallery</a></li>
                        <li><a href="/bookings" className="text-gray-300 hover:text-gray-100 text-sm">
                            Book Room</a></li>
                        <li><a href="javascript:void(0)" className="text-gray-300 hover:text-gray-100 text-sm"></a></li>
                    </ul>
                </div>
                <div className="mt-7">
                    <h4 className="text-lg font-semibold mb-3 text-green-700">Achievements</h4>
                    <ul className="space-y-1">
                        <li><a href="javascript:void(0)" className="text-gray-300 hover:text-gray-100 text-sm">Blogs</a>
                        </li>
                        <li><a href="javascript:void(0)" className="text-gray-300 hover:text-gray-100 text-sm">Special Appearance</a>
                        </li>
                    </ul>
                </div>
                <div className="mt-7">
                    <h4 className="text-lg font-semibold mb-3 text-green-700">Other Services</h4>
                    <ul className="space-y-1">
                        <li><a href="https://machrangacruise.com/" className="text-gray-300 hover:text-gray-100 text-sm">Machranga Cruise : One of the Luxury Cruise in Sundarban</a>
                        </li>

                    </ul>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
