---
title: Privacy Policy – Memeback
---
# Privacy Policy

_Effective 20 November 2026._

This policy covers the Memeback app ("the app"), published by **Oasis Forge**.

## Summary

Your images, their text and your sounds never leave your phone. The app uses the internet only to download its search model once, to handle purchases, and to send usage counts, with no name, account or pictures, that you can turn off. The other downloads are optional, each one happens once and only when you ask for it: the reading languages, the meaning add-on and the sticker cut-out model.

Memeback is free, with a one-time purchase that unlocks extra features. It shows no ads, has no account, and is not included in Android's cloud backup.

## The three uses of the internet

1. **Downloads of the search model, reading languages, the multilingual add-on and the sticker cut-out model.** Only after you tap a download button. The files come from the model publisher's address on Hugging Face (`huggingface.co`, and the storage servers it redirects to) over HTTPS. That host sees your phone's IP address and which files you asked for, as any website does. Nothing about your pictures, the words in them, your searches or your phone is sent. The cut-out model is small (about 4.7 MB) and is used only by the sticker maker.
2. **Purchases through Google Play.** The one-time unlock is bought and restored through Google Play on your phone. Google handles the payment and keeps the record of the purchase; we never see your payment details. The app asks Google Play only whether the unlock is owned. The price you see is the price Google Play gives the app.
3. **Usage counts through Google's Firebase Analytics**, only in versions of the app that include it, and **only if you agree**: the counts are off until you say yes. The app asks once ("Help improve Memeback?"), and nothing is sent, and Google's automatic collection does not start, before you say yes. You can turn them off at any time with the switch "Usage counts" in Settings; nothing is sent after you do. The counts are:
   - `search` with one of two words: whether the search used words or meaning;
   - `send` with the place it was sent from (app, keyboard or panel) and, for sends from the app, whether it was a picture or a sound;
   - `sound_made`, `unlock_shown`, `unlock_started`, `unlock_done` and `unlock_restored`.

   They never contain what you type or search, the words in a picture, the name of a picture or a sound, the size of your library, or anything you made. Stickers, captions, motion clips, private shelf items and the home-screen widget are not counted at all. Once you agree, Firebase Analytics also collects by itself, as Google documents: a random app instance id (reset when you turn the counts off or reinstall), the automatic events `first_open`, `session_start`, `user_engagement`, `app_update`, `os_update`, `app_remove` and `app_clear_data`, and with them the app version, the phone model, the Android version, the language and the country as Google derives them from the connection. Memeback switches off the advertising id, the Android id, ad personalisation and automatic screen reporting, and denies ad storage and ad data sharing. A build of the app that was made without a Firebase configuration sends no counts at all and does not show the switch.

The keyboard never uses the network. Making captions, motion, stickers and sounds, the private shelf and the home-screen widget use no network either, apart from the one-time downloads in use 1.

## Information stored on your device

The app keeps one small database on your phone. For each picture, GIF or short video in your gallery it holds the name, folder, size, dates, the words the app read from it, whether it looks like a meme, and any correction you made ("Not a meme" or "Add as meme"). It also holds a short fingerprint of how the picture looks (a difference hash) and, for pictures that share a file size with another meme, the file's SHA-256 checksum, both used only to find duplicates; the pairs you marked "Not duplicates"; and a few numbers about the words in the picture that help decide whether it is a meme. The pictures themselves are never copied into the database. For the search by meaning it also holds, for each meme, a list of numbers (a vector) the search model made from the picture on the phone, and the moods of your memes. If you star a meme, or send one with Share or Copy, the app remembers the star and when and how often you sent it. It also holds whether the one-time unlock is owned (so it works offline) and how many sound memes you made. The database stays on the phone, is never uploaded, is not included in Android's cloud backup or in a transfer to a new phone (so favourites and corrections do not move with you), and is removed when you uninstall the app.

**GIFs and videos.** If you allow it, Memeback also reads GIFs and short videos (up to one minute) from your gallery. For an animated GIF it reads the first, middle and last frames; for a video it takes three still frames, on the phone, reads the words in them and works out what they show, exactly as it does for a picture. The frames are discarded as soon as they are read; only the words and the numbers that describe the meaning are kept, on your phone, along with the kind of file and its length. Videos longer than one minute are not opened. Nothing about your GIFs or videos is sent anywhere. If you do not allow video access, nothing changes for your pictures and GIFs.

When you share a picture from another app to "Save to Memeback" (Android 10 and newer), the app saves a copy, unchanged, in your phone's Pictures folder under "Memeback", where your gallery shows it like any other picture, and adds it to the library. Nothing is uploaded.

**Sound memes.** Sounds you record, extract from your own videos, read aloud with an offline voice or take from the bundled effects stay on the phone, in the app's own storage. A clip leaves the phone only when you tap Share.

## Pictures you make

Everything below is made on the phone, from pictures already on it. Nothing is uploaded, and nothing leaves the phone except by your own tap on Share, Save or "Add to WhatsApp".

- **Captions.** "Add captions" draws the text you type on a copy of your picture and saves it as a new picture in your phone's Pictures folder under "Memeback" (Android 10 and newer), where your gallery shows it like any other picture. The original is never changed. The suggestions are ready-made texts bundled in the app and the words already read from your picture; there is no online service and no generative AI.
- **Stickers.** The sticker maker cuts the subject out of a picture on the phone with a small model (the one-time download described above). A sticker is kept in the app's own storage, in packs. A pack reaches WhatsApp only when you tap "Add to WhatsApp": WhatsApp then reads the pack's stickers and name from the app. The app serves only the sticker files and the pack's details, read-only, and nothing else: never your original pictures. As with every WhatsApp sticker app, the permission that guards this is declared by WhatsApp, so on a phone where WhatsApp is not installed another app could claim it and read the same sticker files and pack names. They are only what you chose to put into a pack. To tell whether WhatsApp is installed, the app is allowed to see whether two WhatsApp packages exist on the phone; it reads nothing else about other apps.
- **Motion.** "Add motion" makes an animated sticker or a short video clip from a picture, a captioned picture or a sticker, on the phone. A clip can carry a sound from your own sound library or recording. Clips and animated stickers stay in the app's own storage until you tap Share, Save or "Add to WhatsApp".

## Private shelf

You can move memes onto a private shelf inside Memeback. The app copies the file into its own private storage on your phone, checks the copy, and then asks Android to remove the original from your gallery; Android asks you to confirm each time. Shelf items then stay out of your gallery, the meme grid, search and the keyboard until you move them back.

- The shelf opens only after your phone's own lock prompt (fingerprint, face, or your PIN, pattern or password). The app does not see or store your fingerprint, face or PIN. If the phone has no screen lock, moving things onto the shelf is refused. If you remove your screen lock after moving things in, the shelf opens after a plain confirmation, so nothing is trapped.
- While the shelf is open, screenshots and the recent-apps picture show nothing. It locks again when you leave the app.
- The files are protected by Android's app sandbox and by your phone's own storage encryption. **The app does not encrypt them itself.**
- **Shelf items live only inside Memeback.** Uninstalling the app, clearing its storage or data, or a factory reset deletes them for good. They are excluded from Android's cloud backup and do not move to a new phone. Move them back first. You can move them back to your gallery, or export them to a folder you choose, at any time.
- Nothing about the shelf leaves the phone, and no usage count names a shelf item.

## Home-screen widget

The optional "daily throwback" widget shows one of your own old memes on your phone's home screen, a different one each day, with the month and year it came from. A tap opens it in Memeback. Anyone who can see your home screen can see the picture, so each widget has a "Hide picture" switch that shows a drawing instead. The widget never appears on the lock screen. It works from the app's database on the phone, read-only, makes no network connection, and sends nothing anywhere. Without photo access, or while the one-time unlock is not owned, it shows no picture.

## Information we collect

We collect nothing ourselves and the app has no servers. The only information that leaves the phone for us is the usage counts described above, handled by Google's Firebase Analytics, and the purchase record, which Google Play keeps. What you enter in the app, and everything you make with it, is never shared with anyone.

## Permissions

The app declares these permissions:

- **Photos and media (`READ_MEDIA_IMAGES`; `READ_EXTERNAL_STORAGE` on Android 12 and older).** Lets the app list your pictures and read them on the phone, to find the words in them and decide which are memes. It never changes or deletes a picture by itself. The one thing it can do is ask the phone to move pictures you ticked in "Clean up" to the phone's trash, or to remove the originals of memes you moved onto the private shelf: the phone's own dialog asks you first each time.
- **Videos (`READ_MEDIA_VIDEO`, Android 13 and newer).** Lets the app read short videos in your gallery, the same way it reads pictures. Asked separately and only if you choose to allow it; refusing it changes nothing for pictures.
- **Selected photos (`READ_MEDIA_VISUAL_USER_SELECTED`, Android 14 and newer).** Lets the app know when you chose "selected photos" instead of all of them.
- **Microphone (`RECORD_AUDIO`).** Audio is recorded on the phone when you tap Record, stays on the phone, and is never collected. It is asked for only when you tap Record, after the app shows its own explanation.
- **Biometrics (`USE_BIOMETRIC`).** Lets the app show the phone's own lock prompt before the private shelf opens. The prompt is Android's; the app never receives a fingerprint, a face or a PIN, only the answer yes or no.
- **Internet (`INTERNET`) and network state (`ACCESS_NETWORK_STATE`).** For the three uses of the internet above. The network state tells the app whether you are on Wi-Fi or mobile data, so a Wi-Fi download waits for Wi-Fi.
- **Google Play purchases (`com.android.vending.BILLING`).** Lets the app ask Google Play whether the unlock is owned and start the purchase.
- **Keeping the phone awake briefly (`WAKE_LOCK`).** Added by the analytics library, so it can finish sending a count; the app itself does not use it.

If you refuse the photo permission, the app cannot find memes and tells you so. You can change your answers at any time in the phone's settings for the app.

## The meme keyboard

Memeback has an optional keyboard, "Memeback memes", that you turn on yourself in Android's settings. It is a full typing keyboard with a meme button. Memeback's keyboard sees what you type only to put it in the field; it is not stored or sent. It never reads what is already in the app you are typing in, and it does not learn from your typing, suggest words or keep a clipboard history. The meme button opens the meme search, which has its own search box; the only other thing the keyboard sends to an app is the picture you tap. It makes no network connection and keeps no history of what you type or search for. In a password field it only types and does not open the memes. It never shows private shelf items. It records, on your phone, which memes you sent, so that recently used memes come first. If you turn on your keyboard's incognito mode, or type in a password field, nothing is recorded. A copy of a picture you send is kept in the app's temporary storage for up to a day; a video is sent as a link to the file and never copied.

## No account, no ads

The app has no account and shows no ads. Nothing in it is tied to who you are.

## Deleting your information

In the app, Settings has **Delete everything Memeback keeps**. It removes the app's index of your pictures (the words it read, search data, favourites, recents and corrections), your sound library, sticker packs, drafts and made clips, and the app's other files and settings except the language. It does not touch the pictures in your gallery (including captions and pictures you saved with "Save to Memeback", items you moved back from the shelf or exported, which are ordinary pictures that stay until you delete them), the search models and reading packs you downloaded (remove those under Meaning search) or your purchase, which Google Play keeps under your Google account. If your private shelf has items, the delete is refused until you move them back; it never deletes shelf items. Uninstalling the app, clearing its storage or a factory reset removes everything the app keeps, including the private shelf. The counts are not tied to your name; turning off "Usage counts" in Settings stops them and resets the app instance id, and so does the delete.

## Children

The app is for people 16 and over and is not directed at children. We do not knowingly collect information from anyone under 16, and the app collects no personal information.

## Changes to this policy

Changes are published on this page with a new effective date.

## Who publishes the app

Oasis Forge.

## Contact

Email **oasisforge.support@gmail.com**.
