import Image from "next/image";
import { ArrowRight } from "../icons/ArrowRight";

export function Hero() {
  return (
    <section className="hero my-12">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> 
          is better <br />
          with a&nbsp;
          <span className="text-primary">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase text-white px-4 py-2 rounded-full flex items-center gap-2">
            Order now
            <ArrowRight 
              classname="h-6 w-6"
            />
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <ArrowRight 
              classname="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={"/pizza.png"} alt={"Pizza de Salame"} layout={"fill"} objectFit={"contain"} />
      </div>
    </section>
  )
}