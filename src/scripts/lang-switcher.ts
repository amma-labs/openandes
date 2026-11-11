// Toggle del dropdown de idioma en móvil (touch no tiene hover)
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const btn = target.closest('[data-lang-switcher-mobile] button');
  const mobileSwitcher = target.closest('[data-lang-switcher-mobile]');

  // Cerrar todos los dropdowns móviles abiertos (menos el que se clickeó)
  document.querySelectorAll('[data-lang-switcher-mobile] ul').forEach((ul) => {
    if (!mobileSwitcher || !mobileSwitcher.contains(ul)) {
      ul.classList.add('hidden');
    }
  });

  if (btn) {
    e.preventDefault();
    const ul = btn.parentElement?.querySelector('ul');
    if (ul) ul.classList.toggle('hidden');
  }
});
