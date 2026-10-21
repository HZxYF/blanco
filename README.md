# Blanco — a Real Madrid history

A five-page static site telling the club's history in six eras, with every
European Cup final listed and filterable by decade.

Live: https://hzxyf.github.io/blanco/

## Pages

| File | What it is |
|---|---|
| `index.html` | Introduction and way in |
| `history.html` | Six eras, from 1902 to 2024 |
| `finals.html` | All fifteen European finals, filterable by decade |
| `legends.html` | Six players who define the eras |
| `about.html` | Sources, build notes and decisions |

## Built with

- Hand-written HTML, CSS and JavaScript. No framework, no build step, no dependencies.
- Deployed on GitHub Pages from the `main` branch.

## Running it locally

Open `index.html` in a browser. There is nothing to install. The site works from
the filesystem as well as from a server.

## Structure

```
index.html    history.html    finals.html    legends.html    about.html
style.css     one stylesheet, no frameworks
filter.js     decade filter on finals.html (about 40 lines)
```

## Decisions

- **Content before style.** Pages were written and committed as plain HTML first;
  the stylesheet came afterwards, so the markup was never built around the layout.
- **One stylesheet, no framework.** The site is text. A framework would have added
  weight and nothing else.
- **The filter degrades.** All fifteen finals are visible without JavaScript; the
  filter only hides rows that are already there.
- **Wide tables scroll.** On narrow screens the finals table slides sideways rather
  than shrinking to unreadable type.

## Sources

Facts were checked against the Wikipedia articles on Real Madrid and on the list of
European Cup and Champions League finals. Content stops at the 2024 final.

## Not affiliated

An independent student project. Not affiliated with Real Madrid CF.
