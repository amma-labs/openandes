import { pinyin } from 'pinyin';

/**
 * Genera un slug ASCII a partir de un tag.
 * - Español/inglés: "Minerales Críticos" → "minerales-criticos"
 * - Chino: "阿根廷" → "a-gen-ting"
 * - Quita acentos, espacios → guiones, minúsculas.
 */
export function slugify(tag: string): string {
  // 1. Chino → pinyin (sin tonos, array plano)
  const romanized = /[\u4e00-\u9fff]/.test(tag)
    ? (pinyin as any)(tag, { toneType: 'none', type: 'array' })
        .flat()
        .join('-')
    : tag;

  // 2. Normalizar acentos, minúsculas, guiones
  return romanized
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quitar diacríticos (incluye tonos pinyin)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')      // solo a-z, 0-9, guiones
    .replace(/-+/g, '-')             // colapsar guiones
    .replace(/^-|-$/g, '');          // quitar guiones al inicio/fin
}
