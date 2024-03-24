"use client"
import Link from "next/link";
import { Black_Ops_One, Maitree, Noto_Sans_Zanabazar_Square, Solway, Noto_Sans_Ethiopic } from "next/font/google";

import Image from "next/image";
import Category from "./Category";
import RangeInput from "./RangeInput";
import { useRef } from "react";

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

const noto_Sans_Zanabazar_Square = Noto_Sans_Ethiopic({
    weight: ["600"],
    style: ["normal"],
    subsets: ["latin"]
})

const solway = Solway({
    weight: ["500"],
    style: ["normal"],
    subsets: ["latin"]
})



const product_sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
const product_sizes2 = ["30", "32", "34", "36", "38", "40", "42", "44", "46", "Free Size"];
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
const cart_products = [
    { id: "bra_121227981", sku: "pink-bra_121227981", name: "Freesia Comfy Wireless T-Shirt Rose Pink Bra", category: "Bra", size: "XXL", color: "Pink", price: 650, quantity: 1, img_src: "/resources/products2/product1.jpg" },
    { id: "bra_121227231", sku: "pink-bra_121227231", name: "Valene Strapless Tulip Lace Wired Qualityful Bra", category: "Bra", size: "XL", color: "Blue", price: 600, quantity: 2, img_src: "/resources/products2/product2.png" },
    { id: "bra_121224531", sku: "pink-bra_121224531", name: "Valene Love Birds Wired Lacy Bra Set-Rose Pink", category: "Bra-Panty Set", size: "M", color: "Off-white", price: 850, quantity: 1, img_src: "/resources/products2/product3.jpeg" },
]



export default function Navbar() {
    const openFilter = () => {
        const filterbar = document.getElementById("filterbar");
        if (filterbar.classList.contains('h-0')) {
            closeCategory()
            closeMobileCategoryView()
            closeCart()
            closeWishlist()
            filterbar.classList.remove('h-0');
            filterbar.classList.add('h-[23rem]');
        } else {
            filterbar.classList.remove('h-[23rem]');
            filterbar.classList.add('h-0');
        }
    };
    const closeFilter = () => {
        const filterbar = document.getElementById("filterbar");
        if (!filterbar.classList.contains('h-0')) {
            filterbar.classList.remove('h-[23rem]');
            filterbar.classList.add('h-0');
        }
    };

    const openCategory = () => {
        const category = document.getElementById("category");
        const downarrow = document.querySelector(".chevron-double-down-category");

        if (category.classList.contains('h-0')) {
            closeFilter()
            closeCart()
            closeWishlist()
            category.classList.add('h-[500px]', 'overflow-y-auto', 'overflow-x-hidden');
            downarrow.classList.add('rotate-180');
            category.classList.remove('h-0', 'overflow-hidden');
        } else {
            category.classList.add('h-0', 'overflow-hidden');
            category.classList.remove('h-[500px]', 'overflow-y-auto', 'overflow-x-hidden');
            downarrow.classList.remove('rotate-180');
        }
    };
    const closeCategory = () => {
        const category = document.getElementById("category");

        if (!category.classList.contains('h-0')) {
            const downarrow = document.querySelector(".chevron-double-down-category");
            category.classList.add('h-0', 'overflow-hidden');
            category.classList.remove('h-[475px]', 'overflow-y-auto', 'overflow-x-hidden');
            downarrow.classList.remove('rotate-180');
        }
    };

    const openMobileCategoryView = () => {
        const category = document.getElementById("mobile-category-view");
        if (category.classList.contains('h-0')) {
            closeFilter()
            closeCart()
            closeWishlist()
            category.classList.add('h-mobile-view-slider-popup-box');
            category.classList.remove('h-0', 'overflow-hidden');
        } else {
            category.classList.add('h-0', 'overflow-hidden');
            category.classList.remove('h-mobile-view-slider-popup-box');
        }
    };
    const closeMobileCategoryView = () => {
        const category = document.getElementById("mobile-category-view");
        if (!category.classList.contains('h-0')) {
            category.classList.add('h-0', 'overflow-hidden');
            category.classList.remove('h-mobile-view-slider-popup-box');
        }
    };

    const openCart = () => {
        const cart = document.getElementById("cart");
        if (cart.classList.contains('h-0')) {
            closeFilter()
            closeMobileCategoryView()
            closeWishlist()
            cart.classList.add('h-mobile-view-slider-popup-box', 'md:h-screen');
            cart.classList.remove('h-0', 'overflow-hidden');
        } else {
            cart.classList.add('h-0', 'overflow-hidden');
            cart.classList.remove('h-mobile-view-slider-popup-box', 'md:h-screen');
        }
    }
    const closeCart = () => {
        const cart = document.getElementById("cart");
        if (!cart.classList.contains('h-0')) {
            cart.classList.add('h-0', 'overflow-hidden');
            cart.classList.remove('h-mobile-view-slider-popup-box', 'md:h-screen')
        }
    }

    const openWishList = () => {
        const wishlist = document.getElementById("wishlist");
        if (wishlist.classList.contains('h-0')) {
            closeCart()
            closeFilter()
            closeMobileCategoryView()
            wishlist.classList.add('h-mobile-view-slider-popup-box', 'md:h-screen');
            wishlist.classList.remove('h-0', 'overflow-hidden');
        } else {
            wishlist.classList.add('h-0', 'overflow-hidden');
            wishlist.classList.remove('h-mobile-view-slider-popup-box', 'md:h-screen');
        }
    }
    const closeWishlist = () => {
        const wishlist = document.getElementById("wishlist");
        if (!wishlist.classList.contains('h-0')) {
            wishlist.classList.add('h-0', 'overflow-hidden');
            wishlist.classList.remove('h-mobile-view-slider-popup-box', 'md:h-screen')
        }
    }


    const selectedSizes = useRef([]);
    const selectedNumberSizes = useRef([]);
    const selectedColors = useRef([]);
    const selectedBrands = useRef([]);
    const maxRange = useRef(2000);
    const minRange = useRef(200);

    const handleSizeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            selectedSizes.current = [...selectedSizes.current, value];
        } else {
            selectedSizes.current = selectedSizes.current.filter(size => size !== value);
        }
    };

    const handleNumberSizeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            selectedNumberSizes.current = [...selectedNumberSizes.current, value];
        } else {
            selectedNumberSizes.current = selectedNumberSizes.current.filter(size => size !== value);
        }
    };

    const handleColorChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            selectedColors.current = [...selectedColors.current, value];
        } else {
            selectedColors.current = selectedColors.current.filter(color => color !== value);
        }
    };

    const handleBrandChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            selectedBrands.current = [...selectedBrands.current, value];
        } else {
            selectedBrands.current = selectedBrands.current.filter(brand => brand !== value);
        }
    };

    const handleApply = () => {
        console.log("Selected Sizes:", selectedSizes.current);
        console.log("Selected Sizes:", selectedNumberSizes.current);
        console.log("Selected Colors:", selectedColors.current);
        console.log("Selected Brands:", selectedBrands.current);
        console.log("Min Range:", minRange.current);
        console.log("Max Range:", maxRange.current);
    };

    const handleCancel = () => {
        // Uncheck all checkboxes
        const filterbar = document.getElementById("filterbar");
        const checkboxes = filterbar.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);

        selectedSizes.current = [];
        selectedNumberSizes.current = [];
        selectedColors.current = [];
        selectedBrands.current = [];
    };


    return (<>
        {/* First Navbar */}
        <div className="max-md:p-2 md:pl-6 md:pr-4 h-28 sm:h-32 md:h-16 lg:h-20 w-full flex justify-between items-center md:gap-10 2md:gap-20 max-md:flex-col mb-4">
            <div className="w-full md:w-52 lg:w-56 xl:w-80 h-10 sm:h-[52px] md:h-full flex-none flex items-center justify-between">
                <button onClick={openMobileCategoryView} className="md:hidden aspect-square h-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#FF375F]">
                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className={`${blackOpsOne.className} w-40 sm:w-56 md:w-full h-5/6 flex justify-center items-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl`}>
                    <Link href="./" className="bg-gradient-to-r from-[#FF375F]  to-[#815cc6] inline-block text-transparent bg-clip-text">Khapsu</Link>
                </div>
                <div className="md:hidden w-20 h-full flex items-center justify-center gap-2">
                    {/* Wishlist */}
                    <button onClick={openWishList} className="bg-white bg-opacity-80 h-5/6 aspect-square flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#FF375F]">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </button>

                    {/* Size Grid */}
                    <button className="bg-white bg-opacity-80 h-5/6 aspect-square flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-[#FF375F]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
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
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="search"
                            id="search"
                            placeholder="Search..." />
                    </div>
                </div>
                <div className="h-full aspect-square">
                    <button className="h-full w-full flex items-center justify-center rounded-md bg-[#ff377d]" onClick={openFilter}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-2/3 h-2/3 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>

                    </button>
                </div>
            </div>

            <div className="max-md:hidden w-44 lg:w-80 h-full flex-none flex items-center justify-end">
                {/* SignUp/Signin */}
                <div className="lg:hidden w-12 aspect-square">
                    <Link href="./login" className="h-full w-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 xl:h-8 xl:w-8 text-[#ff377d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>
                </div>
                <div className="max-lg:hidden w-auto h-full flex items-center justify-between gap-2 pr-2 text-sm font-semibold">
                    <Link href="./registration" className="bg-transparent border-2 border-solid border-gray-600 h-[40%] rounded-md w-16 flex items-center justify-center">Sign Up</Link>
                    <Link href="./login" className="bg-[#fa54b8b2] h-[40%] text-white rounded-md w-16 flex items-center justify-center">Sign In</Link>
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
                    <button onClick={openWishList} className="h-full w-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 xl:h-8 xl:w-8 text-[#ff377d]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Card */}
                <div className="w-12 aspect-square relative">
                    <button onClick={openCart} className="h-full w-full flex justify-center items-center">
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
                    <button onClick={openCategory} className="w-full h-full flex items-center justify-between pl-10 gap-2">
                        <div className="h-full flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 xl:h-8 xl:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            <h2 className="text-lg">Browse Categories</h2>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 chevron-double-down-category mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
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
        <div id="filterbar" className="w-full h-0 overflow-hidden transition-all ease-linear duration-300 shadow-md">
            <div className="w-full max-w-[700px] h-full m-auto px-4 md:py-2 max-md:pb-2">
                <div className="w-full h-20 mb-2">
                    <p className="mb-9 text-lg font-bold font-sans">Price</p>
                    <RangeInput maxRangeValue={maxRange} minRangeValue={minRange}/>
                </div>
                <div className="h-12 w-full flex items-center font-semibold font-sans">
                    <p className="mr-6 sm:mr-9 flex items-center text-base">Size</p>
                    <ul className="h-2-scrollbar flex items-center h-full gap-3 sm:gap-5 text-sm overflow-x-auto">
                        {product_sizes.map((size, index) => (
                            <li key={index} className="h-7 min-w-7 sm:h-9 sm:min-w-9 ">
                                <input id={`size-input-check-${index + 1}`} type="checkbox" name={size} value={size} className="peer hidden" onChange={handleSizeChange} />
                                <label htmlFor={`size-input-check-${index + 1}`} className="flex justify-center items-center rounded-md shadow-sm h-full w-full cursor-pointer border border-[#c5c4c4] text-black bg-white peer-checked:bg-[#6fd6ffbe] px-1">{size}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-12 w-full flex items-center font-semibold font-sans">
                    <ul className="h-2-scrollbar ml-[3.3rem] sm:ml-16 flex items-center h-full gap-3 sm:gap-5 text-sm overflow-x-auto">
                        {product_sizes2.map((size, index) => (
                            <li key={index} className="h-auto w-auto">
                                <input id={`number-size-input-check-${index + 1}`} type="checkbox" name={size} value={size} className="peer hidden" onChange={handleNumberSizeChange} />
                                <label htmlFor={`number-size-input-check-${index + 1}`} className="flex justify-center items-center rounded-md shadow-sm h-7 sm:h-9 min-w-7 sm:min-w-9 cursor-pointer border border-[#c5c4c4] text-black bg-white peer-checked:bg-[#6fd6ffbe] px-1 whitespace-nowrap">{size}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-12 w-full flex items-center font-semibold font-sans">
                    <p className="mr-1 sm:mr-4 flex items-center text-base">Color</p>
                    <ul className="h-2-scrollbar flex items-center h-full gap-3 sm:gap-5 text-sm overflow-x-auto px-2">
                        {product_colors.map((product_color, index) => (
                            <li key={index} className="h-6 sm:h-7 aspect-square">
                                <input id={`color-input-check-${index + 1}`} type="checkbox" name={product_color.name} value={product_color.name} className="peer hidden" onChange={handleColorChange} />
                                <label htmlFor={`color-input-check-${index + 1}`} className={`block rounded-full shadow-md h-full w-full peer-checked:ring-offset-2 peer-checked:ring-1 sm:peer-checked:ring-2 ring-[#FF375F]  cursor-pointer`} style={{ "backgroundColor": `${product_color.color}`, "background": `${product_color.color}` }}></label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-12 w-full pt-2 font-sans">
                    <p className="mr-6 sm:mr-9 flex items-center text-base font-semibold">Brands</p>
                    <ul className="flex items-center gap-3 sm:gap-4 text-sm">
                        {product_brands.map((brand, index) => (
                            <li key={index} className="">
                                <input id={`brand-input-check-${index + 1}`} type="checkbox" name={brand} value={brand} className="peer hidden" onChange={handleBrandChange} />
                                <label htmlFor={`brand-input-check-${index + 1}`} className="peer-checked:text-[#FF375F]">
                                    {brand}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-16 w-full flex items-end gap-5 font-mono text-sm sm:text-base pl-10 *:w-20 *:h-9">
                    <button className="bg-white border border-blue-600 active:bg-blue-600 active:text-white rounded-md" onClick={handleApply}>APPLY</button>
                    <button className="bg-blue-600 rounded-md active:bg-white active:border active:border-blue-600 active:text-black text-white" onClick={handleCancel}>CANCEL</button>
                </div>
            </div>
        </div>

        {/* Mobile Bottom Menu */}
        <div className="fixed bottom-0 md:hidden w-full h-10 sm:h-11 bg-gray-200 grid grid-cols-4 gap-1 text-[#FF375F]">
            <Link href="./" className="flex flex-col justify-center items-center w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                <p className="text-xs text-black">Home</p>
            </Link>
            <button className="flex flex-col justify-center items-center w-full h-full" onClick={openMobileCategoryView}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-black">Categories</p>
            </button>
            <button id="bottom-navbar-cart" className="flex flex-col justify-center items-center w-full h-full" onClick={openCart}>
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <span className="absolute top-0 right-0 h-5 w-5 bg-[#ff028dfe] rounded-full translate-x-4 flex items-center justify-center text-xs text-white">9</span>
                </div>
                <p className="text-xs text-black">Cart</p>
            </button>
            <Link href="./login" className="flex flex-col justify-center items-center w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-black">Account</p>
            </Link>
        </div>


        {/* Categories for mobile/tablet view */}
        <div id="mobile-category-view" className="fixed bottom-10 sm:bottom-11 h-0 w-screen bg-white overflow-hidden overflow-y-auto overflow-x-hidden transition-all ease-linear duration-300">
            <div className="w-full h-full overflow-hidden">
                <div className="text-stone-700 h-11 w-full flex items-center justify-between px-2 mb-2 shadow-md">
                    <h2 className="h-auto w-auto text-xl font-bold font-sans ml-4">Categories</h2>
                    <button onClick={openMobileCategoryView} className="h-full aspect-square flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>
                <Category />
            </div>
        </div>

        {/* Cart */}
        <div className="flex justify-end">
            <div id="cart" className="fixed max-sm:bottom-10 max-md:bottom-11 bottom-0 h-0 w-screen max-w-[400px] bg-gray-50 overflow-hidden overflow-y-auto overflow-x-hidden transition-all ease-linear duration-300">
                <div className="w-full h-full overflow-hidden flex flex-col">
                    <div className="text-stone-700 h-11 w-full flex items-center justify-between px-2 mb-2 shadow-md">
                        <h2 className="h-auto w-auto text-xl font-bold font-sans ml-4">Shopping Cart</h2>
                        <button onClick={openCart} className="h-full aspect-square flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <div className="flex-1 w-full flex flex-col justify-between">
                        <div className="bg-transparent w-full flex-1 px-2 flex flex-col gap-3">
                            {cart_products.map((product, index) => (
                                <div key={index} className="bg-white shadow-sm h-[110px] py-2 w-full flex items-center gap-2 rounded-md">
                                    <div className="h-full aspect-square rounded-md">
                                        <Image
                                            src={product.img_src}
                                            alt="Product-1"
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="h-full flex-1 rounded-r-md">
                                        <div className="h-[70%] w-full flex justify-between">
                                            <div className="h-full flex-1">
                                                <div className="w-full h-full overflow-hidden flex flex-col justify-center">
                                                    <p className="text-sm mb-1 font-semibold">{product.name}</p>
                                                    <div className="flex gap-7">
                                                        <p className="text-xs"><span className="font-semibold mr-1.5">Size:</span>{product.size}</p>
                                                        <p className="text-xs"><span className="font-semibold mr-1.5">Color:</span>{product.color}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-7 h-full p-1.5">
                                                <button className="w-4 aspect-square rounded-full border border-black hover:border-red-600 hover:text-red-600 flex items-center justify-center ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={`${noto_Sans_Zanabazar_Square.className} h-[30%] w-full flex items-center justify-between gap-1`}>
                                            <div className="flex-1 h-auto text-sm font-semibold"><span className="font-serif inline-block translate-x-0.5">৳</span> {product.price} <span>.00</span></div>
                                            <div className="w-28 h-full box-content bg-transparent text-indigo-600 grid grid-cols-3 border border-gray-400 rounded-md overflow-hidden *:flex *:items-center *:justify-center">
                                                <button className={`${solway.className} h-auto text-xl active:bg-indigo-600 active:text-white`}>-</button>
                                                <div className="h-full font-semibold">{product.quantity}</div>
                                                <button className={`${solway.className} h-auto text-xl active:bg-indigo-600 active:text-white`}>+</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full h-16 p-2 flex flex-col font-sans font-semibold">
                            <div className="w-full h-0.5 bg-[#007AFF] mb-2"></div>
                            <div className="w-full flex-1 flex items-center justify-between gap-1">
                                <div className="h-full w-20 flex justify-between items-center">
                                    <p className="text-base">Subtotal</p>
                                    <p className="text-lg">:</p>
                                </div>
                                <div className={`${noto_Sans_Zanabazar_Square.className} h-full flex-1 flex items-center text-base`}><span className="font-serif text-sm">৳</span> 1250 <span>.00</span></div>
                                <div className="h-full flex-1 text-sm">
                                    <button className="bg-[#007AFF] pl-1.5 pr-2.5 w-auto rounded-md h-full flex justify-center items-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <p>Check out</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Wishlist */}
        <div className="flex justify-end">
            <div id="wishlist" className="fixed max-sm:bottom-10 max-md:bottom-11 bottom-0 h-0 w-screen max-w-[400px] bg-gray-50 overflow-hidden overflow-y-auto overflow-x-hidden transition-all ease-linear duration-300">
                <div className="w-full h-full overflow-hidden flex flex-col">
                    <div className="text-stone-700 h-11 w-full flex items-center justify-between px-2 mb-2 shadow-md">
                        <h2 className="h-auto w-auto text-xl font-bold font-sans ml-4">Wishlist</h2>
                        <button onClick={openWishList} className="h-full aspect-square flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <div className="bg-transparent flex-1 w-full px-2 flex flex-col gap-3">
                        {cart_products.map((product, index) => (
                            <div key={index} className="bg-white shadow-sm h-[100px] py-2 w-full flex items-center gap-2 rounded-md">
                                <div className="h-full aspect-square rounded-md">
                                    <Image
                                        src={product.img_src}
                                        alt="Product-1"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                                <div className="h-full flex-1 rounded-r-md">
                                    <div className="h-[70%] w-full flex justify-between">
                                        <div className="h-full flex-1">
                                            <div className="w-full h-full overflow-hidden flex flex-col justify-center">
                                                <p className="text-sm mb-1 font-semibold">{product.name}</p>
                                                <p className="text-xs"><span className="font-semibold">Category:</span>{product.category}</p>
                                            </div>
                                        </div>
                                        <div className="w-7 h-full p-1.5">
                                            <button className="w-4 aspect-square rounded-full border border-black hover:border-red-600 hover:text-red-600 flex items-center justify-center ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`h-[30%] w-full flex items-center justify-between gap-1`}>
                                        <div className={`${noto_Sans_Zanabazar_Square.className} flex-1 h-auto text-sm font-bold`}><span className="font-serif inline-block translate-x-0.5">৳</span> {product.price} <span>.00</span></div>
                                        <div className="w-28 h-full rounded-md">
                                            <button className={`w-full h-full text-sm  bg-[#FF375F] text-white active:bg-white active:border-2 active:border-[#FF375F] active:text-[#FF375F] flex items-center justify-center rounded-md font-sans`}>Add to Cart</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}