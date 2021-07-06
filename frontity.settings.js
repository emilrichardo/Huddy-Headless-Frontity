const settings = {
  "name": "Udy",
  "state": {
    "frontity": {
      "url": "http://udy.ar",
      "title": "Francisco Lescano",
      "description": "Blog"
    }
  },
  "packages": [
    {
      "name": "udy-theme",
      "state": {
        "theme": {
       
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://udy.local"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
