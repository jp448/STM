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
              "name": "stm",
              "link": "/category/home",
              "menu": []
            },
            {
              "name": "projekte",
              "link": "/category/projects/?type=list",
              "menu": []
            },
            {
              "name": "betreuungen",
              "link": "/category/competitions/?type=list",
              "menu": []
            },
            {
              "name": "info",
              "link": "/info",
              "menu": [
                {
                  "name": "profil",
                  "link": "/profil"
                },
                {
                  "name": "team",
                  "link": "/team"
                },
                {
                  "name": "jobs",
                  "link": "/jobs"
                },
                {
                  "name": "kontakt",
                  "link": "/kontakt"
                },
                {
                  "name": "impressum",
                  "link": "/impressum"
                }
              ]
            },
            {
              "name": "aktuelles",
              "link": "/aktuelles",
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
