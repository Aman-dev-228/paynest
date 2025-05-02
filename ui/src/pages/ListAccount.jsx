import Navbar from "../components/Navbar";

function ListAccount() {
  return (
    <div className="bg-green-100 m-auto lg:w-fit">
      <div className="py-2 shadow-green-300 shadow-2xl lg:w-[75rem] m-auto ">
        <Navbar />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center mt-10 text-green-600">
          List Account
        </h2>
        <div className="lg:w-[55rem] shadow-2xl shadow-amber-200 m-auto">
          <form className="m-auto border-0 mt-5 rounded-lg bg-lime-100 p-5 ">
            <div className="sm:col-span-2 sm:col-start-1">
              <p className="text-sm mb-5">
                Enter your mobile number to view your linked account details
              </p>
              <label
                htmlFor="city"
                className="block text-sm  font-medium text-green-900"
              >
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

            <div className="mt-6 flex items-center gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ListAccount;
