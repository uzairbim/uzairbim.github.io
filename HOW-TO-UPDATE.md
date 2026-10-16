# How to update your website

Live site: https://uzairbim.github.io

## Update your CV yourself
1. Open **GitHub Desktop** → menu **Repository** → **Show in Explorer**.
2. Open the **downloads** folder.
3. Rename your new CV to exactly **Uzair-Ur-Rehman-CV.pdf**, copy it into that folder and choose **Replace**.
4. Back in **GitHub Desktop**: type `Update CV` in **Summary** (bottom left) → **Commit to main** → **Push origin** (top).
5. After 1–2 minutes the "Download CV" buttons on the site give the new file.
   (If you still see the old one, press Ctrl+F5 to refresh.)

## Your Canva portfolio
The "Full portfolio" buttons open your Canva link: https://canva.link/br3h9qou92mbvsf
Just edit your design in Canva. The link always shows the latest version, so there's nothing to upload.

## Everything else: send it to Claude
Open your **Website creation for portfolio** project in Claude and send:
- **New CV:** the new PDF.
- **New certificate:** the PDF, its name, who issued it, and a short description.
- **New work sample:** images or PDF drawings, the project name, and a few lines about your role.
- **New post:** the text, and any pictures.

Claude updates the site and publishes it through GitHub Desktop on your laptop.
Keep GitHub Desktop installed and signed in as **uzairbim**.

## What's in this folder
- `src/content/certificates/`: one text file per certificate (name, issuer, PDF, description)
- `src/content/work/`: one text file per project
- `src/content/posts/`: one text file per post
- `src/data/profile.ts`: your bio, experience, contact details
- `public/uploads/`: images and PDFs
- `templates/`: blank examples of each file type
- The other folders (`about`, `work`, `certificates`, `index.html`, ...) are the built website that GitHub shows. Don't edit them by hand.
