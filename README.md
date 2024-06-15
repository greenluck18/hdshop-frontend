# HDShop Frontend

This is the frontend repository for HDShop, an e-commerce web application.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The HDShop Frontend is built using [React](https://reactjs.org/) and [Redux](https://redux.js.org/). It provides a user-friendly interface for customers to browse and purchase products from the HDShop platform.

## Features

- Browse products by category
- Search for products
- Add products to cart
- Checkout and place orders
- User authentication and account management

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:greenluck18/hdshop-frontend.git
    ```

2. Install the dependencies:

    ```bash
    cd hdshop-frontend
    npm install
    ```

3. Configure the environment variables:

    - Create a `.env` file in the root directory
    - Add the necessary environment variables (e.g., API endpoint, authentication credentials)

## Development usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to access the HDShop frontend.

## Production usage

1. Build the production version:

    ```bash
    npm run build
    ```

2. Copy build files to Nginx directory '/var/www/html':

    ```bash
    ./nginx-deploy.sh
    ```
