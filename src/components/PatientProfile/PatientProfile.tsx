"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const PatientProfile = () => {
  const router = useRouter();
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    bloodGroup: "",
    image: "",
    gender: "",
    mobileNumber: "",
    address: "",
  });
  const [formState, setFormState] = useState({ ...profile });
  const [showUpdateSection, setShowUpdateSection] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/patients/profile");
        setProfile(response.data.data);
        setFormState(response.data.data); // Sync form state with fetched profile data
      } catch (error) {
        console.error("Failed to fetch profile", error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleUpdateProfile = async (e: any) => {
    e.preventDefault();
    try {
      await axios.put("/api/patients/profile", formState);
      toast.success("Profile updated successfully");
      // Fetch the updated profile data from the API
      const response = await axios.get("/api/patients/profile");
      setProfile(response.data.data);
      setShowUpdateSection(false); // Hide the update section after successful update
    } catch (error) {
      console.error("Failed to update profile", error);
      toast.error("Failed to update profile");
    }
  };

  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFormState({ ...formState, image: response.data.imageUrl });
    } catch (error) {
      console.error("Failed to upload image", error);
      toast.error("Failed to upload image");
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      if (res.status === 200) {
        toast.success("Logout successful");
        router.push("/#");
      } else {
        toast.error("Logout failed");
      }
    } catch (error: any) {
      console.error("Error during logout:", error.message);
      toast.error("Logout failed");
    }
  };

  const handleAppointments = () => {
    router.push("/appointmnt");
  };

  const toggleUpdateSection = () => {
    setShowUpdateSection(!showUpdateSection);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Patient Profile</h1>
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Profile Viewing Section */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <img
                  src={profile.image}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full shadow-lg border-2 border-gray-300"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-lg font-medium text-gray-900">
                  <strong>Username:</strong> {profile.username}
                </p>
                <p className="text-lg font-medium text-gray-900">
                  <strong>Email:</strong> {profile.email}
                </p>
                <p className="text-lg font-medium text-gray-900">
                  <strong>Blood Group:</strong> {profile.bloodGroup}
                </p>
                <p className="text-lg font-medium text-gray-900">
                  <strong>Gender:</strong> {profile.gender}
                </p>
                <p className="text-lg font-medium text-gray-900">
                  <strong>Mobile Number:</strong> {profile.mobileNumber}
                </p>
                <p className="text-lg font-medium text-gray-900">
                  <strong>Address:</strong> {profile.address}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={toggleUpdateSection}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update Profile
              </button>
              <button
                onClick={handleAppointments}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                View Appointments
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
          {/* Profile Update Section */}
          {showUpdateSection && (
            <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
              <form onSubmit={handleUpdateProfile}>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formState.username}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bloodGroup"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Blood Group
                    </label>
                    <input
                      type="text"
                      id="bloodGroup"
                      name="bloodGroup"
                      value={formState.bloodGroup}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      value={formState.gender}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formState.mobileNumber}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Profile Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PatientProfile;
