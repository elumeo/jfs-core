declare namespace Emitter {
    type Callback = () => void;
    type Callbacks<Events extends string | number | symbol> = {
        [P in Events]?: Callback[];
    };
}
declare class Emitter<EventEmitterEvent extends string | number | symbol> {
    private callbacks;
    constructor();
    on: (event: EventEmitterEvent, callback: () => void) => void;
    emit: (event: EventEmitterEvent) => void;
}
declare namespace Core {
    type Event = 'setup-start' | 'setup-end';
}
declare class Core {
    static Emitter: Emitter<Core.Event>;
}
