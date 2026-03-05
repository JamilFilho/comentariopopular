// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkGfm from 'remark-gfm';
import { codeImport } from 'remark-code-import';
import rehypeSlug from 'rehype-slug';
import highlight from 'rehype-highlight';

export const Post = defineDocumentType(() => ({
  name: 'Docs',
  contentType: 'mdx',
  filePathPattern: `pages/**/*.mdx`,
  markdown: { fileExtensions: ['mdx', 'md'] }, // Ensure it watches these files
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) =>
        `/pages/${post._raw.flattenedPath.replace(/^pages\//, '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^pages\//, ''),
    },
  },
}));

export const Comments = defineDocumentType(() => ({
  name: 'Comments',
  contentType: 'mdx',
  filePathPattern: `comments/**/*.mdx`,
  markdown: { fileExtensions: ['mdx', 'md'] }, // Ensure it watches these files
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) =>
        `/comments/${post._raw.flattenedPath.replace(/^comments\//, '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^comments\//, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Comments],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [rehypeSlug, highlight],
  },
});
