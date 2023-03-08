---
layout:     post 
title:      "7 Curl Commands That Every Developer Should Know!"
subtitle:   "Networking"
date:       2022-02-24
author:     "Mishal Abdullah"
image : "img/black.png"
URL: "curl"
tags:
  - curl
  - Networking
---

![thumbnail](/img/curl.png)

# What is a curl command

Curl is a command line tool used to transfer data to and from the servers, using the supported protocols (HTTP, FTP, IMAP, POP3, SCP, SFTP, SMTP, TFTP, TELNET, LDAP, or FILE).It is available on windows , MacOs and Linux.
Uses of curl

    for downloading web images
    for downloading web pages
    for authentication
    SSL connections
    FTP uplaods
    To test the output of an API
    and more

## Syntax

curl [options][URL..]

**Common Options**

    -o for saving the data in specific file
    -c for resuming interrupted Downloads
    -O for downloading multiple url’s (seperated with space)
    -l for viewing the HTTP header’s information
    -I for fetching only the header information
    -v for viewing the entire TLS handshake
    -k for ignoring invalid or self-signed certificates
    -C for resuming the file transfer
    -f for failing silently

Warning

Always mention the protocol before running the command
Examples

    Requesting A Page:

For viewing the source code of a web page , similar to page source option in a browser. If no protocols are mention it defaults to HTTP

curl google.com

## 2. For Downloading Contents Of A Web Page:

There are two options available to download and save a file

curl -o google.txt https://google.com
```
# -o is the option used for saving the output, filename is            
# google.txt (file extension can be changed)curl https://google.com > google.txt
# > is used for saving the output in a file
```
## 3. Ignore invalid or self-signed certificates:

When we are testing API endpoints, it is running on your testing instance, hence you might have a self-signed certificate or an invalid one. By using -k, we don’t allow curl to verify the validity of the certificate and establish an insecure connection for testing.
```
curl -k https://localhost/my_apitest
```
## 4. API Authentication

Most of the API does require user authentication. For authentication we can use -u for specifying the username and curl prompts for password.
```
curl -u <user:password> https://my-test-api.com/endpoint
```

## 5. For Resuming The File Transfer

Using -C for telling the curl to automatically find out where and how to
resume the file transfer. It then uses the given output or input files
to figure that out.
```
curl -C - https://example.com
```
## 6. Failing Silently

f, is used for failing silently(no output) on server errors, this is mostly done on scripts to better deal with failed attempts. In normal cases when an HTTP server fails to deliver adocument, it returns an HTML document stating so (which often also describes why and more). This flag will prevent curl from outputting that and return error 22.
```
curl --fail https://example.com
```
## 7. Fetching The Headers

We use -I for fetching the headers of HTTP servers . When used on an FTP or FILE file, curl displays the file size and last modification time only.
```
curl -I https://example.com
```
## Bonus Tip:

Sharing Files via curl:- open your terminal type the first command below and after few seconds you will receive a link . share the link to the person you wish to send the file, they can open it in their browser and download it.
```
curl -F "file=@Lava.jpg" 0x0.st
#Lava.jpg file name, must be in the current directory
http://0x0.st/oZ2_.jpg
```
For learning more about curl run these commands in the shell
```
curl --help
man curl
visit:https://curl.se/
```
