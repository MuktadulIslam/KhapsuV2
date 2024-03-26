"use client"
import Image from "next/image";
import Link from "next/link";
import { Roboto_Slab, Solway } from "next/font/google";
import { useEffect, useId, useState } from "react";

const roboto_slab = Roboto_Slab({
    weight: ["500"],
    style: ["normal"],
    preload: false,
});
const solway = Solway({
    weight: ["500"],
    style: ["normal"],
    subsets: ["latin"]
})

const product_sizes = ["S", "M", "L", "XL", "XXL"];
const product_sizes2 = ["30", "32", "34", "36", "38", "40", "42", "44", "46", "Free Size"];
const product_colors = [
    { name: "black", color: "#000000" },
    { name: "red", color: "#ff0000" },
    { name: "pink", color: "#ff3db1" },
    { name: "blue", color: "#3d4aff" },
]

const point_description = [
    "The perfect piece, made from our customer’s voice.",
    "Relaxed Fit",
    "Comfortable full sleeve Unisex T-shirt.",
    "Fabric: Stretch China Polyester",
    "GSM: 230-290"
]
const tag_names = [
    "Casual",
    "Men's Fashion",
    "hoodie"
]

const product_details = {
    id: "FS001",
    SKU: "FS001-pink",
    price: 1000,
    discount_price: 800,
    name: "Freesia Comfy Wireless T-Shirt Rose Pink Bra",
    category: "Bra",
    visitCount: 117,
    stock_size: 30,
    sizes: [
        { "name": "S", "stock_size": 2 },
        { "name": "M", "stock_size": 40 },
        { "name": "L", "stock_size": 0 },
        { "name": "XL", "stock_size": 15 },
        { "name": "XXL", "stock_size": 25 },
        { "name": "XXXL", "stock_size": 25 },
    ],
    // sizes: [
    //     { "name": 32, "stock_size": 2 },
    //     { "name": 34, "stock_size": 40 },
    //     { "name": 36, "stock_size": 0 },
    //     { "name": 38, "stock_size": 15 },
    //     { "name": 40, "stock_size": 25 },
    //     { "name": 42, "stock_size": 25 },
    //     { "name": 44, "stock_size": 25 },
    //     { "name": 46, "stock_size": 25 },
    //     { "name": "Free Size", "stock_size": 25 },
    // ],
    colors: [
        { name: "black", color: "#000000", img_src: "/resources/products/1_black.jpg", stock_size: 25 },
        { name: "black", color: "#000000", img_src: "/resources/products/1_black_2.jpg", stock_size: 25 },
        { name: "blue", color: "#3d4aff", img_src: "/resources/products/1_blue.jpg", stock_size: 25 },
        { name: "green", color: "#228B22", img_src: "/resources/products/1_green.jpg", stock_size: 10 },
        { name: "green", color: "#228B22", img_src: "/resources/products/1_green_2.webp", stock_size: 10 },
        { name: "green", color: "#228B22", img_src: "/resources/products/1_green_3.jpg", stock_size: 10 },
        { name: "pink", color: "#ff3db1", img_src: "/resources/products/1_pink.jpg", stock_size: 25 },
    ],
    image_url: "/resources/products/1_green_2.webp",
    tag_names: [
        "Casual",
        "Men's Fashion",
        "Hoodie"
    ],
    rating: 3.9,
    total_sell: 500,
    total_sell_threshold: 1,
    point_description: [
        "The perfect piece, made from our customer’s voice.",
        "Relaxed Fit",
        "Comfortable full sleeve Unisex T-shirt.",
        "Fabric: Stretch China Polyester",
        "GSM: 230-290"
    ]
}

export default function ProductGrid() {

    const [productImage_url, setProductImage_url] = useState(product_details.image_url)
    var products = Array.from({ length: 20 }, (_, index) => index);
    // Extracting unique colors from the array
    const uniqueColorsSet = {};
    const uniqueColors = [];
    product_details.colors.forEach(product => {
        const { color } = product;
        if (!(color in uniqueColorsSet)) {
            uniqueColorsSet[color] = true;
            uniqueColors.push(product);
        }
    });

    const view_details = (event) => {
        const parentElement = event.target.parentNode.parentNode.parentNode.querySelector(".product-show-container");
        const product_details_box = parentElement.lastElementChild

        parentElement.classList.remove('invisible');
        parentElement.classList.add('visible');
        product_details_box.classList.remove('w-0');
        product_details_box.classList.add('w-11/12', 'sm:w-7/12', 'md:w-5/6', '2md:w-5/6', 'lg:w-[1000px]');
        product_details_box.scrollTop = 0;
    }

    const hide_details = () => {
        const parentElement = document.querySelector(".product-show-container.visible");
        const product_details_box = parentElement.lastElementChild

        parentElement.classList.remove('visible');
        parentElement.classList.add('invisible');
        product_details_box.classList.remove('w-11/12', 'sm:w-7/12', 'md:w-5/6', '2md:w-5/6', 'lg:w-[1000px]');
        product_details_box.classList.add('w-0');
    }

    const handleSizeChange = () => {
        console.log("hello")
    }
    const handleNumberSizeChange = () => { }

    const handleColorChangeByImage = (event, image_url) => {
        setProductImage_url(image_url)
    }

    const handleAddToCard = () => { }
    const handleBuynow = () => { }
    const productGridId = useId();

    return (<>
        <div key={productGridId + product_index} className="">
            {/* Grid Product */}
            <div className="w-full h-auto bg-gray-200 transition-all duration-500">
                <div className="w-full aspect-[5/6]">
                </div>
                <div className="w-full h-28 bg-red-200">
                    <button className="w-full h-full" onClick={view_details}></button>
                </div>
            </div>

            {/* Product Details */}
            <div onClick={hide_details} className="product-show-container fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-60 invisible overflow-hidden">
                <div onClick={(e) => e.stopPropagation()} className="relative w-0 aspect-[1/2] max-2md:max-h-[95%] md:aspect-[5/3] bg-white transition-all duration-500 overflow-y-auto overflow-x-hidden rounded-xl p-1.5 sm:p-2">
                    <div className="relative w-full h-full gap-2 flex max-md:flex-col justify-between">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 absolute right-0 top-0 z-30 translate-x-2 -translate-y-2">
                            <button onClick={hide_details} className="w-full h-full flex justify-center items-center text-gray-800 hover:text-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative md:h-full max-md:w-full flex-none aspect-[9/11] md:aspect-[7/9] flex flex-col">
                            <div className="w-full flex-1">
                                <Image
                                    src={productImage_url}
                                    alt={"products"}
                                    width={400}
                                    height={600}
                                    className="relative w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-10 sm:h-12 md:h-[3.5rem]">
                                <Link href="" className="h-full w-full bg-pink-200 flex justify-center items-center font-semibold text-base md:text-lg lg:text-xl">View Details</Link>
                            </div>
                        </div>
                        <div className="md:h-full flex-1 md:overflow-y-auto">
                            {/* Title, Review, Price Start*/}
                            <div className="text-base 2md:text-xl xl:text-2xl">
                                <div className={`${roboto_slab.className} font-serif md:pr-12`}>
                                    {/* {productdata.name} */}
                                    Freesia Comfy Wireless T-Shirt Rose Pink Bra
                                </div>

                                {/* Reviews */}
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <svg key={rating} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 lg:w-6 lg:h-6 ${rating > 3 ? "text-gray-300" : "text-[#cf10a5]"}`}>
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                </svg>

                                            ))}
                                        </div>
                                        <span href="#" className="ml-3 text-sm font-medium text-[#cf10a5] hover:text-indigo-500 cursor-pointer">
                                            {product_details.visitCount} views
                                        </span>
                                    </div>
                                </div>
                                {/* Reviews end */}

                                <div className="mt-1 mb-4 font-medium">
                                    <span className="text-gray-400 text-sm 2md:text-lg xl:text-xl pr-3">
                                        <span className="font-serif">৳</span>
                                        <del>600.00</del>
                                    </span>
                                    <span className="text-base 2md:text-xl xl:text-2xl">
                                        <span className="font-serif">৳</span>
                                        500.00
                                    </span>
                                </div>
                            </div>
                            {/* Title, Review, Price End*/}

                            {/* Size & Color Start */}
                            <div className="h-11 w-full flex items-center font-semibold font-sans">
                                <p className="mr-6 sm:mr-9 flex items-center text-base">Size</p>
                                <ul className="h-2-scrollbar flex items-center h-full gap-2 sm:gap-4 text-sm overflow-x-auto">
                                    {product_details.sizes.map((size, size_index) => (
                                        <li key={size_index} className="h-auto w-auto">
                                            <input id={`size-input-check-${productGridId + product_index}-${size_index}`} type="radio" name={"size"} value={size.name} className="peer hidden" onChange={handleNumberSizeChange} />
                                            <label htmlFor={`size-input-check-${productGridId + product_index}-${size_index}`} className="flex justify-center items-center rounded-md shadow-sm h-7 sm:h-8 min-w-7 sm:min-w-8 cursor-pointer border border-[#c5c4c4] text-black bg-white peer-checked:bg-[#6fd6ffbe] px-1 whitespace-nowrap">{size.name}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Color Choice by Image */}
                            <div className="h-12 md:h-16 w-full flex items-center font-semibold font-sans">
                                <p className="mr-1 sm:mr-4 flex items-center text-base">Color</p>
                                <ul className="h-2-scrollbar flex items-center h-full gap-3 sm:gap-5 text-sm overflow-x-auto px-2.5">
                                    {uniqueColors.map((product_color, color_index) => (
                                        <li key={color_index} className="h-5/6 aspect-square">
                                            <input id={`color-input-check-${productGridId + product_index}-${product_color.name}`} type="radio" name={"grid_product_color"} value={product_color.name} className="peer hidden" />
                                            <label htmlFor={`color-input-check-${productGridId + product_index}-${product_color.name}`} className={`block rounded-md h-full w-full cursor-pointer overflow-hidden peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-[#FF375F] peer-checked:border-0 border border-gray-500`}>
                                                <Image
                                                    src={product_color.img_src}
                                                    alt={`${product_color.name}'s colors product`}
                                                    height={70}
                                                    width={70}
                                                    className="w-full  h-full object-cover roun"
                                                    onClick={(e) => handleColorChangeByImage(e, product_color.img_src)}
                                                />
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Size & Color End */}

                            {/* quantity & card-buy start */}
                            <div className="flex items-center gap-3 sm:gap-6 mb-4 w-full h-8 sm:h-9 mt-5">
                                <div className="w-36 sm:w-48 h-full box-content bg-transparent text-blue-600 grid grid-cols-3 border border-gray-400 rounded-md overflow-hidden *:flex *:items-center *:justify-center">
                                    <button className={`${solway.className} h-auto text-lg sm:text-xl active:bg-blue-600 active:text-white`}>-</button>
                                    <div className="h-full font-semibold text-sm sm:text-base">2</div>
                                    <button className={`${solway.className} h-auto text-lg sm:text-xl active:bg-blue-600 active:text-white`}>+</button>
                                </div>

                                <div className="h-full w-full flex gap-1 sm:gap-2 font-mono text-sm sm:text-base *:w-auto *:h-full *:px-1 sm:*:px-2">
                                    <button className="bg-white border border-blue-600 active:bg-blue-600 active:text-white rounded-md" onClick={handleBuynow}>Buy now</button>
                                    <button className="bg-blue-600 rounded-md active:bg-white active:border active:border-blue-600 active:text-black text-white" onClick={handleAddToCard}>Add to Card</button>
                                </div>
                            </div>
                            {/* quantity & card-buy end */}

                            {/* Product detail start */}
                            <div className="w-full h-auto max-md:hidden">
                                <div className="w-full px-1 h-0.5 mb-4">
                                    <div className="h-full w-full bg-blue-400 "></div>
                                </div>

                                <div className={`${roboto_slab.className} mt-4 font-serif`}>
                                    <p className="text-sm text-black mt-1 font-sans">
                                        <strong>SKU:</strong> {product_details.SKU}<br /> <strong> Category:</strong> {product_details.category}
                                    </p>
                                </div>
                                <div className={`text-sm font-sans mt-2 mb-6`}>
                                    <ul className="list-disc pl-7 font-lighter">
                                        {product_details.point_description.map((description, index) => (
                                            <li key={index}>{description}</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-800 mt-2">
                                        <strong>
                                            <strong className="pr-2">Tags:</strong>
                                        </strong>
                                        {product_details.tag_names.map((tag, index) => (
                                            index == 0 ? <span key={index}>{tag}</span> : <span key={index}>, {tag}</span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            {/* Product detail end */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}