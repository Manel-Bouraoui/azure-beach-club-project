import { siteConfig } from "@/config/site";

/**
 * Applies brand colors from siteConfig to CSS custom properties.
 * Rendered once at the root so every component picks up the theme.
 */
export function BrandStyle() {
  const c = siteConfig.brand.colors;
  const css = `:root{--ocean:${c.ocean};--turquoise:${c.turquoise};--gold:${c.gold};--sand:${c.sand};}`;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
