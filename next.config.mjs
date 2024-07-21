/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	poweredByHeader: false,
	// pageExtensions: ["page.tsx"], // exclude page test files (*.test.tsx) from being considered a page by next
	reactStrictMode: true,
	// sentry: {
	//   disableLogger: true,
	//   hideSourceMaps: true,
	//   widenClientFileUpload: true,
	// },
	transpilePackages: [],
};

export default nextConfig;
