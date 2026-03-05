export const meta = {
  metadataBase: new URL('https://comentariopopular.com.br'),
  title: 'Comentário Bíblico Popular | Comentário Bíblico Online e Gratuito',
  description:
    'Comentário Bíblico online e gratuito para você estudar as Escrituras Sagradas verso a verso.',
  authors: [{ name: 'Jamil Filho' }],
  keywords: [
    // Termos gerais
    'Bíblia',
    'Bíblia Sagrada',
    'estudo bíblico',
    'estudo da Bíblia',
    'teologia cristã',
    'palavra de Deus',
    'escrituras sagradas',

    // Comentários bíblicos (ampliação semântica)
    'comentário bíblico',
    'comentário bíblico online',
    'comentário bíblico completo',
    'comentário bíblico versículo por versículo',
    'comentário bíblico explicado',
    'comentário bíblico aprofundado',
    'comentário bíblico evangélico',
    'comentário bíblico reformado',

    // Evangelhos
    'comentário dos evangelhos',
    'comentário do evangelho de Mateus',
    'comentário do evangelho de Marcos',
    'comentário do evangelho de Lucas',
    'comentário do evangelho de João',
    'estudo dos evangelhos',
    'explicação dos evangelhos',

    // Salmos
    'comentário de salmos',
    'comentário do livro de Salmos',
    'explicação dos Salmos',
    'estudo dos Salmos',
    'Salmo explicado',
    'Salmos versículo por versículo',

    // Apocalipse
    'comentário de apocalipse',
    'comentário do livro de Apocalipse',
    'estudo do Apocalipse',
    'Apocalipse explicado',
    'Apocalipse versículo por versículo',
    'interpretação do Apocalipse',
    'escatologia bíblica',

    // Antigo e Novo Testamento
    'comentário do Antigo Testamento',
    'comentário do Novo Testamento',
    'estudo do Antigo Testamento',
    'estudo do Novo Testamento',

    // Intenção de busca
    'significado de versículos bíblicos',
    'explicação de versículos bíblicos',
    'interpretação bíblica',
    'análise bíblica',
    'devocional bíblico',
    'meditação na palavra'
  ],
  publisher: 'Jamil Filho',
  creator: 'Jamil Filho',
  openGraph: {
    type: 'website',
    title: 'Comentário Bíblico Popular | Comentário Bíblico Online e Gratuito',
    description:
      'Comentário Bíblico online e gratuito para você estudar as Escrituras Sagradas verso a verso.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Comentário Bíblico Popular | Comentário Bíblico Online e Gratuito',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // Type of Twitter card
    title: 'Comentário Bíblico Popular | Comentário Bíblico Online e Gratuito', // Twitter card title
    description:
      'Comentário Bíblico online e gratuito para você estudar as Escrituras Sagradas verso a verso.', // Twitter card description
    images: ['/og_image.png'], // Image used in the Twitter card
    creator: '@ilustrafilho', // Twitter handle of the content creator (optional)
  },
  // SEO Enhancements
  alternates: {
    canonical: 'https://comentariopopular.com.br', // Set the canonical URL
  },
  robots: 'index, follow', // Allows search engines to index and follow links
  // Optional: Hreflang for multilingual content (if applicable)
  hreflang: {
    ptBR: 'https://comentariopopular.com.br',
    // Add more hreflang if you have other languages (example: Spanish)
    // "es": "https://comentariopopular.com.br/es",
  },
};
