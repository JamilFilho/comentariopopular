import { ReactNode } from 'react';
import { Album, Info, MessageCircleQuestion } from 'lucide-react';

export type SidebarNavPage = {
  title: string;
  href: string;
  pages?: SidebarNavPage[];
};

export type SidebarNavSection = {
  title: string;
  icon?: ReactNode;
  defaultOpen?: boolean;
  href?: string;
  pages?: SidebarNavPage[];
};

export const sidebarNav: SidebarNavSection[] = [
  {
    title: 'Introdução',
    icon: <Info className="h-5 w-5" />,
    defaultOpen: false,
    href: '/pages/introducao',
  },
  {
    title: 'Antigo Testamento',
    icon: <Album className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Introdução ao Antigo Testamento',
        href: '/comments/at/introducao',
      },
    ],
  },
  {
    title: 'Novo Testamento',
    icon: <Album className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Introdução ao Novo Testamento',
        href: '/comments/nt/introducao',
      },
      {
        title: 'Judas',
        href: '/comments/nt/judas/introducao',
        pages: [
          {
            title: 'Capítulo 1',
            href: '/comments/nt/judas/1'
          }
        ]
      },
    ],
  },
  {
    title: 'Sobre nós',
    icon: <MessageCircleQuestion className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Sobre o projeto',
        href: '/pages/sobre-o-projeto',
      },
      {
        title: 'Visão Editorial',
        href: '/pages/editorial',
      },
      {
        title: 'Confissão de Fé',
        href: '/pages/confissao-de-fe',
      },
      {
        title: 'Perguntas Frequentes',
        href: '/pages/faq',
      },
    ],
  },
];
