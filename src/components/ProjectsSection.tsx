import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';
import Project4 from '../assets/project4.jpg';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "エンタープライズクラウド移行",
      category: "クラウドインフラストラクチャ",
      description: "大手企業のクラウドファーストアーキテクチャへのシームレスな移行",
      image: Project1
    },
    {
      title: "AI駆動型分析プラットフォーム",
      category: "機械学習",
      description: "毎日数百万のデータポイントを処理するリアルタイムインサイトエンジン",
      image: Project2
    },
    {
      title: "グローバル決済ゲートウェイ",
      category: "フィンテック",
      description: "50カ国以上でセキュアで高スループットな決済処理",
      image: Project3
    },
    {
      title: "スマート製造IoT",
      category: "モノのインターネット",
      description: "ダウンタイムを45%削減するコネクテッドファクトリーソリューション",
      image: Project4
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-blue-50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent">
            注目のプロジェクト
          </h2>
          <p className="text-xl text-blue-900/70 max-w-2xl mx-auto">
            革新的なテクノロジーソリューションでビジネスを変革した実績をご覧ください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent flex items-end p-8"
                >
                  <div>
                    <div className="text-cyan-400 text-sm mb-2">{project.category}</div>
                    <h3 className="text-2xl text-white mb-2">{project.title}</h3>
                    <p className="text-white/80">{project.description}</p>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Info (visible when not hovered) */}
              <motion.div
                animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                className="p-6"
              >
                <div className="text-blue-600 text-sm mb-2">{project.category}</div>
                <h3 className="text-xl text-blue-900">{project.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
