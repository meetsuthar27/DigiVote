import React from "react";
import Particles from "../components/Particles";
import ShinyText from "../components/ShinyText";

function LoginPageTemp() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        background: "oklch(0.13 0.028 261.692)",
      }}
    >
      <div className="items-center jetbrains uppercase font-light justify-center top-[calc(50%-250px)] left-[calc(50%-300px)] absolute z-10 p-4">
        <div className="w-[600px] bg-gray-950 border-[1px] border-teal-800 rounded-3xl shadow-lg p-8">
          {/* <h2 className="text-3xl tracking-tighter uppercase jetbrains font-semibold text-gray-400 mb-6 text-center">
            Sign In
          </h2> */}

          <ShinyText
            text="SIGN IN"
            disabled={false}
            speed={5}
            className="text-3xl tracking-tighter uppercase jetbrains font-semibold mb-6 text-center"
          />

          <hr className="border-[1px] border-teal-900 mb-4"></hr>

          <form className="space-y-4">
            <div>
              <label className="block text-md text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border bg-gray-950 border-gray-700 text-gray-700 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-indigo-500 outline-none transition-all"
                placeholder="Enter Email"
              />
            </div>

            <div>
              <label className="block text-md text-gray-400 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border bg-gray-950 border-gray-700 text-gray-700 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-indigo-500 outline-none transition-all"
                placeholder="Enter Password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-teal-700 hover:text-gray-500 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-teal-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-teal-700 hover:text-gray-500">
                Forgot password?
              </a>
            </div>

            <button className="px-6 py-3 w-full mt-4 uppercase bg-teal-950 cursor-pointer jetbrains hover:bg-teal-600 border-[1px] border-teal-800 hover:border-teal-500 text-teal-600 hover:text-gray-950 rounded-xl font-semibold shadow-md transition-all duration-300 ease-in-out transform">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center tracking-tighter text-md text-gray-600">
            Don't have an account?
            <a
              href="#"
              className="text-teal-700 ml-2 hover:text-gray-400 font-medium"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={500}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}

export default LoginPageTemp;
