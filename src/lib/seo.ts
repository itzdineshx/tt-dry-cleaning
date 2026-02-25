import { useEffect } from "react";

interface SeoOptions {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  canonical?: string;
}

function setMeta(nameOrProperty: string, content: string, isProperty = false) {
  let selector = isProperty ? `meta[property='${nameOrProperty}']` : `meta[name='${nameOrProperty}']`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    if (isProperty) element.setAttribute("property", nameOrProperty);
    else element.setAttribute("name", nameOrProperty);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function useSeo(options: SeoOptions) {
  useEffect(() => {
    if (options.title) {
      document.title = options.title;
      setMeta("og:title", options.title, true);
      setMeta("twitter:title", options.title);
    }

    if (options.description) {
      setMeta("description", options.description);
      setMeta("og:description", options.description, true);
      setMeta("twitter:description", options.description);
    }

    if (options.url) {
      setMeta("og:url", options.url, true);
      let link: HTMLLinkElement | null = document.head.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", options.url);
      if (options.canonical) {
        link.setAttribute("href", options.canonical);
      }
    }

    if (options.image) {
      setMeta("og:image", options.image, true);
      setMeta("twitter:image", options.image);
    }

    if (options.type) {
      setMeta("og:type", options.type, true);
    }
  }, [options.title, options.description, options.url, options.image, options.type, options.canonical]);
}
