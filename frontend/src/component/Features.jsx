import { Users, Calendar, DollarSign, TrendingUp, Briefcase, UserCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Centralized employee database with comprehensive profiles, documents, and organizational hierarchy.',
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/50',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    stats: '500+ profiles'
  },
  {
    icon: Calendar,
    title: 'Attendance Tracking',
    description: 'Automated time tracking with geofencing, shift management, and real-time attendance reports.',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/50',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    stats: '99.9% accuracy'
  },
  {
    icon: DollarSign,
    title: 'Payroll Automation',
    description: 'Streamlined payroll processing with tax calculations, compliance management, and direct deposits.',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/50',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    stats: '2M+ processed'
  },
  {
    icon: TrendingUp,
    title: 'Performance Review',
    description: 'Goal setting, continuous feedback, 360-degree reviews, and performance analytics.',
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/50',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    stats: '10K+ reviews'
  },
  {
    icon: Briefcase,
    title: 'Leave Management',
    description: 'Simplified leave requests, approval workflows, balance tracking, and holiday calendars.',
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500/50',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    stats: '5K+ requests'
  },
  {
    icon: UserCheck,
    title: 'Recruitment Portal',
    description: 'End-to-end hiring workflow with applicant tracking, interview scheduling, and onboarding.',
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/50',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    stats: '1K+ hired'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Premium Animated Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAyMTIsIDI1NSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Radial Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
      
      {/* Floating Particles with Enhanced Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-random ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-full text-sm mb-6 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 group cursor-pointer">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">Core Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_auto]">
              Manage HR Seamlessly
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools designed to streamline every aspect of human resource management with cutting-edge technology
          </p>
        </div>

        {/* Premium Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Premium Outer Glow */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700`}
                  style={{
                    boxShadow: `0 0 40px ${feature.glowColor}`
                  }}
                ></div>
                
                {/* Main Card with Glass Effect */}
                <div className={`relative h-full p-8 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl border ${feature.borderColor} border-opacity-30 hover:border-opacity-100 transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl overflow-hidden group-hover:-translate-y-2`}>
                  
                  {/* Animated Mesh Gradient Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                  </div>
                  
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Premium Icon Container */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}></div>
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl`}>
                        <Icon className="w-10 h-10 text-white drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500" />
                        
                        {/* Icon Inner Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-50 blur-xl animate-pulse-glow`}></div>
                      </div>
                    </div>

                    {/* Title with Gradient Hover */}
                    <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-500">
                      {feature.description}
                    </p>

                    {/* Stats Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${feature.color} bg-opacity-10 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-500`}>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} animate-pulse`}></div>
                      <span className="text-sm font-semibold text-gray-300">{feature.stats}</span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 rounded-full`}></div>
                  <div className={`absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-1000`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Stats Section with 3D Effect */}
        <div className="mt-28 text-center perspective-1000">
          <div className="inline-flex items-center flex-wrap justify-center gap-6 md:gap-8 px-8 md:px-12 py-8 md:py-10 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl rounded-3xl border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700 hover:scale-[1.02] group">
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="text-center group/stat cursor-pointer relative z-10">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-500 mb-2">
                120+
              </div>
              <div className="text-sm md:text-base text-gray-400 group-hover/stat:text-gray-300 transition-colors font-medium">Companies Trust Us</div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
            
            <div className="text-center group/stat cursor-pointer relative z-10">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-500 mb-2">
                15K+
              </div>
              <div className="text-sm md:text-base text-gray-400 group-hover/stat:text-gray-300 transition-colors font-medium">Employees Managed</div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
            
            <div className="text-center group/stat cursor-pointer relative z-10">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-500 mb-2">
                99.9%
              </div>
              <div className="text-sm md:text-base text-gray-400 group-hover/stat:text-gray-300 transition-colors font-medium">Uptime Guaranteed</div>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium CSS Animations */}
      <style jsx>{`
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -20px); }
          50% { transform: translate(-20px, -40px); }
          75% { transform: translate(10px, -20px); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient-flow {
          animation: gradient-flow 8s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
