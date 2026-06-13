import app from "./dist/server/server.js";
import { readFile, stat } from "node:fs/promises";
import { extname, normalize } from "node:path";

const clientDir = new URL("./dist/client/", import.meta.url);

const contentTypes = {
	".css": "text/css; charset=utf-8",
	".html": "text/html; charset=utf-8",
	".ico": "image/x-icon",
	".js": "text/javascript; charset=utf-8",
	".json": "application/json; charset=utf-8",
	".pdf": "application/pdf",
	".png": "image/png",
	".txt": "text/plain; charset=utf-8",
	".webmanifest": "application/manifest+json; charset=utf-8",
};

async function serveStaticAsset(request) {
	const url = new URL(request.url);
	const pathname = decodeURIComponent(url.pathname);
	const normalizedPath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
	const fileUrl = new URL(`.${normalizedPath}`, clientDir);

	if (!fileUrl.href.startsWith(clientDir.href)) {
		return new Response("Bad Request", { status: 400 });
	}

	try {
		const fileStat = await stat(fileUrl);

		if (!fileStat.isFile()) {
			return null;
		}

		const body = await readFile(fileUrl);
		const extension = extname(fileUrl.pathname);
		const contentType =
			contentTypes[extension] ?? "application/octet-stream";

		const headers = new Headers({ "content-type": contentType });

		if (url.pathname.startsWith("/assets/")) {
			headers.set("cache-control", "public, max-age=31536000, immutable");
		}

		return new Response(body, { headers });
	} catch (error) {
		if (error?.code === "ENOENT" || error?.code === "ENOTDIR") {
			return null;
		}

		throw error;
	}
}

Bun.serve({
	hostname: process.env.HOST ?? "0.0.0.0",
	port: Number.parseInt(process.env.PORT ?? "3000", 10),
	async fetch(request) {
		const staticResponse = await serveStaticAsset(request);

		if (staticResponse) {
			return staticResponse;
		}

		return app.fetch(request);
	},
});
