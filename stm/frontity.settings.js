const settings = {
  "name": "stm",
  "state": {
    "frontity": {
      "url": "http://wordpress.proctor-webworks.com.w01ac8b2.kasserver.com",
      "title": "stm",
      "description": "WordPress installation for Frontity development"
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
              "/category/home"
            ],
            [
              "Projects",
              "/category/projects/"
            ],
            [
              "Competitions",
              "/category/competitions/"
            ],
            [
              "Info",
              "/page/info"
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
          "api": "http://wordpress.proctor-webworks.com.w01ac8b2.kasserver.com/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
