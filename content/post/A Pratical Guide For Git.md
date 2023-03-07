This is a practical guide for git, and it is mainly aimed towards the ones who have no idea on what and how to use git. If you know someone how does not know on how to use git, send them this article.

## What is Git
> Git is a fast, scalable, distributed revision control system with an unusually rich command set that provides both high-level operations and full access to internals. 

Which means its a version control system, that tracks the changes that are made on a file/files. 
## How to install Git
**Windows**
installing git for windows [link](https://gitforwindows.org/)
**Mac**
installing git for mac
````bash
brew install git
````
**Ubuntu**
```bash
sudo apt-get install git-all
```
**Arch**
```
sudo pacman -S git
```

## How to configure Git
When you first install git you need to add your username and email.
**For adding your username**
```bash
git config --global user.name "username"
```

**For adding your email**
```bash
git config --global user.email "email"
```
## Basic Commands For Git
1. **git add**
The git add command is used to add files to git, so that the git can track. When you add files through the git add command they get staged. You can think it as an intermediate stage between the start and the end of something. 
**syntax :-**
```bash
# For adding one file
git add (filename)
# Adding multiple files
git add (filename1) (filename2)
# For adding all the files in a folder
git add *
```


2. **git commit**
Now you have staged and added your files with `git add`  for finalising it you need to run the command git commit command. It must be followed by a `-m`  tag and you must type message in quotes, stating your commit (what are you committing) you can also type garbage but it defeats the purpose of the `-m` tag.

```bash
# Commiting a file 
git commit -m "Commit Message"
# Example 2
git commit -m "Refactored the code"
```

3. **git pull**

the git pull command downloads all the files present in the repository. Its advised to do a git pull before a push, as it can reduce merge conflicts. Imagine you and your friend are working a project(creating a website). You are working on the CSS where as your friend is working on HTML. When have completed your part and planning to push to code to the repository, your friend have already made some changes to the files. But these changes are not present in your system, hence for downloading the changes made by your friend you need to do a git pull.

```bash
# Git pull command
git pull
```
4. **git push**
The git push command sends the changes and new files to the repository. Now if you are asking what is repository, consider as a online folder where all you colleagues contribute their work.

```bash
# Git push command
git push
```


When you do a git push, git will ask for your credentials. There are a few ways in which you can authenticate it, my preferred way is to use SSH keys. I will be releasing a new article based on this, so do follow me.

>
> If you like this blog , please don’t forget to give a clap . if you want to learn more about privacy,security,technology and Linux, consider following me. Plus, whatever I find interesting and valuable.
