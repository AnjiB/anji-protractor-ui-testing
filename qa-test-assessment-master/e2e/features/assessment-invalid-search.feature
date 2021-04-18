Feature: Search Feature with Invalid Values
    
    Scenario: Open the browser and search for invaid person and validate the message
        Given The app is open on "localhost"
        Then Page should have valid header
        When User search for person "r2afafa"
        Then User gets message "Not found."

    Scenario: Open the browser and search for invaid planet and validate the message
        Given The app is open on "localhost"
        When User search for planet "r2afafa"
        Then User gets message "Not found."