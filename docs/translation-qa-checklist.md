# Checklist QA por reporte (antes de commitear)

## Frontmatter
- [ ] `translationKey` idéntico al del `es/`
- [ ] `lang` correcto (`en` o `zh`) y coincide con la carpeta
- [ ] `title` y `subtitle` traducidos
- [ ] `summary` traducido (si existe)
- [ ] `type`, `program`, `author` traducidos (o mantenidos si son nombres propios)
- [ ] `researchLeaders` / `associateResearchers`: nombres intactos
- [ ] `date`, `image`, `pdfUrl`, `toc`, `draft` sin cambios
- [ ] `tags` traducidos y consistentes con el glosario

## Body
- [ ] Encabezados (`#`, `##`, …) traducidos
- [ ] Listas, tablas, citas, código, enlaces, imágenes: estructura intacta
- [ ] URLs sin modificar
- [ ] Cifras, fechas, monedas, unidades idénticas al original
- [ ] Siglas y acrónimos sin traducir
- [ ] Nombres propios (personas, instituciones, lugares) sin traducir
- [ ] Citas bibliográficas intactas
- [ ] Glosario aplicado consistentemente
- [ ] Sin notas del traductor, sin `[EN]`, sin `TODO`, sin `[VERIFICAR]` residual

## Build
- [ ] `npx astro sync` sin errores
- [ ] `npx astro check 2>&1 | grep -v "ts(6385)"` sin errores nuevos
- [ ] `npx astro build` exitoso
- [ ] La ruta `/en/analisis/<slug>` o `/zh/analisis/<slug>` renderiza (si aplica)
- [ ] Selector de idioma enlaza a las versiones existentes
