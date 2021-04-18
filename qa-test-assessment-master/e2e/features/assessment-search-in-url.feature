Feature: Search Feature with Invalid Values
    
    Scenario: Open the browser and search by appending query string to url
        Given The app is open on "localhost"
        Then Page should have valid header
        When url appended with search type "people" and query "afjafja" and search
        Then User gets message "Not found."
    

    Scenario: Open the browser and search by appending query string to url
        Given The app is open on "localhost"
        Then Page should have valid header
        When url appended with search type "planets" and query "Hoth" and search
        Then User gets planet count 1
        And The Planet at 0 name should be "Hoth"
        And The Population should be "unknown"
        And The Climate should be "frozen"
        And The Gravity should be "1.1 standard"