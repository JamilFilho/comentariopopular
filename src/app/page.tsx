'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex-1" />
          <nav className="flex-1 flex justify-center" />
          <div className="flex-1 flex gap-2 justify-end">
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow px-4 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto flex flex-col items-center max-w-6xl gap-10"
        >
          <div className="text-center my-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2 lg:gap-4 justify-center items-center xs:px-2"
            >
              <h1 className="text-4xl content-center md:text-5xl font-bold text-gray-900 dark:text-white">
                Comentário Popular
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-shadow-xs my-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Estude a Bíblia Sagrada, verso a verso, gratuitamente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-row sm:flex-row justify-center items-center gap-4 mt-2"
            >
              <Button
                className="px-6 py-3"
                variant={'primary'}
                onClick={() => router.push('/pages/introducao')}
                size={'md'}
              >
                Comece a estudar
              </Button>

              <Button
                className="px-6 py-3"
                variant={'outline'}
                onClick={() => router.push('/pages/sobre-o-projeto')}
                size={'md'}
              >
                Conheça o projeto
              </Button>
            </motion.div>
          </div>


          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full grid md:grid-cols-2 gap-6"
          >
            <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-semibold">Sobre o projeto</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                O Comentário Popular nasceu para tornar o estudo bíblico mais
                acessível, claro e contínuo. Cada livro é explorado com
                explicações diretas, contexto histórico e aplicação prática.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-semibold">Nossa proposta</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Oferecer conteúdo gratuito e fiel às Escrituras, servindo
                famílias, líderes e igrejas locais com material útil para
                devocional, discipulado e ensino.
              </p>
            </article>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="w-full"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Objetivos do Comentário Popular
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <article className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900/40">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold">Clareza bíblica</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Explicar o texto verso a verso com linguagem simples e foco no
                  significado original.
                </p>
              </article>

              <article className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900/40">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold">Edificação da igreja</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Fortalecer o ensino bíblico em classes, grupos pequenos e
                  momentos de discipulado.
                </p>
              </article>

              <article className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900/40 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold">Acesso gratuito</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Disponibilizar conteúdo de qualidade sem barreiras financeiras,
                  para que mais pessoas estudem a Palavra com profundidade.
                </p>
              </article>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <footer className="p-4 text-center bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
        <p>
          Desenvolvido com ❤️ para a <strong>Igreja Brasileira</strong>
        </p>
      </footer>
    </div>
  );
}
