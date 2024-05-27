import React from "react";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Login</h3>
          <form className="mt-4">
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
            <div className="flex justify-between items-center">
              <button className="btn btn-white bg-blue-500 text-white rounded-full px-8 font-bold ">
                Login
              </button>
              <h1 className="">
                Not a member{" "}
                <a>
                  <button
                    onClick={
                      (e) => {
                        e.preventDefault();
                        document.getElementById("my_modal_2").showModal();
                      }
                      //   <Login/>
                    }
                    type="submit"
                    className="ml-2 btn btn-white bg-blue-500 text-white px-8 font-bold rounded-full"
                  >
                    Signup
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

export default Login;
