/**
 * Environment Variable Validation
 * Validates required environment variables at build time
 */

export const validateEnv = () => {
  const required = [
    'NEXT_PUBLIC_WEB3FORMS_KEY',
    'NEXT_PUBLIC_HCAPTCHA_SITE_KEY',
  ];

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `❌ Missing required environment variables:\n${missing.map(k => `  - ${k}`).join('\n')}\n\n` +
      `Please add these to your .env.local file.\n` +
      `See .env.example for reference.`
    );
  }

  console.log('✅ All required environment variables are configured');
};

/**
 * Get environment variable with validation
 */
export const getEnv = (key: string): string => {
  const value = process.env[key];
  
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  
  return value;
};

/**
 * Sanitize user input
 * Removes potentially dangerous characters and limits length
 */
export const sanitizeInput = (input: string, maxLength: number = 1000): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .slice(0, maxLength); // Limit length
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
