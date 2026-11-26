---
title: Privacy Policy – Memeback
---
# Privacy Policy

_Effective 26 November 2026._

This policy covers the Memeback app ("the app"), published by **Oasis Forge**.

## Summary

Your images, their text and your sounds never leave your phone. The app uses the internet only to download the reading languages and sticker tool you choose, to handle purchases, to show ads from Google unless you remove them, and to send usage counts, with no name, account or pictures, that you can turn off. The downloads are optional, each one happens once and only when you ask for it: the reading languages and the sticker cut-out model.

Memeback asks for no permission to see your photos and never looks through your gallery. A meme gets into the app only when you share it to Memeback, pick it with Android's photo picker, or make it in the app.

Memeback is free, with one-time purchases that unlock extra features or remove ads. The free version shows ads from Google (see **Ads** below), never in the keyboard or the widget. The app has no account and is not included in Android's cloud backup.

## The uses of the internet

1. **Downloads of the reading languages and the sticker cut-out model.** Only after you tap a download button. The files come from the publisher's address on Hugging Face (`huggingface.co`, and the storage servers it redirects to) over HTTPS. That host sees your phone's IP address and which files you asked for, as any website does. Nothing about your pictures, the words in them, your searches or your phone is sent. The cut-out model is small (about 4.7 MB) and is used only by the sticker maker.
2. **Purchases through Google Play.** The two one-time products (the Unlock and Remove ads) are bought and restored through Google Play on your phone. Google handles the payment and keeps the record of the purchase; we never see your payment details. The app asks Google Play only which products are owned. The price you see is the price Google Play gives the app.
3. **Usage counts through Google's Firebase Analytics**, only in versions of the app that include it, and **only if you agree**: the counts are off until you say yes. The app asks once ("Help improve Memeback?"), and nothing is sent, and Google's automatic collection does not start, before you say yes. You can turn them off at any time with the switch "Usage counts" in Settings; nothing is sent after you do. The counts are:
   - `search`, with the word "words" (the app searches by the words in your pictures, the only kind of search) and whether a search found anything (yes or no);
   - `meme_added`, once for each meme that becomes new in your library, with how it was added: share, pick or make;
   - `keyboard_on`, when the app sees that the Memeback keyboard has been turned on (the app reads this setting; the keyboard itself sends nothing);
   - `send` with the place it was sent from (app, keyboard or panel) and, for sends from the app, whether it was a picture or a sound;
   - `sound_made`, `unlock_shown`, `unlock_started`, `unlock_done` with which product was bought (the Unlock or Remove ads) and `unlock_restored`.

   They never contain what you type or search, the words in a picture or the name of a picture or a sound. One count is sent for each meme you add, so the counts show how many memes you added. Making stickers, captions, motion clips and sounds is not counted, except that a made picture saved as a new meme counts as a meme added and a finished clip with sound is counted as `sound_made`; private shelf items and the home-screen widget are not counted. Once you agree, Firebase Analytics also collects by itself, as Google documents: a random app instance id (reset when you turn the counts off or reinstall), the automatic events `first_open`, `session_start`, `user_engagement`, `app_update`, `os_update`, `app_remove` and `app_clear_data`, and with them the app version, the phone model, the Android version, the language and the country as Google derives them from the connection. Memeback switches off the advertising id, the Android id, ad personalisation and automatic screen reporting, and denies ad storage and ad data sharing. A build of the app that was made without a Firebase configuration sends no counts at all and does not show the switch.

4. **Ads from Google (AdMob)**, in the free version only. See **Ads** below for what Google's software reads and how you stay in control.

The keyboard never uses the network and never shows ads. Making captions, motion, stickers and sounds, the private shelf and the home-screen widget use no network either, apart from the one-time downloads in use 1.

## Information stored on your device

The app keeps one small database on your phone. For each meme you added (a picture, GIF or short video) it holds the name, size, dates, the words the app read from it, and the file's SHA-256 checksum, used only to avoid adding an exact copy twice. The pictures themselves are never copied into the database. If you star a meme, or send one with Share or Copy, the app remembers the star and when and how often you sent it. It also holds which one-time products are owned (so they work offline) and how many sound memes you made. The database stays on the phone, is never uploaded, is not included in Android's cloud backup or in a transfer to a new phone (so favourites and corrections do not move with you), and is removed when you uninstall the app.

**GIFs and videos.** You can add GIFs and short videos (up to one minute) the same way as pictures. For an animated GIF the app reads the first, middle and last frames; for a video it takes three still frames, on the phone, and reads the words in them, exactly as it does for a picture. The frames are discarded as soon as they are read; only the words are kept, on your phone, along with the kind of file and its length. Videos and GIFs longer than one minute are not added. Nothing about your GIFs or videos is sent anywhere.

**Adding memes.** Memeback has no permission to read your photos or videos and never lists or scans your gallery. A meme gets in by one of three ways: you share a picture from another app to "Save to Memeback"; you tap Add in the app and choose pictures, GIFs or videos in Android's photo picker, which shows the app only the items you choose; or you make one in the app. For a share or a pick the app saves a copy, unchanged, in your phone's Pictures folder under "Memeback" (videos under Movies, "Memeback"), where your gallery shows it like any other picture, and adds it to the library. The original stays where it was and the app never deletes it, so a picked meme uses space twice. Nothing is uploaded. The app owns the files it saves: after you uninstall and reinstall it, the new install cannot read the old copies, and you add them again with the picker.

**Sound memes.** Sounds you record, extract from your own videos, read aloud with an offline voice or take from the bundled effects stay on the phone, in the app's own storage. A clip leaves the phone only when you tap Share.

## Pictures you make

Everything below is made on the phone, from memes already in the app or a picture you pick. Nothing is uploaded, and nothing leaves the phone except by your own tap on Share, Save or "Add to WhatsApp".

- **Captions.** "Add captions" draws the text you type on a copy of your picture and saves it as a new picture in your phone's Pictures folder under "Memeback", where your gallery shows it like any other picture. The original is never changed. The suggestions are ready-made texts bundled in the app and the words already read from your picture; there is no online service and no generative AI.
- **Stickers.** The sticker maker cuts the subject out of a picture on the phone with a small model (the one-time download described above). A sticker is kept in the app's own storage, in packs. A pack reaches WhatsApp only when you tap "Add to WhatsApp": WhatsApp then reads the pack's stickers and name from the app. The app serves only the sticker files and the pack's details, read-only, and nothing else: never your original pictures. As with every WhatsApp sticker app, the permission that guards this is declared by WhatsApp, so on a phone where WhatsApp is not installed another app could claim it and read the same sticker files and pack names. They are only what you chose to put into a pack. To tell whether WhatsApp is installed, the app is allowed to see whether two WhatsApp packages exist on the phone; it reads nothing else about other apps.
- **Motion.** "Add motion" makes an animated sticker or a short video clip from a picture, a captioned picture or a sticker, on the phone. A clip can carry a sound from your own sound library or recording. Clips and animated stickers stay in the app's own storage until you tap Share, Save or "Add to WhatsApp".

## Private shelf

You can move memes onto a private shelf inside Memeback. Only memes the app saved itself can go on the shelf. The app copies the file into its own private storage on your phone, checks the copy, and then removes the original from the "Memeback" folder in your gallery; if Android does not let the app delete a file directly (for example after a reinstall), Android asks you to confirm. Shelf items then stay out of your gallery, the meme grid, search and the keyboard until you move them back.

- The shelf opens only after your phone's own lock prompt (fingerprint, face, or your PIN, pattern or password). The app does not see or store your fingerprint, face or PIN. If the phone has no screen lock, moving things onto the shelf is refused. If you remove your screen lock after moving things in, the shelf opens after a plain confirmation, so nothing is trapped.
- While the shelf is open, screenshots and the recent-apps picture show nothing. It locks again when you leave the app.
- The files are protected by Android's app sandbox and by your phone's own storage encryption. **The app does not encrypt them itself.**
- **Shelf items live only inside Memeback.** Uninstalling the app, clearing its storage or data, or a factory reset deletes them for good. They are excluded from Android's cloud backup and do not move to a new phone. Move them back first. You can move them back to your gallery, or export them to a folder you choose, at any time.
- Nothing about the shelf leaves the phone, and no usage count names a shelf item.

## Home-screen widget

The optional "daily throwback" widget shows one of your own old memes on your phone's home screen, a different one each day, with the month and year it came from. A tap opens it in Memeback. Anyone who can see your home screen can see the picture, so each widget has a "Hide picture" switch that shows a drawing instead. The widget never appears on the lock screen. It works from the app's database on the phone, read-only, makes no network connection, and sends nothing anywhere. The widget is free. Until you have at least five memes added more than 30 days ago, it shows no picture.

## Information we collect

We collect nothing ourselves and the app has no servers. The only information that leaves the phone for us is the usage counts described above, handled by Google's Firebase Analytics, and the purchase record, which Google Play keeps. In the free version, Google's ad software also receives the data described under **Ads**; that is Google's, not ours. What you enter in the app, and everything you make with it, is never shared with anyone.

## Permissions

The app declares these permissions:

- **No photo or video permission.** The app declares none (not `READ_MEDIA_IMAGES`, `READ_MEDIA_VIDEO`, `READ_MEDIA_VISUAL_USER_SELECTED` and not `READ_EXTERNAL_STORAGE`). It sees only the pictures you share to it or pick with Android's photo picker, and the files it saved itself.
- **Microphone (`RECORD_AUDIO`).** Audio is recorded on the phone when you tap Record, stays on the phone, and is never collected. It is asked for only when you tap Record, after the app shows its own explanation.
- **Biometrics (`USE_BIOMETRIC`).** Lets the app show the phone's own lock prompt before the private shelf opens. The prompt is Android's; the app never receives a fingerprint, a face or a PIN, only the answer yes or no.
- **Internet (`INTERNET`) and network state (`ACCESS_NETWORK_STATE`).** For the uses of the internet above. The network state tells the app whether you are on Wi-Fi or mobile data, so a Wi-Fi download waits for Wi-Fi.
- **Google Play purchases (`com.android.vending.BILLING`).** Lets the app ask Google Play which products are owned and start a purchase.
- **Advertising ID (`AD_ID`).** Lets Google's ad software read your device's advertising ID to show ads. It is not used when you have removed ads, unless you choose to watch an ad for a free sound meme, and you can reset or delete the advertising ID in your phone's settings.
- **Foreground service (`FOREGROUND_SERVICE`).** A normal permission that comes with Google's ad software, which may run short background work on Android 10 to 11. The app starts no service of its own with it.
- **Keeping the phone awake briefly (`WAKE_LOCK`).** Added by the analytics library, so it can finish sending a count; the app itself does not use it.

You can change your answers to the permission questions at any time in the phone's settings for the app.

## The meme keyboard

Memeback has an optional keyboard, "Memeback memes", that you turn on yourself in Android's settings. It is a full typing keyboard with a meme button. Before you turn the keyboard on, the app shows this on a full screen and asks you to confirm it: "Memeback's keyboard handles the keys you press to type into the field. What you type is not stored, learned, or sent anywhere." Memeback's keyboard sees what you type only to put it in the field; it is not stored or sent. It never reads what is already in the app you are typing in, and it does not learn from your typing, suggest words or keep a clipboard history. The meme button opens the meme search, which has its own search box; the only other thing the keyboard sends to an app is the picture you tap. It makes no network connection and keeps no history of what you type or search for. In a password field it only types and does not open the memes. It never shows private shelf items. It records, on your phone, which memes you sent, so that recently used memes come first. If you turn on your keyboard's incognito mode, or type in a password field, nothing is recorded. A copy of a picture you send is kept in the app's temporary storage for up to a day; a video is sent as a link to the file and never copied.

## Ads

**Ads.** The free version of Memeback shows ads from Google (AdMob). To show them, Google's software on your phone uses your device's advertising ID, IP address and some device and app information, and may use them to personalise ads. Where the law asks for it (the EEA, the UK, Switzerland and other places), Google's own consent form asks you first, and you can change your answer any time under Settings, **Ad choices**. Ads never appear in the Memeback keyboard or the home-screen widget, and no picture, text read from a picture, search or sound is ever sent to Google or to advertisers. Buying **Remove ads** or the **Unlock** turns ads off: Google's ad software is not asked for ads, and you will not be asked for ad consent. The one exception is yours to choose: with Remove ads alone, you can still watch an ad for a free sound meme.

The ad software is Google's. It may share with Google, for advertising, analytics and fraud prevention: the advertising ID and other device identifiers, the approximate location it works out from your IP address, ad interactions, app and Android version, phone model, screen size, language and network type, and its own crash and performance data. Ad requests carry no keywords, no content address and no targeting from the app. Memeback's usage counts are separate and unchanged: Firebase's advertising ID collection and ad personalisation stay off.

## Purchases

**Purchases.** Purchases go through Google Play. Memeback receives from Google Play only whether you own each product; it sees no payment details and no account name.

## No account

The app has no account. Nothing in it is tied to who you are.

## Deleting your information

In the app, Settings has **Delete everything Memeback keeps**. It removes the app's index of your memes (the words it read, search data, favourites and recents), the memes Memeback saved (the copies in the "Memeback" folders of Pictures and Movies, which are the library), your sound library, sticker packs, drafts and made clips, and the app's other files and settings except the language. It does not touch the original pictures you picked or shared from, items you exported from the shelf to a folder, the reading packs you downloaded or your purchase, which Google Play keeps under your Google account. A file the app can no longer delete by itself (for example after a reinstall) is left in your gallery for you to delete. If your private shelf has items, the delete is refused until you move them back; it never deletes shelf items. Uninstalling the app, clearing its storage or a factory reset removes everything the app keeps, including the private shelf. The counts are not tied to your name; turning off "Usage counts" in Settings stops them and resets the app instance id, and so does the delete.

## Children

The app is for people 13 and over and is not directed at children. We do not knowingly collect information from anyone under 13, and we collect no personal information ourselves; in the free version Google's ad software handles the data described under **Ads**.

## Changes to this policy

Changes are published on this page with a new effective date.

## Who publishes the app

Oasis Forge.

## Contact

Email **oasisforge.support@gmail.com**.
