"use client";

import { useEffect, useState } from "react";

export function useUrlParams() {
  const [urlParams, setUrlParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrlParams(new URLSearchParams(window.location.search));
    }
  }, []);

  const hasParam = (param: string, value?: string): boolean => {
    if (!urlParams) return false;
    
    if (value) {
      return urlParams.get(param) === value;
    }
    
    return urlParams.has(param);
  };

  return { hasParam };
} 