
class LoginPage {

    get usernameInput() {
        return $("input[id='user-name']")
    }

    get passwordInput() {
        return $("input[id='password']")
    }

    get loginButton() {
        return $("input[id='login-button']")
    }

    get errorMsg() {
        return $("//h3[@data-test='error' and contains(text(), 'Epic sadface')]")
    }

    async login(username,password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }

    async assertErrorMsg(expectedErrorMsg) {
        await expect(this.errorMsg).toHaveText(expectedErrorMsg);
    }
}



module.exports = new LoginPage();