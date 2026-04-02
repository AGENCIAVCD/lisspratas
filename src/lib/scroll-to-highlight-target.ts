const highlightClassName = "is-highlighted";

export function scrollToHighlightTarget(targetId: string) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  target.classList.remove(highlightClassName);
  void target.getBoundingClientRect();

  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  window.history.replaceState(null, "", `#${targetId}`);
  target.classList.add(highlightClassName);

  window.setTimeout(() => {
    target.classList.remove(highlightClassName);
  }, 1500);
}
