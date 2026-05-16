"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Calendar,
  ShieldCheck,
  ArrowLeft,
  LogOut,
  Settings,
  Shield,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed out successfully");
          router.push("/login");
        },
      },
    });
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-12">
      {/* Header Spacer for fixed Navbar */}
      <div className="h-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumbs / Back Link */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-colors mb-6 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: User Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
              {/* Profile Icon Placeholder (Instead of Image) */}
              <div className="w-24 h-24 bg-cyan-100 text-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <User size={40} strokeWidth={2.5} />
              </div>

              <h2 className="text-xl font-bold text-gray-900 truncate">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500 mb-6 truncate">
                {user.email}
              </p>

              <div className="flex flex-col gap-2">
                <button className="w-full py-2.5 px-4 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                  <Settings size={16} />
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 px-4 bg-red-50 text-red-600 rounded-xl font-semibold text-sm hover:bg-red-100 transition-all flex items-center justify-center gap-2"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Information */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-cyan-500" />
                  Account Details
                </h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                  Active
                </span>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Full Name
                  </p>
                  <p className="text-gray-900 font-medium">
                    {user.name || "Not provided"}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Email Address
                  </p>
                  <p className="text-gray-900 font-medium">{user.email}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Member Since
                  </p>
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <Calendar size={16} className="text-gray-400" />
                    {new Date(user.createdAt || Date.now()).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    User ID
                  </p>
                  <p className="text-gray-500 font-mono text-xs truncate max-w-[200px]">
                    {user.id}
                  </p>
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Security & Privacy
                  </h4>
                  <p className="text-xs text-gray-500">
                    Manage your password and active sessions.
                  </p>
                </div>
              </div>
              <button className="text-cyan-600 font-bold text-sm hover:underline">
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
