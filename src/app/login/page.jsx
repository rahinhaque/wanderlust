"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Mail, Lock, ArrowRight, Loader2, Eye, EyeOff } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // --- Email/Password Login ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        toast.error("Login Failed", {
          description: error.message || "Invalid email or password.",
        });
      } else {
        toast.success("Welcome back!", {
          description: "Successfully signed into Wanderlust.",
        });
        router.push("/");
      }
    } catch (err) {
      toast.error("System Error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Social Login (Google & Github) ---
  const handleSocialSignIn = async (provider) => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });
    } catch (err) {
      toast.error(`${provider} Login Failed`, {
        description: "Could not connect to the provider.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 lg:bg-white pt-20 lg:pt-0">
      <div className="flex w-full h-screen lg:h-[90vh] max-w-7xl mx-auto overflow-hidden lg:rounded-3xl lg:shadow-2xl lg:border lg:border-gray-100">
        {/* LEFT SIDE: Brand & Image */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-cyan-900">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
            alt="Tropical Beach"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 p-12 flex flex-col justify-between w-full text-white">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center font-bold text-2xl text-white">
                W
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Wanderlust
              </span>
            </Link>
            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Start your journey <br />
                with us today.
              </h2>
              <p className="text-cyan-100 text-lg max-w-md">
                Access exclusive deals and manage bookings in one place.
              </p>
            </div>
            <p className="text-sm text-cyan-200/60">
              © 2026 Wanderlust Travel Media
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 bg-white overflow-y-auto">
          <div className="w-full max-w-md">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Welcome Back
              </h1>
              <p className="text-gray-500 mt-2">
                Please enter your details to sign in.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs font-bold text-cyan-600 hover:text-cyan-700"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-cyan-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    Sign In{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-4 text-gray-400 font-medium whitespace-nowrap">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSocialSignIn("google")}
                  className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98] disabled:opacity-50"
                >
                  <FaGoogle className="text-red-500" size={16} />
                  Google
                </button>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSocialSignIn("github")}
                  className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98] disabled:opacity-50"
                >
                  <FaGithub size={18} />
                  Github
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-cyan-600 font-bold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
