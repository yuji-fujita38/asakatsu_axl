 /** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production"
const repo = "asakatsu_axl" // ← リポジトリ名に揃える

const nextConfig = {
  output: "export",           // ★ GitHub Pages 用：静的エクスポート
  images: { unoptimized: true }, // next/imageを無効化（export互換）
  basePath: isProd ? `/${repo}` : "", // ★ サブパス配信
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,        // SPA系の404回避に有効
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}
 
 export default nextConfig
