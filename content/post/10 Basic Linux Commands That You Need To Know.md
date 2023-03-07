---
layout:     post 
title:      "10 Basic Linux Commands That You Need To Know"
subtitle:   "Linux Based"
date:       2022-09-03
author:     "Mishal Abdullah"
image : "img/black.png"
URL: "commandline"
tags:
  - Terminal
  - Linux
  - Keyboard
---


# 10 Basic Linux Commands That You Need To Know
## 1. cd 
The cd command is used for changing directories. cd stands for "change the working directory". use can to use to change from one folder to another.
**Changing Your Directory **

- You can use cd then, followed by the folder directory you want to change to
	for example:-  `cd Downloads`

- If you want to go through multiple directories at a time, instead of using `cd Downloads` and then `cd Wallpapers`  you can use cd then followed by the directory name then the next directory name separated by a `/`
	for example:-  `cd Downloads/wallpapers` 
							`cd home/prinux/Desktop/Todolist`
- if you want to change to change to a the present directory to the previous one, you can use cd followed by two dots
	for example:- `cd ..`
							`pwd`  (The `pwd`  command is used to print the current working directory)
							`/home/prinux/Desktop`
- if you are present is the Documents directory of your system you can use `/`  in the beginning of the folder you wish move
	 for example:- `cd /usr/share/applications`

## 2. Creating Files & Folders

#### touch 
The touch command is used to make new files in the current working directory. With touch you can create pretty much any file types.
example:-  `touch hello.txt hello.csv hello.xcf`

### mkdir
The mkdir command is used to create folders in linux.
example:-  `mkdir foldername`
#### chmod 
The chmod command is used to make a script/file executable and non-executable. You can also set file permissions using chmod.
example:- `chmod +x filename`

### ls 
the "ls" command shows the files present in the current working directory.
you can use the `-al` flag to display all the hidden files also.


#### rm 
- The `rm`  command is used to remove files in your system.
	example:-  `rm helloworld.py`
- You can add the `-rf`  flag along with rm to remove folders.

## Copying, Moving Your Files
#### cp 
- The  `cp`  command is used for copying your files and folders. You must specify the file path to where the file must be copied to.
	example:- `cp hello.txt /home/prinux/Documents`
- You can also use cp to copy the file contents of a file and save it by any other name. For that you are not required to give the file path
	example:- `cp hello.txt helloworld.txt`

#### mv
- The mv command is used to move your files and folders. As cp your are also required to give the file path to where the file is to be saved.
	example:-  `mv hello.txt /home/prinux/Downloads`
- The mv command can also be used to rename your files, as same as cp, your are not required to give the file path.
	example:- `mv hello.txt namaste.txt`

## Echoing Contents Into Your Terminal
#### Cat 
The  `cat`   command is used to print contents of a file into  your terminal . This is suitable for small files as, after running it you will see the end of the file.
example:- `cat helloworld.py`

#### Less 
The suitable for large files as it starts in the top part of the file and is required to scroll down for viewing the rest of the file
example:- `less `


>
> If you like this blog , please don’t forget to give a clap . if you want to learn more about privacy,security,technology and Linux, consider following me. Plus, whatever I find interesting and valuable.
