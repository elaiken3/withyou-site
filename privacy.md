---
title: Privacy Policy
description: What WithYou keeps on your iPhone, what optional cloud AI sends, and how to delete it.
permalink: /privacy/
---

# Privacy Policy

<span class="page-meta">Effective October 9, 2026</span>

WithYou is built to be safe to open on a bad day, and that includes your privacy. Your thoughts, tasks, reminders and focus sessions stay on your iPhone. There’s no account to make, and WithYou doesn’t send anything to its server unless you turn on cloud AI.

## What stays on your iPhone

Everything you create stays on your device, stored with Apple’s SwiftData framework. That includes captured thoughts, Inbox items, reminders, focus sessions, brain-dump notes, profiles and preferences. It isn’t sent to WithYou or to anyone else, unless you turn on cloud AI and ask it for help (more on that below).

## Notifications and check-ins

Reminders, focus notifications and the daily check-in are all created and scheduled on your iPhone. WithYou doesn’t use push notifications, so it doesn’t register your iPhone with a server or collect a device token.

The daily check-in is off until you turn it on, and you choose the time.

Earlier beta versions could share a push token with WithYou’s old notification server, if you turned that on. The current version doesn’t contact that server, and it’s being shut down along with everything it stored.

## Speaking to WithYou

When you use the mic in WithYou, your iPhone turns your speech into text on the device. WithYou listens only while the mic is on. The audio isn’t saved, and only the text stays in the app. If your iPhone can’t do this on the device for your language, it uses Apple’s speech recognition service instead, which sends the audio to Apple under Apple’s privacy policy.

When you capture with Siri, Siri turns your words into text the way it does for any app, and WithYou receives only the text.

## AI help

WithYou can help sort a brain dump into separate things, make a task smaller, offer one gentle next step when you’re stuck, suggest one thing to do now, and tidy notes left over from a focus session. It only suggests. Nothing changes until you choose it. The one exception is Siri: when you ask Siri to capture something, WithYou saves it and tells you what it saved. When you move leftover focus notes to your Inbox, each tidied note keeps your original words.

Each request is handled by the first of these that can answer it:

1. **Apple Intelligence, on your iPhone.** On iPhones that support Apple Intelligence (iOS 26 or later), WithYou uses Apple’s on-device model. Requests handled this way never leave your phone.
2. **Cloud AI, only if you turn it on.** See below.
3. **Simple rules built into the app.** Every feature still works, more simply, and nothing is sent anywhere.

## Cloud AI (optional)

Cloud AI is off until you turn on **Use cloud AI** in Settings. When it’s on and a request can’t be handled on your iPhone, WithYou sends it to our small server. The server asks Claude, an AI model made by Anthropic, and sends the answer back.

Each request includes only what it needs:

| What | Why |
| --- | --- |
| The words for that request | For example, the thought you’re sorting, the task you want to make smaller, or the short list of things you’re choosing between. |
| A little context | Things like the current time, your time zone or the energy level you picked, so the answer fits your day. |
| A random anonymous ID | Made by the app for cloud AI. It isn’t linked to your name, email or Apple ID. It lets the server keep a fair daily limit. |

Two services handle these requests for us:

- **Supabase** hosts our server and the anonymous ID. See [Supabase’s privacy policy](https://supabase.com/privacy).
- **Anthropic** runs Claude, which writes the answer. It gets the request from our server, not from your iPhone. Under its commercial terms, Anthropic doesn’t train its models on these requests, and keeps them only for a limited time. See [Anthropic’s privacy policy](https://www.anthropic.com/legal/privacy).

Like any internet connection, Supabase sees your IP address as part of the request and may keep it in its standard security logs.

### What WithYou keeps

- **None of your words.** The server doesn’t store the text you send or the answers it returns. Its logs note only the kind of request, whether it worked and how long it took.
- **A daily count** of cloud AI requests for your anonymous ID, so everyone gets a fair share. Counts are deleted after 35 days.
- **The anonymous ID itself**, until you delete it.

## Turning it off

You can turn off **Use cloud AI** in Settings at any time. From then on, nothing is sent.

**Delete my cloud AI data** in Settings deletes your anonymous ID and its daily counts from the server, and forgets the ID on your iPhone.

Deleting the app removes everything stored on your iPhone. If you used cloud AI, tap **Delete my cloud AI data** first to remove the server side too. If you don’t, the daily counts are still deleted after 35 days, and only the anonymous ID remains.

## Third parties

WithYou has no analytics, no advertising SDKs and no trackers, in the app or on this website. This website loads no third-party fonts or scripts. WithYou does not sell your data.

Apart from Apple’s own features on your iPhone, the only outside services WithYou uses are Supabase and Anthropic, and only for cloud AI when you’ve turned it on.

## Questions

Visit [Support](/support/) for help or privacy questions.
