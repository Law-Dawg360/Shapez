declare namespace PoopJs {
    interface Deferred<T = void> extends Promise<T> {
        resolve(value: T | PromiseLike<T>): void;
        reject: (reason?: any) => void;
        r(value: any): any;
        r(value: T | PromiseLike<T>): void;
        j: (reason?: any) => void;
    }
    namespace PromiseExtension {
        /**
         * Creates unwrapped promise
         */
        function empty<T = void>(): Deferred<T>;
        function frame(n?: number): Promise<number>;
    }
}
declare namespace PoopJs {
    namespace ArrayExtension {
        function pmap<T, V>(this: T[], mapper: (e: T, i: number, a: T[]) => Promise<V> | V, threads?: number): Promise<V[]>;
        function map<T = number>(this: ArrayConstructor, length: number, mapper?: (number: any) => T): T[];
        function vsort<T>(this: T[], mapper: (e: T, i: number, a: T[]) => number, sorter?: ((a: number, b: number, ae: T, be: T) => number) | -1): T[];
        function vsort<T, V>(this: T[], mapper: (e: T, i: number, a: T[]) => V, sorter: ((a: V, b: V, ae: T, be: T) => number) | -1): T[];
        function at<T>(this: T[], index: number): T;
        function findLast<T, S extends T>(this: T[], predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
        function findLast<T>(predicate: (this: T[], value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
        class PMap<T, V, E = never> {
            /** Original array */
            source: T[];
            /** Async element converter function */
            mapper: (e: T, i: number, a: T[], pmap: PMap<T, V, E>) => Promise<V | E>;
            /** Max number of requests at once.
             *  *May* be changed in runtime */
            threads: number;
            /** Max distance between the olders incomplete and newest active elements.
             *  *May* be changed in runtime */
            window: number;
            /** Unfinished result array */
            results: (V | E | undefined)[];
            /** Promises for every element */
            requests: Deferred<V | E>[];
            beforeStart: (data: {
                e: T;
                i: number;
                a: T[];
                v?: V | E;
                r: (V | E)[];
                pmap: PMap<T, V, E>;
            }) => Promise<void> | void;
            afterComplete: (data: {
                e: T;
                i: number;
                a: T[];
                v: V | E;
                r: (V | E)[];
                pmap: PMap<T, V, E>;
            }) => Promise<void> | void;
            /** Length of the array */
            length: number;
            /** The number of elements finished converting */
            completed: number;
            /** Threads currently working
             *  in the mapper function: including the current one */
            activeThreads: number;
            lastStarted: number;
            allTasksDone: Deferred<(V | E)[]> & {
                pmap: PMap<T, V, E>;
            };
            anyTaskResolved: Deferred<void>;
            constructor(source: Partial<PMap<T, V, E>>);
            startTask(arrayIndex: number): Promise<void>;
            run_internal(): Promise<(V | E)[]>;
            run(): Deferred<(V | E)[]> & {
                pmap: PMap<T, V, E>;
            };
            pause(): void;
            unpause(): void;
            cancel(): void;
            prepare(): this;
            emptyResult<T = V | E>(): Deferred<T>;
            static this_pmap<T, V, E = never>(this: T[], mapper: PMap<T, V, E>['mapper'], options?: Partial<PMap<T, V, E>> | number | true): Deferred<(V | E)[]> & {
                pmap: PMap<T, V, E>;
            };
            static pmap<T, V, E = never>(array: T[], mapper: PMap<T, V, E>['mapper'], options?: Partial<PMap<T, V, E>> | number | true): Deferred<(V | E)[]> & {
                pmap: PMap<T, V, E>;
            };
        }
    }
}
declare namespace PoopJs {
    namespace DateNowHack {
        let speedMultiplier: number;
        let deltaOffset: number;
        let startRealtime: number;
        let startTime: number;
        let performanceDeltaOffset: number;
        let performanceStartRealtime: number;
        let performanceStartTime: number;
        let usedMethods: {
            date: boolean;
            performance: boolean;
        };
        function toFakeTime(realtime: number): number;
        function toPerformanceFakeTime(realtime: number): number;
        let bracketSpeeds: number[];
        function speedhack(speed?: number): void;
        function timejump(seconds: number): void;
        function switchSpeedhack(dir: number): boolean;
        function bindBrackets(mode?: string): void;
        let activated: boolean;
        let performanceActivated: boolean;
    }
}
declare namespace PoopJs {
    namespace ObjectExtension {
        function defineValue<T, K extends keyof T>(o: T, p: K, value: T[K]): T;
        function defineValue<T>(o: T, fn: Function): T;
        function defineGetter<T, K extends keyof T>(o: T, p: K, get: () => T[K]): T;
        function defineGetter<T>(o: T, get: Function): T;
        function map<T, V>(o: T, mapper: (v: ValueOf<T>, k: keyof T, o: T) => V): MappedObject<T, V>;
    }
}
declare namespace PoopJs {
    namespace QuerySelector {
        namespace WindowQ {
            function q<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K];
            function q<S extends selector, N = TagNameFromSelector<S>>(selector: S): TagElementFromTagName<N>;
            function q<E extends Element>(selector: selector): E;
            function q<K extends keyof HTMLElementTagNameMap>(selector: selector): HTMLElementTagNameMap[K];
            function qq<K extends keyof HTMLElementTagNameMap>(selector: K): (HTMLElementTagNameMap[K])[];
            function qq<S extends selector, N = TagNameFromSelector<S>>(selector: S): TagElementFromTagName<N>[];
            function qq<E extends Element>(selector: selector): E[];
            function qq<K extends keyof HTMLElementTagNameMap>(selector: selector): (HTMLElementTagNameMap[K])[];
        }
        namespace DocumentQ {
            function q<K extends keyof HTMLElementTagNameMap>(this: Document, selector: K): HTMLElementTagNameMap[K];
            function q<S extends selector, N = TagNameFromSelector<S>>(this: Document, selector: S): TagElementFromTagName<N>;
            function q<E extends Element>(this: Document, selector: selector): E;
            function q<K extends keyof HTMLElementTagNameMap>(this: Document, selector: selector): HTMLElementTagNameMap[K];
            function qq<K extends keyof HTMLElementTagNameMap>(this: Document, selector: K): (HTMLElementTagNameMap[K])[];
            function qq<S extends selector, N = TagNameFromSelector<S>>(this: Document, selector: S): TagElementFromTagName<N>[];
            function qq<E extends Element>(this: Document, selector: selector): E[];
            function qq<K extends keyof HTMLElementTagNameMap>(this: Document, selector: selector): (HTMLElementTagNameMap[K])[];
        }
        namespace ElementQ {
            function q<K extends keyof HTMLElementTagNameMap>(this: Element, selector: K): HTMLElementTagNameMap[K];
            function q<S extends selector, N = TagNameFromSelector<S>>(this: Element, selector: S): TagElementFromTagName<N>;
            function q<E extends Element>(this: Element, selector: selector): E;
            function q<K extends keyof HTMLElementTagNameMap>(this: Element, selector: selector): HTMLElementTagNameMap[K];
            function qq<K extends keyof HTMLElementTagNameMap>(this: Element, selector: K): (HTMLElementTagNameMap[K])[];
            function qq<S extends selector, N = TagNameFromSelector<S>>(this: Element, selector: S): TagElementFromTagName<N>[];
            function qq<E extends Element>(this: Element, selector: selector): E[];
            function qq<K extends keyof HTMLElementTagNameMap>(this: Element, selector: selector): (HTMLElementTagNameMap[K])[];
        }
    }
    namespace ElementExtension {
        function emit<T extends CustomEvent<{
            _event?: string;
        }>>(this: Element, type: T['detail']['_event'], detail?: T['detail']): any;
        function appendTo<E extends Element>(this: E, parent: Element | selector): E;
    }
}
declare namespace PoopJs {
    namespace Elm {
        type Child = Node | string | number | boolean;
        type SomeEvent = Event & MouseEvent & KeyboardEvent & {
            target: HTMLElement;
        };
        type Listener = (((event: SomeEvent) => any) & {
            name?: `${'' | 'bound '}${'on' | ''}${keyof HTMLElementEventMap}` | '';
        }) | ((event: SomeEvent) => any);
        /** if `elm` should disallow listeners not existing as `on * ` property on the element */
        export let allowOnlyExistingListeners: boolean;
        /** if `elm` should allow overriding `on * ` listeners if multiple of them are provided */
        export let allowOverrideOnListeners: boolean;
        export function elm<K extends keyof HTMLElementTagNameMap>(selector: K, ...children: (Child | Listener)[]): HTMLElementTagNameMap[K];
        export function elm<K extends keyof HTMLElementTagNameMap>(selector: keyof HTMLElementTagNameMap extends K ? never : selector, ...children: (Child | Listener)[]): HTMLElementTagNameMap[K];
        export function elm<S extends selector, N = TagNameFromSelector<S>>(selector: S, ...children: (Child | Listener)[]): TagElementFromTagName<N>;
        export function elm<E extends Element = HTMLElement>(selector: selector, ...children: (Child | Listener)[]): E;
        export function elm(): HTMLDivElement;
        export function qOrElm<K extends keyof HTMLElementTagNameMap>(selector: K, parent?: ParentNode | selector): HTMLElementTagNameMap[K];
        export function qOrElm<S extends selector, N = TagNameFromSelector<S>>(selector: S, parent?: ParentNode | selector): TagElementFromTagName<N>;
        export function qOrElm<E extends Element = HTMLElement>(selector: string, parent?: ParentNode | selector): E;
        export {};
    }
}
declare namespace PoopJs {
    let debug: boolean;
    namespace etc {
        function fullscreen(on?: boolean): Promise<boolean>;
        function hashCode(this: string): any;
        function hashCode(value: string): any;
        function init(): void;
        function currentScriptHash(): any;
        function reloadOnCurrentScriptChanged(scriptName?: string): void;
        let fastScroll: {
            (speed?: number): void;
            speed?: number;
            active?: boolean;
            off?: () => void;
        };
        function onraf(f: () => void): () => void;
        function onheightchange(f: (newHeight: number, oldHeight: number) => void): () => void;
        const kds: {
            [k: string]: string | ((e: KeyboardEvent & MouseEvent) => void);
        };
        function generateKdsCodes(e: KeyboardEvent & MouseEvent): string[];
        function kdsListener(e: KeyboardEvent & MouseEvent): void;
    }
    let kds: typeof etc.kds;
}
declare namespace PoopJs {
    type deltaTime = number | `${number}${'s' | 'h' | 'd' | 'w' | 'y'}` | null;
    function normalizeDeltaTime(maxAge: deltaTime): number;
    namespace FetchExtension {
        type RequestInitEx = RequestInit & {
            maxAge?: deltaTime;
            xml?: boolean;
            cacheUrl?: string | 'post' & {
                _?: 'post';
            };
        };
        type RequestInitExJson = RequestInit & {
            maxAge?: deltaTime;
            indexedDb?: boolean;
        };
        let defaults: RequestInit;
        let cache: Cache;
        function isStale(cachedAt: number, maxAge?: deltaTime): boolean;
        function cached(url: string, init?: RequestInitEx): Promise<Response>;
        function cachedDoc(url: string, init?: RequestInitEx): Promise<Document>;
        function doc(url: string, init?: RequestInitEx): Promise<Document>;
        function xmlResponse(url: string, init?: RequestInitEx): Promise<Response>;
        function json(url: string, init?: RequestInit): Promise<unknown>;
        function clearCache(): Promise<boolean>;
        function uncache(url: string): Promise<true | IDBValidKey>;
        function isCached(url: string, options?: {
            maxAge?: deltaTime;
            indexedDb?: boolean | 'only';
        }): Promise<boolean | 'idb'>;
        function cachedJson(url: string, init?: RequestInitExJson): Promise<unknown>;
        function idbClear(): Promise<void>;
    }
}
declare namespace PoopJs {
    namespace EntryFiltererExtension {
        /**
         * can be either Map or WeakMap
         * (WeakMap is likely to be useless if there are less then 10k old nodes in map)
         */
        let MapType: MapConstructor;
        type MapType<K extends object, V> = WeakMap<K, V>;
        export class EntryFilterer<Data extends {} = {}> {
            container: HTMLElement;
            entrySelector: selector | (() => HTMLElement[]);
            constructor(entrySelector: selector | (() => HTMLElement[]), enabled?: boolean | 'soft');
            entries: HTMLElement[];
            entryDatas: MapType<HTMLElement, Data>;
            getData(el: HTMLElement): Data;
            getData(): Data[];
            updatePending: boolean;
            reparsePending: boolean;
            requestUpdate(reparse?: boolean): void;
            parsers: ParserFn<Data>[];
            writeDataAttribute: boolean;
            addParser(parser: ParserFn<Data>): void;
            parseEntry(el: HTMLElement): Data;
            addItem<IT, T extends IT, IS extends FiltererItemPartial, S, TS extends S & IS & FiltererItemSource>(constructor: {
                new (data: TS): T;
            }, list: IT[], data: IS, source: S): T;
            filters: IFilter<Data>[];
            sorters: ISorter<Data>[];
            modifiers: IModifier<Data>[];
            get byName(): {
                [x: string]: IFilter<Data>;
            } & {
                [x: string]: ISorter<Data>;
            } & {
                [x: string]: IModifier<Data>;
            } & {
                filters: {
                    [x: string]: IFilter<Data>;
                };
                sorters: {
                    [x: string]: ISorter<Data>;
                };
                modifiers: {
                    [x: string]: IModifier<Data>;
                };
            };
            addFilter(id: string, filter: FilterFn<Data>, data?: FilterPartial<Data>): Filter<Data>;
            addVFilter<V extends number | string>(id: string, filter: ValueFilterFn<Data, V>, data: ValueFilterPartial<Data, V>): ValueFilter<Data, V>;
            addVFilter<V extends number | string>(id: string, filter: ValueFilterFn<Data, V>, data: V): any;
            addMFilter(id: string, value: (data: Data, el: HTMLElement) => string, data: MatchFilterSource<Data>): MatchFilter<Data>;
            addTagFilter(id: string, data: TagFilterSource<Data>): TagFilter<Data>;
            addSorter<V extends number | string>(id: string, sorter: SorterFn<Data, V>, data?: SorterPartialSource<Data, V>): Sorter<Data, V>;
            addModifier(id: string, modifier: ModifierFn<Data>, data?: ModifierPartial<Data>): Modifier<Data>;
            addPrefix(id: string, prefix: PrefixerFn<Data>, data?: PrefixerPartial<Data>): Prefixer<Data>;
            addPaginationInfo(id?: string, data?: Partial<FiltererItemSource>): PaginationInfoFilter<unknown>;
            filterEntries(): void;
            _previousState: {
                allSortersOff: boolean;
                updateDuration: number;
                finishedAt: number;
            };
            orderedEntries: HTMLElement[];
            orderMode: 'css' | 'swap';
            sortEntries(): void;
            modifyEntries(): void;
            moveToTop(item: ISorter<Data> | IModifier<Data>): void;
            findEntries(): HTMLElement[];
            _earliestUpdate: number;
            update(reparse?: boolean): void;
            offIncompatible(incompatible: string[]): void;
            style(s?: string): this;
            static style(s?: string): void;
            softDisable: boolean;
            disabled: boolean | 'soft';
            disable(soft?: 'soft'): void;
            enable(): void;
            clear(): void;
            get _datas(): Data[];
        }
        export {};
    }
}
declare namespace PoopJs {
    class Observer {
    }
}
declare namespace PoopJs {
    namespace PaginateExtension {
        type PRequestEvent = CustomEvent<{
            reason?: KeyboardEvent | MouseEvent;
            count: number;
            consumed: number;
            _event?: 'paginationrequest';
        }>;
        type PStartEvent = CustomEvent<{
            paginate: Paginate;
            _event?: 'paginationstart';
        }>;
        type PEndEvent = CustomEvent<{
            paginate: Paginate;
            _event?: 'paginationend';
        }>;
        type PModifyEvent = CustomEvent<{
            paginate: Paginate;
            added: HTMLElement[];
            removed: HTMLElement[];
            selector: selector;
            _event?: 'paginationmodify';
        }>;
        class Paginate {
            doc: Document;
            enabled: boolean;
            condition: selector | (() => boolean);
            queued: number;
            running: boolean;
            _inited: boolean;
            shiftRequestCount?: number | (() => number);
            static shiftRequestCount: number;
            static _inited: boolean;
            static removeDefaultRunBindings: () => void;
            static addDefaultRunBindings(): void;
            static instances: Paginate[];
            init(): void;
            onPaginationRequest(event: PRequestEvent): void;
            onPaginationEnd(event: PEndEvent): void;
            canConsumeRequest(): boolean;
            consumeRequest(): Promise<void>;
            onrun: () => Promise<void>;
            static requestPagination(count?: number, reason?: PRequestEvent['detail']['reason'], target?: Element): void;
            emitStart(): void;
            emitModify(added: any, removed: any, selector: any): void;
            emitEnd(): void;
            fetchDocument(link: Link, spinner?: boolean, maxAge?: deltaTime): Promise<Document>;
            static prefetch(source: selector): void;
            after(source: selector, target?: selector): void;
            replaceEach(source: selector, target?: selector): void;
            replace(source: selector, target?: selector): void;
            static linkToUrl(link: Link): url;
            static linkToAnchor(link: Link): HTMLAnchorElement;
            static staticCall<T>(this: void, data: Parameters<Paginate['staticCall']>[0]): Paginate;
            rawData: any;
            data: {
                condition: () => boolean;
                prefetch: any[];
                doc: selector[];
                click: selector[];
                after: selector[];
                replace: selector[];
                maxAge: deltaTime;
                start?: (this: Paginate) => void;
                modify?: (this: Paginate, doc: Document) => void;
                end?: (this: Paginate, doc: Document) => void;
                xml?: boolean;
            };
            staticCall(data: {
                condition?: selector | (() => boolean);
                prefetch?: selector | selector[];
                click?: selector | selector[];
                doc?: selector | selector[];
                after?: selector | selector[];
                replace?: selector | selector[];
                start?: (this: Paginate) => void;
                modify?: (this: Paginate, doc: Document) => void;
                end?: (this: Paginate, doc: Document) => void;
                maxAge?: deltaTime;
                cache?: deltaTime | true;
                xml?: boolean;
                pager?: selector | selector[];
                shifted?: number | (() => number);
            }): void;
        }
        const paginate: typeof Paginate.staticCall & Paginate & typeof Paginate;
    }
    const paginate: typeof PaginateExtension.Paginate.staticCall & PaginateExtension.Paginate & typeof PaginateExtension.Paginate;
}
declare namespace PoopJs {
    namespace ImageScrollingExtension {
        let imageScrollingActive: boolean;
        let imgSelector: string;
        function imageScrolling(selector?: string): () => void;
        function bindArrows(): void;
        let imageScrollingOff: () => void;
        function imgToWindowCenter(img: Element): number;
        function getAllImageInfo(): {
            img: HTMLImageElement;
            rect: DOMRect;
            index: number;
            inScreen: boolean;
            crossScreen: boolean;
            yToScreenCenter: number;
            isInCenter: boolean;
            isScreenHeight: boolean;
        }[];
        let scrollWholeImagePending: boolean;
        function getCentralImg(): HTMLImageElement;
        function scrollWholeImage(dir?: number): boolean;
        function saveScrollPosition(): {
            img: HTMLImageElement;
            offset: number;
            load(): void;
        };
        function loadScrollPosition(pos: {
            img: HTMLImageElement;
            offset: number;
        }): void;
    }
}
declare namespace PoopJs {
    function __init__(window: Window & typeof globalThis): "inited" | "already inited";
}
declare namespace PoopJs {
    export type ValueOf<T> = T[keyof T];
    export type MappedObject<T, V> = {
        [P in keyof T]: V;
    };
    export type selector = string | string & {
        _?: 'selector';
    };
    export type url = `http${string}` & {
        _?: 'url';
    };
    export type Link = HTMLAnchorElement | selector | url;
    type trimStart<S, C extends string> = S extends `${C}${infer S1}` ? trimStart<S1, C> : S;
    type trimEnd<S, C extends string> = S extends `${infer S1}${C}` ? trimEnd<S1, C> : S;
    type trim<S, C extends string = ' ' | '\t' | '\n'> = trimStart<trimEnd<S, C>, C>;
    type split<S, C extends string> = S extends `${infer S1}${C}${infer S2}` ? split<S1, C> | split<S2, C> : S;
    type splitStart<S, C extends string> = S extends `${infer S1}${C}${infer _S2}` ? splitStart<S1, C> : S;
    type splitEnd<S, C extends string> = S extends `${infer _S1}${C}${infer S2}` ? splitEnd<S2, C> : S;
    type replace<S, C extends string, V extends string> = S extends `${infer S1}${C}${infer S3}` ? replace<`${S1}${V}${S3}`, C, V> : S;
    type ws = ' ' | '\t' | '\n';
    export type TagNameFromSelector<S extends string> = splitStart<splitEnd<trim<split<replace<replace<replace<S, `[${string}]`, '.'>, `(${string})`, '.'>, Exclude<ws, ' '>, ' '>, ','>>, ws | '>'>, '.' | '#' | ':'>;
    export type TagElementFromTagName<S> = S extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[S] : HTMLElement;
    export {};
}
declare const __init__: "inited" | "already inited";
declare const elm: typeof PoopJs.Elm.elm;
declare const q: typeof PoopJs.QuerySelector.WindowQ.q & {
    orElm: typeof PoopJs.Elm.qOrElm;
};
declare const qq: typeof PoopJs.QuerySelector.WindowQ.qq;
declare const paginate: typeof PoopJs.paginate;
declare const imageScrolling: typeof PoopJs.ImageScrollingExtension;
declare namespace fetch {
    let cached: typeof PoopJs.FetchExtension.cached & {
        doc: typeof PoopJs.FetchExtension.cachedDoc;
        json: typeof PoopJs.FetchExtension.cachedJson;
    };
    let doc: typeof PoopJs.FetchExtension.doc & {
        cached: typeof PoopJs.FetchExtension.cachedDoc;
    };
    let cachedDoc: typeof PoopJs.FetchExtension.cachedDoc;
    let json: typeof PoopJs.FetchExtension.json & {
        cached: typeof PoopJs.FetchExtension.cachedJson;
    };
    let isCached: typeof PoopJs.FetchExtension.isCached;
}
interface Window {
    readonly __init__: "inited" | "already inited";
    elm: typeof PoopJs.Elm.elm;
    q: typeof PoopJs.QuerySelector.WindowQ.q & {
        orElm: typeof PoopJs.Elm.qOrElm;
    };
    qq: typeof PoopJs.QuerySelector.WindowQ.qq;
    paginate: typeof PoopJs.paginate;
    imageScrolling: typeof PoopJs.ImageScrollingExtension;
    fetch: {
        (input: RequestInfo, init?: RequestInit): Promise<Response>;
        cached: typeof PoopJs.FetchExtension.cached & {
            doc: typeof PoopJs.FetchExtension.cachedDoc;
            json: typeof PoopJs.FetchExtension.cachedJson;
        };
        doc: typeof PoopJs.FetchExtension.doc & {
            cached: typeof PoopJs.FetchExtension.cachedDoc;
        };
        cachedDoc: typeof PoopJs.FetchExtension.cachedDoc;
        json: typeof PoopJs.FetchExtension.json & {
            cached: typeof PoopJs.FetchExtension.cachedJson;
        };
        isCached: typeof PoopJs.FetchExtension.isCached;
    };
}
interface Element {
    q: typeof PoopJs.QuerySelector.ElementQ.q;
    qq: typeof PoopJs.QuerySelector.ElementQ.qq;
    appendTo: typeof PoopJs.ElementExtension.appendTo;
    emit: typeof PoopJs.ElementExtension.emit;
    addEventListener<T extends CustomEvent<{
        _event?: string;
    }>>(type: T['detail']['_event'], listener: (this: Document, ev: T) => any, options?: boolean | AddEventListenerOptions): void;
}
interface Document {
    q: typeof PoopJs.QuerySelector.DocumentQ.q;
    qq: typeof PoopJs.QuerySelector.DocumentQ.qq;
    cachedAt: number;
    addEventListener<T extends CustomEvent<{
        _event?: string;
    }>>(type: T['detail']['_event'], listener: (this: Document, ev: T) => any, options?: boolean | AddEventListenerOptions): void;
}
interface ObjectConstructor {
    defineValue: typeof PoopJs.ObjectExtension.defineValue;
    defineGetter: typeof PoopJs.ObjectExtension.defineGetter;
    setPrototypeOf<T, P>(o: T, proto: P): T & P;
    fromEntries<K extends string | number | symbol, V>(entries: readonly (readonly [K, V])[]): {
        [k in K]: V;
    };
}
interface PromiseConstructor {
    empty: typeof PoopJs.PromiseExtension.empty;
    frame: typeof PoopJs.PromiseExtension.frame;
    raf: typeof PoopJs.PromiseExtension.frame;
}
interface Array<T> {
    vsort: typeof PoopJs.ArrayExtension.vsort;
    pmap: typeof PoopJs.ArrayExtension.PMap.this_pmap;
}
interface ArrayConstructor {
    map: typeof PoopJs.ArrayExtension.map;
}
interface DateConstructor {
    _now(): number;
}
interface Date {
    _getTime(): number;
}
interface Performance {
    _now: Performance['now'];
}
interface Window {
    _requestAnimationFrame: Window['requestAnimationFrame'];
}
interface Response {
    cachedAt: number;
}
interface Function {
    bind<T, R, ARGS extends any[]>(this: (this: T, ...args: ARGS) => R, thisArg: T): ((...args: ARGS) => R);
}
interface String {
    split(splitter: string): [string, ...string[]];
}
interface Array<T> {
    pop(): this extends [T, ...T[]] ? T : T | undefined;
    at(index: number): T;
    findLast<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    findLast(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
}
interface Math {
    sign(x: number): -1 | 0 | 1;
}
declare namespace PoopJs {
    namespace EntryFiltererExtension {
        class FiltererItem<Data> {
            id: string;
            name?: string;
            description?: string;
            threeWay: Wayness;
            mode: Mode;
            parent: EntryFilterer;
            button: HTMLButtonElement;
            incompatible?: string[];
            hidden: boolean;
            constructor(data: FiltererItemSource);
            click(event: MouseEvent): void;
            contextmenu(event: MouseEvent): void;
            toggleMode(mode: Mode, force?: boolean): void;
            remove(): void;
            show(): void;
            hide(): void;
        }
    }
}
declare namespace PoopJs {
    namespace EntryFiltererExtension {
        export class Filter<Data> extends FiltererItem<Data> implements IFilter<Data> {
            filter: FilterFn<Data>;
            constructor(data: FilterSource<Data>);
            /** returns if item should be visible */
            apply(data: Data, el: HTMLElement): boolean;
        }
        export class ValueFilter<Data, V extends string | number> extends FiltererItem<Data> implements IFilter<Data> {
            filter: ValueFilterFn<Data, V>;
            input: HTMLInputElement;
            lastValue: V;
            constructor(data: ValueFilterSource<Data, V>);
            change(): void;
            /** returns if item should be visible */
            apply(data: Data, el: HTMLElement): boolean;
            getValue(): V;
        }
        export class MatchFilter<Data> extends FiltererItem<Data> implements IFilter<Data> {
            value: (data: Data, el: HTMLElement) => string;
            input: HTMLInputElement;
            lastValue: string;
            matcher: (input: string) => boolean;
            constructor(data: MatchFilterSource<Data>);
            change(): void;
            apply(data: Data, el: HTMLElement): boolean;
            generateMatcher(source: string): ((input: string) => boolean);
        }
        type TagGetterFn<Data> = selector | ((data: Data, el: HTMLElement, mode: Mode) => (HTMLElement[] | string[]));
        export interface TagFilterSource<Data> extends FiltererItemSource {
            tags: TagGetterFn<Data>;
            input?: string;
            highightClass?: string;
        }
        type TagMatcher = {
            positive: boolean;
            matches: (s: string) => boolean;
        };
        export class TagFilter<Data> extends FiltererItem<Data> implements IFilter<Data> {
            tags: TagGetterFn<Data>;
            input: HTMLInputElement;
            highightClass: string;
            lastValue: string;
            cachedMatcher: TagMatcher[];
            constructor(data: TagFilterSource<Data>);
            apply(data: Data, el: HTMLElement): boolean;
            resetHighlight(tag: string | HTMLElement): void;
            highlightTag(tag: string | HTMLElement, positive: boolean): void;
            getTags(data: Data, el: HTMLElement): HTMLElement[] | string[];
            getTagStrings(data: Data, el: HTMLElement): string[];
            change(): void;
            parseMatcher(matcher: string): TagMatcher[];
        }
        export class PaginationInfoFilter<Data> extends FiltererItem<Data> implements IFilter<Data> {
            constructor(data: FiltererItemSource);
            apply(): boolean;
            Paginate: typeof PaginateExtension.Paginate;
            countPaginate(): {
                running: number;
                queued: number;
            };
            updateInfo(): void;
            init(): Promise<void>;
        }
        export {};
    }
}
declare namespace PoopJs {
    namespace EntryFiltererExtension {
        class Modifier<Data> extends FiltererItem<Data> implements IModifier<Data> {
            modifier: ModifierFn<Data>;
            runOnNoChange?: boolean;
            constructor(data: ModifierSource<Data>);
            toggleMode(mode: Mode, force?: boolean): void;
            apply(data: Data, el: HTMLElement): void;
        }
        class Prefixer<Data> extends FiltererItem<Data> implements IModifier<Data> {
            target: selector | ((e: HTMLElement, data: Data, mode: Mode) => (HTMLElement | HTMLElement[]));
            prefix?: (data: Data, el: HTMLElement, mode: Mode) => string;
            postfix?: (data: Data, el: HTMLElement, mode: Mode) => string;
            prefixAttribute: string;
            postfixAttribute: string;
            all: boolean;
            constructor(data: PrefixerSource<Data>);
            apply(data: Data, el: HTMLElement): void;
            getTargets(el: HTMLElement, data: Data): HTMLElement[];
        }
    }
}
declare namespace PoopJs {
    namespace EntryFiltererExtension {
        class Sorter<Data, V extends number | string> extends FiltererItem<Data> implements ISorter<Data> {
            sorter: SorterFn<Data, V>;
            comparator: (a: V, b: V) => number;
            constructor(data: SorterSource<Data, V>);
            toggleMode(mode: Mode, force?: boolean): void;
            sort(list: [Data, HTMLElement][]): [Data, HTMLElement][];
            /** returns order of entry */
            apply(data: Data, el: HTMLElement): V;
            compare(a: V, b: V): number;
        }
    }
}
declare namespace PoopJs {
    namespace EntryFiltererExtension {
        type Wayness = false | true | 'dir';
        type Mode = 'off' | 'on' | 'opposite';
        type ParserFn<Data> = (el: HTMLElement, data: Partial<Data>) => Partial<Data> | void | PromiseLike<Partial<Data | void>>;
        type FilterFn<Data> = (data: Data, el: HTMLElement, mode: Mode) => boolean;
        type SorterFn<Data, V> = (data: Data, el: HTMLElement, mode: Mode) => V;
        type ModifierFn<Data> = (data: Data, el: HTMLElement, mode: Mode, oldMode: Mode | null) => void;
        type ValueFilterFn<Data, V> = (value: V, data: Data, el: HTMLElement) => boolean;
        type PrefixerFn<Data> = (data: Data, el: HTMLElement, mode: Mode) => string;
        interface IFilter<Data> extends FiltererItem<Data> {
            apply(data: Data, el: HTMLElement): boolean;
        }
        interface ISorter<Data> extends FiltererItem<Data> {
            sort(list: [Data, HTMLElement][]): [Data, HTMLElement][];
        }
        interface IModifier<Data> extends FiltererItem<Data> {
            apply(data: Data, el: HTMLElement): void;
        }
        interface FiltererItemSource {
            button?: selector;
            id: string;
            name?: string;
            description?: string;
            threeWay?: Wayness;
            mode?: Mode;
            parent: EntryFilterer;
            incompatible?: string[];
            hidden?: boolean;
        }
        interface FilterSource<Data> extends FiltererItemSource {
            filter: FilterFn<Data>;
        }
        interface ValueFilterSource<Data, V> extends FiltererItemSource {
            filter: ValueFilterFn<Data, V>;
            input: V;
        }
        interface MatchFilterSource<Data> extends FiltererItemSource {
            value?: (data: Data, el: HTMLElement) => string;
            input?: string;
        }
        interface SorterSource<Data, V> extends FiltererItemSource {
            sorter: SorterFn<Data, V>;
            comparator?: ((a: V, b: V) => number) | V;
        }
        interface ModifierSource<Data> extends FiltererItemSource {
            modifier: ModifierFn<Data>;
        }
        interface PrefixerSource<Data> extends FiltererItemSource {
            target?: selector | ((el: HTMLElement, data: Data, mode: Mode) => HTMLElement);
            prefix?: (data: Data, el: HTMLElement) => string;
            postfix?: (data: Data, el: HTMLElement) => string;
            prefixAttribute?: string;
            postfixAttribute?: string;
            all?: boolean;
        }
        interface FiltererItemPartial {
            button?: selector;
            id?: string;
            name?: string;
            description?: string;
            threeWay?: Wayness;
            mode?: Mode;
            incompatible?: string[];
            hidden?: boolean;
        }
        interface FilterPartial<Data> extends FiltererItemPartial {
        }
        interface ValueFilterPartial<Data, V> extends FiltererItemPartial {
            input: V;
        }
        interface SorterPartialSource<Data, V> extends FiltererItemPartial {
            comparator?: ((a: V, b: V) => number) | V;
        }
        interface ModifierPartial<Data> extends FiltererItemPartial {
        }
        interface PrefixerPartial<Data> extends FiltererItemPartial {
            target?: selector | ((el: HTMLElement, data: Data, mode: Mode) => HTMLElement);
            prefix?: (data: Data, el: HTMLElement) => string;
            postfix?: (data: Data, el: HTMLElement) => string;
            prefixAttribute?: string;
            postfixAttribute?: string;
            all?: boolean;
        }
    }
    let EF: typeof EntryFiltererExtension.EntryFilterer;
}
declare namespace PoopJs {
    class ScrollInfo {
        el: HTMLElement;
        /** absolute rect */
        rect: DOMRect;
        constructor(el: HTMLElement);
        topOffset(scrollY?: number): number;
        centerOffset(scrollY?: number): number;
        bottomOffset(scrollY?: number): number;
        distanceFromScreen(scrollY?: number): number;
        get fullDir(): 1 | -1 | 0;
        get _offsets(): number[];
    }
    class ImageScroller {
        selector: string;
        enabled: boolean;
        listener?: any;
        stopPropagation: boolean;
        constructor(selector?: string);
        _wheelListener?: (event: WheelEvent) => void;
        onWheelScrollFailed?: (event: WheelEvent) => void;
        bindWheel(): void;
        _arrowListener?: (event: KeyboardEvent) => void;
        bindArrows(): void;
        /** enable this scroller */
        on(selector?: string): this;
        /** disable this scroller */
        off(selector?: string): this;
        mode: 'single' | 'group';
        /** scroll to the next item */
        scroll(dir: -1 | 0 | 1): boolean;
        scrollToNextCenter(dir: -1 | 0 | 1): boolean;
        scrollToNextGroup(dir: -1 | 0 | 1): boolean;
        _nextScrollTarget(dir: -1 | 0 | 1, mode: 'single'): ScrollInfo | undefined;
        _nextScrollTarget(dir: -1 | 0 | 1, mode: 'group'): ScrollInfo[] | undefined;
        getAllScrolls(): ScrollInfo[];
        /** used  */
        keep(resizer: () => any | Promise<any>, raf?: boolean): Promise<void>;
        /** save current item scroll position */
        save(): {
            info: ScrollInfo;
            offset: number;
            restore(): void;
        };
        static createDefault(): ImageScroller;
    }
    let is: ImageScroller;
    const styleVars: Record<string, string>;
    const styleVarsN: Record<string, number>;
}
