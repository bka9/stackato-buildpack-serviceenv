This buildpack will pull individual key : value pairs from the STACKATO_SERVICES variable, and make individual environment variables from them

For example:
 with this bit of JSON as the value fo STACKATO_SERVICES
 
 ```
 STACKATO_SERVICES={"eve-dev":{"eve_key":"4f567ea2c43a3eb9a576c"}}
```

You'll get this environment variable set:

```
eve_key=4f567ea2c43a3eb9a576c
```
