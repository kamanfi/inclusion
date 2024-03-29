Feature: Searching for cucumbers
  As an internet user
  In order to find out more about cucumbers
  I want to be able to search for information about cucumbers
  
  Scenario: Google cucumber search
    When I search Google for "cucumbers"
    Then I should see some results

  Scenario: Cats should return at least 8 results
    When I search Google for "cats"
    Then I should see at least 8 results

  Scenario: I should be able to click image button and see images of cats
    When I search Google for "cats"
    Then I should be able to click image button and see images of cats
