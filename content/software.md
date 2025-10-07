+++
title = "Software"

[[images]]
filename = "vertical-9U-14slot.jpg"
alt = "Big Systems: Compact PCI, 14 slots, 9U"

[[images]]
filename = "Networked-384.jpg"
alt = "Small Systems: Compact PCI, 4 slots, 2U"

[[images]]
filename = "acq2006-blf-w.JPG"
alt = "Compact Systems: ACQ2006, 48 channels, RJ45 connectors"

[[images]]
filename = "radcelf-acq1001-stack-side-w.jpg"
alt = "OEM Systems: open stack, 16 channels, DDS clock module"

[[images]]
filename = "acq132.jpg"
alt = "Cards: ACQ132CPCI"

[[images]]
filename = "acq480fmc.jpg"
alt = "Modules: ACQ480FMC"

+++

### We support Open Standards and Open Source Software.

It is ***DTACQ*** policy to supply full documentation to all interfaces and the source code to working examples  to customers on request. In addition, the majority of the operating software is made available to customers as source code under the <tooltip>GPL</tooltip>. Where products are deployed with a host side driver, this driver is supplied for the user's Linux host system as source code, licensed under the <tooltip>GPL</tooltip>. 

Because the products make extensive use of standard TCP/IP networking, control from other platforms such as Windows is readily achieved. ***DTACQ*** provides free of charge a highly functional, portable reference Remote Client program that will work on all of Linux, Windows, MAC OSX and Solaris. We highly recommend use of the Remote Client, at least for initial testing, and it is quite possible that this is all the host side software that you'll need.

The control interface is based on simple ASCII commands. This means that the cards are uniquely easy to control, typically using simple scripts. Customers have implemented their own remote clients operating over the remote interface, in a variety of languages including Bash, Perl, Labview, MATLAB, <tooltip>MDSplus</tooltip>/TDI, Java and regular C code.

New 4G appliances include an  <tooltip>EPICS</tooltip> IOC to manage application logic, and to publish control and data PV's on the network. This not only makes the unit simple to include into an existing <tooltip>EPICS</tooltip> site, other users may still make use of PV calculated values and control routines transparently, with no knowledge of the underlying technology at all. Finally, the integral <tooltip>EPICS</tooltip> IOC means that each appliance can be easily evaluated using a powerful, multiple platform OPI <tooltip>CSS/BOY</tooltip>. A comprehensive API is provided in Python, and Labview, Matlab examples are also available.
		   
Data upload, by contrast is raw binary data for maximum efficiency. A number of channelise, subset and data combing functions are available. When calibrated, the card makes per channel, per range scaling information available so that client software is able to scale data accurately. Three strategies for data upload are available:

*  <b>Host-Pull</b> : the host computer requests the data and pulls from the Target ACQ card as required.
*  <b>Target-Push</b> : the target ACQ card pushes data to a host side repository as it becomes available. This method is simple to implement - the host side repository could be a simple ftp server, or a dedicated data service such as MDSIP, and, using the minimum host side cpu resources, is highly efficient and saleable.
*  <b>Push-Pull</b> : the target ACQ card will upload a data subset as it becomes available. The Host identifies regions of interest ROI in the uploaded data and requests more detailed data sets from these regions.
*  High  performance PCI-Express cable and SFP+ fiber optic links are also available, to allow full rate streaming, typically at about 100MB/s, but potentially up to 1GB/s is achievable.

Second generation products also make extensive use of web pages for diagnostics, and optional control pages are available. So it is possible to control capture via a web page, and to specify data upload - for example to a remote ftp server - via a web page. No drivers required!, only a web browser. The cards support a Web Service remote procedure call interface for automated connection to other computer systems.

Since the second generation target is a full function, virtual memory Linux system, it is, in principle, possible to port almost any POSIX compliant networked data handling application. For example, the target system features an ssh client (<tooltip>dropbear</tooltip>), an ftp client and an <tooltip>MDSplus</tooltip> implementation (an <tooltip>MDSplus</tooltip> "thin client" is provided by default, while an experimental <tooltip>MDSplus</tooltip> "thick client" is available as an additional disk image.