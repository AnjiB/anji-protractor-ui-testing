Feature: Planet Search Feature with Valid Values
        
    Scenario Outline: Open the browser and search for valid planet and validate the output
        Given The app is open
        When User search for planet "Alderaan"
        Then User gets planet count 1
        And The Planet at <Index> name should be "<PlanetName>"
        And The Population should be "<Population>"
        And The Climate should be "<Climate>"
        And The Gravity should be "<Gravity>"
     Examples:
      |Index| PlanetName | Population | Climate  | Gravity    | 
      | 0   | Alderaan   | 2000000000 | temperate| 1 standard |

