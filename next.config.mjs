/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // هذا السطر يجبر Next.js على تصدير الموقع كاملاً إلى ملفات HTML ثابتة
  images: {
    unoptimized: true, // مهم جداً إذا كنت تستخدم صور لتجنب أخطاء البناء
  },
};

export default nextConfig;
