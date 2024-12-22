import ViteRestart from "vite-plugin-restart";
import mkcert from "vite-plugin-mkcert";

export default ({ command }) => ({
	base: command === "serve" ? "" : "/dist/",
	publicDir: "non-existent-path",
	build: {
		manifest: true,
		outDir: "./web/dist/",
		rollupOptions: {
			input: {
				app: "./src/js/main.js",
				styles: "./src/css/main.css",
			},
		},
	},
	server: {
		host: "0.0.0.0",
		port: 3002,
		strictPort: true,
		https: false,
	},
	plugins: [
		mkcert(),
		ViteRestart({
			reload: ["./templates/**/*"],
		}),
	],
});
