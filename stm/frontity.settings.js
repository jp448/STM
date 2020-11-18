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
            {
              "name": "STM",
              "link": "/category/home",
              "menu": []
            },
            {
              "name": "Projects",
              "link": "/category/projects/",
              "menu": [
                {
                  "name": "Selected Projects",
                  "link": "/category/projects/"
                },
                {
                  "name": "All Projects",
                  "link": "/category/projects/?type=list"
                }
              ]
            },
            {
              "name": "Competitions",
              "link": "/category/competitions/",
              "menu": [
                {
                  "name": "Selected Competitions",
                  "link": "/category/competitions/"
                },
                {
                  "name": "All Competitions",
                  "link": "/category/competitions/?type=list"
                }
              ]
            },
            {
              "name": "Info",
              "link": "/info",
              "menu": []
            }
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
