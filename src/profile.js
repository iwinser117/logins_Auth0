import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="w-80 p-4 bg-white shadow rounded-md text-center">
        <img
          src={user.picture}
          alt={user.name}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    )
  );
};

export default Profile;
