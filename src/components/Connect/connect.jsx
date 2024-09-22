import Wix from "../../assets/Wix-Logo.png";
import Bigcommerce from "../../assets/bigcommerce.png";


const Connect = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold mb-4">Connect your store</h1>
      <p className="text-lg text-gray-600 mb-8">
        Printify easily integrates with major e-commerce platforms and
        marketplaces.
      </p>

      {/* Grid container */}
      <div className="container justify-center mx-20 ">
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto relative content-center items-center">
            {/* Top Row */}
            <div className="flex justify-center items-center w-24 h-24 bg-white shadow-md rounded-lg transition-transform transform hover:scale-110">
              <img
                src="https://seeklogo.com/images/S/squarespace-logo-5C7392F2DD-seeklogo.com.png"
                alt="Squarespace"
                className="w-12 h-12"
              />
            </div>
            <div className="flex justify-center items-center w-24 h-24 bg-white shadow-md rounded-lg transition-transform transform hover:scale-110">
              <img src={Wix} alt="Wix" className="w-12 h-12" />
            </div>
            <div className="flex justify-center items-center w-24 h-24 bg-white shadow-md rounded-lg transition-transform transform hover:scale-110">
              <img src={Bigcommerce} alt="BigCommerce" className="w-12 h-12" />
            </div>

            {/* Middle Row */}
            <div className="flex justify-center items-center w-24 h-24 bg-white shadow-md rounded-lg transition-transform transform hover:scale-110">
              <img
                src="https://th.bing.com/th/id/OIP.2z1hf219bpy7qOWZX43lIAHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                alt="Etsy"
                className="w-12 h-12"
              />
            </div>

            {/* Center Logo */}
            <div className="flex justify-center items-center w-24 h-24 bg-green-500 shadow-lg rounded-lg transition-transform transform hover:scale-110">
              <img
                src="https://th.bing.com/th/id/OIP.c_sd0za3Z_yrrrsGOGcC0gHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                alt="Printify"
                className="w-16 h-16"
              />
            </div>

            <div className="flex justify-center items-center w-24 h-24 bg-white shadow-md rounded-lg transition-transform transform hover:scale-110">
              <img
                src="https://th.bing.com/th/id/OIP.kpXbq2J9scT48OCnisl3zAHaEb?w=295&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                alt="WooCommerce"
                className="w-12 h-12"
              />
            </div>

            {/* Bottom Row */}
            <div className="flex justify-center items-center w-24 h-24 bg-white shadow-md rounded-lg transition-transform transform hover:scale-110">
              <img
                src="https://th.bing.com/th/id/OIP.en6u3RNKBQBGLcgQYZiLfAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                alt="PrestaShop"
                className="w-12 h-12"
              />
            </div>
            <div className="flex justify-center items-center w-24 h-24 bg-white shadow-md rounded-lg transition-transform transform hover:scale-110">
              <img
                src="https://logodix.com/logo/875112.png"
                alt="API"
                className="w-12 h-12"
              />
            </div>
            <div className="flex justify-center items-center w-24 h-24 bg-white shadow-md rounded-lg transition-transform transform hover:scale-110">
              <img
                src="https://th.bing.com/th/id/R.d710a11133e8117a4988f4847bfd18e2?rik=WqvOALHJzFURnw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshopify-logo-png-shopify-logo-1500x1034.png&ehk=mM6ZPV22TxO12EAivDzyjSvzsB8IfMK5ZCb5YiwwRYo%3d&risl=&pid=ImgRaw&r=0"
                alt="Shopify"
                className="w-12 h-12"
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Connect;
