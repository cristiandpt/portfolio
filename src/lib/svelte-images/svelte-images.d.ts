// src/components/Gallery.svelte.d.ts

/// <reference types="svelte" />

declare module "svelte-images" {
    
  import type { SvelteComponent } from "svelte";

  // Define the type for the `images` prop
  export interface ImageProps {
    src?: string;
    thumbnail?: string;
    alt?: string;
    [key: string]: any;
  }

  export interface GalleryProps {
    images: ImageProps[];
    gutter?: number;
    numCols?: number;
  }

  // Define the type for the `Image` component
  export class Images extends SvelteComponent {
    $props: ImageProps;
  }

  export class Carousel extends SvelteComponent {
    // Define the props or methods if any, for Carousel
  }

  // Define the type for the `Modal` component
  export class Modal extends SvelteComponent {}

  // The `carousel.js` module might need type definitions as well
  // These are just placeholders for the functions
  export function open(images: ImageProps[], index: number): void;
  export function close(): void;

  // The Gallery component
  export default class Gallery extends SvelteComponent<GalleryProps> {
    // The onMount lifecycle hook can be used for setup code
    onMount(): void;
  }
}