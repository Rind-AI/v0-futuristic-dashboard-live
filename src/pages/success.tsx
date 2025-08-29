import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircleIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Success() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  
  useEffect(() => {
    // For static export, we can't use router.query
    // Instead, we'll extract from URL hash or search params if needed
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const session_id = urlParams.get('session_id');
      if (session_id) {
        setSessionId(session_id);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to V0 Dashboard - Payment Successful!</title>
        <meta name="description" content="Payment successful! Welcome to V0 Dashboard. Your analytics journey starts now." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircleIcon className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                🎉 Payment Successful!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Welcome to V0 Dashboard! Your analytics journey starts now.
              </p>
            </motion.div>

            {/* Session Info */}
            {sessionId && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-white/5 rounded-xl p-4 mb-8 border border-white/10"
              >
                <p className="text-gray-400 text-sm">Session ID:</p>
                <p className="text-white font-mono text-xs break-all">{sessionId}</p>
              </motion.div>
            )}

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">What's Next?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <SparklesIcon className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Check Your Email</h3>
                  <p className="text-gray-400 text-sm">We've sent your login credentials and getting started guide.</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <RocketLaunchIcon className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Access Your Dashboard</h3>
                  <p className="text-gray-400 text-sm">Start exploring your new analytics platform right away.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Access Dashboard
                </button>
                <button 
                  onClick={() => window.location.href = '/support'}
                  className="border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get Support
                </button>
              </div>

              {/* Revenue Celebration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-12 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30"
              >
                <h3 className="text-green-400 font-semibold text-lg mb-2">🚀 First Revenue Generated!</h3>
                <p className="text-gray-300">This is the beginning of your digital empire. Congratulations on your first successful payment!</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}