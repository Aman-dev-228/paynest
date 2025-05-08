import Navbar from "../components/Navbar";

function ListAccount() {
  return (
    <div className="bg-white m-auto lg:w-fit">
      <div className="py-2 shadow-green-300 shadow-2xl lg:w-[75rem] m-auto ">
        <Navbar />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center mt-10 text-green-600">
          List Account
        </h2>
        <div className="lg:w-[55rem] shadow-2xl shadow-lime-300 rounded-lg m-auto">
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
      <div className="lg:m-38 mt-3 border-0 lg:w-[45rem] flex p-3 rounded-lg shadow-2xl shadow-amber-200">
        <table className="table-auto border-0 rounded-lg shadow-lime-500 shadow-2xl opacity-80  w-full">
          <thead className="text-xl font-bold p-3 bg-lime-400">
            <tr>
              <td className="p-2"> Account Details</td>
            </tr>
          </thead>
          <tbody className="text-md font-semibold bg-lime-200 py-3 w-full">
            <tr>
              <td className="p-2"> Account Number: </td>
            </tr>

            <tr>
              <td className="p-2">Bank Name: </td>
            </tr>
            <tr>
              <td className="p-2">Balance: </td>
            </tr>
            <tr>
              <td className="p-2">Account Type: </td>
            </tr>
            <tr>
              <td className="p-2">IFSC Code: </td>
            </tr>
            <tr>
              <td className="p-2">Opening Date: </td>
            </tr>
            <tr>
              <td className="p-2">Mobile Number: </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className="m-auto text-center text-orange-600 font-medium">
          No account details found with the given mobile number
        </p>
      </div>
    </div>
  );
}

export default ListAccount;
