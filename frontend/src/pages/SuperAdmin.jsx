
import { SignIn, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import SuperAdminDashboard from "./SuperAdminDashboard";

const SuperAdmin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* When not logged in → Show Clerk SignIn */}
      <SignedOut>
        <SignIn routing="path" path="/admin" />
      </SignedOut>

      {/* When logged in → Go straight to SuperAdminDashboard */}
      <SignedIn>
        <SuperAdminDashboard />
      </SignedIn>
    </div>
  );
};

export default SuperAdmin;
