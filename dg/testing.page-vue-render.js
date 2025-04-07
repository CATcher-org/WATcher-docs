
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/WATcher-docs/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/WATcher-docs/images/watcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/WATcher-docs/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/WATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/WATcher-docs/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("This page contains information useful for testing of WATcher.")]),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_c('p',[_v("Given below are different commands you can use to run the tests.")]),_v(" "),_m(2),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_m(6),_v(" "),_c('p',[_v("This is relevant as not all tests in WATcher have been fixed and may produce compilation errors.")]),_v(" "),_m(7),_v(" "),_c('hr'),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('hr'),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_c('p',[_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("end-to-end tests")]},proxy:true}])},[_v("E2E tests")]),_v(" can be executed using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run e2e")]),_v(". You should see CATcher launch in an instance of Google Chrome, with some automated actions occurring on it. Note: Google Chrome needs to be installed on the machine.")],1),_v(" "),_m(14),_v(" "),_m(15),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_v("Relevant Browsers must be installed prior to running tests (i.e. Chrome, Firefox).")])]),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_c('p',[_v("E2E Tests are run with the following stages:")]),_v(" "),_m(22)],1)],1),_v(" "),_m(23)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"dev-commands"}},[_v("Dev commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#dev-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Command")]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run lint")])]),_v(" "),_c('td',[_v("Runs the linter (TSLint)")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run test")])]),_v(" "),_c('td',[_v("Runs the tests")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run test -- \"--code-coverage\"")])]),_v(" "),_c('td',[_v("Runs the tests and generates code coverage report under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tests/coverage")]),_v(" folder")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"individual-testing"}},[_v("Individual Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#individual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To test an individual file, replace the xxx below with the more specific file pattern in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test.ts")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("const context = require.context('../tests', true, /xxx\\.spec\\.ts$/);\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("You will also need to update "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tsconfig.spec.json")]),_v(" to include only the relevant test files.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Within the file, prefix "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("describe")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("it")]),_v(" with f into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fdescribe")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fit")]),_v(" to run specific tests.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"testing-with-jasmine"}},[_v("Testing with Jasmine"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing-with-jasmine","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Jasmine is a behavior-driven development framework specific for testing JavaScript code. We follow the Jasmine Style Guide loosely for our tests (Link under "),_c('a',{attrs:{"href":"#resources-for-jasmine"}},[_v("Resources for Jasmine")]),_v("). One main guideline is that a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("describe")]),_v(" block should be created for each method / scenario under test, and an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("it")]),_v(" block should be created for each property being verified.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Resources:")])])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('a',{attrs:{"href":"https://github.com/CareMessagePlatform/jasmine-styleguide"}},[_v("Jasmine Style Guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jasmine.github.io/api/3.6/global"}},[_v("Official Jasmine documentation")]),_v(" : This is the official Jasmine documentation for Jasmine 3.6")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jasmine.github.io/2.0/introduction.html"}},[_v("Introduction to Jasmine 2.0")]),_v(" : This is a good summary / introduction of Jasmine test features")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"e2e-testing"}},[_v("E2E testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#e2e-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"running-e2e-tests"}},[_v("Running E2E tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-e2e-tests","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Unlike the production version of CATcher, we do not use the actual GitHub API in the E2E tests. Mock data is used to simulate the GitHub API. You can run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:test")]),_v(" to run CATcher in this \"offline\" mode (to further develop or debug the E2E tests).\nThe following additional parameters would allow for further customisation,")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"text-align":"center"}},[_v("Additional Parameter")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Default")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Description")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Full Command Example")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Command Explanation")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--protractor-config=e2e/protractor.*.conf.js")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("protractor.conf.js")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Allows selection of the Protractor configuration file")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run e2e -- --protractor-config=e2e/protractor.firefox.conf.js")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Runs E2E Tests on the Firefox Browser")])]),_v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--suite=*")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("All Suites")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Runs E2E Tests for specific suites")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run e2e -- --suite=login,bugReporting")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Run E2E Tests from Login and BugReporting Suites only")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"troubleshooting-conflicts-between-the-versions-of-the-browser-and-browser-driver"}},[_v("Troubleshooting conflicts between the versions of the browser and browser driver"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#troubleshooting-conflicts-between-the-versions-of-the-browser-and-browser-driver","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If tests fail on your machine due to mismatches between the versions of the browser and the browser driver, you can use the "),_c('a',{attrs:{"href":"https://github.com/angular/webdriver-manager#readme"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("webdriver-manager")])]),_v(" tool to install the right version of the driver.  By default, running "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("webdriver-manager update")]),_v(" updates all drivers to the latest version, but particular versions can be specified as options.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"protractor-configuration"}},[_v("Protractor Configuration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#protractor-configuration","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("E2E Tests are run using "),_c('a',{attrs:{"href":"http://www.protractortest.org/#/"}},[_v("Protractor")]),_v(" testing framework.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Protractor primarily requires the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.conf.js")]),_v(" files to define E2E Testing Environments (this includes Browser Details, Base URL, etc...)")]),_v(" "),_c('li',[_v("The base configuration data is stored in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("protractor.base.conf.js")]),_v(" which is then extended by separate configuration files for individual browsers as well as the CI/CD pipeline.")]),_v(" "),_c('li',[_v("E2E Tests are typically split into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Page-Objects Files")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Test Files")]),_v(" in accordance with the "),_c('a',{attrs:{"href":"http://www.protractortest.org/#/style-guide"}},[_v("Protractor Style Guide")]),_v(" (more information regarding the interaction between the aforementioned filetypes can be found there).")]),_v(" "),_c('li',[_v("E2E Tests are also grouped into suites based on the Application's Phase (i.e. Login, Bug-Reporting). Currently defined suite information is located in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("protractor.base.conf.js")]),_v(" file as well.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"how-the-e2e-tests-work"}},[_v("How the E2E tests work"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-the-e2e-tests-work","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Build CATcher using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" architecture\n"),_c('ul',[_c('li',[_v("Using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" build configuration located in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("angular.json")]),_v(" under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("projects.catcher.architect.configurations")]),_v(" we build a version of CATcher within a test environment that replaces "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/environments/environment.ts")]),_v(" with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/environments/environment.test.ts")]),_v(" on runtime. This file provides data that allows CATcher to switch into \"E2E test\" mode.")])])]),_v(" "),_c('li',[_v("Provide Test Environment Information\n"),_c('ul',[_c('li',[_v("The Test Environment (in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/environments/environment.test.ts")]),_v(") provides information such as,\n"),_c('ul',[_c('li',[_v("Login Credentials (Username).")]),_v(" "),_c('li',[_v("User Role and Team Information.")]),_v(" "),_c('li',[_v("A "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" flag that is set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("true")]),_v(", so that CATcher switches into \"E2E test mode\"")])])])])]),_v(" "),_c('li',[_v("Mock Service Injections\n"),_c('ul',[_c('li',[_v("Once CATcher switches to E2E test mode, it creates mocks of some services, in order to simulate behaviour that is outside the scope of E2E Testing. This includes authentication, and communication with GitHub (via its APIs).")]),_v(" "),_c('li',[_v("These Service Injections are carried out in the respective "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*-module.ts")]),_v(" files with the help of Factories (located in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/src/app/core/services/factories")]),_v(") that check the current build environment and make the Service Replacements accordingly.")])])]),_v(" "),_c('li',[_v("Browser Action Automation using Protractor\n"),_c('ul',[_c('li',[_v("With the application ready for testing, we then utilize "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Protractor")]),_v(" to run test cases that are located in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/e2e")]),_v(" directory.")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")]),_v(", generated on Mon, 7 Apr 2025, 5:37:33 UTC]")])])])}
}];
  