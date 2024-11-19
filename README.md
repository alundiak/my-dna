My DNA app
===
A place to aggregate Y-DNA and mt-DNA info from services I use ([FamilyTreeDNA](https://www.familytreedna.com/), [YFULL](https://www.yfull.com/), [YSeq](https://www.yseq.net/), etc.)

## Idea 1 - DONE

To have at least list of FTDNA groups which I frequently check, so to have one place to navigate from. MAYBE integrated with FTDNA API.

## Idea 2 - TODO

To represent Y-DNA Discover tree based on SNP, and every joint as hyperlink to to the SNP-based page.

![img](./ftdna-ydna-idea-jan-2024.png)


## Idea 3 (or 2.2) - TODO

A list of SNPs with historical info, from no to Y-Adam. Similar way I described in my [article](https://lundiak.wordpress.com/2023/08/07/from-ydna-adam-to-andrii-haplogroup-i2a-globetrekker/)

Table just an example:

| SNP     | Age | History notes, Sources      |
|----------|-----|-----------------|
| Y4460 | 30  | note 1, source 1 |
| CTS10228 | 25  | note 2, source 2 |
| P37 | 40  | note 3, source 3 |

But most probably it can be simple list, UI-formatted nice and when scrolling all info is shown. Maybe some animation, not sure.

Inspired by FTDNA table actually:

![img1](img1.png)

which I would simply extend with Historical data, so I could easily find myself in space and time when I think about SNP or age of Y-DNA men with such SNP in they Y chromosome.

Something also similar to MyTrueAncestry Full Detailed Timeline

![img2](img2.png)

Left side could be SNP + age info and right side could be History notes, ancient tribes, ethnicities, nationalities, etc.

Maybe use Bootstrap Accordion => https://getbootstrap.com/docs/5.3/components/accordion/
or https://getbootstrap.com/docs/5.3/components/card/


## Idea 4 - my Matches
But it contradicts then with [My Genealogy](https://github.com/alundiak/my-genealogy) purpose and in general [gen-end-gen](https://github.com/alundiak/gen-and-gen) project purpose.

## Tech stack

- Used [React + TS SWC Vite setup ](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- Used [Reactstrap](https://reactstrap.github.io) + [Bootstrap](https://getbootstrap.com)
- CSS
  - I used [CSS React Hooks](https://css-hooks.com/docs/react/configuration) at first. After attempt to [migrate from v2 to v3](https://css-hooks.com/docs/migration/v3/), I realized CSS hooks became too complicated for my brain.
  - I could use [Styled Components](https://github.com/styled-components/styled-components) because it looks most reasonable solution, for complex projects.
  - Because of [CSS Nesting](https://caniuse.com/css-nesting) support since Dec-2023 I decided to use basic, native CSS, and relying on `import "./MyFile.css"` is very much enough for me.
- Deployment via GitHub Pages (with Vite config).


## React + TypeScript + Vite

https://vite.dev/guide/

Initially project bootstrapped with minimal setup within Vite, with HMR and some ESLint rules.

```sh
npm create vite@latest
```

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tsESlint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tsESlint.configs.recommended` to `tsESlint.configs.recommendedTypeChecked` or `tsESlint.configs.strictTypeChecked`
- Optionally add `...tsESlint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tsESlint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
