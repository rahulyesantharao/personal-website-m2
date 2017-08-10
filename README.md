# personal-website-m2
Personal Website, mark 2

### TODO
- [ ] Styling
  - [x] Finish Basic Site Styles
  - [x] Use React for animation stuff instead of vanilla CSS
  - [x] Create Responsive Setup (Grid System?)
  - [x] Make the PageWrapper change the document.title
  - [ ] Style typography, site colors, consolidate variables (don't set actual colors anywhere: move everything to variables)
- [x] Style Navbar
    - [x] Basic responsiveness
    - [x] Mobile Navigation Drawer
    - [x] Make navigation bar disable rest of website
    - [x] Make navigation bar close after page change
    - [x] Fix z-indices
- [x] Projects Page
  - [x] Make Project Footer have links to the GitHub/DevPost/Project (based on type (Github/Devpost/Project) and link props)
  - [x] Make the ProjectLinks react to hover
- [ ] On all animations, use will-change and instead of 'all' only put the values that will change
- [ ] Make all .column elements into divs, rather than text-level elements
- [ ] Production
  - [x] Figure out svg, png, jpg packaging with Webpack - use require() when specifying src in JSX
  - [ ] Update graphics (desk picture, projects pictures)
    - [ ] Make the projects pictures all the same size square (500x500 px?)
  - [ ] Update Production Stack
  - [ ] Figure out why React Router adds a new history state when I click the link to the page I am already on (is it because of favicon request?)
  - [ ] Figure out Favicon packaging with Webpack
- [ ] Future
  - [ ] Learn how to make svg assets (personal logo, etc.)
  - [ ] Update page transitions to TransitionGroup so that I can make a 404 Page
