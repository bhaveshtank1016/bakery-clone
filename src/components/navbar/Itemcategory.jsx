import React from "react";

function Itemcategory() {
  const foodItems = [
    {
      title: "Pizza",
      image:"https://images7.alphacoders.com/596/596343.jpg", // Replace with your image path
      description:
        "Inappropriate behavior is often laughed off as “boys will be.”",
    },
    {
      title: "Bread",
      image: "https://thefoodcharlatan.com/wp-content/uploads/2023/05/Garlic-Bread-Recipe-15.jpg",
      description:
        "Inappropriate behavior is often laughed off as “boys will be.”",
    },
    {
      title: "Burgers",
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Inappropriate behavior is often laughed off as “boys will be.”",
    },
    {
      title: "Chicken",
      image: "https://www.spendwithpennies.com/wp-content/uploads/2022/01/Buttery-Garlic-Roast-Chicken-SpendWithPennies-8.jpg",
      description:
        "Inappropriate behavior is often laughed off as “boys will be.”",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="items-category-area max-w-7xl mx-auto px-4 ">
        <div className="items-container text-center mb-10">
          <h1 className="text-5xl font-bold">Category of Available Items</h1>
          <p className="text-gray-600 mt-4 text-lg mb-20">
            They are grilling celebrities in their own right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {foodItems.map((food, index) => (
            <div
              key={index}
              className=" flex flex-col items-center text-center px-1 py-6 rounded-lg "
            >
              <div className="w-65 h-65 rounded-full overflow-hidden shadow:md   hover:shadow-2xl transition mb-8">
                <img
                  src={food.image}
                
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl  hover:text-[#D1AB7F] font-bold">{food.title}</h2>
              <p className="mt-5 text-xl text-gray-500">{food.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a className="py-3 px-6 uppercase font-bold mb-30 bg-[#D1AB7F] hover:bg-orange-700 text-xl  text-white" href="#">View full menu</a>
        </div>
      </div>
    </section>
  );
}

export default Itemcategory;
