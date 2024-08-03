import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { html } from "@elysiajs/html";
import { ProductsDatabase } from "./database";

const VIEWS_PATH = `${import.meta.dir}/../public/views`;
const PORT = 3000;

// Create and configure the app
const app = new Elysia()
  .use(html())
  .use(staticPlugin({ prefix: "/" }))
  .decorate("db", new ProductsDatabase())
  .get("/", () => Bun.file(`${VIEWS_PATH}/home.html`))
  .get("/add-product", () => Bun.file(`${VIEWS_PATH}/add-product.html`))
  .get("/edit-product", () => Bun.file(`${VIEWS_PATH}/edit-product.html`));

app.listen(PORT, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
