'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Users, Trophy, Calendar, FileText, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  teamName: string;
  teamLeader: string;
  email: string;
  phone: string;
  organization: string;
  location: string;
  division: string;
  experience: string;
  members: string;
  expectations: string;
  agreeTerms: boolean;
  newsletter: boolean;
}

interface FormErrors {
  teamName?: string;
  teamLeader?: string;
  email?: string;
  phone?: string;
  organization?: string;
  location?: string;
  division?: string;
  experience?: string;
  members?: string;
  expectations?: string;
  agreeTerms?: string;
  newsletter?: string;
}

export default function RegistrationSection() {
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    teamLeader: '',
    email: '',
    phone: '',
    organization: '',
    location: '',
    division: '',
    experience: '',
    members: '',
    expectations: '',
    agreeTerms: false,
    newsletter: true,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const totalSteps = 3;

  const divisions = [
    { value: 'rookie', label: 'Rookie Division', description: 'First-year teams or new to competitive robotics' },
    { value: 'experienced', label: 'Experienced Division', description: '2-4 years of robotics competition experience' },
    { value: 'veteran', label: 'Veteran Division', description: '5+ years of competitive robotics experience' },
    { value: 'open', label: 'Open Division', description: 'Any experience level, advanced challenges' },
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (step === 1) {
      if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
      if (!formData.teamLeader.trim()) newErrors.teamLeader = 'Team leader name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    
    if (step === 2) {
      if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
      if (!formData.location.trim()) newErrors.location = 'Location is required';
      if (!formData.division) newErrors.division = 'Please select a division';
      if (!formData.experience.trim()) newErrors.experience = 'Experience description is required';
    }
    
    if (step === 3) {
      if (!formData.members.trim()) newErrors.members = 'Team member information is required';
      if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isSubmitted) {
    return (
      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Registration Successful!
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Thank you for registering team <span className="text-primary font-semibold">{formData.teamName}</span> for SamosaTech 2024! 
            We've sent a confirmation email to {formData.email} with next steps and important information.
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">What's Next?</h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Check your email for welcome packet and team resources</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Join our Discord community for team coordination</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Mark your calendar for the kickoff event on March 1st</span>
              </li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Return to Home
          </motion.button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Join SamosaTech 2024
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Register your team for the ultimate off-season robotics competition experience.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                    ${currentStep >= step 
                      ? 'bg-primary text-black' 
                      : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }
                  `}
                >
                  {step}
                </motion.div>
                {step < 3 && (
                  <div className={`w-24 h-1 mx-4 rounded-full ${currentStep > step ? 'bg-primary' : 'bg-gray-800'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Basic Info</span>
            <span>Team Details</span>
            <span>Final Steps</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <User className="w-6 h-6 text-primary" />
                <span>Basic Information</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    value={formData.teamName}
                    onChange={(e) => handleInputChange('teamName', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.teamName ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                    }`}
                    placeholder="Enter your team name"
                  />
                  {errors.teamName && (
                    <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.teamName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team Leader *
                  </label>
                  <input
                    type="text"
                    value={formData.teamLeader}
                    onChange={(e) => handleInputChange('teamLeader', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.teamLeader ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                    }`}
                    placeholder="Team leader's full name"
                  />
                  {errors.teamLeader && (
                    <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.teamLeader}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.email ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                    }`}
                    placeholder="team@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.phone ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Team Details */}
          {currentStep === 2 && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Users className="w-6 h-6 text-accent" />
                <span>Team Details</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Organization/School *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      errors.organization ? 'border-red-500' : 'border-gray-600 focus:border-accent'
                    }`}
                    placeholder="School or organization name"
                  />
                  {errors.organization && (
                    <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.organization}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      errors.location ? 'border-red-500' : 'border-gray-600 focus:border-accent'
                    }`}
                    placeholder="City, State/Province, Country"
                  />
                  {errors.location && (
                    <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.location}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Competition Division *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {divisions.map((division) => (
                    <motion.label
                      key={division.value}
                      whileHover={{ scale: 1.02 }}
                      className={`
                        block p-4 rounded-lg border cursor-pointer transition-all duration-200
                        ${formData.division === division.value
                          ? 'border-accent bg-accent/10'
                          : 'border-gray-600 bg-gray-800/30 hover:border-accent/50'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="division"
                        value={division.value}
                        checked={formData.division === division.value}
                        onChange={(e) => handleInputChange('division', e.target.value)}
                        className="sr-only"
                      />
                      <div className="text-white font-medium mb-1">{division.label}</div>
                      <div className="text-gray-400 text-sm">{division.description}</div>
                    </motion.label>
                  ))}
                </div>
                {errors.division && (
                  <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.division}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Experience *
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none ${
                    errors.experience ? 'border-red-500' : 'border-gray-600 focus:border-accent'
                  }`}
                  placeholder="Describe your team's robotics experience, previous competitions, and any relevant achievements..."
                />
                {errors.experience && (
                  <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.experience}</span>
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 3: Final Steps */}
          {currentStep === 3 && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Trophy className="w-6 h-6 text-secondary" />
                <span>Final Steps</span>
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Members & Roles *
                </label>
                <textarea
                  value={formData.members}
                  onChange={(e) => handleInputChange('members', e.target.value)}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none ${
                    errors.members ? 'border-red-500' : 'border-gray-600 focus:border-secondary'
                  }`}
                  placeholder="List team members and their roles (e.g., John Doe - Lead Programmer, Jane Smith - Mechanical Design, etc.)"
                />
                {errors.members && (
                  <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.members}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Expectations & Goals
                </label>
                <textarea
                  value={formData.expectations}
                  onChange={(e) => handleInputChange('expectations', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary resize-none"
                  placeholder="What do you hope to achieve in this competition? Any specific goals or learning objectives?"
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2"
                  />
                  <div>
                    <span className="text-white">
                      I agree to the{' '}
                      <a href="#" className="text-primary hover:underline">
                        Terms and Conditions
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-primary hover:underline">
                        Competition Rules
                      </a>
                      *
                    </span>
                    {errors.agreeTerms && (
                      <p className="text-red-400 text-sm mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.agreeTerms}</span>
                      </p>
                    )}
                  </div>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                    className="mt-1 w-5 h-5 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-white">
                    Subscribe to our newsletter for competition updates and robotics news
                  </span>
                </label>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <motion.button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              whileHover={{ scale: currentStep === 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentStep === 1 ? 1 : 0.95 }}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${currentStep === 1
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
                }
              `}
            >
              Previous
            </motion.button>

            {currentStep < totalSteps ? (
              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Next Step
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
              >
                Complete Registration
              </motion.button>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}