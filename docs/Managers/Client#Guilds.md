# Guild Manager

Guild manager is the manager that is connected with base client and makes your work flow easier. To manage and perform actions on this manager use:

`<client>.guilds`

No that will return to client because I haven't set anything for that yet **but!**, let's continue:

`<client>.guilds.get("guildID")`

Returns to a guild's information.

The **get** function on the Guild Manager requires only 1 parameter, the guild ID. With doing that, you constantly get connected to the Guild class which includes whole information about a guild. The keys on that object are not changed, it stays same with how it is requested from Discord API. Please use `Object.keys()` on the specified guild to see what are the things you can access with that guild information.


# Methods

`.leave()`

Leaves the guild. Returns to guild's information after leaving.