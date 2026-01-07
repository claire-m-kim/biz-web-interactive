import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Waves, Zap, Shield, Sparkles } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Waves,
      title: "流動的イノベーション",
      description: "ビジネスの進化に合わせて適応するソリューション"
    },
    {
      icon: Zap,
      title: "高速パフォーマンス",
      description: "即座に結果を出す最適化されたシステム"
    },
    {
      icon: Shield,
      title: "エンタープライズセキュリティ",
      description: "大切なデータを守る軍事レベルの保護"
    },
    {
      icon: Sparkles,
      title: "未来志向",
      description: "明日の課題に対応する先進テクノロジー"
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent">
            私たちのビジョン
          </h2>
          <p className="text-xl text-blue-900/70 max-w-3xl mx-auto">
            テクノロジーは海の波のように自然で力強くあるべきだと私たちは信じています。
            継続的で、適応性があり、止まることのない力。Bluewave Systemsは、
            エレガントで堅牢なソリューションでビジネスを変革します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-blue-900">{feature.title}</h3>
                <p className="text-blue-900/60">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
