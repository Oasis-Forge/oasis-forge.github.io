---
title: Privacy Policy – Memeback
---

# Privacy Policy

_Effective 17 November 2026._

This policy covers the Memeback app ("the app"), published by **Oasis Forge**.

## Summary

Your images, their text and your sounds never leave your phone. The app uses the internet only to download its search model once, to handle purchases, and to send usage counts, with no name, account or pictures, that you can turn off.

Memeback is free, with a one-time purchase that unlocks extra features. It shows no ads, has no account, and is not included in Android's cloud backup.

## The three uses of the internet

1. **Downloads of the search model, reading languages and the multilingual add-on.** Only after you tap a download button. The files come from the model publisher's address on Hugging Face (`huggingface.co`, and the storage servers it redirects to) over HTTPS. That host sees your phone's IP address and which files you asked for, as any website does. Nothing about your pictures, the words in them, your searches or your phone is sent.
2. **Purchases through Google Play.** The one-time unlock is bought and restored through Google Play on your phone. Google handles the payment and keeps the record of the purchase; we never see your payment details. The app asks Google Play only whether the unlock is owned. The price you see is the price Google Play gives the app.
3. **Usage counts through Google's Firebase Analytics**, only in versions of the app that include it, and **only if you agree**: the counts are off until you say yes. The app asks once ("Help improve Memeback?"), and nothing is sent, and Google's automatic collection does not start, before you say yes. You can turn them off at any time with the switch "Usage counts" in Settings; nothing is sent after you do. The counts are:
   - `search` with one of two words: whether the search used words or meaning;
   - `send` with the place it was sent from (app, keyboard or panel) and, for sends from the app, whether it was a picture or a sound;
   - `sound_made`, `unlock_shown`, `unlock_started`, `unlock_done` and `unlock_restored`.

   They never contain what you type or search, the words in a picture, the name of a picture or a sound, the size of your library, or anything you made. Once you agree, Firebase Analytics also collects by itself, as Google documents: a random app instance id (reset when you turn the counts off or reinstall), the automatic events `first_open`, `session_start`, `user_engagement`, `app_update`, `os_update`, `app_remove` and `app_clear_data`, and with them the app version, the phone model, the Android version, the language and the country as Google derives them from the connection. Memeback switches off the advertising id, the Android id, ad personalisation and automatic screen reporting, and denies ad storage and ad data sharing. A build of the app that was made without a Firebase configuration sends no counts at all and does not show the switch.

The keyboard never uses the network.

## Information stored on your device

The app keeps one small database on your phone. For each picture in your gallery it holds the picture's name, folder, size, dates, the words the app read from it, whether it looks like a meme, and any correction you made ("Not a meme" or "Add as meme"). It also holds a short fingerprint of how the picture looks (a difference hash) and, for pictures that share a file size with another meme, the file's SHA-256 checksum, both used only to find duplicates; the pairs you marked "Not duplicates"; and a few numbers about the words in the picture that help decide whether it is a meme. The pictures themselves are never copied. For the search by meaning it also holds, for each meme, a list of numbers (a vector) the search model made from the picture on the phone, and the moods of your memes. If you star a meme, or send one with Share or Copy, the app remembers the star and when and how often you sent it. It also holds whether the one-time unlock is owned (so it works offline) and how many sound memes you made. The database stays on the phone, is never uploaded, is not included in Android's cloud backup or in a transfer to a new phone (so favourites and corrections do not move with you), and is removed when you uninstall the app.

When you share a picture from another app to "Save to Memeback" (Android 10 and newer), the app saves a copy, unchanged, in your phone's Pictures folder under "Memeback", where your gallery shows it like any other picture, and adds it to the library. Nothing is uploaded.

Sound memes: sounds you record, extract from your own videos, read aloud with an offline voice or take from the bundled effects stay on the phone, in the app's own storage. A clip leaves the phone only when you tap Share.

Stickers (a later release, not in version 1.0): a sticker you make from one of your pictures is made on the phone and kept in the app's own storage. The cut-out of the subject runs on the phone with a small model; the model's one-time download (about 4.7 MB, from the same Hugging Face host as the other model downloads, only after you tap Download) is the only internet use. A sticker pack reaches WhatsApp only when you tap "Add to WhatsApp": WhatsApp then reads the pack's stickers and name from the app, which serves only the sticker files and the pack's details, read-only, and nothing else.

## Information we collect

We collect nothing ourselves and the app has no servers. The only information that leaves the phone for us is the usage counts described above, handled by Google's Firebase Analytics, and the purchase record, which Google Play keeps. What you enter in the app is never shared with anyone.

## Permissions

The app declares these permissions:

- **Photos and media (`READ_MEDIA_IMAGES`; `READ_EXTERNAL_STORAGE` on Android 12 and older).** Lets the app list your pictures and read them on the phone, to find the words in them and decide which are memes. It never changes or deletes a picture. The one thing it can do is ask the phone to move pictures you ticked in "Clean up" to the phone's own trash: the phone's dialog asks you first.
- **Selected photos (`READ_MEDIA_VISUAL_USER_SELECTED`, Android 14 and newer).** Lets the app know when you chose "selected photos" instead of all of them.
- **Microphone (`RECORD_AUDIO`).** Audio is recorded on the phone when you tap Record, stays on the phone, and is never collected. It is asked for only when you tap Record, after the app shows its own explanation.
- **Internet (`INTERNET`) and network state (`ACCESS_NETWORK_STATE`).** For the three uses of the internet above. The network state tells the app whether you are on Wi-Fi or mobile data, so a Wi-Fi download waits for Wi-Fi.
- **Google Play purchases (`com.android.vending.BILLING`).** Lets the app ask Google Play whether the unlock is owned and start the purchase.
- **Keeping the phone awake briefly (`WAKE_LOCK`).** Added by the analytics library, so it can finish sending a count; the app itself does not use it.

If you refuse the photo permission, the app cannot find memes and tells you so. You can change your answers at any time in the phone's settings for the app.

## The meme keyboard

Memeback has an optional keyboard, "Memeback memes", that you turn on yourself in Android's settings. It has a small letter pad that types only into its own search box. It never reads what is in the app you are typing in, and the only thing it ever sends to an app is the picture you tap. It makes no network connection and keeps no history of what you search for. It records, on your phone, which memes you sent, so that recently used memes come first. If you turn on your keyboard's incognito mode, or type in a password field, nothing is recorded. A copy of a picture you send is kept in the app's temporary storage for up to a day.

## No account, no ads

The app has no account and shows no ads. Nothing in it is tied to who you are.

## Deleting your information

In the app, Settings has **Delete everything Memeback keeps**. It removes the app's index of your pictures (the words it read, search data, favourites, recents and corrections), your sound library and drafts, and the app's other files and settings except the language. It does not touch the pictures in your gallery, the search models and reading packs you downloaded (remove those under Meaning search) or your purchase, which Google Play keeps under your Google account. Uninstalling the app, or using Android's "Clear storage", removes the same files and the downloaded models too. The counts are not tied to your name; turning off "Usage counts" in Settings stops them and resets the app instance id, and so does the delete. Purchases are kept by Google Play under your Google account.

## Children

The app is for people 16 and over and is not directed at children. We do not knowingly collect information from anyone under 16, and the app collects no personal information.

## Changes to this policy

Changes are published on this page with a new effective date.

## Who publishes the app

Oasis Forge.

## Contact

Email **oasisforge.support@gmail.com**.
