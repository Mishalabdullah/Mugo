# 10 Linux Terminal hacks You Need To Know!

### Changing Directories (CD)

`cd` is one of the basic commands in Linux, which  allows you to move into different directories in your file system. Here are a few functions of `cd` that will help you to move faster in your file system.

**pwd** **:** `pwd` stands for "Print the name of the current working directory".which will show the path of the current directory

**cd ..** **:** will move one folder backward from the current directory

**cd -** **:** This command will help you move to the previous directory which you were located. If you run these commands twice will be at the same place where you started.
```
[prinux@archlinux ~]$ pwd
/home/prinux
[prinux@archlinux ~]$ cd Downloads/
[prinux@archlinux Downloads]$ cd ..
[prinux@archlinux ~]$ pwd
/home/prinux
[prinux@archlinux ~]$ cd -
/home/prinux/Downloads
[prinux@archlinux Downloads]$ pwd
/home/prinux/Downloads
[prinux@archlinux Downloads]$ cd -
/home/prinux
[prinux@archlinux ~]$ pwd
/home/prinux
```




### Aliases

Aliasing helps to create your commands in the shell. You can configure your long and repeatedly used commands to a short one.Or you can assign a function with options and name the functions. For example i can assign "ls" to run the command "ls --color=auto", 

alias ls='ls --color=auto'


### Copy & Paste 

Copy and Paste are the most basic operations of the text-editing, even though I have notices many people using  right-click for copying and pasting commands
**Us:** 
```
ctrl + shift + c - for copying texts 
ctrl + shift + v - for pasting texts
```

### Moving Along A Command
Have you ever typed a long command only to realise that you forgot to mention sudo at the beginning, well instead of pressing your arrow keys multiple times, you can use: 
`ctrl + a -` for jumping to the beginning of the line.
After typing in sudo now you can use:
`ctrl + e -` for jumping to the end of the line and the full command that you wish to type.
You can use these, shortcuts however you want and not just by typing sudo.


### Removing A Command
Well after typing a command that you noticed, you didn't have to type this command. Instead of pressing backspace multiple times or pressing enter to get rid of it, you can use
`ctrl + u` - for removing everything before the cursor
and if you are in the middle of the line and want to delete everything after the cursor you can use
`ctrl + k` - remove everything after the cursor
if you accidentally deleted some things and want to undo the changes you can use them.
`ctrl + y` - Undo whatever you deleted
Here is another that can increase your speed. Use to remove the last word from your cursor alt + backspace - removes the last word

### Editing Long Commands

if you want to edit your long commands in your test editor, `ctrl + x + e `- opening your editor inside your terminal. This will open your favorite text editor of your choice, and you can edit and save the file. After the file is saved it gets executed in the shell.(the file is not saved into the device)

### Don’t Use cat

Have you ever wanted to view the file, and used `cat` for that. Stop it, you can use `less` for the same thing as it displays text from the top and you are required to scroll down for viewing contents, unlike cat which just prints everything into your terminal.

``` less .bash_history```

### Permission Denied

If you are using Linux, then I am sure that you have come across this. Forgetting to type `sudo` and noticing when the console shows an error `error: you cannot perform this operation unless you are root`. instead of typing the whole command suing sudo just use `sudo !!`. You can use `!!` on any function like `cd`, `cat` … This just pastes the previous command, by replacing `!!`, when executing.

### Viewing The End Of A file - Tail

If you want to view the last 10 lines of the file, you can use `tail`. Which prints the last 10 lines in a file onto your terminal. This is very useful when looking at log files. You can use the -f option for viewing the file in real-time. 

```
tail    = for viewing the last 10 lines of the file 
tail -f = for viewing file in real time
```

### Search Your Command History

Whenever you learning something or forgot what did you type last time get this done, well instead of using cat and greping your .bash_history file. You can use `ctrl + r` which enables you to search your command history.























 

