import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cloud, Database, Cpu, Lock } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Cloud,
      title: "クラウドソリューション",
      description: "ビジネスの成長に合わせて拡張できるクラウドインフラストラクチャで、シームレスなパフォーマンスと信頼性を確保します。",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: Database,
      title: "データ分析",
      description: "先進的な分析と機械学習機能により、生データを実用的なインサイトに変換します。",
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      icon: Cpu,
      title: "AI統合",
      description: "人工知能の力を活用してプロセスを自動化し、意思決定を強化します。",
      gradient: "from-blue-600 to-indigo-400"
    },
    {
      icon: Lock,
      title: "サイバーセキュリティ",
      description: "デジタル資産を保護し、顧客の信頼を維持するための包括的なセキュリティソリューション。",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent">
            サービス
          </h2>
          <p className="text-xl text-blue-900/70 max-w-2xl mx-auto">
            お客様固有のビジネス課題に合わせた包括的なテクノロジーソリューション。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl from-blue-500/20 to-cyan-500/20" />
              
              <div className="relative bg-white rounded-3xl p-8 border border-transparent hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-xl">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-3xl" />
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl mb-4 text-blue-900">{service.title}</h3>
                  <p className="text-blue-900/70">{service.description}</p>

                  <button className="mt-6 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2">
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
