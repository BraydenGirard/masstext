# Mass Text
### Requirements
- Node 10+
- CSV called **numbers.csv** in the root of the project with title of **phone** and 10 digit number entries starting with a **+** with no spaces (example below)
```
phone
+16137778888
+16135552222
+16139991111
```
- A **.env** file in the root of the project that looks like the following:
```
TWILLIO_ACCOUNT_ID=234234234234234
TWILLIO_AUTH_TOKEN=234324234234234
TWILLIO_NUMBER=+18889995454
```
### Install
- npm install

### Run
- node sendText "Your message here"