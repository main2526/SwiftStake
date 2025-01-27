"use client";

import { useUser } from "@clerk/nextjs";
import { Crown } from "lucide-react";

export default function UserProfile() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
        <span className="text-2xl font-bold">
          {user?.firstName?.charAt(0) || "U"}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg">
          {user?.firstName || "Guest"}
        </span>
        <div className="flex items-center gap-1 bg-yellow-400/20 px-2 py-0.5 rounded-full">
          <Crown className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-yellow-400">VIP3</span>
        </div>
      </div>
    </div>
  );
}
