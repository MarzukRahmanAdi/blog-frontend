
    
    function Card({bg_color}) {
      return <div>
          <div className={` w-11/12 mx-auto md:w-full  `}>
                <div className={`card_body h-96 after:${bg_color}`}>    
                    <h1 className="font-bold m-2 md:ml-5 md:mb-5 text-3xl lg:text-6xl text-white ">How to get started with game dev</h1>
                    <h4 className="ml-2 md:ml-6 text-gray-50 z-10 md:mb-3">By Adi</h4>
                </div>
          </div>
      </div>;
    }
    
    export default Card;
    