import { Users, Calendar, DollarSign, TrendingUp, Briefcase, UserCheck } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Centralized employee database with comprehensive profiles, documents, and organizational hierarchy.',
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/50'
  },
  {
    icon: Calendar,
    title: 'Attendance Tracking',
    description: 'Automated time tracking with geofencing, shift management, and real-time attendance reports.',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/50'
  },
  {
    icon: DollarSign,
    title: 'Payroll Automation',
    description: 'Streamlined payroll processing with tax calculations, compliance management, and direct deposits.',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/50'
  },
  {
    icon: TrendingUp,
    title: 'Performance Review',
    description: 'Goal setting, continuous feedback, 360-degree reviews, and performance analytics.',
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/50'
  },
  {
    icon: Briefcase,
    title: 'Leave Management',
    description: 'Simplified leave requests, approval workflows, balance tracking, and holiday calendars.',
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500/50'
  },
  {
    icon: UserCheck,
    title: 'Recruitment Portal',
    description: 'End-to-end hiring workflow with applicant tracking, interview scheduling, and onboarding.',
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/50'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDAsIDIwMCwgMjAwLCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full text-sm text-cyan-400 mb-4">
            Core Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Manage HR</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive tools designed to streamline every aspect of human resource management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border ${feature.borderColor} border-opacity-0 hover:border-opacity-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>

                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">120+</div>
              <div className="text-sm text-gray-400 mt-1">Companies</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">15K+</div>
              <div className="text-sm text-gray-400 mt-1">Employees Managed</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-gray-400 mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
