import React, { useState } from 'react';
import { Code, FileCode, Shield, Zap, Server, Database, Globe, Eye, Edit3, Play, Save, Terminal } from 'lucide-react';

export const Infrastructure: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [yamlContent, setYamlContent] = useState({
    serverName: 'Mi Servidor RPG',
    image: 'hytale/official:latest',
    min: 0,
    max: 10,
    warmup: 'CRaC',
    worlds: ['lobby', 'survival', 'minigames']
  });

  return (
    <section id="infrastructure" className="min-h-screen py-8 bg-gradient-to-b from-[#0B0F19] to-[#0F1623] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16 flex items-center">
      {/* Líneas de conexión animadas */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4DA6FF" stopOpacity="0"/>
              <stop offset="50%" stopColor="#4DA6FF" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#4DA6FF" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="line-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EDA333" stopOpacity="0"/>
              <stop offset="50%" stopColor="#EDA333" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#EDA333" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Hilos horizontales */}
          <path d="M0 30% Q25% 25%, 50% 35% T100% 30%" fill="none" stroke="url(#line-gradient-1)" strokeWidth="1" className="animate-pulse"/>
          <path d="M0 70% Q30% 65%, 60% 75% T100% 70%" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1" style={{ animationDelay: '1s' }} className="animate-pulse"/>
          {/* Hilos verticales */}
          <path d="M20% 0 Q15% 30%, 25% 50% T20% 100%" fill="none" stroke="url(#line-gradient-1)" strokeWidth="0.5" style={{ animationDelay: '0.5s' }} className="animate-pulse"/>
          <path d="M80% 0 Q85% 40%, 75% 60% T80% 100%" fill="none" stroke="url(#line-gradient-2)" strokeWidth="0.5" style={{ animationDelay: '1.5s' }} className="animate-pulse"/>
        </svg>
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A3B4C15_1px,transparent_1px),linear-gradient(to_bottom,#2A3B4C15_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header compacto con toggle Edit/View */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A3A5A]/40 border border-[#2A3B4C] backdrop-blur-sm">
              <Code size={14} className="text-[#4DA6FF]" />
              <span className="text-[#4DA6FF] text-[10px] font-bold tracking-wide uppercase">For Devs and Admins</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Simplified infrastructure
            </h2>
          </div>
          
          {/* Toggle Edit/View Mode */}
          <div className="flex items-center gap-2 bg-[#151D2C] border border-[#2A3B4C] rounded-lg p-1">
            <button
              onClick={() => setIsEditMode(false)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                !isEditMode 
                  ? 'bg-[#4DA6FF] text-white shadow-md' 
                  : 'text-[#8B9BB4] hover:text-white'
              }`}
            >
              <Eye size={14} /> View
            </button>
            <button
              onClick={() => setIsEditMode(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                isEditMode 
                  ? 'bg-[#EDA333] text-[#0B0F19] shadow-md' 
                  : 'text-[#8B9BB4] hover:text-white'
              }`}
            >
              <Edit3 size={14} /> Edit
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-start">
          {/* Lado izquierdo - Código */}
          <div className="space-y-4">
            {/* Editor YAML con modo edit interactivo */}
            <div className="bg-[#0B0F19] border border-[#2A3B4C] rounded-xl overflow-hidden shadow-xl">
              <div className="bg-[#151D2C] px-3 py-2 flex items-center justify-between border-b border-[#2A3B4C]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <span className="text-[10px] text-[#8B9BB4] font-mono flex items-center gap-1">
                    <FileCode size={12} className="text-[#EDA333]" />
                    hypanel.yaml
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {isEditMode && (
                    <span className="text-[9px] text-[#EDA333] bg-[#EDA333]/10 px-2 py-0.5 rounded animate-pulse">
                      ● Editing
                    </span>
                  )}
                  <div className={`w-2 h-2 rounded-full ${isEditMode ? 'bg-[#EDA333]' : 'bg-[#4DA6FF]'} animate-pulse`}></div>
                </div>
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed">
                <div><span className="text-[#EDA333]">server:</span></div>
                <div className="pl-3 flex items-center gap-2">
                  <span className="text-[#8B9BB4]">name:</span>
                  {isEditMode ? (
                    <input 
                      type="text" 
                      value={yamlContent.serverName}
                      onChange={(e) => setYamlContent({...yamlContent, serverName: e.target.value})}
                      className="bg-[#1A3A5A]/50 border border-[#4DA6FF]/30 rounded px-2 py-0.5 text-[#4ADE80] text-[11px] focus:outline-none focus:border-[#EDA333] w-36"
                    />
                  ) : (
                    <span className="text-[#4ADE80]">"{yamlContent.serverName}"</span>
                  )}
                </div>
                <div className="pl-3"><span className="text-[#8B9BB4]">image:</span> <span className="text-[#4ADE80]">{yamlContent.image}</span></div>
                <div className="mt-2"><span className="text-[#EDA333]">scaling:</span></div>
                <div className="pl-3 flex items-center gap-2">
                  <span className="text-[#8B9BB4]">min:</span>
                  {isEditMode ? (
                    <input 
                      type="number" 
                      value={yamlContent.min}
                      onChange={(e) => setYamlContent({...yamlContent, min: parseInt(e.target.value) || 0})}
                      className="bg-[#1A3A5A]/50 border border-[#4DA6FF]/30 rounded px-2 py-0.5 text-[#60A5FA] text-[11px] focus:outline-none focus:border-[#EDA333] w-12"
                    />
                  ) : (
                    <span className="text-[#60A5FA]">{yamlContent.min}</span>
                  )}
                  <span className="text-[#6B7280]"># Sleeps when empty</span>
                </div>
                <div className="pl-3 flex items-center gap-2">
                  <span className="text-[#8B9BB4]">max:</span>
                  {isEditMode ? (
                    <input 
                      type="number" 
                      value={yamlContent.max}
                      onChange={(e) => setYamlContent({...yamlContent, max: parseInt(e.target.value) || 1})}
                      className="bg-[#1A3A5A]/50 border border-[#4DA6FF]/30 rounded px-2 py-0.5 text-[#60A5FA] text-[11px] focus:outline-none focus:border-[#EDA333] w-12"
                    />
                  ) : (
                    <span className="text-[#60A5FA]">{yamlContent.max}</span>
                  )}
                </div>
                <div className="pl-3"><span className="text-[#8B9BB4]">warmup:</span> <span className="text-[#4ADE80]">"{yamlContent.warmup}"</span> <span className="text-[#6B7280]"># &lt;1s</span></div>
                <div className="mt-2"><span className="text-[#EDA333]">worlds:</span></div>
                {yamlContent.worlds.map((world, i) => (
                  <div key={i} className="pl-3 flex items-center gap-2">
                    <span className="text-[#8B9BB4]">- name:</span>
                    {isEditMode ? (
                      <input 
                        type="text" 
                        value={world}
                        onChange={(e) => {
                          const newWorlds = [...yamlContent.worlds];
                          newWorlds[i] = e.target.value;
                          setYamlContent({...yamlContent, worlds: newWorlds});
                        }}
                        className="bg-[#1A3A5A]/50 border border-[#4DA6FF]/30 rounded px-2 py-0.5 text-[#4ADE80] text-[11px] focus:outline-none focus:border-[#EDA333] w-24"
                      />
                    ) : (
                      <span className="text-[#4ADE80]">"{world}"</span>
                    )}
                  </div>
                ))}
                {isEditMode && (
                  <button 
                    onClick={() => setYamlContent({...yamlContent, worlds: [...yamlContent.worlds, 'new-world']})}
                    className="mt-2 text-[10px] text-[#4DA6FF] hover:text-white flex items-center gap-1"
                  >
                    + Add world
                  </button>
                )}
              </div>
              {isEditMode && (
                <div className="bg-[#151D2C] px-3 py-2 border-t border-[#2A3B4C] flex items-center justify-between">
                  <span className="text-[9px] text-[#6B7280]">Changes apply automatically</span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-2 py-1 bg-[#4DA6FF]/20 hover:bg-[#4DA6FF]/30 text-[#4DA6FF] rounded text-[10px] transition-colors">
                      <Play size={10} /> Test
                    </button>
                    <button className="flex items-center gap-1 px-2 py-1 bg-[#4ADE80]/20 hover:bg-[#4ADE80]/30 text-[#4ADE80] rounded text-[10px] transition-colors">
                      <Save size={10} /> Save
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Editor Docker / Terminal */}
            <div className="bg-[#0B0F19] border border-[#2A3B4C] rounded-xl overflow-hidden shadow-xl">
              <div className="bg-[#151D2C] px-3 py-2 flex items-center justify-between border-b border-[#2A3B4C]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <span className="text-[10px] text-[#8B9BB4] font-mono flex items-center gap-1">
                    {isEditMode ? (
                      <><Terminal size={12} className="text-[#4ADE80]" /> terminal</>
                    ) : (
                      <><Database size={12} className="text-[#4DA6FF]" /> docker-compose.yml</>
                    )}
                  </span>
                </div>
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed">
                {isEditMode ? (
                  // Terminal simulado
                  <>
                    <div className="text-[#4ADE80]">$ hypanel deploy --watch</div>
                    <div className="text-[#8B9BB4] mt-1">→ Connecting to cluster...</div>
                    <div className="text-[#8B9BB4]">→ Validating hypanel.yaml...</div>
                    <div className="text-[#4DA6FF]">✓ Configuration valid</div>
                    <div className="text-[#8B9BB4]">→ Deploying {yamlContent.worlds.length} worlds...</div>
                    <div className="text-[#4ADE80] mt-1">✓ Deploy completed in 2.3s</div>
                    <div className="text-[#8B9BB4] mt-2 flex items-center gap-1">
                      <span className="animate-pulse">▌</span>
                    </div>
                  </>
                ) : (
                  // Docker compose
                  <>
                    <div><span className="text-[#EDA333]">services:</span></div>
                    <div className="pl-3"><span className="text-[#A78BFA]">hypanel:</span></div>
                    <div className="pl-6"><span className="text-[#8B9BB4]">image:</span> <span className="text-[#4ADE80]">hypanel/core:latest</span></div>
                    <div className="pl-6"><span className="text-[#8B9BB4]">ports:</span> <span className="text-[#4ADE80]">["3000:3000"]</span></div>
                    <div className="pl-6"><span className="text-[#8B9BB4]">environment:</span></div>
                    <div className="pl-9"><span className="text-[#8B9BB4]">- CLUSTER_MODE=</span><span className="text-[#4ADE80]">auto</span></div>
                    <div className="pl-3"><span className="text-[#A78BFA]">proxy:</span></div>
                    <div className="pl-6"><span className="text-[#8B9BB4]">image:</span> <span className="text-[#4ADE80]">hypanel/quic-proxy</span></div>
                    <div className="pl-6"><span className="text-[#8B9BB4]">ports:</span> <span className="text-[#4ADE80]">["25565:25565/udp"]</span></div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Lado derecho - Features */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-xl p-4 hover:border-[#4DA6FF]/50 transition-all group">
                <div className="w-10 h-10 bg-[#4DA6FF]/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Server size={20} className="text-[#4DA6FF]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Sleep Mode</h3>
                <p className="text-[#8B9BB4] text-[11px]">Servers sleep without players. Wake up in &lt;1s.</p>
              </div>
              
              <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-xl p-4 hover:border-[#F87171]/50 transition-all group">
                <div className="w-10 h-10 bg-[#F87171]/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Shield size={20} className="text-[#F87171]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Anti-DDoS</h3>
                <p className="text-[#8B9BB4] text-[11px]">UDP proxy filters attacks. No extra config.</p>
              </div>
              
              <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-xl p-4 hover:border-[#4ADE80]/50 transition-all group">
                <div className="w-10 h-10 bg-[#4ADE80]/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Zap size={20} className="text-[#4ADE80]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Auto-Scale</h3>
                <p className="text-[#8B9BB4] text-[11px]">Scales automatically based on real demand.</p>
              </div>
              
              <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-xl p-4 hover:border-[#A78BFA]/50 transition-all group">
                <div className="w-10 h-10 bg-[#A78BFA]/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Globe size={20} className="text-[#A78BFA]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Multi-Region</h3>
                <p className="text-[#8B9BB4] text-[11px]">Deploy in EU, US, Asia with one click.</p>
              </div>
            </div>
            
            {/* Métricas en tiempo real */}
            <div className="bg-gradient-to-r from-[#4DA6FF]/10 to-[#4DA6FF]/5 border border-[#4DA6FF]/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#4DA6FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-[#4DA6FF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm mb-1">Centralized Panel</h3>
                  <p className="text-[#8B9BB4] text-[11px] mb-2">Manage everything from one interface: deploys, configs, logs and real-time metrics.</p>
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="px-2 py-0.5 bg-[#4ADE80]/20 text-[#4ADE80] rounded">Live Logs</span>
                    <span className="px-2 py-0.5 bg-[#A78BFA]/20 text-[#A78BFA] rounded">Metrics</span>
                    <span className="px-2 py-0.5 bg-[#EDA333]/20 text-[#EDA333] rounded">Alerts</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stack Tecnológico */}
            <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-xl p-4">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <span className="text-[#EDA333]">→</span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-[#1A3A5A] rounded text-[10px] text-[#4DA6FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4DA6FF]"></span> Docker
                </span>
                <span className="px-2.5 py-1 bg-[#1A3A5A] rounded text-[10px] text-[#4DA6FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4DA6FF]"></span> QUIC Proxy
                </span>
                <span className="px-2.5 py-1 bg-[#1A3A5A] rounded text-[10px] text-[#4DA6FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span> CRaC (JVM)
                </span>
                <span className="px-2.5 py-1 bg-[#1A3A5A] rounded text-[10px] text-[#4DA6FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span> Kubernetes
                </span>
                <span className="px-2.5 py-1 bg-[#1A3A5A] rounded text-[10px] text-[#4DA6FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F87171]"></span> Redis
                </span>
                <span className="px-2.5 py-1 bg-[#1A3A5A] rounded text-[10px] text-[#4DA6FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EDA333]"></span> Rust
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
