@all
Feature: Login test

    @positive
    Scenario: Login successfully
        Given I open the web
        When I input the valid creds
        Then I should see the inventory page

    @negative
    Scenario Outline: Login failed
        Given I open the web
        When I input <username> and <password>
        Then I should see the error message

        Examples:
            | username       | password    |
            | standard_user  | Value 2     |
            | wrong_user     | secret_sauce|