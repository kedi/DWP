# User Manager

User manager is the manager that is connected with base client and makes your work flow easier. To manage and perform actions on this manager use:

`<client>.users`

No that will return to client because I haven't set anything for that yet **but!**, let's continue:

`<client>.users.get("userID")`

Returns to a user's information.

The **get** function on the User Manager requires only 1 parameter, the user ID. With doing that, you constantly get connected to the User Class which includes whole information about the User. The keys on that object are not changed, it stays same with how it is requested from Discord API. Please use `Object.keys()` on the specified user to see what are the things you can access with that user information.


# Methods

Nothaaang yet!