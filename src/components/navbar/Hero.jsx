

const Hero = () => {
 
  return (
     <div
          className="relative h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: 'url("/bread.jpg")' }}
        >
          <div className="absolute inset-0   flex flex-col items-center justify-center text-white  text-center p-4">
            <h4 className="text-sm tracking-widest  uppercase">
              Whenever we bake, bake with our heart
            </h4>
            

            <h1  className="text-5xl md:text-6xl lg:7xl font-bold mt-2 mb-4">
              Love with baking items
            </h1>
            <p className="max-w-xl mb-6">
              Since Americans in the South began roasting pigs publicly,
              Barbecues have been a staple of North American living. For many,
              grilling becomes a routine mealtime activity.
            </p>
            <button className="bg-[#D1AB7F] uppercase text-2xl font-bold text-white px-6 py-3 rounded hover:bg-orange-600 transition">
              Check Our Menu
            </button>
          </div>
        </div>
    
  );
};

export default Hero;
