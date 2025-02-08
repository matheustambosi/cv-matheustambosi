"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "./language-provider";
import { SidebarProvider } from "./sidebar-provider";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LanguageProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </LanguageProvider>
    </>
  );
};
