Feature: Login test

    @all
    Scenario: Login successfully
        Given I open the web
        When I input the valid creds
        Then I should see the inventory page

    @all
    Scenario: Login failed
        Given I open the web
        When I input the invalid creds
        Then I should see the error message