/*******************************************************
*  This module is to print, manage, and handle the console
*  logs, it is originally designed for one page applications
*
*  Date of Creation: 01-08-2018
*  Creator: Raman Tehlan
*********************************************************/

//
// This is the structure of the confiration of this 
// module
//


//
// This is the strucutre of a group, which is used
// in printing a group in console
//
export class Group{
	tag: string = "";
	msg: any;
	style: string = "";
}

// 
// Class to represent the structure of 
// a history object
//
export class History{
	tag: string = ""; 
	msg: any = ""; 
	time: any = ""}

// 
// This is the main class that will be used to print logs
// 
export class JTLog { 

	// This is the configuration for JTLog
	config: {[x: string]: any} = {
		allowLog : true,
		allowRecording: true,
		pageName : "Default",
		appName : null,
		appStartTime: new Date().toLocaleString()
	}
	// To record 
	logRecords: History[] = [];


	// Tags style for logs
	startBold:string = "color:gray; font-size:13px;font-weight:bold;";
	table:string = "color:green; font-size:11px;";
	default:string = "color:black; font-size:11px;";
	error:string = "color:red;font-size:11px;";
	warn:string = "color:orange; font-size:11px;";
	info:string = "color:#6f1a07; font-size:11px;";
	call:string = "color:green; font-size:11px;";
	file:string = "color:blue; font-size:11px;";

	//
	// To change and set a new configuration value
	//
	setConfig(name: string, value: any): void{
		this.config[name] = value;
	}

	// 
	// To get a value of configuration
	// 
	getConfig(name:string): any{
		return this.config[name];
	}

	//
	// To clear the console log and the collected logs
	// 
	clear(): void{
		console.clear();
	}

	action(tag: string, msg: any , style: string = ""){
		// To swich according to the tag
		switch(tag){
			case "table":
				console.table( msg);
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
				let start: Group[] = [];
				start.push({	
								tag: "startBold" , 
								msg: "--------------------------------------------------",
								style:  ""
						   });
				start.push({	
								tag: "startBold" , 
								msg: "App Name: " + msg + "\n" +
									 "App Starting Time: " + this.config["appStartTime"] + "\n" +
									 "JTLog Version: " + "1.3.3"  
								,
								style:  ""
							});
				start.push({	
								tag: "startBold" , 
								msg: "--------------------------------------------------",
								style:  ""
						   });

				this.group("JTLog Started", start);
			break;
			case "startBold":
				console.log("%c" + msg, this.startBold + style);
			break;
			default:
				console.log('%c' + msg , this.default + style);
			break;
		}
	}


	// To push the log to console
	public log(tag: string, msg: any , style: string = ""): void{
		//To Print the logs
		if(this.config["allowLog"])
			this.action(tag, msg, style);
		//To Record the logs
		if(this.config["allowRecording"] && tag != "start"){
				let currentTime = new Date().toLocaleString()
				this.record(tag, msg, currentTime);
		}

	}

	//
	// To print a group 
	// 
	group(name: string, groupMsg: Group[]){
		console.groupCollapsed(name);
			// To get print the n memebers of groupMsg
			for(let pos = 0; pos < groupMsg.length; pos++){
				this.log(groupMsg[pos].tag , groupMsg[pos].msg, groupMsg[pos].style);
			}
		console.groupEnd();
	}

	// 
	// To record the logs
	// 
	record(tag: string, msg: any, time: any ){
		this.logRecords.push({tag, msg, time});
	}

	// 
	// To Print the records
	//
	printRecord(){
		console.log("%c** Printing Log Records **", "color:gray; font-size:13px;font-weight:bold;");
		console.table(this.logRecords);
	}

	// 
	// To return the array of log records
	// 
	public getLogRecord() : History[] {
		return this.logRecords;
	} 

    constructor() { 

    }

}

/*
 		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
*/
