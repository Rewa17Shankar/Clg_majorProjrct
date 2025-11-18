// ✅ Role-based Access
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
};
<<<<<<< HEAD
=======


export const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    console.log('🔍 Role Check Middleware');
    console.log('User from JWT:', req.user);
    console.log('Allowed roles:', allowedRoles);
    
    if (!req.user) {
      return res.status(403).json({ 
        error: 'Access denied. User not authenticated.' 
      });
    }

    // Check if user role matches allowed roles
    // Support both roleId (number) and role (string)
    const userRole = req.user.role || req.user.roleId;
    
    // Convert string roles to role IDs if needed
    const roleMap = {
      'superadmin': 1,
      'hr': 2,
      'manager': 3,
      'employee': 4
    };
    
    // Convert allowed roles to IDs if they are strings
    const allowedRoleIds = allowedRoles.map(role => {
      if (typeof role === 'string') {
        return roleMap[role.toLowerCase()] || role;
      }
      return role;
    });
    
    console.log('User role:', userRole);
    console.log('Allowed role IDs:', allowedRoleIds);
    
    const hasPermission = allowedRoleIds.includes(userRole);
    
    if (!hasPermission) {
      console.log('❌ Access denied - role not in allowed list');
      return res.status(403).json({ 
        error: 'Access denied. Insufficient permissions.',
        userRole,
        allowedRoles: allowedRoleIds
      });
    }
    
    console.log('✅ Access granted');
    next();
  };
};
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
