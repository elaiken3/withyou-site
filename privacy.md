---
title: Privacy Policy
description: What WithYou keeps on your iPhone, the little it sends to deliver notifications, and how to delete it.
permalink: /privacy/
---

# Privacy Policy

<span class="page-meta">Effective October 8, 2026</span>

WithYou is built to be safe to open on a bad day, and that includes your privacy. Your thoughts, tasks, reminders and focus sessions stay on your iPhone.

## What stays on your iPhone

Everything you create stays on your device, stored with Apple’s SwiftData framework. That includes captured thoughts, Inbox items, reminders, focus sessions, brain-dump notes, profiles and preferences. None of it is sent to WithYou or to anyone else.

Reminder and focus notifications are created and scheduled on your iPhone.

## “Make it smaller”

On iPhones that support Apple Intelligence (iOS 26 or later), “Make it smaller” may use Apple’s on-device language model to suggest a smaller first step. This happens entirely on your device. Nothing is sent to WithYou or to any third party. On other devices, the suggestion comes from simple rules built into the app.

## What is sent to the WithYou server

Only when **both** of these are true:

- you allowed notifications, and
- the Privacy switch in Settings (“Share push token with WithYou’s server”) is on,

the app sends the WithYou server what it needs to deliver push notifications:

| What | Why |
| --- | --- |
| Install ID | A random identifier made on your iPhone. It isn’t linked to your name, email or Apple ID. |
| APNs device token | Apple’s address for sending notifications to this install. |
| Timezone | So nothing arrives in the middle of your night. |
| Whether notifications are on | So the server never tries when you’ve said no. |
| APNs environment | Whether this is a test or App Store build. |

When your iPhone first registers, the server issues a random per-install secret. The app keeps it in the iOS Keychain and uses it to prove later changes come from your iPhone.

No content you create is ever sent. Like any internet connection, the server sees your IP address as part of the request. Records of which notifications were delivered are kept for at most 35 days so nothing is sent twice.

## Turning it off

Turning the Privacy switch off deletes this install’s record from the WithYou server and removes the stored secret from your iPhone. If the server can’t be reached, the switch stays on and nothing changes, so you can try again later.

Deleting the app removes everything stored on your iPhone. To also delete the server record, turn the switch off before deleting the app.

## Third parties

WithYou has no analytics, no advertising SDKs and no trackers, in the app or on this website. This website loads no third-party fonts or scripts. WithYou does not sell your data.

## Questions

Visit [Support](/support/) for help or privacy questions.
