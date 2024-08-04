import React from 'react';
import LinuxCommandBox from './LinuxCommandBox'; // Import the reusable component
import './Linux_cmds.css';
import Collapse from './Collapse';

export default function Linux_Commands() {
    const text = "$: Primary Prompt\n>: Secondary Prompt";

    // Using map to handle \n
    const formattedText = text.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            {item}
            <br />
        </React.Fragment>
    ));

    return (
        <div className="container">
            <h1>Linux Commands</h1>
            <h3>Some Common Linux Commands</h3>
            <ol>
                <li><b>`cal`</b> displays the calender of current months and year by default.</li>
                <LinuxCommandBox
                    title="Calendar cmd"
                    cmd1="cal"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li>`cal 2025` displays all the months of year 2025.</li>
                <LinuxCommandBox
                    title="Calendar cmd"
                    cmd1="cal"
                    cmd2="2025"
                    cmd3=""
                />
                <hr />
                <li>`cal 4 2025` will only display April Month of 2025 Year.</li>
                <LinuxCommandBox
                    title="Calendar cmd"
                    cmd1="cal"
                    cmd2="4 2025"
                    cmd3=""
                />
                <hr />
                <li>`date` will display current system date and time.</li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li>`date +%d` will display current day of the month. <b>(Ex: 27)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%d"
                    cmd3=""
                />
                <hr />
                <li>`date +%D` will display current date. <b>(Ex: MM/DD/YYYY)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%D"
                    cmd3=""
                />
                <hr />
                <li>`date +%m` will display current month number. <b>(Ex: 08)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%m"
                    cmd3=""
                />
                <hr />
                <li>`date +%M` will display current minutes. <b>(Ex: 40)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%M"
                    cmd3=""
                />
                <hr />
                <li>`date +%h` will display current month start name. <b>(Ex: Mar)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%h"
                    cmd3=""
                />
                <hr />
                <li>`date +%y` will display current year in small. <b>(Ex: 24)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%y"
                    cmd3=""
                />
                <hr />
                <li>`date +%Y` will display current year. <b>(Ex: 2024)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%Y"
                    cmd3=""
                />
                <hr />
                <li>`date +%H` will display current hour. <b>(Ex: 10)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%H"
                    cmd3=""
                />
                <hr />
                <li>`date +%S` will display current seconds. <b>(Ex: 44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%S"
                    cmd3=""
                />
                <hr />
                <li>`date +%T` will display current day time. <b>(Ex: 10:40:44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%T"
                    cmd3=""
                />
                <hr />
                <li>`date +"%H:%M:%S"` will display current day time. <b>(Ex: 10:40:44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H:%M:%S"'
                    cmd3=""
                />
                <hr />
                <li>`date +%H-%M-%S` will display current day time. <b>(Ex: 10-40-44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H-%M-%S"'
                    cmd3=""
                />
                <hr />
                <li>`date +%H %M %S` will display current day time. <b>(Ex: 10 40 44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H %M %S"'
                    cmd3=""
                />
            </ol>
            <hr />
            <Collapse title="Prompt Types" desc={formattedText}></Collapse>
            <hr />
            <ol>
                <h3>Display Commands</h3>
                <li><b>`echo`</b> displays the msg on screen as it is inputed.</li>
                <LinuxCommandBox
                    title="Display cmd"
                    cmd1="echo"
                    cmd2='"Hi! Xavier`s BCA & BSC Students"'
                    cmd3=""
                />
                <hr />
                <li>`echo -e` used to take input from user.</li>
                <LinuxCommandBox
                    title="echo cmd"
                    cmd1="echo -e"
                    cmd2='"Enter the Number: \c"'
                    cmd3=""
                />
                <hr />
                <li>Using `echo` cmd for printing statements in new line without using escape statements.
                    <b><br></br>Ex: echo "FYBCA<br></br>SYBCA<br></br>TYBCA"</b>
                </li>
                <LinuxCommandBox
                    title="echo cmd"
                    cmd1='echo "FYBCA'
                    cmd2=""
                    cmd3=""
                    noncommand1='SYBCA'
                    noncommand2='TYBCA"'
                />
                <hr />
                <li><b>`printf`</b> cmd is also used to display the output on screen</li>
                <LinuxCommandBox
                    title="printf cmd"
                    cmd1='printf "Hi,'
                    cmd2='%s"'
                    cmd3='"Mithil"'
                />
                <b>Output: Hi, Mithil</b>
                <hr />
                <li>`printf` when used with identifiers.</li>
                <LinuxCommandBox
                    title="printf cmd"
                    cmd1="printf"
                    cmd2='"Rollno: %5d \nName: %30s \n"'
                    cmd3="123 TYBCA"
                />
                <b><i>Output</i> <br></br>Rollno:&nbsp;&nbsp; 123 <br></br>
                    Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TYBCA
                </b>
                <hr />
                <li>`printf` when used with identifiers.</li>
                <LinuxCommandBox
                    title="printf cmd"
                    cmd1="printf"
                    cmd2='"Rollno: %-5d \nName: %-30s \n"'
                    cmd3="123 TYBCA"
                />
                <b><i>Output</i> <br></br>Rollno: 123 <br></br>
                    Name: TYBCA
                </b>
                <hr />
                <li>`printf` when used with identifiers to get the values in Octal & Hexa.</li>
                <LinuxCommandBox
                    title="printf cmd"
                    cmd1="printf"
                    cmd2='"The Octal of 255 is %o \nThe Hexa of 255 is %x\n"'
                    cmd3="255 255"
                />
                <b><i>Output</i> <br></br>The Octal of 255 is 377 <br></br>
                    The Hexa of 255 is ff
                </b>
            </ol>
            <hr />
            <ol>
                <Collapse title="Internal Command" desc="If the Command is internal the output will say that the command is shell builtin."></Collapse><br></br>
                <Collapse title="External Command" desc="For External Command, output will give a path."></Collapse>
            </ol>
            <hr />
            <ol>
                <h3>Script Command</h3>
                <li><b>`script`</b> command is used to start script (To Record the user session)</li>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="script"
                    cmd2=''
                    cmd3=""
                />
                <b><i>Output</i> <br></br>Script Started, file is typescript.<br></br>
                </b>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="exit"
                    cmd2=''
                    cmd3=""
                />
                <b>write `exit` to exit the script cmd</b>
                <hr />
                <li>`cat typescript` command is used to view recorded session</li>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="cat"
                    cmd2='typescript'
                    cmd3=""
                />
                <hr />
                <li>`script -a typescript` command is used to append new recording in typescript file</li>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="script"
                    cmd2='-a typescript'
                    cmd3=""
                />
                <hr />
                <li>`script newfile` will create a new record file</li>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="script"
                    cmd2='newfile'
                    cmd3=""
                />
                <hr />
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">No</th>
                            <th scope="col">Key</th>
                            <th scope="col">Behaviour</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-secondary'>
                            <th scope="row">1</th>
                            <td>f / spacebar</td>
                            <td>Advances by one screen</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">2</th>
                            <td>b</td>
                            <td>Moves back one screen</td>
                        </tr>
                    </tbody>
                </table>
            </ol>
            <hr />
            <ol>
                <h3>Man Commands</h3>
                <li><b>`man`</b> command displays the documentation often called the man documentation -- of practically every command on the system.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="man"
                    cmd2='wc'
                    cmd3=""
                />
                <b>wc</b> - print newline, word, and byte counts for each file.<br></br>
                <hr />
                <li>`man -k wc` displays all the commands contains wc with one line description</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="man"
                    cmd2='-k wc'
                    cmd3=""
                />
                <b>man -k or apropos</b> searches the name section of all man pages that contains the keyword.<br></br>
                <b>-k option: </b> This option searches the given commands as a regular expression in all the manuals and it returns the manual pages with the section number in which it is found.<br></br>
                <hr />
                <li><b>`whatis wc`/`man -f wc`</b> displays what is wc with one life description.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="whatis"
                    cmd2='wc'
                    cmd3=""
                />
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="man"
                    cmd2='-f wc'
                    cmd3=""
                />
                <hr />
                <li><b>`whatis date`/`man -f date`</b> displays or set system date and time.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="whatis"
                    cmd2='date'
                    cmd3=""
                />
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="man"
                    cmd2='-f date'
                    cmd3=""
                />
                <hr />
                <li><b>`wc f1`</b> displays total lines, words and characters in f1 file.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='f1'
                    cmd3=""
                />
                <b><i>Output: </i></b>
                <span>11 51 538 f1</span><br></br><span>(lines)(words)(characters)(fileName)</span>
                <hr />
                <li><b>`wc file1 f1`</b> displays total lines, words and characters of both the files.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='file1'
                    cmd3='f1'
                />
                <b><i>Output: </i></b><br></br>
                <span>6 6 41 file1</span><br></br><span>11 51 538 f1</span><br></br><span>17 57 579 total</span><br></br><span>(lines)(words)(characters)(fileName)</span>
                <hr />
                <li><b>`wc -l file1`</b> displays total numbers of lines in file1 file.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='-l file1'
                    cmd3=""
                />
                <b><i>Output: </i></b><span>6 file1</span>
                <hr />
                <li><b>`wc -w file1`</b> displays total numbers of words in file1 file.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='-w file1'
                    cmd3=""
                />
                <b><i>Output: </i></b><span>6 file1</span>
                <hr />
                <li><b>`wc -c file1`</b> displays total numbers of characters in file1 file.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='-c file1'
                    cmd3=""
                />
                <b><i>Output: </i></b><span>538 file1</span>
                <hr />
                <li><b>`wc`</b> when you write only wc, then you can enter some text and you will get total lines, words, and characters you entered.</li>
                <b>Example: </b>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2=""
                    cmd3=""
                    noncommand1="today is tuesday "
                    noncommand2="today is secondary"
                />
                <b><i>Output: </i></b><span>2 6 30</span>
                <hr />
                <li><b>`passwd`</b> for changing the user password.</li>
                <LinuxCommandBox
                    title="passwd cmd"
                    cmd1="passwd"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li><b>`pwd`</b> for changing to current working directory.</li>
                <LinuxCommandBox
                    title="pwd cmd"
                    cmd1="pwd"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li><b>`ls`</b> will list out all the files and subdirectory which are present in the current directory.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li><b>`ls -x`</b> same as ls command.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-x"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -F`</b> is used to list directory contents while appending a special character at the end of each listed item to indicate its type. This makes it easier to differentiate between files, directories, and other special files at a glance.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-F"
                    cmd3=""
                />
                <b><i>Syntax: </i></b><span>directory/  executable*  symlink@  fifo|  socket=</span>
                <hr />
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">No</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-secondary'>
                            <th scope="row">1</th>
                            <td>/</td>
                            <td>Indicates a directory</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">2</th>
                            <td>*</td>
                            <td>Indicates an executable file</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">3</th>
                            <td>@</td>
                            <td>Indicates a symbolic link</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">4</th>
                            <td>|</td>
                            <td>named Pipe</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">5</th>
                            <td>=</td>
                            <td>Indicates a socket</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">6</th>
                            <td>{">"}</td>
                            <td>Indicates a door</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <li><b>`ls -a`</b> displays all the files including hidden files.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-a"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -R`</b> displays entire directory tree structure.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-R"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -r`</b> displays reverse sorted order.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-r"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -l`</b> displays all the attributes of the file.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-l"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -file1` | `ls -dir1`</b> checks file/directory is present or not, if not it will raise error.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-file1"
                    cmd3=""
                />
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-dir1"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -d dir1`</b> list the name of directory if present.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-d"
                    cmd3="dir1"
                />
                <hr />
                <li><b>`ls -t`</b> display file with last modification file.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-t"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -lt`</b> display with date and time last modification.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-lt"
                    cmd3=""
                />
                <b><i>Output:</i></b><br></br><span>drwxr-xr-x 2 user group   4096 Aug  4 15:20 reports/<br></br>
                    -rw-r--r-- 1 user group  15045 Aug  3 14:22 notes.txt<br></br>
                    -rw-r--r-- 1 user group  25436 Aug  2 10:11 data.csv<br></br>
                    -rwxr-xr-x 1 user group 124576 Jul 29 11:45 script.sh<br></br>
                    -rw-r--r-- 1 user group  50032 Jul 28 09:15 presentation.pptx<br></br>
                </span>
                <hr />
                <li><b>`ls -lut`</b> is used to list directory contents while sorting the files based on the last access time, showing detailed information about each file.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-lut"
                    cmd3=""
                />
                <b><i>Output:</i></b><br></br><span>-rw-r--r--  1 user group  100 Aug  1 12:30 file1.txt<br></br>
                -rw-r--r--  1 user group  200 Jul 31 09:15 file2.txt<br></br>
                -rw-r--r--  1 user group  150 Jul 30 14:20 file3.txt<br></br>
                drwxr-xr-x  2 user group 4096 Jul 29 17:05 directory/<br></br>
                </span>
                <hr />
                <li><b>`ls -i`</b> is used to list the contents of a directory along with their inode numbers.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-i"
                    cmd3=""
                />
                <b><i>Output:</i></b><br></br><span>131072 file1.txt<br></br>
                    131073 file2.txt<br></br>
                    131074 file3.txt<br></br>
                    131075 directory/<br></br>
                </span>
            </ol>
        </div>
    );
}