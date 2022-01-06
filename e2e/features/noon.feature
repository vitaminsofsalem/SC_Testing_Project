Feature: Noon service
    In order to provide proper representation of iPhone prices
    As a developer
    I want to make sure scraping of noon.com is done properly

    Scenario Outline: scrape iphones from noon.com
        Given A request
        When I send a GET request to /noonscraper
        Then I get response code 200 and valid array of items
