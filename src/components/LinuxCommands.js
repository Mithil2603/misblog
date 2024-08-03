import React from 'react';
import LinuxCommandBox from './LinuxCommandBox'; // Import the reusable component
import './Linux_cmds.css';

export default function Linux_Commands() {
    return (
        <div className="container">
            <h1>Linux Commands</h1>

            <h3>Some Common Linux Commands</h3>
            <hr />
            <ol>
            {/* Use the LinuxCommandBox component with different props */}
            <li><b>`cal` displays the calender of current months and year by default.</b></li>
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
        </div>
    );
}