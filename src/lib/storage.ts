// Enterprise Storage System - Local to Cloud Migration Ready
// Supports localStorage initially, easily upgradeable to cloud storage

export interface UserData {
  id: string;
  email: string;
  plan: 'starter' | 'professional' | 'enterprise';
  subscription: {
    active: boolean;
    stripeId?: string;
    currentPeriodEnd?: string;
  };
  usage: {
    dashboards: number;
    storage: number; // in GB
    apiCalls: number;
  };
  settings: {
    theme: 'light' | 'dark';
    notifications: boolean;
    autoSave: boolean;
  };
}

export interface DashboardData {
  id: string;
  name: string;
  userId: string;
  data: any;
  createdAt: string;
  updatedAt: string;
  isShared: boolean;
}

class StorageManager {
  private isClient = typeof window !== 'undefined';
  private storagePrefix = 'v0_dashboard_';
  
  // Local Storage Methods (Phase 1)
  private getLocalItem<T>(key: string): T | null {
    if (!this.isClient) return null;
    
    try {
      const item = localStorage.getItem(this.storagePrefix + key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }
  
  private setLocalItem<T>(key: string, value: T): void {
    if (!this.isClient) return;
    
    try {
      localStorage.setItem(this.storagePrefix + key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }
  
  // User Management
  saveUser(userData: UserData): void {
    this.setLocalItem('user', userData);
    
    // Future: Also sync to cloud if user has pro/enterprise plan
    if (userData.plan !== 'starter') {
      this.syncToCloud('user', userData);
    }
  }
  
  getUser(): UserData | null {
    return this.getLocalItem<UserData>('user');
  }
  
  // Dashboard Management
  saveDashboard(dashboard: DashboardData): void {
    const dashboards = this.getDashboards() || [];
    const existingIndex = dashboards.findIndex(d => d.id === dashboard.id);
    
    if (existingIndex >= 0) {
      dashboards[existingIndex] = dashboard;
    } else {
      dashboards.push(dashboard);
    }
    
    this.setLocalItem('dashboards', dashboards);
    
    // Future: Sync to cloud for backup
    this.syncToCloud('dashboard', dashboard);
  }
  
  getDashboards(): DashboardData[] | null {
    return this.getLocalItem<DashboardData[]>('dashboards');
  }
  
  deleteDashboard(dashboardId: string): void {
    const dashboards = this.getDashboards() || [];
    const filtered = dashboards.filter(d => d.id !== dashboardId);
    this.setLocalItem('dashboards', filtered);
  }
  
  // Cloud Migration Methods (Future Implementation)
  private syncToCloud(type: string, data: any): void {
    // Phase 2: Implement cloud sync for pro/enterprise users
    console.log(`Future: Syncing ${type} to cloud storage...`);
    
    // This will connect to:
    // - Firebase (easy, real-time)
    // - Supabase (PostgreSQL, open source)
    // - AWS DynamoDB (enterprise scalability)
    // - Your custom API
  }
  
  // Storage Analytics
  getStorageUsage(): {
    used: number;
    limit: number;
    percentage: number;
  } {
    let totalSize = 0;
    const user = this.getUser();
    
    // Calculate current usage
    if (this.isClient) {
      for (let key in localStorage) {
        if (key.startsWith(this.storagePrefix)) {
          totalSize += localStorage[key].length;
        }
      }
    }
    
    // Convert to GB and determine limit based on plan
    const usedGB = totalSize / (1024 * 1024 * 1024);
    let limitGB = 0.1; // 100MB for free/starter
    
    if (user?.plan === 'professional') limitGB = 100;
    if (user?.plan === 'enterprise') limitGB = 1000;
    
    return {
      used: usedGB,
      limit: limitGB,
      percentage: Math.min((usedGB / limitGB) * 100, 100)
    };
  }
  
  // Upgrade Prompts
  shouldShowUpgradePrompt(): boolean {
    const usage = this.getStorageUsage();
    const user = this.getUser();
    
    return usage.percentage > 80 && user?.plan === 'starter';
  }
  
  // Export/Backup for Migration
  exportAllData(): string {
    const userData = this.getUser();
    const dashboards = this.getDashboards();
    
    return JSON.stringify({
      user: userData,
      dashboards: dashboards,
      exportedAt: new Date().toISOString(),
      version: '1.0.0'
    });
  }
  
  importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.user) this.saveUser(data.user);
      if (data.dashboards) {
        data.dashboards.forEach((dashboard: DashboardData) => {
          this.saveDashboard(dashboard);
        });
      }
      
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }
}

// Singleton instance
export const storage = new StorageManager();

// React hooks for easy integration
export const useStorage = () => {
  return {
    storage,
    usage: storage.getStorageUsage(),
    shouldUpgrade: storage.shouldShowUpgradePrompt()
  };
};