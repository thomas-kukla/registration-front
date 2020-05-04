### Router

This project uses Vue Router which is initialize in ```src/router/index.js``` It contains all the routes of the application.

- **Navigation guards**

There are [**navigation guards**](https://router.vuejs.org/guide/advanced/navigation-guards.html) for *registrations* and *processes*'s **views** which call the **store** to fetch all *registrations* and *processes* before routes was rendering. 