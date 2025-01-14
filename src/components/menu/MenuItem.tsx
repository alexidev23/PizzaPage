export function MenuItem () {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div>
        <img
          src='/pizza.png'
          alt="Pizza"
        />
      </div>
      <div className="font-semibold text-xl my-3">Pepperoni Pizza</div>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Add to cart $12
      </button>
    </div>
  )
}