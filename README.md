# Kitchen Accessories

Ladle & Co. is a bilingual kitchen-accessories storefront built with Next.js. It is a frontend practice project that combines a curated artisan-kitchenware interface with product data from [DummyJSON](https://dummyjson.com/).

The application demonstrates:

- Product discovery, search, sorting, pagination, and product details
- A persistent shopping cart with quantity controls, gift wrapping, promotions, shipping progress, and order totals
- A multi-step checkout experience with shipping, payment, validation, and an order-confirmation modal
- English and Vietnamese translations powered by `next-intl`
- Responsive pages, light/dark theme support, loading states, and toast notifications
- Mock authentication and profile-management flows backed by DummyJSON

> This is a learning and demonstration project. It does not process real payments, create real orders, or provide production-grade authentication.

## Tech Stack

- **Next.js 16.3.5** with the App Router and Turbopack/Webpack development mode
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **NextUI** for selected interactive UI components
- **next-intl** for locale-aware routing and translations
- **Sonner** for toast notifications
- **Lucide React** and Material Symbols for icons
- **DummyJSON** as the external mock API
- **ESLint** and the Next.js ESLint configuration

## Requirements

- Node.js 20 or newer is recommended
- npm
- Internet access when loading product or authentication data from DummyJSON

## Getting Started

### Clone and install

```bash
git clone https://github.com/HiImGrass/KitchenAccessories-Frontend.git
cd KitchenAccessories-Frontend
npm install
```

### Start the development server

```bash
npm run dev
```

The development server runs at:

```text
http://localhost:3000
```

The `dev` script uses Webpack:

```json
"dev": "next dev --webpack"
```

### Validate and run a production build

```bash
npm run lint
npm run build
npm run start
```

`npm run start` serves the production build after `npm run build` has completed.

## Environment Variables

The application works with defaults, but the following variables can be used to configure API URLs:

```env
NEXT_PUBLIC_DUMMY_JSON_URL=https://dummyjson.com
NEXT_PUBLIC_DEV_URL=http://localhost:3000
NEXT_PUBLIC_PRODUCTION_URL=https://your-production-domain.example
INTERNAL_API_URL=http://localhost:3000
```

These values are read by [`lib/checkEnvironment.ts`](./lib/checkEnvironment.ts). `NEXT_PUBLIC_DUMMY_JSON_URL` is the main optional override for the external DummyJSON base URL.

## Routes

All application pages use a locale prefix. The supported locales are `vi` and `en`, and Vietnamese is the default locale.

| Route | Purpose |
| --- | --- |
| `/vi` or `/en` | Home page with hero, collections, featured products, brand ethos, and community sections |
| `/vi/products` or `/en/products` | Product catalog with search, sorting, pagination, and loading/empty states |
| `/vi/products/[id]` or `/en/products/[id]` | Product details, gallery, pricing, stock, and add-to-cart actions |
| `/vi/kitchen-accessories` or `/en/kitchen-accessories` | Redirects to the product catalog |
| `/vi/about` or `/en/about` | Brand story, manifesto, guilds, sourcing, metrics, care, and CTA sections |
| `/vi/cart` or `/en/cart` | Shopping cart, promotion code, gift wrapping, shipping progress, and order summary |
| `/vi/checkout` or `/en/checkout` | Customer contact, shipping address, payment form, order summary, and checkout submission |
| `/vi/profile` or `/en/profile` | Demo profile, account actions, cart summary, and order history |
| `/vi/login` or `/en/login` | DummyJSON login form |
| `/vi/sign-up` or `/en/sign-up` | Demo sign-up form |

Locale routing is configured in [`i18n/routing.ts`](./i18n/routing.ts) and applied globally by [`proxy.ts`](./proxy.ts).

## Internationalization

Translations are stored in:

- [`lang/vi.json`](./lang/vi.json)
- [`lang/en.json`](./lang/en.json)

The app loads messages with [`i18n/request.ts`](./i18n/request.ts) and wraps the application with `NextIntlClientProvider` in [`app/[locale]/layout.tsx`](./app/[locale]/layout.tsx).

Use:

- `useTranslations()` in Client Components
- `getTranslations()` in Server Components and metadata functions
- `routing.locales` when adding or validating supported locales

When adding a translation key, add the same key to both locale files. Runtime product values such as product names, descriptions, brands, and API-provided warranty/shipping text remain data-driven and are not rewritten as static UI translations.

## Main Features

### Home and brand experience

The home page is composed from reusable sections in [`components/HomeComponent`](./components/HomeComponent):

- Hero and featured collection
- Curated kitchen categories
- Featured product list
- Ladle & Co. brand ethos
- Community/social proof content

The About page in [`components/AboutComponent`](./components/AboutComponent) presents the brand manifesto, founder and guild information, sourcing timeline, metrics, care guidance, and call to action.

### Product catalog

Catalog data is loaded through [`lib/dummyjson.ts`](./lib/dummyjson.ts) from the DummyJSON `kitchen-accessories` category. The catalog applies search and sorting locally, then paginates the result.

Supported catalog query parameters include:

```text
/en/products?q=spoon&sort=price_asc&skip=0&limit=12
```

Product detail pages fetch an individual product and related products from DummyJSON. The remote image hosts used by the app are configured in [`next.config.ts`](./next.config.ts).

### Cart

Cart state is managed by [`context/CartContext.tsx`](./context/CartContext.tsx) and exposed through [`hooks/useCart.ts`](./hooks/useCart.ts).

The cart supports:

- Add, increase, decrease, update, and remove item actions
- Local persistence under the `ladle-cart-items` browser storage key
- Gift wrapping
- `AUTUMN10` and `ARTISAN20` demo promotion codes
- Free-shipping progress and standard shipping calculation
- Estimated tax and final total calculation
- Toast feedback for cart and promotion actions

Cart data constants are defined in [`lib/cartData.ts`](./lib/cartData.ts). Existing saved cart items are migrated with translation keys when they are restored from local storage.

### Checkout

Checkout UI is composed from [`components/CheckoutComponent`](./components/CheckoutComponent) and state is managed by [`hooks/useCheckout.ts`](./hooks/useCheckout.ts).

The demo flow includes:

1. Customer email, phone, and newsletter preference
2. Shipping name, address, region, postal code, and delivery instructions
3. Standard or express shipping selection
4. Card, Apple Pay, and PayPal presentation states
5. Client-side required-field validation
6. Simulated secure-processing delay
7. Generated demo order reference and estimated delivery date
8. Success modal with receipt and order details

No payment provider or order backend is called. If the cart is empty, checkout uses the sample items in [`lib/checkoutData.ts`](./lib/checkoutData.ts) as a design fallback.

### Authentication and profile

The login flow calls DummyJSON's `/auth/login` endpoint. Profile updates call DummyJSON's mock `/users/[id]` PATCH endpoint. The profile area is intended for UI and API-integration practice; it does not implement a complete session, authorization, or secure account system.

## Data Sources and API Operations

The external base URL defaults to:

```text
https://dummyjson.com
```

The app uses these operations:

| Operation | Usage |
| --- | --- |
| `GET /products/category/kitchen-accessories` | Catalog and home product data |
| `GET /products/{id}` | Product detail data |
| `GET /products/category/{category}` | Related products |
| `POST /auth/login` | Demo login |
| `PATCH /users/{id}` | Demo profile update |

The API helpers are centralized in [`lib/dummyjson.ts`](./lib/dummyjson.ts). Product fetches use Next.js revalidation where appropriate.

## Project Structure

```text
KitchenAccessories-Frontend/
├── app/
│   ├── [locale]/
│   │   ├── (auth)/login/
│   │   ├── (auth)/sign-up/
│   │   ├── about/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── kitchen-accessories/
│   │   ├── products/
│   │   └── profile/
│   ├── global-not-found.tsx
│   ├── globals.css
│   └── icon.svg
├── components/
│   ├── AboutComponent/
│   ├── CartComponent/
│   ├── CatalogComponent/
│   ├── CheckoutComponent/
│   ├── DetailsComponent/
│   ├── HomeComponent/
│   ├── products/
│   ├── profile/
│   ├── navbar/
│   └── providers/
├── context/
│   ├── CartContext.tsx
│   └── ProductsContext.tsx
├── hooks/
│   ├── useCart.ts
│   └── useCheckout.ts
├── i18n/
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
├── lang/
│   ├── en.json
│   └── vi.json
├── lib/
│   ├── cartData.ts
│   ├── checkoutData.ts
│   ├── checkEnvironment.ts
│   └── dummyjson.ts
├── types/
│   ├── cart.ts
│   ├── checkout.ts
│   ├── product.ts
│   └── profile.ts
├── next.config.ts
├── proxy.ts
├── package.json
└── README.md
```

## Application Architecture

```text
DummyJSON
   ↓
lib/dummyjson.ts
   ↓
Server pages / client contexts
   ↓
Reusable components
   ↓
Localized responsive UI
```

- Server pages fetch catalog and product data before rendering.
- Client Components handle form state, cart actions, theme state, toasts, and interactive controls.
- `CartProvider` is mounted in the locale layout through [`components/providers/Providers.tsx`](./components/providers/Providers.tsx).
- `next-intl` loads the locale messages for every request.
- Tailwind CSS utility classes and the design tokens in [`app/globals.css`](./app/globals.css) provide the visual system.

## Development Notes

- Keep UI text in both locale files instead of adding new hard-coded strings.
- Keep external API access in `lib/` rather than calling DummyJSON directly from presentational components.
- Preserve the locale prefix when creating links between pages.
- Use the existing cart and checkout types in [`types`](./types) when adding fields.
- Remote images must use a hostname allowed in [`next.config.ts`](./next.config.ts).
- The current checkout, auth, profile, promotion, and order flows are intentionally simulated.

## Known Limitations

- DummyJSON is a mock data source and can change or fail independently of the application.
- Payments are visual/demo states only; no card data is sent to a payment processor.
- Checkout orders are generated in memory and are not persisted to a backend.
- Authentication is not a complete secure session implementation.
- Cart persistence is browser-local and is not synchronized between devices.
- Product and API-provided content is primarily English because it originates from DummyJSON.
- There is no automated unit or end-to-end test suite configured in `package.json`; use `npm run lint` and `npm run build` as the current baseline checks.

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next-intl Documentation](https://next-intl.dev/)
- [NextUI Documentation](https://nextui.org/)
- [DummyJSON Documentation](https://dummyjson.com/docs)

## License and Purpose

This repository is maintained as a personal educational project for practicing:

**Next.js + React + TypeScript + Tailwind CSS + internationalization + REST API integration**

The product content and mock account/order behavior should not be treated as a real commercial storefront.
