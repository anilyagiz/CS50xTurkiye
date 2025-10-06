(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/design-system/hooks/use-mouse.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMousePosition",
    ()=>useMousePosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useMousePosition() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "822ef46faa6db4edbdb0c7a3f7d7b11883ad6d8fae290f7442143b4fa219ca7b") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "822ef46faa6db4edbdb0c7a3f7d7b11883ad6d8fae290f7442143b4fa219ca7b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            x: 0,
            y: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const mousePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const handleMouseMove = (event)=>{
                mousePosition.current = {
                    x: event.clientX,
                    y: event.clientY
                };
            };
            window.addEventListener("mousemove", handleMouseMove);
            return ()=>{
                window.removeEventListener("mousemove", handleMouseMove);
            };
        };
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return mousePosition;
}
_s(useMousePosition, "CIUDpKRbZj5ZscJI/PwQTZ4wXJA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/lib/random.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeededRandom",
    ()=>SeededRandom,
    "createSeed",
    ()=>createSeed,
    "createSeededRandom",
    ()=>createSeededRandom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
const MAX_SEED = 2_147_483_647;
const MIN_SEED = 0;
const SEED_INCREMENT = 2_147_483_646;
const SEED_MULTIPLIER = 16_807;
class SeededRandom {
    /**
   * Generate the next random number in the sequence
   * @returns A pseudo-random number between 0 and 1
   */ next() {
        this.seed = this.seed * SEED_MULTIPLIER % MAX_SEED;
        return (this.seed - 1) / SEED_INCREMENT;
    }
    /**
   * Generate a random float within a specified range
   * @param min - Minimum value (inclusive)
   * @param max - Maximum value (exclusive)
   * @returns A pseudo-random float between min and max
   */ nextFloat(min, max) {
        return this.next() * (max - min) + min;
    }
    /**
   * Generate a random integer within a specified range
   * @param min - Minimum value (inclusive)
   * @param max - Maximum value (exclusive)
   * @returns A pseudo-random integer between min and max
   */ nextInt(min, max) {
        return Math.floor(this.next() * (max - min)) + min;
    }
    /**
   * Generate a random boolean value
   * @param probability - Probability of returning true (0-1), defaults to 0.5
   * @returns A pseudo-random boolean
   */ nextBoolean() {
        let probability = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.5;
        return this.next() < probability;
    }
    /**
   * Shuffle an array using Fisher-Yates algorithm with deterministic randomness
   * @param array - The array to shuffle
   * @returns A new shuffled array (does not modify the original)
   */ shuffle(array) {
        const shuffled = [
            ...array
        ];
        for(let i = shuffled.length - 1; i > 0; i--){
            const j = this.nextInt(0, i + 1);
            [shuffled[i], shuffled[j]] = [
                shuffled[j],
                shuffled[i]
            ];
        }
        return shuffled;
    }
    /**
   * Pick a random element from an array
   * @param array - The array to pick from
   * @returns A random element from the array, or undefined if array is empty
   */ choice(array) {
        if (array.length === 0) {
            return;
        }
        return array[this.nextInt(0, array.length)];
    }
    constructor(seed){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "seed", void 0);
        this.seed = seed % MAX_SEED; // Ensure seed is within valid range
        if (this.seed <= MIN_SEED) {
            this.seed += SEED_INCREMENT;
        }
    }
}
function createSeed() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    let seed = 0;
    for (const input of inputs){
        if (typeof input === "number") {
            seed += input;
        } else {
            // Convert string to number using character codes
            seed += Array.from(input).reduce((acc, char)=>acc + char.charCodeAt(0), 0);
        }
    }
    return Math.abs(seed) % MAX_SEED;
}
function createSeededRandom() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return new SeededRandom(createSeed(...inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/ui/particles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Particles",
    ()=>Particles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$media$2d$query$2f$use$2d$media$2d$query$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$hooks$2f$use$2d$mouse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/hooks/use-mouse.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$random$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/random.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const MIN_PARTICLE_SIZE = 1;
const MAX_PARTICLE_SIZE = 3;
const MIN_TARGET_ALPHA = 0.1;
const MAX_TARGET_ALPHA = 0.7;
const MIN_PARTICLE_SPEED = -0.1;
const MAX_PARTICLE_SPEED = 0.1;
const MIN_MAGNETISM = 0.1;
const MAX_MAGNETISM = 4.1;
const REMAP_EDGE_END = 20;
const ALPHA_FADE_IN_SPEED = 0.02;
function ParticlesComponent(param) {
    let { className = "", quantity = 50, staticity = 100, ease = 100 } = param;
    _s();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const circles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mousePositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$hooks$2f$use$2d$mouse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMousePosition"])();
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const canvasSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        w: 0,
        h: 0
    });
    const dpr = ("TURBOPACK compile-time truthy", 1) ? window.devicePixelRatio : "TURBOPACK unreachable";
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$media$2d$query$2f$use$2d$media$2d$query$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 768px)");
    const rngRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$random$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeededRandom"])(quantity, staticity, ease));
    const isThemeDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticlesComponent.useMemo[isThemeDark]": ()=>{
            if (!resolvedTheme) {
                return false;
            }
            return resolvedTheme === "dark";
        }
    }["ParticlesComponent.useMemo[isThemeDark]"], [
        resolvedTheme
    ]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: we need to call initCanvas and animate on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticlesComponent.useEffect": ()=>{
            if (canvasRef.current) {
                context.current = canvasRef.current.getContext("2d");
            }
            initCanvas();
            animate();
            window.addEventListener("resize", initCanvas);
            return ({
                "ParticlesComponent.useEffect": ()=>{
                    window.removeEventListener("resize", initCanvas);
                }
            })["ParticlesComponent.useEffect"];
        }
    }["ParticlesComponent.useEffect"], []);
    // when color changes, we need to re-render the particles
    // biome-ignore lint/correctness/useExhaustiveDependencies: we need to call initCanvas and animate on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticlesComponent.useEffect": ()=>{
            if (resolvedTheme) {
                initCanvas();
                animate();
            }
        }
    }["ParticlesComponent.useEffect"], [
        resolvedTheme
    ]);
    const resizeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[resizeCanvas]": ()=>{
            if (canvasContainerRef.current && canvasRef.current && context.current) {
                circles.current.length = 0;
                canvasSize.current.w = canvasContainerRef.current.offsetWidth;
                canvasSize.current.h = canvasContainerRef.current.offsetHeight;
                canvasRef.current.width = canvasSize.current.w * dpr;
                canvasRef.current.height = canvasSize.current.h * dpr;
                canvasRef.current.style.width = "".concat(canvasSize.current.w, "px");
                canvasRef.current.style.height = "".concat(canvasSize.current.h, "px");
                context.current.scale(dpr, dpr);
            }
        }
    }["ParticlesComponent.useCallback[resizeCanvas]"], [
        dpr
    ]);
    const circleParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[circleParams]": ()=>{
            const rng = rngRef.current;
            const x = Math.floor(rng.next() * canvasSize.current.w);
            const y = Math.floor(rng.next() * canvasSize.current.h);
            const translateX = 0;
            const translateY = 0;
            const size = rng.nextInt(MIN_PARTICLE_SIZE, MAX_PARTICLE_SIZE);
            const alpha = 0;
            const targetAlpha = Number.parseFloat(rng.nextFloat(MIN_TARGET_ALPHA, MAX_TARGET_ALPHA).toFixed(1));
            const dx = rng.nextFloat(MIN_PARTICLE_SPEED, MAX_PARTICLE_SPEED);
            const dy = rng.nextFloat(MIN_PARTICLE_SPEED, MAX_PARTICLE_SPEED);
            const magnetism = rng.nextFloat(MIN_MAGNETISM, MAX_MAGNETISM);
            return {
                x,
                y,
                translateX,
                translateY,
                size,
                alpha,
                targetAlpha,
                dx,
                dy,
                magnetism
            };
        }
    }["ParticlesComponent.useCallback[circleParams]"], []);
    const drawCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[drawCircle]": function(circle) {
            let update = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            if (context.current) {
                const { x: x_0, y: y_0, translateX: translateX_0, translateY: translateY_0, size: size_0, alpha: alpha_0 } = circle;
                context.current.translate(translateX_0, translateY_0);
                context.current.beginPath();
                context.current.arc(x_0, y_0, size_0, 0, 2 * Math.PI);
                context.current.fillStyle = isThemeDark ? "oklch(0.985 0 0 / ".concat(alpha_0, ")") : "oklch(0.145 0 0 / ".concat(alpha_0, ")");
                context.current.fill();
                context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
                if (!update) {
                    circles.current.push(circle);
                }
            }
        }
    }["ParticlesComponent.useCallback[drawCircle]"], [
        dpr,
        isThemeDark
    ]);
    const clearContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[clearContext]": ()=>{
            if (context.current) {
                context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
            }
        }
    }["ParticlesComponent.useCallback[clearContext]"], []);
    const drawParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[drawParticles]": ()=>{
            clearContext();
            const particleCount = quantity;
            for(let i = 0; i < particleCount; i++){
                const circle_0 = circleParams();
                drawCircle(circle_0);
            }
        }
    }["ParticlesComponent.useCallback[drawParticles]"], [
        circleParams,
        clearContext,
        drawCircle,
        quantity
    ]);
    const initCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[initCanvas]": ()=>{
            resizeCanvas();
            drawParticles();
        }
    }["ParticlesComponent.useCallback[initCanvas]"], [
        drawParticles,
        resizeCanvas
    ]);
    const onMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[onMouseMove]": ()=>{
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                const { w, h } = canvasSize.current;
                const x_1 = mousePositionRef.current.x - rect.left - w / 2;
                const y_1 = mousePositionRef.current.y - rect.top - h / 2;
                const inside = x_1 < w / 2 && x_1 > -w / 2 && y_1 < h / 2 && y_1 > -h / 2;
                if (inside) {
                    mouse.current.x = x_1;
                    mouse.current.y = y_1;
                }
            }
        }
    }["ParticlesComponent.useCallback[onMouseMove]"], [
        mousePositionRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticlesComponent.useEffect": ()=>{
            // Set up a continuous update for mouse position
            let animationId;
            const updateMousePosition = {
                "ParticlesComponent.useEffect.updateMousePosition": ()=>{
                    onMouseMove();
                    animationId = requestAnimationFrame(updateMousePosition);
                }
            }["ParticlesComponent.useEffect.updateMousePosition"];
            updateMousePosition();
            return ({
                "ParticlesComponent.useEffect": ()=>{
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                    }
                }
            })["ParticlesComponent.useEffect"];
        }
    }["ParticlesComponent.useEffect"], [
        onMouseMove
    ]);
    const remapValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[remapValue]": (param)=>{
            let { value, start1, end1, start2, end2 } = param;
            const remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;
            return remapped > 0 ? remapped : 0;
        }
    }["ParticlesComponent.useCallback[remapValue]"], []);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesComponent.useCallback[animate]": ()=>{
            clearContext();
            circles.current.forEach({
                "ParticlesComponent.useCallback[animate]": (circle_1, i_0)=>{
                    // Handle the alpha value
                    const edge = [
                        circle_1.x + circle_1.translateX - circle_1.size,
                        // distance from left edge
                        canvasSize.current.w - circle_1.x - circle_1.translateX - circle_1.size,
                        // distance from right edge
                        circle_1.y + circle_1.translateY - circle_1.size,
                        // distance from top edge
                        canvasSize.current.h - circle_1.y - circle_1.translateY - circle_1.size // distance from bottom edge
                    ];
                    const closestEdge = edge.reduce({
                        "ParticlesComponent.useCallback[animate].closestEdge": (a, b)=>Math.min(a, b)
                    }["ParticlesComponent.useCallback[animate].closestEdge"]);
                    const remapClosestEdge = Number.parseFloat(remapValue({
                        value: closestEdge,
                        start1: 0,
                        end1: REMAP_EDGE_END,
                        start2: 0,
                        end2: 1
                    }).toFixed(2));
                    if (remapClosestEdge > 1) {
                        circle_1.alpha += ALPHA_FADE_IN_SPEED;
                        if (circle_1.alpha > circle_1.targetAlpha) {
                            circle_1.alpha = circle_1.targetAlpha;
                        }
                    } else {
                        circle_1.alpha = circle_1.targetAlpha * remapClosestEdge;
                    }
                    circle_1.x += circle_1.dx;
                    circle_1.y += circle_1.dy;
                    // Only apply mouse-based movement on non-mobile devices
                    if (isMobile) {
                        // On mobile, gradually reset any existing translation to zero
                        circle_1.translateX += -circle_1.translateX / ease;
                        circle_1.translateY += -circle_1.translateY / ease;
                    } else {
                        circle_1.translateX += (mouse.current.x / (staticity / circle_1.magnetism) - circle_1.translateX) / ease;
                        circle_1.translateY += (mouse.current.y / (staticity / circle_1.magnetism) - circle_1.translateY) / ease;
                    }
                    // circle gets out of the canvas
                    if (circle_1.x < -circle_1.size || circle_1.x > canvasSize.current.w + circle_1.size || circle_1.y < -circle_1.size || circle_1.y > canvasSize.current.h + circle_1.size) {
                        // remove the circle from the array
                        circles.current.splice(i_0, 1);
                        // create a new circle
                        const newCircle = circleParams();
                        drawCircle(newCircle);
                    // update the circle position
                    } else {
                        drawCircle({
                            ...circle_1,
                            x: circle_1.x,
                            y: circle_1.y,
                            translateX: circle_1.translateX,
                            translateY: circle_1.translateY,
                            alpha: circle_1.alpha
                        }, true);
                    }
                }
            }["ParticlesComponent.useCallback[animate]"]);
            window.requestAnimationFrame(animate);
        }
    }["ParticlesComponent.useCallback[animate]"], [
        circleParams,
        clearContext,
        drawCircle,
        ease,
        remapValue,
        staticity,
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ref: canvasContainerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/particles.tsx",
            lineNumber: 251,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/design-system/components/ui/particles.tsx",
        lineNumber: 250,
        columnNumber: 10
    }, this);
}
_s(ParticlesComponent, "3pTV9nsLh7pdTPT1PVxiDDPAr5o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$hooks$2f$use$2d$mouse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMousePosition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$media$2d$query$2f$use$2d$media$2d$query$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = ParticlesComponent;
const Particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c1 = ()=>Promise.resolve(ParticlesComponent), {
    ssr: false
});
_c2 = Particles;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ParticlesComponent");
__turbopack_context__.k.register(_c1, "Particles$dynamic");
__turbopack_context__.k.register(_c2, "Particles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/components/home/lang-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangSwitcher",
    ()=>LangSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$data$2f$lang$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/internationalization/data/lang.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/internationalization/src/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCircleFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleFilled.mjs [app-client] (ecmascript) <export default as IconCircleFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LanguagesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as LanguagesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function LangSwitcher() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "dc8d4fe662d7df912d75e13faae7858bad3871ba17d52ead79f6a6bb8b959e23") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc8d4fe662d7df912d75e13faae7858bad3871ba17d52ead79f6a6bb8b959e23";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    let t0;
    if ($[1] !== params || $[2] !== pathname || $[3] !== router) {
        t0 = function handlePrefetch(locale) {
            router.prefetch({
                pathname,
                params
            }, {
                locale
            });
        };
        $[1] = params;
        $[2] = pathname;
        $[3] = router;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const handlePrefetch = t0;
    let t1;
    if ($[5] !== params || $[6] !== pathname || $[7] !== queryClient || $[8] !== router) {
        t1 = function handleChangeLocale(locale_0) {
            startTransition(async ()=>{
                var _window;
                router.replace({
                    pathname,
                    params
                }, {
                    locale: locale_0
                });
                if ((_window = window) === null || _window === void 0 ? void 0 : _window.pagefind) {
                    var _window_pagefind_destroy, _window_pagefind;
                    await ((_window_pagefind_destroy = (_window_pagefind = window.pagefind).destroy) === null || _window_pagefind_destroy === void 0 ? void 0 : _window_pagefind_destroy.call(_window_pagefind));
                    queryClient.invalidateQueries({
                        queryKey: [
                            "search"
                        ]
                    });
                }
            });
        };
        $[5] = params;
        $[6] = pathname;
        $[7] = queryClient;
        $[8] = router;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const handleChangeLocale = t1;
    let t2;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LanguagesIcon$3e$__["LanguagesIcon"], {}, void 0, false, {
            fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== t) {
        t3 = t("language");
        $[11] = t;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate",
                        children: t3
                    }, void 0, false, {
                        fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
                        lineNumber: 92,
                        columnNumber: 76
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
                lineNumber: 92,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== currentLocale || $[16] !== handleChangeLocale || $[17] !== handlePrefetch || $[18] !== isPending) {
        t5 = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$data$2f$lang$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                disabled: isPending,
                onClick: ()=>handleChangeLocale(language.value),
                onFocus: ()=>handlePrefetch(language.value),
                onMouseEnter: ()=>handlePrefetch(language.value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate",
                        children: language.label
                    }, void 0, false, {
                        fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
                        lineNumber: 100,
                        columnNumber: 246
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCircleFilled$3e$__["IconCircleFilled"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto size-3 text-primary opacity-0 transition-opacity", currentLocale === language.value && "opacity-100")
                    }, void 0, false, {
                        fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
                        lineNumber: 100,
                        columnNumber: 296
                    }, this)
                ]
            }, language.value, true, {
                fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
                lineNumber: 100,
                columnNumber: 36
            }, this));
        $[15] = currentLocale;
        $[16] = handleChangeLocale;
        $[17] = handlePrefetch;
        $[18] = isPending;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    let t6;
    if ($[20] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            align: "end",
            children: t5
        }, void 0, false, {
            fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[20] = t5;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== t4 || $[23] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/home/lang-switcher.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[22] = t4;
        $[23] = t6;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    return t7;
}
_s(LangSwitcher, "XJwz5X3awx2f65DpFa12Qsm6M2s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = LangSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LangSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/components/home/search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeSearch",
    ()=>HomeSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ai$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ai/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/internationalization/src/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ai$2f$chat$2d$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/components/ai/chat-model.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$ai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/context/use-ai.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/context/use-chat.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Mock user data when Convex is not available
const MOCK_USER = {
    name: "Demo User",
    email: "demo@example.com",
    image: null
};
function HomeSearch() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "174fca47bb6b171ccb60d4f5240e3fa974fc37ac45fa8fe672e555075a7bd17e") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "174fca47bb6b171ccb60d4f5240e3fa974fc37ac45fa8fe672e555075a7bd17e";
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Ai");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$ai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAi"])(_temp);
    const setText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$ai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAi"])(_temp2);
    const { status, sendMessage, setMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])(_temp3);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    let t0;
    if ($[1] !== router || $[2] !== sendMessage || $[3] !== setMessages || $[4] !== setText) {
        t0 = (message)=>{
            startTransition(()=>{
                var _message_text;
                if (!((_message_text = message.text) === null || _message_text === void 0 ? void 0 : _message_text.trim())) {
                    return;
                }
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                setMessages([]);
                router.push("/chat");
                sendMessage({
                    text: message.text,
                    files: message.files
                });
                setText("");
            });
        };
        $[1] = router;
        $[2] = sendMessage;
        $[3] = setMessages;
        $[4] = setText;
        $[5] = t0;
    } else {
        t0 = $[5];
    }
    const handleSubmit = t0;
    let t1;
    if ($[6] !== setText) {
        t1 = (e)=>setText(e.target.value);
        $[6] = setText;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== t) {
        t2 = t("text-placeholder");
        $[8] = t;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== t1 || $[11] !== t2 || $[12] !== text) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ai$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputTextarea"], {
            autoFocus: true,
            className: "p-4",
            onChange: t1,
            placeholder: t2,
            value: text
        }, void 0, false, {
            fileName: "[project]/apps/www/components/home/search.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = text;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ai$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputTools"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$components$2f$ai$2f$chat$2d$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiChatModel"], {}, void 0, false, {
                fileName: "[project]/apps/www/components/home/search.tsx",
                lineNumber: 93,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/home/search.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== isPending || $[16] !== status) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ai$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputToolbar"], {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ai$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputSubmit"], {
                    disabled: isPending,
                    isPending: isPending,
                    status: status
                }, void 0, false, {
                    fileName: "[project]/apps/www/components/home/search.tsx",
                    lineNumber: 100,
                    columnNumber: 34
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/home/search.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[15] = isPending;
        $[16] = status;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== handleSubmit || $[19] !== t3 || $[20] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ai$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInput"], {
            onSubmit: handleSubmit,
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/home/search.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[18] = handleSubmit;
        $[19] = t3;
        $[20] = t5;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    return t6;
}
_s(HomeSearch, "JMUnXkv0FI4Qylebw5F8Jf6P7zk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$ai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAi"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$ai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAi"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = HomeSearch;
function _temp3(state_1) {
    return state_1.chat;
}
function _temp2(state_0) {
    return state_0.setText;
}
function _temp(state) {
    return state.text;
}
var _c;
__turbopack_context__.k.register(_c, "HomeSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Languages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m5 8 6 6",
            key: "1wu5hv"
        }
    ],
    [
        "path",
        {
            d: "m4 14 6-6 2-3",
            key: "1k1g8d"
        }
    ],
    [
        "path",
        {
            d: "M2 5h12",
            key: "or177f"
        }
    ],
    [
        "path",
        {
            d: "M7 2h1",
            key: "1t2jsx"
        }
    ],
    [
        "path",
        {
            d: "m22 22-5-10-5 10",
            key: "don7ne"
        }
    ],
    [
        "path",
        {
            d: "M14 18h6",
            key: "1m8k6r"
        }
    ]
];
const Languages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("languages", __iconNode);
;
 //# sourceMappingURL=languages.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as LanguagesIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguagesIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_d1502fb1._.js.map