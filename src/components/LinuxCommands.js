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
            </ol>
        </div>
    );
}