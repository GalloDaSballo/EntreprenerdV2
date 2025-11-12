import React from 'react';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="container mx-auto px-8 md:px-12 py-32 md:py-48">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-40">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white">
              Alex the Entreprenerd
            </h1>
            <p className="text-2xl md:text-3xl text-gray-100 mb-8 font-normal max-w-4xl mx-auto">
              Smart Contract Security Expert & Blockchain Developer
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
              Elite Security Researcher, specialized in DeFi and Invariant Testing on the EVM.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/GalloDaSballo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-25 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all text-white"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@AlextheEntreprenerd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-25 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all text-white"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/GalloDaSballo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-25 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all text-white"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Company */}
        <div className="max-w-6xl mx-auto mb-40">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center tracking-tight text-white">Main Company</h2>
          <a href="https://getrecon.xyz/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="card cursor-pointer">
              <div className="p-10 md:p-12">
                <div className="flex flex-col md:flex-row gap-10 md:gap-12">
                {/* Left side - Content */}
                <div className="flex-1">
                  <div className="mb-8">
                    <h3 className="text-3xl md:text-5xl font-bold mb-5 leading-tight text-white">
                      Recon
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      Invariant testing platform for smart contracts. Helping developers build, test, and deploy safer code through automated security testing.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-5 mb-8">
                    <div className="stat-card">
                      <div className="text-3xl md:text-4xl font-bold mb-2 text-white">$3B+</div>
                      <div className="text-sm md:text-base text-gray-400">Protected in TVL</div>
                    </div>
                    <div className="stat-card">
                      <div className="text-3xl md:text-4xl font-bold mb-2 text-white">12,500+</div>
                      <div className="text-sm md:text-base text-gray-400">Cloud fuzzing runs</div>
                    </div>
                  </div>

                  <ul className="space-y-3 text-gray-200 mb-8 text-base md:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 flex-shrink-0 mt-1">✓</span>
                      Manual security audits by experienced researchers
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 flex-shrink-0 mt-1">✓</span>
                      Cloud-based fuzzing supporting Medusa, Echidna, Halmos, and Kontrol
                    </li>
                  </ul>
                </div>

                {/* Right side - Screenshot (50% on desktop) */}
                <div className="md:w-1/2 flex-shrink-0">
                  <div className="screenshot-container">
                    <Image
                      src="/screenshots/recon.png"
                      alt="Recon Platform"
                      width={1200}
                      height={750}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </a>
        </div>

        {/* Side Projects */}
        <div className="max-w-6xl mx-auto mb-40">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center tracking-tight text-white">Side Projects</h2>
          <div className="space-y-12">
            {/* Daily Warden */}
            <a href="https://www.dailywarden.com/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="card cursor-pointer">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                  {/* Left - Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-white">
                      Daily Warden
                    </h3>

                    <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
                      Smart contract security contest aggregator. Tracks active contests across Code4rena, Sherlock, Cantina, Immunefi, and more.
                    </p>

                    <div className="space-y-3 text-sm md:text-base text-gray-300 mb-6 pb-6 border-b border-zinc-800">
                      <div className="flex justify-between">
                        <span>Subscribers</span>
                        <span className="text-white font-semibold">1,455+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Updates</span>
                        <span className="text-white font-semibold">Every 3 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Notifications</span>
                        <span className="text-white font-semibold">Daily</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Screenshot (50% on desktop) */}
                  <div className="md:w-1/2 flex-shrink-0">
                    <div className="screenshot-container">
                      <Image
                        src="/screenshots/daily-warden.png"
                        alt="Daily Warden"
                        width={1200}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </a>

            {/* One Bug Per Day */}
            <a href="https://www.onebugperday.com/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="card cursor-pointer">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                  {/* Left - Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-white">
                      One Bug Per Day
                    </h3>

                    <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
                      Curated vulnerability disclosure platform delivering security findings from top auditors and researchers daily.
                    </p>

                    <div className="space-y-3 text-sm md:text-base text-gray-300 mb-6 pb-6 border-b border-zinc-800">
                      <div className="flex justify-between">
                        <span>Members</span>
                        <span className="text-white font-semibold">450+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reports</span>
                        <span className="text-white font-semibold">Daily H/M bugs</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Access</span>
                        <span className="text-white font-semibold">Browser extensions</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Screenshot (50% on desktop) */}
                  <div className="md:w-1/2 flex-shrink-0">
                    <div className="screenshot-container">
                      <Image
                        src="/screenshots/one-bug-per-day.png"
                        alt="One Bug Per Day"
                        width={1200}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>

        {/* Open Source */}
        <div className="max-w-6xl mx-auto mb-40">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center tracking-tight text-white">Open Source</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <a href="https://github.com/GalloDaSballo" target="_blank" rel="noopener noreferrer" className="block">
              <div className="card cursor-pointer">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col gap-6">
                    <div className="screenshot-container" style={{ aspectRatio: '16/9' }}>
                      <Image
                        src="https://github-readme-stats.vercel.app/api?username=GalloDaSballo&show_icons=true&theme=dark&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=ffffff&icon_color=60a5fa"
                        alt="GitHub Stats"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover rounded-lg"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-white">
                        GitHub Profile
                      </h3>
                      <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        Open source security tools, audits, and smart contract research
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://github.com/Recon-Fuzz" target="_blank" rel="noopener noreferrer" className="block">
              <div className="card cursor-pointer">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col gap-6">
                    <div className="screenshot-container flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black" style={{ aspectRatio: '16/9' }}>
                      <div className="text-center p-8">
                        <div className="text-6xl md:text-7xl mb-4">🔬</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Recon-Fuzz</h3>
                        <p className="text-lg text-gray-400">GitHub Organization</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-white">
                        Recon-Fuzz
                      </h3>
                      <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        Organization for fuzzing tools, templates, and smart contract testing frameworks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto mt-48 pt-20 text-center">
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">To all the whitehats, we salute you</p>
          <div className="h-32"></div>
        </footer>
      </div>
    </main>
  );
}
