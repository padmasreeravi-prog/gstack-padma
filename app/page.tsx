'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'proto1' | 'proto2' | 'proto3'>('proto1');
  const [inputText, setInputText] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [securityLog, setSecurityLog] = useState<string[]>([]);
  const [kpis, setKpis] = useState<{ label: string; value: string; color: string }[]>([]);
  
  // Verizon Stakeholder Distribution List extracted from your operational email data
  const distributionList = [
    "padmasree.ravi@verizonwireless.com"
  ];

  // COMMON BLUEPRINT GENERATOR FOR HISTORICAL ENGINE DATA
  const compileStaticReport = () => {
    return `📈 **COMMAND CENTER INTEGRATED STATUS REPORT**
============================================================
**PROGRAM STREAM:** Fixed Wireless Access (FWA) Pseudo MDN Migration
**GOVERNANCE HEALTH:** 🔴 CRITICAL RED (Mass Blockage / 0% Velocity)
**SCHEDULE VARIANCE (SV):** -14 Days (Severe Timeline At-Risk)
============================================================

⚡ **1. B.L.U.F. (BOTTOM LINE UP FRONT)**
The bulk execution pipeline across 3.2M target accounts has stalled, yielding an unacceptable 0.0018% completion rate. Delivery is completely blocked by recurring downstream application connection failures originating from core order generation infrastructure.

👥 **2. CROSS-FUNCTIONAL IMPACT & SYSTEM ARCHITECTURE ANALYSIS**
- **Technical Bottleneck:** Network synchronization scripts are throwing hard connection timeouts when calling the secure gateway node ([REDACTED_INTERNAL_NODE]).
- **Downstream Drag:** Automated verification workstreams (MLMO stream and ORBPM Activation engines) are suffering execution degradation across active processing cycles (Cycles 27 and 31).

📊 **3. STRATEGIC & BUSINESS INSIGHTS**
- **Operational Variance:** The delta between planned velocity and actual output represents a 14-day master schedule slip, threatening the Year 1 Transformation horizon.
- **Financial Impact Risks:** Prolonged dependency on legacy pseudo MDN architectures limits long-term cross-functional infrastructure simplification.

🛠️ **4. REMEDIATION VECTOR & OPERATIONAL ASK**
- **Immediate Mitigation:** Shifting pipeline architecture from bulk automated processing to an offline micro-batch throttling model.
- **Executive Resource Escalation:** Requesting immediate release of dedicated System Architecture assets from the Core Infrastructure Group to rebuild the API retry logic constraints within the next 24 hours.`;
  };

  // PROTOTYPE 1: Cloud AI Gateway
  const handlePrototype1Cloud = () => {
    setIsLoading(true);
    setAiResult('');
    setSecurityLog(["☁️ Initializing standard public cloud API connection..."]);
    setKpis([]);

    setTimeout(() => {
      setSecurityLog([
        "☁️ Initializing standard public cloud API connection...",
        "📡 Token stream dispatched across public network protocols.",
        "✅ Dynamic response successfully returned from cloud model endpoint."
      ]);
      setAiResult(`🟢 **EXECUTIVE SUMMARY & HEALTH STATUS**
The FWA Migration program stream is currently exhibiting severe delivery compression. Technical pipeline infrastructure requires immediate governance intervention.

🎯 **KEY MILESTONES ACHIEVED & PROGRESS**
- Completed raw baseline mapping for 3.2M accounts across standard processing cycles.
- Isolated localized network timeout parameters within staging boundaries.

⚠️ **RISKS & MITIGATION PLAN**
- **Identified Blocker:** Core order generator API layer is throwing connection timeouts, limiting completion velocity.
- **Mitigation Strategy:** Re-allocating specialized database engineering assets to rewrite connection retry scripts over the weekend.`);
      
      setKpis([
        { label: "MIGRATION EFFICIENCY", value: "DEGRADED", color: "text-yellow-500" },
        { label: "ACTIVE TIMEOUTS", value: "DETECTED", color: "text-red-500" }
      ]);
      setIsLoading(false);
    }, 1200);
  };

  // PROTOTYPE 2: Secure Air-Gapped Matrix
  const handlePrototype2Secure = () => {
    setIsLoading(true);
    setAiResult('');
    setSecurityLog(["🔒 Initializing zero-trust local data isolation wrapper..."]);
    setKpis([]);

    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      const logs = ["🔒 Zero-Trust environment isolated. Running secure telemetry parse..."];

      if (lowerInput.includes('fwa') || lowerInput.includes('seqgen') || lowerInput.includes('mdn')) {
        logs.push("⚠️ SECURITY ALIGNMENT TRIGGERED: Internal Verizon network nodes detected.");
        logs.push("♻️ MASKING APPLIED: Redacted server strings to secure environmental variables.");
      }

      if (lowerInput.includes('fwa') || lowerInput.includes('mdn') || lowerInput.includes('mlmo')) {
        logs.push("📦 Syncing with FWA Core Network Migration parameters...");
        setKpis([
          { label: "TOTAL PROGRAM POOL", value: "3,248,919", color: "text-slate-300" },
          { label: "SUCCESSFUL TRANSITIONS", value: "58", color: "text-emerald-400" },
          { label: "PROGRAM VELOCITY RATE", value: "0.0018%", color: "text-rose-500 font-black" }
        ]);
        setAiResult(compileStaticReport());
      } else {
        logs.push("📦 Syncing with General Operations parameters...");
        setKpis([{ label: "HEALTH", value: "GREEN", color: "text-emerald-400" }]);
        setAiResult(`📈 **COMMAND CENTER INTEGRATED STATUS REPORT**\n============================================================\nOperating within standard parameters. No escalation required.`);
      }

      logs.push("✅ Status transformation compiled inside secure sandbox.");
      setSecurityLog(logs);
      setIsLoading(false);
    }, 1200);
  };

  // PROTOTYPE 3: Automated Broadcast Hub Engine
  const handlePrototype3Automated = () => {
    setIsLoading(true);
    setAiResult('');
    setSecurityLog(["🔒 Initializing secure operational sandbox..."]);
    setKpis([]);

    setTimeout(() => {
      setSecurityLog([
        "🔒 Zero-Trust isolation validated.",
        "📊 Dynamic KPI extraction module bound to system output.",
        "📅 Cron Scheduler Simulation: Weekly Thursday 0700 automated batch loop triggered.",
        "✅ Enterprise status report pre-compiled and placed in staging editor."
      ]);

      setKpis([
        { label: "TOTAL PROGRAM POOL", value: "3,248,919", color: "text-slate-300" },
        { label: "SUCCESSFUL TRANSITIONS", value: "58", color: "text-emerald-400" },
        { label: "PROGRAM VELOCITY RATE", value: "0.0018%", color: "text-rose-500 font-black" },
        { label: "BACKLOG RISK VOLUME", value: "3,248,029", color: "text-amber-500" },
        { label: "INFRASTRUCTURE TIMEOUTS", value: "ACTIVE (443)", color: "text-rose-500" }
      ]);

      setAiResult(compileStaticReport());
      setIsLoading(false);
    }, 1000);
  };

  const executeSynthesis = () => {
    if (activeTab === 'proto1') handlePrototype1Cloud();
    if (activeTab === 'proto2') handlePrototype2Secure();
    if (activeTab === 'proto3') handlePrototype3Automated();
  };

  const handleSendEmail = () => {
    const emailTo = distributionList.join(',');
    const emailSubject = encodeURIComponent(`FWA Pseudo MDN Migration Command Center Update - 05/31/2026`);
    const emailBody = encodeURIComponent(aiResult);
    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-100 p-8">
      <header className="text-center max-w-3xl mb-8">
        <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-950 border border-cyan-800 rounded-full mb-4 uppercase">
          GSTACK Padma // Multi-Architecture Lab
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent sm:text-5xl">
          Transformation Command Center
        </h1>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Comparative prototyping workspace demonstrating structural variance across cloud gateways, secure air-gaps, and automated delivery pipelines.
        </p>
      </header>

      {/* Navigation Tabs - Expanding to 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-slate-800 mb-8 w-full max-w-3xl p-1 bg-slate-900 rounded-xl">
        <button
          onClick={() => { setActiveTab('proto1'); setAiResult(''); setSecurityLog([]); setKpis([]); }}
          className={`py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
            activeTab === 'proto1' ? 'bg-cyan-600 text-slate-950' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          🌐 Proto 1: Cloud AI
        </button>
        <button
          onClick={() => { setActiveTab('proto2'); setAiResult(''); setSecurityLog([]); setKpis([]); }}
          className={`py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
            activeTab === 'proto2' ? 'bg-cyan-600 text-slate-950' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          🛡️ Proto 2: Secure Air-Gap
        </button>
        <button
          onClick={() => { setActiveTab('proto3'); setAiResult(''); setSecurityLog([]); setKpis([]); }}
          className={`py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
            activeTab === 'proto3' ? 'bg-cyan-600 text-slate-950' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          📬 Proto 3: Automated Broadcast
        </button>
      </div>

      <main className="w-full max-w-3xl space-y-6">
        {/* Input Console Area */}
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-lg font-bold mb-2 text-slate-200">
            {activeTab === 'proto1' && '⚡ Public Cloud Prompt Interface'}
            {activeTab === 'proto2' && '🔒 Secure Enterprise Telemetry Capture'}
            {activeTab === 'proto3' && '📅 Weekly Thursday Cron Automation Loop'}
          </h2>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            {activeTab === 'proto1' && 'Simulates an open API pipeline converting technical inputs into clean narrative formats.'}
            {activeTab === 'proto2' && 'Applies zero-trust telemetry masking and splits processing pathways based on localized network signatures.'}
            {activeTab === 'proto3' && 'Simulates automated weekly data sweeps, binding full-scope KPI block grids directly with an interactive distribution list mail-injector.'}
          </p>
          
          {activeTab !== 'proto3' && (
            <textarea
              className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm mb-4 text-slate-300 font-mono"
              rows={5}
              placeholder="Paste telemetry notes here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          )}

          <button
            onClick={executeSynthesis}
            disabled={isLoading || (activeTab !== 'proto3' && !inputText)}
            className="w-full py-3.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded-xl transition disabled:bg-slate-800 disabled:text-slate-600 font-sans uppercase tracking-wider text-xs"
          >
            {isLoading ? 'Executing Architecture Matrix...' : activeTab === 'proto3' ? 'Trigger Automated Thursday Loop ⏰' : `Compile ${activeTab === 'proto1' ? 'Cloud Framework' : 'Secure Matrix'} ⚡`}
          </button>
        </div>

        {/* Real-time System Processing Logs */}
        {securityLog.length > 0 && (
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-400 space-y-1">
            {securityLog.map((log, idx) => (
              <div key={idx} className={log.includes('⚠️') ? 'text-yellow-500' : log.includes('✅') ? 'text-emerald-400' : log.includes('📅') ? 'text-cyan-400' : ''}>
                {log}
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Dashboard KPI Blocks Grid */}
        {kpis.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center shadow-sm">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{kpi.label}</div>
                <div className={`text-sm sm:text-base font-black ${kpi.color}`}>{kpi.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Output Panel - Static display for Protos 1 & 2, Interactive Editor for Proto 3 */}
        {aiResult && (
          <div className="p-6 bg-slate-900 rounded-2xl border border-cyan-900 shadow-lg space-y-4">
            {activeTab === 'proto3' ? (
              <>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <h3 className="font-bold text-cyan-400 text-xs uppercase tracking-widest font-sans">
                    📋 Live Executive Status Asset Editor (Manual Overrides Allowed)
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-950 text-amber-400 border border-amber-800 rounded">
                    ✍️ Editable Mode Active
                  </span>
                </div>
                <textarea
                  className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none text-xs text-slate-300 font-mono leading-relaxed"
                  rows={14}
                  value={aiResult}
                  onChange={(e) => setAiResult(e.target.value)}
                />
                <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-left w-full sm:w-auto">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Target Broadcast Distribution Group:</div>
                    <div className="text-[11px] text-cyan-500 font-mono font-medium truncate max-w-xs sm:max-w-md">
                      {distributionList.length} Stakeholders Synced from System Log
                    </div>
                  </div>
                  <button
                    onClick={handleSendEmail}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-black rounded-xl transition uppercase tracking-wider text-xs shadow-md shrink-0"
                  >
                    📬 Stage Email Update in Outlook ⚡
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-bold text-cyan-400 text-xs uppercase tracking-widest mb-3 border-b border-slate-800 pb-2 font-sans">
                  📋 Compiled Output Dashboard
                </h3>
                {activeTab === 'proto1' ? (
                  <p className="text-slate-300 text-sm whitespace-pre-line leading-relaxed font-sans">{aiResult}</p>
                ) : (
                  <pre className="text-slate-300 text-xs whitespace-pre-wrap leading-relaxed font-mono">{aiResult}</pre>
                )}
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}