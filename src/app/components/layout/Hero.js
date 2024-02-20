import Image from "next/image";
import Right from "./components/icons/Right";

export default function Hero() {
    return (
        <section className="grid grid-cols-2">
            <div>
            <h1 className="text-4xl font-semibold">Everything is better with Pizza</h1>
            <p className="my-4 text-gray-500">Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
            </div>
            <div className="relative">
            <Image src={'/pizza.png'} layout= {'fill'} objectFit={'contain'} alt={'pizza'} />
            </div>
            <div className="flex gap-4">
                <button className="bg-primary text-white px-8 py-2 rounded-full">Order Now
                <Right />
                </button>
                <button>Learn More</button>
            </div>
        </section>

    ); 
}