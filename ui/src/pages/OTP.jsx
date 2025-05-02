import Navbar from "../components/Navbar";

function OTP() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center mt-5 text-green-600">
          Link Account with OTP
        </h2>
        <div className="w-35[35rem] m-auto" >
            <form className="w-[35rem] m-auto border-0 mt-5 rounded-lg bg-lime-100 p-5 ">
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
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-green-900">
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
            <div className="sm:col-span-3 w-[15rem] mt-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-green-900">
                OTP
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
                className="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Link Account
              </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default OTP;
