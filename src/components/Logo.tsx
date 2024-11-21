import React from 'react';
import { Building2 } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <Building2 className="w-7 h-7 text-teal-600" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
    </div>
    <span className="text-xl font-light tracking-wide">
      Constro<span className="font-medium text-teal-600">Man</span>
    </span>
  </div>
);