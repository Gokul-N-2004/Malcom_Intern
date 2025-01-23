function PCBDesPage() {
  const requirements = [
    {
      title: "Design Software:",
      skills: "Altium Designer, KiCad, Eagle",
    },
    {
      title: "Schematic & Layout Design:",
      skills: "Multi-layer PCBs, differential pair routing",
    },
    {
      title: "Simulation:",
      skills: "LTSpice, Proteus, Multisim",
    },
    {
      title: "Component Selection:",
      skills: "BOM creation, microcontrollers, IC selection",
    },
    {
      title: "Signal Integrity & EMI/EMC:",
      skills: "Handling noise, crosstalk, interference issues",
    },
    {
      title: "Manufacturing & Prototyping:",
      skills: "Gerber files, PCB fabrication, assembly processes",
    },
    {
      title: "Testing & Debugging:",
      skills: "Oscilloscopes, multimeters, logic analyzers",
    },
    {
      title: "Programming Languages:",
      skills: "VHDL, Verilog, SystemVerilog",
    },
    {
      title: "Development Tools:",
      skills: "Xilinx Vivado, Intel Quartus, Lattice Diamond",
    },
    {
      title: "Simulation & Verification:",
      skills: "ModelSim, ISim, QuestaSim",
    },
    {
      title: "Communication Protocols:",
      skills: "SPI, I2C, UART, PCIe",
    },
    {
      title: "Optimization:",
      skills: "High-speed data processing, low-latency design",
    },
    {
      title: "Problem Solving:",
      skills: "Clock domain crossing, timing analysis, power optimization",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-mono mb-12">
          <span className="text-pink-500">PCB</span> Designer
        </h1>

        <div className="bg-zinc-900 rounded-lg p-8 mb-8">
          {requirements.map((req, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-pink-500 mb-2">{req.title}</h2>
              <p className="text-gray-200">{req.skills}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-white text-black px-8 py-2 rounded hover:bg-gray-200 transition-colors">
            Apply Now
          </button>
          <a href="#" className="text-gray-400 hover:text-white">
            Back
          </a>
        </div>
      </main>
    </div>
  );
}

export default PCBDesPage;
