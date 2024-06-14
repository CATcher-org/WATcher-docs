
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/WATcher-docs/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/WATcher-docs/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/WATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_m(0)],1),_v(" "),_m(1)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"dev-workflow"}},[_v("Dev workflow"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#dev-workflow","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Given below are some guidelines to follow when submitting PRs.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"choosing-an-issue"}},[_v("Choosing an issue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#choosing-an-issue","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Issues in WATcher that are marked as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("good first issue")]),_v(" can serve as good starting ground for new developers. They can be found "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/labels/good%20first%20issue"}},[_v("here")]),_v(".")]),_v(" "),_c('li',[_v("Before starting on the issues, please ask the dev team (by posting a comment on the issue itself) if it is OK to work on that issue (because it is possible that an issue in the issue tracker is not suitable for implementation just yet).")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"submitting-prs"}},[_v("Submitting PRs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#submitting-prs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("A Pull Request should include the following information:\n"),_c('ol',[_c('li',[_v("A summary of what the PR does")]),_v(" "),_c('li',[_v("A description of the changes made")]),_v(" "),_c('li',[_v("A proposed commit message to be used when the PR is merged")])])])]),_v(" "),_c('p',[_v("The default PR template is provided for you when you create a PR on any WATcher repository. It is recommended that you follow the template.")]),_v(" "),_c('ul',[_c('li',[_v("Please follow "),_c('a',{attrs:{"href":"https://se-education.org/guides/conventions/git.html"}},[_v("these se-edu guidelines")]),_v(" when crafting the commit message.")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")]),_v(", generated on Fri, 14 Jun 2024, 5:33:24 UTC]")])])])}
}];
  