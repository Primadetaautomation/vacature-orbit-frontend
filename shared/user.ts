// Mock user types for design mode

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'company' | 'freelancer' | 'bureau' | 'admin';
  tenantId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  bio?: string;
  skills?: string[];
  experience?: any[];
  education?: any[];
  portfolio?: string[];
  avatar?: string;
  phone?: string;
  location?: string;
}