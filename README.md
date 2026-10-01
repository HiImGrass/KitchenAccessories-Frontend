# Kitchen Accessories 🥄

A **Kitchen Accessories e-commerce practice project** built with **Next.js**.

This project is mainly created for practicing modern web development concepts with **Next.js**, especially working with external APIs and building a frontend application based on data from **DummyJSON**.

## 🎯 Project Purpose

The main purpose of this project is **learning and practicing Next.js**, rather than building a production-ready e-commerce system.

The project focuses on:

* Practicing **Next.js App Router**
* Building reusable **React components**
* Working with **TypeScript**
* Styling with **Tailwind CSS**
* Fetching and displaying data from external APIs
* Understanding API integration and asynchronous data fetching
* Practicing dynamic routes and page rendering
* Managing loading and error states
* Working with product data from **DummyJSON**
* Organizing a scalable Next.js project structure

## 🛒 Project Overview

**Kitchen Accessories** is a frontend application for browsing kitchen-related products.

The application uses the **DummyJSON API** as its primary data source instead of a custom backend.

Users can interact with product data such as:

* Product list
* Product details
* Product categories
* Product search
* Product filtering
* Product images
* Product prices
* Product stock information

> This project does not focus on implementing a real payment system or production-level e-commerce backend. The main goal is to practice frontend development and API integration with Next.js.

## 🧰 Technologies

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

### API

* **DummyJSON**

### Development Tools

* **Node.js**
* **npm**
* **ESLint**
* **Git / GitHub**

## 🔌 API

The project uses **DummyJSON** as a mock REST API.

Main API:

```text
https://dummyjson.com
```

Some endpoints used in the project may include:

```text
GET /products
GET /products/{id}
GET /products/categories
GET /products/category/{category}
GET /products/search?q={query}
```

Example:

```text
https://dummyjson.com/products
```

The API provides product information that is used to build the application's product listing and detail pages.

For more information, see the DummyJSON documentation:

https://dummyjson.com/docs

## 📁 Project Structure

The project follows the Next.js App Router structure.

```text
kitchen-accessories/
├── app/
│   ├── ...
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   └── ...
│
├── lib/
│   └── ...
│
├── public/
│   └── ...
│
├── types/
│   └── ...
│
├── .gitignore
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

The structure may change during development as new features and Next.js concepts are practiced.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HiImGrass/KitchenAccessories-Frontend.git
```

### 2. Navigate to the project

```bash
cd kitchen-accessories
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

in your browser.

## 📚 What I Am Practicing

This project is mainly used to explore and practice the following Next.js concepts.

### Next.js

* App Router
* Pages and layouts
* Nested routes
* Dynamic routes
* Server Components
* Client Components
* Data fetching
* Loading UI
* Error handling
* Metadata
* Image optimization
* Font optimization

### React

* Functional components
* Props
* State
* Hooks
* Component composition
* Client-side interactions

### TypeScript

* Interfaces and types
* API response types
* Props typing
* Function typing
* Type-safe data handling

### API Integration

A major part of this project is learning how to work with external APIs.

The application fetches data from DummyJSON and transforms that data into UI components.

For example:

```text
DummyJSON API
      ↓
   Fetch Data
      ↓
 TypeScript Types
      ↓
 React / Next.js Components
      ↓
      UI
```

## 🔎 Main Features

The project may include the following features as development progresses:

* [ ] Display kitchen products
* [ ] Product detail page
* [ ] Product categories
* [ ] Search products
* [ ] Filter products
* [ ] Sort products
* [ ] Pagination
* [ ] Loading states
* [ ] Error states
* [ ] Responsive UI
* [ ] Reusable product components
* [ ] API data fetching
* [ ] Dynamic product routes

Features will be added progressively while practicing different Next.js concepts.

## 🧪 Development Goal

This repository is primarily a **learning project**.

Instead of focusing on business logic, authentication, payment processing, or building a custom backend, the project focuses on understanding how a modern Next.js application works from the frontend perspective.

The main development flow is:

```text
Next.js
   ↓
React Components
   ↓
API Requests
   ↓
DummyJSON
   ↓
Product Data
   ↓
UI Rendering
```

## 📖 Resources

### Next.js

https://nextjs.org/docs

### React

https://react.dev/

### TypeScript

https://www.typescriptlang.org/docs/

### Tailwind CSS

https://tailwindcss.com/docs

### DummyJSON

https://dummyjson.com/docs

## 📌 Notes

This project is developed for **educational and practice purposes**.

The product information is provided by DummyJSON and is not intended to represent a real online store.

The implementation may change frequently as new Next.js features and concepts are explored.

## 👨‍💻 Development

Built as a personal project for practicing:

**Next.js + React + TypeScript + Tailwind CSS + REST API**

---

⭐ Learning by building.
