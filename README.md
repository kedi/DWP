## Discord API Wrapper for NodeJS
The -probably- hardest way to interact with Discord API while using a NodeJS library.

![GitHub stars](https://img.shields.io/github/stars/towasty/discordwrapper)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/towasty/discordwrapper)
![GitHub](https://img.shields.io/github/license/towasty/discordwrapper)
![GitHub package.json version](https://img.shields.io/github/package-json/v/towasty/discordwrapper)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/towasty/discordwrapper)

To start using this wrapper, install the library:

`npm install @towasty/discordwrapper@1.0.0`


Bring the library & call the class into your code:


`const DiscordWrapper = require("@towasty/discordwrapper")`

`const client = new DiscordWrapper()`

Here you go, now you need to login to the client with your bot's token:

`client.login("token")`

Now you are all set. Please go to [docs](https://github.com/towasty/discordwrapper/tree/master/docs/Managers) in the repistory and see Managers for more info on how you can do stuff. If you are done here, your code should look like:

```js
const DiscordWrapper = require("@towasty/discordwrapper")
const client = new DiscordWrapper()
client.login("token")
```

If you have any questions, feel free to DM me via Discord [Toasty#0001](https://discord.com/users/478307244509888532)!

