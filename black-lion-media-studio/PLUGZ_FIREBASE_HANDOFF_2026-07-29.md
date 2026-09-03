# Plugz Firebase Handoff - 2026-07-29

## Summary

The Firebase account `blacklionmediastudio@gmail.com` has a dedicated Plugz project:

- Project display name: `Plugz-UNTD-gear`
- Project ID: `plugz-untd-gear`
- Project number / sender ID: `329345923912`
- Resource location ID: `[Not specified]`
- Default Hosting URL: `https://plugz-untd-gear.web.app`
- Web app display name: `Plugz Storefront`
- Web app ID: `1:329345923912:web:a9b7b5a474bcab3fb2d17d`

This appears to be a standalone Firebase project for a Plugz storefront. The local Black Lion Studios app also contains Plugz merch/storefront content, but there is no local project folder named for Plugz under `/home/sniper-lion-main/Documents` as of this handoff.

## Firebase Account State

The Firebase CLI account list includes `blacklionmediastudio@gmail.com` as an additional account. A live project listing through that account succeeded on 2026-07-29:

```bash
npx firebase-tools projects:list --account blacklionmediastudio@gmail.com
```

The account returned 7 Firebase projects:

- `black-lion-media-studio` - display name `Black Lion Studios`
- `cltch-ntwrk-social` - display name `cltch-ntwrk-social`
- `foxhub-c984b` - display name `Fox Hub Network`
- `genebox` - display name `GeneBox`
- `luxbvtler-concierge` - display name `LuxBvtler-concierge`
- `plugz-untd-gear` - display name `Plugz-UNTD-gear`
- `sample-demo-website-2026` - display name `sample-demo-website-2026`

The global Firebase CLI config's primary `user.email` was `solidartentertainment@gmail.com` when inspected, while `blacklionmediastudio@gmail.com` was present in `additionalAccounts`. Use explicit `--account blacklionmediastudio@gmail.com` for Plugz commands.

Do not copy OAuth refresh tokens, access tokens, or ID tokens from `.config/configstore/firebase-tools.json` into documentation or source control.

## Firebase App

Live command used:

```bash
npx firebase-tools apps:list --project plugz-untd-gear --account blacklionmediastudio@gmail.com
```

Result:

- App display name: `Plugz Storefront`
- App ID: `1:329345923912:web:a9b7b5a474bcab3fb2d17d`
- Platform: `WEB`

SDK config command used:

```bash
npx firebase-tools apps:sdkconfig WEB 1:329345923912:web:a9b7b5a474bcab3fb2d17d --project plugz-untd-gear --account blacklionmediastudio@gmail.com
```

Returned public web config:

```json
{
  "projectId": "plugz-untd-gear",
  "appId": "1:329345923912:web:a9b7b5a474bcab3fb2d17d",
  "storageBucket": "plugz-untd-gear.firebasestorage.app",
  "apiKey": "AIzaSyBHUZkXjnj3v7ZeoBQDTjbZFQngixTz5DM",
  "authDomain": "plugz-untd-gear.firebaseapp.com",
  "messagingSenderId": "329345923912",
  "measurementId": "G-2YJV38ZDCK",
  "projectNumber": "329345923912",
  "version": "2"
}
```

Firebase web API keys are not server secrets, but still keep this config in source only when the app is meant to be public and the Firebase security rules are correct.

## Hosting

Live command used:

```bash
npx firebase-tools hosting:sites:list --project plugz-untd-gear --account blacklionmediastudio@gmail.com
```

Result:

- Site ID: `plugz-untd-gear`
- Default URL: `https://plugz-untd-gear.web.app`
- App ID mapping shown by the CLI: `--`

The Hosting site exists, but this pass did not verify deployed content or release history.

The follow-up command below failed after the earlier project/app/hosting list commands succeeded because the Firebase CLI credentials became invalid and required reauthentication:

```bash
npx firebase-tools hosting:channel:list --site plugz-untd-gear --project plugz-untd-gear --account blacklionmediastudio@gmail.com
```

Observed error:

```text
Authentication Error: Your credentials are no longer valid. Please run firebase login --reauth
```

## Database Checks

Firestore and Realtime Database checks were attempted, but both hit Firebase CLI authentication errors after the initial project/app/hosting metadata checks had already succeeded.

Commands attempted:

```bash
npx firebase-tools firestore:databases:list --project plugz-untd-gear --account blacklionmediastudio@gmail.com
npx firebase-tools database:instances:list --project plugz-untd-gear --account blacklionmediastudio@gmail.com
```

Observed result:

- Firestore database listing failed with `Authentication Error: Your credentials are no longer valid. Please run firebase login --reauth`.
- Realtime Database instance listing failed with the same reauth error and then `Failed to list Firebase Realtime Database instances`.

Until reauthenticated, do not claim whether Firestore, Realtime Database, Authentication providers, Storage rules, or Hosting channels are fully configured for `plugz-untd-gear`.

## Local Code References

There is no local Plugz-specific project folder under `/home/sniper-lion-main/Documents` from:

```bash
find /home/sniper-lion-main/Documents -maxdepth 4 -iname '*plugz*' -print
```

Plugz storefront content currently exists inside the Black Lion Studios project:

- `lib/merch.js`
- `lib/site-content.js`
- `lib/validation.js`
- `app/store/page.js`
- `components/profile-app.js`

The primary collection definitions are in `lib/merch.js`:

- `Plugz UNTD`
  - slug: `plugz-untd`
  - tagline: `Utility-driven streetwear with a sharper studio edge.`
  - items:
    - `Plugz UNTD Heavy Tee` - `$42`
    - `Plugz UNTD Utility Hoodie` - `$78`
    - `Plugz UNTD Studio Cap` - `$34`
- `Plugz RNGD`
  - slug: `plugz-rngd`
  - tagline: `A louder capsule with performance energy and nightlife attitude.`
  - items:
    - `Plugz RNGD Event Jersey` - `$64`
    - `Plugz RNGD Graphic Long Sleeve` - `$56`
    - `Plugz RNGD Transit Bag` - `$48`

The Black Lion Studios app's Firebase target is still `black-lion-media-studio`, not `plugz-untd-gear`:

```json
{
  "projects": {
    "default": "black-lion-media-studio"
  }
}
```

The Black Lion deployment scripts use:

```bash
--project black-lion-media-studio --account blacklionmediastudio@gmail.com
```

Do not deploy the Black Lion Studios app to `plugz-untd-gear` unless the app is intentionally being split or repointed.

## Related GitHub Context

Local memory and Git history show a separate GitHub identity/repository named `PlugzTech` / `AdventureCode-Projects`. That is separate from the Firebase project above:

- GitHub account/user in local repo history: `PlugzTech`
- GitHub noreply email in git config/logs: `plugztech@users.noreply.github.com`
- Prior public aggregation repo: `https://github.com/PlugzTech/AdventureCode-Projects`
- Newer note: some AdventureCode work later moved to the GhostVenture canonical remote.

Do not confuse the Firebase account `blacklionmediastudio@gmail.com` with the GitHub author/account `PlugzTech`.

## Recommended Next Steps

1. Reauthenticate Firebase before deeper inspection:

```bash
npx firebase-tools login --reauth
```

2. Re-run service checks after reauth:

```bash
npx firebase-tools firestore:databases:list --project plugz-untd-gear --account blacklionmediastudio@gmail.com
npx firebase-tools database:instances:list --project plugz-untd-gear --account blacklionmediastudio@gmail.com
npx firebase-tools hosting:channel:list --site plugz-untd-gear --project plugz-untd-gear --account blacklionmediastudio@gmail.com
```

3. If this project should become a standalone Plugz site, create or identify the local source folder first, then add a `.firebaserc` with:

```json
{
  "projects": {
    "default": "plugz-untd-gear"
  }
}
```

4. If the existing Black Lion store should remain the source of truth, leave `.firebaserc` pointed at `black-lion-media-studio` and treat `plugz-untd-gear` as a separate Firebase shell until a deliberate migration plan exists.
