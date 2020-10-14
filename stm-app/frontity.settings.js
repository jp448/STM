const settings = {
  "name": "stm-app",
  "state": {
    "frontity": {
      "url": "http://wordpress.proctor-webworks.com",
      "title": "STM",
      "description": "WordPress installation for STM development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "STM",
              "/category/home/"
            ],
            [
              "PROJEKTE",
              "/category/projects/"
            ],
            [
              "WETTBEWERBE",
              "/category/competitions/"
            ],
            [
              "BETRERUNGEN",
              "/category/consultancies/"
            ],
            [
              "INFO",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://wordpress.proctor-webworks.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
