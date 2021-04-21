const PercyScript = require('@percy/script');
const options = {
	headless: false
};

PercyScript.run(async (page, percySnapshot) => {
	await page.goto('http://localhost/PercyWebsite/');
	await percySnapshot('SampleWebsite');
}, options);