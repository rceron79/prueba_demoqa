Feature: agregar Page

    Feature Page where the users can add new user

    Scenario: Add Successful
        Given Open webtables
        When Add a new user
        And A user add new first name "Bruce"
        And A user add new last name "Wayne"
        And A user add email "bruce wayne.com"
        And A user add age "35"
        And A user add salary "100"
        And A user add department "TI"
        Then A user will be submit in

