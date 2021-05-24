---
type: post
draft: false
published: true
title: Text Searching and Manipullation Using Grep
description: "Command Line Fun: Module 3.3"
slug: bash-zsh-history-tricks
author: Martin Guzman
date: 2021-05-22
readTime: 15
tags:
- grep
- Module 3
- OSCP
---

In this post I will cover grep and how it can be used for text searching and manipulation. This is in the OSCP Syllabus Module 3.3 and it is a very handy way to search through and manipulate data to your needs. I often use this to parse log files to quickly arrange and access information in an easily readable manner. Great for CTF’s, Pentesting, log analysis, and information gathering.

## What is grep?

Grep stands for Global Regular Expression Print. Grep will Globally search for a Regular Expression and then Print the matching lines.

Grep is used in Linux and Unix machines to search for strings of characters in files. When a match is found, it will print the targeted results. The grep command is handy when searching through large log files for data parsing. 

## How grep works

Grep's most basic usage starts with the `grep` command, a Flag if one is issued, followed by a string or text you are searching for, then the name of the file that the grep will search through.

##### A simple grep command syntax looks like this:

```shell
┌──(kali㉿kali)-[~]
└─$ grep test ~/Desktop/grep_test.txt 
This is a test document. 
This is the end of the grep test document. 
```

The above command shows `grep`, followed by `test`, followed by `~/Desktop/grep_test.txt`. This tells grep to search for the word test in the file grep_test.txt that is located on the Desktop. The output also displays any line that contained the word test in the file and marks in in red.

The grep command can be used to manipulate data and show many different pattern variations to suite your needs. Make sure to combine as many flags as necessary to find and display the results you require. Below are some common grep flag commands and brief examples for them.

> Noob Note: grep is case-sensitive by default. Use the -i option to remove case-sensitivity.

## Grep Examples

### Search for a String in a specified File

This is the basic grep command to print all lines in a file that contain a specific string, in our case `hello` in the file `sample1`.

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ grep hello sample1
(botany) phelloderm is part of the periderm made up of cells produced inwardly by the cork cambium.
Ending my hello and adding goodbye! 
```

Shown above, using grep this way will display every line where hello is a match. Instead of showing exact matches, the terminal prints any line containing the string and substring hello.

**Tip**: If your search pattern includes any blank spaces or symbols, use quotation marks to encapsulate the string and make it searchable.

### Search for String in Multiple Files

Using grep to search multiple files, just add the files you want to search through followed by a space.

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ grep hello sample1 sample2 sample3      
sample1:(botany) phelloderm is part of the periderm made up of cells produced inwardly by the cork cambium.
sample1:Ending my hello and adding goodbye!
sample2:(botany) phelloderm, ya im using this again
sample3:hello?
```
The above example displays the grep command used to match the word hello in three files named sample1, sample2, sample3. It also prints the name of each line that contained the matching string hello.

> Noob Note: You can add as many files needed in your search.

Using grep to search multiple files, just add the files you want to search through followed by a space.

### Search for String in the Current Directory

When searching for a string in all files in the current directory, replace the filename with an asterisk. This will search through all files in the current directory for the specified string.

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ grep hello *                               
grep: Caldera: Is a directory
grep: elf: Is a directory
grep: Hashcat: Is a directory
grep: Ophcrack: Is a directory
sample1:(botany) phelloderm is part of the periderm made up of cells produced inwardly by the cork cambium.
sample1:Ending my hello and adding goodbye!
sample2:(botany) phelloderm, ya im using this again
sample3:hello?
sample4:and yet another file with hello inside!
grep: wireshark dump: Is a directory
grep: Zenmap: Is a directory
 ```

Above shows grep searching through the current directory ~/Desktop for files with the matching string hello. It then returns the name of the file and the line with the matching string hello. It also displays the names of any sub directory but will not search in them since it was directed to only search the current directory. 

Note: We can see that a new file called sample4 was found containing the string hello, this was not found using the previous Flags. 

### Find Whole Word without Substring

Grep can also find and display a line that contain the exact word and exclude the word if it is part of a larger word (shows the whole string and excludes substring). To use this, we will include the -w Flag.


##### To search zsh[autocomplete] history type `cat ~/.zsh_history`.

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ grep -w hello sample1 sample2 sample3      
sample1:Ending my hello and adding goodbye!
sample3:hello? 
```

Above, grep shows a search through the documents sample1 sample2 sample3 for lines with the string hello and will not include substrings. This shows a different result as previous results included the word phelloderm, since hello is a substring within that word.

### Ignore Case in Grep Search

Grep commands are case sensitive by default, making the flag -i useful in grep search. This flag will show lowercase, uppercase, and mixed case results to display instead of the default lowercase results only.

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ grep -i hello sample1 sample2 sample3 
sample1:Hello!
sample1:(botany) phelloderm is part of the periderm made up of cells produced inwardly by the cork cambium.
sample1:Ending my hello and adding goodbye!
sample2:Hello everybody!
sample2:(botany) phelloderm, ya im using this again
sample3:Hello and goodnight!
sample3:hello?
```
Above shows more results containing the string hello when compared to previous flags used. We can now see uppercase, lowercase, and Mixed case strings in the results that were previously not shown. 

### Recursively search directories
To recursively search directories for all files that match the string you specify, use the -r flag. This command prints lines with the matching string for files in the current directory and subdirectories. 

```shell
┌──(kali㉿kali)-[~]
└─$ grep -r 'another file with hello'                                                                                             
.zsh_history:grep 'another file with hello' -R
.zsh_history:grep 'another file with hello' -r
.zsh_history:find . -type f -exec grep -l 'yet another file with hello' {} \;
.zsh_history:grep -r 'another file with hello' .
Desktop/sample4:and yet another file with hello inside!
```
Above shows a search for the string 'another file with hello' with the -r flag. The search results included commands from .zsh_history as well because .zsh_history is located in a subdirectory of the directory grep was issued on.

Tip: Used quotation marks to encapsulate the search string since it contained black spaces.

### Inverted Grep Search 
We can use grep to print every line in a file that does not contain the specified string. To invert the search, use the -v flag. This will exclude all lines that contain the string specified.

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ grep -vi hello sample1

Just filling in this space.
hope you are all doing well. 
```
The example above omits all lines that contains the word hello but displays any other line in the file. Since -v is an inverted search using the flag will exclude the word hello and adding the -i flag makes it case insensitive.

### Find files that contain matching string
Sometimes you need to quickly find files that contain a matching string. To print the name of file that contains the search string and omit the line the string is located on, use the -l flag. 

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ grep -lri hello                                                                                                           
Hashcat/10-million-password-list-top-1000000.txt
Hashcat/10-million-password-list-top-10000.txt
Hashcat/probable-top-1575.txt
Hashcat/rockyou.txt
Hashcat/pokemon-wordlist
Ophcrack/XP Special/table0.bin
sample3
sample4
sample2
sample1
```

Above, shows any file that contains the matching string hello. This will only show the name of the file that contains the string as it does not print the lines with the string in it. In this example the -r and -i flags to make the search recursive and case insensitive too.

### Display Line Numbers with grep results
When searching through log files or files with many results, it will come in handy to see the line number the string is located on. To do this, use the -n flag to show the line numbers.
```shell
┌──(kali㉿kali)-[~]
└─$ grep -niw hello ~/Desktop/sample1
1:Hello!
6:Ending my hello and adding goodbye!
```
Above shows a search for hello in ~/Desktop/ in the file sample1. Adding the -i and -w flags to make the search case insensitive and also search for the whole word and omit substrings in the search.

### Search for multiple strings
Searching for multiple strings can also be done in grep. This is done by encapsulating the different search strings and using a separator in the grep search (example below). This is activated with the flag -E
```shell
┌──(kali㉿kali)-[~]
└─$ grep -Eiw '(hello|goodnight)' ~/Desktop/*     /home/kali/Desktop/sample1:Hello!
/home/kali/Desktop/sample1:Ending my hello and adding goodbye!
/home/kali/Desktop/sample2:Hello everybody!
/home/kali/Desktop/sample3:Hello and goodnight!
/home/kali/Desktop/sample3:hello?
/home/kali/Desktop/sample4:and yet another file with hello inside!
```
Above shows multiple flags and grep commands shown being used together. The flag -E allows for multiple string searches and the syntax '(hello|goodnight)' can be broken down as: Use quotations to encapsulate the entire string and allows grep read anything inside as part of the search parameters; (hello|goodnight) Tells grep that two different strings hello and goodnight are being used for the search.

## Why it is Useful
The grep command can be a basic search tool or can be used as a powerful data manipulator to simplify complex log results. I commonly use grep to parse data from log files and easily search for exactly what I am looking for. 

Example: If I had thousands of entries from a compromised phone and was only interested in the android log data of times the camera was on. I can use something like grep -i -E 'torchmode' and search for that information and leave out the thousands log entries I do not currently need to view.
```shell
┌──(kali㉿kali)-[~]
└─$ cat /home/kali/Desktop/system.log | grep -i -E 'torchmode' 
07-18 13:08:24.626  7251  7310 I CameraManager: setTorchMode : cameraId = 0, enabled = true
07-18 13:08:24.626  1286  6815 D CameraService: setTorchMode E - enabled: 1
07-18 13:08:24.626  1286  6815 I CameraService: setTorchMode[2272] enabled(1)
07-18 13:08:24.626  1286  6815 I CameraFlashlight: setTorchMode[78]: set torch mode of camera 0 to 1
07-18 13:08:24.626  1286  6815 V CameraFlashlight: setTorchMode: set camera 0 torch mode to 1
07-18 13:08:24.632  1286  6815 D CameraService: setTorchMode X
07-18 13:08:24.632  7251  7310 I CameraManager: setTorchMode : cameraId = 0, enabled = true, strength = 3
07-18 13:08:24.632  1286  7195 D CameraService: setTorchModeStrength E - enabled: 1, strength: 3
07-18 13:08:24.632  1286  7195 I CameraService: setTorchModeStrength[2410] enabled(1)
07-18 13:08:24.632  1286  7195 I CameraFlashlight: setTorchMode[141]: set torch mode of camera 0 to 1 with strength 3
07-18 13:08:24.632  1286  7195 V CameraFlashlight: setTorchMode: set camera 0 torch mode to 1 with given strength 3
07-18 13:08:24.635  1286  7195 D CameraService: setTorchModeStrength X
07-18 13:08:24.635  7251  7608 I CameraManagerGlobal: onTorchModeChanged
07-18 13:09:29.919  7251  7310 I CameraManager: setTorchMode : cameraId = 0, enabled = false
07-18 13:09:29.921  1286  9279 D CameraService: setTorchMode E - enabled: 0
07-18 13:09:29.921  1286  9279 I CameraService: setTorchMode[2272] enabled(0)
07-18 13:09:29.922  1286  9279 I CameraFlashlight: setTorchMode[78]: set torch mode of camera 0 to 0
07-18 13:09:29.922  1286  9279 V CameraFlashlight: setTorchMode: set camera 0 torch mode to 0
07-18 13:09:29.925  1286  9279 D CameraService: setTorchMode X
07-18 13:09:29.926  7251  7608 I CameraManagerGlobal: onTorchModeChanged
```
That is just one example of the variety of ways that grep can be used. It has such an abundance of variations and usefulness that I can only scratch the surface on a single post! Practice makes perfect and grep definitely becomes easier the more you use it.

## TLDR

Grep is simple yet can become a powerful search tool when used in conjunction with the right flags. It is especially useful when paired with piping and combining it with other tools.
##### Search for string in file: `grep`

##### Ignore case, Search for string: `grep -i`

##### Exclude string from search (inverted Search): `grep -v`

##### Use * instead of filename to search the entire directory: `grep *`

##### Recursive Search for string (current directory, subdirectory, and files inside them): `grep -r`

##### Shows whole string and excludes substrings: `grep -w`

##### Exclude multiple strings from search: `grep -v -E '(string1|string2)'`

##### Include multiple strings in search: `grep -E '(string1|string2)'` 