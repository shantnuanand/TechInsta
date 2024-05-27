import React from "react";

const Signup = () => {
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Signup</h3>
          <form className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="btn btn-white bg-blue-500 text-white px-8 font-bold rounded-full"
              >
                Sign Up
              </button>
              <h1 className="">
                Already a member{" "}
                <a>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    //   <Login/>
                    }
                    type="submit"
                    className="ml-2 btn btn-white bg-blue-500 text-white px-8 font-bold rounded-full"
                  >
                    Login
                  </button>
                </a>
              </h1>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-white bg-blue-500 text-white px-8 font-bold ">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Signup;
