# How to update your website

Every change works the same way: **change a file, then Commit and Push in GitHub Desktop.**
About 2 minutes later the live site at https://uzairbim.github.io updates by itself.

Open the folder from GitHub Desktop: **Repository → Show in Explorer**.
To edit a `.md` file, right-click it → **Open with → Notepad**.

---

## Update your CV
1. Name your new CV exactly `Uzair-Ur-Rehman-CV.pdf`.
2. Copy it into `public\cv\` and choose **Replace**.
3. Commit and Push (see the end of this guide).

## Add a certificate (PDF + description)
1. Copy the certificate PDF into `public\uploads\certificates\`.
   Use a simple name with no spaces, e.g. `bim-manager-2026.pdf`.
2. Copy `templates\certificate.md` into `src\content\certificates\` and rename it, e.g. `bim-manager-2026.md`.
3. Open it in Notepad and fill in the lines:
   ```
   ---
   title: BIM Manager Certificate
   issuer: Autodesk
   date: 2026
   pdf: /uploads/certificates/bim-manager-2026.pdf
   order: 10
   ---
   Your description goes here, as many lines as you like.
   ```
   `order` controls the position: lower numbers show first.
4. To attach a PDF to a certificate that is already there, open its file in
   `src\content\certificates\` and add a `pdf:` line like the one above.
5. Commit and Push.

## Add a work sample
1. Put images and PDF drawings in `public\uploads\`.
2. Copy `templates\work-sample.md` into `src\content\work\`, rename it, and edit the text.
   Point to your files with lines like:
   ```
   cover: /uploads/four-seasons-cover.jpg
   images: [/uploads/four-seasons-1.jpg, /uploads/four-seasons-2.jpg]
   pdf: /uploads/four-seasons-drawings.pdf
   featured: true
   ```
3. Commit and Push.

## Write a post
Copy `templates\post.md` into `src\content\posts\`, rename it, write your text, then Commit and Push.

## Change your bio, experience or contact details
Edit `src\data\profile.ts` in Notepad. Only change the text inside the quotes.

---

## Commit and Push (publish your change)
1. Open **GitHub Desktop**. Your changed files appear on the left.
2. In **Summary** (bottom left), type a short note, e.g. `Add BIM Manager certificate`.
3. Click **Commit to main**.
4. Click **Push origin** at the top.

To check it worked: on github.com open your repository → **Actions** tab. A green tick means the site is live.
A red cross means something in a file is wrong (usually a missing `---` line or a typo in a file path).

## Even easier
Send the file and description to Claude in your portfolio project, and it can make the change for you.
