"use strict";
/*******************************************************
*  This module is to print, manage, and handle the console
*  logs, it is originally designed for one page applications
*
*  Date of Creation: 01-08-2018
*  Creator: Raman Tehlan
*********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
//
// This is the structure of the confiration of this 
// module
//
//
// This is the strucutre of a group, which is used
// in printing a group in console
//
var Group = /** @class */ (function () {
    function Group() {
        this.tag = "";
        this.style = "";
    }
    return Group;
}());
exports.Group = Group;
// 
// Class to represent the structure of 
// a history object
//
var History = /** @class */ (function () {
    function History() {
        this.tag = "";
        this.msg = "";
        this.time = "";
    }
    return History;
}());
exports.History = History;
// 
// This is the main class that will be used to print logs
// 
var JTLog = /** @class */ (function () {
    function JTLog() {
        // This is the configuration for JTLog
        this.config = {
            allowLog: true,
            allowRecording: true,
            pageName: "Default",
            appName: null,
            appStartTime: new Date().toLocaleString()
        };
        // To record 
        this.logRecords = [];
        // Tags style for logs
        this.startBold = "color:gray; font-size:13px;font-weight:bold;";
        this.table = "color:green; font-size:11px;";
        this.default = "color:black; font-size:11px;";
        this.error = "color:red;font-size:11px;";
        this.warn = "color:orange; font-size:11px;";
        this.info = "color:#6f1a07; font-size:11px;";
        this.call = "color:green; font-size:11px;";
        this.file = "color:blue; font-size:11px;";
    }
    //
    // To change and set a new configuration value
    //
    JTLog.prototype.setConfig = function (name, value) {
        this.config[name] = value;
    };
    // 
    // To get a value of configuration
    // 
    JTLog.prototype.getConfig = function (name) {
        return this.config[name];
    };
    //
    // To clear the console log and the collected logs
    // 
    JTLog.prototype.clear = function () {
        console.clear();
    };
    JTLog.prototype.action = function (tag, msg, style) {
        if (style === void 0) { style = ""; }
        // To swich according to the tag
        switch (tag) {
            case "table":
                console.table(msg);
                break;
            case "default":
                console.log("%c" + msg, this.default + style);
                break;
            case "warn":
                console.warn("%cWarning: " + msg, this.warn + style);
                break;
            case "error":
                console.error("%cError: " + msg, this.error + style);
                break;
            case "info":
                console.info("%cInformation: " + msg, this.info + style);
                break;
            case "file":
                console.log("%cFile: " + msg, this.file + style);
                break;
            case "call":
                console.log("%cCall: " + msg, this.call + style);
                break;
            case "start":
                // To set app name
                this.config['appName'] = msg;
                // To store the logs for a group
                var start = [];
                start.push({
                    tag: "startBold",
                    msg: "--------------------------------------------------",
                    style: ""
                });
                start.push({
                    tag: "startBold",
                    msg: "App Name: " + msg + "\n" +
                        "App Starting Time: " + this.config["appStartTime"] + "\n" +
                        "JTLog Version: " + "1.3.3",
                    style: ""
                });
                start.push({
                    tag: "startBold",
                    msg: "--------------------------------------------------",
                    style: ""
                });
                this.group("JTLog Started", start);
                break;
            case "startBold":
                console.log("%c" + msg, this.startBold + style);
                break;
            default:
                console.log('%c' + msg, this.default + style);
                break;
        }
    };
    // To push the log to console
    JTLog.prototype.log = function (tag, msg, style) {
        if (style === void 0) { style = ""; }
        //To Print the logs
        if (this.config["allowLog"])
            this.action(tag, msg, style);
        //To Record the logs
        if (this.config["allowRecording"] && tag != "start") {
            var currentTime = new Date().toLocaleString();
            this.record(tag, msg, currentTime);
        }
    };
    //
    // To print a group 
    // 
    JTLog.prototype.group = function (name, groupMsg) {
        console.groupCollapsed(name);
        // To get print the n memebers of groupMsg
        for (var pos = 0; pos < groupMsg.length; pos++) {
            this.log(groupMsg[pos].tag, groupMsg[pos].msg, groupMsg[pos].style);
        }
        console.groupEnd();
    };
    // 
    // To record the logs
    // 
    JTLog.prototype.record = function (tag, msg, time) {
        this.logRecords.push({ tag: tag, msg: msg, time: time });
    };
    // 
    // To Print the records
    //
    JTLog.prototype.printRecord = function () {
        console.log("%c** Printing Log Records **", "color:gray; font-size:13px;font-weight:bold;");
        console.table(this.logRecords);
    };
    // 
    // To return the array of log records
    // 
    JTLog.prototype.getLogRecord = function () {
        return this.logRecords;
    };
    return JTLog;
}());
exports.JTLog = JTLog;
/*
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
*/
