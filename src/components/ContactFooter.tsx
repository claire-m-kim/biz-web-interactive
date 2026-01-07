import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

export function ContactFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <footer ref={ref} className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-black">
      {/* Animated Background Wave */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <motion.path
            fill="currentColor"
            className="text-cyan-400"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            一緒に未来を創りましょう
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-12">
            ビジネスの変革をお考えですか？専門家チームにお気軽にご相談ください。
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <motion.a
              href="mailto:hello@bluewave.systems"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>hello@bluewavesystems.com</span>
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>03-1234-5678</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 text-blue-200"
            >
              <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span>東京都港区</span>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="px-10 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl"
          >
            相談予約をする
          </motion.button>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-16 border-t border-blue-800/50">
          <div>
            <h3 className="text-2xl text-white mb-4">Bluewave Systems</h3>
            <p className="text-blue-300/70">
              つながる未来のための流動的イノベーション
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">ソリューション</h4>
            <ul className="space-y-2 text-blue-300/70">
              <li><a href="#" className="hover:text-white transition-colors">クラウドサービス</a></li>
              <li><a href="#" className="hover:text-white transition-colors">データ分析</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI統合</a></li>
              <li><a href="#" className="hover:text-white transition-colors">サイバーセキュリティ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">企業情報</h4>
            <ul className="space-y-2 text-blue-300/70">
              <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ブログ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プレスリリース</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">つながる</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-blue-700/50 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-200" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-blue-700/50 transition-colors">
                <Twitter className="w-5 h-5 text-blue-200" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-blue-700/50 transition-colors">
                <Github className="w-5 h-5 text-blue-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-blue-400/60 pt-8 border-t border-blue-800/30">
          <p>© 2025 Bluewave Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
