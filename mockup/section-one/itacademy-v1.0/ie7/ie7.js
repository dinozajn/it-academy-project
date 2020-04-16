/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'itacademy\'">' + entity + '</span>' + html;
	}
	var icons = {
		'itaca-hands': '&#xe900;',
		'itaca-team': '&#xe901;',
		'itaca-idea': '&#xe902;',
		'itaca-seminar': '&#xe903;',
		'itaca-messenger': '&#xe904;',
		'itaca-twitter': '&#xe905;',
		'itaca-youtube': '&#xe906;',
		'itaca-linkedin': '&#xe907;',
		'itaca-facebook': '&#xe908;',
		'itaca-instagram': '&#xe909;',
		'itaca-whatsapp': '&#xe90a;',
		'itaca-remote': '&#xe90b;',
		'itaca-open-email': '&#xe90c;',
		'itaca-like': '&#xe90d;',
		'itaca-testing': '&#xe90e;',
		'itaca-play-button': '&#xe90f;',
		'itaca-photo-camera': '&#xe910;',
		'itaca-video-camera': '&#xe911;',
		'itaca-medal': '&#xe912;',
		'itaca-mortarboard': '&#xe913;',
		'itaca-diploma': '&#xe914;',
		'itaca-portfolio': '&#xe915;',
		'itaca-physics': '&#xe916;',
		'itaca-brain': '&#xe917;',
		'itaca-test': '&#xe918;',
		'itaca-alarm-clock': '&#xe919;',
		'itaca-bell': '&#xe91a;',
		'itaca-hours': '&#xe91b;',
		'itaca-picture': '&#xe91c;',
		'itaca-email': '&#xe91d;',
		'itaca-phone-call': '&#xe91e;',
		'itaca-pin': '&#xe91f;',
		'itaca-eye': '&#xe920;',
		'itaca-edit': '&#xe921;',
		'itaca-copy': '&#xe922;',
		'itaca-add-user': '&#xe923;',
		'itaca-bank': '&#xe924;',
		'itaca-bubble-speak': '&#xe925;',
		'itaca-save': '&#xe926;',
		'itaca-calendar': '&#xe927;',
		'itaca-touch-screen': '&#xe928;',
		'itaca-form': '&#xe929;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/itaca-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
