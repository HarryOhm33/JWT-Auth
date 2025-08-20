// src/pages/Dashboard.jsx
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiAward } from "react-icons/fi";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-purple-200">Welcome to your personal space</p>
          </div>

          {user && (
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-700 rounded-lg p-6 mb-6"
              >
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FiAward className="text-purple-400" /> Profile Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-600 rounded-lg">
                      <FiUser className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Name</p>
                      <p className="text-white font-medium">{user.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-600 rounded-lg">
                      <FiMail className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">{user.email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-700 rounded-lg p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  Account Status
                </h2>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <p className="text-green-400">
                    Your account is active and secure
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
