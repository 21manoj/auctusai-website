import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Target, Zap, Users, BarChart3, Brain, CheckCircle2, Star, ChevronDown, RefreshCw, GitBranch, Shield } from 'lucide-react';

export default function AuctusAIWebsite() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight text-slate-900">AuctusAI</div>
              <div className="text-xs text-slate-500 -mt-1">CS Pulse Platform</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Platform</a>
            <a href="#methodology" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">How It Works</a>
            <a href="#outcomes" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Outcomes</a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                Self-Learning AI • Human-Validated Intelligence
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Customer Success Intelligence That
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  {' '}Gets Smarter Every Day
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                CS Pulse combines AI-powered analytics with continuous learning to identify revenue risk and expansion opportunities in your customer base—validated by your team's expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                  Request Demo <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-xl font-bold text-lg hover:border-cyan-500 hover:text-cyan-600 transition-all">
                  See ROI Analysis
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4 border-t border-slate-200 mt-6">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-600 font-medium">Continuous learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-600 font-medium">Human oversight</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-600 font-medium">Adaptive models</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-500">Health Score Dashboard</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                      <div className="text-2xl font-bold text-green-700">94</div>
                      <div className="text-xs text-green-600 font-medium">Healthy Accounts</div>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl border border-red-200">
                      <div className="text-2xl font-bold text-red-700">12</div>
                      <div className="text-xs text-red-600 font-medium">At-Risk Accounts</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-slate-700">Acme Corp</span>
                      </div>
                      <span className="text-sm font-bold text-red-600">78% churn risk</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-slate-700">TechStart Inc</span>
                      </div>
                      <span className="text-sm font-bold text-green-600">89% expansion</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-medium text-slate-700">Global Systems</span>
                      </div>
                      <span className="text-sm font-bold text-yellow-600">Monitor closely</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white">78-84%</div>
              <div className="text-cyan-100 mt-1">Churn Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">90-180</div>
              <div className="text-cyan-100 mt-1">Days Early Warning</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">59</div>
              <div className="text-cyan-100 mt-1">KPIs Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">15-20%</div>
              <div className="text-cyan-100 mt-1">Improvement Over Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning Methodology */}
      <section id="methodology" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              AI That Learns From Your Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              CS Pulse doesn't just analyze data—it continuously adapts to your customer patterns, validated by your team's expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. AI Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Machine learning models analyze 59 KPIs across 5 pillars to detect patterns, predict outcomes, and surface insights your team might miss.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Human Validation</h3>
              <p className="text-slate-600 leading-relaxed">
                Your CSMs review AI predictions, mark false positives, and validate outcomes. This feedback loop ensures accuracy improves with every interaction.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Continuous Improvement</h3>
              <p className="text-slate-600 leading-relaxed">
                Models retrain quarterly on validated outcomes. Prediction accuracy typically improves 15-20% over first 12 months as the system learns your specific patterns.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Result: Adaptive Intelligence</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Unlike static rules or one-time ML models, CS Pulse evolves with your business. As your product changes, customer behavior shifts, and market conditions evolve, the AI adapts—always validated by your team's domain expertise.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-slate-700">Month 1: Baseline accuracy 65-70%</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-slate-700">Month 3: Improved to 72-76% with validation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-slate-700">Month 6: Reaches 78-82% as patterns solidify</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-slate-700">Month 12+: Stabilizes at 78-84% accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="platform" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-slate-600">
              59 KPIs. 5 Pillars. Continuous Learning. Human Oversight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border-2 border-slate-200 hover:border-cyan-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Churn Risk Detection</h3>
              <p className="text-slate-600 leading-relaxed">
                ML models analyze customer behavior patterns to flag accounts at risk 90-180 days before potential churn. Accuracy improves as your CSMs validate predictions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-green-50 p-8 rounded-2xl border-2 border-slate-200 hover:border-green-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expansion Opportunity Identification</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatically surfaces accounts showing signals of readiness to expand based on usage growth, engagement patterns, and business milestone achievements.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-orange-50 p-8 rounded-2xl border-2 border-slate-200 hover:border-orange-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Playbook Triggers</h3>
              <p className="text-slate-600 leading-relaxed">
                When health scores cross defined thresholds, proven intervention playbooks activate automatically—reviewed and refined by your team for optimal results.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-2xl border-2 border-slate-200 hover:border-purple-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">5-Pillar Health Framework</h3>
              <p className="text-slate-600 leading-relaxed">
                Track customer health across Product Usage, Support Efficiency, Business Value, Relationship Quality, and Financial Health with customizable weighting.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-indigo-50 p-8 rounded-2xl border-2 border-slate-200 hover:border-indigo-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">CSM Workflow Optimization</h3>
              <p className="text-slate-600 leading-relaxed">
                Actionable dashboards prioritize CSM activities by risk level and revenue potential, reducing time spent on data analysis by an average of 40-45 hours monthly.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-cyan-50 p-8 rounded-2xl border-2 border-slate-200 hover:border-cyan-400 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Explainable AI Insights</h3>
              <p className="text-slate-600 leading-relaxed">
                Models provide clear explanations for predictions, showing which KPIs drove each risk assessment and recommended actions—enabling human validation and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes - Conservative */}
      <section id="outcomes" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Expected Outcomes</h2>
            <p className="text-xl text-blue-200">
              Based on  customer deployments with $10M-$500M ARR
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Revenue Impact Potential</h3>
                <p className="text-blue-200 mb-6">
                  Actual results vary by customer size, industry, and CS maturity. These ranges represent observed outcomes across early deployments:
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Churn Reduction</h4>
                  <p className="text-blue-200 mb-2">
                    Customers typically prevent 10-20% of at-risk accounts from churning by detecting issues 90-180 days earlier than manual monitoring.
                  </p>
                  <div className="text-sm text-blue-300 italic">
                    Example: For $20M ARR with 20% baseline churn, preventing 15% of churn = $600K protected annually
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Expansion Revenue</h4>
                  <p className="text-blue-200 mb-2">
                    Expansion opportunity identification surfaces 2-3x more qualified leads compared to manual account reviews, with 30-40% conversion rates.
                  </p>
                  <div className="text-sm text-blue-300 italic">
                    Example: 25 expansion opportunities × 35% close rate × $50K avg deal = $437K incremental revenue
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">CSM Productivity</h4>
                  <p className="text-blue-200 mb-2">
                    Automation of data analysis and reporting saves 40-45 hours per CSM monthly, allowing focus on high-value customer interactions.
                  </p>
                  <div className="text-sm text-blue-300 italic">
                    Example: 20 CSMs × 43 hours/month × $75/hour = $64.5K monthly in realized efficiency
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mt-8">
                <h4 className="font-semibold mb-3">Cost Considerations</h4>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Platform licensing varies by account volume and feature set</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>4-6 week implementation with data integration support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Ongoing CSM training and playbook optimization included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>ROI typically realized within 3-6 months of deployment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">ROI Framework</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Your Annual ARR</label>
                  <input 
                    type="text" 
                    defaultValue="$20,000,000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Current Gross Churn Rate</label>
                  <input 
                    type="text" 
                    defaultValue="20%"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Number of CSMs</label>
                  <input 
                    type="text" 
                    defaultValue="20"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                
                <div className="pt-6 border-t border-white/20 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-blue-200 mb-1">Conservative Estimate (Year 1)</div>
                    <div className="text-3xl font-bold text-green-400">$1.0M - $1.5M</div>
                    <div className="text-xs text-blue-300 mt-1">
                      Churn reduction + Expansion + CSM efficiency
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-200 mb-1">Optimistic Estimate (Year 1)</div>
                    <div className="text-3xl font-bold text-cyan-400">$2.5M - $4.0M</div>
                    <div className="text-xs text-blue-300 mt-1">
                      Higher save rates + accelerated expansion
                    </div>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg p-4 mt-4">
                    <div className="text-sm font-semibold text-orange-300 mb-2">Contact for detailed ROI analysis</div>
                    <div className="text-xs text-blue-200">
                      We'll model your specific situation including current churn patterns, expansion potential, and team efficiency gains.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Contact Based */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Pricing Tailored to Your Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              CS Pulse pricing is based on your customer volume, feature requirements, and deployment model. We'll design a package that delivers measurable ROI for your specific situation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-10 border-2 border-blue-200">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What Influences Pricing</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Customer Account Volume</div>
                      <div className="text-sm text-slate-600">Pricing scales with number of accounts monitored (50, 150, 500, or unlimited)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Feature Set</div>
                      <div className="text-sm text-slate-600">Core health monitoring, expansion detection, automated playbooks, or full AI suite</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Integration Complexity</div>
                      <div className="text-sm text-slate-600">Number of data sources, custom connectors, and real-time sync requirements</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Support & Service Level</div>
                      <div className="text-sm text-slate-600">Email support, dedicated CSM, SLA guarantees, or white-glove implementation</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-cyan-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Custom Pricing</h3>
                <p className="text-slate-600 mb-6">
                  Share your details and we'll provide a detailed ROI analysis and pricing proposal tailored to your business.
                </p>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                  <input 
                    type="text" 
                    placeholder="Annual ARR" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                  <input 
                    type="text" 
                    placeholder="Number of Customer Accounts" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                  <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                    Get Custom Pricing
                  </button>
                </form>
                <div className="mt-4 text-center text-sm text-slate-500">
                  Or schedule a demo: <a href="mailto:sales@auctusai.ai" className="text-cyan-600 hover:underline">sales@auctusai.ai</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">4-6 Weeks</div>
                <div className="text-slate-600">Average implementation time</div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">3-6 Months</div>
                <div className="text-slate-600">Typical time to ROI realization</div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">Annual</div>
                <div className="text-slate-600">Flexible billing terms available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does the AI model improve over time?",
                a: "CS Pulse uses a continuous learning approach where your CSMs validate predictions (marking false positives/negatives) and confirm actual outcomes (churn, expansion, renewal). Every quarter, models retrain on this validated data, improving accuracy typically 15-20% over the first 12 months. You see baseline 65-70% accuracy in month 1, reaching 78-84% by month 12 as the system learns your specific customer patterns."
              },
              {
                q: "What does 'human-in-the-loop' mean in practice?",
                a: "The AI flags at-risk accounts and expansion opportunities, but your CSMs review each prediction before action. They can mark predictions as accurate or false alarms, add context the AI missed, and override recommendations when they have information the model doesn't. This validation feedback loop both improves model accuracy and ensures your team maintains control over customer relationships."
              },
              {
                q: "How accurate are the churn predictions?",
                a: "Churn prediction accuracy varies by customer based on data quality, business model complexity, and time since deployment. Initial models achieve 65-70% accuracy, improving to 78-84% after 12 months of human validation and retraining. We provide precision/recall metrics in your dashboard so you can calibrate trust levels and optimize intervention thresholds."
              },
              {
                q: "What data sources does CS Pulse integrate with?",
                a: "CS Pulse connects to your CRM (Salesforce, HubSpot), support systems (Zendesk, Intercom), product analytics (Mixpanel, Amplitude), billing platforms (Stripe, Chargebee), and communication tools (Slack, email). Implementation typically takes 4-6 weeks including data validation and initial model training."
              },
              {
                q: "How do you calculate ROI?",
                a: "We model ROI based on three validated components: (1) Churn reduction - accounts saved × average ARR × gross margin, (2) Expansion revenue - opportunities surfaced × close rate × average deal size, (3) CSM productivity - hours saved × loaded hourly cost. Actual results vary by company size and CS maturity. We provide a detailed ROI analysis during sales conversations using your specific metrics."
              },
              {
                q: "Can I customize the health scoring model?",
                a: "Yes. While we provide a proven 5-pillar framework with 59 KPIs, you can adjust pillar weights, add custom KPIs specific to your business, and set threshold levels for alerts. The AI learns which factors are most predictive for your customers and surfaces these insights in quarterly model reviews."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See CS Pulse in Action?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our AI-powered platform can help predict churn, identify expansion opportunities, and transform your customer success operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Request Demo
            </button>
            <button className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Get Custom ROI Analysis
            </button>
          </div>
          <div className="mt-8 text-cyan-100">
            4-6 week implementation • Quarterly model retraining • Validated results
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">AuctusAI</span>
              </div>
              <p className="text-sm">
                AI-powered customer success platform for revenue growth and retention.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-center">
            © 2025 AuctusAI. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  );
}
