// This file contains Supabase configuration information
// These values are automatically provided by the Figma Make environment when Supabase is connected

// Comprehensive environment variable detection for Figma Make
function detectEnvironmentVariables(): { url: string; anonKey: string } {
  const envSources: Array<() => { url?: string; anonKey?: string }> = [
    // Standard process.env access
    () => {
      try {
        return {
          url: process?.env?.SUPABASE_URL,
          anonKey: process?.env?.SUPABASE_ANON_KEY
        };
      } catch {
        return {};
      }
    },
    
    // Global process access
    () => {
      try {
        const globalProcess = (globalThis as any)?.process;
        return {
          url: globalProcess?.env?.SUPABASE_URL,
          anonKey: globalProcess?.env?.SUPABASE_ANON_KEY
        };
      } catch {
        return {};
      }
    },
    
    // Window process access
    () => {
      try {
        const windowProcess = (window as any)?.process;
        return {
          url: windowProcess?.env?.SUPABASE_URL,
          anonKey: windowProcess?.env?.SUPABASE_ANON_KEY
        };
      } catch {
        return {};
      }
    },
    
    // Direct global access
    () => {
      try {
        return {
          url: (globalThis as any)?.SUPABASE_URL,
          anonKey: (globalThis as any)?.SUPABASE_ANON_KEY
        };
      } catch {
        return {};
      }
    },
    
    // Direct window access
    () => {
      try {
        return {
          url: (window as any)?.SUPABASE_URL,
          anonKey: (window as any)?.SUPABASE_ANON_KEY
        };
      } catch {
        return {};
      }
    }
  ];

  // Try each source until we find valid values
  for (const getEnv of envSources) {
    const env = getEnv();
    if (env.url && env.anonKey) {
      return { url: env.url, anonKey: env.anonKey };
    }
  }

  return { url: '', anonKey: '' };
}

// Detect environment variables
const envVars = detectEnvironmentVariables();

// For debugging: log what we found
console.log('🔍 Environment Detection Results:', {
  foundUrl: !!envVars.url,
  foundAnonKey: !!envVars.anonKey,
  urlPreview: envVars.url ? `${envVars.url.substring(0, 30)}...` : 'not found',
  anonKeyPreview: envVars.anonKey ? `${envVars.anonKey.substring(0, 10)}...` : 'not found'
});

// Validate if we have real Supabase configuration
const isValidSupabaseUrl = envVars.url && envVars.url.includes('.supabase.co') && !envVars.url.includes('demo');
const isValidAnonKey = envVars.anonKey && envVars.anonKey.length > 20 && envVars.anonKey.startsWith('eyJ');

export const hasRealSupabaseConfig = isValidSupabaseUrl && isValidAnonKey;

// Set final values
export const projectId = isValidSupabaseUrl 
  ? envVars.url.split('//')[1]?.split('.')[0] || 'demo-project'
  : 'demo-project';

export const publicAnonKey = envVars.anonKey || 'demo-anon-key';

// Final URL for API calls
const supabaseUrl = envVars.url || 'https://demo-project.supabase.co';

// Log final configuration status
if (hasRealSupabaseConfig) {
  console.log('✅ Supabase configuration loaded successfully');
  console.log('🔗 Project ID:', projectId);
  console.log('🔑 Anon key loaded:', publicAnonKey.substring(0, 20) + '...');
} else {
  console.warn('⚠️  Using demo Supabase configuration. Backend features will use mock data.');
  console.log('🔧 Environment variables status:', {
    SUPABASE_URL: envVars.url ? 'found' : 'missing',
    SUPABASE_ANON_KEY: envVars.anonKey ? 'found' : 'missing'
  });
  console.log('💡 For real bookings, please call: 9381625471');
}

// Export the full config for debugging
export const supabaseConfig = {
  url: supabaseUrl,
  projectId,
  anonKey: publicAnonKey,
  hasRealConfig: hasRealSupabaseConfig,
  envDetection: {
    originalUrl: envVars.url || 'not detected',
    originalAnonKey: envVars.anonKey ? envVars.anonKey.substring(0, 20) + '...' : 'not detected',
    isValidUrl: isValidSupabaseUrl,
    isValidAnonKey: isValidAnonKey
  }
};