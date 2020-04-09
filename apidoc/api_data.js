define({ "api": [
  {
    "type": "post",
    "url": "/notifications",
    "title": "Create Notification",
    "name": "CreateNotification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Notifications unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Notification.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n       \"_id\": \"5e84de067ae5afdd6b0e38a6\",\n       \"title\": \"curfew covid- 19\",\n       \"description\": \"It's not just day 08 of the 21-day India lockdown.\",\n       \"createdAt\": \"2020-04-01T18:31:34.628Z\",\n       \"updatedAt\": \"2020-04-01T18:31:34.628Z\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotificationNotFound",
            "description": "<p>The id of the Notification was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NotificationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Notifications.ts",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/notifications",
    "title": "Get all Notifications",
    "name": "GetNotification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Notifications unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Notification.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5e84dc858b4943dd1d2bd600\",\n        \"title\": \"CURFEW\",\n        \"description\": \"It's not just day 08 of the 21-day India lockdown.\",\n        \"createdAt\": \"2020-04-01T18:25:09.553Z\",\n        \"updatedAt\": \"2020-04-01T18:25:09.553Z\"\n    },\n    {\n        \"_id\": \"5e84dcb28b4943dd1d2bd601\",\n        \"title\": \"covid-19\",\n        \"description\": \"It's not just day 08 of the 21-day India lockdown.\",\n        \"createdAt\": \"2020-04-01T18:25:54.054Z\",\n        \"updatedAt\": \"2020-04-01T18:25:54.054Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotificationNotFound",
            "description": "<p>The id of the Notification was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NotificationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Notifications.ts",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/notifications/:_id",
    "title": "Get one Notification",
    "name": "Get_one_Notification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Notifications unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of event.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"_id\": \"5e84dc858b4943dd1d2bd600\",\n     \"title\": \"corona-covid-19\",\n     \"description\": \"Maharashtra CM Uddhav Thackeray announced the curfew on Monday evening after holding meetings with divisional commissioners, collectors, IPS officers & other senior officials in the state via video conferencing.\",\n     \"createdAt\": \"2020-04-01T18:25:09.553Z\",\n     \"updatedAt\": \"2020-04-01T18:40:42.222Z\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotificationNotFound",
            "description": "<p>The id of the Notification was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NotificationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Notifications.ts",
    "groupTitle": "Notification"
  },
  {
    "type": "put",
    "url": "/notifications/:_id",
    "title": "Update one Notification",
    "name": "Update_one_Notification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Notifications unique ID.</p> <pre><code>   {        &quot;title&quot;: &quot;covid- 19&quot;,        &quot;description&quot;: &quot;COVID-19 pandemic is spreading, an outbreak is “looking imminent&quot;,    }</code></pre>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>Success true status for update.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n          \"success\": true\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotificationNotFound",
            "description": "<p>The id of the Notification was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NotificationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Notifications.ts",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create User",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "        {\n           \"deviceId\": \"asfgdfsa112\",\n\t          \"name\": \"sagar\"\n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId number of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Responce:",
          "content": "{\n      \"_id\": \"5e8ac99e3a397520b0fb0d21\",\n      \"invitedTo\":[],\n      \"geolocation\":{ \"coordinates\":[]  },\n      \"deviceId\": \"aefqawef122\",\n      \"name\": \"vaibhav\",\n      \"health\": \"fine\",\n      \"createdAt\": \"2020-04-06T06:18:06.835Z\",\n      \"updatedAt\": \"2020-04-06T06:18:06.835Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Users.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId Number of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "health",
            "description": "<p>Health  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "geolocation",
            "description": "<p>Geolocation of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notificationtoken",
            "description": "<p>Notificationtoken of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwttoken",
            "description": "<p>JWTtoken of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n      {\n          \"invitedTo\": [],\n        \"geolocation\": {\n           \"type\": \"Point\",\n           \"coordinates\":[1,2]\n        },  \n          \"_id\": \"5e84c96f34edaed699dfde8c\",\n          \"deviceId\": \"dthjgj123\",\n          \"name\": \"Abhay\",\n          \"createdAt\": \"2020-04-01T17:03:43.480Z\",\n          \"updatedAt\": \"2020-04-02T12:29:30.976Z\",\n          \"JWTtoken\": \"fdgbdshjkjhngfv\",\n          \"notificationtoken\": \"asdfgjhgfdbnyuhg\",\n          \"health\": \"sick\"\n      }\n      {\n          \"invitedTo\": [],\n        \"geolocation\": {\n           \"type\": \"Point\",\n           \"coordinates\":[3,4]\n        }, \n         \"_id\": \"5e84c7bae5f9a6d653759b02\",\n          \"deviceId\": \"dfghjhhy234\",\n          \"name\": \"Mayuri\",\n          \"createdAt\": \"2020-04-01T16:56:26.688Z\",\n          \"updatedAt\": \"2020-04-01T16:56:26.688Z\"\n          \"JWTtoken\": \"asdvgfdgrhds\",\n          \"notificationtoken\": \"agesaderthfdf\",\n          \"health\": \"Fine\"\n      }\n  ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Users.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:_id",
    "title": "Get one User",
    "name": "Get_one_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId Number of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "health",
            "description": "<p>Health  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "geolocation",
            "description": "<p>Geolocation of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notificationtoken",
            "description": "<p>Notificationtoken of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwttoken",
            "description": "<p>JWTtoken of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"invitedTo\":[],\n        \"geolocation\": {\n           \"type\": \"Point\",\n           \"coordinates\":[1,2]\n        }, \n        \"_id\": \"5e84c96f34edaed699dfde8c\",\n        \"deviceId\": \"aegrwa123\",\n        \"name\": \"Abhay\",\n        \"health\": \"sick\",\n        \"createdAt\": \"2020-04-01T17:03:43.480Z\",\n        \"updatedAt\": \"2020-04-02T12:21:55.626Z\",\n        \"JWTtoken\": \"fdgbdshjkjhngfv\",\n        \"notificationtoken\": \"asdfgjhgfdbnyuhg\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Users.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:_id",
    "title": "Update one User",
    "name": "Update_one_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> <pre><code>  {         &quot;deviceId&quot;: &quot;asgda123&quot;,         &quot;name&quot;: &quot;Abhay&quot;,         &quot;geolocation&quot;: {            &quot;type&quot;: &quot;Point&quot;,            &quot;coordinates&quot;:[1,2]         },         &quot;health&quot;: &quot;sick&quot;,         &quot;notificationtoken&quot;:&quot;asdfgjhgfdbnyuhg&quot;,         &quot;JWTtoken&quot;:&quot;fdgbdshjkjhngfv&quot;   }</code></pre>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>Success true status for update.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n          \"success\": true\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Users.ts",
    "groupTitle": "User"
  }
] });
