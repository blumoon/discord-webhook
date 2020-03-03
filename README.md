# @blumoon/discord-webhook
[![NPM Version](https://badge.fury.io/js/%40blumoon%2Fdiscord-webhook.svg)](https://www.npmjs.com/@blumoon/discord-webhook)
[![Dependency Status](https://david-dm.org/blumoon/discord-webhook.svg)](https://david-dm.org/blumoon/discord-webhook)
[![Known Vulnerabilities](https://snyk.io/test/github/blumoon/discord-webhook/badge.svg)](https://snyk.io/test/github/blumoon/discord-webhook)

General use discord webhook

```
const DiscordHook = require('@blumoon/discord-webhook');
const hookStr = new DiscordHook('https://discordapp.com/api/webhooks/123456789123456789/aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoP');
const hook = new DiscordHook({
    url: 'https://discordapp.com/api/webhooks/123456789123456789/aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoP',
    colors: { trace: 65535, info: 52224, warn: 14535680, error: 16733440, fatal: 16711680 },
    levels: ['debug', 'trace', 'info', 'warn', 'error', 'fatal'],
    avatar_url: 'https://i.imgur.com/4M34hi2.png',
    username: 'mrpool'
});

hook.trace({
    color: 52224,
    username: 'foobar',
    title: 'ze title',
    message: 'quick brown fox',
    timestamp: '2020-02-20'
});

hook.trace('title', 'message', 'username', 'timestamp');
hook.trace('title', 'message', 'username');
hook.trace('title', 'message');
hook.trace('message');
hook.trace('message');

hook.debug('test');
hook.info('test');
hook.warn('test');
hook.error('test');
hook.fatal('test');

hook.post({ username: 'foo', content: 'bar' });
```

For custom posts, read this guide on the [structure of discord webhook](https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html).
