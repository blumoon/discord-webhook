/* eslint prefer-rest-params: "off" */
'use strict';

const Https = require('https');

module.exports = function (webhook) {

    if (!webhook) {

        throw new Error('No webhook provided.');
    }

    const self = this;

    this.levels = webhook.levels || ['debug', 'trace', 'info', 'warn', 'error', 'fatal'];
    this.colors = webhook.colors || { trace: 65535, info: 52224, warn: 14535680, error: 16733440, fatal: 16711680 };
    this.username = webhook.username;
    this.avatar_url = webhook.avatar_url;

    this.webhook = (webhook.url || webhook)
        .replace('https://discordapp.com/api/webhooks/', '')
        .replace('https://discordapp.com/', '')
        .replace('https://discordapp.com', '')
        .replace('/webhooks', '')
        .replace('webhooks/', '')
        .replace('/api', '')
        .replace('api/', '');

    this.post = function (payload) {

        const postData = JSON.stringify(payload);
        const request = Https.request({
            port: 443,
            method: 'POST',
            hostname: 'discordapp.com',
            path: `/api/webhooks/${ self.webhook }`,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
            }
        });

        request.on('error', (e) => {

            throw new Error(e);
        });

        request.write(postData);
        request.end();
    };

    this.compose = function (color, title, message, usermeme, timestemp) {

        const embed = { title: title.title };
        const content = message || title.message || title;
        const username = usermeme || title.username || this.username;
        const timestamp = timestemp || title.timestamp || new Date().toLocaleString();

        embed.description = content;
        embed.footer = { text: timestamp };

        if (title.color || color) {
            embed.color = title.color || color;
        }

        if (message) {
            embed.title = title;
        }

        const payload = { embeds: [embed] };

        if (username) {
            payload.username = username;
        }

        if (this.avatar_url) {
            payload.avatar_url = this.avatar_url;
        }

        return payload;
    };

    this.compose.username = this.username;

    for (let i = 0; i < this.levels.length; ++i) {
        const level = this.levels[i];

        this[level] = function (title, message, username, timestamp) {

            self.post(self.compose(self.colors[level] || '', title, message, username, timestamp));
        };
    }
};
