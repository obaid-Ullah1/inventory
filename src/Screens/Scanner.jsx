import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import CustomBtn from "../Components/Button1";
import { FiRefreshCcw } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function HeartDiseaseQuiz() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "",
    symptoms: [],
    riskFactors: [],
    bloodPressure: "",
    cholesterol: "",
  });

  const [result, setResult] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const symptoms = [
    "Chest Pain/Discomfort",
    "Shortness of Breath",
    "Fatigue/Weakness",
    "Dizziness/Lightheadedness",
    "Irregular Heartbeat/Palpitations",
    "Swelling in Legs/Ankles/Feet",
    "Excessive Sweating",
    "Nausea/Vomiting",
    "Pain in Arm/Shoulder/Jaw/Back",
  ];

  const riskFactors = [
    "High Blood Pressure",
    "High Cholesterol",
    "Diabetes",
    "Obesity/Overweight",
    "Family History of Heart Disease",
    "Smoking",
    "Sedentary Lifestyle",
    "Unhealthy Diet",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  const handleAnalyze = () => {
    let riskLevel = "Low";
    if (
      formData.age > 50 ||
      formData.riskFactors.length >= 3 ||
      formData.symptoms.includes("Chest Pain/Discomfort") ||
      formData.bloodPressure > 140 ||
      formData.cholesterol > 200
    ) {
      riskLevel = "High";
    } else if (
      formData.age > 40 ||
      formData.riskFactors.length >= 2 ||
      formData.symptoms.length >= 2
    ) {
      riskLevel = "Moderate";
    }
    setResult(riskLevel);
  };

  const handleReset = () => {
    setFormData({
      age: "",
      weight: "",
      height: "",
      gender: "",
      symptoms: [],
      riskFactors: [],
      bloodPressure: "",
      cholesterol: "",
    });
    setResult(null);
    setCurrentStep(1);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
    exit: { opacity: 0, x: "-100vw", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="w-[18rem] bg-white shadow-lg hidden md:block"></div>
      <div className="flex-grow px-5 py-10 flex flex-col">
        <Navbar />
        <div className="container mx-auto max-w-4xl flex flex-col h-full">
          <motion.div
            className="text-center py-10"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold text-[#1AADAE] leading-tight">
              Heart Disease Assessment
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Answer the questions below to assess your heart disease risk. This is not a substitute for professional medical advice.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="bg-white rounded-lg shadow-lg p-6 flex-grow flex flex-col"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="overflow-y-auto flex-grow">
                {result && (
                  <div
                    className={`p-4 rounded text-center text-lg font-semibold text-white flex justify-between items-center 
                    ${result === "High" ? "bg-red-500" : result === "Moderate" ? "bg-yellow-500" : "bg-green-500"}`}
                  >
                    <span>Your estimated risk level for heart disease is: {result}.</span>
                    <button onClick={handleReset} className="text-white text-xl ml-3">
                      <FiRefreshCcw />
                    </button>
                  </div>
                )}

                <div className="mt-6">
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Step 1: Basic Information</h3>
                      <div className="space-y-4">
                        <input
                          type="number"
                          name="age"
                          placeholder="Age"
                          value={formData.age}
                          className="border p-3 rounded-lg w-full shadow-inner focus:ring-[#1AADAE]"
                          onChange={handleChange}
                          required
                        />
                        <input
                          type="number"
                          name="weight"
                          placeholder="Weight (kg)"
                          value={formData.weight}
                          className="border p-3 rounded-lg w-full shadow-inner focus:ring-[#1AADAE]"
                          onChange={handleChange}
                        />
                        <input
                          type="number"
                          name="height"
                          placeholder="Height (cm)"
                          value={formData.height}
                          className="border p-3 rounded-lg w-full shadow-inner focus:ring-[#1AADAE]"
                          onChange={handleChange}
                        />
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Step 2: Gender</h3>
                      <div className="space-y-2">
                        {["Male", "Female", "Other"].map((gender) => (
                          <label key={gender} className="flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value={gender}
                              checked={formData.gender === gender}
                              onChange={handleChange}
                              className="accent-[#1AADAE] mr-2"
                            />
                            <span>{gender}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Step 3: Symptoms</h3>
                      <div className="grid grid-cols-2 gap-4 max-h-40 overflow-y-auto">
                        {symptoms.map((symptom) => (
                          <label key={symptom} className="flex items-center">
                            <input
                              type="checkbox"
                              value={symptom}
                              checked={formData.symptoms.includes(symptom)}
                              onChange={(e) => handleCheckboxChange(e, "symptoms")}
                              className="accent-[#1AADAE] mr-2"
                            />
                            <span>{symptom}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Step 4: Risk Factors</h3>
                      <div className="grid grid-cols-2 gap-4 max-h-40 overflow-y-auto">
                        {riskFactors.map((factor) => (
                          <label key={factor} className="flex items-center">
                            <input
                              type="checkbox"
                              value={factor}
                              checked={formData.riskFactors.includes(factor)}
                              onChange={(e) => handleCheckboxChange(e, "riskFactors")}
                              className="accent-[#1AADAE] mr-2"
                            />
                            <span>{factor}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              <motion.div
                className="py-4 px-6 flex justify-between items-center bg-white shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {currentStep > 1 && (
                  <CustomBtn
                    label="Previous"
                    width="max-w-xs"
                    click={() => setCurrentStep(currentStep - 1)}
                    height="h-12"
                    className="bg-gray-400 text-white font-bold py-2 px-6 rounded-lg shadow-md"
                  />
                )}
                {currentStep < 4 ? (
                  <CustomBtn
                    label="Next"
                    width="max-w-xs"
                    click={() => setCurrentStep(currentStep + 1)}
                    height="h-12"
                    className="bg-[#1AADAE] hover:bg-[#189b9b] text-white font-bold py-2 px-6 rounded-lg shadow-md"
                  />
                ) : (
                  <CustomBtn
                    label="Analyze"
                    width="max-w-xs"
                    click={handleAnalyze}
                    height="h-12"
                    className="bg-[#1AADAE] hover:bg-[#189b9b] text-white font-bold py-2 px-6 rounded-lg shadow-md"
                  />
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
