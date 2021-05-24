---
type: post
draft: false
published: true
title: Why File Redirection is Important
description: "Command Line Fun Module 3.2"
slug: using-file-redirection
author: Martin Guzman
date: 2021-05-13
readTime: 12
tags:
- Bash
- Module 3
- Piping and Redirection
- OSCP
---

This post will go over OSCP Syllabus Module 3.2 and how file redirection can be use to circumvent basic file creation rules on a target machine. I will discuss how we can bypass these rules when a target machine is not properly secured. This topic is important as it ties into Scripts, Netcat, Powercat, and creating Reverse Shells later on #:wink:. Time to get started!

## Check for Text Editors
First, check if any text editors are still enabled on the target machine. If we are lucky, one of these was not disabled and it just saved ourselves time.

The following commands will attempt to: 
##### Create a file called test.txt and open it with mousepad:
```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ mousepad test.txt 
```

##### Create a file called test.txt and open with nano:
```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ nano test.txt
```
(to save the file) Y > Enter > crtl + x  
(End file, do not save and escape) N > Enter > crtl + x 

##### Create a file called test.txt and open with vi editor:
```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ vi test.txt  
```  
escape > :wq > Enter (to save changes to a file)\
escape > :q > Enter (to exit the unmodified file)\
escape > :q! > Enter (to exit the file without saving any changes

##### Quickly read the created file (replace test.txt with your file name):
```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ less test.txt      
press q to exit 
```

If none of the attempts above worked, let us give kudos #:thumbsup: to the admin for doing a decent job and disabling the default text editors.

## Redirection
Now, it is time for us to check the depth of the security protocols in place by trying redirect commands.

##### Redirect to a new file:
```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ echo “text_or_command_you_want_to_save” > Filename_Here  
```
Above shows the line `text_or_command_you_want_to_save` redirected into a new file called `Filename_Here`.

##### Redirect to an existing file and delete everything inside:

> Important: This will delete what was inside the file!

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ echo "deleting everything then Adding this line new line inside the file" > Existing_Filename_Here 
``` 
Above shows an existing file being erased and replaced with the line `deleting everything then Adding this line new line inside the file` from the file named `Existing_Filename_Here`.

##### Append an existing file (adding text to the end of a file) by using >> as shown the following example:
```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ echo "Adding this to the end of the example document" >> test.sh   
```
The above shows the line `Adding this to the end of the example document` being added to the end of the file called `test.sh`. 

This can be used to append files and build scripts one line at a time. This is important to understand for future posts. 

##### Give the file (a script for example) execution rights: 
```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ chmod +x test.sh   
```

> Important: Only give execution rights after the script is finalized, it can be troublesome to edit the file afterward.

## Stderr
Stderr is the stream used to output an error message when a program encounters them. This is useful when you create a log file then redirect the errors to the log file or even hide the error messages entirely.

In the following example, I will attempt to copy a file that does not exist to see what happens.
```shell
┌── (kali㉿kali)-[~/Desktop]
└─$ pwd                                                                                                                               
/home/kali/Desktop
                                                                                                                                       
┌──(kali㉿kali)-[~/Desktop]
└─$ ls
Caldera   Hashcat    'IDA Freeware.desktop'	java	'NCL Gym files'	Ophcrack	Steg-1.1.0.0-Linux-x64	'wireshark dump'	elf	HTTP2.cap	ipscan.desktop	MD5test.txt	'NCL Solo Comp'	sherlock	Tutorials	Zenmap
                                                                                                                                          
┌──(kali㉿kali)-[~/Desktop]
└─$ cp Fake_File ~/kali     
cp: cannot stat 'Fake_File': No such file or directory 
```

Above shows the stderr output `cp: cannot stat 'Fake_File': No such file or directory` because the file does not exist.

Inside the terminal is the common way stderr is shown. But sometimes stderr can be redirected to a log file. Redirecting Stderr is useful when we want to create a log file that will contain only errors and not include the stdout.

In the next example, I will attempt to copy a file that does not exist and send the stderr output to the log file **Log_For_Fake_File.txt**.

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ ls                                         
Caldera   Hashcat    'IDA Freeware.desktop'   java         'NCL Gym files'   Ophcrack   Steg-1.1.0.0-Linux-x64  'wireshark dump'
elf       HTTP2.cap   ipscan.desktop          MD5test.txt  'NCL Solo Comp'   sherlock   Tutorials                Zenmap
                                                                                                                                          
┌──(kali㉿kali)-[~/Desktop]
└─$ cp fake_file ~/kali 2>Log_For_Fake_File.txt
                                                                                                                                          
┌──(kali㉿kali)-[~/Desktop]
└─$ ls                                                                                                                          
Caldera   HTTP2.cap               java                   'NCL Gym files'   sherlock                'wireshark dump'
elf      'IDA Freeware.desktop'   Log_For_Fake_File.txt  'NCL Solo Comp'   Steg-1.1.0.0-Linux-x64   Zenmap
Hashcat   ipscan.desktop          MD5test.txt             Ophcrack         Tutorials
```

Above shows no error message displayed in the terminal and also shows that the log file was created.

Now lets have a look inside the log file to see if the stderr was successfully redirected there:

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ less Log_For_Fake_File.txt      
```	

This opens the following in a new window.
```shell
cp: cannot stat 'fake_file': No such file or directory
Log_For_Fake_File.txt (END)
```

The stderr was successfully redirected to the log. This also silenced the error from being displayed in the terminal window.

If you wanted to silence the stderr output from being displayed in the console but did not want to create a log file. This is done by sending the stderr output to **/dev/null** folder in linux. This will send the output into a void that will be discarded. This is done by using **2>/dev/null** to redirect the stderr to the void. This can be used to silence errors from being displayed on the console when running scripts, files, or anything that can generate a stderr output.

## Why This is Useful

Understanding these commands and learning to redirect and create a file manually is a crucial step for ethical hacking and cyber security. It is vital we learn to pivot, as all other file creation methods may be disabled due to security measures and only redirection may work. 

This is important because it will allow scripts to be created and ran from a target machine when Pentesting, OSCP exam, and for CTF competitions. This is also insightful for Administrators to understand the importance of file creation rules and how advisories can circumvent them with these simple techniques.