import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CloudArrowUpIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface StorageUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUsage: number;
  maxStorage: number;
  onUpgrade: () => void;
}

export const StorageUpgradeModal: React.FC<StorageUpgradeModalProps> = ({
  isOpen,
  onClose,
  currentUsage,
  maxStorage,
  onUpgrade
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'professional' | 'enterprise'>('professional');
  const usagePercentage = (currentUsage / maxStorage) * 100;

  const plans = {
    professional: {
      name: 'Professional',
      price: 79,
      storage: '100GB',
      features: [
        '100GB Cloud Storage',
        'Automatic Sync',
        'Team Collaboration',
        'Advanced Analytics',
        'Priority Support'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 199,
      storage: '1TB',
      features: [
        '1TB Cloud Storage',
        'Real-time Sync',
        'Advanced Security',
        'Custom Integrations',
        'Dedicated Support',
        'SLA Guarantee'
      ]
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-t-2xl">
              <div className="flex items-center space-x-4">
                <ExclamationTriangleIcon className="h-12 w-12" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">Storage Limit Reached!</h2>
                  <p className="opacity-90">
                    You're using {usagePercentage.toFixed(1)}% of your storage space
                  </p>
                </div>
              </div>
              
              {/* Storage Bar */}
              <div className="mt-6 bg-white/20 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-white h-full transition-all duration-500"
                  style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-sm mt-2 opacity-90">
                <span>{currentUsage.toFixed(2)} GB used</span>
                <span>{maxStorage} GB limit</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <CloudArrowUpIcon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Upgrade to Cloud Storage
                </h3>
                <p className="text-gray-600">
                  Never worry about storage limits again. Your data will be automatically synced and backed up in the cloud.
                </p>
              </div>

              {/* Plan Selection */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {Object.entries(plans).map(([key, plan]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedPlan(key as 'professional' | 'enterprise')}
                    className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${
                      selectedPlan === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">${plan.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                      </div>
                    </div>
                    
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      {plan.storage} Storage
                    </div>
                    
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-gray-900 mb-4">What you get with cloud storage:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Automatic backup & sync</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Access from any device</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Enterprise-grade security</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onUpgrade}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Upgrade to {plans[selectedPlan].name} - ${plans[selectedPlan].price}/month
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Maybe Later
                </button>
              </div>

              <p className="text-center text-xs text-gray-500 mt-4">
                💡 <strong>Pro Tip:</strong> Start with Professional plan and upgrade to Enterprise when you need more features
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};