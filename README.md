# bluer-denim-product-page-apex
# Bluer Store - Custom Shopify Product Page Implementation

This repository contains a custom-built Shopify theme developed as part of a Full Stack Engineer / Shopify Developer assignment. The project focuses on creating a high-performance, aesthetically pleasing, and functional product page for the "Bluer" brand.

**##  Live Demo
You can view the live implementation here:**
**[View Live Product Page](https://bluer-store-2.myshopify.com/products/black-handwork-denim-dress)**

---

## ✨ Key Features

### 1. Custom Product Layout
- **Dynamic Image Gallery:** Implemented a grid-based media gallery that showcases multiple product angles (front, back, and detail shots).
- **Sticky Sidebar:** The product information (Title, Price, Variants) remains pinned to the viewport for better UX during scrolling.
- **Fade-in Animations:** Smooth CSS entry animations to provide a premium "boutique" feel.

### 2. Functional Cart System
- **AJAX-ready Variant Selection:** Real-time price and ID updates when switching between sizes (XS, S, M, L, XL).
- **Custom Cart Template:** A dedicated, clean Liquid-based cart page (`/cart`) that correctly displays product thumbnails, selected variants, and subtotal calculations.

### 3. Smart Recommendations
- **Product Recommendation Grid:** A dynamic section at the footer of the product page that pulls related items from the store collection using Liquid logic.

### 4. Responsive Design
- Optimized for mobile, tablet, and desktop views.
- **Mobile Adjustments:** Stacked layout for smaller screens to ensure the "Add to Cart" button remains easily accessible.

---

## 🛠️ Technical Stack
- **Liquid:** Shopify’s templating language for dynamic data rendering.
- **CSS3:** Custom styling using Flexbox and CSS Grid.
- **JavaScript (Vanilla):** Logic for variant selection, price formatting, and accordion toggles.
- **Shopify GitHub Integration:** Continuous deployment workflow via GitHub sync.

---

## 📂 Folder Structure
- `/layout`: Contains `theme.liquid` with the global black footer implementation.
- `/sections`: Contains `main-product.liquid`, the core custom logic for the product page and recommendations.
- `/templates`: Contains the custom `cart.liquid` template.

---

## 📝 How to Review
1. Open the **Live Demo** link provided above.
2. Select a **Size** and observe the price update.
3. Click **Add to Cart** to see the product successfully transfer to the cart page.
4. Scroll to the bottom to view the **Recommended Products** and **Custom Footer**.

**Developer:** Sujithra  
**Date:** March 22, 2026
