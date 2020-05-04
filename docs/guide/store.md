### Store
----------

The ```src/store/modules``` directory is where shared data lives.

There are two kind of data :

### Registrations and Processes

For each, there is two **actions** using Get method :
- get data **by filter**
- get data **by one id**

The **filter**'s action enables to fetch data using a criteria selected by the user in the view and matching the API's structur. By default, the fetch uses the *subscriber msidsn*'s criteria to fetch data.

The URL for the Get method is defined in an environment variable in a .env file at the root of the project