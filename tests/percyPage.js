const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
	await page.goto('');
	await page.waitFor('');
	await percySnapshot('');
});