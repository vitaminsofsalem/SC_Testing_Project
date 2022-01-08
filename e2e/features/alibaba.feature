Feature: Alibaba service
    In order to provide proper representation of iPhone prices
    As a developer
    I want to make sure scraping of alibaba.com is done properly

    Scenario Outline: scrape iphones from alibaba.com
        Given A request
        When I send a GET request to "/alibabascraper"
        Then I get response code 200 and valid array of items

    Scenario Outline: search for results in alibaba.com
        Given A request 
        When I send a GET request to "/alibabascraper" with search query "iphone"
        Then I get response code 200 and valid array of items
        And I get results match with the query

