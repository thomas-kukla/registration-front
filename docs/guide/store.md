### Store
----------

#### Registrations

There is two **actions** in *registrations* store using Get method :
- get registration by filter
- get registration by one id

"*By filter*" enables to fetch *registrations* using a criteria depending on the API and selected by the user on the *registrations list*'s view. By default, the fetch uses the *subscriber msidsn*'s criteria to fetch datas.

The URL for the Get method is defined in an environment variable in a .env file at the root of the project

There is also two **mutations** and two **getters** depending of the **action**, *by filter* or *by id*.

#### Processes

There is two **actions** in *processes* store using Get method :
- get processes by filter
- get process by one id

"*By filter*" enables to fetch *processes* using a criteria depending on the API and selected by the user on the *processes list*'s view. By default, the fetch uses the *subscriber msidsn*'s criteria to fetch datas.

The URL for the Get method is defined in an environment variable in a .env file at the root of the project

There is also two **mutations** and two **getters** depending of the **action**, *by filter* or *by id*.