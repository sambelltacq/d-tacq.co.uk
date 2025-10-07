+++
title = "Architecture"

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

### Architecture
***D-TACQ*** 4G digitizers use the Xilinx ZYNQ system on chip providing high performance at low cost.

***D-TACQ*** 2G digitizers conform to recognized industrial standards, and are designed to work in standard chassis. In common with most other digitizer cards, they can work as peripheral devices under the control of a system master computer in the chassis. New ***D-TACQ*** 4G products are available both as discrete analog modules, available to plug into third party standards-compliant sites, and as 1U rack-mount appliances.

In addition, ***D-TACQ***'s cards and appliances are self contained, networked Linux computers in their own right, and so they are capable of running directly off a network, without the need for a system master. This can lead to considerable simplification by eliminating backplane resource conflicts, and, by using TCP/IP networking, in most cases eliminating the need for a driver altogether. 

The standalone device is an effective solution both in small applications - because there is no overhead of a system slot card, and in large applications, because of the inherent scalability of networked devices. 

Finally, 2G cards may themselves act as system masters, potentially controlling other cards via the pci backplane on the chassis.