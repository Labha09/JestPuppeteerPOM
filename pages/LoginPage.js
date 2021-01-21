import BasePage from './BasePage'

export default class LoginPage extends BasePage {
	async visit() {
		await page.goto('https://stagepanel.ayopop.id/admin/login')
	}

	async isLoginFormDisplayed() {
		await page.waitForXPath('//h4[@class="text-center text-primary"]')
		await page.waitForXPath('//input[@name="email"]')
		await page.waitForXPath('//input[@name="password"]')
	}

	async login(user, password) {
	  //  await page.waitForSelector('.form-control')
		await page.type('[type="text"]', user)
		await page.type('[type="password"]', password)
		await page.click('[type="submit"]')
				
	}
}
