# @blumoon/discord-webhook
[![NPM Version](https://badge.fury.io/js/%40blumoon%2Fdiscord-webhook.svg)](https://www.npmjs.com/@blumoon/discord-webhook)
[![Dependency Status](https://david-dm.org/blumoon/discord-webhook.svg)](https://david-dm.org/blumoon/discord-webhook)
[![Known Vulnerabilities](https://snyk.io/test/github/blumoon/discord-webhook/badge.svg)](https://snyk.io/test/github/blumoon/discord-webhook)

General use discord webhook

```js
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

hook.debug('test');
hook.info('test');
hook.warn('test');
hook.error('test');
hook.fatal('test');

hook.post({
  username: 'Webhook',
  avatar_url: 'https://i.imgur.com/4M34hi2.png',
  content: 'Text message. Up to 2000 characters.',
  embeds: [
    {
      author: {
        name: 'Birdie♫',
        url: 'https://www.reddit.com/r/cats/',
        icon_url: 'https://i.imgur.com/R66g1Pe.jpg'
      },
      title: 'Title',
      url: 'https://google.com/',
      description: 'Text message. You can use Markdown here. *Italic* **bold** __underline__ ~~strikeout~~ [hyperlink](https://google.com) `code`',
      color: 15258703,
      fields: [
        {
          name: 'Text',
          value: 'More text',
          inline: true
        },
        {
          name: 'Even more text',
          value: 'Yup',
          inline: true
        },
        {
          name: 'Use `\"inline\": true` parameter, if you want to display fields in the same line.',
          value: 'okay...'
        },
        {
          name: 'Thanks!',
          value: 'You\'re welcome :wink:'
        }
      ],
      thumbnail: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg'
      },
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/A_picture_from_China_every_day_108.jpg'
      },
      footer: {
        text: 'Woah! So cool! :smirk:',
        icon_url: 'https://i.imgur.com/fKL31aD.jpg'
      }
    }
  ]
});
```

For custom posts, read this guide on the [structure of discord webhook](https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html).
