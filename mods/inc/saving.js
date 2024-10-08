// saving.js
// ctrl+C for fast export
// ctrl+V, ctrl+V, Enter for fast import
// ctrl+S saves save to a file named like `run78-19꞉10-ch3-Tiger_teaching-1,2,3,2,0,1,3,4,1,0,0.incsave`

// you may use this by adding `<script src="https://dimava.github.io/mods/inc/saving.js"></script>` to index.html
// or putting a local copy of it next to index.html and adding `<script src="saving.js"></script>`
// https: version has autoupdates, but local version is more safe in case you don't trust me because it has no autoupdates


/// <reference path="./types.d.ts" />

// pooplib
console._log = console.log;
Object.defineProperty(console, 'log', { get: () => console._log, set: () => { } });
Promise.frame = () => new Promise(r => requestAnimationFrame(r));
Element.prototype.q = function (s) { return this.querySelector(s) }
Element.prototype.qq = function (s) { return [...this.querySelectorAll(s)] }
String.prototype.toKNumber = function () { return parseFloat(this.replace(' K', 'e3').replace(' M', 'e6')); }
// String.prototype.toSuperscript = function () { return this.replace(/\d/g, s => /*'⁰¹²³⁴⁵⁶⁷⁸⁹'*/'\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079'[s]) }
makeStyle = (s, e) => (e = document.createElement('style'), e.innerHTML = s, document.head.append(e), e);
makeraf = (f) => ((async () => { while (f) { await Promise.frame(); requestAnimationFrame(f); } })(), () => f = () => { });
qq = (s, v) => [...(v = document.querySelectorAll(s), v)];
q = s => document.querySelector(s);

var pastedText = '';
document.addEventListener('paste', event => {
	pastedText = event.clipboardData.getData('text');
})
addEventListener('keydown', async event => {
	if (event.code == 'KeyC' && event.ctrlKey) {
		q('#option-export-save-button').click();
	}
	if (event.code == 'KeyV' && event.ctrlKey) {
		q('#option-import-save-button').click();
		let textarea = q('#import-save-textarea');
		textarea.select();
		textarea.onkeydown = event => {
			if (event.code == 'Enter') {
				event.preventDefault();
				q('#import-save-confirm-button').click();
			}
		}
		await Promise.frame();
		textarea.previousElementSibling.innerHTML = 'Please paste your save code below:<br><small>Your clipboard didn\'t contain savedata</small>';
		if (pastedText.length < 10e3) return;
		textarea.previousElementSibling.innerText = 'Here\'s the save code from your clipboard:';
		textarea.value = pastedText;
		$(textarea).change();
		await Promise.frame();
		textarea.focus();
	}
	if (event.code == 'KeyS' && event.ctrlKey) {
		saveGameToFile();
	}
});

setTimeout(() => {
	q('#import-save-textarea').onkeydown = event => {
		if (event.code == 'Enter') {
			event.preventDefault();
			q('#import-save-confirm-button').click();
		}
	}
});

async function saveGameToFile() {
	let info = { instincts: '' };
	function infoText(name, sel = name, mapper = s => s) {
		let el = typeof sel == 'string' ? q(sel) : typeof sel == 'function' ? sel() : sel;
		info[name] = mapper(el?.innerText ?? '');
	}
	infoText('nextExploration', '#exploration-table>tr:not([style*=none])[id] span');
	infoText('end', '#reincarnation-screen[style*=block]', s => !!s)

	async function clickOpenModal(sel) {
		q(sel).click();
		await Promise.frame();
		await Promise.frame();
	}

	await clickOpenModal('#menu-button');
	infoText('totalTime', '#stat-total-time-played');
	infoText('generation', '#stat-generation');

	await clickOpenModal('#option-history-button');
	infoText('time', '#generation-history-table tr:nth-child(2) th+td');
	infoText('exploration', '#generation-history-table tr:nth-child(3) th+td', e => e.trim());
	infoText('maxhealth', '#generation-history-table tr:nth-child(4) th+td');
	info.instincts = qq('#generation-history-table tr[style]+tr+tr td:nth-child(2)').map(e => e.innerText.split('(').map(e => e.toKNumber()));

	await clickOpenModal('#option-automations-button');
	let tr = qq('#automations-modal-container span').find(e => e.innerText == info.exploration)?.closest('tr');
	info.prevChapter = tr?.closest('table').id.slice(-1).toKNumber();
	info.chapter = info.prevChapter + (tr?.nextElementSibling || info.end ? 1 : 2);

	await clickOpenModal('#automations-modal');
	info.filename = `run${info.generation + (info.end ? 'end' : '')
		}-${info.time.replace(/:/g,/*꞉*/'\uA789')
		}-ch${info.chapter
		}-${info.nextExploration.trim().replace(/ /g, '_')
		}-${info.instincts.map(e => e[1])}`

	await clickOpenModal('#option-export-save-button')
	let save = await navigator.clipboard.readText().catch(r => r + '')
	let fs = require('fs');
	fs.existsSync('resources/app/modsaves') || fs.mkdirSync('resources/app/modsaves');

	if (save.includes('Document is not focused')) {
		console.log('error: failed to copy save');
		// alert('error: failed to copy save');
		q('.notification-content-block span[data-notify-html="content"]').innerHTML = save;
		q('.notifyjs-wrapper').style.backgroundColor = '#faa';
	} else {
		let slot = 0;
		let makeSavePath = (slot) => `resources/app/modsaves/${info.filename}${!slot ? '' : `(${slot})`}.incsave`
		// let's just hope it's the same save with same time and same instincts
		// while (fs.existsSync(makeSavePath(slot))) slot++;
		fs.writeFileSync(makeSavePath(slot), save);
		q('.notification-content-block span[data-notify-html="content"]').innerHTML = `
			Your save has been saved into a file
			<code>${makeSavePath(slot)}</code>
		`;
	}
}