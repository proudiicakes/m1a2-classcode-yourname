import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const read = (rel) =>
  readFileSync(fileURLToPath(new URL(rel, import.meta.url)), 'utf8')

const dom = new JSDOM(read('../index.html'))
const doc = dom.window.document

// Text content with whitespace collapsed, like a browser would treat it.
const textOf = (el) => (el?.textContent ?? '').replace(/\s+/g, ' ').trim()

describe('Activity 2 – Curbside Thai About Page', () => {
  it('declares the HTML5 doctype and a valid head (title + utf-8 charset)', () => {
    expect(doc.doctype?.name?.toLowerCase(), 'Add <!DOCTYPE html>').toBe('html')
    expect(doc.documentElement.getAttribute('lang'), 'Set lang on <html>').toBeTruthy()
    expect(textOf(doc.querySelector('head title')), 'Add a non-empty <title>').toBeTruthy()
    const meta = doc.querySelector('meta[charset]')
    expect(meta, 'Add <meta charset="utf-8">').not.toBeNull()
    expect(meta.getAttribute('charset').toLowerCase()).toBe('utf-8')
  })

  it('uses the semantic sectioning elements header, nav, article, and footer', () => {
    for (const tag of ['header', 'nav', 'article', 'footer']) {
      expect(doc.querySelector(tag), `Add a <${tag}> element`).not.toBeNull()
    }
  })

  it('the nav holds an unordered list of at least three hypertext links', () => {
    const navList = doc.querySelector('nav ul')
    expect(navList, 'Put a <ul> inside <nav>').not.toBeNull()
    const links = doc.querySelectorAll('nav ul li a[href]')
    expect(
      links.length,
      'Add at least three <li><a href="...">...</a></li> items in the nav',
    ).toBeGreaterThanOrEqual(3)
  })

  it('includes an inline image with a src and an alt attribute', () => {
    const img = doc.querySelector('img')
    expect(img, 'Add an <img> to the article').not.toBeNull()
    expect(img.getAttribute('src'), 'The <img> needs a src').toBeTruthy()
    expect(
      img.hasAttribute('alt'),
      'Every <img> needs an alt attribute (it may be empty, but must be present)',
    ).toBe(true)
  })

  it('uses text-level markup: <strong> and <em>', () => {
    expect(textOf(doc.querySelector('strong')), 'Mark important text with <strong>').toBeTruthy()
    expect(textOf(doc.querySelector('em')), 'Mark emphasized text with <em>').toBeTruthy()
  })

  it('the article has a heading and at least two paragraphs of text', () => {
    const article = doc.querySelector('article')
    expect(article, 'Add an <article>').not.toBeNull()
    expect(
      article.querySelector('h1, h2, h3, h4, h5, h6'),
      'Give the article a heading',
    ).not.toBeNull()
    const paras = [...article.querySelectorAll('p')].filter((p) => textOf(p).length > 0)
    expect(paras.length, 'Add at least two non-empty <p> paragraphs in the article')
      .toBeGreaterThanOrEqual(2)
  })

  it('the page links to a phone number (tel:) and an email (mailto:)', () => {
    expect(
      doc.querySelector('a[href^="tel:"]'),
      'Add a telephone link, e.g. <a href="tel:+1...">',
    ).not.toBeNull()
    expect(
      doc.querySelector('a[href^="mailto:"]'),
      'Add an email link, e.g. <a href="mailto:...">',
    ).not.toBeNull()
  })
})

describe('Student info (student.json)', () => {
  const info = JSON.parse(read('../student.json'))

  it('student.json is filled in', () => {
    for (const field of [
      'classCode',
      'fullName',
      'studentNumber',
      'studentEmail',
      'personalEmail',
      'githubAccount',
    ]) {
      expect(info[field], `Set "${field}" in student.json`).toBeTruthy()
    }
  })
})
