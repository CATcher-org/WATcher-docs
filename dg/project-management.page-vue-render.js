
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/WATcher-docs/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/WATcher-docs/images/watcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/WATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_m(0)],1),_v(" "),_m(1)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"project-management"}},[_v("Project management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-management","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This page contains info relevant to project management activities, typically done by senior dev team members.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"dev-commands"}},[_v("Dev commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#dev-commands","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Given below are different commands you can run to build the application in different operating systems.")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Command")]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run build")])]),_v(" "),_c('td',[_v("Build the app. Your built files are in the /dist folder.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run build:prod")])]),_v(" "),_c('td',[_v("Build the app with Angular aot. Your built files are in the /dist folder.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run deploy:web")])]),_v(" "),_c('td',[_v("Will deploy the app onto the Github's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gh-pages")]),_v(" branch. "),_c('br'),_v(" Prerequisites:"),_c('br'),_v(" 1. Add Environment variable of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GH_TOKEN=<Github Personal Access Token>")]),_v(" with the permission of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("repo")]),_v(". "),_c('br'),_v("2. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build:prod:web")]),_v(" command's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--base-href")]),_v(" argument in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" must have the following format "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://<OrgName or Username>.github.io/CATcher/")]),_v(". "),_c('br'),_v(" 3. If you are deploying outside of CATcher-org then it would be necessary to create a new OAuth application and change the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clientId")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("environment.prod.ts")]),_v(" "),_c('br'),_v(" 4. If you are deploying outside of CATcher-org, you would also need to deploy your own instance of proxy server using "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/gatekeeper"}},[_v("gatekeeper")]),_v(" and change the appropriate variables in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("environment.prod.ts")]),_v(".")])])])])]),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"automated-release"}},[_v("Automated release"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#automated-release","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Follow these steps to release a new version of WATcher using a GitHub Actions' workflow.")]),_v(" "),_c('ol',[_c('li',[_v("Create and merge a Pull Request that updates WATcher's version number in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" file.")]),_v(" "),_c('li',[_v("Navigate to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Actions")]),_v(" Tab of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("WATcher")]),_v(" repository and start the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Version Deployment")]),_v(" Workflow.\n"),_c('ul',[_c('li',[_v("This workflow deploys the web app and creates a Draft Release containing the desktop app's executables")])])]),_v(" "),_c('li',[_v("Edit the Draft Release:\n"),_c('ul',[_c('li',[_v("Update the description with a changelog that describes any new features or bug fixes")])])]),_v(" "),_c('li',[_v("Publish the release.")])]),_v(" "),_c('hr')])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")]),_v(", generated on Mon, 7 Apr 2025, 5:37:33 UTC]")])])])}
}];
  