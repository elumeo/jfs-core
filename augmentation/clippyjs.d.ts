declare module 'clippyjs' {
  interface IAgent {
    gesture(id: string): void;
    hide(fast?: boolean): void;
    moveTo(x: number, y: number): void;
    play(animation: string): void;
    show(): void;
    speak(text: string, hold?: boolean): void;
    stopCurrent(): void;
    stop(): void;
  }

  export function load(agentNames: string | string[], callback: (agent: IAgent) => void): void;
  export function agents(): string[];
}
