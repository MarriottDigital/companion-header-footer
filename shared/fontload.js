// JS for font load
var domainSet = location.hostname;
var familySet = (domainSet.match('.fr') || domainSet.match('.de'))? 'Source+Sans+Pro:400,700:latin,latin-ext' : 'Source+Sans+Pro:400,700:latin';

WebFontConfig = {
    google: { families: [ familySet ] }
		,context: window.parent
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	      '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();