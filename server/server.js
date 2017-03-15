const mockserver = require('mockserver-grunt');
const mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient;

mockserver.start_mockserver({ serverPort: 1080 });

const expect = () => {

    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "method": "OPTIONS",
            "path": "/login"
        },
        "httpResponse": {
            "statusCode": 200,
            "headers": [
                {
                    "name": "Access-Control-Allow-Origin",
                    "values": ["*"]
                },
                {
                    "name": "Access-Control-Allow-Headers",
                    "values": ["Cache-Control", "Pragma", "Origin", "Authorization", "Content-Type", "X-Requested-With"]
                },
                {
                    "name": "Access-Control-Allow-Methods",
                    "values": ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]
                },
                {
                    "name": "Content-Type",
                    "values": ["application/json; charset=utf-8"]
                },
                {
                    "name": "Cache-Control",
                    "values": ["public, max-age=86400"]
                }
            ],
            "body": 'CHROME'
        },
        "times": {
            'unlimited': true
        }
    });


    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "method": "POST",
            "path": "/login",
            "body": {
                "type": "JSON",
                "value": JSON.stringify({ Username: "User", Password: "Password" }),
                "matchType": "STRICT"
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "headers": [
                {
                    "name": "Access-Control-Allow-Origin",
                    "values": ["*"]
                },
                {
                    "name": "Access-Control-Allow-Headers",
                    "values": ["Cache-Control", "Pragma", "Origin", "Authorization", "Content-Type", "X-Requested-With"]
                },
                {
                    "name": "Access-Control-Allow-Methods",
                    "values": ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]
                },
                {
                    "name": "Content-Type",
                    "values": ["application/json; charset=utf-8"]
                },
                {
                    "name": "Cache-Control",
                    "values": ["public, max-age=86400"]
                }
            ],
            "body": JSON.stringify({ Auth: "Logged", Language: "EN" }),
            "delay": {
                "timeUnit": "SECONDS",
                "value": 1
            }
        },
        "times": {
            'unlimited': true
        }
    });


    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "method": "POST",
            "path": "/login",
            "body": {
                "type": "JSON",
                "value": JSON.stringify({ Username: "", Password: "" }),
                "matchType": "STRICT"
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "headers": [
                {
                    "name": "Access-Control-Allow-Origin",
                    "values": ["*"]
                },
                {
                    "name": "Access-Control-Allow-Headers",
                    "values": ["Cache-Control", "Pragma", "Origin", "Authorization", "Content-Type", "X-Requested-With"]
                },
                {
                    "name": "Access-Control-Allow-Methods",
                    "values": ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]
                },
                {
                    "name": "Content-Type",
                    "values": ["application/json; charset=utf-8"]
                },
                {
                    "name": "Cache-Control",
                    "values": ["public, max-age=86400"]
                }
            ],
            "body": JSON.stringify({ Auth: "Denied" }),
            "delay": {
                "timeUnit": "SECONDS",
                "value": 1
            }
        },
        "times": {
            'unlimited': true
        }
    });



};


setTimeout(expect, 10000);