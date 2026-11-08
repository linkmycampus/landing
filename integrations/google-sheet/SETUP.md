# Applications to Google Sheets

Every form on the site (Waitlist, Campus Ambassador, O.G Creator, Departmental
Creator, Faculty Page Moderator, Onboarding Team, Media & Blog Partner) saves to
its **own folder** with its own Google Sheet and its own signed PDFs:

```
LinkMyCampus applications/
  Waitlist/                  LinkMyCampus – Waitlist
  Campus Ambassadors/        LinkMyCampus – Campus Ambassadors   Signed agreements/
  O.G Creators/              LinkMyCampus – O.G Creators         Signed agreements/
  Departmental Creators/     LinkMyCampus – Departmental Creators   Signed agreements/
  Faculty Page Moderators/   LinkMyCampus – Faculty Page Moderators   Signed agreements/
  Onboarding Team/           LinkMyCampus – Onboarding Team      Signed agreements/
  Media & Blog Partners/     LinkMyCampus – Media & Blog Partners   Signed agreements/
```

## 1. Script

1. Signed in to the LinkMyCampus Google account, open **script.google.com** > **New project**.
   Name it "LinkMyCampus applications".
2. Delete what is there and paste `Code.gs`. Save.
3. Pick **setupSheets** in the function menu and press **Run**. Approve the
   permissions (Advanced > Go to project > Allow). The folder and all sheets appear in Drive.
4. **Deploy > New deployment > Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the web app URL (ends in `/exec`).
After changing `Code.gs`, use **Deploy > Manage deployments > Edit > New version**
so the same URL keeps working.

## 2. Cloudflare Turnstile (bot protection)

1. Cloudflare dashboard > **Turnstile > Add widget**. Add the site's domains
   (and `localhost` for testing). Mode: **Managed**.
2. Copy the **site key** and the **secret key**.
3. In Apps Script: **Project Settings > Script properties**, add
   - `TURNSTILE_SECRET` = the secret key
   - `ALLOWED_HOSTNAMES` = the site's domains, comma separated (optional)

## 3. Vercel environment variables

Project > Settings > Environment Variables, then redeploy:

| Name | Value |
|---|---|
| `VITE_PARTNER_SUBMIT_URL` | the Apps Script web app URL |
| `VITE_TURNSTILE_SITE_KEY` | the Turnstile site key (public) |

## What gets checked

| Check | Where |
|---|---|
| Name (first and last), email, WhatsApp number format | Browser, and again in the script |
| Same email already applied to the same programme: rejected | When they enter their details, and again on final submit |
| Cloudflare Turnstile | Script verifies the token with Cloudflare |
| Hidden honeypot field filled in | Script rejects |
| Form sent in under 3 seconds | Script rejects |

The same email can apply to two different programmes (e.g. Ambassador and
Onboarding Team). To block that too, remove the programme condition in
`alreadyApplied` in `Code.gs`.

After a successful application, people see the success screen and are sent to
the programme's WhatsApp group after 3 seconds (`community.url` in
`src/config/partners.ts`). Clicking "download your agreement" stops the redirect.
