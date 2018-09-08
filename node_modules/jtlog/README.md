
<img src="https://raw.githubusercontent.com/ramantehlan/JTLog/develop/art/JTLog.png" width="120px">

# JTLog

[![npm version](https://badge.fury.io/js/jtlog.svg)](https://badge.fury.io/js/jtlog)
  [![npm](https://img.shields.io/npm/dm/jtlog.svg)](https://www.npmjs.com/package/jtlog)
 [![Build Status](https://travis-ci.org/ramantehlan/JTLog.svg?branch=master)](https://travis-ci.org/ramantehlan/JTLog)
 [![NpmLicense](https://img.shields.io/npm/l/jtlog.svg)](https://www.npmjs.com/package/jtlog)

JavascriptTypescriptLog (JTLog) is Log library.

## Features 

- Simple Console logging.
- Record/Store console logs for a particular session, return it in an array.
- 2 Modes for development and production (Won't be visible to users).
- Switch between consoling and recording, or choose both.

## Installation 

```sh
npm i jtlog --save
```
## Usage

### Javascript

```javascript
// Include the module
var JT = require('jtlog');

```

### TypeScript
```typescript
import { JTLog } from 'jtlog';
JTLog.log("start", "App Started");
```

### General

```Typescript
// To start the module 
// appname will be replaced by your program/app name
JT.start("appname");

// To change configuration
// setConfig(NAME, VALUE)
// NAME: <string> List can be found in Configuration list
// VALUE: <any> New value you wish to set
JT.setConfig("allowLog",true);

// To get configuration value
JT.getConfig("allowLog"); // This will return true by default

// To log something in console
// log(TAG, MSG, STYLE)
// TAG: <string> To tag the message | List can be found below
// MSG: <any> you message, it can also be a object
// STYLE: <string> <optional> very basic css style works
JT.log('default',"App started", "color:black");

//
// We are using just one function to log, cause this will avoid error
// In case you add wrong tag, this won't be a problem.
//


// To get the array of log history/record 
let record: any = JT.getLogRecord();
```

> Note: JT is a module variable, It will be different for you, as you assign it.

## Configuration List

No | Name | Type | Description |
---|------|------|-------------|
1  | allowLog | `Boolean` | To decide if you wish to log or not
2  | allowRecording | `Boolean` | To allow recording of logs
3  | pageName | `String` | To set file name of current page we are on. 
4  | appName  | `String` | Name of app, it is set by user
5  | appStartTime | `String` | Time when app started


## Tag List

No | Tag | Description3  
---|------|------------|
1 | default | Normal log
2 | table | Print table
3 | warn | Print Warning 
4 | info | Print Information 
5 | start | Print Starting Heading
6 | call | Print when a function is called
7 | file | Print when a file is opened, also chances the fileName.
8 | error | Print a error 

## File Structure 

```
JTLog
|
├── src
│   ├── index.d.ts
│   └── index.js
├── test
│   └── test.js
├── art/..
├── node_modules/...
├── index.ts
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## Contribution
    Feel free to contribute.

## Licence

Copyright 2018 [Raman Tehlan](https://ramantehlan.github.io/) < Ramantehlan@gmail.com >

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
