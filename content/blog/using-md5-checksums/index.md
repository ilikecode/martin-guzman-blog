---
type: post
draft: false
published: true
title: Using MD5 Checksums for Validation
description: Command Line Fun Module 3
slug: using-md5-checksums
author: Martin Guzman
date: 2021-04-29
readTime: 8
tags:
- Bash
- MD5 Checksum
- Validation
- Module 3
- OSCP
---
Common uses of MD5 hashes are to perform validation checks on .zip, .tar, etc. They are commonly provided next to the program or a file archive you download from trusted sites. But how do you use these to verify a file that is downloaded? Easy, validate the MD5 hash in terminal or command prompt! 

It's good practice to validate the program or file archive downloaded has not been modified or tampered with. This is where **MD5 checksums** come into play and the following will show the commands and examples for kali linux and Windows environments.

The following commands are for those that just want to verify the MD5 Checksum and do not need to see example of how it works.

> Noob Note: The file path should be the directory of the file.

## Kali Linux Checksum

Below we can see basic example of the checksum process and how the checksum process works for Kali Linux. The rest of the examples illustrate why it is important to use checksums for validation.

```shell
┌──(kali㉿kali)-[~]
└─$ cd Desktop

┌──(kali㉿kali)-[~/Desktop]
└─$ touch MD5test.txt

┌──(kali㉿kali)-[~/Desktop]
└─$ echo "Adding this to the test document. This is to add something in here" > MD5test.txt

┌──(kali㉿kali)-[~/Desktop]
└─$ cat MD5test.txt
Adding this to the test document. This is to add something in here
```

The above example shows navigation to the Desktop folder > Using Touch to create a file called MD5test.txt **>** Using echo to redirect the text inside the quotes to the empty file and save it **>** Using Cat to display the contents of the file and verify the redirection worked.

### Verify, Modify and Reverify in Kali Linux

The next example will verify the MD5 Checksum, modify it and reverify it again. After we compare the Checksum, we can see the Checksum changes after the file is modified or tampered with. Always compare the MD5 Checksum when downloading a program from the web. It only takes 20 seconds!

```shell
┌──(kali㉿kali)-[~/Desktop]
└─$ md5sum /home/kali/Desktop/MD5test.txt
8830b2c9b9d3cfda3ba6b4f08f026dc1  /home/kali/Desktop/MD5test.txt

┌──(kali㉿kali)-[~/Desktop]
└─$ echo "Adding to the end of the MD5 test document" >> MD5test.txt

┌──(kali㉿kali)-[~/Desktop]
└─$ cat MD5test.txt
Adding this to the test document. This is to add something in here
Adding to the end of the MD5 test document

┌──(kali㉿kali)-[~/Desktop]
└─$ md5sum  /home/kali/Desktop/MD5test.txt
5ba3f5a4a52e3f1f1252bbba394a624e /home/kali/Desktop/MD5test.txt 
```

The above example shows the MD5 Checksum of the file MD5test.txt > Using echo with the double greater than signs will append an extra line of text to the MD5test.txt file to show that the checksum will be different if the file is altered (Using >> **adds** the line of text instead of first erasing the previous text inside the file) > using cat to display the alteration of the file > Used MD5sum again on the file to show a different MD5 Checksum after alteration to the file.

## Windows Checksum

```shell
C:\Users\User>cd Desktop

C:\Users\User\Desktop>echo "Adding this to the test document. This is to add something here" > MD5test.txt

C:\Users\User\Desktop>type MD5test.txt
"Adding this to the test document. This is to add something here"
```

The above Windows example shows navigation to the Desktop folder > Using echo to redirect the text inside the quotes into a file called MD5test.txt and create the file.

### Verify, Modify and Reverify in Windows

```shell
C:\Users\User\Desktop>certutil -hashfile MD5test.txt MD5
MD5 hash of MD5test.txt:
d9bc0618c0a238de8aef7bdf988d2ca8
CertUtil: -hashfile command completed successfully.

C:\Users\User\Desktop>echo "Adding this new line to the MD5 test document" >> MD5test.txt

C:\Users\User\Desktop>type MD5test.txt
"Adding this to the test document. This is to add something in here"
"Adding this new line to the end of the MD5 test document"

C:\Users\User\Desktop>certutil -hashfile MD5test.txt MD5
MD5 hash of MD5test.txt:
c972005edcff86a4dad53647769748b
CertUtil: -hashfile command completed successfully.
```

The example above shows the MD5 Checksum of the file MD5test.txt > Using echo with double greater than signs to append an extra line of text to the MD5test.txt file to show that the checksum will be different if the file is altered (Using >> **adds** the line of text instead of first erasing the previous text inside the file) > using type to display the alteration to the file > Used certutil -hashfile again on the file to show a different MD5 Checksum after alteration to the file.

## Why this is Useful

With a basic understanding of MD5 Checksum validation, you can download programs or file archives from trusted sites with a bit more confidence.

Stay tuned for more articles of the basics commands before we move onto some of the bigger topics on the OSCP Syllabus! 

## TLDR
### Commands to Verify the MD5 Checksum. 
##### In Kali Linux, open the Bash Terminal and type the following:
`md5sum FILE_NAME_HERE`

##### In Windows, open command prompt and type the following:
`certutil -hashfile FILE_NAME_HERE MD5`

> Important\: Don't forget to add MD5 at the end or it will show SHA1 hash instead of MD5.