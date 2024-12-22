# Starting setup

Created as a starting point for Craft CMS sites, based off of  mikesnoeren/craft

## For Frontend:
[CraftCMS](https://craftcms.com/) for CMS  
[TailwindCSS](https://tailwindcss.com/) for some utility based css  
[Alpine.js](https://alpinejs.dev/) for javascript  
[Sass](https://sass-lang.com/) for building out most of the css  

## For dev and deployment:
[vite](https://vitejs.dev/) for dev server and build for prod  
[ddev](https://ddev.com/) for local server  

# Basic philosophies

Majority of the styling is done in sass, with tailwind being used for quick templating needs and just generally flexibility is required until things can be brought into the fold of sass. However tailwind is still used as the source of truth for colors, fonts, etc.

[BEM](https://getbem.com/introduction/) naming convention on top of an ITCSS structure is the main philosophy used for the sass.

I like to keep the alpine tidied away and off the markup as well, keeping it in separate files unless it is extremely simple.

## Setup

This assumes you are working off of ddev, if you aren't then you will need to find your own path through these steps. 

1. Clone this project from template repo [here](https://github.com/ZJensenDev/personalsite)
2. Change up project name in `ddev/config.yaml`
3. Run `ddev start` for the first time
4. Run `npm run watch`
5. Make sure all .env variables are correct
5. Go to `/admin` and install craft
6. ???
7. Profit
