import { useState, useEffect } from "react";

/* ─── INTELLIGENCE DIMENSIONS (replaces old 5-pillar CS model) ─── */
const DIMENSIONS = [
  { id:"D1", name:"Adoption Velocity",       weight:"15%", color:"#0EA5E9", kpis:["Time to First Value","Feature Adoption Rate","Deployment Lead Time","Provisioning Success Rate"] },
  { id:"D2", name:"Operational Risk",         weight:"20%", color:"#EF4444", kpis:["System Reliability Score","Incident Frequency","SLA Breach Rate","MTTR Trend"] },
  { id:"D3", name:"Engagement Depth",         weight:"15%", color:"#8B5CF6", kpis:["Stakeholder Coverage","Champion Activity Score","Executive Sponsor Cadence","Multi-Thread Index"] },
  { id:"D4", name:"Expansion Readiness",      weight:"15%", color:"#10B981", kpis:["Expansion Signal Score","Feature Saturation Rate","Upsell Opportunity Index","Whitespace Analysis"] },
  { id:"D5", name:"Value Realization",        weight:"15%", color:"#F59E0B", kpis:["Outcome Achievement Rate","ROI Milestone Progress","Business Impact Score","Time to ROI"] },
  { id:"D6", name:"Competitive Pressure",     weight:"10%", color:"#EC4899", kpis:["Competitive Mention Frequency","Vendor Evaluation Signals","Contract Review Triggers","Switching Cost Index"] },
  { id:"D7", name:"Sentiment Momentum",       weight:"5%",  color:"#6366F1", kpis:["NPS Trend","Support Sentiment Score","Escalation Pattern","Communication Tone Shift"] },
  { id:"D8", name:"Relationship Resilience",  weight:"5%",  color:"#14B8A6", kpis:["Champion Turnover Risk","Decision-Maker Access","Org Change Impact","Single-Thread Exposure"] },
];

const FEATURES = [
  { icon:"🕸️",  title:"Context Graph",           desc:"6 node types, temporal weighted edges, and 3-tier storage map the causal chain from signal to revenue impact. Know exactly why an account is at risk.",  tag:"Core Engine",    tagColor:"#EF4444" },
  { icon:"📖",  title:"Story Arcs",               desc:"8 intelligence narratives replace flat dashboards. Each arc is a causally-linked screenplay — cast, plot points, causal chains, decisions, and outcomes.",  tag:"Intelligence",   tagColor:"#8B5CF6" },
  { icon:"💰",  title:"Revenue at Risk Engine",   desc:"Real-time revenue exposure across your portfolio. Every signal links to dollar impact — churn risk, contraction probability, expansion upside.",  tag:"Revenue",        tagColor:"#10B981" },
  { icon:"🧠",  title:"Signal Analyst Agent",     desc:"AI agent traverses the Context Graph: KPI data + qualitative signals + stakeholder context → actionable revenue intelligence with full explainability.",  tag:"Agentic AI",     tagColor:"#6366F1" },
  { icon:"🎯",  title:"Outcome Economics",        desc:"ROI of intervention, cost of inaction, expansion probability — every recommendation comes with a revenue-denominated business case.",  tag:"ROI Engine",     tagColor:"#F59E0B" },
  { icon:"⚙️",  title:"Self-Learning Weights",    desc:"Wizard C recalibrates L1/L2 intelligence weights monthly from your actual outcomes. The model converges to your revenue reality — not a generic benchmark.",  tag:"ML Pipeline",    tagColor:"#0EA5E9" },
  { icon:"🔌",  title:"Universal Integration",    desc:"Day 1: Inbound webhooks. Day 90: Context API. Day 180: MCP Server. Native AI agent integration with SFDC, HubSpot, Intercom, Gainsight.",  tag:"Platform",       tagColor:"#0369A1" },
  { icon:"🏢",  title:"Multi-Tenant Intelligence",desc:"UUID-isolated customer environments. Independent context graphs and vector stores. Enterprise-grade governance with zero cross-tenant exposure.",  tag:"Enterprise",     tagColor:"#7C3AED" },
];

const VERTICALS = [
  { label:"SaaS",               icon:"☁️",  color:"#0EA5E9" },
  { label:"Data Center",        icon:"🖥️",  color:"#10B981" },
  { label:"Healthcare",         icon:"🏥",  color:"#8B5CF6" },
  { label:"Financial Services", icon:"💹",  color:"#F59E0B" },
  { label:"Manufacturing",      icon:"⚙️",  color:"#EF4444" },
  { label:"Retail / E-Comm",    icon:"🛒",  color:"#EC4899" },
];

function HealthBar({ score, color }) {
  const auto = score >= 80 ? "#10B981" : score >= 60 ? "#F59E0B" : "#EF4444";
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
      <div style={{ flex:1, height:5, background:"#1E293B", borderRadius:999 }}>
        <div style={{ width:`${score}%`, height:"100%", background:color||auto, borderRadius:999 }} />
      </div>
      <span style={{ fontSize:11, fontWeight:700, color:color||auto, minWidth:24 }}>{score}</span>
    </div>
  );
}

const CARPET = [
  { label:"REVENUE INTELLIGENCE",          color:"#DC2626", rim:"#FCA5A5", rx:260, ry:52, thickness:14, zOff:-10 },
  { label:"CONTEXT GRAPH",                 color:"#991B1B", rim:"#F87171", rx:320, ry:64, thickness:11, zOff:-36 },
  { label:"DATA INTEGRATION & MANAGEMENT", color:"#7F1D1D", rim:"#FCA5A5", rx:390, ry:78, thickness: 8, zOff:-62 },
];

function HexPrism() {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setAngle(a => (a + 0.3) % 360), 30);
    return () => clearInterval(id);
  }, []);

  const FW = 170, FH = 190, APO = 147;

  return (
    <div style={{ width:"100%", display:"flex", justifyContent:"center", padding:"50px 0 60px", position:"relative" }}>

      <div style={{ position:"absolute", inset:0, display:"flex", justifyContent:"center", alignItems:"center", pointerEvents:"none" }}>
        <div style={{ width:800, height:800, borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,0.06) 0%,transparent 65%)" }} />
      </div>

      <div style={{ width:700, height:680, flexShrink:0, position:"relative", zIndex:2 }}>
        <div style={{ perspective:1100, perspectiveOrigin:"50% 32%", width:"100%", height:"100%" }}>
          <div style={{ width:"100%", height:"100%", position:"relative", transformStyle:"preserve-3d", transform:"rotateX(-20deg)" }}>

            {[...CARPET].reverse().map((disc) => {
              const W = disc.rx * 2, H = disc.ry * 2;
              const a = disc.rx * 0.87, b = disc.ry * 0.80;
              const cx = disc.rx, cy = disc.ry;
              const arcPath = `M ${cx - a},${cy} A ${a},${b} 0 1,1 ${cx + a},${cy} A ${a},${b} 0 1,1 ${cx - a},${cy}`;
              const perim = Math.PI * (3*(a+b) - Math.sqrt((3*a+b)*(a+3*b)));
              const chars = disc.label.length;
              const spread = perim * 0.55;
              const ls = Math.max(4, Math.round((spread - chars * 9) / chars));
              const uid = `arc${disc.rx}`;
              return (
                <div key={disc.label} style={{
                  position:"absolute",
                  left:"50%", top:"64%",
                  width: W, height: H,
                  marginLeft: -disc.rx,
                  marginTop: -disc.ry,
                  transformStyle:"preserve-3d",
                  transform:`translateZ(${disc.zOff}px)`,
                  pointerEvents:"none",
                }}>
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:`radial-gradient(ellipse at 40% 35%, ${disc.color}60 0%, ${disc.color}20 50%, transparent 72%)`, border:`1.5px solid ${disc.rim}70`, boxShadow:`0 0 48px ${disc.color}55, inset 0 0 28px ${disc.color}28` }} />
                  <div style={{ position:"absolute", inset:-4, borderRadius:"50%", border:`1px solid ${disc.rim}28`, boxShadow:`0 0 20px ${disc.color}44` }} />
                  <div style={{ position:"absolute", left:"4%", right:"4%", bottom:-disc.thickness, height:disc.thickness, borderRadius:"0 0 50% 50% / 0 0 100% 100%", background:`linear-gradient(180deg,${disc.color}99,${disc.color}11)`, filter:"blur(1px)" }} />

                  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position:"absolute", inset:0, overflow:"visible" }}>
                    <defs>
                      <path id={uid} d={arcPath} />
                      <filter id={`glow${disc.rx}`}>
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                      </filter>
                    </defs>
                    <text filter={`url(#glow${disc.rx})`}>
                      <textPath
                        href={`#${uid}`}
                        startOffset="25%"
                        textAnchor="middle"
                        fill={disc.rim}
                        fontSize={11}
                        fontWeight="800"
                        fontFamily="DM Sans, system-ui"
                        letterSpacing={ls}
                      >
                        {disc.label}
                      </textPath>
                    </text>
                  </svg>
                </div>
              );
            })}

            <div style={{
              position:"absolute",
              left:"50%", top:"6%",
              width:FW, height:FH,
              marginLeft:-FW/2,
              transformStyle:"preserve-3d",
              transform:`rotateY(${angle}deg)`,
            }}>
              <div style={{ position:"absolute", width:FW, height:FW, left:0, top:`-${FW/2-10}px`, transformStyle:"preserve-3d", transform:"rotateX(90deg)", background:"conic-gradient(from 0deg,#0EA5E940,#10B98140,#8B5CF640,#F59E0B40,#EF444440,#EC489940,#0EA5E940)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", filter:"blur(1px)" }} />
              <div style={{ position:"absolute", width:FW, height:FW, left:0, bottom:`-${FW/2-10}px`, transformStyle:"preserve-3d", transform:"rotateX(-90deg)", background:"conic-gradient(from 0deg,#0EA5E920,#10B98120,#8B5CF620,#F59E0B20,#EF444420,#EC489920,#0EA5E920)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", filter:"blur(2px)" }} />
              {VERTICALS.map((v, i) => (
                <div key={v.label} style={{ position:"absolute", width:FW, height:FH, left:0, top:0, backfaceVisibility:"hidden", transform:`rotateY(${i*60}deg) translateZ(${APO}px)`, background:`linear-gradient(160deg,${v.color}18 0%,${v.color}08 100%)`, border:`1px solid ${v.color}55`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, borderRadius:4, boxShadow:`inset 0 0 30px ${v.color}15,0 0 40px ${v.color}20` }}>
                  <div style={{ fontSize:34 }}>{v.icon}</div>
                  <div style={{ fontSize:13, fontWeight:700, color:"#E2E8F0", textAlign:"center", lineHeight:1.3, padding:"0 12px" }}>{v.label}</div>
                  <div style={{ width:32, height:2, borderRadius:999, background:v.color, opacity:0.7 }} />
                  <div style={{ fontSize:10, color:v.color, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase" }}>Vertical</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div style={{ position:"absolute", bottom:0, left:0, right:0, textAlign:"center" }}>
          <div style={{ fontSize:11, fontWeight:700, color:"#EF4444", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:4 }}>System of Intelligence</div>
          <div style={{ fontSize:13, color:"#475569" }}>Above CRM. Above CS Platforms. The revenue intelligence layer your executives need.</div>
        </div>
      </div>
    </div>
  );
}

function SectionImg({ src, alt, height }) {
  return (
    <div style={{ borderRadius:18, overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)", boxShadow:"0 24px 80px rgba(0,0,0,0.5)" }}>
      <img src={src} alt={alt} style={{ width:"100%", height:height||260, objectFit:"cover", display:"block", filter:"brightness(0.82) saturate(1.15)" }} />
    </div>
  );
}

/* ─── Context Graph Visualization ─── */
function ContextGraphViz() {
  const nodes = [
    { type:"ACCOUNT",    x:50, y:50, color:"#0EA5E9", label:"Account" },
    { type:"SIGNAL",     x:20, y:25, color:"#EF4444", label:"Signal" },
    { type:"STAKEHOLDER",x:80, y:25, color:"#8B5CF6", label:"Stakeholder" },
    { type:"DECISION",   x:20, y:75, color:"#F59E0B", label:"Decision" },
    { type:"OUTCOME",    x:80, y:75, color:"#10B981", label:"Outcome" },
    { type:"EXTERNAL",   x:50, y:8,  color:"#EC4899", label:"External" },
  ];
  const edges = [
    [1,0],[2,0],[0,3],[3,4],[5,1],[1,3],[2,3],[4,0],
  ];
  return (
    <div style={{ position:"relative", width:"100%", height:260, background:"rgba(255,255,255,0.02)", borderRadius:16, border:"1px solid rgba(255,255,255,0.06)", overflow:"hidden" }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{ position:"absolute", inset:0 }}>
        {edges.map(([from,to],i) => (
          <line key={i} x1={nodes[from].x} y1={nodes[from].y} x2={nodes[to].x} y2={nodes[to].y} stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" />
        ))}
        {nodes.map(n => (
          <g key={n.type}>
            <circle cx={n.x} cy={n.y} r="4" fill={n.color+"33"} stroke={n.color} strokeWidth="0.5" />
            <text x={n.x} y={n.y+9} textAnchor="middle" fill={n.color} fontSize="3.2" fontWeight="700" fontFamily="DM Sans,system-ui">{n.label}</text>
          </g>
        ))}
      </svg>
      <div style={{ position:"absolute", bottom:10, left:0, right:0, textAlign:"center", fontSize:10, color:"#475569" }}>6 Node Types &middot; Weighted Temporal Edges &middot; 3-Tier Storage</div>
    </div>
  );
}

export default function AuctusAIWebsite() {
  const [activeDim, setActiveDim] = useState(0);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#060B18", color:"#E2E8F0", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,500;9..40,700;9..40,800&family=Sora:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::selection{background:#0EA5E9;color:#fff;}
        .gt{background:linear-gradient(135deg,#0EA5E9 0%,#818CF8 60%,#EC4899 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .glass{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:18px;transition:all .3s;}
        .glass:hover{background:rgba(255,255,255,0.055);border-color:rgba(14,165,233,0.3);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,0.4);}
        .pill{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;}
        .btnp{background:linear-gradient(135deg,#0EA5E9,#6366F1);color:#fff;border:none;cursor:pointer;font-weight:700;border-radius:10px;transition:all .25s;font-family:inherit;}
        .btnp:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(14,165,233,0.4);}
        .btng{background:transparent;border:1.5px solid rgba(255,255,255,0.15);color:#E2E8F0;cursor:pointer;font-weight:600;border-radius:10px;transition:all .25s;font-family:inherit;}
        .btng:hover{border-color:#0EA5E9;color:#0EA5E9;}
        .nl{color:#94A3B8;font-size:14px;font-weight:500;cursor:pointer;transition:color .2s;text-decoration:none;background:none;border:none;padding:0;}
        .nl:hover{color:#0EA5E9;}
        .gdbg{background-image:linear-gradient(rgba(14,165,233,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.03) 1px,transparent 1px);background-size:60px 60px;}
        .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(14,165,233,0.25),transparent);max-width:700px;margin:0 auto;}
        .pt{padding:6px 14px;border-radius:10px;cursor:pointer;font-size:12px;font-weight:600;transition:all .2s;white-space:nowrap;border:1.5px solid rgba(255,255,255,0.06);background:transparent;color:#64748B;font-family:inherit;}
        .pt:hover{color:#94A3B8;}
        .ptact{color:#fff !important;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .fu{animation:fadeUp .7s ease forwards;}
        .fl{animation:float 4s ease-in-out infinite;}
      `}</style>

      {/* ─── NAV ─── */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 24px",height:60,display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(6,11,24,0.92)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display:"flex",alignItems:"center",gap:10 }}>
          <div style={{ width:34,height:34,borderRadius:9,background:"linear-gradient(135deg,#0EA5E9,#6366F1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18 }}>⚡</div>
          <div>
            <div style={{ fontFamily:"Sora,sans-serif",fontWeight:800,fontSize:17,letterSpacing:"-0.02em",color:"#F1F5F9" }}>AuctusAI</div>
            <div style={{ fontSize:9,color:"#475569",letterSpacing:".1em",textTransform:"uppercase",marginTop:-2 }}>Revenue Intelligence</div>
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:28 }}>
          {["Platform","Context Graph","Story Arcs","Revenue Intel"].map((l,i)=>(
            <button key={l} className="nl" onClick={()=>scrollTo(["platform","context-graph","story-arcs","rev-intel"][i])}>{l}</button>
          ))}
        </div>
        <div style={{ display:"flex",gap:10 }}>
          <button className="btng" style={{ padding:"8px 18px",fontSize:13 }}>Sign In</button>
          <button className="btnp" style={{ padding:"9px 22px",fontSize:13 }} onClick={()=>scrollTo("contact")}>Request Demo</button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section id="verticals" style={{ paddingTop:60,position:"relative",overflow:"hidden" }} className="gdbg">
        <div style={{ position:"absolute",top:"10%",left:"50%",transform:"translateX(-50%)",width:800,height:800,borderRadius:"50%",background:"radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 65%)",pointerEvents:"none" }} />
        <div style={{ maxWidth:1100,margin:"0 auto",padding:"60px 24px 0",textAlign:"center" }}>
          <div className="pill fu" style={{ background:"rgba(239,68,68,0.1)",color:"#FCA5A5",border:"1px solid rgba(239,68,68,0.2)",marginBottom:20 }}>
            <span style={{ width:6,height:6,borderRadius:"50%",background:"#FCA5A5",display:"inline-block" }} />
            Revenue Intelligence &middot; Context Graph &middot; Outcome Economics
          </div>
          <h1 className="fu" style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(36px,4.5vw,62px)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.03em",marginBottom:20 }}>
            What's the Revenue at Risk?<br /><span className="gt">Now You Know.</span>
          </h1>
          <p className="fu" style={{ fontSize:18,color:"#64748B",maxWidth:620,margin:"0 auto 16px",lineHeight:1.7 }}>
            AuctusAI is the System of Intelligence layer above your CRM and CS platform. Every account, every signal, every decision — traced to revenue impact with full causal explainability.
          </p>
          <p className="fu" style={{ fontSize:14,color:"#475569",maxWidth:500,margin:"0 auto 0" }}>
            Built for CROs, CFOs, and CEOs who need to protect and grow recurring revenue.
          </p>
        </div>
        <HexPrism />
      </section>

      {/* ─── STATS BAR ─── */}
      <div style={{ background:"rgba(255,255,255,0.02)",borderTop:"1px solid rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.05)",padding:"28px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:24 }}>
          {[["8","Intelligence Dimensions"],["6","Context Node Types"],["9","Story Arc Manifests"],["Revenue\nAt Risk","Real-Time Scoring"],["Context\nGraph","Causal Intelligence"]].map(([v,l])=>(
            <div key={l} style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"Sora,sans-serif",fontSize:26,fontWeight:800,color:"#F1F5F9",whiteSpace:"pre-line",lineHeight:1.2 }}>{v}</div>
              <div style={{ fontSize:12,color:"#475569",marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PLATFORM FEATURES ─── */}
      <section id="platform" style={{ padding:"90px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:60 }}>
            <div>
              <div className="pill" style={{ background:"rgba(14,165,233,0.1)",color:"#38BDF8",border:"1px solid rgba(14,165,233,0.2)",marginBottom:16 }}>Platform Capabilities</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16 }}>The Intelligence Layer<br /><span className="gt">Your Revenue Needs</span></h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75 }}>From context graph ingestion to story arc analysis and outcome economics — AuctusAI connects every signal to revenue impact with full causal traceability.</p>
            </div>
            <SectionImg src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" alt="Enterprise data center" height={260} />
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:18 }}>
            {FEATURES.map(f=>(
              <div key={f.title} className="glass" style={{ padding:"26px" }}>
                <div style={{ display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14 }}>
                  <div style={{ fontSize:32 }}>{f.icon}</div>
                  <div className="pill" style={{ background:`${f.tagColor}18`,color:f.tagColor,border:`1px solid ${f.tagColor}33` }}>{f.tag}</div>
                </div>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#F1F5F9",marginBottom:8,fontFamily:"Sora,sans-serif" }}>{f.title}</h3>
                <p style={{ fontSize:13,color:"#64748B",lineHeight:1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── CONTEXT GRAPH ─── */}
      <section id="context-graph" style={{ padding:"90px 24px",background:"rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:50 }}>
            <div>
              <div className="pill" style={{ background:"rgba(239,68,68,0.1)",color:"#FCA5A5",border:"1px solid rgba(239,68,68,0.2)",marginBottom:16 }}>Context Graph Engine</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16 }}>Every Signal Has a<br /><span className="gt">Causal Chain</span></h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75,marginBottom:20 }}>The Context Graph maps relationships between accounts, signals, stakeholders, decisions, outcomes, and external factors. Weighted temporal edges reveal why things happen — not just that they did.</p>
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {[
                  ["ACCOUNT","Hub node — ARR, health score, segment, lifecycle stage","#0EA5E9"],
                  ["SIGNAL","KPI changes, sentiment shifts, usage anomalies","#EF4444"],
                  ["STAKEHOLDER","Champions, detractors, decision-makers, influencers","#8B5CF6"],
                  ["DECISION","Renewal, expansion, escalation, vendor review","#F59E0B"],
                  ["OUTCOME","Revenue retained, churned, expanded, contracted","#10B981"],
                  ["EXTERNAL","Market shifts, competitive moves, industry benchmarks","#EC4899"],
                ].map(([type,desc,color])=>(
                  <div key={type} style={{ display:"flex",gap:12,padding:"10px 14px",background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ width:8,height:8,borderRadius:"50%",background:color,flexShrink:0,marginTop:5 }} />
                    <div>
                      <span style={{ fontSize:12,fontWeight:700,color:color }}>{type}</span>
                      <span style={{ fontSize:12,color:"#475569" }}> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ContextGraphViz />
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18 }}>
            {[
              ["T1 Permanent","Skeleton graph — accounts, contracts, org structure. Never expires. Source of truth.","#0EA5E9"],
              ["T2 Decaying","Active signals and engagement events. 90-180 day TTL. Drives current intelligence.","#F59E0B"],
              ["T3 Ephemeral","Real-time alerts, meeting notes, email sentiment. 24-72 hour window. Triggers immediate action.","#EF4444"],
            ].map(([title,desc,color])=>(
              <div key={title} className="glass" style={{ padding:"22px",borderTop:`3px solid ${color}` }}>
                <div style={{ fontSize:14,fontWeight:700,color:"#F1F5F9",marginBottom:8,fontFamily:"Sora,sans-serif" }}>{title}</div>
                <p style={{ fontSize:13,color:"#64748B",lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── STORY ARCS (8 Intelligence Dimensions) ─── */}
      <section id="story-arcs" style={{ padding:"90px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:50 }}>
            <div>
              <div className="pill" style={{ background:"rgba(99,102,241,0.1)",color:"#818CF8",border:"1px solid rgba(99,102,241,0.2)",marginBottom:16 }}>8 Intelligence Dimensions</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16 }}>Story Arcs, Not<br /><span className="gt">Static Dashboards</span></h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75 }}>Each dimension is a causally-linked narrative — with cast, plot points, causal chains, decisions, and outcomes. Self-learning weights recalibrate monthly from your actual revenue data.</p>
            </div>
            <SectionImg src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Analytics visualization" height={240} />
          </div>
          <div style={{ display:"flex",gap:6,justifyContent:"center",marginBottom:28,flexWrap:"wrap" }}>
            {DIMENSIONS.map((d,i)=>(
              <button key={d.id} className={`pt${activeDim===i?" ptact":""}`}
                style={ activeDim===i ? {background:d.color,border:`1.5px solid ${d.color}`} : {} }
                onClick={()=>setActiveDim(i)}>
                {d.name}
              </button>
            ))}
          </div>
          <div style={{ background:"rgba(255,255,255,0.03)",border:`1px solid ${DIMENSIONS[activeDim].color}33`,borderRadius:18,padding:"32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:32 }}>
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:18 }}>
                <div style={{ width:48,height:48,borderRadius:12,background:DIMENSIONS[activeDim].color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:800,color:DIMENSIONS[activeDim].color }}>{DIMENSIONS[activeDim].id}</div>
                <div>
                  <div style={{ fontSize:19,fontWeight:700,color:"#F1F5F9",fontFamily:"Sora,sans-serif" }}>{DIMENSIONS[activeDim].name}</div>
                  <div style={{ fontSize:12,color:"#64748B" }}>Weight: <span style={{ color:DIMENSIONS[activeDim].color,fontWeight:700 }}>{DIMENSIONS[activeDim].weight}</span> · Recalibrates monthly</div>
                </div>
              </div>
              <div style={{ fontSize:13,color:"#475569",padding:"12px 14px",background:"rgba(255,255,255,0.03)",borderRadius:10,border:"1px solid rgba(255,255,255,0.06)" }}>
                Every dimension answers: <strong style={{ color:"#CBD5E1" }}>What's the revenue at risk? What's the ROI of intervention? What happens if we don't act?</strong>
              </div>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              {DIMENSIONS[activeDim].kpis.map((kpi,ki)=>(
                <div key={kpi} style={{ display:"flex",alignItems:"center",gap:12,padding:"12px 15px",background:"rgba(255,255,255,0.03)",borderRadius:11,border:"1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width:26,height:26,borderRadius:7,background:DIMENSIONS[activeDim].color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:DIMENSIONS[activeDim].color }}>K{ki+1}</div>
                  <span style={{ fontSize:13,color:"#CBD5E1",fontWeight:500 }}>{kpi}</span>
                  <div style={{ marginLeft:"auto",height:3,width:48,background:"#1E293B",borderRadius:999 }}>
                    <div style={{ height:"100%",width:`${55+ki*12}%`,background:DIMENSIONS[activeDim].color,borderRadius:999 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop:18,padding:"16px 20px",background:"rgba(255,255,255,0.02)",borderRadius:12,border:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize:10,color:"#475569",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",marginBottom:10 }}>Intelligence Weight Distribution</div>
            <div style={{ display:"flex",height:26,borderRadius:8,overflow:"hidden",gap:2 }}>
              {DIMENSIONS.map(d=>(
                <div key={d.id} style={{ flex:parseInt(d.weight),background:d.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.9)",whiteSpace:"nowrap",overflow:"hidden" }}>{d.name.split(" ")[0]}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── INTEGRATION PIPELINE ─── */}
      <section id="pipeline" style={{ padding:"90px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:60 }}>
            <div>
              <div className="pill" style={{ background:"rgba(16,185,129,0.1)",color:"#34D399",border:"1px solid rgba(16,185,129,0.2)",marginBottom:16 }}>Integration Strategy</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16 }}>Two Paths.<br /><span className="gt">One Intelligence Graph.</span></h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75 }}>Real-world integrations and demo environments converge to the same Context Graph. Whether data comes from SFDC via MCP or CSV via onboarding — the intelligence layer is identical.</p>
            </div>
            <SectionImg src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80" alt="AI data pipeline" height={240} />
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:18 }}>
            {[
              {n:"01",t:"Inbound Webhooks (Day 1)",d:"CloudEvents webhook — zero friction. Push signals from any source. Account resolution: exact ID, domain, fuzzy name, or manual mapping.",c:"#0EA5E9"},
              {n:"02",t:"Context API (Day 90)",d:"Read-only API for AI agents to query health, intelligence dimensions, revenue at risk, and story arc status. Full graph traversal.",c:"#8B5CF6"},
              {n:"03",t:"MCP Server (Day 180)",d:"Native AI agent integration. Your agents connect directly to the Context Graph — SFDC, HubSpot, Intercom, Gainsight adapters included.",c:"#F59E0B"},
              {n:"04",t:"CSV Onboarding (Demo Path)",d:"15 CSV types via browser wizard — 6 core + 9 context graph files. Story arc manifests auto-generate synthetic data for demos.",c:"#10B981"},
              {n:"05",t:"Wizard A/B/C Pipeline",d:"Journey Generator, Pattern Analyzer, Weight Optimizer. Runs on onboarding and monthly recalibration. Context Graph enrichment built-in.",c:"#EF4444"},
              {n:"06",t:"Story Arc Inference",d:"8 intelligence dimensions inferred from the Context Graph. Causal chains, decision evidence, outcome economics — all revenue-denominated.",c:"#6366F1"},
            ].map(s=>(
              <div key={s.n} className="glass" style={{ padding:"24px" }}>
                <div style={{ width:40,height:40,borderRadius:11,background:s.c+"22",border:`1.5px solid ${s.c}55`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Sora,sans-serif",fontSize:13,fontWeight:800,color:s.c,marginBottom:14 }}>{s.n}</div>
                <h3 style={{ fontSize:15,fontWeight:700,color:"#F1F5F9",marginBottom:8,fontFamily:"Sora,sans-serif" }}>{s.t}</h3>
                <p style={{ fontSize:13,color:"#64748B",lineHeight:1.65 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── REVENUE INTELLIGENCE ─── */}
      <section id="rev-intel" style={{ padding:"90px 24px",background:"rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:60,alignItems:"center" }}>
            <div>
              <div className="pill" style={{ background:"rgba(16,185,129,0.1)",color:"#34D399",border:"1px solid rgba(16,185,129,0.2)",marginBottom:20 }}>Revenue Intelligence</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:20 }}>The Three Questions<br />Every Executive<br /><span className="gt">Must Answer.</span></h2>
              <div style={{ display:"flex",flexDirection:"column",gap:14,marginBottom:28 }}>
                {[
                  ["What's the revenue at risk?","Context Graph maps every at-risk signal to dollar exposure in real time.","#EF4444"],
                  ["What's the ROI of intervention?","Outcome Economics quantifies the cost of action vs. inaction for every account.","#10B981"],
                  ["What happens if we don't act?","Story Arcs project churn probability, contraction timelines, and cascade effects.","#F59E0B"],
                ].map(([q,a,color])=>(
                  <div key={q} style={{ padding:"14px 18px",background:"rgba(255,255,255,0.03)",borderRadius:12,borderLeft:`3px solid ${color}` }}>
                    <div style={{ fontSize:14,fontWeight:700,color:"#F1F5F9",marginBottom:4 }}>{q}</div>
                    <div style={{ fontSize:13,color:"#64748B",lineHeight:1.6 }}>{a}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderRadius:14,overflow:"hidden",border:"1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",background:"rgba(255,255,255,0.04)",padding:"10px 16px" }}>
                  {["Period","Signal","Revenue Impact"].map(h=>(
                    <div key={h} style={{ fontSize:10,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:".06em" }}>{h}</div>
                  ))}
                </div>
                {[
                  ["Month 1","Baseline graph built","$42M ARR mapped"],
                  ["Month 3","Risk patterns emerge","$3.2M flagged at risk"],
                  ["Month 6","Interventions compound","$1.8M retained (55%)"],
                  ["Month 9","Story arcs converge","$1.4M expanded"],
                  ["Month 12","Full intelligence cycle","$3.2M net positive"],
                ].map(([p,g,o],i)=>(
                  <div key={p} style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"11px 16px",background:i%2===0?"transparent":"rgba(255,255,255,0.02)",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ fontSize:13,fontWeight:600,color:"#CBD5E1" }}>{p}</div>
                    <div style={{ fontSize:13,color:"#10B981",fontWeight:600 }}>{g}</div>
                    <div style={{ fontSize:12,color:"#F59E0B",fontWeight:600 }}>{o}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
              <SectionImg src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Revenue analytics" height={210} />
              {[
                ["💰","Revenue-denominated everything","Every signal, every recommendation, every story arc is expressed in dollar impact. No vanity metrics.","#10B981"],
                ["🕸️","Causal traceability","The Context Graph shows exactly WHY an account is at risk — not just a score, but the full causal chain.","#8B5CF6"],
                ["📊","Board-ready intelligence","Quarterly revenue intelligence reports with story arcs, intervention ROI, and portfolio trajectory.","#F59E0B"],
              ].map(([icon,title,desc,color])=>(
                <div key={title} className="glass" style={{ padding:"18px 22px",display:"flex",gap:14 }}>
                  <div style={{ fontSize:22,flexShrink:0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize:14,fontWeight:700,color:"#F1F5F9",marginBottom:5 }}>{title}</div>
                    <div style={{ fontSize:13,color:"#64748B",lineHeight:1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── ABOUT ─── */}
      <section id="about" style={{ padding:"90px 24px",background:"rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center" }}>
            <div>
              <div className="pill" style={{ background:"rgba(14,165,233,0.1)",color:"#38BDF8",border:"1px solid rgba(14,165,233,0.2)",marginBottom:20 }}>About AuctusAI</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,40px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:20 }}>Built by a<br /><span className="gt">Revenue Practitioner,</span><br />Not a Lab</h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.8,marginBottom:24 }}>Founded by <strong style={{ color:"#CBD5E1" }}>Manoj Gupta</strong> — 25 years of enterprise technology leadership across Oracle, IBM, Accenture, and DXC. AuctusAI is built from direct experience in the gap between dashboards that look good and intelligence that actually protects revenue.</p>
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {[
                  ["🏢","Oracle","VP Product Engineering · 10 yrs · Fusion ERP, 5,000+ customers"],
                  ["🔵","IBM","Partner · Cloud Innovation · $140M P&L · 700-person team"],
                  ["🟣","Accenture","Senior Manager · Cloud Advisory · 4 years"],
                  ["⚙️","DXC Technology","Senior Managing Partner · $10M+ enterprise deals"],
                ].map(([icon,co,detail])=>(
                  <div key={co} style={{ display:"flex",gap:12,padding:"11px 14px",background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontSize:18 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize:13,fontWeight:700,color:"#E2E8F0" }}>{co}</div>
                      <div style={{ fontSize:11,color:"#475569" }}>{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:18 }}>
              <SectionImg src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Enterprise leadership" height={220} />
              <div style={{ background:"linear-gradient(135deg,rgba(14,165,233,0.07),rgba(99,102,241,0.07))",border:"1px solid rgba(14,165,233,0.15)",borderRadius:18,padding:"26px" }}>
                <div style={{ fontFamily:"Sora,sans-serif",fontSize:36,fontWeight:800,color:"#F1F5F9",letterSpacing:"-0.03em",marginBottom:6 }}>auctus</div>
                <div style={{ fontSize:13,color:"#64748B",fontStyle:"italic",marginBottom:14 }}>Latin: "increased · augmented · grown"</div>
                <div style={{ height:1,background:"rgba(255,255,255,0.06)",marginBottom:14 }} />
                <div style={{ fontSize:15,fontWeight:700,color:"#CBD5E1",lineHeight:1.5,marginBottom:8 }}>"Augmented Intelligence for Revenue Growth"</div>
                <div style={{ fontSize:12,color:"#475569" }}>The System of Intelligence layer. Above CRM. Above CS platforms. Where revenue decisions get made.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIVE DASHBOARD PREVIEW ─── */}
      <section style={{ padding:"60px 24px",background:"rgba(14,165,233,0.03)",borderTop:"1px solid rgba(14,165,233,0.08)" }}>
        <div style={{ maxWidth:900,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:36 }}>
            <div className="pill" style={{ background:"rgba(16,185,129,0.1)",color:"#34D399",border:"1px solid rgba(16,185,129,0.2)",marginBottom:12 }}>LIVE PREVIEW</div>
            <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:30,fontWeight:800,letterSpacing:"-0.03em" }}>Revenue Intelligence <span className="gt">Dashboard</span></h2>
          </div>
          <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:22,overflow:"hidden",boxShadow:"0 40px 120px rgba(0,0,0,0.5)" }}>
            <div style={{ padding:"14px 20px",borderBottom:"1px solid rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
              <div style={{ display:"flex",gap:6 }}>{["#FF5F57","#FEBC2E","#28C840"].map(c=><div key={c} style={{ width:11,height:11,borderRadius:"50%",background:c }} />)}</div>
              <div style={{ fontSize:12,color:"#475569",fontWeight:600 }}>AuctusAI · Revenue Intelligence Dashboard</div>
              <div className="pill" style={{ background:"rgba(16,185,129,0.1)",color:"#34D399",border:"1px solid rgba(16,185,129,0.2)",padding:"2px 10px" }}>LIVE</div>
            </div>
            <div style={{ padding:"18px 20px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
              {[["Revenue at Risk","$2.8M","↓ $340K saved","#EF4444"],["ARR Protected","$18.4M","97.4% retention","#10B981"],["Expansion Pipeline","$1.7M","3 accounts ready","#818CF8"],["Intervention ROI","3.8x","Last quarter","#F59E0B"]].map(([lbl,val,sub,col])=>(
                <div key={lbl} style={{ background:"rgba(255,255,255,0.03)",borderRadius:11,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize:10,color:"#64748B",marginBottom:5,textTransform:"uppercase",letterSpacing:".07em" }}>{lbl}</div>
                  <div style={{ fontSize:22,fontWeight:800,color:"#F1F5F9",fontFamily:"Sora,sans-serif" }}>{val}</div>
                  <div style={{ fontSize:11,color:col,fontWeight:600,marginTop:2 }}>{sub}</div>
                </div>
              ))}
            </div>
            <div style={{ padding:"16px 20px" }}>
              <div style={{ fontSize:11,color:"#475569",fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",marginBottom:12 }}>Account Revenue Intelligence</div>
              {[
                ["CloudScale AI Labs","$4.2M ARR",88,"#10B981","Expanding","Expansion signal strong"],
                ["Nexus Research Inst.","$2.8M ARR",62,"#F59E0B","At-Risk","Champion departed"],
                ["Vertex HPC Systems","$5.1M ARR",91,"#10B981","Healthy","Upsell in progress"],
                ["DataForge Inc.","$1.9M ARR",45,"#EF4444","Critical","$1.4M at risk"],
                ["OmniCloud Solutions","$3.4M ARR",74,"#F59E0B","At-Risk","Decision pending"],
              ].map(([name,arr,score,col,status,note])=>(
                <div key={name} style={{ display:"grid",gridTemplateColumns:"1.2fr 0.7fr 140px 90px",alignItems:"center",gap:12,padding:"9px 0",borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                  <div>
                    <div style={{ fontSize:13,fontWeight:600,color:"#E2E8F0" }}>{name}</div>
                    <div style={{ fontSize:11,color:"#475569",marginTop:1 }}>{note}</div>
                  </div>
                  <div style={{ fontSize:12,color:"#94A3B8",fontWeight:600 }}>{arr}</div>
                  <HealthBar score={score} color={col} />
                  <div className="pill" style={{ background:`${col}18`,color:col,border:`1px solid ${col}33`,fontSize:10 }}>{status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" style={{ padding:"90px 24px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(14,165,233,0.04),rgba(99,102,241,0.04))",pointerEvents:"none" }} />
        <div style={{ maxWidth:660,margin:"0 auto",textAlign:"center",position:"relative" }}>
          <div className="pill" style={{ background:"rgba(14,165,233,0.1)",color:"#38BDF8",border:"1px solid rgba(14,165,233,0.2)",marginBottom:20 }}>For CROs, CFOs & CEOs</div>
          <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(30px,4vw,46px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:18 }}>Know Your Revenue at Risk.<br /><span className="gt">Act Before It's Lost.</span></h2>
          <p style={{ fontSize:16,color:"#64748B",lineHeight:1.7,marginBottom:40 }}>Request a demo — we'll show you the Context Graph, Story Arcs, and Revenue Intelligence engine against a dataset matching your vertical. No commitment, no production data required.</p>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:32 }}>
            {[["💰","Revenue Impact Assessment","See revenue at risk across a demo portfolio. Context Graph traces every dollar to root cause."],["📊","Intelligence Dimension Pilot","Bring your data. Full 8-dimension intelligence analysis in 2 weeks — no setup needed."]].map(([icon,title,sub])=>(
              <div key={title} className="glass" style={{ padding:"22px",textAlign:"left" }}>
                <div style={{ fontSize:26,marginBottom:10 }}>{icon}</div>
                <div style={{ fontSize:14,fontWeight:700,color:"#F1F5F9",marginBottom:6 }}>{title}</div>
                <div style={{ fontSize:13,color:"#64748B",lineHeight:1.6 }}>{sub}</div>
              </div>
            ))}
          </div>
          <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" }}>
            <a href="mailto:manoj.gupta@auctusai.ai" className="btnp" style={{ padding:"15px 34px",fontSize:15,borderRadius:11,textDecoration:"none",display:"inline-block" }}>Contact Us</a>
            <a href="https://auctusai.ai" className="btng" style={{ padding:"15px 26px",fontSize:15,borderRadius:11,textDecoration:"none",display:"inline-block" }}>Visit auctusai.ai</a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop:"1px solid rgba(255,255,255,0.06)",padding:"40px 24px 28px",background:"rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:36,marginBottom:36 }}>
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:9,marginBottom:14 }}>
                <div style={{ width:30,height:30,borderRadius:8,background:"linear-gradient(135deg,#0EA5E9,#6366F1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16 }}>⚡</div>
                <div style={{ fontFamily:"Sora,sans-serif",fontWeight:800,fontSize:15,color:"#F1F5F9" }}>AuctusAI</div>
              </div>
              <p style={{ fontSize:12,color:"#475569",lineHeight:1.7,maxWidth:260 }}>Revenue Intelligence — the System of Intelligence layer above CRM and CS platforms. Built for executives who protect and grow recurring revenue.</p>
              <div style={{ marginTop:12,fontSize:11,color:"#334155" }}>manoj.gupta@auctusai.ai</div>
            </div>
            {[
              ["Intelligence",["Context Graph","Story Arcs","Revenue at Risk","Outcome Economics","Signal Analyst"]],
              ["Platform",["MCP Integration","Webhook API","Self-Learning Weights","Multi-Tenant","Enterprise Security"]],
              ["Company",["About","Request Demo","Contact","Privacy","Terms"]],
            ].map(([heading,links])=>(
              <div key={heading}>
                <div style={{ fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:".08em",marginBottom:14 }}>{heading}</div>
                <div style={{ display:"flex",flexDirection:"column",gap:9 }}>
                  {links.map(l=>(
                    <a key={l} href="#" style={{ fontSize:12,color:"#334155",textDecoration:"none" }}
                      onMouseEnter={e=>e.target.style.color="#0EA5E9"}
                      onMouseLeave={e=>e.target.style.color="#334155"}>
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10 }}>
            <div style={{ fontSize:11,color:"#334155" }}>© 2026 AuctusAI Inc. All rights reserved.</div>
            <div style={{ fontSize:11,color:"#1E293B",fontStyle:"italic" }}>auctus — Latin for "growth through augmentation"</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
