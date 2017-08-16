# personal-website-m2
Personal Website, mark 2

### Environment Setup
- Create Git Repo
- Set up EditorConfig
- Set up NPM Project
- Set up Directory Structure
- Install and setup Webpack (and config file)
- Install and setup ESLint (and rc file)
- Install and setup Babel (and rc file)
- Set up dev/dist servers
- Set up NPM scripts
- Set up framework (e.g. React)

### TODO
- [ ] Styling
  - [x] Finish Basic Site Styles
  - [x] Use React for animation stuff instead of vanilla CSS
  - [x] Create Responsive Setup (Grid System?)
  - [x] Make the PageWrapper change the document.title
  - [ ] Style typography, site colors - make it responsive and get bigger/smaller with screen size, similar to banner on homePage
  - [x] consolidate variables (don't set actual colors anywhere: move everything to variables)
- [x] Style Navbar
    - [x] Basic responsiveness
    - [x] Mobile Navigation Drawer
    - [x] Make navigation bar disable rest of website
    - [x] Make navigation bar close after page change
    - [x] Fix z-indices
- [x] Projects Page
  - [x] Make Project Footer have links to the GitHub/DevPost/Project (based on type (Github/Devpost/Project) and link props)
  - [x] Make the ProjectLinks react to hover
- [x] On all animations, use will-change and instead of 'all' only put the values that will change
- [x] Make all .column elements into divs, rather than text-level elements
- [x] Include fallbacks for rgba values

- [ ] Production
  - [x] Figure out svg, png, jpg packaging with Webpack - use require() when specifying src in JSX
  - [ ] Update graphics (desk picture, projects pictures)
    - [x] Make the projects pictures all the same size square (350x350 px?) - used picresize.com for resizing and tinypng.com/kraken.io for optimization
  - [x] Use PostCSS or some autoprefixer or something
  - [x] Update Production Stack
  - [ ] Figure out why React Router adds a new history state when I click the link to the page I am already on (is it because of favicon request?)
  - [ ] Figure out Favicon packaging with Webpack
- [ ] Future
  - [ ] Learn how to make svg assets (personal logo, etc.)
  - [ ] Update page transitions to TransitionGroup so that I can make a 404 Page
  - [ ] Cubic bezier custom transition functions
