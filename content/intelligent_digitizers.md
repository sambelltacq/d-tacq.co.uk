+++
title = "Intelligent Digitizers"

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

### Intelligent Digitizer Concept

***D-TACQ*** digitizers feature an array of discrete <tooltip>ADC</tooltip> devices, one convertor per channel.

This differs from most digitizer cards, which will use a single <tooltip>ADC</tooltip> device with a multiplexer to route each channel in sequence onto the <tooltip>ADC</tooltip> in turn. The <tooltip>ADC</tooltip>-per-channel approach became cost-effective with the advent of fast and accurate integrated <tooltip>SAR</tooltip> convertor devices, and offers the following advantages over the multiplexer approach:

*  Simultaneous Sampling - all convertors sample the data on the same clock edge
*  Much Higher throughput.
*  Inherently better crosstalk
*  Suitable for Low Latency control applications

***D-TACQ*** digitizers also feature an on-board microprocessor and a deep DRAM memory buffer. The microprocessor is a low cost, low power device, but is able to give great flexibility in data and memory management.

The first product in the range, ACQ32PCI was released in 1999 and, configured as "DT100" systems - Industrial PC, x86 host running Linux and making use of the deep capture memory, ACQ32PCI found immediate application in transient capture diagnostics. ACQ32PCI deployed applications range from streaming data from a single card in a spinning centrifuge to advanced low latency control applications with more than 128 channels.

Finally, the digitizers feature a state-of-the art <tooltip>FPGA</tooltip> device, controlling all aspects of clocking and data flow. The latest <tooltip>FPGA</tooltip> devices also offer considerable possibilities for real time signal processing.