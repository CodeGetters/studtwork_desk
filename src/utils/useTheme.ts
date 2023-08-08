import { useDark } from "@vueuse/core";
import { nextTick } from "vue";

export const isDark = useDark();

export function toggleDark(event: MouseEvent): void {
  const isAppearanceTransition =
    // @ts-expect-error experimental API
    document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value;
    return;
  }

  const x: number = event.clientX;
  const y: number = event.clientY;
  const endRadius: number = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // @ts-expect-error experimental API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  });

  transition.ready.then(() => {
    const clipPath: string[] = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: "ease-out",
        pseudoElement: isDark.value
          ? `::view-transition-old(root)`
          : `::view-transition-new(root)`,
      },
    );
  });
}
