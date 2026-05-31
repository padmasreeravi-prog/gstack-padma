'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'proto1' | 'proto2'>('proto1');
  const [inputText, setInputText] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [securityLog, setSecurityLog] = useState<string[]>([]);

  // PROTOTYPE 1: Public Cloud AI Gateway (Simulated Response Framework)
  const handlePrototype1Cloud = () => {
    setIsLoading(true);
    setAiResult('');
    setSecurityLog(["☁️ Initializing standard public cloud API connection..."]);

    setTimeout(() => {
      setSecurityLog([
        "☁️ Initializing standard public cloud API connection...",
        "📡 Token stream dispatched across public network protocols.",
        "✅ Dynamic response successfully returned from cloud model endpoint."
      ]);
      setAiResult(`🟢 **EXECUTIVE SUMMARY & HEALTH STATUS**
      Project health is trending toward AMBER based on recent technical stream friction. Strategic alignment to customer-first activation goals remains viable if the temporary mitigation models are sustained.
      
      🎯 **KEY MILESTONES ACHIEVED & PROGRESS**
      - Successfully initialized code isolation testing for critical-path streams.
      - Maintained deployment readiness postures for target Friday release schedules.
      
      ⚠️ **RISKS & MITIGATION PLAN**
      - **Identified Risk:** Legacy data layer synchronization scripts are presenting instability, bottlenecking key throughput metrics by 35%.
      - **Proactive Mitigation:** Shifting technical tiger teams to a temporary 14-day cached data abstraction window to safely decouple dependencies.`);
      setIsLoading(false);
    }, 1500);
  };

  // PROTOTYPE 2: Secure Air-Gapped Matrix (BLUF Command Center Format)
  const handlePrototype2Secure = () => {
    setIsLoading(true);
    setAiResult('');
    setSecurityLog(["🔒 Initializing zero-trust local data isolation wrapper..."]);

    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      let structuralReport = '';
      const logs = ["🔒 Zero-Trust environment isolated. Running secure telemetry parse..."];

      if (lowerInput.includes('crm') || lowerInput.includes('mainframe') || lowerInput.includes('billing')) {
        logs.push("⚠️ Security Flag: Core asset data signatures detected. Applied automated masking.");
      }

      if (lowerInput.includes('mainframe') || lowerInput.includes('billing') || lowerInput.includes('outage')) {
        logs.push("📦 Syncing with OSS/BSS Billing Transformation parameters...");
        structuralReport = `📈 **COMMAND CENTER INTEGRATED STATUS REPORT**
============================================================
**PROGRAM STREAM:** OSS/BSS Core Billing Migration
**GOVERNANCE HEALTH:** 🔴 CRITICAL RED (Active Blockage)
**SCHEDULE VARIANCE (SV):** -4 Days (Slipping)
============================================================

⚡ **1. B.L.U.F. (BOTTOM LINE UP FRONT)**
Mainframe database migration scripts failed regression validation in staging. The core migration path is completely blocked due to 100% capacity constraints within the Database Administration (DBA) squad responding to an independent production incident. 

👥 **2. CROSS-FUNCTIONAL IMPACT & SYSTEM ARCHITECTURE**
- **Downstream Blocker:** QA automation testing workstream is at a complete standstill (0% execution velocity).
- **Customer Exposure:** High risk of slipping the target deployment window, directly endangering multi-year digital billing simplification milestones.

🛠️ **3. REMEDIATION VECTOR & OPERATIONAL ASK**
- **Immediate Workaround:** Isolated the regression script errors to safe sandboxes to prevent cross-environment environment damage.
- **Resource Reallocation Plan:** Exercising program authority to immediately draft two (2) Senior DBAs from the Operational BAU (Business-As-Usual) team into the Transformation Tiger Team.
- **Target Resolution:** This targeted resource injection will clear the automation script backlog within a 24-hour cycle, pulling the critical path back into acceptable baseline tolerances.`;
      } else {
        logs.push("📦 Syncing with Cloud Network Virtualization parameters...");
        structuralReport = `📈 **COMMAND CENTER INTEGRATED STATUS REPORT**
============================================================
**PROGRAM STREAM:** Network Cloud Infrastructure & 5G Integration
**GOVERNANCE HEALTH:** 🟡 DEGRADED AMBER (At-Risk)
**SCHEDULE VARIANCE (SV):** 0 Days (On Schedule via Workaround)
============================================================

⚡ **1. B.L.U.F. (BOTTOM LINE UP FRONT)**
Stream 4 cloud database integration is encountering packet loss during stress tests against legacy CRM systems. While core 5G provisioning throughput is temporarily throttled by 35%, a critical architectural compromise preserves the target launch for this Friday.

👥 **2. CROSS-FUNCTIONAL IMPACT & SYSTEM ARCHITECTURE**
- **Technical Trade-off:** Implemented a temporary hybrid-cached data buffer layer for the next 14 days to isolate the sync degradation.
- **Customer Exposure:** Zero visible impact to user interface layers; activation portal deployment retains active clearance.

🛠️ **3. REMEDIATION VECTOR & OPERATIONAL ASK**
- **Mitigation Action:** Network engineering assets have been redeployed to rewrite the legacy synchronization scripts offline. 
- **Target Resolution:** Full script remediation will deploy during the scheduled maintenance window in Sprint 3 with no impact to the master launch schedule.`;
      }

      logs.push("✅ Status transformation compiled inside secure sandbox.");
      setSecurityLog(logs);
      setAiResult(structuralReport);
      setIsLoading(false);
    }, 1200);
  };

  const executeSynthesis = () => {
    if (activeTab === 'proto1') handlePrototype1Cloud();
    if (activeTab === 'proto2') handlePrototype2Secure();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-100 p-8">
      <header className="text-center max-w-3xl mb-8">
        <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-950 border border-cyan-800 rounded-full mb-4 uppercase">
          GSTACK Padma // Multi-Architecture Lab
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          Transformation Command Center
        </h1>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Comparative prototyping workspace demonstrating structural variance across public cloud and air-gapped security configurations.
        </p>
      </header>

      {/* Interactive Tabs for Architectural Variance */}
      <div className="flex border-b border-slate-800 mb-8 w-full max-w-3xl p-1 bg-slate-900 rounded-xl">
        <button
          onClick={() => { setActiveTab('proto1'); setAiResult(''); setSecurityLog([]); }}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
            activeTab === 'proto1' ? 'bg-cyan-600 text-slate-950' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          🌐 Prototype 1: Cloud AI Gateway
        </button>
        <button
          onClick={() => { setActiveTab('proto2'); setAiResult(''); setSecurityLog([]); }}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
            activeTab === 'proto2' ? 'bg-cyan-600 text-slate-950' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          🛡️ Prototype 2: Secure Air-Gapped Matrix
        </button>
      </div>

      <main className="w-full max-w-3xl space-y-6">
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-lg font-bold mb-2 text-slate-200">
            {activeTab === 'proto1' ? '⚡ Public Cloud Prompt Interface' : '🔒 Secure Enterprise Telemetry Capture'}
          </h2>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            {activeTab === 'proto1' 
              ? 'Simulates a public API pipeline converting technical inputs into standard, narrative paragraphs.' 
              : 'Applies zero-trust corporate data masking and processes data inside a deterministic dashboard array utilizing B.L.U.F. nomenclature.'}
          </p>
          
          <textarea
            className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm mb-4 text-slate-300 font-mono"
            rows={5}
            placeholder={activeTab === 'proto1' ? "Input messy project updates here..." : "Paste Scenario 1 or Scenario 3 here..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            onClick={executeSynthesis}
            disabled={isLoading || !inputText}
            className="w-full py-3.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded-xl transition disabled:bg-slate-800 disabled:text-slate-600 font-sans uppercase tracking-wider text-xs"
          >
            {isLoading ? 'Processing Stream Architecture...' : `Execute ${activeTab === 'proto1' ? 'Cloud Synthesis' : 'Command Center Compiler'} ⚡`}
          </button>
        </div>

        {/* Real-time System Processing Logs */}
        {securityLog.length > 0 && (
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-400 space-y-1">
            {securityLog.map((log, idx) => (
              <div key={idx} className={log.includes('⚠️') ? 'text-yellow-500' : log.includes('✅') ? 'text-emerald-400' : ''}>
                {log}
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Output Display */}
        {aiResult && (
          <div className="p-6 bg-slate-900 rounded-2xl border border-cyan-900 shadow-lg">
            <h3 className="font-bold text-cyan-400 text-xs uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
              📋 Compiled Output Dashboard ({activeTab === 'proto1' ? 'Standard Paragraphs' : 'BLUF Enterprise Sheets'})
            </h3>
            {activeTab === 'proto1' ? (
              <p className="text-slate-300 text-sm whitespace-pre-line leading-relaxed font-sans">{aiResult}</p>
            ) : (
              <pre className="text-slate-300 text-xs whitespace-pre-wrap leading-relaxed font-mono">{aiResult}</pre>
            )}
          </div>
        )}
      </main>
    </div>
  );
}