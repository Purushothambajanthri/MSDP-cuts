import React from "react";
import {
  AlertCircle,
  CheckCircle,
  Phone,
  Settings,
} from "lucide-react";
import {
  hasRealSupabaseConfig,
  supabaseConfig,
} from "../utils/supabase/info";

export function ConfigStatus() {
  if (hasRealSupabaseConfig) {
    return null; // Don't show anything if everything is working
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-lg">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <Settings className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 text-sm mb-1">
              Demo Mode Active
            </h4>
            <p className="text-xs text-blue-700 mb-3">
              This booking system is running in demo mode. For
              real appointments:
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="tel:9381625471"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>Call 9381625471</span>
              </a>
              <button
                onClick={() => {
                  console.log(
                    "🔧 Current Supabase Config:",
                    supabaseConfig,
                  );
                  alert(
                    "Configuration details logged to console. Check browser developer tools.",
                  );
                }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded text-xs transition-colors"
              >
                Debug Config
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Alternative inline status component for use within forms
export function InlineConfigStatus() {
  if (hasRealSupabaseConfig) {
    return (
      <div className="flex items-center space-x-2 text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
        <CheckCircle className="w-4 h-4" />
        <span className="text-sm font-medium">
          ✅ Live booking system active - Real appointments will
          be scheduled
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
      <div className="flex items-start space-x-3">
        <div className="bg-blue-100 p-2 rounded-full">
          <AlertCircle className="w-4 h-4 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">
            🎯 Interactive Demo - Experience Our Booking System
          </h4>
          <p className="text-xs text-blue-700 mb-3">
            This is a fully functional demonstration of our
            booking interface. You can test all features and see
            how the appointment process works.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href="tel:9381625471"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs font-medium transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call Purushotham</span>
            </a>
            <a
              href="tel:9573761730"
              className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded text-xs font-medium transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call Sreeramulu</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}