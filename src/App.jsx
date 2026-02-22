import { useState, useEffect } from "react";


// ─── DATA ─────────────────────────────────────────────────────────────────────
const PILLARS = [
  { id:"P1", name:"Deployment Velocity",      weight:"30%", color:"#0EA5E9",
    kpis:["GPU Cluster Uptime","Training Completion Rate","Deployment Lead Time","Provisioning Success Rate"] },
  { id:"P2", name:"Operational Stability",    weight:"25%", color:"#10B981",
    kpis:["System Reliability Score","Incident Response Time","SLA Adherence","MTTR"] },
  { id:"P3", name:"AI Workload Performance",  weight:"20%", color:"#8B5CF6",
    kpis:["Inference Latency","Throughput Efficiency","Model Accuracy Trend","GPU Utilization Rate"] },
  { id:"P4", name:"Channel Partner Health",   weight:"15%", color:"#F59E0B",
    kpis:["Partner Engagement Score","Co-sell Pipeline Health","Certification Compliance","Support Ticket Volume"] },
  { id:"P5", name:"Expansion Readiness",      weight:"10%", color:"#EF4444",
    kpis:["Expansion Signal Score","Feature Saturation Rate","Upsell Opportunity Index","Executive Sponsor Activity"] },
];

const FEATURES = [
  { icon:"🧬", title:"Synthetic Data Engine",   desc:"8 pre-built health trajectory scenarios — churn freefall to turnaround recovery. Demo and train without touching production data.",      tag:"Data Layer",      tagColor:"#0EA5E9" },
  { icon:"🔍", title:"Qdrant Vector Search",     desc:"Dual-collection semantic search across 20+ qualitative signals per account. Emails, escalations, meeting notes — all context-retrieved.", tag:"AI Infrastructure", tagColor:"#8B5CF6" },
  { icon:"🧠", title:"Signal Analyst Agent",     desc:"AI agent combining PostgreSQL KPIs + Qdrant qualitative signals into a natural-language health recommendation with early-warning flags.", tag:"Agentic AI",       tagColor:"#6366F1" },
  { icon:"🎯", title:"Playbook Orchestration",   desc:"7 trigger conditions with P1/P2/P3 severity routing. Every critical account gets a named CSM owner and resolution date.",              tag:"Automation",       tagColor:"#F59E0B" },
  { icon:"📈", title:"Revenue Intelligence",     desc:"Monthly account-level revenue risk and expansion scoring. Compounding incremental improvements drive measurable ARR protection over time.", tag:"Methodology",     tagColor:"#10B981" },
  { icon:"⚙️", title:"Wizard A / B / C Pipeline", desc:"Journey Generator → Pattern Analyzer → Weight Optimizer. Three sequential AI wizards that run automatically on onboarding and monthly.", tag:"ML Pipeline",     tagColor:"#EF4444" },
  { icon:"🏢", title:"Multi-Tenant Architecture", desc:"UUID-based fully isolated customer environments. Independent Qdrant collections and PostgreSQL schemas. Zero cross-tenant exposure.",    tag:"Enterprise",      tagColor:"#0369A1" },
  { icon:"🔄", title:"Continuous Weight Learning", desc:"Wizard C recalibrates L1/L2 health scoring weights monthly from your actual outcomes. The model converges to your customer reality.",  tag:"Self-Learning",   tagColor:"#7C3AED" },
];

const VERTICALS = [
  { label:"SaaS",              icon:"☁️",  color:"#0EA5E9" },
  { label:"Data Center",       icon:"🖥️",  color:"#10B981" },
  { label:"Healthcare",        icon:"🏥",  color:"#8B5CF6" },
  { label:"Financial Services",icon:"💹",  color:"#F59E0B" },
  { label:"Manufacturing",     icon:"⚙️",  color:"#EF4444" },
  { label:"Retail / E-Comm",   icon:"🛒",  color:"#EC4899" },
];

const RINGS = [
  { label:"Revenue Intelligence", r:210, delay:0 },
  { label:"AI Governance",        r:255, delay:0.6 },
  { label:"Explainability",       r:300, delay:1.2 },
  { label:"Human-in-the-Loop",    r:345, delay:1.8 },
];

// ─── HEALTH BAR ───────────────────────────────────────────────────────────────
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

// ─── 3D HEXAGONAL PRISM ───────────────────────────────────────────────────────
function HexPrism() {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setAngle(a => (a + 0.3) % 360), 30);
    return () => clearInterval(id);
  }, []);

  // Hexagonal prism geometry
  const FW = 170;   // face width px
  const FH = 190;   // face height px
  const APO = 147;  // apothem = FW * √3/2

  const faces = VERTICALS.map((v, i) => ({
    ...v,
    rotY: i * 60,
    z: APO,
  }));

  return (
    <div style={{ width:"100%", display:"flex", justifyContent:"center", alignItems:"center", padding:"60px 0 120px", position:"relative" }}>

      {/* Outer ring glow */}
      <div style={{ position:"absolute", inset:0, display:"flex", justifyContent:"center", alignItems:"center", pointerEvents:"none" }}>
        <div style={{ width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 65%)" }} />
      </div>

      {/* 3D Prism scene */}
      <div style={{ position:"relative", zIndex:2 }}>
        <div style={{ perspective:900, perspectiveOrigin:"50% 45%" }}>
          <div style={{
            width:FW, height:FH,
            position:"relative",
            transformStyle:"preserve-3d",
            transform:`rotateX(-14deg) rotateY(${angle}deg)`,
            margin:"0 auto",
          }}>

            {/* Top hex cap */}
            <div style={{
              position:"absolute", width:FW, height:FW,
              left:0, top:`-${FW/2 - 10}px`,
              transformStyle:"preserve-3d",
              transform:"rotateX(90deg) translateZ(0px)",
              background:"conic-gradient(from 0deg, #0EA5E940, #10B98140, #8B5CF640, #F59E0B40, #EF444440, #EC489940, #0EA5E940)",
              clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              filter:"blur(1px)",
            }} />

            {/* Bottom hex cap */}
            <div style={{
              position:"absolute", width:FW, height:FW,
              left:0, bottom:`-${FW/2 - 10}px`,
              transformStyle:"preserve-3d",
              transform:"rotateX(-90deg) translateZ(0px)",
              background:"conic-gradient(from 0deg, #0EA5E920, #10B98120, #8B5CF620, #F59E0B20, #EF444420, #EC489920, #0EA5E920)",
              clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              filter:"blur(2px)",
            }} />

            {/* 6 side faces */}
            {faces.map((f, i) => (
              <div key={f.label} style={{
                position:"absolute",
                width:FW, height:FH,
                left:0, top:0,
                backfaceVisibility:"hidden",
                transform:`rotateY(${f.rotY}deg) translateZ(${f.z}px)`,
                background:`linear-gradient(160deg, ${f.color}18 0%, ${f.color}08 100%)`,
                border:`1px solid ${f.color}55`,
                display:"flex", flexDirection:"column",
                alignItems:"center", justifyContent:"center", gap:10,
                borderRadius:4,
                boxShadow:`inset 0 0 30px ${f.color}15, 0 0 40px ${f.color}20`,
              }}>
                <div style={{ fontSize:34 }}>{f.icon}</div>
                <div style={{ fontSize:13, fontWeight:700, color:"#E2E8F0", textAlign:"center", letterSpacing:"-0.01em", lineHeight:1.3, padding:"0 12px" }}>
                  {f.label}
                </div>
                <div style={{ width:32, height:2, borderRadius:999, background:f.color, opacity:0.7 }} />
                <div style={{ fontSize:10, color:f.color, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase" }}>Vertical</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SVG orbital rings beneath the prism ── */}
        <div style={{ position:"absolute", top:FH + 40, left:"50%", transform:"translateX(-50%)", pointerEvents:"none" }}>
          <svg width={750} height={280} viewBox="-375 -60 750 280" style={{ overflow:"visible" }}>
            <defs>
              {RINGS.map((ring, i) => (
                <filter key={`glow${i}`} id={`glow${i}`}>
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              ))}
            </defs>

            {RINGS.map((ring, i) => {
              const rx = ring.r;
              const ry = rx * 0.28;
              const opacity = 0.75 - i * 0.1;
              const dashLen = Math.PI * (3*(rx+ry) - Math.sqrt((3*rx+ry)*(rx+3*ry)));
              return (
                <g key={ring.label}>
                  {/* Ring ellipse */}
                  <ellipse
                    cx={0} cy={i * 52 + 10}
                    rx={rx} ry={ry}
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth={1.5}
                    strokeOpacity={opacity}
                    filter={`url(#glow${i})`}
                    strokeDasharray={`${dashLen * 0.15} ${dashLen * 0.85}`}
                    style={{
                      animation:`orbit${i} ${6 + i*1.5}s linear infinite`,
                    }}
                  />
                  {/* Solid ring */}
                  <ellipse
                    cx={0} cy={i * 52 + 10}
                    rx={rx} ry={ry}
                    fill="none"
                    stroke="#991B1B"
                    strokeWidth={0.8}
                    strokeOpacity={opacity * 0.5}
                  />
                  {/* Label on right side */}
                  <text
                    x={rx + 10} y={i * 52 + 14}
                    fill="#FCA5A5"
                    fontSize={11}
                    fontWeight="700"
                    letterSpacing="0.06em"
                    fontFamily="DM Sans, system-ui"
                    opacity={opacity}
                  >
                    {ring.label}
                  </text>
                  {/* Label dot */}
                  <circle cx={rx + 5} cy={i * 52 + 11} r={3} fill="#DC2626" opacity={opacity} />
                  {/* Left mirror label */}
                  <text
                    x={-rx - 12} y={i * 52 + 14}
                    fill="#FCA5A5"
                    fontSize={11}
                    fontWeight="700"
                    letterSpacing="0.06em"
                    fontFamily="DM Sans, system-ui"
                    textAnchor="end"
                    opacity={opacity * 0.5}
                  >
                    {ring.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Central platform label below rings */}
        <div style={{
          position:"absolute",
          top:FH + 310,
          left:"50%", transform:"translateX(-50%)",
          textAlign:"center",
          width:340,
        }}>
          <div style={{ fontSize:11, fontWeight:700, color:"#EF4444", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:6 }}>
            Universal Intelligence Layer
          </div>
          <div style={{ fontSize:13, color:"#475569", lineHeight:1.6 }}>
            One platform. Every vertical. Governed, explainable, continuously learning.
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION IMAGE ────────────────────────────────────────────────────────────
function SectionImg({ src, alt, height = 280, radius = 20 }) {
  return (
    <div style={{ borderRadius:radius, overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)", boxShadow:"0 24px 80px rgba(0,0,0,0.5)" }}>
      <img src={src} alt={alt} style={{ width:"100%", height, objectFit:"cover", display:"block", filter:"brightness(0.85) saturate(1.2)" }} />
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function AuctusAIWebsite() {
  const [activePillar, setActivePillar] = useState(0);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div style={{ fontFamily:"'DM Sans', system-ui, sans-serif", background:"#060B18", color:"#E2E8F0", overflowX:"hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&family=Sora:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::selection{background:#0EA5E9;color:#fff;}
        .gt{background:linear-gradient(135deg,#0EA5E9 0%,#818CF8 60%,#EC4899 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .glass{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:18px;backdrop-filter:blur(12px);transition:all .3s;}
        .glass:hover{background:rgba(255,255,255,0.055);border-color:rgba(14,165,233,0.3);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,0.4);}
        .pill{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;}
        .btn-p{background:linear-gradient(135deg,#0EA5E9,#6366F1);color:#fff;border:none;cursor:pointer;font-weight:700;border-radius:10px;transition:all .25s;font-family:inherit;}
        .btn-p:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(14,165,233,0.4);}
        .btn-g{background:transparent;border:1.5px solid rgba(255,255,255,0.15);color:#E2E8F0;cursor:pointer;font-weight:600;border-radius:10px;transition:all .25s;font-family:inherit;}
        .btn-g:hover{border-color:#0EA5E9;color:#0EA5E9;}
        .nl{color:#94A3B8;font-size:14px;font-weight:500;cursor:pointer;transition:color .2s;text-decoration:none;background:none;border:none;padding:0;}
        .nl:hover{color:#0EA5E9;}
        .grid-bg{background-image:linear-gradient(rgba(14,165,233,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.03) 1px,transparent 1px);background-size:60px 60px;}
        .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(14,165,233,0.25),transparent);max-width:700px;margin:0 auto;}
        .pt{padding:4px 12px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:600;transition:all .2s;white-space:nowrap;border:1.5px solid transparent;}
        .pt:not(.active){color:#64748B;border-color:rgba(255,255,255,0.06);}
        .pt:not(.active):hover{color:#94A3B8;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .fade-up{animation:fadeUp .7s ease forwards;}
      `}</style>

      {/* ══ NAV ══════════════════════════════════════════════════════════════════ */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 24px",height:60,display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(6,11,24,0.9)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display:"flex",alignItems:"center",gap:10 }}>
          <div style={{ width:34,height:34,borderRadius:9,background:"linear-gradient(135deg,#0EA5E9,#6366F1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18 }}>⚡</div>
          <div>
            <div style={{ fontFamily:"Sora,sans-serif",fontWeight:800,fontSize:17,letterSpacing:"-0.02em",color:"#F1F5F9" }}>AuctusAI</div>
            <div style={{ fontSize:9,color:"#475569",letterSpacing:".1em",textTransform:"uppercase",marginTop:-2 }}>CS Pulse Platform</div>
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:28 }}>
          {["Platform","Verticals","Pipeline","Revenue Intel"].map((l,i) => (
            <button key={l} className="nl" onClick={()=>scrollTo(["platform","verticals","how-it-works","rev-intel"][i])}>{l}</button>
          ))}
        </div>
        <div style={{ display:"flex",gap:10 }}>
          <button className="btn-g" style={{ padding:"8px 18px",fontSize:13 }} onClick={()=>scrollTo("contact")}>Sign In</button>
          <button className="btn-p" style={{ padding:"9px 22px",fontSize:13 }} onClick={()=>scrollTo("contact")}>Request Demo</button>
        </div>
      </nav>

      {/* ══ HERO ═════════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop:60,position:"relative",overflow:"hidden" }} className="grid-bg" id="verticals">

        {/* Glow */}
        <div style={{ position:"absolute",top:"10%",left:"50%",transform:"translateX(-50%)",width:800,height:800,borderRadius:"50%",background:"radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 65%)",pointerEvents:"none" }} />

        <div style={{ maxWidth:1100,margin:"0 auto",padding:"60px 24px 0",textAlign:"center" }}>
          <div className="pill fade-up" style={{ background:"rgba(14,165,233,0.1)",color:"#38BDF8",border:"1px solid rgba(14,165,233,0.2)",marginBottom:20 }}>
            <span style={{ width:6,height:6,borderRadius:"50%",background:"#38BDF8",display:"inline-block" }} />
            Multi-Vertical · Self-Learning · Human-Governed AI
          </div>
          <h1 className="fade-up" style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(38px,4.5vw,64px)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.03em",marginBottom:20 }}>
            One Intelligence Platform.<br />
            <span className="gt">Every Customer Vertical.</span>
          </h1>
          <p className="fade-up" style={{ fontSize:18,color:"#64748B",maxWidth:560,margin:"0 auto 16px",lineHeight:1.7 }}>
            CS Pulse delivers revenue intelligence, AI-governed playbooks, and explainable health scoring — purpose-built for each industry vertical on a single adaptive platform.
          </p>
        </div>

        {/* 3D Hexagonal Prism — the hero visual */}
        <HexPrism />
      </section>

      {/* ══ STATS BAR ════════════════════════════════════════════════════════════ */}
      <div style={{ background:"rgba(255,255,255,0.02)",borderTop:"1px solid rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.05)",padding:"28px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:24 }}>
          {[["5-Pillar","Health Framework"],["3","AI Wizards  A·B·C"],["33","KPIs Per Account"],["Revenue\nIntel","Monthly Scoring"],["Qdrant +\nPostgres","Dual-DB AI Layer"]].map(([val,lbl])=>(
            <div key={lbl} style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"Sora,sans-serif",fontSize:26,fontWeight:800,color:"#F1F5F9",letterSpacing:"-0.02em",whiteSpace:"pre-line",lineHeight:1.2 }}>{val}</div>
              <div style={{ fontSize:12,color:"#475569",marginTop:4,whiteSpace:"pre-line" }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PLATFORM FEATURES ════════════════════════════════════════════════════ */}
      <section id="platform" style={{ padding:"90px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:70 }}>
            <div>
              <div className="pill" style={{ background:"rgba(14,165,233,0.1)",color:"#38BDF8",border:"1px solid rgba(14,165,233,0.2)",marginBottom:16 }}>Platform Capabilities</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16 }}>
                Full-Stack<br /><span className="gt">Intelligence Layer</span>
              </h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75 }}>
                From synthetic data generation to agentic signal analysis and playbook orchestration — CS Pulse covers the entire customer success lifecycle with explainable, auditable AI.
              </p>
            </div>
            {/* Data center image */}
            <SectionImg
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
              alt="Enterprise data center server racks"
              height={260}
            />
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

      {/* ══ 5-PILLAR MODEL ═══════════════════════════════════════════════════════ */}
      <section id="pillars" style={{ padding:"90px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:50 }}>
            <div>
              <div className="pill" style={{ background:"rgba(99,102,241,0.1)",color:"#818CF8",border:"1px solid rgba(99,102,241,0.2)",marginBottom:16 }}>5-Pillar Framework</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16 }}>
                Built for<br /><span className="gt">Datacenter Vertical</span>
              </h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75 }}>
                Each pillar has configurable L1/L2 weights. Wizard C recalibrates them monthly from your actual churn and expansion outcomes — not a generic SaaS benchmark.
              </p>
            </div>
            <SectionImg
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              alt="AI analytics visualization"
              height={240}
            />
          </div>

          {/* Tabs */}
          <div style={{ display:"flex",gap:8,justifyContent:"center",marginBottom:28,flexWrap:"wrap" }}>
            {PILLARS.map((p,i)=>(
              <button key={p.id} className={`pt${activePillar===i?" active":""}`}
                style={ activePillar===i ? {background:p.color,color:"#fff",border:`1.5px solid ${p.color}`} : {} }
                onClick={()=>setActivePillar(i)}>
                {p.id} · {p.name}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div style={{ background:"rgba(255,255,255,0.03)",border:`1px solid ${PILLARS[activePillar].color}33`,borderRadius:18,padding:"36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:36,alignItems:"center" }}>
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:20 }}>
                <div style={{ width:50,height:50,borderRadius:13,background:PILLARS[activePillar].color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:800,color:PILLARS[activePillar].color }}>
                  {PILLARS[activePillar].id}
                </div>
                <div>
                  <div style={{ fontSize:20,fontWeight:700,color:"#F1F5F9",fontFamily:"Sora,sans-serif" }}>{PILLARS[activePillar].name}</div>
                  <div style={{ fontSize:12,color:"#64748B" }}>Default weight: <span style={{ color:PILLARS[activePillar].color,fontWeight:700 }}>{PILLARS[activePillar].weight}</span> · Auto-recalibrates monthly</div>
                </div>
              </div>
              <div style={{ fontSize:13,color:"#475569",padding:"12px 16px",background:"rgba(255,255,255,0.03)",borderRadius:10,border:"1px solid rgba(255,255,255,0.06)" }}>
                💡 Default weights are starting points. After 90 days of data, Wizard C learns the optimal weight for your portfolio.
              </div>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:9 }}>
              {PILLARS[activePillar].kpis.map((kpi,ki)=>(
                <div key={kpi} style={{ display:"flex",alignItems:"center",gap:12,padding:"13px 16px",background:"rgba(255,255,255,0.03)",borderRadius:11,border:"1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width:26,height:26,borderRadius:7,background:PILLARS[activePillar].color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:PILLARS[activePillar].color }}>K{ki+1}</div>
                  <span style={{ fontSize:13,color:"#CBD5E1",fontWeight:500 }}>{kpi}</span>
                  <div style={{ marginLeft:"auto",height:3,width:50,background:"#1E293B",borderRadius:999 }}>
                    <div style={{ height:"100%",width:`${55+ki*12}%`,background:PILLARS[activePillar].color,borderRadius:999 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weight bar */}
          <div style={{ marginTop:20,padding:"18px 22px",background:"rgba(255,255,255,0.02)",borderRadius:13,border:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize:10,color:"#475569",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",marginBottom:10 }}>Portfolio Health Score Composition</div>
            <div style={{ display:"flex",height:28,borderRadius:8,overflow:"hidden",gap:2 }}>
              {PILLARS.map(p=>(
                <div key={p.id} style={{ flex:parseInt(p.weight),background:p.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.9)",whiteSpace:"nowrap",overflow:"hidden" }}>
                  {p.id} {p.weight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══ PIPELINE / HOW IT WORKS ══════════════════════════════════════════════ */}
      <section id="how-it-works" style={{ padding:"90px 24px",background:"rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:60 }}>
            <div>
              <div className="pill" style={{ background:"rgba(16,185,129,0.1)",color:"#34D399",border:"1px solid rgba(16,185,129,0.2)",marginBottom:16 }}>End-to-End Pipeline</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16 }}>
                Raw CSV to<br /><span className="gt">Intelligent Action</span>
              </h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75 }}>Six automated steps. Human-validated at every milestone. No manual script running — the API orchestrates everything on onboarding.</p>
            </div>
            <SectionImg
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
              alt="AI data pipeline workflow"
              height={240}
            />
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:18 }}>
            {[
              {n:"01",t:"Provision & Ingest",d:"Upload 6 CSV files via the browser wizard. API validates schema, loads data into PostgreSQL, creates Qdrant embeddings — one step.",c:"#0EA5E9"},
              {n:"02",t:"Wizard A — Journey Generator",d:"Transforms raw CSV into account journey timelines: events, milestones, 12-month health arcs. Context for the Signal Analyst to reason over.",c:"#8B5CF6"},
              {n:"03",t:"Wizard B — Pattern Analyzer",d:"Detects Proactive Growth, Churn Risk, and Recovery trajectories. Auto-generates early warning rules and success factors.",c:"#F59E0B"},
              {n:"04",t:"Wizard C — Weight Optimizer",d:"Learns which KPIs and pillars actually predict outcomes in your data. L1/L2 weights recalibrate monthly — accuracy compounds over time.",c:"#10B981"},
              {n:"05",t:"Signal Analyst Agent",d:"AI agent runs on each account: KPI data from PostgreSQL + qualitative signals from Qdrant → natural-language health recommendation + playbook trigger.",c:"#EF4444"},
              {n:"06",t:"Revenue Intelligence Reviews",d:"Monthly portfolio review. Every account must show forward movement. Stagnant accounts auto-escalate to a named playbook with CSM owner and date.",c:"#6366F1"},
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

      {/* ══ REVENUE INTELLIGENCE ═════════════════════════════════════════════════ */}
      <section id="rev-intel" style={{ padding:"90px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:60,alignItems:"center" }}>
            <div>
              <div className="pill" style={{ background:"rgba(16,185,129,0.1)",color:"#34D399",border:"1px solid rgba(16,185,129,0.2)",marginBottom:20 }}>Revenue Intelligence</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:20 }}>
                Every Account.<br />Every Month.<br /><span className="gt">Forward.</span>
              </h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75,marginBottom:28 }}>
                Revenue Intelligence replaces lagging vanity metrics with a compounding improvement cadence. Each account is scored, tracked, and acted on monthly — with full explainability into which pillar and which KPI drove the change.
              </p>

              {/* Compounding table */}
              <div style={{ borderRadius:14,overflow:"hidden",border:"1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",background:"rgba(255,255,255,0.04)",padding:"10px 16px" }}>
                  {["Period","Monthly Signal","Portfolio Outcome"].map(h=>(
                    <div key={h} style={{ fontSize:10,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:".06em" }}>{h}</div>
                  ))}
                </div>
                {[
                  ["Month 1","Baseline set","Reference: 72 avg health"],
                  ["Month 2","+1pt / account","73 → stabilizing"],
                  ["Month 4","Compounding","75–76 avg"],
                  ["Month 6","Momentum builds","78–79 avg"],
                  ["Month 12","~12.7% compounded","82 avg · ARR protected"],
                ].map(([p,g,o],i)=>(
                  <div key={p} style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"11px 16px",background:i%2===0?"transparent":"rgba(255,255,255,0.02)",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ fontSize:13,fontWeight:600,color:"#CBD5E1" }}>{p}</div>
                    <div style={{ fontSize:13,color:"#10B981",fontWeight:600 }}>{g}</div>
                    <div style={{ fontSize:12,color:"#475569" }}>{o}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
              <SectionImg
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
                alt="Revenue growth analytics dashboard"
                height={220}
              />
              {[
                ["📌","Zero-exception rule","No account is exempt. Zero movement = must be on a named playbook with CSM owner + resolution date.","#0EA5E9"],
                ["🔄","Wizard C recalibrates monthly","Health weights adjust from your outcomes — not a generic benchmark. The model earns accuracy.","#8B5CF6"],
                ["🎯","Full playbook accountability","Every critical account: named playbook, P1/P2/P3 severity, assigned CSM, target date. No account falls through.","#F59E0B"],
              ].map(([icon,title,desc,color])=>(
                <div key={title as string} className="glass" style={{ padding:"18px 22px",display:"flex",gap:14 }}>
                  <div style={{ fontSize:22,flexShrink:0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize:14,fontWeight:700,color:"#F1F5F9",marginBottom:5 }}>{title as string}</div>
                    <div style={{ fontSize:13,color:"#64748B",lineHeight:1.6 }}>{desc as string}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══ PLAYBOOK TRIGGERS ════════════════════════════════════════════════════ */}
      <section style={{ padding:"90px 24px",background:"rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:50 }}>
            <div>
              <div className="pill" style={{ background:"rgba(239,68,68,0.1)",color:"#FCA5A5",border:"1px solid rgba(239,68,68,0.2)",marginBottom:16 }}>Playbook Engine</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,42px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16 }}>
                Trigger the Right Play<br /><span className="gt">at the Right Moment</span>
              </h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.75 }}>Seven trigger conditions with P1/P2/P3 severity routing. Each maps to a named playbook — from 30-day save plans to expansion pitch decks.</p>
            </div>
            <SectionImg
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Business strategy workflow execution"
              height={240}
            />
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:14 }}>
            {[
              ["P1","Health Score Critical","Score < 60 for 2+ months","Immediate CSM Escalation + Executive Sponsor Review","#EF4444"],
              ["P1","Rapid Decline","Score drops >15pts in 30 days","Emergency QBR + Usage Recovery Plan","#EF4444"],
              ["P2","At-Risk Plateau","Score 60–70 for 3+ months","Deep Dive Review + Pillar Analysis","#F59E0B"],
              ["P2","Low Engagement","No CSM touchpoint in 45+ days","Check-in Campaign + Health Briefing","#F59E0B"],
              ["P2","Qualitative Alert","Negative sentiment in 3+ comms","Champion Reactivation + Technical Review","#F59E0B"],
              ["P3","Expansion Signal","Score >85 + low feature saturation","Upsell Opportunity Review + SKU Expansion","#10B981"],
              ["P1","Churn Early Warning","Wizard B pattern: Churn Risk trajectory","30-Day Save Plan + C-Suite Engagement","#EF4444"],
            ].map(([sev,title,cond,play,color])=>(
              <div key={title as string} className="glass" style={{ padding:"18px 22px",borderLeft:`3px solid ${color}` }}>
                <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:10 }}>
                  <div className="pill" style={{ background:`${color}18`,color:color as string,border:`1px solid ${color}44` }}>{sev}</div>
                  <div style={{ fontSize:14,fontWeight:700,color:"#F1F5F9" }}>{title as string}</div>
                </div>
                <div style={{ fontSize:11,color:"#64748B",marginBottom:7,fontStyle:"italic" }}>{cond as string}</div>
                <div style={{ fontSize:12,color:"#94A3B8" }}>→ {play as string}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══ ABOUT / FOUNDER ══════════════════════════════════════════════════════ */}
      <section id="about" style={{ padding:"90px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center" }}>
            <div>
              <div className="pill" style={{ background:"rgba(14,165,233,0.1)",color:"#38BDF8",border:"1px solid rgba(14,165,233,0.2)",marginBottom:20 }}>About AuctusAI</div>
              <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(28px,3vw,40px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:20 }}>
                Built by a<br /><span className="gt">Practitioner,</span><br />Not a Lab
              </h2>
              <p style={{ fontSize:15,color:"#64748B",lineHeight:1.8,marginBottom:28 }}>
                Founded by <strong style={{ color:"#CBD5E1" }}>Manoj Gupta</strong> — 25 years of enterprise technology leadership across Oracle, IBM, Accenture, and DXC. CS Pulse is built from direct experience in the gap between dashboards that look good and intelligence that actually prevents churn.
              </p>

              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {[
                  ["🏢","Oracle","VP Product Engineering · 10 yrs · Fusion ERP, 5,000+ customers"],
                  ["🔵","IBM","Partner · Cloud Innovation · $140M P&L · 700-person team"],
                  ["🟣","Accenture","Senior Manager · Cloud Advisory · 4 years"],
                  ["⚙️","DXC Technology","Senior Managing Partner · $10M+ enterprise deals"],
                ].map(([icon,co,detail])=>(
                  <div key={co as string} style={{ display:"flex",gap:12,padding:"11px 14px",background:"rgba(255,255,255,0.02)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontSize:18 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize:13,fontWeight:700,color:"#E2E8F0" }}>{co as string}</div>
                      <div style={{ fontSize:11,color:"#475569" }}>{detail as string}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display:"flex",flexDirection:"column",gap:18 }}>
              <SectionImg
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Enterprise technology leadership team"
                height={220}
              />
              <div style={{ background:"linear-gradient(135deg,rgba(14,165,233,0.07),rgba(99,102,241,0.07))",border:"1px solid rgba(14,165,233,0.15)",borderRadius:18,padding:"28px" }}>
                <div style={{ fontFamily:"Sora,sans-serif",fontSize:38,fontWeight:800,color:"#F1F5F9",letterSpacing:"-0.03em",marginBottom:6 }}>auctus</div>
                <div style={{ fontSize:13,color:"#64748B",fontStyle:"italic",marginBottom:14 }}>Latin: "increased · augmented · grown"</div>
                <div style={{ height:1,background:"rgba(255,255,255,0.06)",marginBottom:14 }} />
                <div style={{ fontSize:16,fontWeight:700,color:"#CBD5E1",lineHeight:1.5,marginBottom:8 }}>
                  "Augmented Intelligence for Customer Growth"
                </div>
                <div style={{ fontSize:12,color:"#475569" }}>One platform. Every vertical. Governed AI with human expertise at every step.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" style={{ padding:"90px 24px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(14,165,233,0.05),rgba(99,102,241,0.05))",pointerEvents:"none" }} />
        <div style={{ maxWidth:680,margin:"0 auto",textAlign:"center",position:"relative" }}>
          <div className="pill" style={{ background:"rgba(14,165,233,0.1)",color:"#38BDF8",border:"1px solid rgba(14,165,233,0.2)",marginBottom:20 }}>Get Started</div>
          <h2 style={{ fontFamily:"Sora,sans-serif",fontSize:"clamp(30px,4vw,48px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:18 }}>
            Ready to Make Every Account<br /><span className="gt">Move Forward?</span>
          </h2>
          <p style={{ fontSize:16,color:"#64748B",lineHeight:1.7,marginBottom:40 }}>
            Request a demo — we'll run CS Pulse against a synthetic dataset matching your vertical. No commitment, no production data required.
          </p>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginBottom:36 }}>
            {[
              ["🔬","Live Platform Demo","See the 5-pillar dashboard, Signal Analyst agent, and playbook triggers in action."],
              ["📊","Portfolio Health Pilot","Bring your data. We'll run a health scoring analysis in 2 weeks — no platform setup needed."],
            ].map(([icon,title,sub])=>(
              <div key={title as string} className="glass" style={{ padding:"24px",textAlign:"left" }}>
                <div style={{ fontSize:28,marginBottom:10 }}>{icon}</div>
                <div style={{ fontSize:14,fontWeight:700,color:"#F1F5F9",marginBottom:7 }}>{title as string}</div>
                <div style={{ fontSize:13,color:"#64748B",lineHeight:1.6 }}>{sub as string}</div>
              </div>
            ))}
          </div>
          <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" }}>
            <a href="mailto:manoj.gupta@auctusai.ai" className="btn-p" style={{ padding:"15px 36px",fontSize:15,borderRadius:11,textDecoration:"none",display:"inline-block" }}>Contact Us →</a>
            <a href="https://auctusai.ai" className="btn-g" style={{ padding:"15px 28px",fontSize:15,borderRadius:11,textDecoration:"none",display:"inline-block" }}>Visit auctusai.ai</a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════════ */}
      <footer style={{ borderTop:"1px solid rgba(255,255,255,0.06)",padding:"40px 24px 28px",background:"rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:36,marginBottom:36 }}>
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:9,marginBottom:14 }}>
                <div style={{ width:30,height:30,borderRadius:8,background:"linear-gradient(135deg,#0EA5E9,#6366F1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16 }}>⚡</div>
                <div style={{ fontFamily:"Sora,sans-serif",fontWeight:800,fontSize:15,color:"#F1F5F9" }}>AuctusAI</div>
              </div>
              <p style={{ fontSize:12,color:"#475569",lineHeight:1.7,maxWidth:240 }}>CS Pulse — AI-native revenue intelligence for datacenter and enterprise verticals.</p>
              <div style={{ marginTop:12,fontSize:11,color:"#334155" }}>manoj.gupta@auctusai.ai</div>
            </div>
            {[
              ["Platform",["5-Pillar Model","Signal Analyst","Playbook Engine","Revenue Intelligence","Synthetic Data"]],
              ["Technology",["Qdrant Vector DB","Wizard A/B/C","Agentic AI","PostgreSQL","Multi-Tenant"]],
              ["Company",["About","Request Demo","Contact","Privacy","Terms"]],
            ].map(([heading,links])=>(
              <div key={heading as string}>
                <div style={{ fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:".08em",marginBottom:14 }}>{heading as string}</div>
                <div style={{ display:"flex",flexDirection:"column",gap:9 }}>
                  {(links as string[]).map(l=>(
                    <a key={l} href="#" style={{ fontSize:12,color:"#334155",textDecoration:"none" }}
                      onMouseEnter={e=>(e.target).style.color="#0EA5E9"}
                      onMouseLeave={e=>(e.target).style.color="#334155"}>
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
