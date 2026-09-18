# oasis-forge.github.io

Oasis Forge's root website on GitHub Pages: https://oasis-forge.github.io

- `app-ads.txt`: the authorized ad sellers for every Oasis Forge app. Play and AdMob read it from the top level of
  the Website set in each app's store listing, so it must stay at this repo's root. Add a line only when an app uses
  a new ad network or a different AdMob account.
- `index.html`: the home page. Add each new app there.
- Each app's privacy policy lives in that app's own repo and is served under this domain: Koora Trivia at
  `/koora-trivia/privacy/`, Monthly Expenses at `/monthly-expense-app/privacy-policy` (from its `docs/` folder).
  `koora-trivia-privacy/` here only forwards Koora Trivia's old address.

Don't rename this repo: the site's address depends on its name.
