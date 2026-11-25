export function watchNavigation(anchors: string[], onChange: (active: string) => void) {
  const sections = anchors.flatMap(href => {
    const element = document.getElementById(href.slice(1));
    return element ? [{ href, element }] : [];
  });
  let frame = 0;
  let active = "";

  function update() {
    frame = 0;
    const threshold = Math.min(160, window.innerHeight * 0.28);
    let next = sections[0]?.href ?? "";
    for (const section of sections) {
      if (section.element.getBoundingClientRect().top > threshold) break;
      next = section.href;
    }
    if (active !== next) {
      active = next;
      onChange(next);
    }
  }

  function schedule() {
    if (!frame) frame = window.requestAnimationFrame(update);
  }

  schedule();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  return () => {
    window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}
