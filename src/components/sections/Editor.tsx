import React, { useState, useRef } from 'react';
import { Play, Zap, GitBranch, Swords, Gift, MessageSquare, Timer, Crown } from 'lucide-react';

interface LogicNode {
  id: string;
  type: 'event' | 'condition' | 'action';
  title: string;
  detail: string;
  x: number;
  y: number;
}

interface Example {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: 'simple' | 'medio' | 'avanzado';
  description: string;
  nodes: LogicNode[];
  connections: { from: string; to: string; label?: string }[];
  json: object;
}

const EXAMPLES: Example[] = [
  {
    id: 'welcome',
    name: 'Bienvenida',
    icon: <MessageSquare size={12} />,
    category: 'simple',
    description: 'Mensaje de bienvenida al entrar',
    nodes: [
      { id: 'e1', type: 'event', title: 'Jugador Entra', detail: 'on_join', x: 40, y: 100 },
      { id: 'a1', type: 'action', title: 'Mensaje', detail: '"¡Bienvenido!"', x: 280, y: 100 },
    ],
    connections: [{ from: 'e1', to: 'a1' }],
    json: { trigger: "player_join", action: { type: "message", text: "¡Bienvenido!" } }
  },
  {
    id: 'daily',
    name: 'Daily Reward',
    icon: <Gift size={12} />,
    category: 'simple',
    description: 'Recompensa diaria con cooldown',
    nodes: [
      { id: 'e1', type: 'event', title: 'Comando', detail: '/daily', x: 40, y: 110 },
      { id: 'c1', type: 'condition', title: '¿Cooldown?', detail: '24 horas', x: 240, y: 110 },
      { id: 'a1', type: 'action', title: 'Dar Item', detail: 'Daily_Chest', x: 450, y: 60 },
      { id: 'a2', type: 'action', title: 'Error', detail: '"Espera..."', x: 450, y: 160 },
    ],
    connections: [
      { from: 'e1', to: 'c1' },
      { from: 'c1', to: 'a1', label: '✓' },
      { from: 'c1', to: 'a2', label: '✗' }
    ],
    json: { trigger: "command", command: "/daily", conditions: [{ type: "cooldown", duration: "24h" }], actions: { true: { give: "Daily_Chest" }, false: { message: "Espera 24h" } } }
  },
  {
    id: 'quest',
    name: 'Quest Básica',
    icon: <Swords size={12} />,
    category: 'medio',
    description: 'Misión con verificación de item',
    nodes: [
      { id: 'e1', type: 'event', title: 'Usa Comando', detail: '/quest', x: 30, y: 100 },
      { id: 'c1', type: 'condition', title: '¿Tiene llave?', detail: 'Golden_Key', x: 220, y: 100 },
      { id: 'a1', type: 'action', title: 'Teleport', detail: 'Dungeon', x: 420, y: 50 },
      { id: 'a2', type: 'action', title: 'Pista', detail: '"Busca cofres"', x: 420, y: 150 },
    ],
    connections: [
      { from: 'e1', to: 'c1' },
      { from: 'c1', to: 'a1', label: 'Sí' },
      { from: 'c1', to: 'a2', label: 'No' }
    ],
    json: { trigger: "command", command: "/quest", conditions: [{ type: "has_item", item: "Golden_Key" }], actions: { true: { teleport: "Dungeon" }, false: { message: "Busca la llave en cofres" } } }
  },
  {
    id: 'pvp',
    name: 'Arena PvP',
    icon: <Swords size={12} />,
    category: 'medio',
    description: 'Sistema de matchmaking',
    nodes: [
      { id: 'e1', type: 'event', title: 'Entra Zona', detail: 'PvP_Arena', x: 30, y: 100 },
      { id: 'c1', type: 'condition', title: '¿2 jugadores?', detail: 'queue >= 2', x: 210, y: 100 },
      { id: 'a1', type: 'action', title: 'Match!', detail: 'countdown: 5s', x: 400, y: 50 },
      { id: 'a2', type: 'action', title: 'Añadir Cola', detail: 'wait: 60s', x: 400, y: 150 },
    ],
    connections: [
      { from: 'e1', to: 'c1' },
      { from: 'c1', to: 'a1', label: '✓' },
      { from: 'c1', to: 'a2', label: '✗' }
    ],
    json: { trigger: "zone_enter", zone: "PvP_Arena", conditions: [{ type: "queue_size", min: 2 }], actions: { true: { start_match: true, countdown: 5 }, false: { add_queue: true } } }
  },
  {
    id: 'boss',
    name: 'Boss Fight',
    icon: <Crown size={12} />,
    category: 'avanzado',
    description: 'Evento de jefe con fases',
    nodes: [
      { id: 'e1', type: 'event', title: 'Timer', detail: 'cada 2h', x: 20, y: 60 },
      { id: 'c1', type: 'condition', title: '¿5+ online?', detail: 'players >= 5', x: 180, y: 60 },
      { id: 'a1', type: 'action', title: 'Anunciar', detail: 'Boss en 5min', x: 350, y: 20 },
      { id: 'e2', type: 'event', title: 'Boss Muere', detail: 'on_death', x: 20, y: 160 },
      { id: 'a2', type: 'action', title: 'Loot', detail: 'Epic_Items', x: 180, y: 160 },
      { id: 'a3', type: 'action', title: 'Broadcast', detail: '"¡Victoria!"', x: 350, y: 160 },
    ],
    connections: [
      { from: 'e1', to: 'c1' },
      { from: 'c1', to: 'a1', label: '✓' },
      { from: 'e2', to: 'a2' },
      { from: 'a2', to: 'a3' }
    ],
    json: { events: [{ trigger: "timer", interval: "2h", conditions: [{ online: ">=5" }], action: { announce: "Boss en 5min", spawn: "Dragon" } }, { trigger: "entity_death", entity: "Dragon", actions: [{ loot: "Epic_Items" }, { broadcast: "¡Victoria!" }] }] }
  },
  {
    id: 'economy',
    name: 'Economía',
    icon: <Timer size={12} />,
    category: 'avanzado',
    description: 'Sistema de tienda completo',
    nodes: [
      { id: 'e1', type: 'event', title: 'Clic NPC', detail: 'Merchant', x: 20, y: 40 },
      { id: 'a1', type: 'action', title: 'Abrir UI', detail: 'shop_menu', x: 180, y: 40 },
      { id: 'e2', type: 'event', title: 'Comprar', detail: 'on_purchase', x: 20, y: 130 },
      { id: 'c1', type: 'condition', title: '¿Dinero?', detail: 'gold >= price', x: 180, y: 130 },
      { id: 'a2', type: 'action', title: 'Dar Item', detail: 'purchased_item', x: 360, y: 90 },
      { id: 'a3', type: 'action', title: 'Error', detail: '"Sin fondos"', x: 360, y: 170 },
    ],
    connections: [
      { from: 'e1', to: 'a1' },
      { from: 'e2', to: 'c1' },
      { from: 'c1', to: 'a2', label: '✓' },
      { from: 'c1', to: 'a3', label: '✗' }
    ],
    json: { flows: [{ trigger: "npc_interact", npc: "Merchant", action: { open_ui: "shop_menu" } }, { trigger: "purchase_attempt", conditions: [{ gold: ">=price" }], actions: { true: { give_item: true, deduct_gold: true }, false: { message: "Sin fondos" } } }] }
  }
];

export const Editor: React.FC = () => {
  const [activeExample, setActiveExample] = useState<string>('daily');
  const [showJson, setShowJson] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  
  const example = EXAMPLES.find(e => e.id === activeExample) || EXAMPLES[0];

  const getNodeColors = (type: string) => {
    switch(type) {
      case 'event': return { border: '#4DA6FF', bg: '#4DA6FF', text: '#0B0F19' };
      case 'condition': return { border: '#A78BFA', bg: '#A78BFA', text: '#0B0F19' };
      case 'action': return { border: '#EDA333', bg: '#EDA333', text: '#0B0F19' };
      default: return { border: '#2A3B4C', bg: '#2A3B4C', text: '#fff' };
    }
  };

  const getNodePosition = (nodeId: string) => {
    const node = example.nodes.find(n => n.id === nodeId);
    return node ? { x: node.x + 70, y: node.y + 25 } : { x: 0, y: 0 };
  };

  const categoryColors = {
    simple: 'bg-green-500/20 text-green-400 border-green-500/30',
    medio: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    avanzado: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  return (
    <section id="editor" className="min-h-screen py-12 relative overflow-hidden scroll-mt-16 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0F1623] to-[#0B0F19]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header compacto */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4">
          <div>
            <div className="text-[#EDA333] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
              <GitBranch size={12}/> La Forja
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Editor Visual de Lógica</h2>
            <p className="text-[#8B9BB4] text-sm mt-1">Sin código. Conecta bloques y crea mecánicas.</p>
          </div>
          
          {/* Selector de ejemplos por categoría */}
          <div className="flex flex-wrap gap-1.5">
            {EXAMPLES.map((ex) => (
              <button
                key={ex.id}
                onClick={() => { setActiveExample(ex.id); setShowJson(false); }}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-medium flex items-center gap-1 transition-all border ${
                  activeExample === ex.id 
                    ? 'bg-[#EDA333] text-[#0B0F19] border-[#EDA333]' 
                    : `${categoryColors[ex.category]} hover:opacity-80`
                }`}
              >
                {ex.icon} {ex.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Canvas del editor - ocupa 2 columnas */}
          <div className="lg:col-span-2 relative bg-[#0B0F19] border border-[#2A3B4C] rounded-xl shadow-2xl overflow-hidden">
            {/* Header del editor */}
            <div className="h-9 border-b border-[#2A3B4C] bg-[#151D2C] flex items-center px-3 justify-between">
              <div className="flex gap-2 items-center">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="text-[9px] text-[#8B9BB4] font-mono ml-2">{example.id}.logic</span>
                <span className={`ml-2 px-1.5 py-0.5 rounded text-[8px] font-bold border ${categoryColors[example.category]}`}>
                  {example.category.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => setShowJson(!showJson)}
                  className={`px-2 py-0.5 rounded text-[9px] font-medium transition-all ${showJson ? 'bg-[#4DA6FF] text-[#0B0F19]' : 'bg-[#1A3A5A] text-[#4DA6FF]'}`}
                >
                  {showJson ? 'Visual' : 'JSON'}
                </button>
                <button className="p-1 hover:bg-[#2A3B4C] rounded text-[#27C93F]"><Play size={11}/></button>
              </div>
            </div>
            
            {/* Área del canvas */}
            <div 
              ref={canvasRef}
              className="relative h-[320px] overflow-auto cursor-grab active:cursor-grabbing"
              style={{ scrollBehavior: 'smooth' }}
            >
              {showJson ? (
                <div className="p-4 font-mono text-[11px] h-full">
                  <pre className="text-[#8B9BB4] whitespace-pre-wrap">
                    {JSON.stringify(example.json, null, 2)
                      .split('\n').map((line, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ 
                          __html: line
                            .replace(/"([^"]+)":/g, '<span style="color:#EDA333">"$1"</span>:')
                            .replace(/: "([^"]+)"/g, ': <span style="color:#4ADE80">"$1"</span>')
                            .replace(/: (\d+)/g, ': <span style="color:#60A5FA">$1</span>')
                            .replace(/: (true|false)/g, ': <span style="color:#A78BFA">$1</span>')
                        }} />
                      ))
                    }
                  </pre>
                </div>
              ) : (
                <div className="relative min-h-full min-w-[550px] p-4">
                  {/* Grid de fondo */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A3B4C_1px,transparent_1px),linear-gradient(to_bottom,#2A3B4C_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
                  
                  {/* Conexiones SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {example.connections.map((conn, idx) => {
                      const from = getNodePosition(conn.from);
                      const to = getNodePosition(conn.to);
                      const midX = (from.x + to.x) / 2;
                      return (
                        <g key={idx}>
                          <path 
                            d={`M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`}
                            stroke={hoveredNode === conn.from || hoveredNode === conn.to ? '#EDA333' : '#4A5B74'}
                            strokeWidth="2"
                            fill="none"
                            className="transition-all duration-300"
                          />
                          {conn.label && (
                            <text x={midX} y={(from.y + to.y) / 2 - 5} fill="#8B9BB4" fontSize="9" textAnchor="middle">
                              {conn.label}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                  
                  {/* Nodos */}
                  {example.nodes.map((node) => {
                    const colors = getNodeColors(node.type);
                    const isHovered = hoveredNode === node.id;
                    return (
                      <div 
                        key={node.id}
                        className={`absolute bg-[#151D2C] rounded-lg shadow-lg border-2 w-[140px] transition-all duration-200 cursor-pointer ${isHovered ? 'scale-105 shadow-xl z-20' : 'z-10'}`}
                        style={{ left: node.x, top: node.y, borderColor: isHovered ? colors.border : colors.border + '80' }}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div 
                          className="px-2 py-1 text-[8px] font-bold uppercase flex justify-between items-center rounded-t-md"
                          style={{ background: colors.bg, color: colors.text }}
                        >
                          {node.type === 'event' ? 'Evento' : node.type === 'condition' ? 'Condición' : 'Acción'}
                          <Zap size={8}/>
                        </div>
                        <div className="p-2">
                          <div className="text-[10px] text-white font-medium">{node.title}</div>
                          <div className="text-[9px] text-gray-400 truncate">{node.detail}</div>
                        </div>
                        {/* Conectores */}
                        {node.type !== 'action' && (
                          <div className="absolute right-[-5px] top-1/2 w-2.5 h-2.5 rounded-full -translate-y-1/2 border-2 border-[#151D2C]" style={{ background: colors.border }}></div>
                        )}
                        {node.type !== 'event' && (
                          <div className="absolute left-[-5px] top-1/2 w-2.5 h-2.5 rounded-full -translate-y-1/2 border-2 border-[#151D2C]" style={{ background: colors.border }}></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-3 py-2 border-t border-[#2A3B4C] bg-[#0B0F19]/80 flex items-center justify-between">
              <span className="text-[9px] text-[#8B9BB4]">{example.description}</span>
              <div className="flex gap-1.5">
                <span className="px-1.5 py-0.5 bg-[#4DA6FF]/20 text-[#4DA6FF] rounded text-[8px] flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#4DA6FF]"></div>Evento</span>
                <span className="px-1.5 py-0.5 bg-[#A78BFA]/20 text-[#A78BFA] rounded text-[8px] flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></div>Condición</span>
                <span className="px-1.5 py-0.5 bg-[#EDA333]/20 text-[#EDA333] rounded text-[8px] flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#EDA333]"></div>Acción</span>
              </div>
            </div>
          </div>
          
          {/* Panel lateral con info */}
          <div className="space-y-3">
            <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-xl p-4">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <Zap size={14} className="text-[#EDA333]" />
                ¿Cómo funciona?
              </h3>
              <ul className="space-y-2 text-[11px] text-[#8B9BB4]">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded bg-[#4DA6FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#4DA6FF] text-[8px] font-bold">1</span>
                  </div>
                  <span><strong className="text-white">Eventos</strong> disparan el flujo cuando algo ocurre</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded bg-[#A78BFA]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#A78BFA] text-[8px] font-bold">2</span>
                  </div>
                  <span><strong className="text-white">Condiciones</strong> verifican reglas (Sí/No)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded bg-[#EDA333]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#EDA333] text-[8px] font-bold">3</span>
                  </div>
                  <span><strong className="text-white">Acciones</strong> ejecutan cambios en el juego</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-xl p-4">
              <h3 className="text-white font-bold text-sm mb-2">Ejemplos por nivel</h3>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="px-1.5 py-0.5 rounded border bg-green-500/20 text-green-400 border-green-500/30">SIMPLE</span>
                  <span className="text-[#8B9BB4]">1-2 nodos, lógica básica</span>
                </div>
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="px-1.5 py-0.5 rounded border bg-yellow-500/20 text-yellow-400 border-yellow-500/30">MEDIO</span>
                  <span className="text-[#8B9BB4]">Condiciones y bifurcaciones</span>
                </div>
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="px-1.5 py-0.5 rounded border bg-red-500/20 text-red-400 border-red-500/30">AVANZADO</span>
                  <span className="text-[#8B9BB4]">Múltiples flujos, sistemas</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#EDA333]/10 to-[#EDA333]/5 border border-[#EDA333]/30 rounded-xl p-4">
              <p className="text-[11px] text-[#E0E6ED] leading-relaxed">
                <strong className="text-[#EDA333]">La Forja</strong> exporta tu lógica a JSON nativo de Hytale. 
                Comparte flujos con la comunidad en <strong className="text-white">Hytahub</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;
