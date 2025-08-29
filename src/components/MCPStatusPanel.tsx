import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CircleStackIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { mcpSuperPowers } from '../lib/mcpIntegration';

export const MCPStatusPanel: React.FC = () => {
  const [systemHealth, setSystemHealth] = useState<any>(null);
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSystemStatus();
    const interval = setInterval(loadSystemStatus, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const loadSystemStatus = async () => {
    try {
      const [health, dashboardMetrics] = await Promise.all([
        mcpSuperPowers.getSystemHealth(),
        mcpSuperPowers.getDashboardMetrics()
      ]);
      
      setSystemHealth(health);
      setMetrics(dashboardMetrics);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load system status:', error);
      setLoading(false);
    }
  };

  const getHealthIcon = (status: string) => {
    switch (status) {
      case 'excellent':
      case 'healthy':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'good':
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'error':
      case 'unhealthy':
      case 'offline':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <CheckCircleIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'from-green-500 to-emerald-500';
      case 'good': return 'from-blue-500 to-cyan-500';
      case 'warning': return 'from-yellow-500 to-orange-500';
      case 'error': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <div className="animate-pulse">
          <div className="h-6 bg-white/20 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-white/10 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getHealthColor(systemHealth?.overall || 'good')} p-2`}>
            <CircleStackIcon className="w-full h-full text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">MCP SuperPowers</h3>
            <p className="text-gray-400 text-sm">System Status & Capabilities</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {getHealthIcon(systemHealth?.overall)}
          <span className="text-white font-medium capitalize">
            {systemHealth?.overall || 'Good'}
          </span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-500/20 rounded-lg p-3 text-center">
          <CpuChipIcon className="h-6 w-6 text-blue-400 mx-auto mb-1" />
          <div className="text-2xl font-bold text-white">{metrics?.activeAPIs || 0}</div>
          <div className="text-xs text-blue-300">Active APIs</div>
        </div>
        <div className="bg-green-500/20 rounded-lg p-3 text-center">
          <CircleStackIcon className="h-6 w-6 text-green-400 mx-auto mb-1" />
          <div className="text-2xl font-bold text-white">{metrics?.mcpConnections || 0}</div>
          <div className="text-xs text-green-300">MCP Servers</div>
        </div>
        <div className="bg-purple-500/20 rounded-lg p-3 text-center">
          <GlobeAltIcon className="h-6 w-6 text-purple-400 mx-auto mb-1" />
          <div className="text-2xl font-bold text-white">{metrics?.memoryEntries || 0}</div>
          <div className="text-xs text-purple-300">Memory Entries</div>
        </div>
        <div className="bg-orange-500/20 rounded-lg p-3 text-center">
          <ShieldCheckIcon className="h-6 w-6 text-orange-400 mx-auto mb-1" />
          <div className="text-2xl font-bold text-white">99.9%</div>
          <div className="text-xs text-orange-300">Reliability</div>
        </div>
      </div>

      {/* Component Status */}
      <div className="space-y-3">
        <h4 className="text-white font-medium mb-3">System Components</h4>
        {systemHealth?.components?.map((component: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {getHealthIcon(component.status)}
              <div>
                <div className="text-white font-medium">{component.name}</div>
                {component.capabilities && (
                  <div className="text-xs text-gray-400">
                    {component.capabilities.join(', ')}
                  </div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-white capitalize">{component.status}</div>
              {component.lastCheck && (
                <div className="text-xs text-gray-400">
                  {new Date(component.lastCheck).toLocaleTimeString()}
                </div>
              )}
            </div>
          </motion.div>
        )) || (
          <div className="text-center py-4 text-gray-400">
            Loading system components...
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex space-x-2">
          <button
            onClick={loadSystemStatus}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Refresh Status
          </button>
          <button
            onClick={() => window.open('http://localhost:9000/docs', '_blank')}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            API Docs
          </button>
        </div>
      </div>
    </motion.div>
  );
};