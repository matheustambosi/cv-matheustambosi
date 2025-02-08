"use client";

import { ContainerWrapper } from "@/components/container-wrapper/container-wrapper";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ContainerWrapper>
      <Sidebar />

      <div className="w-full">{children}</div>
    </ContainerWrapper>
  );
};
