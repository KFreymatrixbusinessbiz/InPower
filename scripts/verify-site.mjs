import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const root = resolve("public");
const pages = readdirSync(root).filter((name) => extname(name) === ".html");
const failures = [];
const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");

for (const page of pages) {
  const html = readFileSync(join(root, page), "utf8");
  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const reference = match[1];
    if (/^(?:https?:|mailto:|tel:|#|data:|javascript:)/.test(reference)) continue;
    const path = reference.split(/[?#]/)[0];
    if (path && !existsSync(join(root, path))) failures.push(`${page}: missing ${reference}`);
  }
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) failures.push(`${page}: expected one h1, found ${h1Count}`);
  if (!/<meta\s+name=["']description["']/.test(html)) failures.push(`${page}: missing description`);
  if (page !== "404.html") {
    if (!/rel=["']canonical["']/.test(html)) failures.push(`${page}: missing canonical URL`);
    if (!/property=["']og:title["']/.test(html)) failures.push(`${page}: missing Open Graph title`);
    if (!/property=["']og:image["']/.test(html)) failures.push(`${page}: missing Open Graph image`);
    if (!/name=["']twitter:card["']/.test(html)) failures.push(`${page}: missing Twitter card`);
    if (!/class=["'][^"']*skip-link/.test(html)) failures.push(`${page}: missing skip navigation`);
    if (!sitemap.includes(page === "index.html" ? "https://inpower.biz/</loc>" : `https://inpower.biz/${page}</loc>`)) failures.push(`${page}: missing from sitemap`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${pages.length} InPower pages.`);
