import Image from "next/image";
import Link from "next/link";

const categories_data = [
    { name: "Woman's Fashion", image: "/imgs/icons/woman.png", link: "./" },
    { name: "Man's Fashion", image: "/imgs/icons/man.png", link: "./" },
    { name: "Brassieres", image: "/imgs/icons/bra.png", link: "./" },
    { name: "Panties", image: "/imgs/icons/panties.png", link: "./" },
    { name: "Bra & Panties", image: "/imgs/icons/bra_panties.png", link: "./" },
    { name: "New Arrival", image: "/imgs/icons/new_arrival.png", link: "./" },
    { name: "Most Populer", image: "/imgs/icons/most_popular.png", link: "./" },
    { name: "Best Selling", image: "/imgs/icons/best_selling.png", link: "./" },
    { name: "Trending Products", image: "/imgs/icons/trending.png", link: "./" },
    { name: "Interior Design", image: "/imgs/icons/interior.png", link: "./" },
    { name: "Wall Clock", image: "/imgs/icons/clock.png", link: "./" },
]

export default function Category() {
    return (<>
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
            {categories_data.map((category, index) => (
                <>
                    <Link href={category.link} key={index} className="w-full active:scale-110 aspect-[3/4] bg-white flex flex-col py-2 rounded-lg shadow-md">
                        <div className="w-full aspect-[4/3] flex items-center justify-center">
                            <div className="relative h-5/6 aspect-square">
                                <Image
                                    src={category.image}
                                    alt="Product 1"
                                    layout="fill"
                                    className="w-full aspect-square object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-center text-base font-semibold mt-1.5">{category.name}</h3>
                    </Link>
                </>
            ))}
        </div>
    </>)
}