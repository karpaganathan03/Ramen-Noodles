const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { getIstDateTime, validateEnquiry } = require("./contact-validation.js");

const ROOT = __dirname;
const MAX_BODY_BYTES = 16 * 1024;
const PUBLIC_FILES = new Set([
  "app.js",
  "contact-validation.js",
  "contact.html",
  "home-2.html",
  "index.html",
  "menu.html",
  "story.html",
  "styles.css",
]);
const CONTENT_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const sendJson = (response, status, payload) => {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
};

const readJsonBody = (request) =>
  new Promise((resolve, reject) => {
    let body = "";
    let tooLarge = false;
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      if (tooLarge) return;
      body += chunk;
      if (Buffer.byteLength(body, "utf8") > MAX_BODY_BYTES) {
        tooLarge = true;
        reject(Object.assign(new Error("Request body is too large."), { status: 413 }));
      }
    });
    request.on("end", () => {
      if (tooLarge) return;
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(Object.assign(new Error("Request body must be valid JSON."), { status: 400 }));
      }
    });
    request.on("error", reject);
  });

const serveStaticFile = (request, response, pathname) => {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    response.writeHead(400).end("Invalid URL path.");
    return;
  }

  const relativePath = decodedPath === "/" ? "index.html" : decodedPath.slice(1);
  const filePath = path.resolve(ROOT, relativePath);
  const resolvedRelativePath = path.relative(ROOT, filePath);
  if (
    !filePath.startsWith(`${ROOT}${path.sep}`) ||
    (!PUBLIC_FILES.has(resolvedRelativePath) &&
      resolvedRelativePath.split(path.sep)[0] !== "assets")
  ) {
    response.writeHead(403).end("Forbidden.");
    return;
  }

  const contentType = CONTENT_TYPES[path.extname(filePath).toLowerCase()];
  if (!contentType) {
    response.writeHead(404).end("Not found.");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      response.writeHead(404).end("Not found.");
      return;
    }
    response.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size,
    });
    fs.createReadStream(filePath).pipe(response);
  });
};

const createServer = (getNow = getIstDateTime) =>
  http.createServer(async (request, response) => {
    const requestUrl = new URL(request.url, "http://localhost");
    if (request.method === "POST" && requestUrl.pathname === "/api/enquiries") {
      if (!request.headers["content-type"]?.startsWith("application/json")) {
        sendJson(response, 415, { errors: { form: "Content-Type must be application/json." } });
        return;
      }

      try {
        const body = await readJsonBody(request);
        if (
          !body ||
          typeof body !== "object" ||
          typeof body.type !== "string" ||
          !body.data ||
          typeof body.data !== "object" ||
          Array.isArray(body.data)
        ) {
          sendJson(response, 400, { errors: { form: "Invalid enquiry request." } });
          return;
        }

        const errors = validateEnquiry(body.type, body.data, getNow());
        if (Object.keys(errors).length) {
          sendJson(response, 422, { errors });
          return;
        }
        sendJson(response, 200, { valid: true });
      } catch (error) {
        sendJson(response, error.status || 400, {
          errors: { form: error.message || "Unable to validate this enquiry." },
        });
      }
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD, POST" }).end("Method not allowed.");
      return;
    }
    serveStaticFile(request, response, requestUrl.pathname);
  });

if (require.main === module) {
  const host = process.env.HOST || "127.0.0.1";
  const port = Number(process.env.PORT || 3000);
  createServer().listen(port, host, () => {
    console.log(`Ramen & Noodles website available at http://${host}:${port}`);
  });
}

module.exports = { createServer };
