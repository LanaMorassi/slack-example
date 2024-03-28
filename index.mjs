import Slack from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

const app = new Slack.App({
    signingSecret: process.env.SLACK_SIGNIN_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});

const blocks = [
    {
        "type": "rich_text",
        "elements": [
            {
                "type": "rich_text_section",
                "elements": [
                    {
                        "type": "emoji",
                        "name": "red_circle",
                        "unicode": "1f534"
                    },
                    {
                        "type": "emoji",
                        "name": "red_circle",
                        "unicode": "1f534"
                    },
                    {
                        "type": "text",
                        "text": " Problema no Checkout "
                    },
                    {
                        "type": "emoji",
                        "name": "red_circle",
                        "unicode": "1f534"
                    },
                    {
                        "type": "emoji",
                        "name": "red_circle",
                        "unicode": "1f534"
                    },
                    {
                        "type": "text",
                        "text": "\n"
                    }
                ]
            },
            {
                "type": "rich_text_preformatted",
                "border": 0,
                "elements": [
                    {
                        "type": "text",
                        "text": "<log error>"
                    }
                ]
            }
        ]
    }
]

await app.client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL,
    text: "testeee",
    blocks
})