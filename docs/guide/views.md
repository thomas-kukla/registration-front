### Views
--------

### Registrations and Processes
------------------------

Those two **views** display all *registrations* and *processes* as lists.

A search bar and a criteria's selector enables to looking for specific *registrations* and *processes*.

User can change the number of results on the page to display more or less.

- **Search Bar**

The **updated** hook launches HTPP request based on the content of the search bar. It triggers a *get method* in the store with a **filter** argument which is an object with two values : 

1. The searching

2. The criteria choosen by the user (*subscriber msisdn* by default).

- **Getters and Computed property**

The navigation guard in the router change the state as the route is selected. Then, the **getter** method retrieve the data stored.

**Computed properties** enable to display results on differents pages. They slice the array of data in blocks and display the block according to the number of results choosen for the current page.

### Process and Registration details page

This **view** display more specific informations about the *process* or the *registration* selected.
