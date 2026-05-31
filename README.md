# CleanTwitch

A lightweight Chrome extension that keeps your Twitch experience focused on the people you actually follow — no recommended strangers, no lewd thumbnails, no algorithmic noise.

**[cleanttwitch.jpluker.com](https://jpluker.github.io/CleanTwitch)** &nbsp;·&nbsp; [Latest release](https://github.com/JPLuker/CleanTwitch/releases/latest)

## What it does

- Hides the homepage featured carousel and all recommended stream rows
- Hides the "Recommended channels" section on the Following page
- Hides the "Live Channels" sidebar section (non-followed streamers)
- Leaves categories, your followed channels, search, and chat untouched

## Install (Chrome / Brave / Edge)

1. [Download the latest release](https://github.com/JPLuker/CleanTwitch/releases/latest) and unzip it
2. Go to `chrome://extensions` in your browser
3. Toggle on **Developer mode** (top right)
4. Click **Load unpacked** and select the unzipped `twitch-following-redirect` folder

To update: download the new release, replace the folder contents, click the refresh icon on the extension card.

## Privacy

CleanTwitch runs entirely locally. It injects CSS and watches for DOM changes on `twitch.tv` — no data is collected, no network requests are made, no analytics. See the full [privacy policy](https://jpluker.github.io/CleanTwitch#privacy).

## Contributing

PRs welcome. If a Twitch update breaks something, open an issue with the relevant console output and a screenshot.

## License

MIT
