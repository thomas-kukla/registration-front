## Views
---------
### Registrations

This **view** displays all *registrations*.

User can search *registrations* using the search bar and choose what criteria will be used for the search with the selector.

User can change the number of results on the page to display more or less registrations.

- Search Bar

The **updated** hook enables to launch HTPP request for each new character types in the search bar. This hook triggers a get method in the store with a **filter** argument wich is an object with two values : the search and the criteria choosen by the user wich is the *subscriber msisdn* by default.

- Registrations

There is a **navigation guard** in the **router** which enables to fetch all *registrations* before this rout was rendering. Then, a **getter** method in **computed properties** catch all datas. 
To display results on differents pages,we slice the array of registrations in blocks and display the block according to the number of the current page.

There are 4 **components** on this **view**.

**Dispatch** : enables to select a criteria for the get method and passed as an argument to the **updated** hook.

**Pagination** : enables to display blocks of registrations.

**Results** : enables to choose the number of results on a page.

**Registrations List** : enables to rendering the list of registrations.




#### Processes


#### Process


#### Registration
