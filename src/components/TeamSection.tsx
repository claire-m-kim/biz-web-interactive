import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Twitter } from 'lucide-react';
import Profile1 from '../assets/profile1.jpg';
import Profile2 from '../assets/profile2.jpg';
import Profile3 from '../assets/profile3.jpg';
import Profile4 from '../assets/profile4.jpg';

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const team = [
    {
      name: "田中 美咲",
      role: "最高経営責任者",
      image: Profile1
    },
    {
      name: "佐藤 健太",
      role: "最高技術責任者",
      image: Profile2
    },
    {
      name: "山田 愛子",
      role: "デザイン責任者",
      image: Profile3
    },
    {
      name: "鈴木 大輔",
      role: "エンジニアリング担当副社長",
      image: Profile4
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent">
            リーダーシップチーム
          </h2>
          <p className="text-xl text-blue-900/70 max-w-2xl mx-auto">
            Bluewave Systemsのイノベーションを推進するビジョナリーたちをご紹介します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Social Links Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-blue-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </button>
                </motion.div>
              </div>

              <div className="text-center">
                <h3 className="text-xl text-blue-900 mb-1">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
