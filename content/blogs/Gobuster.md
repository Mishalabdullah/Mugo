---
layout: post
title: "Gobuster - Finding Hideden Directories"
subtitle: "Hacking"
date: 2022-03-27
author: "Mishal Abdullah"
URL: "gobuster"
image: /images/blogs/gobuster.png
tags:
  - Hacking
  - Kali
  - Networking
---

### How To Find Hidden Directories In Web Pages.

### What is Gobuster ?

Gobuster is a tool and helps us to find directories and files present in a website or a web app.It helps hackers to find the files and directories that are not linked any where is the website. Gobuster is also open-source and it works by sending HTTP requests to the website and enumerating the directory and file names.

Go buster is written in which makes it fast.Gobuster also has support for extensions with which we can amplify its capabilities. Gobuster also can scale using multiple threads and perform parallel scans to speed up results.

### How to install Gobuster ?

If you are using Ubuntu or Debian-based OS, you can use `apt` to install Gobuster.

```
$ apt install gobuster
```

To install Gobuster on Mac, you can use Homebrew.

```
$ brew install gobuster
```

To install Gobuster on Windows and other versions of Linux, you can find the [installation instructions here](https://github.com/OJ/gobuster).

For checking the installlation run the command:-

```
$ gobuster --version
```

### How to run Gobuster ?

In this guide we will only dicuss about the 2 main flags that are required to run gobuster.

1.  -u

The -u flag is used to specify the url that gobuster need to send HTTP request.

2. -w

The -w flag is used for specifying the the word-list path.In case if you don’t know what wordlist is, its a test document whihc contains a lot of words.

**EXAMPLE :-**

```bash
gobuster dir -u https://google.com   -w /usr/share/wordlists/dirb/big.txt
```

If your are using kali linux the wordlists are present in the “usr/share/wordlists” directory. If you want to know the simplest way to install kali linux which is through docker you can find the guide HERE.

OUTPUT:-

![](https://cdn-images-1.medium.com/max/800/1*mFeSTixB1-zuHSJbl5KJrA.png)

Here you can see all the directories of google.com.

> If you like this blog , please don’t forget to give a clap . if you want to learn more about privacy,security,technology and Linux, consider following me. Plus, whatever I find interesting and valuable.
