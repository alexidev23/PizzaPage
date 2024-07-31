import Image from "next/image";
import { MenuItem } from "../menu/MenuItem";

export function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full">
        <div className="absolute left-0 -top-[70px] -z-10">
          <Image 
            src='/sallad1.png'
            alt="Sallad"
            width={109}
            height={189}
          />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image 
            src='/sallad2.png'
            alt="Sallad"
            width={107}
            height={195}
          />
        </div>
      </div>
      <div className="text-center">
        <h2 className="uppercase text-gray-500 font-semibold leading-4">
          Check Out
        </h2>
        <h3 className="text-primary font-bold text-4xl italic mb-4">Menu</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}