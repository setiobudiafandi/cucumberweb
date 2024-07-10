const {Given, When, Then} = require("@wdio/cucumber-framework")
const Page = require("../pages/page")
const LoginPage = require("../pages/loginPage")

Given(/^I open the web$/, async () => {
    await Page.open('/')
})

When(/^I input the valid creds$/, async () => {
    await LoginPage.login('standard_user','secret_sauce')
})

Then(/^I should see the inventory page$/, async () => {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
})

When(/^I input (\w+) and (.+)$/, async (username,password) => {
    await LoginPage.login(username,password)
})

Then(/^I should see the error message$/, async () => {
    await LoginPage.assertErrorMsg('Epic sadface: Username and password do not match any user in this service')
})