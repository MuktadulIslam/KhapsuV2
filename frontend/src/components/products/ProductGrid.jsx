"use client"
import Link from "next/link";

export default function ProductGrid() {
    var products = Array.from({ length: 20 }, (_, index) => index);
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

    return (<>
        <div className="mt-12">
            <div className="w-full grid gap-1.5 sm:gap-2 md:gap-3 2md:gap-2 grid-cols-2 sm:grid-cols-3 2md:grid-cols-4 lg:grid-cols-6">
                {products.map((product, index) => (
                    <div key={index} className="">
                        {/* Grid Product */}
                        <div className="w-full h-auto bg-black transition-all duration-500">
                            <div className="w-full aspect-[5/6]">
                            </div>
                            <div className="w-full h-28 bg-red-400">
                                <button className="w-full h-full" onClick={view_details}></button>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div onClick={hide_details} className="product-show-container fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-slate-200 bg-opacity-60 invisible overflow-hidden">
                            <div onClick={(e) => e.stopPropagation()} className="relative w-0 aspect-[1/2] max-2md:max-h-[95%] md:aspect-[5/3] bg-white transition-all duration-500 rounded-xl p-1.5 sm:p-2">
                                <div className="relative w-full h-full flex max-md:flex-col justify-between bg-yellow-700 overflow-y-auto">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 absolute right-0 top-0 z-10">
                                        <button onClick={hide_details} className="w-full h-full flex justify-center items-center text-gray-800 hover:text-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="relative md:h-full max-md:w-full flex-none aspect-[9/11] md:aspect-[7/10] bg-gray-400 flex flex-col">
                                        <div className="w-full flex-1 bg-black">

                                        </div>
                                        <div className="absolute bottom-0 w-full h-10 sm:h-12 md:h-[3.5rem]">
                                            <Link href="" className="h-full w-full bg-green-500 flex justify-center items-center">View Detail</Link>
                                        </div>
                                    </div>
                                    <div className="md:h-full flex-1 bg-red-700 md:overflow-y-auto">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas sint quod eum quasi minus ducimus, fugiat fuga earum necessitatibus nihil perspiciatis nemo laborum fugit iste magni nesciunt cupiditate asperiores delectus. Quasi consectetur explicabo aliquam incidunt repellat. Natus exercitationem provident culpa eveniet, iure illo vitae distinctio ullam maxime architecto facere repudiandae enim sed nostrum nihil rerum corporis laudantium sequi fuga dicta odit! Quae libero nisi tempore aliquid autem maxime, cumque perferendis iste eos impedit neque error rerum recusandae fugiat expedita quibusdam doloribus quis quod excepturi possimus eum nostrum? Voluptate recusandae ab consectetur dolorum, molestias, id incidunt totam veniam dolorem delectus voluptatum beatae dolores, et porro non expedita! Voluptatum, magnam ullam laudantium, molestiae sequi eius numquam a nobis repellendus adipisci facilis quisquam aut delectus et soluta laborum doloribus sunt. Eos aut quasi quisquam tempore deserunt ad soluta delectus perspiciatis similique fugiat quas placeat mollitia ullam praesentium deleniti odio et, ratione adipisci possimus ut. Eum placeat sapiente error? Dicta illum recusandae obcaecati ipsum. Odio accusantium quis obcaecati distinctio ea. Omnis repellendus sequi quaerat mollitia enim voluptatibus perspiciatis iste? Enim explicabo in aspernatur eum aliquid distinctio ab, maiores reprehenderit beatae laudantium fuga maxime aperiam saepe fugiat optio, rem culpa laborum. Maxime atque incidunt aspernatur totam voluptatum. Ab iste vitae veritatis autem a qui deleniti dolorem nihil ea cupiditate distinctio error temporibus, voluptatum modi eum aliquam beatae laborum, dolor dolores laboriosam non tempore voluptatem dolore. Accusamus explicabo cumque tempora. Odit consectetur delectus ullam, dolorem culpa soluta sequi aspernatur, quidem repudiandae libero obcaecati omnis. Et magnam porro rerum laboriosam obcaecati dolores vitae quo iste explicabo quia sapiente dolor earum maiores culpa necessitatibus quae repellat voluptate ratione, aspernatur in inventore perspiciatis! Expedita hic porro accusantium quae nam recusandae, totam assumenda, velit voluptate commodi repudiandae corporis quam vitae officiis, culpa exercitationem veritatis vero consequatur quaerat ratione ullam aut facere quasi eaque. Et, ipsam nam earum quae voluptatibus fugit voluptas incidunt officia autem repellendus sapiente mollitia magnam ab eum officiis, ut quia delectus, deleniti porro. Officiis a, aperiam natus repellendus illum reprehenderit ipsa ullam dolorem eaque aspernatur dicta eum nulla inventore numquam porro nemo ut dolores vitae! Earum laborum rerum autem culpa itaque praesentium atque enim explicabo, maiores eligendi id voluptatem placeat, qui totam quis velit. Repellat voluptatibus veritatis suscipit, perferendis accusamus repudiandae eos error! Minus impedit illum minima, eius repellat quo consectetur praesentium quis ullam id, quasi
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>

        {/* <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-slate-200 bg-opacity-60">
            <div className="relative w-11/12  sm:w-3/4 md:w-5/6 2md:w-5/6 lg:w-[1000px] aspect-[1/2] max-2md:max-h-[95%] md:aspect-[5/3] bg-white transition-all duration-500 z-50 rounded-xl">
            </div>
        </div> */}
    </>)
}