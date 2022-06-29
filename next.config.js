/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,

  env: {
    SUPABASE_URL: 'https://toekfuvfpfhxnulgtyzi.supabase.co',
    SUPABASE_KEY:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZWtmdXZmcGZoeG51bGd0eXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY1MDQ2NDEsImV4cCI6MTk3MjA4MDY0MX0.FRrj5KWFPoVUMwfC2zVLfy70gbHF6aOPOV3F3FuANlw',
  },
};
