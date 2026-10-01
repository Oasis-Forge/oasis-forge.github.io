# oasis-forge.github.io

Oasis Forge's root website on GitHub Pages: https://oasis-forge.github.io

- `app-ads.txt`: the authorized ad sellers for every Oasis Forge app. Play and AdMob read it from the top level of
  the Website set in each app's store listing, so it must stay at this repo's root. Add a line only when an app uses
  a new ad network or a different AdMob account.
- `index.html`: the home page. Add each new app there.
- Every app's privacy policy (below). Keep this repo public: it's the only place they're served from.

Don't rename this repo: the site's address depends on its name.

## Privacy policies

The app repos are private, and GitHub Pages doesn't serve private repos, so this site serves each app's privacy
policy, at the address the app and its store listing already use. The policy's source stays in the app's own repo,
where it changes with the app's features (and some apps test it). This repo has an exact copy.

| App | Source, in the app's repo | Live at |
|---|---|---|
| Koora Trivia | `koora-trivia/docs/privacy_policy.html` | https://oasis-forge.github.io/koora-trivia/privacy/ |
| Monthly Expenses | `monthly-expense-app/docs/privacy-policy.md` | https://oasis-forge.github.io/monthly-expense-app/privacy-policy |
| Wasfati | `wasfati/docs/privacy-policy.html` | https://oasis-forge.github.io/wasfati/privacy-policy |
| QR Scanner + Generator | `qr-scanner-generator/docs/privacy-policy/index.html` | https://oasis-forge.github.io/qr-scanner-generator/privacy-policy/ |
| Wasn't Me | `wasnt-me/docs/privacy-policy.md` | https://oasis-forge.github.io/wasnt-me/privacy-policy |

**To publish a change:** merge it in the app's repo, then, with the app repos cloned next to this one, run

```
bash tools/sync-policies.sh            # copies every policy that changed
bash tools/sync-policies.sh --check    # only lists the ones that differ
```

and open a PR here with what it copied. The page is live a minute after the PR merges.

**A new app:** add its line to `tools/sync-policies.sh` and to the table above, run the script, and add the app to
`index.html`.

Pages builds this site with Jekyll (`_config.yml`), so the Markdown policies become pages in GitHub's default theme.
HTML files with no front matter are served exactly as they are. `koora-trivia/index.html` and
`qr-scanner-generator/index.html` send anyone who opens the app's folder to the home page, and
`koora-trivia-privacy/` forwards Koora Trivia's old policy address (app versions up to 1.0.8 open it).
