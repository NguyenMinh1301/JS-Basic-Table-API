# JS Basic Table API Demo

A lightweight, beginner‑friendly project created while I learn the fundamentals of JavaScript. It fetches data from a tiny JSON API and renders that data into an HTML table—nothing fancy, just pure learning by doing!

---

## Why This Exists
I wanted a simple playground to practise:

* **Vanilla JavaScript** (no frameworks)
* **Fetch API** for REST calls
* **DOM manipulation** to build a dynamic table
* **Modular file structure** & basic Node toolchain

If you are also starting out with JS, feel free to poke around and learn with me.

---

## Features
| # | Feature | Description |
|---|---------|-------------|
| 1 | **Small JSON API** | Pulls mock or public‑demo data (e.g. users, posts) via `fetch()` |
| 2 | **Dynamic Table**   | Builds table rows & cells on the fly without extra libraries |
| 3 | **Zero Dependencies in Browser** | Only vanilla JS + a sprinkle of CSS |
| 4 | **Clean Code Comments** | Every step explained so beginners can follow along |

---

## Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Dev Tools:** Node.js ≥ 18, npm, [live‑server](https://www.npmjs.com/package/live-server) for hot reload

---

## Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (the LTS version is fine)

### Installation & Run
```bash
# 1. Clone the repo
git clone https://github.com/<your‑username>/js-table-api-demo.git
cd js-table-api-demo

# 2. Install dev dependencies (only live‑server)
npm install

# 3. Launch a local dev server
npm start
# or
npx live-server
```
Then open `http://localhost:3000` (or the port shown) in your browser.

---

## Usage
1. **Choose an API:** Open `src/api.js` and set `const API_URL` to any small JSON endpoint you like (e.g. `https://jsonplaceholder.typicode.com/users`).
2. **Map Columns:** Edit `src/table.js` to match the fields you want displayed.
3. **Run** `npm start`, refresh the browser, and watch the table fill itself.

---

## Contact
- **Email**: nguyenminh1301.dev@gmail.com
- **GitHub**: [NguyenMinh1301](https://github.com/NguyenMinh1301)

---

This project is part of my self-study and learning path in mastering JavaScript. Any feedback or suggestions are warmly welcome!
