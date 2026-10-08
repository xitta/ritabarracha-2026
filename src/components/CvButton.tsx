import { useEffect, useState } from "react";
import { Download } from "lucide-react";

interface CvButtonProps {
  /** id of the element that, once scrolled past, reveals the button */
  triggerId: string;
  /** PDF in /public */
  href: string;
  fileName?: string;
}

// Sticky "Download CV" pill, bottom centre. It appears with a short delay
// once the trigger (the Experience & Education title) has been scrolled
// into the upper part of the screen, and hides again when scrolling back up.
// If the PDF is not in /public yet, the button stays hidden.
const CvButton = ({ triggerId, href, fileName }: CvButtonProps) => {
  const [available, setAvailable] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(href, { method: "HEAD" })
      .then((r) => {
        const type = r.headers.get("content-type") || "";
        if (!cancelled) setAvailable(r.ok && type.includes("pdf"));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [href]);

  useEffect(() => {
    if (!available) return;
    let timer: number | undefined;
    let frame = 0;
    let shown = false;
    const update = () => {
      frame = 0;
      const el = document.getElementById(triggerId);
      if (!el) return;
      const past = el.getBoundingClientRect().top < window.innerHeight * 0.4;
      if (past && !shown) {
        shown = true;
        window.clearTimeout(timer);
        timer = window.setTimeout(() => setVisible(true), 600);
      } else if (!past && shown) {
        shown = false;
        window.clearTimeout(timer);
        setVisible(false);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [available, triggerId]);

  if (!available) return null;

  return (
    <a
      href={href}
      download={fileName}
      aria-hidden={!visible || undefined}
      tabIndex={visible ? undefined : -1}
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-xs uppercase tracking-widest shadow-lg transition-all duration-500 ease-out hover:bg-foreground/85 motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      Download CV
    </a>
  );
};

export default CvButton;
