import Navbar from "../components/Navbar";

function Balance() {
  return (
    <div className="bg-white">
      <div className="py-2 shadow-green-300 shadow-sm lg:w-[75rem] m-auto ">
      <Navbar />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center mt-5 text-green-600">
          Check Balance
        </h2>
        <div className="lg:w-[55rem] shadow-2xl shadow-amber-200 sm:w-[25rem] m-auto" >
            <form className="m-auto border-0 mt-5 rounded-lg bg-lime-100 p-5 ">
            <div className="sm:col-span-2 sm:col-start-1">
                <p className="text-sm mb-5">Enter your mobile number to view your linked account details</p>
              <label htmlFor="city" className="block text-sm  font-medium text-green-900">
                Mobile Number
              </label>
              <div className="mt-2 col  gap-3 flex">
              <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Code"
                  autoComplete="address-level2"
                  className="block w-[5rem] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Mobile"
                  autoComplete="address-level2"
                  className="block w-[15rem] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3 w-[15rem] mt-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Account Number
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-x-6">
              <button
                type="submit"
                className="rounded-md  bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check Balance
              </button>
            </div>
            </form>
        </div>
      </div>
      <div className="lg:mx-48 text-center bg-gray-50 border-0 flex flex-col lg:w-[35rem] mt-3 rounded-lg shadow-2xl shadow-black">
        <h4 className="p-2">Balance</h4>
        <p className="p-2"> you have ₹4243328 in your account</p>
        <footer className=" border-t-2 mt-3  shadow-2xl shadow-amber-200 bg-gray-200">
          <p className="m-auto text-center font-sm p-2">Happy Transaction 🥳</p>
        </footer>
      </div>
      <div className="bg-orange-700 w-full flex flex-col ">
        <footer>
          <p className="m-auto text-center font-medium p-3">No account is linked. please enter a registered mobile number</p>
        </footer>
      </div>
    </div>
  );
}

export default Balance;
