Feature: Editar Page

    Feature Page where the users can edit user

    Scenario: Edit Successful
        Given Open webtables
        When Edit a user
        And Edit first name "Bruce"
        And Edit last name "Wayne"
        And Edit email "bruce wayne.com"
        And Edit age "35"
        And Edit salary "100"
        And Edit department "TI"
        Then A user will be submit in
