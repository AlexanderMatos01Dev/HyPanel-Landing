import React, { useState, useRef, useEffect } from 'react';
import { Palette, Play, FileJson, Code, Copy, Zap, GitBranch, Swords, Gift, MessageSquare, Crown, GripVertical, X, Check } from 'lucide-react';

interface NodeData {
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
  description: string;
  nodes: NodeData[];
  connections: { from: string; to: string }[];
}

const EXAMPLES: Example[] = [
  { 
    id: 'welcome', 
    name: 'Welcome', 
    icon: <MessageSquare size={12} />, 
    description: 'Welcome message on join',
    nodes: [
      { id: 'n1', type: 'event', title: 'Player Joins', detail: 'on_join', x: 30, y: 120 },
      { id: 'n2', type: 'condition', title: 'First time?', detail: 'is_new_player', x: 200, y: 120 },
      { id: 'n3', type: 'action', title: 'Tutorial', detail: 'start_tutorial', x: 370, y: 60 },
      { id: 'n4', type: 'action', title: 'Welcome Back', detail: '"Welcome back!"', x: 370, y: 180 },
    ],
    connections: [{ from: 'n1', to: 'n2' }, { from: 'n2', to: 'n3' }, { from: 'n2', to: 'n4' }]
  },
  { 
    id: 'daily', 
    name: 'Daily Reward', 
    icon: <Gift size={12} />, 
    description: 'Daily reward with cooldown',
    nodes: [
      { id: 'n1', type: 'event', title: 'Command', detail: '/daily', x: 30, y: 120 },
      { id: 'n2', type: 'condition', title: 'Cooldown?', detail: '24h passed', x: 200, y: 120 },
      { id: 'n3', type: 'action', title: 'Give Coins', detail: '+100 coins', x: 370, y: 60 },
      { id: 'n4', type: 'action', title: 'Deny', detail: '"Wait {time}"', x: 370, y: 180 },
    ],
    connections: [{ from: 'n1', to: 'n2' }, { from: 'n2', to: 'n3' }, { from: 'n2', to: 'n4' }]
  },
  { 
    id: 'quest', 
    name: 'Basic Quest', 
    icon: <Swords size={12} />, 
    description: 'Mission with item check',
    nodes: [
      { id: 'n1', type: 'event', title: 'NPC Talk', detail: 'quest_giver', x: 30, y: 120 },
      { id: 'n2', type: 'condition', title: 'Has Items?', detail: '10x wood', x: 200, y: 120 },
      { id: 'n3', type: 'action', title: 'Complete', detail: '+50 XP', x: 370, y: 60 },
      { id: 'n4', type: 'action', title: 'Hint', detail: '"Need 10 wood"', x: 370, y: 180 },
    ],
    connections: [{ from: 'n1', to: 'n2' }, { from: 'n2', to: 'n3' }, { from: 'n2', to: 'n4' }]
  },
  { 
    id: 'boss', 
    name: 'Boss Fight', 
    icon: <Crown size={12} />, 
    description: 'Boss event with phases',
    nodes: [
      { id: 'n1', type: 'event', title: 'Enter Zone', detail: 'boss_arena', x: 30, y: 90 },
      { id: 'n2', type: 'action', title: 'Spawn Boss', detail: 'dragon_lord', x: 200, y: 90 },
      { id: 'n3', type: 'condition', title: 'HP < 50%?', detail: 'boss.health', x: 370, y: 90 },
      { id: 'n4', type: 'action', title: 'Phase 2', detail: 'rage_mode', x: 200, y: 180 },
    ],
    connections: [{ from: 'n1', to: 'n2' }, { from: 'n2', to: 'n3' }, { from: 'n3', to: 'n4' }]
  },
];

const DraggableNode: React.FC<{
  node: NodeData;
  onDrag: (id: string, x: number, y: number) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}> = ({ node, onDrag, containerRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  
  const colors = {
    event: { bg: 'from-green-500/20 to-green-500/10', border: 'border-green-500/40', text: 'text-green-400' },
    condition: { bg: 'from-yellow-500/20 to-yellow-500/10', border: 'border-yellow-500/40', text: 'text-yellow-400' },
    action: { bg: 'from-blue-500/20 to-blue-500/10', border: 'border-blue-500/40', text: 'text-blue-400' },
  };
  
  const style = colors[node.type];

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const startX = e.clientX;
    const startY = e.clientY;
    const startNodeX = node.x;
    const startNodeY = node.y;
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;
      
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      
      const newX = Math.max(0, Math.min(containerRect.width - 130, startNodeX + deltaX));
      const newY = Math.max(0, Math.min(containerRect.height - 80, startNodeY + deltaY));
      
      onDrag(node.id, newX, newY);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={nodeRef}
      className={`absolute bg-gradient-to-r ${style.bg} ${style.border} border rounded-lg p-3 w-[130px] cursor-grab active:cursor-grabbing select-none transition-shadow ${isDragging ? 'shadow-lg shadow-black/50 z-20' : 'hover:shadow-md'}`}
      style={{ left: node.x, top: node.y }}
      onMouseDown={handleMouseDown}
    >
      <div className="flex items-center justify-between mb-1">
        <div className={`text-[9px] ${style.text} font-bold`}>{node.type.toUpperCase()}</div>
        <GripVertical size={12} className="text-[#4A5B74]" />
      </div>
      <div className="text-white text-xs font-bold">{node.title}</div>
      <div className="text-[#8B9BB4] text-[10px]">{node.detail}</div>
    </div>
  );
};

export const TheForge: React.FC = () => {
  const [activeExample, setActiveExample] = useState('welcome');
  const [nodes, setNodes] = useState<NodeData[]>(EXAMPLES[0].nodes);
  const [connections, setConnections] = useState(EXAMPLES[0].connections);
  const [showJson, setShowJson] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const example = EXAMPLES.find(e => e.id === activeExample);
    if (example) {
      setNodes(example.nodes.map(n => ({ ...n })));
      setConnections(example.connections);
    }
  }, [activeExample]);

  const handleDrag = (id: string, x: number, y: number) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, x, y } : n));
  };

  const generateJson = () => {
    const example = EXAMPLES.find(e => e.id === activeExample);
    return JSON.stringify({
      name: example?.name || 'Custom Logic',
      type: 'forge_logic',
      nodes: nodes.map(n => ({
        id: n.id,
        type: n.type,
        action: n.detail,
        position: { x: Math.round(n.x), y: Math.round(n.y) }
      })),
      connections: connections.map(c => ({ from: c.from, to: c.to }))
    }, null, 2);
  };

  const copyJson = () => {
    navigator.clipboard.writeText(generateJson());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate connection paths
  const getConnectionPath = (fromId: string, toId: string) => {
    const fromNode = nodes.find(n => n.id === fromId);
    const toNode = nodes.find(n => n.id === toId);
    if (!fromNode || !toNode) return '';
    
    const startX = fromNode.x + 130;
    const startY = fromNode.y + 40;
    const endX = toNode.x;
    const endY = toNode.y + 40;
    const midX = (startX + endX) / 2;
    
    return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
  };

  return (
    <section id="the-forge" className="py-20 bg-gradient-to-b from-[#0F1623] to-[#0B0F19] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(237,163,51,0.05),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-sm mb-4">
            <Palette size={16} className="text-orange-400" />
            <span className="text-orange-400 text-xs font-bold tracking-wide uppercase">How do I create things without being a programmer?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Forge: Visual Logic Editor
          </h2>
          <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto">
            Create quests, AI and game systems with nodes. No code, no manual JSON files. <span className="text-orange-400">Try dragging the nodes!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Visual Editor Preview */}
          <div className="relative">
            <div className="bg-[#0B0F19] border border-[#2A3B4C] rounded-2xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="bg-[#151D2C] px-4 py-3 flex items-center justify-between border-b border-[#2A3B4C]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <span className="text-[#8B9BB4] text-xs font-mono">The Forge — Visual Editor</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowJson(!showJson)}
                    className={`px-2 py-1 text-[10px] font-bold rounded flex items-center gap-1 transition-colors ${
                      showJson 
                        ? 'bg-[#EDA333] text-[#0B0F19]' 
                        : 'bg-[#EDA333]/20 text-[#EDA333] hover:bg-[#EDA333]/30'
                    }`}
                  >
                    <Code size={10} /> {showJson ? 'Hide JSON' : 'View JSON'}
                  </button>
                </div>
              </div>

              {/* Editor Canvas or JSON View */}
              {!showJson ? (
                <div 
                  ref={containerRef}
                  className="relative h-[300px] bg-[#080B12]" 
                  style={{
                    backgroundImage: 'radial-gradient(circle, #2A3B4C 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                >
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {connections.map((conn, i) => (
                      <path 
                        key={i}
                        d={getConnectionPath(conn.from, conn.to)}
                        fill="none" 
                        stroke="#4ADE80" 
                        strokeWidth="2" 
                        strokeDasharray="4"
                        className="transition-all duration-200"
                      />
                    ))}
                  </svg>

                  {/* Draggable Nodes */}
                  {nodes.map(node => (
                    <DraggableNode 
                      key={node.id} 
                      node={node} 
                      onDrag={handleDrag}
                      containerRef={containerRef as React.RefObject<HTMLDivElement>}
                    />
                  ))}
                </div>
              ) : (
                <div className="h-[300px] bg-[#080B12] p-4 overflow-auto">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#8B9BB4] text-xs font-mono">Generated JSON</span>
                    <button 
                      onClick={copyJson}
                      className="px-2 py-1 bg-[#4DA6FF]/20 text-[#4DA6FF] text-[10px] font-bold rounded flex items-center gap-1 hover:bg-[#4DA6FF]/30 transition-colors"
                    >
                      {copied ? <><Check size={10} /> Copied!</> : <><Copy size={10} /> Copy</>}
                    </button>
                  </div>
                  <pre className="text-[11px] text-green-400 font-mono leading-relaxed">
                    {generateJson()}
                  </pre>
                </div>
              )}

              {/* Example Selector */}
              <div className="bg-[#151D2C] px-4 py-3 border-t border-[#2A3B4C]">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className="text-[#8B9BB4] text-xs">Examples:</span>
                  {EXAMPLES.map((ex) => (
                    <button
                      key={ex.id}
                      onClick={() => setActiveExample(ex.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                        activeExample === ex.id
                          ? 'bg-[#EDA333] text-[#0B0F19]'
                          : 'bg-[#0B0F19] text-[#8B9BB4] hover:text-white'
                      }`}
                    >
                      {ex.icon} {ex.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <GitBranch size={24} className="text-orange-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Intuitive visual editor</h4>
                <p className="text-[#8B9BB4] text-sm">Drag, connect and configure. Design complex logic as if you were drawing a flowchart.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileJson size={24} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Automatic valid JSON generation</h4>
                <p className="text-[#8B9BB4] text-sm">The Forge exports Hytale-compatible format automatically. Click "View JSON" to see it in action.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Copy size={24} className="text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Reusable templates</h4>
                <p className="text-[#8B9BB4] text-sm">Save and share your logic modules. Create once, use in all your projects.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap size={24} className="text-green-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Direct server integration</h4>
                <p className="text-[#8B9BB4] text-sm">Changes deploy automatically. Test in real time without leaving the editor.</p>
              </div>
            </div>

            {/* What can you create */}
            <div className="p-4 bg-[#0F1623] border border-[#2A3B4C] rounded-xl">
              <h5 className="text-white font-bold text-sm mb-3">What can you create?</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Quests</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">NPC AI</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">Events</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full">Dialogues</span>
                <span className="px-3 py-1 bg-[#EDA333]/10 text-[#EDA333] text-xs rounded-full">Economies</span>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-full">Combos</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">Puzzles</span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-xs rounded-full">And more...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheForge;
