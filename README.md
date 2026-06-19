# Module 1 – Activity 2 – Curbside Thai "About" Page

**Case:** Sajja Adulet hired you to build the website for **Curbside Thai**, a
Thai food truck in Charlotte, North Carolina. In this activity you build the
site's **About** page using semantic HTML5.

This activity builds on Activity 1: you start from a valid HTML5 page and then
add real page structure and content.

## What to do

### 1. Fill in your details

Open `student.json` and fill in every field (use the **class code** your
instructor gave you):

```json
{
  "classCode": "1234",
  "fullName": "Juan Dela Cruz",
  "studentNumber": "2026-12345",
  "studentEmail": "juan.delacruz@hau.edu.ph",
  "personalEmail": "juan@example.com",
  "githubAccount": "juandelacruz"
}
```

> **Keep `student.json` identical across all your activities.** The autograder
> cross-checks these fields between your repos, and a mismatch (e.g. a different
> `classCode` in one activity) is flagged. The `classCode` must also match the
> one in your repo name.

### 2. Build the About page

Open [`index.html`](index.html). It contains only a comment describing what to
build. Replace it with a complete page that has:

1. A valid **HTML5 skeleton** (doctype, `<html lang>`, a head with the page
   **title** and the **UTF-8** charset) plus an **HTML comment** describing the
   page.
2. A page **header** holding the site name and a **navigation** area.
3. Inside the nav, an **unordered list** of at least **three hypertext links**
   to the site's other pages (About, Menu, Contact, ...).
4. A main **article** with a heading and at least **two paragraphs** about the
   restaurant.
5. An inline **image** inside the article, with the **alt attribute** for
   screen readers (required even if its text is empty).
6. **Text-level markup** in your paragraphs: the restaurant name marked as
   text of **strong** importance, and a short phrase marked as **emphasized**.
7. A page **footer** with contact info that includes a **phone link** and an
   **email link**.

The comment in `index.html` names every concept to research in the tutorial.
Look the elements up and write the markup yourself — that is the point of the
activity.

### 3. View it in a browser

Double-click `index.html` (or right-click → *Open with* your browser) and check
your page. The nav links can point to pages that don't exist yet — that's fine.

## Set up your repo

Before you write any code, create **your own copy** of this activity from the
template. Do not work in the template itself.

1. **Create from the template.** Open the template repo and click
   **Use this template → Create a new repository**.
2. **Set the owner to the course org.** Under *Owner*, choose the
   **`HAU-6INTROWEB` course org**, **not** your personal account.
3. **Name it by the convention** `m<module>a<activity>-<classcode>-<yourname>`.
   For this activity that's **`m1a2-<classcode>-yourname`** (e.g.
   `m1a2-1234-juandelacruz`). The `<classcode>` must match the one you put in
   `student.json`.
4. **Make it Private.** Set *Visibility* to **Private** so classmates can't see
   your work.

Then clone **your** new repo and work there:

```bash
git clone https://github.com/HAU-6INTROWEB/m1a2-<classcode>-yourname.git
cd m1a2-<classcode>-yourname
```

## Running the tests

Install dependencies once:

```bash
npm install
```

Then run the tests:

```bash
npm test
```

This activity is graded by **8 tests** (1 point each). They check:

- ✅ valid HTML5 skeleton (doctype, `lang`, `<title>`, `<meta charset>`)
- ✅ semantic sectioning: `<header>`, `<nav>`, `<article>`, `<footer>`
- ✅ the nav has an unordered list of at least three links
- ✅ an inline image with both `src` and `alt`
- ✅ text-level markup with `<strong>` and `<em>`
- ✅ the article has a heading and at least two paragraphs
- ✅ a phone link (`tel:`) and an email link (`mailto:`)
- ✅ `student.json` is completely filled in

Each part is graded independently, so you earn partial credit for the parts
you finish.

## Confirm your submission

Your repo **is** your submission, so there is nothing to upload anywhere.
**Pushing your work is how you submit it.** When your tests pass locally,
**commit and push**:

```bash
git add -A
git commit -m "Activity 2 complete"
git push
```

Pushing triggers the **Autograde** workflow on GitHub. Confirm your submission
landed:

1. Open your repo on GitHub and click the **Actions** tab.
2. Open the latest **Autograde** run and confirm the green ✅ check
   and the "8 / 8 tests passed" summary.
