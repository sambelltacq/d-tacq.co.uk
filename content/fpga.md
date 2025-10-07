---

title: "D-TACQ : FPGA"

images:
  - filename: "vertical-9U-14slot.jpg"
    alt: "Big Systems: Compact PCI, 14 slots, 9U"
  - filename: "Networked-384.jpg"
    alt: "Small Systems: Compact PCI, 4 slots, 2U"
  - filename: "acq2006-blf-w.jpg"
    alt: "Compact Systems: ACQ2006, 48 channels, RJ45 connectors"
  - filename: "radcelf-acq1001-stack-side-w.jpg"
    alt: "OEM Systems: open stack, 16 channels, DDS clock module"
  - filename: "acq132.jpg"
    alt: "Cards: ACQ132CPCI"
  - filename: "acq480fmc.jpg"
    alt: "Modules: ACQ480FMC"

---

### FPGA Capability
***DTACQ*** cards use an advanced Field Programmable Gate Array FPGA for data marshalling. The configuration image for the <tooltip>FPGA</tooltip> is held in local flash memory, allowing for easy in system upgrade. The devices used on the 2G series of cards have sufficient spare capacity to perform significant real time DSP on captured data in real time as it passes through the <tooltip>FPGA</tooltip>. ***DTACQ*** has implemented a range of standard DSP functions to ship with the data, including

*  Event detection
*  Digital Filter $DEFS[FIR] for use in oversampling applications, brick wall anti alias filter, processing gain, more effective bits <a href="/oversampling_fir_filter">example</a>.
*  Timestamp functions
*  Thresholding and peak detect

In addition, custom processing may be implemented. Typically ***DTACQ*** will supply a skeleton application to end-user requirement, and the end-user may then choose to complete the design . Examples of custom processing implemented in FPGA include:

* <a href="/digital_lock_in_amplifier">96 channel digital lock-in amplifier</a> :<br/><i>	synchronous detection brings enormous processing gain.</i>
* 96 channel digital down-converter DDC :<br/><i>	 8x data shifting a modulated signal from carrier to baseband.</i>
* Klystron [Microwave] coupler protection system. :<br/><i> very hard realtime math based protection system, 200+ channels on 16 cards.</i>