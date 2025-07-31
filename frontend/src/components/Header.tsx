import { useState } from "react";
import SettingsModal from "@/components/settings/SettingModal";
import { formatTimestamp } from "@/utils/formatDate";
import Link from "next/link";


export default function Header({
  onOpenSettings,
  updateTimestamp: lastUpdated,
}: {
  onOpenSettings: () => void;
  updateTimestamp: string | null;
}) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex">
        <h1 className="text-2xl font-bold text-gray-800 mg-20">Good First Issues</h1>

        {/* Completed issue #30: Added UI for the About page */}
        <Link href="/about" className="text-sm text-gray-700 font-semibold hover:text-gray-900 left-0 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100"><h1>About</h1></Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <span className="text-sm text-gray-500 ">
            Last Updated: {lastUpdated} hours ago
          </span>

          <div className="h-4 w-px bg-gray-300" />

         <button
         onClick={onOpenSettings}
            className="text-sm text-gray-700 font-semibold hover:text-gray-900   transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 "
          >
            Settings
          </button>
        </div>
      </div>
    </header>
  );
}
