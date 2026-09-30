"use client";

import { useState } from "react";
import { 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  Target, 
  MessageCircle, 
  PhoneCall, 
  Mail, 
  Sparkles, 
  ArrowUpRight,
  Search,
  Filter,
  CheckCircle2,
  Play,
  RotateCw,
  Plus,
  Sliders,
  Settings as SettingsIcon,
  Shield,
  Key,
  Users,
  Database,
  Building,
  Zap,
  Bot
} from "lucide-react";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";
import { PLANS } from "@/lib/pricing";

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  
  // Leads tab interactive state
  const [leadFilter, setLeadFilter] = useState<string>("All");
  const [leadSearch, setLeadSearch] = useState<string>("");
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  // Workflows tab state
  const [workflows, setWorkflows] = useState([
    { id: 1, name: "Web Inbound -> Auto-Score & Assign Lead", trigger: "Form Webhook", active: true, runs: "1,248" },
    { id: 2, name: "Idle Lead (> 48h) -> WhatsApp Follow-up Reminder", trigger: "Cron 15m", active: true, runs: "834" },
    { id: 3, name: "Site Visit Logged -> Calendar Invite + Route Map", trigger: "CRM Status Change", active: true, runs: "216" },
    { id: 4, name: "Deal Won -> Digital Agreement + Advance Receipt", trigger: "Pipeline Won", active: true, runs: "48" },
    { id: 5, name: "Weekly Executive Summary Report to Founders", trigger: "Sunday 8:00 PM", active: false, runs: "24" },
  ]);
  const [testRunLog, setTestRunLog] = useState<string | null>(null);

  // AI Agents tab state
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(85);
  const [agentStatus, setAgentStatus] = useState<Record<string, boolean>>({
    qualifier: true,
    followup: true,
    reporting: true,
    concierge: true,
  });

  // Settings tab state
  const [orgName, setOrgName] = useState("RS Real Estate Ltd.");
  const [subdomain, setSubdomain] = useState("rsrealestate.mme-ai.com");
  const [settingsSaved, setSettingsSaved] = useState(false);

  const navTabs = ["Overview", "Leads", "Customers", "Workflows", "Analytics", "AI Agents", "Settings"];

  const sampleLeads = [
    { id: 1, name: "Vikramaditya Singhania", phone: "+91 98450 •••••", stage: "High Intent", budget: "₹2.5 - 3.0 Cr", score: "96%", rep: "Rajesh K." },
    { id: 2, name: "Dr. Sneha Kulkarni", phone: "+91 99011 •••••", stage: "Site Visit Done", budget: "₹3.8 Cr", score: "92%", rep: "Ananya M." },
    { id: 3, name: "Rohan Aggarwal", phone: "+91 98102 •••••", stage: "Follow-up Due", budget: "₹1.8 Cr", score: "84%", rep: "Vikram P." },
    { id: 4, name: "Meenakshi Sundaram", phone: "+91 94440 •••••", stage: "Qualified", budget: "₹2.2 Cr", score: "89%", rep: "Rajesh K." },
    { id: 5, name: "Arjun Verma", phone: "+91 97110 •••••", stage: "Won / Booked", budget: "₹4.1 Cr", score: "99%", rep: "Ananya M." },
  ];

  const filteredLeads = sampleLeads.filter(lead => {
    const matchesFilter = leadFilter === "All" || lead.stage.includes(leadFilter);
    const matchesSearch = lead.name.toLowerCase().includes(leadSearch.toLowerCase()) || lead.rep.toLowerCase().includes(leadSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const triggerTestWorkflow = (wfName: string) => {
    setTestRunLog(`Executing '${wfName}'... Simulation passed! Data synced across CRM & WhatsApp API in 240ms.`);
    setTimeout(() => {
      setTestRunLog(null);
    }, 4500);
  };

  const handleAction = (leadName: string, actionType: string) => {
    setActionNotice(`${actionType} action triggered for ${leadName}`);
    setTimeout(() => setActionNotice(null), 3000);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#070914] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Interactive Multi-Tenant Dashboard</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            See the business. Not just the software.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Click through every tab below to test the live operational views of MMe-AI.
          </p>
        </div>

        {/* Mock Software Dashboard Container */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#0c1026]/95 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden glow-card-purple">
          
          {/* Top Bar Navigation */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#080b1d] px-6 py-3.5 gap-4">
            <div className="flex items-center gap-6 overflow-x-auto max-w-full pb-1 sm:pb-0">
              <span className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
                MMe-AI OS
              </span>
              <nav className="flex items-center gap-1 shrink-0">
                {navTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                      activeTab === tab
                        ? "bg-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <IllustrativeBadge className="hidden sm:inline-flex" />
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Tenant: RS Real Estate
              </span>
              <div className="h-7 w-7 rounded-full bg-indigo-600/40 border border-indigo-400/30 flex items-center justify-center text-xs font-bold text-white">
                MK
              </div>
            </div>
          </div>

          {/* Action Notification Toast */}
          {actionNotice && (
            <div className="bg-indigo-600/90 text-white text-xs py-2 px-6 text-center font-medium animate-in fade-in">
              ✓ {actionNotice}
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {activeTab === "Overview" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              {/* Top Row: Revenue / Pipeline + MMe-AI Intelligence */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Revenue / Pipeline Chart */}
                <div className="lg:col-span-7 rounded-xl border border-white/[0.06] bg-[#090d20] p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <div>
                      <span className="text-sm font-semibold text-white">Revenue / Pipeline Velocity</span>
                      <span className="text-xs text-slate-400 block mt-0.5">Total active deal volume: ₹8.4 Cr</span>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                      <ArrowUpRight className="h-3 w-3" />
                      +18% MoM
                    </span>
                  </div>

                  {/* Monthly Bars */}
                  <div className="mt-8 flex items-end justify-between h-36 px-4">
                    {[
                      { month: "Jan", height: "45%", val: "₹4.2M" },
                      { month: "Feb", height: "58%", val: "₹5.5M" },
                      { month: "Mar", height: "50%", val: "₹4.8M" },
                      { month: "Apr", height: "72%", val: "₹6.8M" },
                      { month: "May", height: "85%", val: "₹7.9M" },
                      { month: "Jun", height: "98%", val: "₹8.4M", active: true },
                    ].map((bar) => (
                      <div key={bar.month} className="flex flex-col items-center gap-2 group">
                        <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                          {bar.val}
                        </span>
                        <div
                          style={{ height: bar.height }}
                          className={`w-7 sm:w-10 rounded-t transition-all ${
                            bar.active
                              ? "bg-gradient-to-t from-indigo-600 to-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                              : "bg-indigo-900/40 hover:bg-indigo-900/60"
                          }`}
                        />
                        <span className={`text-[11px] font-mono ${bar.active ? "text-amber-400 font-bold" : "text-slate-400"}`}>
                          {bar.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MMe-AI Intelligence Card */}
                <div className="lg:col-span-5 rounded-xl border border-indigo-500/30 bg-[#090d20] p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-indigo-400" />
                      MMe-AI Intelligence
                    </span>
                    <span className="text-[10px] text-indigo-300 font-mono">Real-time alerts</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-2.5 rounded-lg bg-amber-500/[0.06] border border-amber-500/20 p-2.5 text-xs text-amber-200">
                      <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>7 follow-ups are overdue for luxury enquiries.</span>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-lg bg-indigo-500/[0.06] border border-indigo-500/20 p-2.5 text-xs text-indigo-200">
                      <TrendingUp className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>WhatsApp response time improved to 1.8 mins avg.</span>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-lg bg-red-500/[0.06] border border-red-500/20 p-2.5 text-xs text-red-200">
                      <Target className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <span>3 high-intent leads haven't received property brochures.</span>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20 p-2.5 text-xs text-emerald-200">
                      <Lightbulb className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Your top lead source this month is Meta Ads (42%).</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Middle Row: Lead Funnel + Follow-up Queue */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Lead Funnel */}
                <div className="lg:col-span-6 rounded-xl border border-white/[0.06] bg-[#090d20] p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-sm font-semibold text-white">Lead Funnel</span>
                    <span className="text-xs text-slate-400">Monthly breakdown</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                        <span>Enquiries</span>
                        <span>280</span>
                      </div>
                      <div className="w-full bg-white/[0.05] rounded-full h-3">
                        <div className="bg-indigo-500 h-3 rounded-full w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                        <span>Qualified</span>
                        <span>148</span>
                      </div>
                      <div className="w-full bg-white/[0.05] rounded-full h-3">
                        <div className="bg-purple-500 h-3 rounded-full w-[53%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                        <span>Site Visit</span>
                        <span>32</span>
                      </div>
                      <div className="w-full bg-white/[0.05] rounded-full h-3">
                        <div className="bg-amber-400 h-3 rounded-full w-[15%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                        <span>Booked</span>
                        <span>12</span>
                      </div>
                      <div className="w-full bg-white/[0.05] rounded-full h-3">
                        <div className="bg-emerald-400 h-3 rounded-full w-[6%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Follow-up Queue */}
                <div className="lg:col-span-6 rounded-xl border border-white/[0.06] bg-[#090d20] p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-sm font-semibold text-white">Follow-up Queue</span>
                    <span className="text-xs text-amber-400 font-mono">4 Action Items</span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.02] border border-white/[0.04] p-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="font-semibold text-white">Rahul Mehta</span>
                        <span className="text-red-300 bg-red-500/20 px-1.5 py-0.5 rounded text-[10px]">overdue</span>
                      </div>
                      <button 
                        onClick={() => handleAction("Rahul Mehta", "WhatsApp Reminder")}
                        className="rounded bg-indigo-600/30 hover:bg-indigo-600/60 px-2 py-0.5 text-[10px] text-indigo-200 border border-indigo-500/30"
                      >
                        Nudge
                      </button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.02] border border-white/[0.04] p-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span className="font-semibold text-white">Priya Shah</span>
                        <span className="text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded text-[10px]">due today</span>
                      </div>
                      <button 
                        onClick={() => handleAction("Priya Shah", "Call logged")}
                        className="rounded bg-indigo-600/30 hover:bg-indigo-600/60 px-2 py-0.5 text-[10px] text-indigo-200 border border-indigo-500/30"
                      >
                        Call
                      </button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.02] border border-white/[0.04] p-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-400" />
                        <span className="font-semibold text-white">Arjun Nair</span>
                        <span className="text-indigo-300 bg-indigo-500/20 px-1.5 py-0.5 rounded text-[10px]">tomorrow</span>
                      </div>
                      <span className="text-slate-400 font-mono">1d</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.02] border border-white/[0.04] p-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="font-semibold text-white">Sneha Iyer</span>
                        <span className="text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded text-[10px]">scheduled</span>
                      </div>
                      <span className="text-slate-400 font-mono">2d</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: LEADS */}
          {activeTab === "Leads" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="h-3.5 w-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search leads or advisor..."
                      value={leadSearch}
                      onChange={(e) => setLeadSearch(e.target.value)}
                      className="rounded-lg bg-black/40 border border-white/10 pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div className="flex items-center gap-1 bg-white/[0.03] p-1 rounded-lg border border-white/[0.06]">
                    {["All", "High Intent", "Site Visit", "Follow-up", "Won"].map((st) => (
                      <button
                        key={st}
                        onClick={() => setLeadFilter(st)}
                        className={`rounded px-2.5 py-1 text-[11px] font-medium transition-all ${
                          leadFilter === st ? "bg-indigo-600 text-white font-bold" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Showing {filteredLeads.length} leads
                </span>
              </div>

              {/* Leads Table */}
              <div className="rounded-xl border border-white/[0.08] bg-[#090d20] overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-white/[0.08] bg-black/40 text-slate-400 font-mono text-[11px]">
                    <tr>
                      <th className="p-3.5">Client Name</th>
                      <th className="p-3.5">Stage</th>
                      <th className="p-3.5">Budget</th>
                      <th className="p-3.5">AI Intent</th>
                      <th className="p-3.5">Advisor</th>
                      <th className="p-3.5 text-right">Quick Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {filteredLeads.map((l) => (
                      <tr key={l.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3.5 font-semibold text-white">
                          <div>{l.name}</div>
                          <span className="text-[10px] text-slate-400 font-mono">{l.phone}</span>
                        </td>
                        <td className="p-3.5">
                          <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            l.stage.includes("High Intent") ? "bg-amber-400/20 text-amber-300 border border-amber-400/30" :
                            l.stage.includes("Won") ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" :
                            "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                          }`}>
                            {l.stage}
                          </span>
                        </td>
                        <td className="p-3.5 font-mono text-white">{l.budget}</td>
                        <td className="p-3.5">
                          <span className="text-emerald-400 font-bold font-mono">{l.score}</span>
                        </td>
                        <td className="p-3.5 text-slate-300">{l.rep}</td>
                        <td className="p-3.5 text-right space-x-1.5">
                          <button
                            onClick={() => handleAction(l.name, "WhatsApp Message")}
                            className="rounded bg-emerald-600/30 hover:bg-emerald-600/60 px-2 py-1 text-[11px] text-emerald-200 border border-emerald-500/30"
                          >
                            WhatsApp
                          </button>
                          <button
                            onClick={() => handleAction(l.name, "Profile details opened")}
                            className="rounded bg-white/10 hover:bg-white/20 px-2 py-1 text-[11px] text-white"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: CUSTOMERS */}
          {activeTab === "Customers" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Client Accounts & Tenancies</h3>
                  <p className="text-xs text-slate-400">Total active organizations managed under this cluster: 4</p>
                </div>
                <button 
                  onClick={() => handleAction("New Tenant", "Add Customer Modal")}
                  className="rounded-lg bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white flex items-center gap-1.5 shadow"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add Client
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Northgate Residences (sample)", plan: PLANS.enterprise.name, mrr: `${PLANS.enterprise.monthlyPrice} / mo`, health: "99%", users: "24 Agents", activeModules: "8 / 8 Active" },
                  { name: "Lakeview Developers (sample)", plan: PLANS.growth.name, mrr: `${PLANS.growth.monthlyPrice} / mo`, health: "94%", users: "12 Agents", activeModules: "6 / 8 Active" },
                  { name: "Harbour Realty Partners (sample)", plan: PLANS.growth.name, mrr: `${PLANS.growth.monthlyPrice} / mo`, health: "92%", users: "10 Agents", activeModules: "5 / 8 Active" },
                  { name: "Apex Commercial Estates (sample)", plan: PLANS.basic.name, mrr: `${PLANS.basic.monthlyPrice} / mo`, health: "88%", users: "4 Agents", activeModules: "3 / 8 Active" },
                ].map((cust) => (
                  <div key={cust.name} className="rounded-xl border border-white/[0.08] bg-[#090d20] p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-indigo-400" />
                          <h4 className="text-sm font-bold text-white">{cust.name}</h4>
                        </div>
                        <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                          Health {cust.health}
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="rounded bg-black/30 p-2">
                          <span className="text-[10px] text-slate-400 block">Plan</span>
                          <span className="font-semibold text-white mt-0.5 block">{cust.plan}</span>
                        </div>
                        <div className="rounded bg-black/30 p-2">
                          <span className="text-[10px] text-slate-400 block">MRR Value</span>
                          <span className="font-semibold text-amber-400 mt-0.5 block font-mono">{cust.mrr}</span>
                        </div>
                        <div className="rounded bg-black/30 p-2">
                          <span className="text-[10px] text-slate-400 block">Seat Usage</span>
                          <span className="font-semibold text-slate-200 mt-0.5 block">{cust.users}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs">
                      <span className="text-slate-400 text-[11px]">{cust.activeModules}</span>
                      <button 
                        onClick={() => handleAction(cust.name, "Manage Tenancy & API")}
                        className="text-indigo-400 hover:text-indigo-300 font-semibold"
                      >
                        Manage Client &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: WORKFLOWS */}
          {activeTab === "Workflows" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Active Automation Recipes</h3>
                  <p className="text-xs text-slate-400">Multi-tenant automated logic running 24/7</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {workflows.filter(w => w.active).length} of {workflows.length} Active
                </span>
              </div>

              {testRunLog && (
                <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/40 p-3 text-xs text-emerald-200 font-mono animate-in fade-in">
                  ✓ {testRunLog}
                </div>
              )}

              <div className="space-y-3">
                {workflows.map((wf) => (
                  <div key={wf.id} className="rounded-xl border border-white/[0.08] bg-[#090d20] p-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setWorkflows(prev => prev.map(item => item.id === wf.id ? { ...item, active: !item.active } : item));
                        }}
                        className={`h-5 w-10 rounded-full transition-colors relative ${wf.active ? "bg-indigo-600" : "bg-white/10"}`}
                      >
                        <span className={`h-3.5 w-3.5 rounded-full bg-white absolute top-0.5 transition-transform ${wf.active ? "left-5" : "left-1"}`} />
                      </button>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{wf.name}</h4>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                          <span>Trigger: <strong className="text-indigo-300 font-mono">{wf.trigger}</strong></span>
                          <span>•</span>
                          <span>{wf.runs} runs this month</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => triggerTestWorkflow(wf.name)}
                        className="rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 px-3 py-1.5 text-xs text-slate-200 flex items-center gap-1.5 transition-colors"
                      >
                        <Play className="h-3 w-3 text-emerald-400" />
                        Run Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ANALYTICS */}
          {activeTab === "Analytics" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Business Intelligence & Conversion Analytics</h3>
                  <p className="text-xs text-slate-400">Comprehensive multi-channel attribution</p>
                </div>
                <div className="flex items-center gap-1 bg-white/[0.03] p-1 rounded-lg border border-white/[0.06] text-xs">
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded font-medium">30 Days</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Deal Volume", val: "₹8.40 Cr", sub: "+18.2% vs last month", color: "text-white" },
                  { label: "Close Rate", val: "24.6%", sub: "+3.4% industry benchmark", color: "text-emerald-400" },
                  { label: "Avg Sales Cycle", val: "18 Days", sub: "Reduced from 42 days", color: "text-indigo-400" },
                  { label: "Cost Per Qualified Lead", val: "₹420", sub: "38% lower with AI routing", color: "text-amber-400" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-[#090d20] p-4 text-center">
                    <span className="text-xs text-slate-400 block">{stat.label}</span>
                    <span className={`text-2xl font-bold mt-1 block font-mono ${stat.color}`}>{stat.val}</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">{stat.sub}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-[#090d20] p-5">
                <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
                  Channel Attribution Breakdown
                </span>
                <div className="space-y-3 text-xs">
                  {[
                    { source: "Meta Ad Campaigns (Instagram / Facebook)", pct: 42, rev: "₹3.52 Cr", bar: "bg-indigo-500" },
                    { source: "Google Search (High Intent Keywords)", pct: 31, rev: "₹2.60 Cr", bar: "bg-purple-500" },
                    { source: "Direct Referral & Organic Website", pct: 18, rev: "₹1.51 Cr", bar: "bg-amber-400" },
                    { source: "WhatsApp Inbound Business Direct", pct: 9, rev: "₹0.77 Cr", bar: "bg-emerald-400" },
                  ].map((ch) => (
                    <div key={ch.source}>
                      <div className="flex justify-between text-slate-300 font-medium mb-1">
                        <span>{ch.source}</span>
                        <span className="font-mono text-white">{ch.rev} ({ch.pct}%)</span>
                      </div>
                      <div className="w-full bg-white/[0.05] rounded-full h-2">
                        <div className={`${ch.bar} h-2 rounded-full`} style={{ width: `${ch.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: AI AGENTS */}
          {activeTab === "AI Agents" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Autonomous AI Agent Fleet</h3>
                  <p className="text-xs text-slate-400">Real-time model reasoning, response generation and routing</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Confidence Threshold:</span>
                  <span className="text-xs font-mono font-bold text-amber-400">{confidenceThreshold}%</span>
                </div>
              </div>

              {/* Confidence Threshold Slider */}
              <div className="rounded-xl border border-white/[0.06] bg-[#090d20] p-4">
                <div className="flex justify-between text-xs text-slate-300 mb-2">
                  <span>Safety & Intent Confidence Gate (Only auto-execute if score &ge; threshold)</span>
                  <span className="text-indigo-400 font-mono font-bold">{confidenceThreshold}%</span>
                </div>
                <input
                  type="range"
                  min={70}
                  max={98}
                  value={confidenceThreshold}
                  onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-white/10 rounded"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: "qualifier", title: "Lead Qualification Agent", model: "Claude 3.5 Sonnet", metric: "99.2% accuracy", desc: "Analyzes incoming forms & WhatsApp queries to extract budget and intent." },
                  { key: "followup", title: "Follow-up Cadence Engine", model: "GPT-4o", metric: "1.2s dispatch", desc: "Monitors idle periods and suggests tailored WhatsApp & email follow-ups." },
                  { key: "reporting", title: "Executive Reporting Agent", model: "Claude 3.5 Sonnet", metric: "Daily automated sync", desc: "Aggregates CRM activity and sends concise summaries to Founders." },
                  { key: "concierge", title: "WhatsApp 24/7 Concierge", model: "GPT-4o Mini", metric: "1.8s avg reply", desc: "Answers brochure queries, property amenities and schedule site visits." },
                ].map((ag) => (
                  <div key={ag.key} className="rounded-xl border border-white/[0.08] bg-[#090d20] p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4 text-indigo-400" />
                          <h4 className="text-sm font-bold text-white">{ag.title}</h4>
                        </div>
                        <button
                          onClick={() => setAgentStatus(prev => ({ ...prev, [ag.key]: !prev[ag.key] }))}
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold ${
                            agentStatus[ag.key] ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-white/10 text-slate-400"
                          }`}
                        >
                          {agentStatus[ag.key] ? "ACTIVE" : "PAUSED"}
                        </button>
                      </div>
                      <p className="text-xs text-slate-300 mt-3">{ag.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
                      <span className="text-indigo-300">{ag.model}</span>
                      <span className="text-slate-400">{ag.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === "Settings" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Multi-tenant Workspace Settings</h3>
                  <p className="text-xs text-slate-400">Configure your business identity and API integrations</p>
                </div>
                <button
                  onClick={() => {
                    setSettingsSaved(true);
                    setTimeout(() => setSettingsSaved(false), 3000);
                  }}
                  className="rounded-lg bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow"
                >
                  {settingsSaved ? "Saved Successfully ✓" : "Save Changes"}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                {/* General Workspace Info */}
                <div className="rounded-xl border border-white/[0.08] bg-[#090d20] p-5 space-y-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-white/[0.06] pb-2">
                    Organization Info
                  </span>
                  <div>
                    <label className="text-slate-400 block mb-1">Company / Organization Name</label>
                    <input
                      type="text"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Subdomain Routing</label>
                    <input
                      type="text"
                      value={subdomain}
                      onChange={(e) => setSubdomain(e.target.value)}
                      className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Tenant ID (Isolated Database Partition)</label>
                    <div className="rounded-lg bg-black/60 border border-white/5 p-2 font-mono text-slate-400 text-[11px]">
                      tenant_mme_849204_rsrealestate
                    </div>
                  </div>
                </div>

                {/* API & Cloud Integrations */}
                <div className="rounded-xl border border-white/[0.08] bg-[#090d20] p-5 space-y-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-white/[0.06] pb-2">
                    Connected Integrations
                  </span>
                  {[
                    { name: "WhatsApp Cloud API", status: "Connected", ping: "Active (Token verified)", color: "text-emerald-400" },
                    { name: "Razorpay / Stripe Gateway", status: "Connected", ping: "Test mode ready", color: "text-emerald-400" },
                    { name: "OpenAI & Anthropic LLMs", status: "Configured", ping: "Model endpoints live", color: "text-emerald-400" },
                    { name: "Google Calendar & Mail", status: "Synced", ping: "OAuth verified", color: "text-emerald-400" },
                  ].map((integ) => (
                    <div key={integ.name} className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5">
                      <div>
                        <div className="font-semibold text-white">{integ.name}</div>
                        <div className="text-[10px] text-slate-400">{integ.ping}</div>
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${integ.color}`}>
                        {integ.status} ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

