import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Wave Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-cyan-300/20 to-blue-500/30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 300 Q 400 200 800 300 T 1600 300 L 1600 0 L 0 0 Z"
              fill="url(#wave-gradient)"
              initial={{ d: "M 0 300 Q 400 200 800 300 T 1600 300 L 1600 0 L 0 0 Z" }}
              animate={{ 
                d: [
                  "M 0 300 Q 400 200 800 300 T 1600 300 L 1600 0 L 0 0 Z",
                  "M 0 250 Q 400 300 800 250 T 1600 250 L 1600 0 L 0 0 Z",
                  "M 0 300 Q 400 200 800 300 T 1600 300 L 1600 0 L 0 0 Z"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 400 Q 500 300 1000 400 T 2000 400 L 2000 0 L 0 0 Z"
              fill="url(#wave-gradient)"
              opacity="0.5"
              initial={{ d: "M 0 400 Q 500 300 1000 400 T 2000 400 L 2000 0 L 0 0 Z" }}
              animate={{ 
                d: [
                  "M 0 400 Q 500 300 1000 400 T 2000 400 L 2000 0 L 0 0 Z",
                  "M 0 350 Q 500 400 1000 350 T 2000 350 L 2000 0 L 0 0 Z",
                  "M 0 400 Q 500 300 1000 400 T 2000 400 L 2000 0 L 0 0 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex items-center justify-center h-full px-6"
      >
        <div className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              流れるイノベーションで未来を創る
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-900/70 max-w-3xl mx-auto mb-12"
          >
            Bluewave Systemsは、お客様のビジネスニーズにシームレスに寄り添う最先端のテクノロジーソリューションを提供します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              ソリューションを見る
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 rounded-full hover:bg-white transition-colors border border-blue-200">
              お問い合わせ
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-blue-600 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
