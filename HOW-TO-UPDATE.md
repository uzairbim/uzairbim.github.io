# How to update your website

Live site: https://uzairbim.github.io

## The easy way (recommended)
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
