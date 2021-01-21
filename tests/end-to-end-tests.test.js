import LoginPage from '../pages/LoginPage'
import { username, password, timeout} from '../config'

describe("Ayopop Test",() => {
		//let homePage
		let loginPage
	
		beforeAll(async () => {
			jest.setTimeout(timeout)
		//	homePage = new HomePage()
			loginPage = new LoginPage()
		})

    it('should login to application', async () => {
		await loginPage.visit()
	    await loginPage.isLoginFormDisplayed()
		await loginPage.login(username, password)
	
	})

})