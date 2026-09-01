# Eshopperz — Machine Learning-Based Retail Web Application

Eshopperz is a full-stack, AI-powered e-commerce platform built as my final year project (7SENG013W) for the MSc Software Engineering (Conversion) at the University of Westminster, supervised by Dr Hamed Hamzeh. It combines a secure, scalable backend with a real-time machine learning recommendation engine to deliver a personalised shopping experience.

## Overview

The goal of the project was to build an end-to-end e-commerce system that goes beyond a standard online store by using machine learning to personalise product recommendations in real time, while keeping the platform secure, modular, and easy to maintain.

The system is split into three main parts that communicate as one platform:

- **Backend API** — ASP.NET Core, handling authentication, product/category/cart/order management, and secure transactions.
- **Frontend** — React, TypeScript, and Vite, providing a fast and responsive shopping interface.
- **Recommendation Engine** — a Python/Flask service that serves live, personalised product recommendations based on user behaviour.

## Key Features

- **Secure authentication** — registration with email verification, JWT-based login, and role-based access control (customer vs. admin) via ASP.NET Core Identity.
- **Product & category management** — full CRUD for products and categories, with admin-only authorisation for inventory changes.
- **Shopping cart & checkout** — add/update/remove items with live total recalculation, address entry, order review, and payment confirmation.
- **Order management** — full order lifecycle from placement through payment to status tracking.
- **ML-based product recommendations** — real-time, personalised suggestions on product pages, powered by a trained Random Forest model.
- **Structured logging** — Serilog integration for event tracking and error monitoring.
- **CI/CD deployment** — GitHub Actions pipeline deploying to Azure App Service.

## Machine Learning Approach

The recommendation engine was built from a transactional dataset from a UK-based retailer, following a full ML pipeline:

1. **Data collection** — user behaviour (clicks, views, cart additions), transaction history, product attributes, and reviews/ratings.
2. **Pre-processing** — cleaning, normalisation, one-hot encoding of categorical features, and timestamp feature extraction using Pandas, NumPy, and Scikit-Learn.
3. **Feature engineering** — aggregated behavioural features (e.g. purchase recency and frequency) to improve model generalisation.
4. **Model comparison** — K-Nearest Neighbours (KNN), Support Vector Machines (SVM), Random Forest, and K-Means clustering were trained and evaluated on an 80/20 train-test split, with hyperparameters tuned via grid search.
5. **Model selection** — **Random Forest** was selected based on accuracy, precision, recall, and F1-score, offering the best balance of predictive performance and computational cost on a dataset with mixed categorical and numerical features.
6. **Deployment** — the trained model was served through a Flask application, tested via Postman, and integrated with the ASP.NET Core backend and React frontend to deliver live recommendations.

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | ASP.NET Core 8.0, Entity Framework Core, ASP.NET Identity, JWT Authentication |
| Frontend | React, TypeScript, Vite |
| Recommendation Engine | Python, Flask, Scikit-Learn, Pandas, NumPy, Jupyter Notebook |
| Database | SQLite |
| Logging | Serilog |
| Deployment | Microsoft Azure, GitHub Actions (CI/CD) |
| API Testing | Postman |

## Architecture

The platform follows a modular, service-oriented architecture:

- The **ASP.NET Core backend** exposes REST APIs for products, categories, carts, orders, customers, and roles, secured with JWT and role-based authorisation.
- The **React frontend** consumes these APIs and the recommendation service to render the shopping experience.
- The **Flask recommendation service** runs independently, exposing an endpoint that returns personalised product suggestions, which the backend/frontend call to display real-time recommendations on product pages.

## Testing

The project was tested using a combination of:

- **Black box testing** — verifying the system meets functional requirements without inspecting internal code.
- **Unit testing** — isolated tests for individual components and functions.
- **Integration testing** — verifying that the backend, frontend, and recommendation engine interact correctly end to end.
- **Model evaluation** — accuracy, precision, recall, F1-score, and confusion matrices for each candidate ML model, with API-level testing of the deployed recommendation model via Postman.

## Project Structure

- `Controllers/` — API controllers (Products, Categories, Carts, Orders, Customers, Roles, Account)
- `Models/` — data models and entity definitions
- `Migrations/` — Entity Framework Core database migrations
- `Logs/` — Serilog output for event tracking and error recording
- Recommendation engine notebooks/scripts — data pre-processing, model training, and Flask deployment code

## Getting Started

1. Clone the repository.
2. Ensure the required environment is set up (SQLite, environment variables for email service and JWT).
3. Install backend dependencies and run database migrations.
4. Install frontend dependencies and start the React app.
5. Set up the Python environment and run the Flask recommendation service.
6. Run all three components together to use the full platform.

## Author

**Md Forhadul Islam**
MSc Software Engineering (Conversion), University of Westminster
Supervisor: Dr Hamed Hamzeh
