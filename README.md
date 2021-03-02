# Sequelize Authentication

![](https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature-630x330.jpg)

## Overview

In this lesson, we'll learn to to integrate authentication into our express server. We'll implement password hashing, comparing, creating json web tokens, protecting routes and reading authorization credentials. Our api will allow users to `login`,`register` and protect certain endpoints from being accessed without being properly authorized.

## Getting Started

- Fork and Clone
- `npm install`
- `sequelize db:create`
- `sequelize db:migrate`
- `sequelize db:seed:all`
- `npm run dev`

## Creating Authentication/Authorization Middleware

We'll start by creating some middleware to handle our authentication and authorization flows. These functions will perform everything from hashing passwords to ensuring that a user is authorized to access a resource.
