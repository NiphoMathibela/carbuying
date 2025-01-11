import React, { useState, useEffect } from "react";
import { BsFuelPump, BsCalendarDate, BsSpeedometer } from "react-icons/bs";
import { TbManualGearbox, TbEngine } from "react-icons/tb";
import { FaMapMarkerAlt, FaCar, FaUser } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    fetchCarDetails();
  }, [id]);

  const fetchCarDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/cars/${id}`);
      const data = await response.json();
      if (data.status === 'success') {
        setCar(data.data);
      } else {
        throw new Error(data.message);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching car details:', error);
      setLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/cars/${id}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();
      if (data.status === 'success') {
        setShowContactForm(false);
        setContactForm({ name: '', email: '', message: '' });
        // You might want to show a success message here
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // You might want to show an error message here
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Car not found</h2>
        <button
          onClick={() => navigate('/carSearch')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/carSearch')}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Search
        </motion.button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          {/* Image Gallery */}
          <div className="relative h-96">
            <img
              src={car.image || 'https://via.placeholder.com/800x400'}
              alt={car.carName}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-4xl font-bold text-white">
                {car.year} {car.carName} {car.model}
              </h1>
              <p className="text-2xl text-white mt-2">${car.price.toLocaleString()}</p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
            >
              <BsSpeedometer className="text-blue-500 text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Mileage</p>
                <p className="font-semibold">{car.mileage} km</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
            >
              <BsFuelPump className="text-blue-500 text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Fuel Type</p>
                <p className="font-semibold">{car.fuelType}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
            >
              <TbManualGearbox className="text-blue-500 text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Transmission</p>
                <p className="font-semibold">{car.gearType}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
            >
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{car.location}</p>
              </div>
            </motion.div>
          </div>

          {/* Detailed Specs */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Vehicle Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-600">Body Type</span>
                  <span className="font-semibold">{car.bodyType}</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-600">Engine Size</span>
                  <span className="font-semibold">{car.engineSize}</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-600">Power</span>
                  <span className="font-semibold">{car.power}</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-600">Fuel Consumption</span>
                  <span className="font-semibold">{car.fuelCons}</span>
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-600">Drive</span>
                  <span className="font-semibold">{car.drive}</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-600">Seats</span>
                  <span className="font-semibold">{car.seats}</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-600">Seller Type</span>
                  <span className="font-semibold">{car.sellerType}</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-600">Vehicle Type</span>
                  <span className="font-semibold">{car.vehicleType}</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="p-6 bg-gray-50">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactForm(true)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <FaUser className="mr-2" />
              Contact Seller
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Contact Seller</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                  >
                    Send Message
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CarDetail;
