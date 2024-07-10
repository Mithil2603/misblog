import React from 'react';
import './Basic_Functions.css';

export default function Linux() {
    return (
        <>
            <div className="main-container">
                <div className="container">
                    <h1 className="title"><b>Linux Programming Notes</b></h1>
                    <hr />
                    <h2 className="secondary-title"><b>What is Linux?</b></h2>
                    <div className="description">
                        <span className="text-primary">Linux</span> is an Operating System. Linux is a bit like Windows. It is a core software that runs your computer and lets you do stuff on it. <br></br><br />
                        <span>There are two ways of looking at pc:</span>
                        <li className='my-2'><b>Magical box</b></li>
                        <div className="description1">
                            <ul className='text-indent my-2'>
                                <li>It allows you to browse internet, play games etc.</li>
                                <li>Type address of a website and website will appear on your screen.</li>
                                <li>It is like a VCR, put a tape, press a button and a picture will appear on your TV.</li>
                                <li>Most of the people are not concerned with the technical complexities.</li>
                                <li>Windows Training - Ctrl + Alt + Delete - To recover after a crash.</li>
                                <li>Microsoft maintains its wealth by a virtual monopoly over PC manufacturers.</li>
                                <li>A computer buyer has choice to select a Hardware component among various hardware components of different manufacturers.</li>
                                <li>But a computer buyer has limited choice to select an operating system
                                at the time of PC purchase.</li>
                            </ul>
                        </div>
                        <li className='my-2'><b>Collection of components made by various manufacturers</b></li>
                        <div className="description1">
                            <ul className='text-indent my-2'>
                                <li>PC consists of a CPU, hard disk, graphics card and so on.</li>
                                <li> User can swap any hardware component to improve PC performance and for more data storage.</li>
                                <li><b>Operating System is another component of your PC.</b></li>
                                <li>OS can also be swapped out.</li>
                                <li>Windows is not free of charge, around $50 to $100 of the price a user pays goes straight into Microsoft's pocket.</li>
                                <li>Hundreds of millions of PCs are made each year and that is the reason that Microsoft is one of the richest corporations.</li>
                                <li>Microsoft's products are full of security holes due to which at worst a user can loss his data.</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h3 className="third-title"><b>What is Operating System?</b></h3>
                    <div className="description1">
                        <p className="text">
                            <ul>
                                <li>Operating System is the fundamental software that is needed to make your PC Work.</li>
                                <li>Without OS, it plays beep sounds to indicate that it can't do much without a whole set of programs.</li>
                                <li>Linux consists of a central set of programs that runs the PC on a low level, referred to as the Kernel, and hundreds of additional programs provided by other people and various companies.</li>
                            </ul>
                        </p>
                    </div>
                    <hr />
                    <h3 className="third-title"><b>Why Linux also known as GNU/Linux?</b></h3>
                    <div className="description1">
                        <p className="text">
                            <ul>
                                <li>Every thing that comes with typical versions of Linux such as programs to display graphics on the screen or let the user input data is supplied by other organizations, people or companies.</li>
                                <li>The GNU organization supplies a lot of vital programs and also system library files, without which linux would not run. These programs and files were vital to the acceptance of linux as an OS in its early days.</li>
                                <li>Because of this and the fact that Linux completed a long-running goal of GNU project to create UNIX like OS, some people choose to refer to Linux as GNU/Linux.</li>
                            </ul>
                        </p>
                    </div>
                    <hr />
                    <h3 className="third-title"><b>The Age of Linux</b></h3>
                    <div className="description1">
                        <p className="text">
                            <ul>
                                <li>Linux is also used as a server operating system that hand out files and other computer resources to other computers, full-fledged graphical desktop operating system like Windows.</li>
                                <li>Linux is a 32-bit and 64-bit multitasking, multiuser Operating System.</li>
                                <li>Linux is also used as a server operating system.</li>
                                <li>Linux can run supercomputers as well as it can run desktop computers too.</li>
                                <li>Linux is based on Unix which is based on Multies.</li>
                                <li>Multies was one of the first modern computer OS.</li>
                                <li>Linux was created by its father Linus Torvalds.</li>
                                <li>Linux was named after its creater Linus Torvalds.</li>
                            </ul>
                        </p>
                    </div>
                    <hr />
                    <h3 className="third-title"><b>Problems with Windows</b></h3>
                    <div className="description1">
                        <p className="text">
                            <ul>
                                <li>The World's most popular operating system Windows is made
                                    by Microsoft corporation.</li>
                                <li>Linux doesn't have any link with Windows.</li>
                                <li>Windows is used on 91% of the world’s desktop computers.</li>
                                <li>Windows is insecure and every day a new security hole is
                                    discovered.
                                    <ul className='text-indent'>
                                        <li>A security hole is a defect in a computer program that allows unauthorized users to gain access to a system or network and to interfere with its operation.</li>
                                    </ul>
                                </li>
                                <li>Due to security holes worms are created by malevolent programmers.</li>
                                <li>Worms are small programs that exploit security holes within operating systems, leaping from computer to computer and spreading like wildfire via the internet..</li>
                            </ul>
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}
