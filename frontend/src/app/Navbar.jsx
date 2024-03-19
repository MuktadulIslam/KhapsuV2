"use client"
import Link from "next/link";
import { Black_Ops_One, Maitree } from "next/font/google";
import Image from "next/image";
import Category from "./Category";
import RangeInput from "./RangeInput";

const blackOpsOne = Black_Ops_One({
    weight: ["400"],
    style: ["normal"],
    preload: false,
});

const maitree = Maitree({
    subsets: ["latin"],
    weight: ["500"],
    style: ["normal"],
});

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const product_sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
const product_brands = ["Dora Larsen", "Bluebella", "Calvin Klein", "Intimissimi"];
const product_colors = [
    { name: "black", color: "#000000" },
    { name: "white", color: "#ffffff" },
    { name: "red", color: "#ff0000" },
    { name: "pink", color: "#ff3db1" },
    { name: "blue", color: "#3d4aff" },
    { name: "purple", color: "#c83dff" },
    { name: "gray", color: "#646464" },
]



export default function Navbar() {
    const showFilter = () => {
        const filterbar = document.getElementById("filterbar");
        if (filterbar.classList.contains('h-0')) {
            closeCategory()
            filterbar.classList.remove('h-0');
            filterbar.classList.add('h-80');
        } else {
            filterbar.classList.remove('h-80');
            filterbar.classList.add('h-0');
        }
    };
    const closeFilter = () => {
        const filterbar = document.getElementById("filterbar");
        filterbar.classList.remove('h-80');
        filterbar.classList.add('h-0');
    };
    const showCategory = () => {
        const category = document.getElementById("category");
        if (category.classList.contains('h-0')) {
            closeFilter()
            category.classList.add('h-[475px]', 'overflow-y-auto', 'overflow-x-hidden');
            category.classList.remove('h-0', 'overflow-hidden');
        } else {
            category.classList.add('h-0', 'overflow-hidden');
            category.classList.remove('h-[475px]', 'overflow-y-auto', 'overflow-x-hidden');
        }
    };
    const closeCategory = () => {
        const category = document.getElementById("category");
        category.classList.add('h-0', 'overflow-hidden');
        category.classList.remove('h-[475px]', 'overflow-y-auto', 'overflow-x-hidden');
    };

    const openCart = () => {

    }

    return (<>
        {/* First Navbar */}
        <div className="max-md:p-2 md:pl-6 md:pr-4 h-28 sm:h-32 md:h-16 lg:h-20 w-full flex justify-between items-center md:gap-10 2md:gap-20 max-md:flex-col mb-4">
            <div className="w-full md:w-52 lg:w-56 xl:w-80 h-10 sm:h-[52px] md:h-full flex-none flex items-center justify-between">
                <div className="md:hidden aspect-square h-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#FF375F]">
                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={`${blackOpsOne.className} w-40 sm:w-56 md:w-full h-5/6 flex justify-center items-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl`}>
                    <Link href="./" className="bg-gradient-to-r from-[#FF375F]  to-[#815cc6] inline-block text-transparent bg-clip-text">Khapsu</Link>
                </div>
                <div className="md:hidden w-20 h-full flex items-center justify-center gap-2">
                    <div className="bg-white bg-opacity-80 h-5/6 aspect-square flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#FF375F]">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </div>

                    <div className="bg-white bg-opacity-80 h-5/6 aspect-square flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-[#FF375F]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="h-9 sm:h-10 md:flex-1 max-md:w-full flex items-center justify-between gap-3">
                <div className="h-full  flex-1">
                    <div className="relative flex items-center w-full h-full rounded-md  border shadow-md sm:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-base text-gray-700 pr-2"
                            type="search"
                            id="search"
                            placeholder="Search..." />
                    </div>
                </div>
                <div className="h-full aspect-square">
                    <button className="h-full w-full flex items-center justify-center rounded-md bg-[#ff377d]" onClick={showFilter}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-2/3 h-2/3 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>

                    </button>
                </div>
            </div>

            <div className="max-md:hidden w-44 lg:w-80 h-full flex-none flex items-center justify-end">
                {/* SignUp/Signin */}
                <div className="lg:hidden w-12 aspect-square">
                    <button className="h-full w-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 xl:h-8 xl:w-8 text-[#ff377d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <div className="max-lg:hidden w-auto h-full flex items-center justify-between gap-2 pr-2 text-sm font-semibold">
                    <Link href="./" className="bg-transparent border-2 border-solid border-gray-600 h-[40%] rounded-md w-16 flex items-center justify-center">Sign Up</Link>
                    <Link href="./" className="bg-[#fa54b8b2] h-[40%] text-white rounded-md w-16 flex items-center justify-center">Sign In</Link>
                </div>

                {/* Size Grid */}
                <div className="w-12 aspect-square">
                    <button className="h-full w-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 xl:w-7 xl:h-7 text-[#ff377d]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                </div>

                {/* Wishlist */}
                <div className="w-12 aspect-square">
                    <button className="h-full w-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 xl:h-8 xl:w-8 text-[#ff377d]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Card */}
                <div className="w-12 aspect-square relative">
                    <button className="h-full w-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 xl:w-8 xl:h-8 text-[#ff377d]">
                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                        </svg>

                    </button>
                    <span className="absolute top-0 right-0 h-5 w-5 bg-[#ff028dfe] rounded-full translate-x-1 flex items-center justify-center text-sm text-white">9</span>
                </div>

            </div>
        </div>

        {/* Second Navbar */}
        <div className="max-md:hidden h-10 lg:h-12 w-full flex items-center 2md:justify-between shadow-md my-2">
            <div className="flex items-center w-auto h-full">
                {/* Category */}
                <div className="w-[410px] h-full bg-[#f4d0f48f] rounded-sm mr-6 lg:mr-8">
                    <button onClick={showCategory} className="w-full h-full flex items-center pl-10 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 xl:h-8 xl:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        <h2 className="text-lg">Browse Categories</h2>
                    </button>
                    <div id="category" className="w-full h-0 overflow-hidden transition-all ease-linear duration-300">
                        <Category />
                    </div>
                </div>

                <div className="w-auto h-full flex justify-between items-center gap-1 text-sm xl:text-base *:w-auto *:px-2 *:lg:px-4 *:h-full *:flex *:items-center *:justify-center *:rounded-sm">
                    <div className="hover:text-[#FF375F] hover:scale-110 ">{"Woman's Fashion"}</div>
                    <div className="hover:text-[#FF375F] hover:scale-110 ">{"Man's Fashion"}</div>
                    <div className="hover:text-[#FF375F] hover:scale-110 ">Interior</div>
                </div>
            </div>
            <div className="max-2md:hidden  bg-black w-0.5 h-4/5"></div>
            <div className="max-2md:hidden w-auto flex items-center justify-center h-full">
                <p className={`${maitree.className} text-xs xl:text-sm font-semibold text-[#FF375F]`}>Get Free Delivery on over 1000TK shopping</p>
            </div>
            <div className="max-2md:hidden w-0"></div>
        </div>


        {/* Filterbar */}
        <div id="filterbar" className="bg-gray-200 w-full h-0 overflow-hidden transition-all ease-linear duration-300">
            <div className="w-full max-w-[700px] h-full bg-red-100 m-auto px-4 md:py-2 max-md:pb-2">
                <div className="w-full h-20 mb-2">
                    <p className="mb-9 text-lg font-bold font-sans">Price</p>
                    <RangeInput />
                </div>
                <div className="h-12 w-full bg-red-200 flex items-center font-semibold font-sans">
                    <p className="mr-6 sm:mr-9 flex items-center text-lg">Size</p>
                    <ul className="flex items-center h-full gap-4 sm:gap-6">
                        {product_sizes.map((size, index) => (
                            <li key={index} className="h-9 min-w-9 text-base">
                                <input id={`size-input-check-${index + 1}`} type="radio" name={size} value={size} className="peer hidden" />
                                <label htmlFor={`size-input-check-${index + 1}`} className="flex justify-center items-center rounded-md shadow-sm h-full w-full cursor-pointer border border-[#e0e0e0] text-black bg-white peer-checked:bg-[#6fd6ffbe] px-1">{size}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-12 w-full bg-green-200 flex items-center font-semibold font-sans">
                    <p className="mr-3 sm:mr-6 flex items-center text-lg">Color</p>
                    <ul className="flex items-center h-full gap-4 sm:gap-6">
                        {product_colors.map((product_color, index) => (
                            <li key={index} className="h-7 sm:h-8 aspect-square text-base">
                                <input id={`color-input-check-${index + 1}`} type="radio" name={product_color.name} value={product_color.name} className="peer hidden" />
                                <label htmlFor={`color-input-check-${index + 1}`} className={`block rounded-full shadow-md h-full w-full peer-checked:ring-offset-2 peer-checked:ring-2 ring-[#FF375F]  cursor-pointer`} style={{ "backgroundColor": `${product_color.color}`, "background": `${product_color.color}` }}></label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-[3.5rem] w-full bg-red-200 pt-2 font-sans">
                    <p className="mr-6 sm:mr-9 flex items-center text-lg font-semibold">Brands</p>
                    <ul className="flex items-center gap-3 text-sm">
                        {product_brands.map((brand, index) => (
                            <li key={index} className="">
                                <input id={`brand-input-check-${index + 1}`} type="radio" name={brand} value={brand} className="peer hidden" />
                                <label htmlFor={`brand-input-check-${index + 1}`} className="peer-checked:text-[#FF375F]">
                                    {brand}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-12 w-full bg-[#646464]"></div>
            </div>
        </div>

        {/* Mobile Bottom Menu */}
        <div className="fixed bottom-0 md:hidden w-full h-12 bg-[#d8d5ea] grid grid-cols-4 gap-1">
            <Link href="./" className="flex flex-col justify-center items-center w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                <p className="text-xs">Home</p>
            </Link>
            <button className="flex flex-col justify-center items-center w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                </svg>
                <p className="text-xs">Categories</p>
            </button>
            <button id="bottom-navbar-cart" className="flex flex-col justify-center items-center w-full h-full" onClick={openCart}>
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <span className="absolute top-0 right-0 h-5 w-5 bg-[#ce5288] rounded-full translate-x-4 flex items-center justify-center text-xs text-white">9</span>
                </div>
                <p className="text-xs">Cart</p>
            </button>
            <Link href="./login" className="flex flex-col justify-center items-center w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                <p className="text-xs">Account</p>
            </Link>
        </div>
    </>)
}