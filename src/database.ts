import Database from "bun:sqlite";

export class ProductsDatabase {
  private db: Database;

  constructor() {
    this.db = new Database("Products.sqlite");
  }

  createTable() {
    return this.db.run(
      "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER)"
    );
  }
}
