import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (

    <div className=" m-5 xl:text-center rounded-3xl">

      <div className="flex font-bold italic justify-center items-center rounded-xl p-5">
        <h1 className="text-4xl md:text-9xl xl:text-9xl text-white">Pizza Resto</h1>
        <img src="/img/obrazek1.png" alt="obrazek1.png" className="w-40 xl:w-max md:w-80 p-3 md:p-10" />
      </div>
      <div className="grid grid-rows-4 mb-5  md:h-16 md:grid-cols-4 rounded-3xl md:rounded-full md:mb-5 text-center bg-lime-600">
        <NavLink to="/" className="text-white text-center p-4 text-lg md:text-xl rounded-full hover:bg-lime-700 hover:rounded-full cursor-pointer">Home</NavLink>

        <NavLink to="/szukasz_pracy" className="text-white text-center p-4 text-lg md:text-xl rounded-full hover:bg-lime-700 hover:rounded-full cursor-pointer">Job Offer</NavLink>

        <NavLink to="/contact" className="text-white text-center p-4 text-lg md:text-xl rounded-full hover:bg-lime-700 hover:rounded-full cursor-pointer">Contact</NavLink>

        <NavLink to="/menu" className="text-white text-center p-4 text-lg md:text-xl rounded-full hover:bg-lime-700 hover:rounded-full cursor-pointer">Menu</NavLink>
      </div>
      <Outlet />
      <div className="bg-gray-950   xl:text-right text-slate-500 grid grid-cols-3 xl:grid xl:grid-cols-7 ">
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="">
          <p>Prace Wykonał: Mateusz Harbuz</p>
          <p>Numer albumu: 42371</p>
          <p>Grupa: Lab2</p>
        </div>

      </div>
    </div >
  )
};

export default Layout;