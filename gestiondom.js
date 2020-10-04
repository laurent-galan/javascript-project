let body = document.querySelector('body');

let containerAll = document.createElement('div');
containerAll.classList.add('container');
body.appendChild(containerAll);

let divSiteHeaderClearfix = document.createElement('div');
containerAll.appendChild(divSiteHeaderClearfix);
divSiteHeaderClearfix.setAttribute('role','banner');
divSiteHeaderClearfix.classList.add('site-header', 'clearfix');


let divSiteLogo = document.createElement('div');
divSiteLogo.classList.add('site-logo');
divSiteLogo.innerHTML = 'HTML5';
divSiteHeaderClearfix.appendChild(divSiteLogo);

let spanStarOne = document.createElement('span');
spanStarOne.classList.add('star');
spanStarOne.innerHTML = '&#9733;';
divSiteLogo.appendChild(spanStarOne);
// ici l'élement text dans la div ce place dans un élément"text")
let textBoilerplate = document.createElement('text');
let boilerplateText = document.createTextNode('Boilerplate');
divSiteLogo.appendChild(boilerplateText);

let navBarList = document.createElement('ul');
navBarList.classList.add('site-nav', 'inline-block-list');
divSiteHeaderClearfix.appendChild(navBarList);

let containedListone = document.createElement('li');
navBarList.appendChild(containedListone);

let containedListonelink = document.createElement('a');
containedListonelink.setAttribute('href','https://github.com/h5bp/html5-boilerplate');
containedListonelink.setAttribute('data-ga-category','Outbound links');
containedListonelink.setAttribute('data-ga-action','nav click');
containedListonelink.setAttribute('data-ga-label','Source code');
containedListonelink.textContent = "Source code";
containedListone.appendChild(containedListonelink);

let containedListtwo = document.createElement('li');
navBarList.appendChild(containedListtwo);

let containedListtwoLink = document.createElement('a');
containedListtwo.appendChild(containedListtwoLink);
containedListtwoLink.setAttribute('href','https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md');
containedListtwoLink.setAttribute('data-ga-category','Outbound links');
containedListtwoLink.setAttribute('data-ga-action','Nav click');
containedListtwoLink.setAttribute('data-ga-label','Docs');
containedListtwoLink.textContent = 'Docs';


let containedListthree = document.createElement('li');
navBarList.appendChild(containedListthree);

let containedListthreeLink = document.createElement('a');
containedListthree.appendChild(containedListthreeLink);
containedListthreeLink.setAttribute('href','https://h5bp.org');
containedListthreeLink.setAttribute('data-ga-category','Outbound links');
containedListthreeLink.setAttribute('data-ga-action','Nav click');
containedListthreeLink.setAttribute('data-ga-label','Other projects');
containedListthreeLink.textContent = "Other projects";


let sitepromo = document.createElement('div');
containerAll.appendChild(sitepromo);

let titlesitepromo = document.createElement('h1');
sitepromo.appendChild(titlesitepromo);
titlesitepromo.textContent = 'The web’s most popular front-end template';

let paragraphsitepromo = document.createElement('p');
sitepromo.appendChild(paragraphsitepromo);

let strongparagraphsitepromo = document.createElement('strong');
paragraphsitepromo.appendChild(strongparagraphsitepromo);
strongparagraphsitepromo.textContent = "The web’s most popular front-end template";

let paravirgule = document.createElement('p');
paragraphsitepromo.appendChild(paravirgule);
paravirgule.textContent = ",";

paragraphsitepromo.appendChild(strongparagraphsitepromo); 
strongparagraphsitepromo.textContent = "robust";

paragraphsitepromo.appendChild(paravirgule);
paravirgule.textContent = ", and ";

paragraphsitepromo.appendChild(strongparagraphsitepromo);
strongparagraphsitepromo.textContent = "adaptable";

paragraphsitepromo.appendChild(paravirgule);
paravirgule.textContent = " web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.";

let ctaoption = document.createElement('div');
sitepromo.appendChild(ctaoption);

let linkctaoption = document.createElement('a');
ctaoption.appendChild(linkctaoption);
linkctaoption.classList.add("btnbtn-download");
linkctaoption.setAttribute('href','https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip');
linkctaoption.setAttribute('data-ga-category','Download');
linkctaoption.setAttribute('data-ga-action','Download - top');
linkctaoption.setAttribute('data-ga-label','v8.0.0');

ctaoption.appendChild(strongparagraphsitepromo);
strongparagraphsitepromo.textContent = "Download";

let space = document.createElement('br');
ctaoption.appendChild(space);

let spanctaoption = document.createElement('span');
ctaoption.appendChild(spanctaoption);
spanctaoption.classList.add('version');
spanctaoption.textContent = "v8.0.0";

let linkctaoptiontwo = document.createElement('a');
ctaoption.appendChild(linkctaoptiontwo);
linkctaoptiontwo.classList.add('last-update');
linkctaoptiontwo.setAttribute('href','https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/CHANGELOG.md');
linkctaoptiontwo.setAttribute('data-ga-category','Outbound links');
linkctaoptiontwo.setAttribute('data-ga-action','See the CHANGELOG');
linkctaoptiontwo.setAttribute('data-ga-label','v8.0.0');
linkctaoptiontwo.textContent = "See the CHANGELOG";

let sitesection = document.createElement('div');
containerAll.appendChild(sitesection);

let containersitesection = document.createElement('div');
sitesection.appendChild(containersitesection);
containersitesection.classList.add('container');

let subtitlesitesection = document.createElement('h2');
containersitesection.appendChild(subtitlesitesection);
subtitlesitesection.textContent = "Save time. Create with confidence.";

let gridsitesection = document.createElement('div');
containersitesection.appendChild(gridsitesection);


