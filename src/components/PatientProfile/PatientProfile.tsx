"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const PatientProfile = () => {
  const router = useRouter();
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    bloodGroup: '',
    image: '',
    gender: '',
    mobileNumber: '',
    address: ''
  });
  const [showUpdateSection, setShowUpdateSection] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/patients/profile'); // Adjust endpoint as necessary
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleUpdateProfile = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/patients/profile', profile); // Adjust endpoint as necessary
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile', error);
      toast.error('Failed to update profile');
    }
  };

  const handleImageChange = async (e:any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setProfile({ ...profile, image: response.data.imageUrl });
    } catch (error) {
      console.error('Failed to upload image', error);
      toast.error('Failed to upload image');
    }
  };

  const handleLogout = () => {
    // Handle logout logic here
    router.push('/logout'); // Adjust as necessary
  };

  const handleAppointments = () => {
    router.push('/appointments'); // Adjust as necessary
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
                <p className="text-lg font-medium text-gray-900"><strong>Username:</strong> {profile.username}</p>
                <p className="text-lg font-medium text-gray-900"><strong>Email:</strong> {profile.email}</p>
                <p className="text-lg font-medium text-gray-900"><strong>Blood Group:</strong> {profile.bloodGroup}</p>
                <p className="text-lg font-medium text-gray-900"><strong>Gender:</strong> {profile.gender}</p>
                <p className="text-lg font-medium text-gray-900"><strong>Mobile Number:</strong> {profile.mobileNumber}</p>
                <p className="text-lg font-medium text-gray-900"><strong>Address:</strong> {profile.address}</p>
              </div>
              <div className="mt-6 flex flex-col lg:flex-row gap-4 w-full">
                <button
                  className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={toggleUpdateSection}
                >
                  Profile Settings
                </button>
                <button
                  className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
                <button
                  className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={handleAppointments}
                >
                  My Appointments
                </button>
              </div>
            </div>
          </div>

          {/* Profile Update Section */}
          {showUpdateSection && (
            <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
              <form className="space-y-6" onSubmit={handleUpdateProfile}>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
                  <input
                    type="text"
                    id="bloodGroup"
                    name="bloodGroup"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.bloodGroup}
                    onChange={handleInputChange}
                    placeholder="Blood Group"
                  />
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">Profile Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleImageChange}
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Update Profile
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
