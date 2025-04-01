//native module or core module
import fs from "node:fs" //it is a better practice node:fs
import net from "node:net"
import dgram from "node:dgram"
import http from "node:http"
import https from "node:https"
import cluster from "node:cluster"
import child_process from "node:child_process"
import zlib from "node:zlib"
import worker_threads from "node:worker_threads"
import crypto from "node:crypto"




// console.log(fs)
console.log(typeof fs) //Object     

// user module 
import sum from "./math.js"
// console.log(sum(6, 5))


//where the fs code written?
// The fs (File System) module in Node.js is a core module implemented using a combination of JavaScript and C++. The low-level file system operations rely on the cross-platform libuv library, written in C++, which interacts with the operating system for tasks like reading, writing, or managing files. The high-level JavaScript API in lib/fs.js serves as a wrapper around these C++ bindings, providing both synchronous and asynchronous methods, including a Promises-based API (fs.promises). This layered architecture ensures efficient, cross-platform performance while offering a simple, developer-friendly interface for file system operations



