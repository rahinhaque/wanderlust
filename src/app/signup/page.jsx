"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Loader2,
  Eye,
  EyeOff,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const router = useRouter();

  // --- Email/Password Signup ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const { email, password, name } = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        callbackURL: "/",
      });

      if (error) {
        toast.error("Account Creation Failed", {
          description:
            error.message || "Something went wrong. Please try again.",
        });
      } else {
        toast.success("Welcome to Wanderlust!", {
          description: "Your account has been created successfully.",
        });
        router.push("/");
      }
    } catch (err) {
      toast.error("System Error", {
        description: "Could not connect to the authentication server.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Social Signup (Google & Github) ---
  const handleSocialSignIn = async (provider) => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });
    } catch (err) {
      toast.error(`${provider} Signup Failed`, {
        description: "Could not connect to the provider.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 lg:bg-white pt-20 lg:pt-0">
      <div className="flex w-full h-screen lg:h-[90vh] max-w-7xl mx-auto overflow-hidden lg:rounded-3xl lg:shadow-2xl lg:border lg:border-gray-100">
        {/* LEFT SIDE: Brand & Image (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-blue-900">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80"
            alt="Mountain Lake Adventure"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-10 p-12 flex flex-col justify-between w-full text-white">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center font-bold text-2xl">
                W
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Wanderlust
              </span>
            </Link>
            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Adventure awaits <br />
                just a click away.
              </h2>
              <p className="text-blue-100 text-lg max-w-md">
                Join our community of world travelers and get access to custom
                itineraries and member-only pricing.
              </p>
            </div>
            <p className="text-sm text-blue-200/60">
              © 2026 Wanderlust Travel Media
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white overflow-y-auto">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Create Account
              </h1>
              <p className="text-gray-500 mt-2">
                Join us and start planning your dream trip.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
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

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
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
                  {/* Eye Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-cyan-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 leading-relaxed">
                By creating an account, you agree to our{" "}
                <span className="text-cyan-600 font-bold cursor-pointer hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-cyan-600 font-bold cursor-pointer hover:underline">
                  Privacy Policy
                </span>
                .
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Processing...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>

              {/* Social Login Section */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-4 text-gray-400 font-medium whitespace-nowrap">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSocialSignIn("google")}
                  className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98] disabled:opacity-50"
                >
                  <FaGoogle className="text-red-500" size={16} /> Google
                </button>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSocialSignIn("github")}
                  className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98] disabled:opacity-50"
                >
                  <FaGithub size={18} /> Github
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-cyan-600 font-bold hover:underline transition-all"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
