# JinishPotro Website

# API's

- User Authentication

  - /api/v1/user (GET)
  - /api/v1/login (POST)
  - /api/v1/signup (POST)

- Categoriy & Product Routes
  - /api/v1/categoriy (POST)
  - /api/v1/categoriy/product (PUT)

## Demo Data

- Categoriy

  - /api/v1/categoriy (POST)
    {
    "name": "categoriy 1",
    "title": "categoriy 1 Title",
    "detail": "categoriy 1 Details",
    "photo": "categoriy1.jpg"
    }

- product
  - /api/v1/categoriy/product (PUT)
    {
    "categoriyId": "Categoriy ID Here",
    "name": "product 1",
    "title": "product 1 Title",
    "detail": "product 1 Details",
    "photo": "product.jpg"
    }
