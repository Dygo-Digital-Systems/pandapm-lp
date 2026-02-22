export {};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      params?: Record<string, any>
    ) => void;
  }
}