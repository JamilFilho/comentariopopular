// src/app/doc/layout.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { allComments } from 'contentlayer/generated';
import SearchDialog from '@/components/search-dialog';
import { sidebarNav, SidebarNavPage } from 'config/sidebar';
import Image from 'next/image';
import {
  SidebarProvider,
  SidebarLayout,
  MainContent,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeaderLogo,
  SidebarHeaderTitle,
  NestedLink,
} from '@/components/sidebar';

import Header from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import { useIsMobile } from '@/hooks/use-mobile';

const renderSidebarPages = (pages: SidebarNavPage[]) =>
  pages.map((page) => {
    const hasChildren = Boolean(page.pages && page.pages.length > 0);

    if (!hasChildren) {
      return (
        <NestedLink key={page.href} href={page.href}>
          {page.title}
        </NestedLink>
      );
    }

    return (
      <SidebarMenuItem
        key={page.href}
        label={page.title}
        defaultOpen={false}
        isCollapsable={true}
      >
        <NestedLink href={page.href}>Introdução</NestedLink>
        {renderSidebarPages(page.pages!)}
      </SidebarMenuItem>
    );
  });

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Destructure sidebarNav from configDocs
  const isMobile = useIsMobile();
  return (
    <SidebarLayout>
      {/* Left Sidebar Provider */}
      <SidebarProvider
        defaultOpen={isMobile ? false : true}
        defaultSide="left"
        defaultMaxWidth={420}
        showIconsOnCollapse={true}
      >
        <Sidebar>
          <SidebarHeader>
            <SidebarHeaderLogo
              logo={
                <Image
                  alt="logo"
                  className={'h-auto w-auto dark:invert'}
                  width={100}
                  height={100}
                  src={`/logo.png`}
                />
              }
            />

            <Link href={'/'} className="flex flex-1 gap-3">
              <SidebarHeaderTitle>
                Comentário Popular
              </SidebarHeaderTitle>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            {sidebarNav.map((section) => (
              <SidebarMenuItem
                isCollapsable={section.pages && section.pages.length > 0}
                key={section.title}
                label={section.title}
                href={section.href}
                icon={section.icon}
                defaultOpen={section.defaultOpen}
              >
                {section.pages ? renderSidebarPages(section.pages) : null}
              </SidebarMenuItem>
            ))}
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          <Header className="justify-between py-2">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
            </div>
            <div className="flex gap-2 items-center pr-0 lg:pr-8">
              <SearchDialog searchData={allComments} />
              <ModeToggle />
            </div>
          </Header>
          {/* <div className={`grid xl:grid xl:grid-cols-[1fr_270px]`}> */}
          <main className="overflow-auto p-6">{children}</main>

          <footer className="flex flex-col gap-2 md:flex-row justify-between items-center p-4 dark:bg-gray-950/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
            <p>
              Desevolvido com ❤️ para a <strong>Igreja Brasileira</strong>
            </p>
            <p>Um site do <a className="underline underline-offset-2 decoration-dashed font-bold" href="https://euaggelion.com.br">Projeto Euaggelion</a></p>
          </footer>
        </MainContent>
      </SidebarProvider>
    </SidebarLayout>
  );
}
