const settings = {
  "name": "stm",
  "state": {
    "frontity": {
      "url": "http://stm-admin.stm-architekten.de",
      "title": "stm architekten",
      "description": "Die Webseite des Architektenbüro stm architekten."
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
              'icon': 'logo',
              "menu": []
            },
            {
              "name": "projekte",
              "link": "/category/projects/?type=list",
              'icon': 'project',
              "tableheaders": [ {
                  "name": "projekt",
                  "path": 'title',
                  "resource": 'rendered'
                }, {
                  "name": "jahr",
                  "path": 'acf',
                  "resource": 'year'
                }, {
                  "name": "ort",
                  "path": 'acf',
                  "resource": 'location'
                }, {
                  "name": "programm",
                  "path": 'acf',
                  "resource": 'program'
                }, {
                  "name": "inhalt",
                  "path": 'acf',
                  "resource": 'description'
                }, {
                  "name": "wettbewerb",
                  "path": 'acf',
                  "resource": 'competition'
                }, {
                  "name": "gebaut",
                  "path": 'acf',
                  "resource": 'built'
                } ],
              "menu": []
            },
            {
              "name": "betreuungen",
              "link": "/category/competitions/?type=list",
              'icon': 'competition',
              "tableheaders": [ {
                "name": "projekt",
                "path": 'title',
                "resource": 'rendered'
              }, {
                "name": "jahr",
                "path": 'acf',
                "resource": 'year'
              }, {
                "name": "ort",
                "path": 'acf',
                "resource": 'location'
              }, {
                "name": "auftraggeber",
                "path": 'acf',
                "resource": 'client'
              }, {
                "name": "verfahren",
                "path": 'acf',
                "resource": 'procedure'
              }, {
                "name": "leistung",
                "path": 'acf',
                "resource": 'achievement'
              }, {
                "name": "umfang",
                "path": 'acf',
                "resource": 'scope'
              } ],
              "menu": []
            },
            {
              "name": "info",
              "link": "/info",
              'icon': 'info',
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
              "name": "download",
              "link": "/downloads",
              'icon': 'download',
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
          "api": "http://stm-admin.stm-architekten.de/wp-json/",
          "params": {
            "per_page": 100
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
