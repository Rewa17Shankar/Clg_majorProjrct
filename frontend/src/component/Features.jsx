import { Users, Calendar, DollarSign, TrendingUp, Briefcase, UserCheck } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Centralized employee database with comprehensive profiles and documents.',
  },
  {
    icon: Calendar,
    title: 'Attendance Tracking',
    description: 'Automated time tracking with geofencing and real-time reports.',
  },
  {
    icon: DollarSign,
    title: 'Payroll Automation',
    description: 'Streamlined payroll processing with tax calculations and compliance.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Review',
    description: 'Goal setting, continuous feedback, and performance analytics.',
  },
  {
    icon: Briefcase,
    title: 'Leave Management',
    description: 'Simplified leave requests and approval workflows.',
  },
  {
    icon: UserCheck,
    title: 'Recruitment Portal',
    description: 'End-to-end hiring workflow with applicant tracking.',
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Simple Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAyMTIsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-slate-800/50 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-4">
            Core Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to <span className="text-cyan-400">Manage HR</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive tools designed to streamline every aspect of human resource management
          </p>
        </div>

        {/* Horizontal Scrollable Feature Bar */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrollable Container */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 min-w-max px-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative w-80 p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section - Simple Row */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-12 px-8 py-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-1">120+</div>
            <div className="text-sm text-gray-400">Companies</div>
          </div>
          
          <div className="w-px h-12 bg-slate-700"></div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-1">15K+</div>
            <div className="text-sm text-gray-400">Employees Managed</div>
          </div>
          
          <div className="w-px h-12 bg-slate-700"></div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
