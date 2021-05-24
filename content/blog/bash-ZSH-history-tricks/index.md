---
type: post
draft: false
published: true
title: Bash and ZSH History Tricks
description: "Command Line Fun Module 3.1"
slug: bash-zsh-history-tricks
author: Martin Guzman
date: 2021-05-07
readTime: 7
tags:
- Bash and Zsh History
- Module 3
- OSCP
---

In this post I will cover Bash and ZSH History Tricks from the OSCP Syllabus Module 3 plus the use of piping. These simple commands can be strung together to create an advanced search of the bash and ZSH history.

Linux displays what was previously typed in bash and zsh history if the Bash or ZSH history have not been erased. Pentesters or Hackers can take advantage of this to leverage the information and commands previously issued on the machine. Time to get started and make use of these simple yet handy commands for Pentesting, OSCP, CTF’s, and Reverse Engineering.

## Case Scenario

If an admin was logged into the machine and did not clear the history, we can use that to our advantage to see what was changed, what commands have been used, and what was previously done on the machine. This is important for reverse engineering changes done, to gain insight on directory or file locations, and attempting privilege escalation. I will get into privilege escalation in a future post.

##### To view the location of .bash_history or .zsh_history, show hidden directories and files, and read/write access, navigate to the root directory and type `ls -la`.

```shell
┌──(kali㉿kali)-[~]
└─$ ls -la
total 340
drwxr-xr-x 32 kali kali  4096 May  7 20:48 .
drwxr-xr-x  3 root root  4096 Nov 17 07:31 ..
-rwxrwxrwx  1 kali kali     1 Nov 17 09:49 .bash_history
-rw-r--r--  1 kali kali   220 Nov 17 07:31 .bash_logout
-rw-r--r--  1 kali kali  4503 Nov 17 07:31 .bashrc
-rw-r--r--  1 kali kali  3526 Nov 17 07:31 .bashrc.original
drwx------  4 kali kali  4096 Mar 28 16:57 .BurpSuite
drwxr-xr-x 16 kali kali  4096 May  7 20:48 .cache
drwx------ 20 kali kali  4096 Apr 21 16:00 .config
drwxr-xr-x  4 kali kali  4096 Mar 10 19:06 .gem
drwx------  4 kali kali  4096 Mar 12 18:48 .hashcat
drwxr-xr-x 11 kali kali  4096 Mar 16 20:38 idafree-7.0
drwxr-xr-x  2 kali kali  4096 Mar 16 21:25 .idapro
drwxr-xr-x  4 kali kali  4096 Mar 28 16:53 .java
drwx------  2 kali kali  4096 Mar 15 19:41 .john
drwxr-xr-x  3 kali kali  4096 Jan  4 20:57 .maltego
-rw-r--r--  1 kali kali   125 Mar 26 19:38 .ophcrackrc
drwxr-xr-x  3 kali kali  4096 Mar 28 16:50 .recon-ng
-rw-------  1 kali kali  4453 May  7 20:48 .xsession-errors
-rw-------  1 kali kali  4787 May  5 19:31 .xsession-errors.old
drwxr-xr-x 16 kali kali  4096 Mar 28 18:10 .ZAP
drwxr-xr-x  2 kali kali  4096 Apr 19 15:52 .zenmap
-rw-r--r--  1 kali kali 76831 May  5 19:31 .zsh_history
```
The example above shows the hidden directories, files and read/write access.

##### To search the bash history (depending on linux distro) type `history` or `~/.bash_history`.

```shell
┌──(kali㉿kali)-[~]
└─$ history
1380  locate HTTP2.pcap
1381  diff test.sh test2.sh
1382  apt-get install /home/kali/Downloads/ipscan_3.7.6_amd64.deb
1383  sudo apt-get install /home/kali/Downloads/ipscan_3.7.6_amd64.deb
1384  ipscan
1385  angryip
1386  netstat
1387  ifconfig
1388  sudo netdiscover -r 142.168.244.0/24
1389  dirbuster
1490  nmap -sV -sC 142.118.204.2
1491  sudo ifconfig eth0 up
1492  sudo dhclient eth0
1493  nmap -sV -sC 142.168.244.160
1494  less MD5test.txt
1495  touch MD5test.txt
1496  echo "Adding this to the test document. This is to add something in here" > MD5test.txt
1497  echo "Adding to the end of the MD5 test document" >> MD5test.txt
1498  cat MD5test.txt
1499  md5sum /home/kali/Desktop/MD5test.txt
1500  md5sum MD5test.txt
1501  cd home
1502  cd kali
1503  ls
1504  whoami
1505  sudo wireshark
1506  pwd
1507  clear
1508  cd Desktop 
1509  ls -la
 ```
The above example shows previous commands recorded in the bash_history.

##### To search zsh[autocomplete] history type `cat ~/.zsh_history`.

```shell
objdump -d /home/kali/Desktop/flag-x64 > disassembly.asm
objdump -M intel -d /home/kali/Desktop/flag-x64 > disassembly.asm
ltrace 
sudo apt install ltrace
ltrace /home/kali/Desktop/flag-x64
ltrace /home/kali/Desktop/flag-x32
/home/kali/Desktop/Hashcat/
hashcat -m 5600 -O -o cracked2.txt /home/kali/Desktop/Hashcat/crackme.txt /home/kali/Desktop/Hashcat/rockyou.txt
tshark -r /home/kali/Desktop/torrent1.pcap -R 'bittorrent.piece.data and ip.dst_host == 1292.168.29.129' -T fields -e bittorrent.piece.index -e bittorrent.piece.begin -e bittorrent.piece.length -e bittorrent.piece.data -E separator=+ | sort | sed -re 's!.*\+!!' | sed -re 's!:!!g' | echo -n -e $(tr -d '[:space:]' | sed 's/../\\x&/g') > binout
tshark -r /home/kali/Desktop/torrent1.pcap -R -2 'bittorrent.piece.data and ip.dst_host == 1292.168.29.129' -T fields -e bittorrent.piece.index -e bittorrent.piece.begin -e bittorrent.piece.length -e bittorrent.piece.data -E separator=+ | sort | sed -re 's!.*\+!!' | sed -re 's!:!!g' | echo -n -e $(tr -d '[:space:]' | sed 's/../\\x&/g') > binout
tshark -r /home/kali/Desktop/torrent1.pcap -Y 'bittorrent.piece.data and ip.dst_host == 1292.168.29.129' -T fields -e bittorrent.piece.index -e bittorrent.piece.begin -e bittorrent.piece.length -e bittorrent.piece.data -E separator=+ | sort | sed -re 's!.*\+!!' | sed -re 's!:!!g' | echo -n -e $(tr -d '[:space:]' | sed 's/../\\x&/g') > binout
tshark -r /home/kali/Desktop/torrent\ 1.pcap -Y 'bittorrent.piece.data and ip.dst_host == 1292.168.29.129' -T fields -e bittorrent.piece.index -e bittorrent.piece.begin -e bittorrent.piece.length -e bittorrent.piece.data -E separator=+ | sort | sed -re 's!.*\+!!' | sed -re 's!:!!g' | echo -n -e $(tr -d '[:space:]' | sed 's/../\\x&/g') > binout
tshark -r /home/kali/Desktop/torrent\ 1.pcap -Y 'bittorrent.piece.data and ip.dst_host == 192.168.29.129' -T fields -e bittorrent.piece.index -e bittorrent.piece.begin -e bittorrent.piece.length -e bittorrent.piece.data -E separator=+ | sort | sed -re 's!.*\+!!' | sed -re 's!:!!g' | echo -n -e $(tr -d '[:space:]' | sed 's/../\\x&/g') > binout
tshark -r /home/kali/Desktop/torrent.pcap -Y 'bittorrent.piece.data and ip.dst_host == 192.168.29.129' -T fields -e bittorrent.piece.index -e bittorrent.piece.begin -e bittorrent.piece.length -e bittorrent.piece.data -E separator=+ | sort | sed -re 's!.*\+!!' | sed -re 's!:!!g' | echo -n -e $(tr -d '[:space:]' | sed 's/../\\x&/g') > binout
python /home/kali/Desktop/code.py
python /home/kali/Desktop/code.p50
python /home/kali/Desktop/code.py
javac -version
java -version
java /home/kali/Desktop/Hasher.class
git clone https://github.com/java-decompiler/jd-gui.git
```
The above example  show previous comands recoded in the zsh history.

## Piping Examples

These commands can be used to quickly leverage the information by piping (stringing) them into other command-line utilities. This can make searching through very long histories with thousands of entries quicker and more convenient. The following are a few useful commands to use on the history in combination with piping.

##### Search history of a specific word and display the last 30 results:

Bash: `history | grep "Insert_Word_Here" | tail -n 30`

ZSH: `cat  ~/.zsh_history | grep "Insert_Word_Here" | tail -n 30`


Example of Bash history | grep "Insert_Word_Here" | tail -n 30:
```shell
┌──(kali㉿kali)-[~]
└─$ history | grep "apt-get" | tail -n 30
  309  apt-get install zteg
  613  sudo apt-get install java
  614  sudo apt-get install javacc
  666  sudo apt-get install stegsnow
  698  sudo apt-get install steghide -y
  712  sudo apt-get install xsteg
  789  apt-get install fcrackzip
  790  sudo apt-get install fcrackzip
  801  sudo apt-get install stegdetect
  805  sudo apt-get install stegcracker
  825  sudo apt-get install stegosuite
  827  sudo apt-get install outguess
  872  sudo apt-get install grepcidr
  888  sudo apt-get install epoch
  933  sudo apt-get install logcat
 1103  sudo apt-get install zenmap
 1138  sudo apt-get update
 1139  sudo apt-get install alien
 1144  apt-get --fix-broken install
 1145  sudo apt-get --fix-broken install
 1199  sudo apt-get install go
 1280  sudo apt-get install python=2.7.15~rc1-1
 1284  sudo apt-get install python=2.7.18-2
 1295  udo apt-get -f install
 1296  sudo apt-get -f install
 1297  sudo apt-get update -fix-missing
 1298  sudo apt-get update --fix-missing
 1383  apt-get install /home/kali/Downloads/ipscan_3.7.6_amd64.deb
 1384  sudo apt-get install /home/kali/Downloads/ipscan_3.7.6_amd64.deb
 1463  history | grep "apt-get" | tail -n 30
 ```

Example of Use: Search for `apt-get` will search for any software installation and removal that was issued with `apt-get`.


##### Display only the last 30 lines of the history:

Bash: `history | tail -n 30`

ZSH: `cat  ~/.zsh_history | tail -n 30`

##### Search the entire history with the most recent commands at the top:
Bash: `history | tac | less`

ZSH: `cat  ~/.zsh_history | tac | less`

##### Rerun a command shown in Bash History:
`!NUMBER_HERE`

```shell
┌──(kali㉿kali)-[~]
└─$ !921        
                                                                                                                                          
┌──(kali㉿kali)-[~]
└─$ cat /home/kali/Desktop/route53.log | awk '{print $9}' | sort | grep -oE '(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([0-9]{1,2})' | awk -F / '{ count[$2]++ } END { for (mask in count) total+=count[mask]*2^(32-mask); print total }'
```
Above shows the command !921 used to recall that specific line from the bash history. It will also copy and autofill that line from the history as the example shows.


## Why this is Useful
These basic commands are a fast and simple method to leverage valuable information on a host machine. As admins and from a security standpoint this show the importance of clearing the history and not becoming complacent about these tasks! 


## TLDR 
Bash and ZSH History Tricks

##### View Hidden directories:
Bash and ZSH: `ls -la`

##### View bash and ZSH history:
Bash: `History` or `cat ~/.bash_history`

ZSH: `cat ~/.zsh_history`

##### Search a specific word and display the last 30 results:
Bash: `history | grep "Insert_Word_Here" | tail -n 30`

ZSH: `cat  ~/.zsh_history | grep "Insert_Word_Here" | tail -n 30`

##### Display only the last 30 lines of the history:
Bash: `history | tail -n 30`

ZSH: `cat  ~/.zsh_history | tail -n 30`

##### Search the entire history with the most recent at the top:
Bash: `history | tac | less`

ZSH: `cat  ~/.zsh_history | tac | less`

##### Rerun a command that was already issued:
`!NUMBER_HERE`