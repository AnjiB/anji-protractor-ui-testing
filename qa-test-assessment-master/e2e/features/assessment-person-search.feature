Feature: Person Search Feature with Valid Values
       Scenario Outline: Open the browser and search for valid person and validate the output
        Given The app is open on "localhost"
        When User search for person "r2"
        Then User gets person count 1
        And The Person at <Index> name should be "<PersonName>"
        And The Gender should be "<Gender>"
        And The Birth Year should be "<Birth Year>"
        And The Eye color should be "<Eye Color>"
        And The Skin color should be "<Skin Color>"
     Examples:
      |Index| PersonName | Gender | Birth Year  | Eye Color    | Skin Color  |
      | 0   | R2-D2      | n/a    | 33BBY       | red          |  white, blue |

      Scenario Outline: Open the browser and search for valid person with multiple results and validate the output
        Given The app is open on "localhost"
        When User search for person "Darth"
        Then User gets person count 2
        And The Person at <Index> name should be "<PersonName>"
        And The Gender should be "<Gender>"
        And The Birth Year should be "<Birth Year>"
        And The Eye color should be "<Eye Color>"
        And The Skin color should be "<Skin Color>"
     Examples:
      |Index| PersonName | Gender | Birth Year  | Eye Color    | Skin Color|
      | 0   | Darth Vader| male   | 41.9BBY     | yellow       | white     |
      | 1   | Darth Maul | male   | 54BBY       | yellow       | red       |