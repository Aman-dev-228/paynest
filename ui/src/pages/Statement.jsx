
import Navbar from "../components/Navbar";

function Statement() {
  return (
    <div className="bg-white m-auto lg:w-fit">
      <div className="py-2 shadow-green-300 shadow-2xl lg:w-[75rem] m-auto ">
        <Navbar />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center mt-5 text-green-600">
          Account Statement
        </h2>
        <div className="lg:w-[65rem] m-auto" >
            <form className="m-auto border-0 mt-5 shadow-2xl shadow-amber-200 rounded-lg bg-lime-100 p-5 ">
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
            
            <div className="mt-6 flex items-center gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Statement
              </button>
            </div>
            </form>
        </div>
      </div>
      <div>
        <p className="m-auto text-center text-orange-600 font-medium">
          No Transaction Details Found. please enter a valid and account linked mobile
        </p>
      </div>
      <div className="lg:m-38 mt-3 border-0 lg:w-[45rem] flex p-3 rounded-lg shadow-2xl shadow-amber-200">
        <table className="table-auto border-0 rounded-lg shadow-lime-500 shadow-2xl opacity-80  w-full">
          <thead className="text-xl font-bold p-3 bg-lime-100">
            <tr>
              <td className="p-2"> Transaction data and time</td>
              <td className="p-2"> Amount</td>
              <td className="p-2"> Sender Account</td>
              <td className="p-2"> Paid To</td>
              <td className="p-2"> Receiver Account</td>
              <td className="p-2"> Remarks</td>
            </tr>
          </thead>
          <tbody className="text-md font-semibold bg-lime-200 py-3 w-full">
            <tr>
              <td className="p-2"> 2020-07-30T06:35:11</td>
              <td className="p-2"> 500</td>
              <td className="p-2"> 51234567</td>
              <td className="p-2"> 9876543278</td>
              <td className="p-2"> 51234234</td>
              <td className="p-2"> Payment for Groceries</td>


            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Statement;
