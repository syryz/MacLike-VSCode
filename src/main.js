// init mac theme
document.addEventListener('DOMContentLoaded', () => {
  function initMacTheme() {
    const sidebar = document.querySelector('#workbench\\.parts\\.sidebar');
    const editor = document.querySelector('#workbench\\.parts\\.editor');
    const activitybar = document.querySelector('.split-view-view:has(> #workbench\\.parts\\.activitybar)');
    const workbench = document.querySelector('.monaco-workbench');

    if (sidebar && editor && activitybar && workbench) {
      new ResizeObserver(entries => {
        const boundingRect = editor.getBoundingClientRect();
        document.documentElement.style.setProperty('--left-side-width', `${boundingRect.left}px`);
        document.documentElement.style.setProperty('--right-side-width', `${boundingRect.right}px`);
        document.documentElement.style.setProperty('--activitybar-width', `${activitybar.style.width}`);
      }).observe(sidebar);

      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.target.classList.contains('context-menu-visible')) {
            const contextMenu = document.querySelector('.monaco-workbench > .context-view:not([aria-hidden])');
            document.documentElement.style.setProperty('--context-menu-left', `${contextMenu.offsetLeft}px`);
            document.documentElement.style.setProperty('--context-menu-top', `${contextMenu.offsetTop}px`);
            document.documentElement.style.setProperty('--context-menu-width', `${contextMenu.offsetWidth}px`);
            document.documentElement.style.setProperty('--context-menu-height', `${contextMenu.offsetHeight}px`);
          }
        }
      }).observe(workbench, {
        attributes: true,
        attributeFilter: ['class'],
      });
      
      console.log('=========== MAC-style LOADED ===========');
      return true;
    }
    return false;
  }

  if (!initMacTheme()) {
    const observer = new MutationObserver((mutations, obs) => {
      if (initMacTheme()) {
        obs.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
});
