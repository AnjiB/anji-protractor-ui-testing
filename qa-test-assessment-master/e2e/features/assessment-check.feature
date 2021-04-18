Feature: Check the installation of the protractor framework
        
    Scenario Outline: Open the browser and search for valid planet and validate the output
        Given The app is open on "localhost"
        When User search for planet "Alderaan"
        Then User gets planet count 1
        And The Planet <Index> name should be "<PlanetName>"
        And The Population should be "<Population>"
        And The Climate should be "<Climate>"
        And The Gravity should be "<Gravity>"
     Examples:
      |Index| PlanetName | Population | Climate  | Gravity    | 
      |1| Alderaan   | 2000000000 | temperate| 1 standard |

