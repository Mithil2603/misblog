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
                />
                <hr />
                <li>`cal 2025` displays all the months of year 2025.</li>
                <LinuxCommandBox
                    title="Calendar cmd"
                    cmd1="cal"
                    cmd2="2025"
                />
                <hr />
                <li>`cal 4 2025` will only display April Month of 2025 Year.</li>
                <LinuxCommandBox
                    title="Calendar cmd"
                    cmd1="cal"
                    cmd2="4 2025"
                />
                <hr />
                <li>`date` will display current system date and time.</li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2=""
                />
                <hr />
                <li>`date +%d` will display current day of the month. <b>(Ex: 27)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%d"
                />
                <hr />
                <li>`date +%D` will display current date. <b>(Ex: MM/DD/YYYY)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%D"
                />
                <hr />
                <li>`date +%m` will display current month number. <b>(Ex: 08)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%m"
                />
                <hr />
                <li>`date +%M` will display current minutes. <b>(Ex: 40)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%M"
                />
                <hr />
                <li>`date +%h` will display current month start name. <b>(Ex: Mar)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%h"
                />
                <hr />
                <li>`date +%y` will display current year in small. <b>(Ex: 24)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%y"
                />
                <hr />
                <li>`date +%Y` will display current year. <b>(Ex: 2024)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%Y"
                />
                <hr />
                <li>`date +%H` will display current hour. <b>(Ex: 10)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%H"
                />
                <hr />
                <li>`date +%S` will display current seconds. <b>(Ex: 44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%S"
                />
                <hr />
                <li>`date +%T` will display current day time. <b>(Ex: 10:40:44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%T"
                />
                <hr />
                <li>`date +"%H:%M:%S"` will display current day time. <b>(Ex: 10:40:44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H:%M:%S"'
                />
                <hr />
                <li>`date +%H-%M-%S` will display current day time. <b>(Ex: 10-40-44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H-%M-%S"'
                />
                <hr />
                <li>`date +%H %M %S` will display current day time. <b>(Ex: 10 40 44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H %M %S"'
                />
            </ol>

            <ol>
                <hr />
                <h3>Display Commands</h3>
                <li><b>`echo`</b> displays the msg on screen as it is inputed.</li>
                <LinuxCommandBox
                    title="Display cmd"
                    cmd1="echo"
                    cmd2='"Hi! Xavier`s BCA & BSC Students"'
                />
                <hr />
                <Collapse title="Prompt Types" desc={formattedText}></Collapse>
                <hr />
                <li>`echo -e` used to take input from user.</li>
                <LinuxCommandBox
                    title="echo cmd"
                    cmd1="echo -e"
                    cmd2='"Enter the Number: \c"'
                />
                <hr />
                <li>Using `echo` cmd for printing statements in new line without using escape statements.
                    <b><br></br>Ex: echo "FYBCA<br></br>SYBCA<br></br>TYBCA"</b>
                </li>
                <LinuxCommandBox
                    title="echo cmd"
                    cmd1='echo "FYBCA' 
                    cmd2='SYBCA' 
                    cmd3='TYBCA"'
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
                <b>Output: <br></br>Rollno:&nbsp;&nbsp; 123 <br></br>
                    Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TYBCA   
                </b>
            </ol>
        </div>
    );
}