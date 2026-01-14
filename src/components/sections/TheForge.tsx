import React, { useState, useRef, useEffect } from 'react';
import { GitBranch, Terminal, Radio, RefreshCw, Cpu, Zap, Code, Copy, Check, GripVertical, MessageSquare, Gift, Swords, Crown } from 'lucide-react';

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
      className={`node-draggable absolute bg-gradient-to-r ${style.bg} ${style.border} border rounded-lg p-2 sm:p-3 w-[110px] sm:w-[130px] cursor-grab active:cursor-grabbing select-none transition-shadow ${isDragging ? 'shadow-lg shadow-black/50 z-20' : 'hover:shadow-md'}`}
      style={{ left: node.x, top: node.y }}
      onMouseDown={handleMouseDown}
    >
      <div className="flex items-center justify-between mb-0.5 sm:mb-1">
        <div className={`text-[8px] sm:text-[9px] ${style.text} font-bold`}>{node.type.toUpperCase()}</div>
        <GripVertical size={10} className="text-muted sm:w-3 sm:h-3" />
      </div>
      <div className="text-white text-[10px] sm:text-xs font-bold leading-tight">{node.title}</div>
      <div className="text-[#8B9BB4] text-[9px] sm:text-[10px] leading-tight">{node.detail}</div>
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
  const examplesRef = useRef<HTMLDivElement>(null);
  const [isDraggingCanvas, setIsDraggingCanvas] = useState(false);
  const [isDraggingExamples, setIsDraggingExamples] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

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

  // Canvas drag to scroll handlers
  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    // Only start canvas drag if clicking on the background, not on nodes
    if ((e.target as HTMLElement).closest('.node-draggable')) return;
    
    setIsDraggingCanvas(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingCanvas) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleCanvasMouseUp = () => {
    setIsDraggingCanvas(false);
  };

  const handleCanvasMouseLeave = () => {
    setIsDraggingCanvas(false);
  };

  // Touch handlers for mobile
  const handleCanvasTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.node-draggable')) return;
    
    setIsDraggingCanvas(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleCanvasTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingCanvas) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleCanvasTouchEnd = () => {
    setIsDraggingCanvas(false);
  };

  // Examples bar drag handlers
  const handleExamplesMouseDown = (e: React.MouseEvent) => {
    setIsDraggingExamples(true);
    setHasDragged(false);
    setStartX(e.pageX - (examplesRef.current?.offsetLeft || 0));
    setScrollLeft(examplesRef.current?.scrollLeft || 0);
  };

  const handleExamplesMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingExamples) return;
    e.preventDefault();
    const x = e.pageX - (examplesRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    if (examplesRef.current) {
      examplesRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleExamplesMouseUp = () => {
    setIsDraggingExamples(false);
  };

  const handleExamplesTouchStart = (e: React.TouchEvent) => {
    setIsDraggingExamples(true);
    setHasDragged(false);
    setStartX(e.touches[0].pageX - (examplesRef.current?.offsetLeft || 0));
    setScrollLeft(examplesRef.current?.scrollLeft || 0);
  };

  const handleExamplesTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingExamples) return;
    const x = e.touches[0].pageX - (examplesRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    if (examplesRef.current) {
      examplesRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleExamplesTouchEnd = () => {
    setIsDraggingExamples(false);
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

  // Dimensiones de los nodos
  const NODE_WIDTH = 130;
  const NODE_HEIGHT = 80;

  // Determinar el lado de salida basado en la posición relativa de los nodos
  const getConnectionSide = (fromNode: NodeData, toNode: NodeData): 'right' | 'left' | 'bottom' | 'top' => {
    const dx = (toNode.x + NODE_WIDTH / 2) - (fromNode.x + NODE_WIDTH / 2);
    const dy = (toNode.y + NODE_HEIGHT / 2) - (fromNode.y + NODE_HEIGHT / 2);
    
    if (Math.abs(dx) >= Math.abs(dy)) {
      return dx >= 0 ? 'right' : 'left';
    } else {
      return dy >= 0 ? 'bottom' : 'top';
    }
  };

  // Calcular el offset inteligente basado en la posición del nodo destino
  const getSmartOffset = (nodeId: string, isOutgoing: boolean, targetId: string, side: 'right' | 'left' | 'bottom' | 'top') => {
    const currentNode = nodes.find(n => n.id === nodeId);
    const targetNode = nodes.find(n => n.id === targetId);
    if (!currentNode || !targetNode) return 0;
    
    // Obtener todas las conexiones del mismo nodo que salen/entran por el mismo lado
    const sameSideConnections = connections.filter(c => {
      const connNodeId = isOutgoing ? c.from : c.to;
      const otherNodeId = isOutgoing ? c.to : c.from;
      
      if (connNodeId !== nodeId) return false;
      
      const otherNode = nodes.find(n => n.id === otherNodeId);
      if (!otherNode) return false;
      
      const connSide = isOutgoing 
        ? getConnectionSide(currentNode, otherNode)
        : getConnectionSide(otherNode, currentNode);
      
      return connSide === side;
    });
    
    if (sameSideConnections.length <= 1) return 0;
    
    // Obtener info de posición de todos los nodos destino de las conexiones del mismo lado
    const connectionInfos = sameSideConnections.map(c => {
      const otherId = isOutgoing ? c.to : c.from;
      const otherNode = nodes.find(n => n.id === otherId);
      if (!otherNode) return { id: otherId, pos: 0 };
      
      // Para lados horizontales (right/left), ordenar por posición Y
      // Para lados verticales (top/bottom), ordenar por posición X
      if (side === 'right' || side === 'left') {
        return { id: otherId, pos: otherNode.y };
      } else {
        return { id: otherId, pos: otherNode.x };
      }
    });
    
    // Ordenar por posición
    connectionInfos.sort((a, b) => a.pos - b.pos);
    
    // Encontrar el índice de esta conexión en el array ordenado
    const index = connectionInfos.findIndex(info => info.id === targetId);
    
    // Distribuir las conexiones uniformemente
    const spacing = 16;
    const totalSpan = (sameSideConnections.length - 1) * spacing;
    return (index * spacing) - (totalSpan / 2);
  };

  // Calculate connection paths with smart routing
  const getConnectionPath = (fromId: string, toId: string) => {
    const fromNode = nodes.find(n => n.id === fromId);
    const toNode = nodes.find(n => n.id === toId);
    if (!fromNode || !toNode) return '';
    
    // Centros de los nodos
    const fromCenterX = fromNode.x + NODE_WIDTH / 2;
    const fromCenterY = fromNode.y + NODE_HEIGHT / 2;
    const toCenterX = toNode.x + NODE_WIDTH / 2;
    const toCenterY = toNode.y + NODE_HEIGHT / 2;
    
    // Diferencias
    const dx = toCenterX - fromCenterX;
    const dy = toCenterY - fromCenterY;
    
    // Determinar los lados de salida y entrada
    const outSide = getConnectionSide(fromNode, toNode);
    const inSide = getConnectionSide(toNode, fromNode);
    
    // Calcular offsets inteligentes basados en la posición del destino
    const outOffset = getSmartOffset(fromId, true, toId, outSide);
    const inOffset = getSmartOffset(toId, false, fromId, inSide);
    
    // Determinar el mejor lado de salida y entrada basado en la posición relativa
    let startX: number, startY: number, endX: number, endY: number;
    let controlOffset: number;
    
    // Si el nodo destino está principalmente a la derecha
    if (Math.abs(dx) >= Math.abs(dy)) {
      if (dx >= 0) {
        // Destino a la derecha: salir por derecha, entrar por izquierda
        startX = fromNode.x + NODE_WIDTH;
        startY = fromNode.y + NODE_HEIGHT / 2 + outOffset;
        endX = toNode.x;
        endY = toNode.y + NODE_HEIGHT / 2 + inOffset;
        controlOffset = Math.max(40, Math.abs(dx) * 0.4);
        
        return `M ${startX} ${startY} C ${startX + controlOffset} ${startY}, ${endX - controlOffset} ${endY}, ${endX} ${endY}`;
      } else {
        // Destino a la izquierda: salir por izquierda, entrar por derecha
        startX = fromNode.x;
        startY = fromNode.y + NODE_HEIGHT / 2 + outOffset;
        endX = toNode.x + NODE_WIDTH;
        endY = toNode.y + NODE_HEIGHT / 2 + inOffset;
        controlOffset = Math.max(40, Math.abs(dx) * 0.4);
        
        return `M ${startX} ${startY} C ${startX - controlOffset} ${startY}, ${endX + controlOffset} ${endY}, ${endX} ${endY}`;
      }
    } else {
      // El nodo destino está principalmente arriba o abajo
      if (dy >= 0) {
        // Destino abajo: salir por abajo, entrar por arriba
        startX = fromNode.x + NODE_WIDTH / 2 + outOffset;
        startY = fromNode.y + NODE_HEIGHT;
        endX = toNode.x + NODE_WIDTH / 2 + inOffset;
        endY = toNode.y;
        controlOffset = Math.max(30, Math.abs(dy) * 0.4);
        
        return `M ${startX} ${startY} C ${startX} ${startY + controlOffset}, ${endX} ${endY - controlOffset}, ${endX} ${endY}`;
      } else {
        // Destino arriba: salir por arriba, entrar por abajo
        startX = fromNode.x + NODE_WIDTH / 2 + outOffset;
        startY = fromNode.y;
        endX = toNode.x + NODE_WIDTH / 2 + inOffset;
        endY = toNode.y + NODE_HEIGHT;
        controlOffset = Math.max(30, Math.abs(dy) * 0.4);
        
        return `M ${startX} ${startY} C ${startX} ${startY - controlOffset}, ${endX} ${endY + controlOffset}, ${endX} ${endY}`;
      }
    }
  };

  return (
    <section id="the-forge" className="py-20 bg-gradient-to-b from-[#0F1623] to-[#0B0F19] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(237,163,51,0.05),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-sm mb-6">
            <GitBranch size={16} className="text-orange-400" />
            <span className="text-orange-400 text-xs font-bold tracking-wide uppercase">The Logic Bridge</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Forge: Event & Logic Bridge
          </h2>
          
          <p className="text-[#8B9BB4] text-lg max-w-3xl mx-auto mb-4">
            Connect the web to the game world. A visual editor that generates standard JSON configurations to trigger in-game events, tutorials, and server actions in real-time via the HyCore agent.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-[#EDA333]/10 border border-[#2A3B4C] rounded-xl">
            <Terminal size={16} className="text-orange-400" />
            <span className="text-[#8B9BB4] text-sm">Visual orchestration for <strong className="text-white">real-time game loops</strong>.</span>
          </div>
        </div>

        {/* Main Content Grid - 7/5 Layout like ContentOS */}
        <div className="grid lg:grid-cols-12 gap-8 items-start lg:items-center">
          
          {/* Left: Visual Workflow Editor (Large Card) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-2xl py-10 px-8 relative overflow-hidden group hover:border-orange-500/30 transition-all">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Terminal size={24} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Visual Workflow Editor</h3>
                  <p className="text-[#8B9BB4] text-sm">Bridge game events with server actions</p>
                </div>
              </div>

              {/* Node Editor Container */}
              <div className="bg-[#080B12] border border-[#2A3B4C] rounded-xl overflow-hidden shadow-2xl mb-6">
                {/* Editor Header */}
                <div className="bg-[#151D2C] px-4 py-3 flex items-center justify-between border-b border-[#2A3B4C]">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <span className="text-[#8B9BB4] text-xs font-mono">workflow_designer.json</span>
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
                      <Code size={10} /> {showJson ? 'Nodes' : 'JSON'}
                    </button>
                  </div>
                </div>

                {/* Editor Canvas or JSON View */}
                {!showJson ? (
                  <div 
                    ref={containerRef}
                    className={`relative h-[280px] bg-[#080B12] overflow-y-auto overflow-x-hidden roadmap-scrollbar ${isDraggingCanvas ? 'cursor-grabbing' : 'cursor-grab'}`}
                    style={{
                      backgroundImage: 'radial-gradient(circle, #2A3B4C 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                      WebkitOverflowScrolling: 'touch'
                    }}
                    onMouseDown={handleCanvasMouseDown}
                    onMouseMove={handleCanvasMouseMove}
                    onMouseUp={handleCanvasMouseUp}
                    onMouseLeave={handleCanvasMouseLeave}
                    onTouchStart={handleCanvasTouchStart}
                    onTouchMove={handleCanvasTouchMove}
                    onTouchEnd={handleCanvasTouchEnd}
                  >
                    <div className="relative min-w-[520px] w-max h-full select-none">
                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minWidth: '520px' }}>
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
                  </div>
                ) : (
                  <div className="h-[280px] bg-[#080B12] p-4 overflow-auto roadmap-scrollbar">
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
                  <div 
                    ref={examplesRef}
                    className={`flex items-center gap-2 overflow-x-auto scrollbar-none select-none ${isDraggingExamples ? 'cursor-grabbing' : 'cursor-grab'}`}
                    onMouseDown={handleExamplesMouseDown}
                    onMouseMove={handleExamplesMouseMove}
                    onMouseUp={handleExamplesMouseUp}
                    onMouseLeave={handleExamplesMouseUp}
                    onTouchStart={handleExamplesTouchStart}
                    onTouchMove={handleExamplesTouchMove}
                    onTouchEnd={handleExamplesTouchEnd}
                  >
                    <span className="text-[#8B9BB4] text-xs whitespace-nowrap flex-shrink-0">Examples:</span>
                    {EXAMPLES.map((ex) => (
                      <button
                        key={ex.id}
                        onClick={() => !hasDragged && setActiveExample(ex.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 cursor-pointer ${
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

              {/* Infrastructure Logic Bridge */}
              <div className="pt-6 border-t border-[#2A3B4C]/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Infrastructure Logic Bridge</h4>
                    <p className="text-[#8B9BB4] text-sm leading-relaxed">
                      Transform gameplay interactions into infrastructure commands. In Hytale, a node says <span className="text-green-400 font-semibold">"Kill Boss"</span>; in The Forge, it connects to HyCore to <span className="text-orange-400 font-semibold">"Spin down the instance"</span> and save costs instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Feature 1: The Technical Bridge */}
            <div className="bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-xl p-6 hover:border-orange-500/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GitBranch size={20} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">1. The Technical Bridge</h3>
                  <p className="text-[#8B9BB4] text-sm leading-relaxed">
                    Web ↔ Agent ↔ Game. The Forge acts as a communication layer. It sends instructions from the dashboard to the Agent inside the container, which then triggers the Mod Toolkit in-game.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2: Real-Time Sync */}
            <div className="bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-xl p-6 hover:border-blue-500/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Radio size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">2. Real-Time Sync</h3>
                  <p className="text-[#8B9BB4] text-sm leading-relaxed">
                    Live updates without restarts. Edit a JSON parameter or event trigger in the web editor and see the changes reflect instantly inside the active game instance.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: Versionable Event Templates */}
            <div className="bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-xl p-6 hover:border-purple-500/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <RefreshCw size={20} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">3. Versionable Event Templates</h3>
                  <p className="text-[#8B9BB4] text-sm leading-relaxed">
                    Reusable JSON logic. Create tutorials, cinematics, or game loops once, save them as standardized JSON templates, and deploy them across multiple instances or versions.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4: Native Compatibility */}
            <div className="bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-xl p-6 hover:border-green-500/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Cpu size={20} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">4. Native Compatibility</h3>
                  <p className="text-[#8B9BB4] text-sm leading-relaxed">
                    Built on Hytale's standards. We don't replace the game's native node system; we utilize it. The Forge orchestrates when and how those native nodes are triggered from the cloud.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TheForge;