(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/connection/lib/fetcher.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetcher",
    ()=>fetcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/HTTPError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-client] (ecmascript)");
;
const url = ("TURBOPACK compile-time truthy", 1) ? "http://localhost:3002" : "TURBOPACK unreachable";
const URL_DETAILS_REGEX = /:.*$/;
async function fetcher(endpoint, options) {
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("".concat(url).concat(endpoint), {
            ...options
        }).json();
        return {
            data: response,
            error: null
        };
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutError"]) {
            return {
                data: null,
                error: {
                    status: 408,
                    message: "Request timed out. Please try again later."
                }
            };
        }
        if (error instanceof SyntaxError) {
            return {
                data: null,
                error: null
            };
        }
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTPError"]) {
            return {
                data: null,
                error: {
                    status: error.response.status,
                    message: error.message.replace(URL_DETAILS_REGEX, "")
                }
            };
        }
        return {
            data: null,
            error: {
                status: 500,
                message: "Internal server error."
            }
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/connection/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Clean a slug, remove slash at the beginning and the end
 * @param slug - The slug to clean, example: "/hello/world" -> "hello/world"
 * @returns The cleaned slug
 */ __turbopack_context__.s([
    "cleanSlug",
    ()=>cleanSlug
]);
function cleanSlug(slug) {
    return slug.replace(/^\/+|\/+$/g, "");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/connection/routes/contents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contents",
    ()=>contents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$lib$2f$fetcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/connection/lib/fetcher.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/connection/lib/utils.ts [app-client] (ecmascript)");
;
;
const PREFIX = "/contents";
const contents = {
    getContents,
    getContent,
    getSurah
};
async function getContents(param) {
    let { slug, withRaw = true, ...base } = param;
    const url = "".concat(PREFIX, "/").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanSlug"])(slug));
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$lib$2f$fetcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetcher"])(url, {
        method: "GET",
        ...base
    });
    if (error) {
        return {
            data: [],
            error
        };
    }
    if (!data) {
        return {
            data: [],
            error: {
                status: 404,
                message: "Contents not found"
            }
        };
    }
    if (!withRaw) {
        return {
            data: data.map((item)=>({
                    ...item,
                    raw: ""
                })),
            error
        };
    }
    return {
        data,
        error
    };
}
async function getContent(param) {
    let { slug, ...base } = param;
    const cleanedSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanSlug"])(slug);
    const url = "".concat(PREFIX, "/").concat(cleanedSlug);
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$lib$2f$fetcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetcher"])(url, {
        method: "GET",
        ...base
    });
    if (error) {
        return {
            data: null,
            error
        };
    }
    const content = data === null || data === void 0 ? void 0 : data.find((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanSlug"])("/".concat(c.locale, "/").concat(c.slug)) === cleanedSlug);
    if (!content) {
        return {
            data: null,
            error: {
                status: 404,
                message: "Content not found. Please find another content."
            }
        };
    }
    return {
        data: content,
        error
    };
}
async function getSurah(param) {
    let { surah, ...base } = param;
    const url = "".concat(PREFIX, "/quran/").concat(surah);
    const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$lib$2f$fetcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetcher"])(url, {
        method: "GET",
        ...base
    });
    if (error) {
        return {
            data: null,
            error
        };
    }
    return {
        data,
        error
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/connection/routes/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$routes$2f$contents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/connection/routes/contents.ts [app-client] (ecmascript)");
;
const api = {
    contents: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$routes$2f$contents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contents"]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/lib/utils/github.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGithubUrl",
    ()=>getGithubUrl,
    "getRawGithubUrl",
    ()=>getRawGithubUrl
]);
const GITHUB_URL = "/nakafaai/nakafa.com";
function getGithubUrl(param) {
    let { path, ref = "/tree/main" } = param;
    return "https://github.com".concat(GITHUB_URL).concat(ref).concat(path);
}
function getRawGithubUrl(path) {
    const cleanPath = path.startsWith("/") ? path : "/".concat(path);
    return "https://raw.githubusercontent.com".concat(GITHUB_URL, "/refs/heads/main").concat(cleanPath);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/components/shared/open-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AskAiButton",
    ()=>AskAiButton,
    "OpenContent",
    ()=>OpenContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiClaude$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiClaude$3e$__ = __turbopack_context__.i("[project]/node_modules/@icons-pack/react-simple-icons/icons/SiClaude.mjs [app-client] (ecmascript) <export default as SiClaude>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiGithub$3e$__ = __turbopack_context__.i("[project]/node_modules/@icons-pack/react-simple-icons/icons/SiGithub.mjs [app-client] (ecmascript) <export default as SiGithub>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiGooglegemini$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiGooglegemini$3e$__ = __turbopack_context__.i("[project]/node_modules/@icons-pack/react-simple-icons/icons/SiGooglegemini.mjs [app-client] (ecmascript) <export default as SiGooglegemini>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiOpenai$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiOpenai$3e$__ = __turbopack_context__.i("[project]/node_modules/@icons-pack/react-simple-icons/icons/SiOpenai.mjs [app-client] (ecmascript) <export default as SiOpenai>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$routes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/connection/routes/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/internationalization/src/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as CopyIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLinkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLinkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$ai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/context/use-ai.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2f$github$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/lib/utils/github.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
;
;
function OpenContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "641303158a500167e4c15a315d46684153cc127f7aa3de9871a011ba1baadd0d") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "641303158a500167e4c15a315d46684153cc127f7aa3de9871a011ba1baadd0d";
    }
    const { slug } = t0;
    let t1;
    if ($[1] !== slug) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex divide-x divide-secondary-foreground/10 rounded-md shadow-xs rtl:space-x-reverse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LLmCopyButton, {
                    slug: slug
                }, void 0, false, {
                    fileName: "[project]/apps/www/components/shared/open-content.tsx",
                    lineNumber: 30,
                    columnNumber: 120
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewOptions, {
                    slug: slug
                }, void 0, false, {
                    fileName: "[project]/apps/www/components/shared/open-content.tsx",
                    lineNumber: 30,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = slug;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = OpenContent;
function AskAiButton() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "641303158a500167e4c15a315d46684153cc127f7aa3de9871a011ba1baadd0d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "641303158a500167e4c15a315d46684153cc127f7aa3de9871a011ba1baadd0d";
    }
    const setOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$ai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAi"])(_temp);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Ai");
    let t0;
    if ($[1] !== setOpen) {
        t0 = ()=>setOpen(true);
        $[1] = setOpen;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {}, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t) {
        t2 = t("ask-nina");
        $[4] = t;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t0 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t0,
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = t0;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_s(AskAiButton, "f46Cl+yHd+M+U4tVaM6DEXZLg7Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$context$2f$use$2d$ai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAi"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c1 = AskAiButton;
function _temp(state) {
    return state.setOpen;
}
function LLmCopyButton(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "641303158a500167e4c15a315d46684153cc127f7aa3de9871a011ba1baadd0d") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "641303158a500167e4c15a315d46684153cc127f7aa3de9871a011ba1baadd0d";
    }
    const { slug } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    let t1;
    if ($[1] !== slug || $[2] !== t) {
        t1 = ()=>{
            startTransition(async ()=>{
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$connection$2f$routes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].contents.getContent({
                    slug
                });
                if (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message, {
                        position: "bottom-center"
                    });
                    return;
                }
                if (!data) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("copy-error"), {
                        position: "bottom-center"
                    });
                    return;
                }
                navigator.clipboard.writeText(data.raw).then(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("copy-success"), {
                        position: "bottom-center"
                    });
                }).catch(_temp2);
            });
        };
        $[1] = slug;
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleCopy = t1;
    let t2;
    if ($[4] !== isPending) {
        t2 = isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 136,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyIcon$3e$__["CopyIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 136,
            columnNumber: 59
        }, this);
        $[4] = isPending;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t) {
        t3 = t("copy-content");
        $[6] = t;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== handleCopy || $[9] !== isPending || $[10] !== t2 || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10",
            disabled: isPending,
            onClick: handleCopy,
            variant: "secondary",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[8] = handleCopy;
        $[9] = isPending;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_s1(LLmCopyButton, "bqH24pNnTDhjTyoyCDiEnlLqkl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c2 = LLmCopyButton;
function _temp2(e) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(e.message, {
        position: "bottom-center"
    });
}
function ViewOptions(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "641303158a500167e4c15a315d46684153cc127f7aa3de9871a011ba1baadd0d") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "641303158a500167e4c15a315d46684153cc127f7aa3de9871a011ba1baadd0d";
    }
    const { slug } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    const locale = slug.split("/")[1];
    const path = "/".concat(slug.split("/").slice(2).join("/"));
    const markdownUrl = new URL("".concat(slug, ".mdx"), "https://nakafa.com");
    const q = "I’m looking at this ".concat(markdownUrl, ", help me understand. Explain to me what is this about.");
    const claude = "https://claude.ai/new?".concat(new URLSearchParams({
        q
    }));
    const gpt = "https://chatgpt.com/?".concat(new URLSearchParams({
        hints: "search",
        q
    }));
    const gemini = "https://gemini.google.com/app?".concat(new URLSearchParams({
        q
    }));
    const t3 = "https://t3.chat/new?".concat(new URLSearchParams({
        q
    }));
    const t1 = "/packages/contents".concat(path, "/").concat(locale, ".mdx");
    let t2;
    if ($[1] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$lib$2f$utils$2f$github$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGithubUrl"])({
            path: t1
        });
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const githubUrl = t2;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t4;
    if ($[3] !== t) {
        t4 = t("open");
        $[3] = t;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: t4
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 220,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = open && "rotate-180";
    let t7;
    if ($[7] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-4 transition-transform", t6);
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: t7
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 237,
            columnNumber: 10
        }, this);
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t5 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10",
                size: "icon",
                variant: "secondary",
                children: [
                    t5,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/components/shared/open-content.tsx",
                lineNumber: 245,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 245,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t) {
        t10 = t("open-in-github");
        $[14] = t;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiGithub$3e$__["SiGithub"], {}, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== githubUrl || $[18] !== t10) {
        t12 = {
            title: t10,
            href: githubUrl,
            icon: t11
        };
        $[17] = githubUrl;
        $[18] = t10;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t) {
        t13 = t("open-in-chatgpt");
        $[20] = t;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiOpenai$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiOpenai$3e$__["SiOpenai"], {}, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== gpt || $[24] !== t13) {
        t15 = {
            title: t13,
            href: gpt,
            icon: t14
        };
        $[23] = gpt;
        $[24] = t13;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== t) {
        t16 = t("open-in-gemini");
        $[26] = t;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiGooglegemini$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiGooglegemini$3e$__["SiGooglegemini"], {}, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== gemini || $[30] !== t16) {
        t18 = {
            title: t16,
            href: gemini,
            icon: t17
        };
        $[29] = gemini;
        $[30] = t16;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t) {
        t19 = t("open-in-claude");
        $[32] = t;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiClaude$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiClaude$3e$__["SiClaude"], {}, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== claude || $[36] !== t19) {
        t21 = {
            title: t19,
            href: claude,
            icon: t20
        };
        $[35] = claude;
        $[36] = t19;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== t) {
        t22 = t("open-in-t3-chat");
        $[38] = t;
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleIcon$3e$__["MessageCircleIcon"], {}, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== t22 || $[42] !== t3) {
        t24 = {
            title: t22,
            href: t3,
            icon: t23
        };
        $[41] = t22;
        $[42] = t3;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] !== t12 || $[45] !== t15 || $[46] !== t18 || $[47] !== t21 || $[48] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            className: "w-56",
            children: [
                t12,
                t15,
                t18,
                t21,
                t24
            ].map(_temp3)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[44] = t12;
        $[45] = t15;
        $[46] = t18;
        $[47] = t21;
        $[48] = t24;
        $[49] = t25;
    } else {
        t25 = $[49];
    }
    let t26;
    if ($[50] !== open || $[51] !== t25 || $[52] !== t9) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            onOpenChange: setOpen,
            open: open,
            children: [
                t9,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[50] = open;
        $[51] = t25;
        $[52] = t9;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    return t26;
}
_s2(ViewOptions, "OdJ0hQWLjP4v1sdS/ZbZPywfjGE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c3 = ViewOptions;
function _temp3(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
        asChild: true,
        className: "cursor-pointer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$internationalization$2f$src$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            href: item.href,
            target: "_blank",
            children: [
                item.icon,
                item.title,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLinkIcon$3e$__["ExternalLinkIcon"], {
                    className: "ms-auto size-3.5"
                }, void 0, false, {
                    fileName: "[project]/apps/www/components/shared/open-content.tsx",
                    lineNumber: 417,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/open-content.tsx",
            lineNumber: 417,
            columnNumber: 87
        }, this)
    }, item.title, false, {
        fileName: "[project]/apps/www/components/shared/open-content.tsx",
        lineNumber: 417,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "OpenContent");
__turbopack_context__.k.register(_c1, "AskAiButton");
__turbopack_context__.k.register(_c2, "LLmCopyButton");
__turbopack_context__.k.register(_c3, "ViewOptions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            "data-slot": "card",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/card.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Card;
function CardHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            "data-slot": "card-header",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/card.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = CardHeader;
function CardTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-tight", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            "data-slot": "card-title",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/card.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = CardTitle;
function CardDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            "data-slot": "card-description",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/card.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c3 = CardDescription;
function CardAction(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            "data-slot": "card-action",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/card.tsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = CardAction;
function CardContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            "data-slot": "card-content",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/card.tsx",
            lineNumber: 240,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = CardContent;
function CardFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c0782020d0e25a9dc4aee1af01357d407e9e9e2b28cdd477747ea65dbf6c0a9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            "data-slot": "card-footer",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/card.tsx",
            lineNumber: 281,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/www/components/shared/ref-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefContent",
    ()=>RefContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiDiscord$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiDiscord$3e$__ = __turbopack_context__.i("[project]/node_modules/@icons-pack/react-simple-icons/icons/SiDiscord.mjs [app-client] (ecmascript) <export default as SiDiscord>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiGithub$3e$__ = __turbopack_context__.i("[project]/node_modules/@icons-pack/react-simple-icons/icons/SiGithub.mjs [app-client] (ecmascript) <export default as SiGithub>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiYoutube$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiYoutube$3e$__ = __turbopack_context__.i("[project]/node_modules/@icons-pack/react-simple-icons/icons/SiYoutube.mjs [app-client] (ecmascript) <export default as SiYoutube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as BookIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpenIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as CalendarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as GlobeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayersIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as LayersIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as PencilIcon>");
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
function RefContent(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(89);
    if ($[0] !== "6c6cd56d21f74499358a35d1449cb55a82fe26d49022bcfe4b7823bcee6a43a5") {
        for(let $i = 0; $i < 89; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c6cd56d21f74499358a35d1449cb55a82fe26d49022bcfe4b7823bcee6a43a5";
    }
    const { title, references, githubUrl, className } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const showSheet = references && title;
    let t1;
    if ($[1] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-4", className);
        $[1] = className;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t) {
        t2 = t("references");
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t) {
        t3 = t("references");
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "scroll-mt-28 font-medium text-2xl leading-tight tracking-tight",
            id: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== open || $[11] !== showSheet || $[12] !== t) {
        t5 = showSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        "aria-label": t("bibliography"),
                        onClick: ()=>setOpen(!open),
                        size: "icon",
                        variant: "outline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: t("bibliography")
                            }, void 0, false, {
                                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                lineNumber: 67,
                                columnNumber: 163
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayersIcon$3e$__["LayersIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                lineNumber: 67,
                                columnNumber: 215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                        lineNumber: 67,
                        columnNumber: 63
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                    lineNumber: 67,
                    columnNumber: 32
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    side: "bottom",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t("bibliography")
                    }, void 0, false, {
                        fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                        lineNumber: 67,
                        columnNumber: 304
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                    lineNumber: 67,
                    columnNumber: 274
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 67,
            columnNumber: 23
        }, this);
        $[10] = open;
        $[11] = showSheet;
        $[12] = t;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t) {
        t6 = t("source-code");
        $[14] = t;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const t7 = githubUrl !== null && githubUrl !== void 0 ? githubUrl : "https://github.com/nakafaai/nakafa.com";
    let t8;
    if ($[16] !== t) {
        t8 = t("source-code");
        $[16] = t;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t) {
        t9 = t("source-code");
        $[18] = t;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: t9
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiGithub$3e$__["SiGithub"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t10 || $[24] !== t7 || $[25] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: t7,
            rel: "noopener noreferrer",
            target: "_blank",
            title: t8,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t7;
        $[25] = t8;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12 || $[28] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                "aria-label": t6,
                asChild: true,
                size: "icon",
                variant: "outline",
                children: t12
            }, void 0, false, {
                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                lineNumber: 127,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[27] = t12;
        $[28] = t6;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t) {
        t14 = t("source-code");
        $[30] = t;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
            side: "bottom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: t14
            }, void 0, false, {
                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                lineNumber: 144,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[32] = t14;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t13 || $[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[34] = t13;
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t) {
        t17 = t("videos");
        $[37] = t;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t) {
        t18 = t("videos");
        $[39] = t;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: t18
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiYoutube$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiYoutube$3e$__["SiYoutube"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== t17 || $[45] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                asChild: true,
                size: "icon",
                variant: "outline",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://www.youtube.com/@nakafaa",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    title: t17,
                    children: [
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                    lineNumber: 192,
                    columnNumber: 95
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                lineNumber: 192,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[44] = t17;
        $[45] = t19;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== t) {
        t22 = t("videos");
        $[47] = t;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
            side: "bottom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: t22
            }, void 0, false, {
                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                lineNumber: 209,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[49] = t22;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    let t24;
    if ($[51] !== t21 || $[52] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: [
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[51] = t21;
        $[52] = t23;
        $[53] = t24;
    } else {
        t24 = $[53];
    }
    let t25;
    if ($[54] !== t) {
        t25 = t("community");
        $[54] = t;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t) {
        t26 = t("community");
        $[56] = t;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: t26
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[58] = t26;
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    let t28;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiDiscord$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiDiscord$3e$__["SiDiscord"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[60] = t28;
    } else {
        t28 = $[60];
    }
    let t29;
    if ($[61] !== t25 || $[62] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                asChild: true,
                size: "icon",
                variant: "outline",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://discord.gg/CPCSfKhvfQ",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    title: t25,
                    children: [
                        t27,
                        t28
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                    lineNumber: 257,
                    columnNumber: 95
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                lineNumber: 257,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[61] = t25;
        $[62] = t27;
        $[63] = t29;
    } else {
        t29 = $[63];
    }
    let t30;
    if ($[64] !== t) {
        t30 = t("community");
        $[64] = t;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    let t31;
    if ($[66] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
            side: "bottom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: t30
            }, void 0, false, {
                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                lineNumber: 274,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[66] = t30;
        $[67] = t31;
    } else {
        t31 = $[67];
    }
    let t32;
    if ($[68] !== t29 || $[69] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: [
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[68] = t29;
        $[69] = t31;
        $[70] = t32;
    } else {
        t32 = $[70];
    }
    let t33;
    if ($[71] !== t16 || $[72] !== t24 || $[73] !== t32 || $[74] !== t5) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-2",
            children: [
                t5,
                t16,
                t24,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[71] = t16;
        $[72] = t24;
        $[73] = t32;
        $[74] = t5;
        $[75] = t33;
    } else {
        t33 = $[75];
    }
    let t34;
    if ($[76] !== t1 || $[77] !== t33 || $[78] !== t4) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t4,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[76] = t1;
        $[77] = t33;
        $[78] = t4;
        $[79] = t34;
    } else {
        t34 = $[79];
    }
    let t35;
    if ($[80] !== open || $[81] !== references || $[82] !== showSheet || $[83] !== t || $[84] !== title) {
        t35 = showSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            modal: false,
            onOpenChange: setOpen,
            open: open,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                className: "w-6/7 sm:max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                    className: "text-2xl",
                                    children: [
                                        references.length,
                                        " ",
                                        t("references")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                    lineNumber: 312,
                                    columnNumber: 175
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                    lineNumber: 312,
                                    columnNumber: 258
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                            lineNumber: 312,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                            lineNumber: 312,
                            columnNumber: 316
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 flex-col overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "h-full px-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 py-4",
                                    children: references.map((reference)=>{
                                        const url = reference.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUrl"])(reference.url) : t("no-website");
                                        const cleanUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanupUrl"])(url).split("/")[0];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "line-clamp-1 capitalize",
                                                            title: reference.title,
                                                            children: reference.title.toLowerCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 66
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__["GlobeIcon"], {
                                                                    className: "size-4 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 233
                                                                }, this),
                                                                reference.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "underline-offset-4 hover:underline",
                                                                    href: reference.url,
                                                                    rel: "noopener noreferrer",
                                                                    target: "_blank",
                                                                    children: cleanUrl
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 291
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: t("no-website")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 421
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 180
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 54
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__["PencilIcon"], {
                                                                    className: "size-4 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 559
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "line-clamp-1 text-sm",
                                                                    children: reference.authors
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 601
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 518
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                                    className: "size-4 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 713
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: reference.year
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 757
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 672
                                                        }, this),
                                                        reference.publication && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                                                    className: "size-4 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 879
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "line-clamp-1 text-sm",
                                                                    children: reference.publication
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 923
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 838
                                                        }, this),
                                                        reference.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookIcon$3e$__["BookIcon"], {
                                                                    className: "size-4 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 1062
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: reference.details
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 1102
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 1021
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 483
                                                }, this)
                                            ]
                                        }, reference.title, true, {
                                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                            lineNumber: 315,
                                            columnNumber: 26
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                    lineNumber: 312,
                                    columnNumber: 419
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                                lineNumber: 312,
                                columnNumber: 383
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                            lineNumber: 312,
                            columnNumber: 329
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                    lineNumber: 312,
                    columnNumber: 124
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/www/components/shared/ref-content.tsx",
                lineNumber: 312,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/www/components/shared/ref-content.tsx",
            lineNumber: 312,
            columnNumber: 24
        }, this);
        $[80] = open;
        $[81] = references;
        $[82] = showSheet;
        $[83] = t;
        $[84] = title;
        $[85] = t35;
    } else {
        t35 = $[85];
    }
    let t36;
    if ($[86] !== t34 || $[87] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t34,
                t35
            ]
        }, void 0, true);
        $[86] = t34;
        $[87] = t35;
        $[88] = t36;
    } else {
        t36 = $[88];
    }
    return t36;
}
_s(RefContent, "OdJ0hQWLjP4v1sdS/ZbZPywfjGE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = RefContent;
var _c;
__turbopack_context__.k.register(_c, "RefContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/code-block/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock,
    "CodeBlockBody",
    ()=>CodeBlockBody,
    "CodeBlockContent",
    ()=>CodeBlockContent,
    "CodeBlockCopyButton",
    ()=>CodeBlockCopyButton,
    "CodeBlockFilename",
    ()=>CodeBlockFilename,
    "CodeBlockFiles",
    ()=>CodeBlockFiles,
    "CodeBlockHeader",
    ()=>CodeBlockHeader,
    "CodeBlockItem",
    ()=>CodeBlockItem,
    "CodeBlockSelect",
    ()=>CodeBlockSelect,
    "CodeBlockSelectContent",
    ()=>CodeBlockSelectContent,
    "CodeBlockSelectItem",
    ()=>CodeBlockSelectItem,
    "CodeBlockSelectTrigger",
    ()=>CodeBlockSelectTrigger,
    "CodeBlockSelectValue",
    ()=>CodeBlockSelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiGnometerminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiGnometerminal$3e$__ = __turbopack_context__.i("[project]/node_modules/@icons-pack/react-simple-icons/icons/SiGnometerminal.mjs [app-client] (ecmascript) <export default as SiGnometerminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$programming$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/programming.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shikijs$2f$transformers$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@shikijs/transformers/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as CopyIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$shiki$2f$dist$2f$bundle$2d$full$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/shiki/dist/bundle-full.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$context$2d$selector$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-context-selector/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature();
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
;
const lineNumberClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_code]:[counter-reset:line]", "[&_code]:[counter-increment:line_0]", "[&_.line]:before:content-[counter(line)]", "[&_.line]:before:inline-block", "[&_.line]:before:[counter-increment:line]", "[&_.line]:before:w-4", "[&_.line]:before:mr-4", "[&_.line]:before:text-[13px]", "[&_.line]:before:text-right", "[&_.line]:before:text-muted-foreground/50", "[&_.line]:before:font-mono", "[&_.line]:before:select-none");
const darkModeClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("dark:[&_.shiki]:!text-[var(--shiki-dark)]", "dark:[&_.shiki]:![font-style:var(--shiki-dark-font-style)]", "dark:[&_.shiki]:![font-weight:var(--shiki-dark-font-weight)]", "dark:[&_.shiki]:![text-decoration:var(--shiki-dark-text-decoration)]", "dark:[&_.shiki_span]:!text-[var(--shiki-dark)]", "dark:[&_.shiki_span]:![font-style:var(--shiki-dark-font-style)]", "dark:[&_.shiki_span]:![font-weight:var(--shiki-dark-font-weight)]", "dark:[&_.shiki_span]:![text-decoration:var(--shiki-dark-text-decoration)]");
const lineHighlightClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_.line.highlighted]:bg-blue-50", "[&_.line.highlighted]:after:bg-blue-500", "[&_.line.highlighted]:after:absolute", "[&_.line.highlighted]:after:left-0", "[&_.line.highlighted]:after:top-0", "[&_.line.highlighted]:after:bottom-0", "[&_.line.highlighted]:after:w-0.5", "dark:[&_.line.highlighted]:!bg-blue-500/10");
const lineDiffClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_.line.diff]:after:absolute", "[&_.line.diff]:after:left-0", "[&_.line.diff]:after:top-0", "[&_.line.diff]:after:bottom-0", "[&_.line.diff]:after:w-0.5", "[&_.line.diff.add]:bg-emerald-50", "[&_.line.diff.add]:after:bg-emerald-500", "[&_.line.diff.remove]:bg-rose-50", "[&_.line.diff.remove]:after:bg-rose-500", "dark:[&_.line.diff.add]:!bg-emerald-500/10", "dark:[&_.line.diff.remove]:!bg-rose-500/10");
const lineFocusedClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_code:has(.focused)_.line]:blur-[2px]", "[&_code:has(.focused)_.line.focused]:blur-none");
const wordHighlightClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_.highlighted-word]:bg-blue-50", "dark:[&_.highlighted-word]:!bg-blue-500/10");
const codeBlockClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0 bg-muted/40 text-sm", "[&_pre]:py-4", "[&_pre]:overflow-x-auto", "[&_.shiki]:!bg-[var(--shiki-bg)]", "[&_code]:w-full", "[&_code]:grid", "[&_code]:bg-transparent", "[&_.line]:px-4", "[&_.line]:w-full", "[&_.line]:relative");
const highlight = (html, language, themes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$shiki$2f$dist$2f$bundle$2d$full$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["codeToHtml"])(html, {
        lang: language !== null && language !== void 0 ? language : "typescript",
        themes: themes !== null && themes !== void 0 ? themes : {
            light: "github-light",
            dark: "github-dark-default"
        },
        transformers: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shikijs$2f$transformers$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformerNotationDiff"])({
                matchAlgorithm: "v3"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shikijs$2f$transformers$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformerNotationHighlight"])({
                matchAlgorithm: "v3"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shikijs$2f$transformers$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformerNotationWordHighlight"])({
                matchAlgorithm: "v3"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shikijs$2f$transformers$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformerNotationFocus"])({
                matchAlgorithm: "v3"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shikijs$2f$transformers$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformerNotationErrorLevel"])({
                matchAlgorithm: "v3"
            })
        ]
    });
const CodeBlockContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$context$2d$selector$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    value: undefined,
    onValueChange: undefined,
    data: []
});
function useCodeBlock(selector) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$context$2d$selector$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextSelector"])(CodeBlockContext, _temp);
    if (!ctx) {
        throw new Error("CodeBlock components must be used within CodeBlock");
    }
    let t0;
    if ($[1] !== ctx || $[2] !== selector) {
        t0 = selector(ctx);
        $[1] = ctx;
        $[2] = selector;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    return t0;
}
_s(useCodeBlock, "q5ZkIeJiJFyP8a9ZKN9Giq+FMUM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$context$2d$selector$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextSelector"]
    ];
});
function _temp(context) {
    return context;
}
const CodeBlock = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let className;
    let controlledOnValueChange;
    let controlledValue;
    let data;
    let defaultValue;
    let props;
    if ($[1] !== t0) {
        ({ value: controlledValue, onValueChange: controlledOnValueChange, defaultValue, className, data, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = controlledOnValueChange;
        $[4] = controlledValue;
        $[5] = data;
        $[6] = defaultValue;
        $[7] = props;
    } else {
        className = $[2];
        controlledOnValueChange = $[3];
        controlledValue = $[4];
        data = $[5];
        defaultValue = $[6];
        props = $[7];
    }
    const t1 = defaultValue !== null && defaultValue !== void 0 ? defaultValue : "";
    let t2;
    if ($[8] !== controlledOnValueChange || $[9] !== controlledValue || $[10] !== t1) {
        t2 = {
            defaultProp: t1,
            prop: controlledValue,
            onChange: controlledOnValueChange
        };
        $[8] = controlledOnValueChange;
        $[9] = controlledValue;
        $[10] = t1;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    const [value, onValueChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])(t2);
    let t3;
    if ($[12] !== data || $[13] !== onValueChange || $[14] !== value) {
        t3 = {
            value,
            onValueChange,
            data
        };
        $[12] = data;
        $[13] = onValueChange;
        $[14] = value;
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    let t4;
    if ($[16] !== className) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid size-full grid-cols-1 overflow-hidden rounded-xl border shadow-sm", className);
        $[16] = className;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    let t5;
    if ($[18] !== props || $[19] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = props;
        $[19] = t4;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    let t6;
    if ($[21] !== t3 || $[22] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlockContext.Provider, {
            value: t3,
            children: t5
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t3;
        $[22] = t5;
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    return t6;
};
_s1(CodeBlock, "0oIVXNYUIsytxJHmzfJILfyj6O4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"]
    ];
});
_c = CodeBlock;
const CodeBlockHeader = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-row items-center border-b bg-muted/80 p-1", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c1 = CodeBlockHeader;
const CodeBlockFiles = (t0)=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    const data = useCodeBlock(_temp2);
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-w-0 grow flex-row items-center gap-2", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== data) {
        t2 = data.map(children);
        $[7] = children;
        $[8] = data;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== props || $[11] !== t1 || $[12] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 255,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = props;
        $[11] = t1;
        $[12] = t2;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    return t3;
};
_s2(CodeBlockFiles, "fJ2XLqHQQsIVaypWrxsLi8nNcnM=", false, function() {
    return [
        useCodeBlock
    ];
});
_c2 = CodeBlockFiles;
const CodeBlockFilename = (t0)=>{
    var _Object_entries_find;
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let children;
    let icon;
    let props;
    let value;
    if ($[1] !== t0) {
        const { className, icon: t1, value: t2, children: t3, ...t4 } = t0;
        icon = t1;
        value = t2;
        children = t3;
        props = t4;
        $[1] = t0;
        $[2] = children;
        $[3] = icon;
        $[4] = props;
        $[5] = value;
    } else {
        children = $[2];
        icon = $[3];
        props = $[4];
        value = $[5];
    }
    const activeValue = useCodeBlock(_temp3);
    const defaultIcon = (_Object_entries_find = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$programming$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filenameIconMap"]).find((t1)=>{
        const [pattern] = t1;
        const regex = new RegExp("^".concat(pattern.replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*"), "$"));
        var _children_toString;
        return regex.test((_children_toString = children === null || children === void 0 ? void 0 : children.toString()) !== null && _children_toString !== void 0 ? _children_toString : "");
    })) === null || _Object_entries_find === void 0 ? void 0 : _Object_entries_find[1];
    var _ref;
    const Icon = (_ref = icon !== null && icon !== void 0 ? icon : defaultIcon) !== null && _ref !== void 0 ? _ref : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$icons$2d$pack$2f$react$2d$simple$2d$icons$2f$icons$2f$SiGnometerminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SiGnometerminal$3e$__["SiGnometerminal"];
    if (value !== activeValue) {
        return null;
    }
    let t2;
    if ($[6] !== Icon) {
        t2 = Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "size-4 shrink-0"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 312,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = Icon;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "min-w-0 flex-1 truncate",
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 320,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = children;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== props || $[11] !== t2 || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-0 items-center gap-2 px-4 py-1.5 text-muted-foreground text-sm",
            ...props,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 328,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = props;
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
};
_s3(CodeBlockFilename, "7ssEW339NsvxzBuxsnx5I+HefB0=", false, function() {
    return [
        useCodeBlock
    ];
});
_c3 = CodeBlockFilename;
const CodeBlockSelect = (props)=>{
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    const { value, onValueChange } = useCodeBlock(_temp4);
    let t0;
    if ($[1] !== onValueChange || $[2] !== props || $[3] !== value) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            onValueChange: onValueChange,
            value: value,
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 352,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = onValueChange;
        $[2] = props;
        $[3] = value;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    return t0;
};
_s4(CodeBlockSelect, "69izotKCVwYNKCkhBr827pLRGVc=", false, function() {
    return [
        useCodeBlock
    ];
});
_c4 = CodeBlockSelect;
const CodeBlockSelectTrigger = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-fit border-none text-muted-foreground text-sm shadow-none", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: t1,
            size: "sm",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 394,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c5 = CodeBlockSelectTrigger;
const CodeBlockSelectValue = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 413,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c6 = CodeBlockSelectValue;
const CodeBlockSelectContent = (t0)=>{
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let children;
    let props;
    if ($[1] !== t0) {
        ({ children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
    } else {
        children = $[2];
        props = $[3];
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    const data = useCodeBlock(_temp5);
    let t1;
    if ($[4] !== t) {
        t1 = t("language");
        $[4] = t;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectLabel"], {
            children: t1
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 455,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children || $[9] !== data) {
        t3 = data.map(children);
        $[8] = children;
        $[9] = data;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== t2 || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectGroup"], {
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 472,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== props || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            ...props,
            children: t4
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 481,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = props;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
};
_s5(CodeBlockSelectContent, "TfNyLikDyWgm1R+8IAa/O9KVFW8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        useCodeBlock
    ];
});
_c7 = CodeBlockSelectContent;
const CodeBlockSelectItem = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 522,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c8 = CodeBlockSelectItem;
const CodeBlockCopyButton = (t0)=>{
    _s6();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let asChild;
    let children;
    let className;
    let onCopy;
    let onError;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ asChild, onCopy, onError, timeout: t1, children, className, ...props } = t0);
        $[1] = t0;
        $[2] = asChild;
        $[3] = children;
        $[4] = className;
        $[5] = onCopy;
        $[6] = onError;
        $[7] = props;
        $[8] = t1;
    } else {
        asChild = $[2];
        children = $[3];
        className = $[4];
        onCopy = $[5];
        onError = $[6];
        props = $[7];
        t1 = $[8];
    }
    const timeout = t1 === undefined ? 2000 : t1;
    const [isCopied, setIsCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data, value } = useCodeBlock(_temp6);
    let copyToClipboard;
    let t2;
    if ($[9] !== asChild || $[10] !== children || $[11] !== data || $[12] !== onCopy || $[13] !== onError || $[14] !== timeout || $[15] !== value) {
        t2 = Symbol.for("react.early_return_sentinel");
        bb0: {
            var _data_find;
            const code = (_data_find = data.find((item)=>item.language === value)) === null || _data_find === void 0 ? void 0 : _data_find.code;
            copyToClipboard = ()=>{
                if ("object" === "undefined" || !navigator.clipboard.writeText || !code) {
                    return;
                }
                navigator.clipboard.writeText(code).then(()=>{
                    setIsCopied(true);
                    onCopy === null || onCopy === void 0 ? void 0 : onCopy();
                    setTimeout(()=>setIsCopied(false), timeout);
                }, onError);
            };
            if (asChild) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
                    onClick: copyToClipboard
                });
                break bb0;
            }
        }
        $[9] = asChild;
        $[10] = children;
        $[11] = data;
        $[12] = onCopy;
        $[13] = onError;
        $[14] = timeout;
        $[15] = value;
        $[16] = copyToClipboard;
        $[17] = t2;
    } else {
        copyToClipboard = $[16];
        t2 = $[17];
    }
    if (t2 !== Symbol.for("react.early_return_sentinel")) {
        return t2;
    }
    const Icon = isCopied ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyIcon$3e$__["CopyIcon"];
    let t3;
    if ($[18] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0", className);
        $[18] = className;
        $[19] = t3;
    } else {
        t3 = $[19];
    }
    let t4;
    if ($[20] !== Icon || $[21] !== children) {
        t4 = children !== null && children !== void 0 ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "text-muted-foreground",
            size: 14
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 629,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = Icon;
        $[21] = children;
        $[22] = t4;
    } else {
        t4 = $[22];
    }
    let t5;
    if ($[23] !== copyToClipboard || $[24] !== props || $[25] !== t3 || $[26] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: t3,
            onClick: copyToClipboard,
            size: "icon",
            variant: "ghost",
            ...props,
            children: t4
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 638,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = copyToClipboard;
        $[24] = props;
        $[25] = t3;
        $[26] = t4;
        $[27] = t5;
    } else {
        t5 = $[27];
    }
    return t5;
};
_s6(CodeBlockCopyButton, "jcuBdk/XNA39kmoJJEozJzI3wTk=", false, function() {
    return [
        useCodeBlock
    ];
});
_c9 = CodeBlockCopyButton;
const CodeBlockFallback = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let children;
    let props;
    if ($[1] !== t0) {
        ({ children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
    } else {
        children = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== children) {
        t1 = children === null || children === void 0 ? void 0 : children.toString().split("\n").map(_temp7);
        $[4] = children;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                children: t1
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/code-block/index.tsx",
                lineNumber: 681,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 681,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== props || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 689,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = props;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
};
_c10 = CodeBlockFallback;
const CodeBlockBody = (t0)=>{
    _s7();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let children;
    let props;
    if ($[1] !== t0) {
        ({ children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
    } else {
        children = $[2];
        props = $[3];
    }
    const data = useCodeBlock(_temp8);
    let t1;
    if ($[4] !== children || $[5] !== data) {
        t1 = data.map(children);
        $[4] = children;
        $[5] = data;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== props || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...props,
            children: t1
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 732,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = props;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
};
_s7(CodeBlockBody, "fJ2XLqHQQsIVaypWrxsLi8nNcnM=", false, function() {
    return [
        useCodeBlock
    ];
});
_c11 = CodeBlockBody;
const CodeBlockItem = (t0)=>{
    _s8();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let children;
    let className;
    let props;
    let t1;
    let value;
    if ($[1] !== t0) {
        ({ children, lineNumbers: t1, className, value, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
        $[6] = value;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
        value = $[6];
    }
    const lineNumbers = t1 === undefined ? true : t1;
    const activeValue = useCodeBlock(_temp9);
    if (value !== activeValue) {
        return null;
    }
    const t2 = lineNumbers && lineNumberClassNames;
    let t3;
    if ($[7] !== className || $[8] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(codeBlockClassName, lineHighlightClassNames, lineDiffClassNames, lineFocusedClassNames, wordHighlightClassNames, darkModeClassNames, t2, className);
        $[7] = className;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== children || $[11] !== props || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 792,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = children;
        $[11] = props;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
};
_s8(CodeBlockItem, "7ssEW339NsvxzBuxsnx5I+HefB0=", false, function() {
    return [
        useCodeBlock
    ];
});
_c12 = CodeBlockItem;
const CodeBlockContent = (t0)=>{
    _s9();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5acacd098a78ce265d6237d64eadda117e3acbc0b22a84054d7beee3eaa6f";
    }
    let children;
    let language;
    let props;
    let t1;
    let themes;
    if ($[1] !== t0) {
        ({ children, themes, language, syntaxHighlighting: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = language;
        $[4] = props;
        $[5] = t1;
        $[6] = themes;
    } else {
        children = $[2];
        language = $[3];
        props = $[4];
        t1 = $[5];
        themes = $[6];
    }
    const syntaxHighlighting = t1 === undefined ? true : t1;
    const [html, setHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[7] !== children || $[8] !== language || $[9] !== syntaxHighlighting || $[10] !== themes) {
        t2 = ()=>{
            if (!syntaxHighlighting) {
                return;
            }
            highlight(children, language, themes).then(setHtml).catch(console.error);
        };
        t3 = [
            children,
            themes,
            syntaxHighlighting,
            language
        ];
        $[7] = children;
        $[8] = language;
        $[9] = syntaxHighlighting;
        $[10] = themes;
        $[11] = t2;
        $[12] = t3;
    } else {
        t2 = $[11];
        t3 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!(syntaxHighlighting && html)) {
        let t4;
        if ($[13] !== children) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlockFallback, {
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/code-block/index.tsx",
                lineNumber: 862,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[13] = children;
            $[14] = t4;
        } else {
            t4 = $[14];
        }
        return t4;
    }
    let t4;
    if ($[15] !== html) {
        t4 = {
            __html: html
        };
        $[15] = html;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    let t5;
    if ($[17] !== props || $[18] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            dangerouslySetInnerHTML: t4,
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/code-block/index.tsx",
            lineNumber: 882,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = props;
        $[18] = t4;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    return t5;
};
_s9(CodeBlockContent, "93wgfhGDgF+GzEb4oiUmw3eWHJ4=");
_c13 = CodeBlockContent;
function _temp2(state) {
    return state.data;
}
function _temp3(state) {
    return state.value;
}
function _temp4(state) {
    return {
        value: state.value,
        onValueChange: state.onValueChange
    };
}
function _temp5(state) {
    return state.data;
}
function _temp6(state) {
    return {
        data: state.data,
        value: state.value
    };
}
function _temp7(line, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "line",
        children: line
    }, "".concat(i, "-").concat(line), false, {
        fileName: "[project]/packages/design-system/components/code-block/index.tsx",
        lineNumber: 913,
        columnNumber: 10
    }, this);
}
function _temp8(state) {
    return state.data;
}
function _temp9(state) {
    return state.value;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "CodeBlock");
__turbopack_context__.k.register(_c1, "CodeBlockHeader");
__turbopack_context__.k.register(_c2, "CodeBlockFiles");
__turbopack_context__.k.register(_c3, "CodeBlockFilename");
__turbopack_context__.k.register(_c4, "CodeBlockSelect");
__turbopack_context__.k.register(_c5, "CodeBlockSelectTrigger");
__turbopack_context__.k.register(_c6, "CodeBlockSelectValue");
__turbopack_context__.k.register(_c7, "CodeBlockSelectContent");
__turbopack_context__.k.register(_c8, "CodeBlockSelectItem");
__turbopack_context__.k.register(_c9, "CodeBlockCopyButton");
__turbopack_context__.k.register(_c10, "CodeBlockFallback");
__turbopack_context__.k.register(_c11, "CodeBlockBody");
__turbopack_context__.k.register(_c12, "CodeBlockItem");
__turbopack_context__.k.register(_c13, "CodeBlockContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/markdown/code-block.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlockMdx",
    ()=>CodeBlockMdx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/code-block/index.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function CodeBlockMdx(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "4da2e347d34dd81acb4e988a1ce84fe7580328cdd52542126188bef9557d6883") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4da2e347d34dd81acb4e988a1ce84fe7580328cdd52542126188bef9557d6883";
    }
    const { data } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockFiles"], {
            children: _temp
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockHeader"], {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockSelect"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockSelectTrigger"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockSelectValue"], {}, void 0, false, {
                                fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
                                lineNumber: 26,
                                columnNumber: 72
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
                            lineNumber: 26,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockSelectContent"], {
                            align: "end",
                            children: _temp2
                        }, void 0, false, {
                            fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
                            lineNumber: 26,
                            columnNumber: 121
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
                    lineNumber: 26,
                    columnNumber: 31
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockCopyButton"], {}, void 0, false, {
                    fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
                    lineNumber: 26,
                    columnNumber: 208
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockBody"], {
            children: _temp3
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== data) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
            className: "my-4",
            data: data,
            defaultValue: data[0].language,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = data;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = CodeBlockMdx;
function _temp3(item_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockItem"], {
        value: item_1.language,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockContent"], {
            language: item_1.language,
            children: item_1.code
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
            lineNumber: 45,
            columnNumber: 71
        }, this)
    }, item_1.language, false, {
        fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
function _temp2(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockSelectItem"], {
        value: item_0.language,
        children: item_0.language
    }, item_0.language, false, {
        fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
function _temp(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$code$2d$block$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockFilename"], {
        value: item.language,
        children: item.filename
    }, item.language, false, {
        fileName: "[project]/packages/design-system/components/markdown/code-block.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CodeBlockMdx");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartContainer",
    ()=>ChartContainer,
    "ChartLegend",
    ()=>ChartLegend,
    "ChartLegendContent",
    ()=>ChartLegendContent,
    "ChartStyle",
    ()=>ChartStyle,
    "ChartTooltip",
    ()=>ChartTooltip,
    "ChartTooltipContent",
    ()=>ChartTooltipContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
    light: "",
    dark: ".dark"
};
const ChartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useChart() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "bb574509fc4fc6ad6188c32e804dd55ec775fb8a193317621987f7414f0ce982") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb574509fc4fc6ad6188c32e804dd55ec775fb8a193317621987f7414f0ce982";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
_s(useChart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function ChartContainer(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "bb574509fc4fc6ad6188c32e804dd55ec775fb8a193317621987f7414f0ce982") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb574509fc4fc6ad6188c32e804dd55ec775fb8a193317621987f7414f0ce982";
    }
    let children;
    let className;
    let config;
    let id;
    let props;
    if ($[1] !== t0) {
        ({ id, className, children, config, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = config;
        $[5] = id;
        $[6] = props;
    } else {
        children = $[2];
        className = $[3];
        config = $[4];
        id = $[5];
        props = $[6];
    }
    const uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const chartId = "chart-".concat(id || uniqueId.replace(/:/g, ""));
    let t1;
    if ($[7] !== config) {
        t1 = {
            config
        };
        $[7] = config;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    let t2;
    if ($[9] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex aspect-square justify-center text-xs sm:aspect-video [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden", className);
        $[9] = className;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== chartId || $[12] !== config) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartStyle, {
            config: config,
            id: chartId
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[11] = chartId;
        $[12] = config;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[14] = children;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    let t5;
    if ($[16] !== chartId || $[17] !== props || $[18] !== t2 || $[19] !== t3 || $[20] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            "data-chart": chartId,
            "data-slot": "chart",
            ...props,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[16] = chartId;
        $[17] = props;
        $[18] = t2;
        $[19] = t3;
        $[20] = t4;
        $[21] = t5;
    } else {
        t5 = $[21];
    }
    let t6;
    if ($[22] !== t1 || $[23] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartContext.Provider, {
            value: t1,
            children: t5
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[22] = t1;
        $[23] = t5;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    return t6;
}
_s1(ChartContainer, "j7NPILheLIfrWAvm8S/GM4Sml/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = ChartContainer;
const ChartStyle = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bb574509fc4fc6ad6188c32e804dd55ec775fb8a193317621987f7414f0ce982") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb574509fc4fc6ad6188c32e804dd55ec775fb8a193317621987f7414f0ce982";
    }
    const { id, config } = t0;
    let t1;
    if ($[1] !== config) {
        t1 = Object.entries(config).filter(_temp);
        $[1] = config;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const colorConfig = t1;
    if (!colorConfig.length) {
        return null;
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = Object.entries(THEMES);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== colorConfig || $[5] !== id) {
        t3 = t2.map((t4)=>{
            const [theme, prefix] = t4;
            return "\n".concat(prefix, " [data-chart=").concat(id, "] {\n").concat(colorConfig.map((t5)=>{
                var _itemConfig_0_theme;
                const [key, itemConfig_0] = t5;
                const color = ((_itemConfig_0_theme = itemConfig_0.theme) === null || _itemConfig_0_theme === void 0 ? void 0 : _itemConfig_0_theme[theme]) || itemConfig_0.color;
                return color ? "  --color-".concat(key, ": ").concat(color, ";") : null;
            }).filter(Boolean).join("\n"), "\n}\n");
        });
        $[4] = colorConfig;
        $[5] = id;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const styleContent = t3.join("\n");
    let t4;
    if ($[7] !== styleContent) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: styleContent
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = styleContent;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
};
_c1 = ChartStyle;
const ChartTooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"];
function ChartTooltipContent(param) {
    let { active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey } = param;
    _s2();
    const { config } = useChart();
    const tooltipLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChartTooltipContent.useMemo[tooltipLabel]": ()=>{
            var _config_label;
            if (hideLabel || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
                return null;
            }
            const [item] = payload;
            const key = "".concat(labelKey || (item === null || item === void 0 ? void 0 : item.dataKey) || (item === null || item === void 0 ? void 0 : item.name) || "value");
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const value = !labelKey && typeof label === "string" ? ((_config_label = config[label]) === null || _config_label === void 0 ? void 0 : _config_label.label) || label : itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label;
            if (labelFormatter) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", labelClassName),
                    children: labelFormatter(value, payload)
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                    lineNumber: 212,
                    columnNumber: 14
                }, this);
            }
            if (!value) {
                return null;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", labelClassName),
                children: value
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                lineNumber: 219,
                columnNumber: 12
            }, this);
        }
    }["ChartTooltipContent.useMemo[tooltipLabel]"], [
        label,
        labelFormatter,
        payload,
        hideLabel,
        labelClassName,
        config,
        labelKey
    ]);
    if (!(active && (payload === null || payload === void 0 ? void 0 : payload.length))) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
        children: [
            nestLabel ? null : tooltipLabel,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: payload.map((item_0, index)=>{
                    const key_0 = "".concat(nameKey || item_0.name || item_0.dataKey || "value");
                    const itemConfig_0 = getPayloadConfigFromPayload(config, item_0, key_0);
                    const indicatorColor = color || item_0.payload.fill || item_0.color;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
                        children: formatter && (item_0 === null || item_0 === void 0 ? void 0 : item_0.value) !== undefined && item_0.name ? formatter(item_0.value, item_0.name, item_0, index, item_0.payload) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                (itemConfig_0 === null || itemConfig_0 === void 0 ? void 0 : itemConfig_0.icon) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(itemConfig_0.icon, {}, void 0, false, {
                                    fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                                    lineNumber: 234,
                                    columnNumber: 41
                                }, this) : !hideIndicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
                                        "h-2.5 w-2.5": indicator === "dot",
                                        "w-1": indicator === "line",
                                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                                        "my-0.5": nestLabel && indicator === "dashed"
                                    }),
                                    style: {
                                        "--color-bg": indicatorColor,
                                        "--color-border": indicatorColor
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                                    lineNumber: 234,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 justify-between gap-2 leading-none", nestLabel ? "items-end" : "items-center"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-1.5",
                                            children: [
                                                nestLabel ? tooltipLabel : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: (itemConfig_0 === null || itemConfig_0 === void 0 ? void 0 : itemConfig_0.label) || item_0.name
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, this),
                                        item_0.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium font-mono text-foreground tabular-nums",
                                            children: item_0.value.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                                            lineNumber: 250,
                                            columnNumber: 38
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                                    lineNumber: 243,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true)
                    }, item_0.dataKey, false, {
                        fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                        lineNumber: 232,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/design-system/components/ui/chart.tsx",
        lineNumber: 225,
        columnNumber: 10
    }, this);
}
_s2(ChartTooltipContent, "/6N66m4zutWjQp45fTIFvaCP/Sw=", false, function() {
    return [
        useChart
    ];
});
_c2 = ChartTooltipContent;
const ChartLegend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"];
function ChartLegendContent(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "bb574509fc4fc6ad6188c32e804dd55ec775fb8a193317621987f7414f0ce982") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb574509fc4fc6ad6188c32e804dd55ec775fb8a193317621987f7414f0ce982";
    }
    const { className, hideIcon: t1, payload, verticalAlign: t2, nameKey } = t0;
    const hideIcon = t1 === undefined ? false : t1;
    const verticalAlign = t2 === undefined ? "bottom" : t2;
    const { config } = useChart();
    if (!(payload === null || payload === void 0 ? void 0 : payload.length)) {
        return null;
    }
    const t3 = verticalAlign === "top" ? "pb-3" : "pt-3";
    let t4;
    if ($[1] !== className || $[2] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center justify-center gap-4", t3, className);
        $[1] = className;
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== config || $[5] !== hideIcon || $[6] !== nameKey || $[7] !== payload) {
        let t6;
        if ($[9] !== config || $[10] !== hideIcon || $[11] !== nameKey) {
            t6 = (item)=>{
                const key = "".concat(nameKey || item.dataKey || "value");
                const itemConfig = getPayloadConfigFromPayload(config, item, key);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                    children: [
                        (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) && !hideIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(itemConfig.icon, {}, void 0, false, {
                            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                            lineNumber: 301,
                            columnNumber: 169
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 w-2 shrink-0 rounded-[2px]",
                            style: {
                                backgroundColor: item.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                            lineNumber: 301,
                            columnNumber: 191
                        }, this),
                        itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label
                    ]
                }, item.value, true, {
                    fileName: "[project]/packages/design-system/components/ui/chart.tsx",
                    lineNumber: 301,
                    columnNumber: 16
                }, this);
            };
            $[9] = config;
            $[10] = hideIcon;
            $[11] = nameKey;
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        t5 = payload.map(t6);
        $[4] = config;
        $[5] = hideIcon;
        $[6] = nameKey;
        $[7] = payload;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/chart.tsx",
            lineNumber: 323,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_s3(ChartLegendContent, "NieUY0Ve7cD6UfQwSGHz8JXgxAc=", false, function() {
    return [
        useChart
    ];
});
_c3 = ChartLegendContent;
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== "object" || payload === null) {
        return;
    }
    const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined;
    let configLabelKey = key;
    if (key in payload && typeof payload[key] === "string") {
        configLabelKey = payload[key];
    } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}
;
function _temp(t0) {
    const [, itemConfig] = t0;
    return itemConfig.theme || itemConfig.color;
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ChartContainer");
__turbopack_context__.k.register(_c1, "ChartStyle");
__turbopack_context__.k.register(_c2, "ChartTooltipContent");
__turbopack_context__.k.register(_c3, "ChartLegendContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElectabilityChart",
    ()=>ElectabilityChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ElectabilityChart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "27593d4c669db88bef2b1035354412eaf5ef23da66bad5076e8a61edadd0f7b3") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "27593d4c669db88bef2b1035354412eaf5ef23da66bad5076e8a61edadd0f7b3";
    }
    const { title, description, footnote } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "Anies Baswedan",
            value: 40
        };
        t2 = {
            name: "Basuki Tjahaja Purnama",
            value: 24
        };
        t3 = {
            name: "Ridwan Kamil",
            value: 13
        };
        t4 = {
            name: "Tri Rismaharini",
            value: 1
        };
        t5 = {
            name: "Erick Tohir",
            value: 1
        };
        t6 = {
            name: "Erwin Aksa",
            value: 1
        };
        t7 = {
            name: "Ahmad Sahroni",
            value: 1
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
        t7 = $[7];
    }
    let t8;
    if ($[8] !== t) {
        t8 = t("not-answering");
        $[8] = t;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t8) {
        t9 = [
            t1,
            t2,
            t3,
            t4,
            t5,
            t6,
            t7,
            {
                name: t8,
                value: 16
            }
        ];
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const electabilityData = t9;
    let t10;
    if ($[12] !== t) {
        t10 = t("electability");
        $[12] = t;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10) {
        t11 = {
            label: t10,
            color: "var(--chart-3)"
        };
        $[14] = t10;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            color: "var(--background)"
        };
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== t11) {
        t13 = {
            value: t11,
            label: t12
        };
        $[17] = t11;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const chartConfig = t13;
    let t14;
    if ($[19] !== title) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[19] = title;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== description) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[21] = description;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== t14 || $[24] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t15;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    let t18;
    let t19;
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            right: 24,
            left: 81
        };
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            horizontal: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            dataKey: "name",
            hide: true,
            tickLine: false,
            tickMargin: 10,
            type: "category"
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "value",
            hide: true,
            type: "number"
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[26] = t17;
        $[27] = t18;
        $[28] = t19;
        $[29] = t20;
    } else {
        t17 = $[26];
        t18 = $[27];
        t19 = $[28];
        t20 = $[29];
    }
    let t21;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
                lineNumber: 183,
                columnNumber: 34
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "value",
            fill: "var(--color-value)",
            layout: "vertical",
            radius: 8,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                    className: "fill-foreground",
                    dataKey: "name",
                    fontSize: 12,
                    offset: 10,
                    position: "left",
                    width: 75
                }, void 0, false, {
                    fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
                    lineNumber: 190,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                    className: "fill-foreground",
                    dataKey: "value",
                    fontSize: 12,
                    offset: 8,
                    position: "right"
                }, void 0, false, {
                    fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
                    lineNumber: 190,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {}, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
                lineNumber: 197,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    let t24;
    if ($[33] !== electabilityData) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            accessibilityLayer: true,
            data: electabilityData,
            layout: "vertical",
            margin: t17,
            children: [
                t18,
                t19,
                t20,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[33] = electabilityData;
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    let t25;
    if ($[35] !== chartConfig || $[36] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                children: t24
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
                lineNumber: 212,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[35] = chartConfig;
        $[36] = t24;
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    let t26;
    if ($[38] !== footnote) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: footnote
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
                lineNumber: 221,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[38] = footnote;
        $[39] = t26;
    } else {
        t26 = $[39];
    }
    let t27;
    if ($[40] !== t16 || $[41] !== t25 || $[42] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t16,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/kim-plus-empty-box/chart.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[40] = t16;
        $[41] = t25;
        $[42] = t26;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    return t27;
}
_s(ElectabilityChart, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = ElectabilityChart;
var _c;
__turbopack_context__.k.register(_c, "ElectabilityChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CabinetChart",
    ()=>CabinetChart,
    "CompositionChart",
    ()=>CompositionChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const TICK_LABEL_CHAR_LIMIT = 3;
const CabinetChartData = [
    {
        name: "Reformasi Pembangunan",
        cabinet: 37
    },
    {
        name: "Persatuan Nasional",
        cabinet: 36
    },
    {
        name: "Gotong Royong",
        cabinet: 33
    },
    {
        name: "Indonesia Bersatu",
        cabinet: 34
    },
    {
        name: "Indonesia Bersatu II",
        cabinet: 34
    },
    {
        name: "Kerja",
        cabinet: 34
    },
    {
        name: "Indonesia Maju",
        cabinet: 34
    },
    {
        name: "Merah Putih",
        cabinet: 48
    }
];
function CabinetChart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "2069bf61a012f225e402fcce32ba822f72a9cb53b490b4dec665562bdabbb616") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2069bf61a012f225e402fcce32ba822f72a9cb53b490b4dec665562bdabbb616";
    }
    const { title, description, footnote } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    let t1;
    if ($[1] !== t) {
        t1 = t("cabinet");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = {
            label: t1,
            color: "var(--chart-1)"
        };
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            color: "var(--foreground)"
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2) {
        t4 = {
            cabinet: t2,
            label: t3
        };
        $[6] = t2;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const chartConfig = t4;
    let t5;
    if ($[8] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[8] = title;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[10] = description;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t5 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t10;
    let t11;
    let t8;
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            right: 16
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            horizontal: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            dataKey: "name",
            hide: true,
            tickFormatter: _temp,
            tickLine: false,
            tickMargin: 10,
            type: "category"
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "cabinet",
            hide: true,
            type: "number"
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t11;
        $[17] = t8;
        $[18] = t9;
    } else {
        t10 = $[15];
        t11 = $[16];
        t8 = $[17];
        t9 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 136,
                columnNumber: 34
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "cabinet",
            fill: "var(--color-cabinet)",
            layout: "vertical",
            radius: 8,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                    className: "fill-(--color-label)",
                    dataKey: "name",
                    fontSize: 12,
                    offset: 8,
                    position: "insideLeft"
                }, void 0, false, {
                    fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                    lineNumber: 143,
                    columnNumber: 91
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                    className: "fill-foreground",
                    dataKey: "cabinet",
                    fontSize: 12,
                    offset: 8,
                    position: "right"
                }, void 0, false, {
                    fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                    lineNumber: 143,
                    columnNumber: 199
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            accessibilityLayer: true,
            data: CabinetChartData,
            layout: "vertical",
            margin: t8,
            children: [
                t9,
                t10,
                t11,
                t12,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {}, void 0, false, {
                        fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                        lineNumber: 150,
                        columnNumber: 147
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                    lineNumber: 150,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== chartConfig) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                children: t14
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 157,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[22] = chartConfig;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== footnote) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: footnote
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 165,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[24] = footnote;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t15 || $[27] !== t16 || $[28] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t7,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t16;
        $[28] = t7;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    return t17;
}
_s(CabinetChart, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = CabinetChart;
function _temp(value) {
    return value.slice(0, TICK_LABEL_CHAR_LIMIT);
}
function CompositionChart(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(95);
    if ($[0] !== "2069bf61a012f225e402fcce32ba822f72a9cb53b490b4dec665562bdabbb616") {
        for(let $i = 0; $i < 95; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2069bf61a012f225e402fcce32ba822f72a9cb53b490b4dec665562bdabbb616";
    }
    const { title, description, footnote } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    let t1;
    if ($[1] !== t) {
        t1 = t("minister");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = [
            {
                name: t1,
                new: 31,
                incumbent: 18
            }
        ];
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const MinisterChartData = t2;
    let t3;
    if ($[5] !== t) {
        t3 = t("gender");
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = [
            {
                name: t3,
                male: 43,
                female: 5
            }
        ];
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const GenderChartData = t4;
    let t5;
    if ($[9] !== t) {
        t5 = t("political-status");
        $[9] = t;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = [
            {
                name: t5,
                politician: 23,
                non_politician: 25
            }
        ];
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const PoliticalStatusChartData = t6;
    let t7;
    if ($[13] !== t) {
        t7 = t("new");
        $[13] = t;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t7) {
        t8 = {
            label: t7,
            color: "var(--chart-1)"
        };
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t) {
        t9 = t("incumbent");
        $[17] = t;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = {
            label: t9,
            color: "var(--chart-2)"
        };
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t) {
        t11 = t("male");
        $[21] = t;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11) {
        t12 = {
            label: t11,
            color: "var(--chart-1)"
        };
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t) {
        t13 = t("female");
        $[25] = t;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t13) {
        t14 = {
            label: t13,
            color: "var(--chart-2)"
        };
        $[27] = t13;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t) {
        t15 = t("politicians");
        $[29] = t;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t15) {
        t16 = {
            label: t15,
            color: "var(--chart-1)"
        };
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t) {
        t17 = t("non-politicians");
        $[33] = t;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t17) {
        t18 = {
            label: t17,
            color: "var(--chart-2)"
        };
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            color: "var(--foreground)"
        };
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== t10 || $[39] !== t12 || $[40] !== t14 || $[41] !== t16 || $[42] !== t18 || $[43] !== t8) {
        t20 = {
            new: t8,
            incumbent: t10,
            male: t12,
            female: t14,
            politician: t16,
            non_politician: t18,
            label: t19
        };
        $[38] = t10;
        $[39] = t12;
        $[40] = t14;
        $[41] = t16;
        $[42] = t18;
        $[43] = t8;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    const chartConfig = t20;
    let t21;
    if ($[45] !== title) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[45] = title;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== description) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[47] = description;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t21 || $[50] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[49] = t21;
        $[50] = t22;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    let t25;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "name",
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[52] = t24;
        $[53] = t25;
    } else {
        t24 = $[52];
        t25 = $[53];
    }
    let t26;
    let t27;
    let t28;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 448,
                columnNumber: 34
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 448,
            columnNumber: 11
        }, this);
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "new",
            fill: "var(--color-new)",
            radius: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "incumbent",
            fill: "var(--color-incumbent)",
            radius: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[54] = t26;
        $[55] = t27;
        $[56] = t28;
    } else {
        t26 = $[54];
        t27 = $[55];
        t28 = $[56];
    }
    let t29;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {}, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 461,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[57] = t29;
    } else {
        t29 = $[57];
    }
    let t30;
    if ($[58] !== MinisterChartData) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            accessibilityLayer: true,
            data: MinisterChartData,
            children: [
                t24,
                t25,
                t26,
                t27,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[58] = MinisterChartData;
        $[59] = t30;
    } else {
        t30 = $[59];
    }
    let t31;
    if ($[60] !== chartConfig || $[61] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
            className: "aspect-square sm:aspect-square",
            config: chartConfig,
            children: t30
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[60] = chartConfig;
        $[61] = t30;
        $[62] = t31;
    } else {
        t31 = $[62];
    }
    let t32;
    let t33;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, this);
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "name",
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 487,
            columnNumber: 11
        }, this);
        $[63] = t32;
        $[64] = t33;
    } else {
        t32 = $[63];
        t33 = $[64];
    }
    let t34;
    let t35;
    let t36;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 498,
                columnNumber: 34
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "male",
            fill: "var(--color-male)",
            radius: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "female",
            fill: "var(--color-female)",
            radius: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[65] = t34;
        $[66] = t35;
        $[67] = t36;
    } else {
        t34 = $[65];
        t35 = $[66];
        t36 = $[67];
    }
    let t37;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {}, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 511,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[68] = t37;
    } else {
        t37 = $[68];
    }
    let t38;
    if ($[69] !== GenderChartData) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            data: GenderChartData,
            children: [
                t32,
                t33,
                t34,
                t35,
                t36,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 518,
            columnNumber: 11
        }, this);
        $[69] = GenderChartData;
        $[70] = t38;
    } else {
        t38 = $[70];
    }
    let t39;
    if ($[71] !== chartConfig || $[72] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
            className: "aspect-square sm:aspect-square",
            config: chartConfig,
            children: t38
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[71] = chartConfig;
        $[72] = t38;
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    let t40;
    let t41;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "name",
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[74] = t40;
        $[75] = t41;
    } else {
        t40 = $[74];
        t41 = $[75];
    }
    let t42;
    let t43;
    let t44;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 548,
                columnNumber: 34
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "politician",
            fill: "var(--color-politician)",
            radius: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, this);
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "non_politician",
            fill: "var(--color-non_politician)",
            radius: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 550,
            columnNumber: 11
        }, this);
        $[76] = t42;
        $[77] = t43;
        $[78] = t44;
    } else {
        t42 = $[76];
        t43 = $[77];
        t44 = $[78];
    }
    let t45;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {}, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 561,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 561,
            columnNumber: 11
        }, this);
        $[79] = t45;
    } else {
        t45 = $[79];
    }
    let t46;
    if ($[80] !== PoliticalStatusChartData) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            data: PoliticalStatusChartData,
            children: [
                t40,
                t41,
                t42,
                t43,
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[80] = PoliticalStatusChartData;
        $[81] = t46;
    } else {
        t46 = $[81];
    }
    let t47;
    if ($[82] !== chartConfig || $[83] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
            className: "aspect-square sm:aspect-square",
            config: chartConfig,
            children: t46
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[82] = chartConfig;
        $[83] = t46;
        $[84] = t47;
    } else {
        t47 = $[84];
    }
    let t48;
    if ($[85] !== t31 || $[86] !== t39 || $[87] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: [
                    t31,
                    t39,
                    t47
                ]
            }, void 0, true, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 585,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, this);
        $[85] = t31;
        $[86] = t39;
        $[87] = t47;
        $[88] = t48;
    } else {
        t48 = $[88];
    }
    let t49;
    if ($[89] !== footnote) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: footnote
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
                lineNumber: 595,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 595,
            columnNumber: 11
        }, this);
        $[89] = footnote;
        $[90] = t49;
    } else {
        t49 = $[90];
    }
    let t50;
    if ($[91] !== t23 || $[92] !== t48 || $[93] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t23,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/merah-putih-cabinet-analysis/chart.tsx",
            lineNumber: 603,
            columnNumber: 11
        }, this);
        $[91] = t23;
        $[92] = t48;
        $[93] = t49;
        $[94] = t50;
    } else {
        t50 = $[94];
    }
    return t50;
}
_s1(CompositionChart, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c1 = CompositionChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "CabinetChart");
__turbopack_context__.k.register(_c1, "CompositionChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/ui/stepper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stepper",
    ()=>Stepper,
    "StepperDescription",
    ()=>StepperDescription,
    "StepperIndicator",
    ()=>StepperIndicator,
    "StepperItem",
    ()=>StepperItem,
    "StepperSeparator",
    ()=>StepperSeparator,
    "StepperTitle",
    ()=>StepperTitle,
    "StepperTrigger",
    ()=>StepperTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as LoaderCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Types
// Contexts
const StepperContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const StepItemContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useStepper = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StepperContext);
    if (!context) {
        throw new Error("useStepper must be used within a Stepper");
    }
    return context;
};
_s(useStepper, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const useStepItem = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StepItemContext);
    if (!context) {
        throw new Error("useStepItem must be used within a StepperItem");
    }
    return context;
};
_s1(useStepItem, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
// Components
function Stepper(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    let className;
    let onValueChange;
    let props;
    let t1;
    let t2;
    let value;
    if ($[1] !== t0) {
        ({ defaultValue: t1, value, onValueChange, orientation: t2, className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = onValueChange;
        $[4] = props;
        $[5] = t1;
        $[6] = t2;
        $[7] = value;
    } else {
        className = $[2];
        onValueChange = $[3];
        props = $[4];
        t1 = $[5];
        t2 = $[6];
        value = $[7];
    }
    const defaultValue = t1 === undefined ? 0 : t1;
    const orientation = t2 === undefined ? "horizontal" : t2;
    const [activeStep, setInternalStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    let t3;
    if ($[8] !== onValueChange || $[9] !== value) {
        t3 = (step)=>{
            if (value === undefined) {
                setInternalStep(step);
            }
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(step);
        };
        $[8] = onValueChange;
        $[9] = value;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const setActiveStep = t3;
    const currentStep = value !== null && value !== void 0 ? value : activeStep;
    let t4;
    if ($[11] !== currentStep || $[12] !== orientation || $[13] !== setActiveStep) {
        t4 = {
            activeStep: currentStep,
            setActiveStep,
            orientation
        };
        $[11] = currentStep;
        $[12] = orientation;
        $[13] = setActiveStep;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== className) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/stepper inline-flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col", className);
        $[15] = className;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] !== orientation || $[18] !== props || $[19] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            "data-orientation": orientation,
            "data-slot": "stepper",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[17] = orientation;
        $[18] = props;
        $[19] = t5;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== t4 || $[22] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepperContext.Provider, {
            value: t4,
            children: t6
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[21] = t4;
        $[22] = t6;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    return t7;
}
_s2(Stepper, "vGjEJ/+/WtbgilYg02HUPNRpbKk=");
_c = Stepper;
// StepperItem
function StepperItem(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    let children;
    let className;
    let props;
    let step;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ step, completed: t1, disabled: t2, loading: t3, className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = step;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        step = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
    }
    const completed = t1 === undefined ? false : t1;
    const disabled = t2 === undefined ? false : t2;
    const loading = t3 === undefined ? false : t3;
    const { activeStep } = useStepper();
    let state;
    if (completed || step < activeStep) {
        state = "completed";
    } else {
        if (activeStep === step) {
            state = "active";
        } else {
            state = "inactive";
        }
    }
    const isLoading = loading && step === activeStep;
    let t4;
    if ($[9] !== disabled || $[10] !== isLoading || $[11] !== state || $[12] !== step) {
        t4 = {
            step,
            state,
            isDisabled: disabled,
            isLoading
        };
        $[9] = disabled;
        $[10] = isLoading;
        $[11] = state;
        $[12] = step;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== className) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/step flex items-center group-data-[orientation=horizontal]/stepper:flex-row group-data-[orientation=vertical]/stepper:flex-col", className);
        $[14] = className;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== isLoading) {
        t6 = isLoading ? {
            "data-loading": true
        } : {};
        $[16] = isLoading;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== children || $[19] !== props || $[20] !== state || $[21] !== t5 || $[22] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            "data-slot": "stepper-item",
            "data-state": state,
            ...t6,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 243,
            columnNumber: 10
        }, this);
        $[18] = children;
        $[19] = props;
        $[20] = state;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] !== t4 || $[25] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepItemContext.Provider, {
            value: t4,
            children: t7
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 255,
            columnNumber: 10
        }, this);
        $[24] = t4;
        $[25] = t7;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    return t8;
}
_s3(StepperItem, "evNwk93goGLfXth0Rh0kgH/2eYU=", false, function() {
    return [
        useStepper
    ];
});
_c1 = StepperItem;
// StepperTrigger
function StepperTrigger(t0) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ asChild: t1, className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const asChild = t1 === undefined ? false : t1;
    const { setActiveStep } = useStepper();
    const { step, isDisabled } = useStepItem();
    if (asChild) {
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Slot : "span";
        let t2;
        if ($[6] !== Comp || $[7] !== children || $[8] !== className) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
                className: className,
                "data-slot": "stepper-trigger",
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
                lineNumber: 309,
                columnNumber: 12
            }, this);
            $[6] = Comp;
            $[7] = children;
            $[8] = className;
            $[9] = t2;
        } else {
            t2 = $[9];
        }
        return t2;
    }
    let t2;
    if ($[10] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-3 rounded-full outline-none focus-visible:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50", className);
        $[10] = className;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    let t3;
    if ($[12] !== setActiveStep || $[13] !== step) {
        t3 = ()=>setActiveStep(step);
        $[12] = setActiveStep;
        $[13] = step;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    let t4;
    if ($[15] !== children || $[16] !== isDisabled || $[17] !== props || $[18] !== t2 || $[19] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t2,
            "data-slot": "stepper-trigger",
            disabled: isDisabled,
            onClick: t3,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 338,
            columnNumber: 10
        }, this);
        $[15] = children;
        $[16] = isDisabled;
        $[17] = props;
        $[18] = t2;
        $[19] = t3;
        $[20] = t4;
    } else {
        t4 = $[20];
    }
    return t4;
}
_s4(StepperTrigger, "YjbZf0cfqjZvjEqHrfLHxprYSaE=", false, function() {
    return [
        useStepper,
        useStepItem
    ];
});
_c2 = StepperTrigger;
// StepperIndicator
function StepperIndicator(t0) {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ asChild: t1, className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const asChild = t1 === undefined ? false : t1;
    const { state, step, isLoading } = useStepItem();
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-6 shrink-0 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground text-xs data-[state=active]:bg-primary data-[state=completed]:bg-primary data-[state=active]:text-primary-foreground data-[state=completed]:text-primary-foreground", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== asChild || $[9] !== children || $[10] !== isLoading || $[11] !== step) {
        t3 = asChild ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "transition-all group-data-[state=completed]/step:scale-0 group-data-loading/step:scale-0 group-data-[state=completed]/step:opacity-0 group-data-loading/step:opacity-0 group-data-loading/step:transition-none",
                    children: step
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
                    lineNumber: 399,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                    "aria-hidden": "true",
                    className: "absolute scale-0 opacity-0 transition-all group-data-[state=completed]/step:scale-100 group-data-[state=completed]/step:opacity-100",
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
                    lineNumber: 399,
                    columnNumber: 271
                }, this),
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute transition-all",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircleIcon$3e$__["LoaderCircleIcon"], {
                        "aria-hidden": "true",
                        className: "animate-spin",
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
                        lineNumber: 399,
                        columnNumber: 513
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
                    lineNumber: 399,
                    columnNumber: 471
                }, this)
            ]
        }, void 0, true);
        $[8] = asChild;
        $[9] = children;
        $[10] = isLoading;
        $[11] = step;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] !== props || $[14] !== state || $[15] !== t2 || $[16] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            "data-slot": "stepper-indicator",
            "data-state": state,
            ...props,
            children: t3
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 410,
            columnNumber: 10
        }, this);
        $[13] = props;
        $[14] = state;
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    return t4;
}
_s5(StepperIndicator, "PJz2NBj+Foh53ur3rQi91uTL0d8=", false, function() {
    return [
        useStepItem
    ];
});
_c3 = StepperIndicator;
// StepperTitle
function StepperTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t1,
            "data-slot": "stepper-title",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 455,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = StepperTitle;
// StepperDescription
function StepperDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t1,
            "data-slot": "stepper-description",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 498,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = StepperDescription;
// StepperSeparator
function StepperSeparator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65d999ed02d7128651c98ec39e161748a1fbb7d31fd54ac1b277602629900d34";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("m-0.5 bg-muted group-data-[orientation=horizontal]/stepper:h-0.5 group-data-[orientation=vertical]/stepper:h-12 group-data-[orientation=horizontal]/stepper:w-full group-data-[orientation=vertical]/stepper:w-0.5 group-data-[orientation=horizontal]/stepper:flex-1 group-data-[state=completed]/step:bg-primary", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            "data-slot": "stepper-separator",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/ui/stepper.tsx",
            lineNumber: 541,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = StepperSeparator;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Stepper");
__turbopack_context__.k.register(_c1, "StepperItem");
__turbopack_context__.k.register(_c2, "StepperTrigger");
__turbopack_context__.k.register(_c3, "StepperIndicator");
__turbopack_context__.k.register(_c4, "StepperTitle");
__turbopack_context__.k.register(_c5, "StepperDescription");
__turbopack_context__.k.register(_c6, "StepperSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetChart",
    ()=>BudgetChart,
    "ElectabilityChart",
    ()=>ElectabilityChart,
    "FundChart",
    ()=>FundChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const BudgetChartData = [
    {
        year: "2020",
        budget: 498
    },
    {
        year: "2021",
        budget: 468.2
    },
    {
        year: "2022",
        budget: 460.6
    },
    {
        year: "2023",
        budget: 439.1
    },
    {
        year: "2024",
        budget: 496.8
    }
];
function BudgetChart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "ebd752789be1b054c95b50c17b327429f7c907a2b16091e02e372d51e47f50e4") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebd752789be1b054c95b50c17b327429f7c907a2b16091e02e372d51e47f50e4";
    }
    const { title, yLabel, footnote } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    let t1;
    if ($[1] !== t) {
        t1 = t("budget");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = {
            label: t1,
            color: "var(--chart-4)"
        };
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            color: "var(--foreground)"
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2) {
        t4 = {
            budget: t2,
            label: t3
        };
        $[6] = t2;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const chartConfig = t4;
    let t5;
    if ($[8] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[8] = title;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: "Kemenkeu RI, 2024a."
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t10;
    let t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            right: 16
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "year",
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t8;
        $[15] = t9;
    } else {
        t10 = $[13];
        t8 = $[14];
        t9 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            textAnchor: "middle"
        };
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== yLabel) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            label: {
                value: yLabel,
                angle: -90,
                position: "insideLeft",
                style: t11
            },
            tickLine: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[17] = yLabel;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 143,
                columnNumber: 34
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "budget",
            fill: "var(--color-budget)",
            radius: 8,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                className: "fill-foreground",
                dataKey: "budget",
                fontSize: 12,
                offset: 8,
                position: "top"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 150,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {}, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 157,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== t12) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            accessibilityLayer: true,
            data: BudgetChartData,
            margin: t8,
            children: [
                t9,
                t10,
                t12,
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== chartConfig || $[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                children: t16
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 172,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[24] = chartConfig;
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== footnote) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: footnote
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 181,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[27] = footnote;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== t17 || $[30] !== t18 || $[31] !== t7) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t7,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[29] = t17;
        $[30] = t18;
        $[31] = t7;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    return t19;
}
_s(BudgetChart, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = BudgetChart;
const FundChartData = [
    {
        year: "2015",
        fund: 16.7
    },
    {
        year: "2016",
        fund: 9.3
    },
    {
        year: "2017",
        fund: 13.1
    },
    {
        year: "2018",
        fund: 17.6
    }
];
function FundChart(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "ebd752789be1b054c95b50c17b327429f7c907a2b16091e02e372d51e47f50e4") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebd752789be1b054c95b50c17b327429f7c907a2b16091e02e372d51e47f50e4";
    }
    const { title, description, yLabel, footnote } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    let t1;
    if ($[1] !== t) {
        t1 = t("fund");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = {
            label: t1,
            color: "var(--chart-5)"
        };
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            color: "var(--foreground)"
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2) {
        t4 = {
            fund: t2,
            label: t3
        };
        $[6] = t2;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const chartConfig = t4;
    let t5;
    if ($[8] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 269,
            columnNumber: 10
        }, this);
        $[8] = title;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 277,
            columnNumber: 10
        }, this);
        $[10] = description;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t5 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 285,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t10;
    let t8;
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            right: 16
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 299,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "year",
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t8;
        $[17] = t9;
    } else {
        t10 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            textAnchor: "middle"
        };
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== yLabel) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            label: {
                value: yLabel,
                angle: -90,
                position: "insideLeft",
                style: t11
            },
            tickLine: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[19] = yLabel;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 333,
                columnNumber: 34
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "fund",
            fill: "var(--color-fund)",
            radius: 8,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                className: "fill-foreground",
                dataKey: "fund",
                fontSize: 12,
                offset: 8,
                position: "top"
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 340,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {}, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 347,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t12) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            accessibilityLayer: true,
            data: FundChartData,
            margin: t8,
            children: [
                t9,
                t10,
                t12,
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== chartConfig || $[27] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                children: t16
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 362,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[26] = chartConfig;
        $[27] = t16;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== footnote) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: footnote
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 371,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[29] = footnote;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== t17 || $[32] !== t18 || $[33] !== t7) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t7,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t18;
        $[33] = t7;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    return t19;
}
_s1(FundChart, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c1 = FundChart;
const ElectabilityChartData = [
    {
        date: "2021-01-01",
        anies_muhaimin: 23,
        prabowo_gibran: 35,
        ganjar_mahfud: 25
    },
    {
        date: "2022-05-01",
        anies_muhaimin: 22,
        prabowo_gibran: 33,
        ganjar_mahfud: 33
    },
    {
        date: "2022-06-01",
        anies_muhaimin: 21,
        prabowo_gibran: 34,
        ganjar_mahfud: 38
    },
    {
        date: "2022-07-01",
        anies_muhaimin: 28,
        prabowo_gibran: 27,
        ganjar_mahfud: 30
    },
    {
        date: "2022-10-01",
        anies_muhaimin: 28,
        prabowo_gibran: 30,
        ganjar_mahfud: 32
    },
    {
        date: "2023-01-01",
        anies_muhaimin: 22,
        prabowo_gibran: 22,
        ganjar_mahfud: 38
    },
    {
        date: "2023-02-01",
        anies_muhaimin: 25,
        prabowo_gibran: 28,
        ganjar_mahfud: 37
    },
    {
        date: "2023-04-01",
        anies_muhaimin: 28,
        prabowo_gibran: 35,
        ganjar_mahfud: 36
    },
    {
        date: "2023-07-01",
        anies_muhaimin: 20,
        prabowo_gibran: 38,
        ganjar_mahfud: 32
    },
    {
        date: "2023-09-01",
        anies_muhaimin: 21,
        prabowo_gibran: 37,
        ganjar_mahfud: 31
    },
    {
        date: "2023-10-01",
        anies_muhaimin: 22,
        prabowo_gibran: 39,
        ganjar_mahfud: 37
    },
    {
        date: "2023-12-01",
        anies_muhaimin: 20,
        prabowo_gibran: 43,
        ganjar_mahfud: 21
    },
    {
        date: "2024-01-01",
        anies_muhaimin: 22,
        prabowo_gibran: 48,
        ganjar_mahfud: 19
    },
    {
        date: "2024-02-01",
        anies_muhaimin: 22,
        prabowo_gibran: 56,
        ganjar_mahfud: 18
    }
];
const chartConfig = {
    anies_muhaimin: {
        label: "Anies Baswedan-Muhaimin Iskandar",
        color: "var(--chart-1)"
    },
    prabowo_gibran: {
        label: "Prabowo Subianto-Gibran Rakabuming",
        color: "var(--chart-2)"
    },
    ganjar_mahfud: {
        label: "Ganjar Pranowo-Mahfud MD",
        color: "var(--chart-3)"
    }
};
function ElectabilityChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "ebd752789be1b054c95b50c17b327429f7c907a2b16091e02e372d51e47f50e4") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebd752789be1b054c95b50c17b327429f7c907a2b16091e02e372d51e47f50e4";
    }
    const { title, description, yLabel, footnote } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 490,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 498,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 506,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 516,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "date",
            tickFormatter: _temp,
            tickLine: false,
            tickMargin: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 517,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            textAnchor: "middle"
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== yLabel) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            label: {
                value: yLabel,
                angle: -90,
                position: "insideLeft",
                style: t6
            },
            tickLine: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 535,
            columnNumber: 10
        }, this);
        $[11] = yLabel;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t10;
    let t11;
    let t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line",
                labelFormatter: _temp2
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 551,
                columnNumber: 33
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 551,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "anies_muhaimin",
            dot: false,
            stroke: "var(--color-anies_muhaimin)",
            strokeWidth: 2,
            type: "natural"
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 552,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "prabowo_gibran",
            dot: false,
            stroke: "var(--color-prabowo_gibran)",
            strokeWidth: 2,
            type: "natural"
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 553,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "ganjar_mahfud",
            dot: false,
            stroke: "var(--color-ganjar_mahfud)",
            strokeWidth: 2,
            type: "natural"
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t11;
        $[15] = t8;
        $[16] = t9;
    } else {
        t10 = $[13];
        t11 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {}, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 567,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                    accessibilityLayer: true,
                    data: ElectabilityChartData,
                    children: [
                        t4,
                        t5,
                        t7,
                        t8,
                        t9,
                        t10,
                        t11,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                    lineNumber: 574,
                    columnNumber: 61
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 574,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[18] = t7;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== footnote) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: footnote
            }, void 0, false, {
                fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
                lineNumber: 582,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[20] = footnote;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== t13 || $[23] !== t14 || $[24] !== t3) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t3,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/articles/politics/pork-barrel-politics-power/chart.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t14;
        $[24] = t3;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    return t15;
}
_c2 = ElectabilityChart;
function _temp2(value_0) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(value_0), "MMMM yyyy");
}
function _temp(value) {
    const date = new Date(value);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "MMM yyyy");
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BudgetChart");
__turbopack_context__.k.register(_c1, "FundChart");
__turbopack_context__.k.register(_c2, "ElectabilityChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/contents/animation-bacterial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BacterialGrowth",
    ()=>BacterialGrowth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$intersection$2f$use$2d$intersection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/hooks/esm/use-intersection/use-intersection.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as PauseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as PlayIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2d$reset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TimerResetIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer-reset.js [app-client] (ecmascript) <export default as TimerResetIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
const MAX_BACTERIA_COUNT = 100;
const SPEED_INTERVAL = 1000;
const STAGGER_DELAY = 0.01;
const SCALE_INCREASE = 1.1;
const SPEED_VALUES_DIFFERENCE = 0.25;
const SPEED_VALUES = Array.from({
    length: 5
}, (_, i)=>SPEED_VALUES_DIFFERENCE * (i + 1));
function BacterialGrowth(param) {
    let { ratio = 2, initialCount = 1, maxGenerations = 6, formulaType = "geometric", customFormula, timeInterval = 1, // Default: 1 hour
    timeUnit = "h", // Default: hours
    labels = {
        title: "Bacterial Growth",
        bacterial: "Bacterial",
        initialBacteria: "Initial bacteria"
    } } = param;
    _s();
    const [generation, setGeneration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const deferredPlaying = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(isPlaying);
    const deferredGeneration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(generation);
    const { ref, entry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$intersection$2f$use$2d$intersection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntersection"])({
        threshold: 0.1
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BacterialGrowth.useEffect": ()=>{
            if (entry) {
                setIsPlaying(entry.isIntersecting);
            }
        }
    }["BacterialGrowth.useEffect"], [
        entry
    ]);
    // Start playing when component comes into view
    // Calculate current bacteria count based on the selected formula type
    const bacteriaCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BacterialGrowth.useMemo[bacteriaCount]": ()=>{
            if (customFormula) {
                return customFormula(initialCount, ratio, deferredGeneration);
            }
            switch(formulaType){
                case "geometric":
                    // U_n = a·r^(n-1) (standard geometric sequence formula)
                    // For bacterial growth: bacteria after n generations = initial × ratio^(generation)
                    // We always start index from 0, so we don't need to subtract 1 from the generation
                    return initialCount * ratio ** deferredGeneration;
                case "exponential":
                    // B(t) = B₀ × e^(kt) where k = ln(ratio)
                    return initialCount * Math.exp(Math.log(ratio) * deferredGeneration);
                default:
                    // Default to geometric for backward compatibility
                    return initialCount * ratio ** deferredGeneration;
            }
        }
    }["BacterialGrowth.useMemo[bacteriaCount]"], [
        initialCount,
        deferredGeneration,
        ratio,
        formulaType,
        customFormula
    ]);
    // Create an array of bacteria to display
    const bacteria = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BacterialGrowth.useMemo[bacteria]": ()=>Array.from({
                length: Math.min(Math.round(bacteriaCount), MAX_BACTERIA_COUNT)
            }, {
                "BacterialGrowth.useMemo[bacteria]": (_, i)=>i
            }["BacterialGrowth.useMemo[bacteria]"])
    }["BacterialGrowth.useMemo[bacteria]"], [
        bacteriaCount
    ]);
    // Calculate how many bacteria to actually show (cap at 100 for performance)
    const displayCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BacterialGrowth.useMemo[displayCount]": ()=>Math.min(Math.round(bacteriaCount), MAX_BACTERIA_COUNT)
    }["BacterialGrowth.useMemo[displayCount]"], [
        bacteriaCount
    ]);
    // Calculate grid dimensions based on bacteria count
    const gridCols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BacterialGrowth.useMemo[gridCols]": ()=>Math.min(Math.ceil(Math.sqrt(displayCount)), 10)
    }["BacterialGrowth.useMemo[gridCols]"], [
        displayCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BacterialGrowth.useEffect": ()=>{
            let interval;
            // Stop playing when maximum generation is reached
            if (deferredGeneration >= maxGenerations) {
                setIsPlaying(false);
                return;
            }
            if (deferredPlaying) {
                interval = setInterval({
                    "BacterialGrowth.useEffect": ()=>{
                        setGeneration({
                            "BacterialGrowth.useEffect": (prev)=>{
                                if (prev < maxGenerations) {
                                    return prev + 1;
                                }
                                return prev;
                            }
                        }["BacterialGrowth.useEffect"]);
                    }
                }["BacterialGrowth.useEffect"], SPEED_INTERVAL / speed);
            }
            return ({
                "BacterialGrowth.useEffect": ()=>clearInterval(interval)
            })["BacterialGrowth.useEffect"];
        }
    }["BacterialGrowth.useEffect"], [
        deferredPlaying,
        deferredGeneration,
        maxGenerations,
        speed
    ]);
    const resetAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BacterialGrowth.useCallback[resetAnimation]": ()=>{
            setGeneration(0);
            setIsPlaying(true);
        }
    }["BacterialGrowth.useCallback[resetAnimation]"], []);
    const togglePlayPause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BacterialGrowth.useCallback[togglePlayPause]": ()=>{
            if (!isPlaying && generation >= maxGenerations) {
                // If at max generation and trying to play, restart from beginning
                setGeneration(0);
                setIsPlaying(true);
            } else {
                setIsPlaying(!isPlaying);
            }
        }
    }["BacterialGrowth.useCallback[togglePlayPause]"], [
        isPlaying,
        generation,
        maxGenerations
    ]);
    // Generate time buttons
    const timeButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BacterialGrowth.useMemo[timeButtons]": ()=>Array.from({
                length: maxGenerations + 1
            }).map({
                "BacterialGrowth.useMemo[timeButtons]": (__0, i_0)=>{
                    const time = i_0 * timeInterval;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: {
                            "BacterialGrowth.useMemo[timeButtons]": ()=>{
                                setGeneration(i_0);
                                setIsPlaying(false);
                            }
                        }["BacterialGrowth.useMemo[timeButtons]"],
                        size: "sm",
                        variant: generation === i_0 ? "default" : "outline",
                        children: [
                            time,
                            timeUnit
                        ]
                    }, time.toString(), true, {
                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                        lineNumber: 121,
                        columnNumber: 12
                    }, this);
                }
            }["BacterialGrowth.useMemo[timeButtons]"])
    }["BacterialGrowth.useMemo[timeButtons]"], [
        generation,
        maxGenerations,
        timeInterval,
        timeUnit
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: labels.title
                    }, void 0, false, {
                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: [
                            Math.round(bacteriaCount),
                            " ",
                            labels.bacterial
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-square w-full overflow-hidden rounded-lg border border-cyan-100 bg-cyan-50 sm:aspect-video dark:border-cyan-900 dark:bg-cyan-950",
                    ref: ref,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid h-full w-full gap-0.5 p-2 sm:px-0",
                        style: {
                            gridTemplateColumns: "repeat(".concat(gridCols, ", minmax(0, 1fr))")
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "popLayout",
                                children: bacteria.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        className: "relative flex items-center justify-center",
                                        exit: {
                                            scale: 0,
                                            opacity: 0
                                        },
                                        initial: {
                                            scale: 0,
                                            opacity: 0
                                        },
                                        layout: true,
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                            delay: id * STAGGER_DELAY // Stagger effect
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: [
                                                    1,
                                                    SCALE_INCREASE,
                                                    1
                                                ]
                                            },
                                            className: "aspect-square h-full max-h-[20px] w-full max-w-[20px] rounded-full bg-cyan-300 transition-colors hover:bg-cyan-400 sm:max-h-[32px] sm:max-w-[32px] dark:bg-cyan-500",
                                            transition: {
                                                duration: 1,
                                                repeat: Number.POSITIVE_INFINITY,
                                                repeatType: "reverse"
                                            },
                                            whileHover: {
                                                scale: SCALE_INCREASE
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                            lineNumber: 159,
                                            columnNumber: 21
                                        }, this)
                                    }, id, false, {
                                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                        lineNumber: 144,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "flex flex-col gap-4 px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col items-center justify-between gap-4 px-6 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "aria-label": "Reset",
                                        onClick: resetAnimation,
                                        size: "icon",
                                        variant: "outline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2d$reset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TimerResetIcon$3e$__["TimerResetIcon"], {
                                                className: "size-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "aria-label": isPlaying ? "Pause" : "Play",
                                        onClick: togglePlayPause,
                                        size: "icon",
                                        variant: isPlaying ? "outline" : "default",
                                        children: [
                                            isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseIcon$3e$__["PauseIcon"], {
                                                className: "size-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                                lineNumber: 183,
                                                columnNumber: 28
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__["PlayIcon"], {
                                                className: "size-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                                lineNumber: 183,
                                                columnNumber: 72
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: isPlaying ? "Pause" : "Play"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-2",
                                children: SPEED_VALUES.map((speedValue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setSpeed(speedValue),
                                        size: "sm",
                                        variant: speed === speedValue ? "default" : "outline",
                                        children: [
                                            speedValue,
                                            "x"
                                        ]
                                    }, speedValue, true, {
                                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                        lineNumber: 189,
                                        columnNumber: 45
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full border-t px-6 pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2",
                            children: timeButtons
                        }, void 0, false, {
                            fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/design-system/components/contents/animation-bacterial.tsx",
        lineNumber: 129,
        columnNumber: 10
    }, this);
}
_s(BacterialGrowth, "TdDohS3sSqzIKkV5j+etTg4eu9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$intersection$2f$use$2d$intersection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntersection"]
    ];
});
_c = BacterialGrowth;
var _c;
__turbopack_context__.k.register(_c, "BacterialGrowth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/contents/function-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionChart",
    ()=>FunctionChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const THRESHOLD_VALUE = 1000;
const THRESHOLD_VALUE_DECIMAL_PLACES = 0;
function FunctionChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "02db73ace1144c3231c5cc277cacf35f300e5858ea84b25a07f6f483b7124f92") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "02db73ace1144c3231c5cc277cacf35f300e5858ea84b25a07f6f483b7124f92";
    }
    const { p, a, title, description, n: t1 } = t0;
    const n = t1 === undefined ? 11 : t1;
    let t2;
    if ($[1] !== a || $[2] !== n || $[3] !== p) {
        let t3;
        if ($[5] !== a || $[6] !== p) {
            t3 = (_, i)=>{
                if (a === 0 && i === 0) {
                    return {
                        x: i,
                        y: null
                    };
                }
                return {
                    x: i,
                    y: p * a ** i
                };
            };
            $[5] = a;
            $[6] = p;
            $[7] = t3;
        } else {
            t3 = $[7];
        }
        t2 = Array.from({
            length: n
        }, t3);
        $[1] = a;
        $[2] = n;
        $[3] = p;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const data = t2;
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            y: {
                label: "f(x)",
                color: "var(--chart-1)"
            }
        };
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const chartConfig = t3;
    let t4;
    if ($[9] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[9] = title;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = description;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {}, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "x",
            tickFormatter: _temp,
            tickMargin: 8
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t7 = $[16];
        t8 = $[17];
    }
    let t10;
    let t11;
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            label: {
                value: "f(x)",
                angle: -90,
                position: "insideLeft",
                style: {
                    textAnchor: "middle"
                }
            },
            tickFormatter: _temp2,
            tickMargin: 8
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: _temp3
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            connectNulls: false,
            dataKey: "y",
            dot: true,
            name: "y",
            stroke: chartConfig.y.color,
            strokeWidth: 2,
            type: "monotone"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
        $[20] = t9;
    } else {
        t10 = $[18];
        t11 = $[19];
        t9 = $[20];
    }
    let t12;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {
                verticalAlign: "bottom"
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
                lineNumber: 132,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== data) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                    accessibilityLayer: true,
                    data: data,
                    children: [
                        t7,
                        t8,
                        t9,
                        t10,
                        t11,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
                    lineNumber: 139,
                    columnNumber: 61
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
                lineNumber: 139,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[22] = data;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t13 || $[25] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t6;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    return t14;
}
_c = FunctionChart;
function _temp3(t0) {
    const { active, payload } = t0;
    if (active && payload && payload.length) {
        const xValue = payload[0].payload.x;
        const yValue = payload[0].payload.y;
        if (yValue === null) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                active: active,
                label: "x = ".concat(xValue, ", y = undefined"),
                payload: []
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
                lineNumber: 165,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
            active: active,
            label: "x = ".concat(xValue),
            payload: payload
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/function-chart.tsx",
            lineNumber: 167,
            columnNumber: 12
        }, this);
    }
    return null;
}
function _temp2(value_0) {
    return value_0 >= THRESHOLD_VALUE ? "".concat((value_0 / THRESHOLD_VALUE).toFixed(THRESHOLD_VALUE_DECIMAL_PLACES), "k") : value_0;
}
function _temp(value) {
    return value.toString();
}
var _c;
__turbopack_context__.k.register(_c, "FunctionChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VirusChart",
    ()=>VirusChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const EXPONENTIAL_BASE = 3;
const LINEAR_SCALING_FACTOR = 3;
const LOGARITHMIC_SCALING_FACTOR = 20;
const THRESHOLD_VALUE = 1000;
const THRESHOLD_VALUE_DECIMAL_PLACES = 0;
const data = Array.from({
    length: 5
}, (_, i)=>{
    const phase = i + 1;
    return {
        phase,
        exponential: EXPONENTIAL_BASE ** phase,
        // Exponential: 3^phase
        linear: LINEAR_SCALING_FACTOR * phase,
        // Linear: 3*phase
        logarithmic: Math.log(phase + 1) * LOGARITHMIC_SCALING_FACTOR // Logarithmic: log(phase+1) * scaling factor
    };
});
function VirusChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "7efa11c14f697aec50b8f2b04c29c1477cd2edf98eda5001edefe628241f02cd") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7efa11c14f697aec50b8f2b04c29c1477cd2edf98eda5001edefe628241f02cd";
    }
    const { labels: t1 } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? {
            title: "Virus Spread",
            description: "Number of people infected in each phase of the virus spread.",
            exponential: "Exponential Function",
            linear: "Linear Function",
            logarithmic: "Logarithmic Function",
            yLabel: "Number of people infected",
            caption: "Virus spread grows exponentially, accelerating rapidly after initial phases.",
            phase: "Phase"
        } : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const labels = t2;
    let t3;
    if ($[3] !== labels.exponential) {
        t3 = {
            label: labels.exponential,
            color: "var(--chart-1)"
        };
        $[3] = labels.exponential;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== labels.linear) {
        t4 = {
            label: labels.linear,
            color: "var(--chart-2)"
        };
        $[5] = labels.linear;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== labels.logarithmic) {
        t5 = {
            label: labels.logarithmic,
            color: "var(--chart-3)"
        };
        $[7] = labels.logarithmic;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
        t6 = {
            exponential: t3,
            linear: t4,
            logarithmic: t5
        };
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const chartConfig = t6;
    let t7;
    if ($[13] !== labels.title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: labels.title
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[13] = labels.title;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== labels.description) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: labels.description
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[15] = labels.description;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t7 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {}, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "phase",
            tickFormatter: _temp,
            tickMargin: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
    } else {
        t10 = $[20];
        t11 = $[21];
    }
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            textAnchor: "middle"
        };
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== labels.yLabel) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            label: {
                value: labels.yLabel,
                angle: -90,
                position: "insideLeft",
                style: t12
            },
            tickFormatter: _temp2,
            tickMargin: 8
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[23] = labels.yLabel;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== labels.phase) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: (t15)=>{
                const { active, payload } = t15;
                if (active && payload && payload.length) {
                    const phaseValue = payload[0].payload.phase;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                        active: active,
                        label: "".concat(labels.phase, " ").concat(phaseValue),
                        payload: payload
                    }, void 0, false, {
                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
                        lineNumber: 169,
                        columnNumber: 16
                    }, void 0);
                }
                return null;
            }
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[25] = labels.phase;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== chartConfig.exponential.color) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "exponential",
            dot: true,
            name: "exponential",
            stroke: chartConfig.exponential.color,
            strokeWidth: 2,
            type: "monotone"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[27] = chartConfig.exponential.color;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== chartConfig.linear.color) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "linear",
            dot: true,
            name: "linear",
            stroke: chartConfig.linear.color,
            strokeWidth: 2,
            type: "monotone"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[29] = chartConfig.linear.color;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== chartConfig.logarithmic.color) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "logarithmic",
            dot: true,
            name: "logarithmic",
            stroke: chartConfig.logarithmic.color,
            strokeWidth: 2,
            type: "monotone"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[31] = chartConfig.logarithmic.color;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {
                verticalAlign: "bottom"
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
                lineNumber: 204,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== t13 || $[35] !== t14 || $[36] !== t15 || $[37] !== t16 || $[38] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
            accessibilityLayer: true,
            data: data,
            children: [
                t10,
                t11,
                t13,
                t14,
                t15,
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[34] = t13;
        $[35] = t14;
        $[36] = t15;
        $[37] = t16;
        $[38] = t17;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== chartConfig || $[41] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                children: t19
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
                lineNumber: 223,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[40] = chartConfig;
        $[41] = t19;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== labels.caption) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: labels.caption
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
                lineNumber: 232,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[43] = labels.caption;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== t20 || $[46] !== t21 || $[47] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t9,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/exponential-logarithm/function-exploration/virus-chart.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[45] = t20;
        $[46] = t21;
        $[47] = t9;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    return t22;
}
_c = VirusChart;
function _temp2(value_0) {
    return value_0 >= THRESHOLD_VALUE ? "".concat((value_0 / THRESHOLD_VALUE).toFixed(THRESHOLD_VALUE_DECIMAL_PLACES), "k") : value_0;
}
function _temp(value) {
    return value.toString();
}
var _c;
__turbopack_context__.k.register(_c, "VirusChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/lib/color.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * COLORS constant
 *
 * All colors are taken from Tailwind CSS's palette at the -500 shade.
 * For example, RED is tailwind's red-500, BLUE is blue-500, etc.
 */ __turbopack_context__.s([
    "COLORS",
    ()=>COLORS,
    "getColor",
    ()=>getColor,
    "randomColor",
    ()=>randomColor
]);
const COLORS = {
    RED: "#dc2626",
    ORANGE: "#ea580c",
    AMBER: "#d97706",
    YELLOW: "#ca8a04",
    LIME: "#65a30d",
    GREEN: "#16a34a",
    EMERALD: "#059669",
    TEAL: "#0d9488",
    CYAN: "#0891b2",
    SKY: "#0284c7",
    BLUE: "#2563eb",
    INDIGO: "#4f46e5",
    VIOLET: "#7c3aed",
    PURPLE: "#9333ea",
    FUCHSIA: "#c026d3",
    PINK: "#db2777",
    ROSE: "#e11d48"
};
// Define a constant array of color keys at module level
const COLOR_KEYS = Object.keys(COLORS);
_c = COLOR_KEYS;
function getColor(color) {
    return COLORS[color.toUpperCase()];
}
function randomColor(exclude, seed) {
    const availableKeys = COLOR_KEYS.filter((key)=>!(exclude === null || exclude === void 0 ? void 0 : exclude.some((excludeKey)=>excludeKey === key)));
    if (availableKeys.length === 0) {
        return COLORS[COLOR_KEYS[0]];
    }
    // Deterministic hash-based selection
    let seedNum = 0;
    if (typeof seed === "number") {
        seedNum = seed;
    } else if (seed) {
        seedNum = Array.from(seed).reduce((acc, char)=>acc + char.charCodeAt(0), 0);
    }
    const index = seedNum % availableKeys.length;
    return COLORS[availableKeys[index]];
}
var _c;
__turbopack_context__.k.register(_c, "COLOR_KEYS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// origin point O(0, 0, 0)
__turbopack_context__.s([
    "FONT_PATH",
    ()=>FONT_PATH,
    "MONO_FONT_PATH",
    ()=>MONO_FONT_PATH,
    "ORIGIN_COLOR",
    ()=>ORIGIN_COLOR
]);
const ORIGIN_COLOR = {
    LIGHT: "#f4f4f5",
    DARK: "#18181b"
};
const FONT_PATH = "/fonts/Geist-Regular.ttf";
const MONO_FONT_PATH = "/fonts/GeistMono-Regular.ttf";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/axes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Axes",
    ()=>Axes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)");
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
// Shared materials cache for text components
const textMaterialCache = new Map();
function getTextMaterial(color) {
    if (!textMaterialCache.has(color)) {
        textMaterialCache.set(color, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color
        }));
    }
    const material = textMaterialCache.get(color);
    if (!material) {
        throw new Error("Text material not found for color: ".concat(color));
    }
    return material;
}
function Axes(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(101);
    if ($[0] !== "60787a756375f54e299247a9b99480dee87c08a2f5ab08105db7aba9775afad2") {
        for(let $i = 0; $i < 101; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "60787a756375f54e299247a9b99480dee87c08a2f5ab08105db7aba9775afad2";
    }
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== t0) {
        ({ size: t1, showLabels: t2, showZAxis: t3, labelSize: t4, labelOffset: t5, font: t6, ...props } = t0);
        $[1] = t0;
        $[2] = props;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        props = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    const size = t1 === undefined ? 10 : t1;
    const showLabels = t2 === undefined ? true : t2;
    const showZAxis = t3 === undefined ? true : t3;
    const labelSize = t4 === undefined ? 0.5 : t4;
    const labelOffset = t5 === undefined ? 0.5 : t5;
    const font = t6 === undefined ? "mono" : t6;
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t7 = -size;
    let t8;
    if ($[9] !== t7) {
        t8 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](t7, 0, 0);
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== size) {
        t9 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](size, 0, 0);
        $[11] = size;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t8 || $[14] !== t9) {
        t10 = [
            t8,
            t9
        ];
        $[13] = t8;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const xPoints = t10;
    const t11 = -size;
    let t12;
    if ($[16] !== t11) {
        t12 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, t11, 0);
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== size) {
        t13 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, size, 0);
        $[18] = size;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== t12 || $[21] !== t13) {
        t14 = [
            t12,
            t13
        ];
        $[20] = t12;
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    const yPoints = t14;
    const t15 = -size;
    let t16;
    if ($[23] !== t15) {
        t16 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, t15);
        $[23] = t15;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== size) {
        t17 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, size);
        $[25] = size;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== t16 || $[28] !== t17) {
        t18 = [
            t16,
            t17
        ];
        $[27] = t16;
        $[28] = t17;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    const zPoints = t18;
    const fontToUse = font === "mono" ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONO_FONT_PATH"] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_PATH"];
    const offset = size + labelOffset;
    let t19;
    if ($[30] !== offset) {
        t19 = [
            offset,
            0,
            0
        ];
        $[30] = offset;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    const t20 = t19;
    const t21 = -offset;
    let t22;
    if ($[32] !== t21) {
        t22 = [
            t21,
            0,
            0
        ];
        $[32] = t21;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    const t23 = t22;
    let t24;
    if ($[34] !== offset) {
        t24 = [
            0,
            offset,
            0
        ];
        $[34] = offset;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    const t25 = t24;
    const t26 = -offset;
    let t27;
    if ($[36] !== t26) {
        t27 = [
            0,
            t26,
            0
        ];
        $[36] = t26;
        $[37] = t27;
    } else {
        t27 = $[37];
    }
    const t28 = t27;
    let t29;
    if ($[38] !== offset) {
        t29 = [
            0,
            0,
            offset
        ];
        $[38] = offset;
        $[39] = t29;
    } else {
        t29 = $[39];
    }
    const t30 = t29;
    const t31 = -offset;
    let t32;
    if ($[40] !== t31) {
        t32 = [
            0,
            0,
            t31
        ];
        $[40] = t31;
        $[41] = t32;
    } else {
        t32 = $[41];
    }
    const t33 = t32;
    let t34;
    if ($[42] !== t20 || $[43] !== t23 || $[44] !== t25 || $[45] !== t28 || $[46] !== t30 || $[47] !== t33) {
        t34 = {
            xPos: t20,
            xNeg: t23,
            yPos: t25,
            yNeg: t28,
            zPos: t30,
            zNeg: t33
        };
        $[42] = t20;
        $[43] = t23;
        $[44] = t25;
        $[45] = t28;
        $[46] = t30;
        $[47] = t33;
        $[48] = t34;
    } else {
        t34 = $[48];
    }
    const labelPositions = t34;
    let t35;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = ()=>{
            if (groupRef.current) {
                groupRef.current.frustumCulled = true;
            }
        };
        $[49] = t35;
    } else {
        t35 = $[49];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t35);
    let t36;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = getTextMaterial(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].RED);
        $[50] = t36;
    } else {
        t36 = $[50];
    }
    const redMaterial = t36;
    let t37;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = getTextMaterial(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GREEN);
        $[51] = t37;
    } else {
        t37 = $[51];
    }
    const greenMaterial = t37;
    let t38;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = getTextMaterial(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLUE);
        $[52] = t38;
    } else {
        t38 = $[52];
    }
    const blueMaterial = t38;
    let t39;
    if ($[53] !== xPoints) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].RED,
            frustumCulled: true,
            lineWidth: 2,
            points: xPoints
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[53] = xPoints;
        $[54] = t39;
    } else {
        t39 = $[54];
    }
    let t40;
    if ($[55] !== yPoints) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GREEN,
            frustumCulled: true,
            lineWidth: 2,
            points: yPoints
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[55] = yPoints;
        $[56] = t40;
    } else {
        t40 = $[56];
    }
    let t41;
    if ($[57] !== showZAxis || $[58] !== zPoints) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLUE,
            frustumCulled: true,
            lineWidth: 2,
            points: zPoints,
            visible: showZAxis
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[57] = showZAxis;
        $[58] = zPoints;
        $[59] = t41;
    } else {
        t41 = $[59];
    }
    let t42;
    if ($[60] !== fontToUse || $[61] !== labelPositions.xPos || $[62] !== labelSize || $[63] !== showLabels) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "left",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].RED,
            font: fontToUse,
            fontSize: labelSize,
            frustumCulled: true,
            material: redMaterial,
            position: labelPositions.xPos,
            visible: showLabels,
            children: "X"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[60] = fontToUse;
        $[61] = labelPositions.xPos;
        $[62] = labelSize;
        $[63] = showLabels;
        $[64] = t42;
    } else {
        t42 = $[64];
    }
    let t43;
    if ($[65] !== fontToUse || $[66] !== labelPositions.xNeg || $[67] !== labelSize || $[68] !== showLabels) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "right",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].RED,
            font: fontToUse,
            fontSize: labelSize,
            frustumCulled: true,
            material: redMaterial,
            position: labelPositions.xNeg,
            visible: showLabels,
            children: "-X"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[65] = fontToUse;
        $[66] = labelPositions.xNeg;
        $[67] = labelSize;
        $[68] = showLabels;
        $[69] = t43;
    } else {
        t43 = $[69];
    }
    let t44;
    if ($[70] !== fontToUse || $[71] !== labelPositions.yPos || $[72] !== labelSize || $[73] !== showLabels) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "left",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GREEN,
            font: fontToUse,
            fontSize: labelSize,
            frustumCulled: true,
            material: greenMaterial,
            position: labelPositions.yPos,
            visible: showLabels,
            children: "Y"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[70] = fontToUse;
        $[71] = labelPositions.yPos;
        $[72] = labelSize;
        $[73] = showLabels;
        $[74] = t44;
    } else {
        t44 = $[74];
    }
    let t45;
    if ($[75] !== fontToUse || $[76] !== labelPositions.yNeg || $[77] !== labelSize || $[78] !== showLabels) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "left",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GREEN,
            font: fontToUse,
            fontSize: labelSize,
            frustumCulled: true,
            material: greenMaterial,
            position: labelPositions.yNeg,
            visible: showLabels,
            children: "-Y"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[75] = fontToUse;
        $[76] = labelPositions.yNeg;
        $[77] = labelSize;
        $[78] = showLabels;
        $[79] = t45;
    } else {
        t45 = $[79];
    }
    const t46 = showZAxis && showLabels;
    let t47;
    if ($[80] !== fontToUse || $[81] !== labelPositions.zPos || $[82] !== labelSize || $[83] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "left",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLUE,
            font: fontToUse,
            fontSize: labelSize,
            frustumCulled: true,
            material: blueMaterial,
            position: labelPositions.zPos,
            visible: t46,
            children: "Z"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[80] = fontToUse;
        $[81] = labelPositions.zPos;
        $[82] = labelSize;
        $[83] = t46;
        $[84] = t47;
    } else {
        t47 = $[84];
    }
    const t48 = showZAxis && showLabels;
    let t49;
    if ($[85] !== fontToUse || $[86] !== labelPositions.zNeg || $[87] !== labelSize || $[88] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "left",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLUE,
            font: fontToUse,
            fontSize: labelSize,
            frustumCulled: true,
            material: blueMaterial,
            position: labelPositions.zNeg,
            visible: t48,
            children: "-Z"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[85] = fontToUse;
        $[86] = labelPositions.zNeg;
        $[87] = labelSize;
        $[88] = t48;
        $[89] = t49;
    } else {
        t49 = $[89];
    }
    let t50;
    if ($[90] !== props || $[91] !== t39 || $[92] !== t40 || $[93] !== t41 || $[94] !== t42 || $[95] !== t43 || $[96] !== t44 || $[97] !== t45 || $[98] !== t47 || $[99] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: groupRef,
            ...props,
            children: [
                t39,
                t40,
                t41,
                t42,
                t43,
                t44,
                t45,
                t47,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/axes.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[90] = props;
        $[91] = t39;
        $[92] = t40;
        $[93] = t41;
        $[94] = t42;
        $[95] = t43;
        $[96] = t44;
        $[97] = t45;
        $[98] = t47;
        $[99] = t49;
        $[100] = t50;
    } else {
        t50 = $[100];
    }
    return t50;
}
_s(Axes, "6IJMYK8+MXZFwT7izzQ7Jqot7FY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Axes;
var _c;
__turbopack_context__.k.register(_c, "Axes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/camera-controls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraControls",
    ()=>CameraControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DEFAULT_CAMERA_X = 12;
const DEFAULT_CAMERA_Y = 8;
const DEFAULT_CAMERA_Z = 12;
function CameraControls(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "d9837930de7542a6dd36f2769d024e8171487f5badcbc97d8ec50e0230d516a8") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9837930de7542a6dd36f2769d024e8171487f5badcbc97d8ec50e0230d516a8";
    }
    const { cameraPosition: t1, autoRotate: t2 } = t0;
    let t3;
    if ($[1] !== t1) {
        t3 = t1 === undefined ? [
            DEFAULT_CAMERA_X,
            DEFAULT_CAMERA_Y,
            DEFAULT_CAMERA_Z
        ] : t1;
        $[1] = t1;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const cameraPosition = t3;
    const autoRotate = t2 === undefined ? true : t2;
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { invalidate, performance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    let t4;
    if ($[3] !== autoRotate || $[4] !== invalidate || $[5] !== performance) {
        t4 = ()=>{
            if (autoRotate && controlsRef.current) {
                performance.regress();
                controlsRef.current.update();
                invalidate();
            }
        };
        $[3] = autoRotate;
        $[4] = invalidate;
        $[5] = performance;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t4);
    let t5;
    if ($[7] !== invalidate || $[8] !== performance) {
        t5 = ()=>{
            performance.regress();
            invalidate();
        };
        $[7] = invalidate;
        $[8] = performance;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleChange = t5;
    let t6;
    if ($[10] !== cameraPosition) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
            fov: 50,
            makeDefault: true,
            position: cameraPosition
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/camera-controls.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[10] = cameraPosition;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== autoRotate || $[13] !== handleChange) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
            autoRotate: autoRotate,
            autoRotateSpeed: 0.5,
            dampingFactor: 0.05,
            enableDamping: true,
            enableZoom: true,
            makeDefault: true,
            maxDistance: 100,
            minDistance: 1,
            onChange: handleChange,
            ref: controlsRef,
            screenSpacePanning: true,
            zoomSpeed: 1.25
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/camera-controls.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[12] = autoRotate;
        $[13] = handleChange;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t6,
                t7
            ]
        }, void 0, true);
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s(CameraControls, "e4B3qir31P6UbBX4GioYsFD+RQY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CameraControls;
var _c;
__turbopack_context__.k.register(_c, "CameraControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreeCanvas",
    ()=>ThreeCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$AdaptiveDpr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/AdaptiveDpr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FrownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/frown.js [app-client] (ecmascript) <export default as FrownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-error-boundary/dist/react-error-boundary.development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/icons.tsx [app-client] (ecmascript)");
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
function ErrorFallback(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "b7fc36f19bffd88c4c73845589ee6a8ff1c03c17dab8f3c93b853796a35151b0") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b7fc36f19bffd88c4c73845589ee6a8ff1c03c17dab8f3c93b853796a35151b0";
    }
    const { error, resetErrorBoundary } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Error");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-bold font-mono text-2xl text-primary",
            children: "5XX"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t) {
        t2 = t("title");
        $[2] = t;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-mono font-semibold tracking-tight",
            children: t2
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== error.message) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto max-w-md text-muted-foreground text-sm",
            children: error.message
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[6] = error.message;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t) {
        t6 = t("retry");
        $[11] = t;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== resetErrorBoundary || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: resetErrorBoundary,
            size: "sm",
            variant: "secondary",
            children: t6
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[13] = resetErrorBoundary;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "secondary",
            size: "sm"
        }));
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t) {
        t9 = t("report");
        $[17] = t;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t) {
        t10 = t("report");
        $[19] = t;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: t8,
            href: "https://github.com/nakafaai/nakafa.com/issues",
            rel: "noopener noreferrer",
            target: "_blank",
            title: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t9;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid w-fit grid-cols-2 gap-2",
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t7;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12 || $[28] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full flex-col items-center justify-center p-4 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 text-center",
                children: [
                    t1,
                    t5,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/three/canvas.tsx",
                lineNumber: 129,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[27] = t12;
        $[28] = t5;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    return t13;
}
_s(ErrorFallback, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = ErrorFallback;
function ThreeCanvasComponent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "b7fc36f19bffd88c4c73845589ee6a8ff1c03c17dab8f3c93b853796a35151b0") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b7fc36f19bffd88c4c73845589ee6a8ff1c03c17dab8f3c93b853796a35151b0";
    }
    let children;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ children, frameloop: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
    }
    const frameloop = t1 === undefined ? "demand" : t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FrownIcon$3e$__["FrownIcon"], {
                "aria-hidden": "true",
                className: "size-6 shrink-0"
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/canvas.tsx",
                lineNumber: 167,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            antialias: true,
            powerPreference: "high-performance",
            alpha: true
        };
        t4 = {
            min: 0.8,
            max: 1,
            debounce: 100
        };
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$AdaptiveDpr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdaptiveDpr"], {}, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== children || $[10] !== frameloop || $[11] !== props) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
            fallbackRender: _temp,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                fallback: t2,
                frameloop: frameloop,
                gl: t3,
                performance: t4,
                shadows: true,
                ...props,
                children: [
                    t5,
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/three/canvas.tsx",
                lineNumber: 200,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = frameloop;
        $[11] = props;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c1 = ThreeCanvasComponent;
function _temp(t0) {
    const { error, resetErrorBoundary } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorFallback, {
        error: error,
        resetErrorBoundary: resetErrorBoundary
    }, void 0, false, {
        fileName: "[project]/packages/design-system/components/three/canvas.tsx",
        lineNumber: 215,
        columnNumber: 10
    }, this);
}
const ThreeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>Promise.resolve(ThreeCanvasComponent), {
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerIcon"], {
                "aria-hidden": "true",
                className: "size-6 shrink-0"
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/canvas.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/canvas.tsx",
            lineNumber: 219,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = ThreeCanvas;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ErrorFallback");
__turbopack_context__.k.register(_c1, "ThreeCanvasComponent");
__turbopack_context__.k.register(_c2, "ThreeCanvas$dynamic");
__turbopack_context__.k.register(_c3, "ThreeCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/origin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Origin",
    ()=>Origin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)");
;
;
;
const SPHERE_GEOMETRY_SEGMENTS = 16;
function Origin(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "c70a96495e82755b665d0f7866874b4e836e3b5840efd4f8301dff7fd0799e12") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c70a96495e82755b665d0f7866874b4e836e3b5840efd4f8301dff7fd0799e12";
    }
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ size: t1, color: t2, ...props } = t0);
        $[1] = t0;
        $[2] = props;
        $[3] = t1;
        $[4] = t2;
    } else {
        props = $[2];
        t1 = $[3];
        t2 = $[4];
    }
    const size = t1 === undefined ? 0.2 : t1;
    const color = t2 === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN_COLOR"].LIGHT : t2;
    let t3;
    if ($[5] !== size) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
            args: [
                size,
                SPHERE_GEOMETRY_SEGMENTS,
                SPHERE_GEOMETRY_SEGMENTS
            ]
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/origin.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[5] = size;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== color) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
            color: color
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/origin.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[7] = color;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== props || $[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ...props,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/origin.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[9] = props;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c = Origin;
var _c;
__turbopack_context__.k.register(_c, "Origin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/coordinate-system.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoordinateSystem",
    ()=>CoordinateSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/GizmoHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/GizmoViewport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$2x2$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid2X2XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-2x2-x.js [app-client] (ecmascript) <export default as Grid2X2XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$2x2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid2x2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-2x2.js [app-client] (ecmascript) <export default as Grid2x2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as PauseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as PlayIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$axes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/axes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$camera$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/camera-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/canvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$origin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/origin.tsx [app-client] (ecmascript)");
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
;
const GIZMO_MARGIN = 56;
const SCENE_READY_DELAY = 100;
const CAMERA_POSITION_X = 12;
const CAMERA_POSITION_Y = 8;
const CAMERA_POSITION_Z = 12;
function CoordinateSystem(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(103);
    if ($[0] !== "73ec3d6cfd7472b78f7731f5b2bf2131ca6abadb0cbcdd283453754fc2821035") {
        for(let $i = 0; $i < 103; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "73ec3d6cfd7472b78f7731f5b2bf2131ca6abadb0cbcdd283453754fc2821035";
    }
    const { showGrid: t1, showAxes: t2, showZAxis: t3, showOrigin: t4, showLabels: t5, showGizmo: t6, gridSize: t7, gridDivisions: t8, size: t9, backgroundColor: t10, cameraPosition: t11, font: t12, children, className } = t0;
    const initialShowGrid = t1 === undefined ? true : t1;
    const showAxes = t2 === undefined ? true : t2;
    const showZAxis = t3 === undefined ? true : t3;
    const showOrigin = t4 === undefined ? true : t4;
    const showLabels = t5 === undefined ? true : t5;
    const showGizmo = t6 === undefined ? true : t6;
    const gridSize = t7 === undefined ? 15 : t7;
    const gridDivisions = t8 === undefined ? 15 : t8;
    const size = t9 === undefined ? 15 : t9;
    const backgroundColor = t10 === undefined ? "transparent" : t10;
    let t13;
    if ($[1] !== t11) {
        t13 = t11 === undefined ? [
            CAMERA_POSITION_X,
            CAMERA_POSITION_Y,
            CAMERA_POSITION_Z
        ] : t11;
        $[1] = t11;
        $[2] = t13;
    } else {
        t13 = $[2];
    }
    const cameraPosition = t13;
    const font = t12 === undefined ? "mono" : t12;
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialShowGrid);
    const [play, setPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sceneReady, setSceneReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t14;
    bb0: switch(resolvedTheme){
        case "dark":
            {
                let t15;
                if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
                    t15 = {
                        main: "#404040",
                        secondary: "#262626"
                    };
                    $[3] = t15;
                } else {
                    t15 = $[3];
                }
                t14 = t15;
                break bb0;
            }
        default:
            {
                let t15;
                if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
                    t15 = {
                        main: "#d4d4d4",
                        secondary: "#e5e5e5"
                    };
                    $[4] = t15;
                } else {
                    t15 = $[4];
                }
                t14 = t15;
            }
    }
    const gridColors = t14;
    const originColor = resolvedTheme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN_COLOR"].LIGHT : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN_COLOR"].DARK;
    let t15;
    if ($[5] !== showGrid) {
        t15 = ()=>{
            setShowGrid(!showGrid);
        };
        $[5] = showGrid;
        $[6] = t15;
    } else {
        t15 = $[6];
    }
    const handleGridToggle = t15;
    let t16;
    if ($[7] !== play) {
        t16 = ()=>{
            setPlay(!play);
        };
        $[7] = play;
        $[8] = t16;
    } else {
        t16 = $[8];
    }
    const handlePlayToggle = t16;
    let t17;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ()=>{
            setIsDragging(true);
        };
        $[9] = t17;
    } else {
        t17 = $[9];
    }
    const handlePointerDown = t17;
    let t18;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ()=>{
            setIsDragging(false);
        };
        $[10] = t18;
    } else {
        t18 = $[10];
    }
    const handlePointerUp = t18;
    const t19 = isDragging ? "cursor-grabbing" : "cursor-grab";
    let t20;
    if ($[11] !== className || $[12] !== t19) {
        t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative grid aspect-square overflow-hidden rounded-md sm:aspect-[1.43/1]", t19, className);
        $[11] = className;
        $[12] = t19;
        $[13] = t20;
    } else {
        t20 = $[13];
    }
    let t21;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ()=>setTimeout(()=>setSceneReady(true), SCENE_READY_DELAY);
        $[14] = t21;
    } else {
        t21 = $[14];
    }
    let t22;
    if ($[15] !== backgroundColor) {
        t22 = {
            background: backgroundColor
        };
        $[15] = backgroundColor;
        $[16] = t22;
    } else {
        t22 = $[16];
    }
    let t23;
    if ($[17] !== cameraPosition || $[18] !== play) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$camera$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraControls"], {
            autoRotate: play,
            cameraPosition: cameraPosition
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[17] = cameraPosition;
        $[18] = play;
        $[19] = t23;
    } else {
        t23 = $[19];
    }
    let t24;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
            intensity: 0.5
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[20] = t24;
    } else {
        t24 = $[20];
    }
    let t25;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
            castShadow: true,
            intensity: 1,
            position: [
                10,
                10,
                10
            ]
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[21] = t25;
    } else {
        t25 = $[21];
    }
    let t26;
    if ($[22] !== font || $[23] !== showAxes || $[24] !== showLabels || $[25] !== showZAxis || $[26] !== size) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$axes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axes"], {
            font: font,
            showLabels: showLabels,
            showZAxis: showZAxis,
            size: size,
            visible: showAxes
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[22] = font;
        $[23] = showAxes;
        $[24] = showLabels;
        $[25] = showZAxis;
        $[26] = size;
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] !== originColor || $[29] !== showOrigin) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$origin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Origin"], {
            color: originColor,
            visible: showOrigin
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[28] = originColor;
        $[29] = showOrigin;
        $[30] = t27;
    } else {
        t27 = $[30];
    }
    const t28 = gridSize * 2;
    const t29 = gridSize * 2;
    let t30;
    if ($[31] !== gridDivisions || $[32] !== t28 || $[33] !== t29) {
        t30 = [
            t28,
            t29,
            gridDivisions,
            gridDivisions
        ];
        $[31] = gridDivisions;
        $[32] = t28;
        $[33] = t29;
        $[34] = t30;
    } else {
        t30 = $[34];
    }
    let t31;
    let t32;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = [
            0,
            0,
            0
        ];
        t32 = [
            0,
            0,
            0
        ];
        $[35] = t31;
        $[36] = t32;
    } else {
        t31 = $[35];
        t32 = $[36];
    }
    let t33;
    if ($[37] !== gridColors.main || $[38] !== gridColors.secondary || $[39] !== showGrid || $[40] !== t30) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
            args: t30,
            cellColor: gridColors.secondary,
            fadeDistance: 50,
            fadeStrength: 1,
            position: t31,
            rotation: t32,
            sectionColor: gridColors.main,
            visible: showGrid
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[37] = gridColors.main;
        $[38] = gridColors.secondary;
        $[39] = showGrid;
        $[40] = t30;
        $[41] = t33;
    } else {
        t33 = $[41];
    }
    const t34 = gridSize * 2;
    const t35 = gridSize * 2;
    let t36;
    if ($[42] !== gridDivisions || $[43] !== t34 || $[44] !== t35) {
        t36 = [
            t34,
            t35,
            gridDivisions,
            gridDivisions
        ];
        $[42] = gridDivisions;
        $[43] = t34;
        $[44] = t35;
        $[45] = t36;
    } else {
        t36 = $[45];
    }
    let t37;
    let t38;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = [
            0,
            0,
            0
        ];
        t38 = [
            Math.PI / 2,
            0,
            0
        ];
        $[46] = t37;
        $[47] = t38;
    } else {
        t37 = $[46];
        t38 = $[47];
    }
    let t39;
    if ($[48] !== gridColors.main || $[49] !== gridColors.secondary || $[50] !== showGrid || $[51] !== t36) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
            args: t36,
            cellColor: gridColors.secondary,
            fadeDistance: 50,
            fadeStrength: 1,
            position: t37,
            rotation: t38,
            sectionColor: gridColors.main,
            visible: showGrid
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[48] = gridColors.main;
        $[49] = gridColors.secondary;
        $[50] = showGrid;
        $[51] = t36;
        $[52] = t39;
    } else {
        t39 = $[52];
    }
    const t40 = gridSize * 2;
    const t41 = gridSize * 2;
    let t42;
    if ($[53] !== gridDivisions || $[54] !== t40 || $[55] !== t41) {
        t42 = [
            t40,
            t41,
            gridDivisions,
            gridDivisions
        ];
        $[53] = gridDivisions;
        $[54] = t40;
        $[55] = t41;
        $[56] = t42;
    } else {
        t42 = $[56];
    }
    let t43;
    let t44;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = [
            0,
            0,
            0
        ];
        t44 = [
            0,
            0,
            Math.PI / 2
        ];
        $[57] = t43;
        $[58] = t44;
    } else {
        t43 = $[57];
        t44 = $[58];
    }
    let t45;
    if ($[59] !== gridColors.main || $[60] !== gridColors.secondary || $[61] !== showGrid || $[62] !== t42) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
            args: t42,
            cellColor: gridColors.secondary,
            fadeDistance: 50,
            fadeStrength: 1,
            position: t43,
            rotation: t44,
            sectionColor: gridColors.main,
            visible: showGrid
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[59] = gridColors.main;
        $[60] = gridColors.secondary;
        $[61] = showGrid;
        $[62] = t42;
        $[63] = t45;
    } else {
        t45 = $[63];
    }
    let t46;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = [
            GIZMO_MARGIN,
            GIZMO_MARGIN
        ];
        $[64] = t46;
    } else {
        t46 = $[64];
    }
    let t47;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GizmoViewport"], {
            axisColors: [
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].RED,
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GREEN,
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLUE
            ],
            labelColor: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN_COLOR"].LIGHT
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[65] = t47;
    } else {
        t47 = $[65];
    }
    let t48;
    if ($[66] !== showGizmo) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GizmoHelper"], {
            alignment: "bottom-right",
            margin: t46,
            visible: showGizmo,
            children: t47
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[66] = showGizmo;
        $[67] = t48;
    } else {
        t48 = $[67];
    }
    let t49;
    if ($[68] !== children || $[69] !== t23 || $[70] !== t26 || $[71] !== t27 || $[72] !== t33 || $[73] !== t39 || $[74] !== t45 || $[75] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: [
                t23,
                t24,
                t25,
                t26,
                t27,
                t33,
                t39,
                t45,
                children,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[68] = children;
        $[69] = t23;
        $[70] = t26;
        $[71] = t27;
        $[72] = t33;
        $[73] = t39;
        $[74] = t45;
        $[75] = t48;
        $[76] = t49;
    } else {
        t49 = $[76];
    }
    let t50;
    if ($[77] !== t22 || $[78] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreeCanvas"], {
            onCreated: t21,
            style: t22,
            children: t49
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[77] = t22;
        $[78] = t49;
        $[79] = t50;
    } else {
        t50 = $[79];
    }
    const t51 = sceneReady ? "opacity-100" : "opacity-0";
    let t52;
    if ($[80] !== t51) {
        t52 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-3 left-3 flex gap-2 transition-opacity duration-300 ease-out", t51);
        $[80] = t51;
        $[81] = t52;
    } else {
        t52 = $[81];
    }
    let t53;
    if ($[82] !== showGrid) {
        t53 = showGrid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$2x2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid2x2Icon$3e$__["Grid2x2Icon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 378,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$2x2$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid2X2XIcon$3e$__["Grid2X2XIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 378,
            columnNumber: 59
        }, this);
        $[82] = showGrid;
        $[83] = t53;
    } else {
        t53 = $[83];
    }
    let t54;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Toggle Grid"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[84] = t54;
    } else {
        t54 = $[84];
    }
    let t55;
    if ($[85] !== handleGridToggle || $[86] !== t53) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleGridToggle,
            size: "icon",
            variant: "secondary",
            children: [
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[85] = handleGridToggle;
        $[86] = t53;
        $[87] = t55;
    } else {
        t55 = $[87];
    }
    const t56 = play ? "secondary" : "default";
    let t57;
    if ($[88] !== play) {
        t57 = play ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseIcon$3e$__["PauseIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 403,
            columnNumber: 18
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__["PlayIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 403,
            columnNumber: 53
        }, this);
        $[88] = play;
        $[89] = t57;
    } else {
        t57 = $[89];
    }
    let t58;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Toggle Play"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[90] = t58;
    } else {
        t58 = $[90];
    }
    let t59;
    if ($[91] !== handlePlayToggle || $[92] !== t56 || $[93] !== t57) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handlePlayToggle,
            size: "icon",
            variant: t56,
            children: [
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[91] = handlePlayToggle;
        $[92] = t56;
        $[93] = t57;
        $[94] = t59;
    } else {
        t59 = $[94];
    }
    let t60;
    if ($[95] !== t52 || $[96] !== t55 || $[97] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t52,
            children: [
                t55,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[95] = t52;
        $[96] = t55;
        $[97] = t59;
        $[98] = t60;
    } else {
        t60 = $[98];
    }
    let t61;
    if ($[99] !== t20 || $[100] !== t50 || $[101] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            onPointerDown: handlePointerDown,
            onPointerUp: handlePointerUp,
            children: [
                t50,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/coordinate-system.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[99] = t20;
        $[100] = t50;
        $[101] = t60;
        $[102] = t61;
    } else {
        t61 = $[102];
    }
    return t61;
}
_s(CoordinateSystem, "X40bfRVYdAegjPJLuOlTapyyyXg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = CoordinateSystem;
var _c;
__turbopack_context__.k.register(_c, "CoordinateSystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/line-equation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineEquation",
    ()=>LineEquation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Instances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SPHERE_GEOMETRY_RADIUS = 0.1;
const SPHERE_GEOMETRY_SEGMENTS = 8;
const CONE_GEOMETRY_SEGMENTS = 16;
const CONE_GEOMETRY_HEIGHT_SEGMENTS = 1;
const DEFAULT_ARROW_SIZE = 0.5;
const DEFAULT_FONT_SIZE = 0.5;
// Shared geometry cache
let sharedSphereGeometry = null;
const sharedConeGeometries = new Map();
const sharedMaterials = new Map();
function getSharedSphereGeometry() {
    if (!sharedSphereGeometry) {
        // Reduced segments for better performance
        sharedSphereGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](SPHERE_GEOMETRY_RADIUS, SPHERE_GEOMETRY_SEGMENTS, SPHERE_GEOMETRY_SEGMENTS);
    }
    return sharedSphereGeometry;
}
function getSharedConeGeometry(size) {
    const key = "cone-".concat(size);
    if (!sharedConeGeometries.has(key)) {
        // Reduced segments for better performance
        sharedConeGeometries.set(key, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](size / 2, size, CONE_GEOMETRY_SEGMENTS, CONE_GEOMETRY_HEIGHT_SEGMENTS));
    }
    const geometry = sharedConeGeometries.get(key);
    if (!geometry) {
        throw new Error("Cone geometry not found for size: ".concat(size));
    }
    return geometry;
}
function getSharedMaterial(color) {
    const colorKey = color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"] ? color.getHexString() : color;
    if (!sharedMaterials.has(colorKey)) {
        sharedMaterials.set(colorKey, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"] ? color : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color)
        }));
    }
    const material = sharedMaterials.get(colorKey);
    if (!material) {
        throw new Error("Material not found for color: ".concat(colorKey));
    }
    return material;
}
function LineEquation(param) {
    let { points, color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomColor"])([
        "YELLOW",
        "GREEN",
        "BLUE"
    ]), lineWidth = 2, showPoints = true, smooth = true, curvePoints = 30, // Reduced default from 50 for better performance
    labels = [], useMonoFont = true, cone } = param;
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vectorPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LineEquation.useMemo[vectorPoints]": ()=>points.map({
                "LineEquation.useMemo[vectorPoints]": (point)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](point.x, point.y, point.z)
            }["LineEquation.useMemo[vectorPoints]"])
    }["LineEquation.useMemo[vectorPoints]"], [
        points
    ]);
    var _cone_size;
    // Define cone size (default to 0.5 if not provided in cone prop)
    const arrowSize = (_cone_size = cone === null || cone === void 0 ? void 0 : cone.size) !== null && _cone_size !== void 0 ? _cone_size : DEFAULT_ARROW_SIZE;
    // Generate smooth curve points if smooth is true
    const linePoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LineEquation.useMemo[linePoints]": ()=>{
            if (vectorPoints.length < 2) {
                return vectorPoints;
            }
            let basePoints;
            if (smooth) {
                // Use CatmullRomCurve3 for smooth curves
                const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](vectorPoints);
                basePoints = curve.getPoints(curvePoints);
            } else {
                // For non-smooth lines, use the original points directly
                basePoints = [
                    ...vectorPoints
                ];
            }
            // Adjust line end points to account for the cone size to prevent overlap
            if (cone) {
                if ((cone.position === "start" || cone.position === "both") && basePoints.length >= 2) {
                    const startPoint = basePoints[0];
                    const nextPoint = basePoints[1];
                    const direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(nextPoint, startPoint).normalize();
                    basePoints[0] = startPoint.clone().add(direction.multiplyScalar(arrowSize)); // Move start point forward
                }
                if ((cone.position === "end" || cone.position === "both") && basePoints.length >= 2) {
                    const endPoint = basePoints.at(-1);
                    const prevPoint = basePoints.at(-2);
                    // Ensure points exist
                    if (!(endPoint && prevPoint)) {
                        return basePoints; // Return unmodified points if check fails
                    }
                    const direction_0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(endPoint, prevPoint).normalize();
                    // Find the index of the last point to modify it directly
                    const lastIndex = basePoints.length - 1;
                    basePoints[lastIndex] = endPoint.clone().sub(direction_0.multiplyScalar(arrowSize)); // Move end point backward
                }
            }
            return basePoints;
        }
    }["LineEquation.useMemo[linePoints]"], [
        vectorPoints,
        smooth,
        curvePoints,
        cone,
        arrowSize
    ]);
    const fontPath = useMonoFont ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONO_FONT_PATH"] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_PATH"];
    // Use shared geometry and materials
    const pointGeom = getSharedSphereGeometry();
    const pointMat = getSharedMaterial(color);
    // Cone geometry and material (reused from ArrowHelper logic)
    const coneGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LineEquation.useMemo[coneGeometry]": ()=>cone ? getSharedConeGeometry(arrowSize) : null
    }["LineEquation.useMemo[coneGeometry]"], [
        cone,
        arrowSize
    ]);
    const coneMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LineEquation.useMemo[coneMaterial]": ()=>cone ? getSharedMaterial(color) : null
    }["LineEquation.useMemo[coneMaterial]"], [
        cone,
        color
    ]);
    // Calculate cone position and orientation
    const coneData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LineEquation.useMemo[coneData]": ()=>{
            if (!cone || vectorPoints.length < 2) {
                return null;
            }
            const cones = [];
            // Add start cone if position is "start" or "both"
            if (cone.position === "start" || cone.position === "both") {
                const targetPoint = vectorPoints[0];
                const nextPoint_0 = vectorPoints[1];
                // Ensure points exist (should always be true here due to length check)
                if (targetPoint && nextPoint_0) {
                    const direction_1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(nextPoint_0, targetPoint).normalize();
                    // For start cone: position it so its tip is at the original start point
                    // The cone points backwards (opposite to line direction)
                    const conePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(targetPoint).add(direction_1.clone().multiplyScalar(arrowSize / 2));
                    const quaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromUnitVectors(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), direction_1.clone().negate());
                    cones.push({
                        position: conePosition,
                        quaternion
                    });
                }
            }
            // Add end cone if position is "end" or "both"
            if (cone.position === "end" || cone.position === "both") {
                const targetPoint_0 = vectorPoints.at(-1);
                const prevPoint_0 = vectorPoints.at(-2);
                // Ensure both points exist before proceeding
                if (targetPoint_0 && prevPoint_0) {
                    const direction_2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(targetPoint_0, prevPoint_0).normalize();
                    const conePosition_0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(targetPoint_0).sub(direction_2.clone().multiplyScalar(arrowSize / 2));
                    const quaternion_0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromUnitVectors(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), direction_2);
                    cones.push({
                        position: conePosition_0,
                        quaternion: quaternion_0
                    });
                }
            }
            return cones.length > 0 ? cones : null;
        }
    }["LineEquation.useMemo[coneData]"], [
        cone,
        vectorPoints,
        arrowSize
    ]);
    // Enable frustum culling for the entire group
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "LineEquation.useFrame": ()=>{
            if (groupRef.current) {
                groupRef.current.frustumCulled = true;
            }
        }
    }["LineEquation.useFrame"]);
    // Pre-calculate label data to avoid recreating in render
    const labelData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LineEquation.useMemo[labelData]": ()=>labels.map({
                "LineEquation.useMemo[labelData]": (label, idx)=>{
                    const mid = Math.floor(vectorPoints.length / 2);
                    var _label_at;
                    const index = (_label_at = label.at) !== null && _label_at !== void 0 ? _label_at : mid;
                    const base = vectorPoints[index];
                    if (!base) {
                        return null;
                    }
                    const [ox = 0, oy = 0, oz = 0] = label.offset || [
                        0,
                        0,
                        0
                    ];
                    const pos = [
                        base.x + ox,
                        base.y + oy,
                        base.z + oz
                    ];
                    var _label_color, _label_fontSize;
                    return {
                        key: "label-".concat(idx),
                        position: pos,
                        color: (_label_color = label.color) !== null && _label_color !== void 0 ? _label_color : color,
                        fontSize: (_label_fontSize = label.fontSize) !== null && _label_fontSize !== void 0 ? _label_fontSize : DEFAULT_FONT_SIZE,
                        text: label.text
                    };
                }
            }["LineEquation.useMemo[labelData]"]).filter(Boolean)
    }["LineEquation.useMemo[labelData]"], [
        labels,
        vectorPoints,
        color
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                color: color,
                frustumCulled: true,
                lineWidth: lineWidth,
                points: linePoints
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/line-equation.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            coneData && coneGeometry && coneMaterial && coneData.map((data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    frustumCulled: true,
                    geometry: coneGeometry,
                    material: coneMaterial,
                    position: data.position,
                    quaternion: data.quaternion
                }, "cone-".concat(data.position.x, "-").concat(data.position.y, "-").concat(data.position.z), false, {
                    fileName: "[project]/packages/design-system/components/three/line-equation.tsx",
                    lineNumber: 192,
                    columnNumber: 73
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Instances"], {
                count: vectorPoints.length,
                frustumCulled: true,
                geometry: pointGeom,
                material: pointMat,
                visible: showPoints,
                children: vectorPoints.map((v, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Instance"], {
                        position: [
                            v.x,
                            v.y,
                            v.z
                        ]
                    }, "point-".concat(index_0, "-").concat(v.x, "-").concat(v.y, "-").concat(v.z), false, {
                        fileName: "[project]/packages/design-system/components/three/line-equation.tsx",
                        lineNumber: 196,
                        columnNumber: 43
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/line-equation.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            labelData.map((data_0)=>{
                if (!data_0) {
                    return null;
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    anchorX: "center",
                    anchorY: "middle",
                    color: data_0.color,
                    font: fontPath,
                    fontSize: data_0.fontSize,
                    frustumCulled: true,
                    position: data_0.position,
                    children: data_0.text
                }, data_0.key, false, {
                    fileName: "[project]/packages/design-system/components/three/line-equation.tsx",
                    lineNumber: 204,
                    columnNumber: 14
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/packages/design-system/components/three/line-equation.tsx",
        lineNumber: 187,
        columnNumber: 10
    }, this);
}
_s(LineEquation, "GujETaYHHhJPF2hf8TSOEuqOpCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = LineEquation;
var _c;
__turbopack_context__.k.register(_c, "LineEquation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/lib/device.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMobileDevice",
    ()=>isMobileDevice
]);
const MOBILE_REGEX = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
function isMobileDevice() {
    return MOBILE_REGEX.test(navigator.userAgent);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/inequality.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inequality",
    ()=>Inequality
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$device$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/device.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)");
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
// Performance tuning constants
const MIN_CORES_FOR_HIGH_RES = 8;
const MIN_CORES_FOR_MEDIUM_RES = 4;
const MAX_RES_MOBILE_LOW_CORE = 50;
const MAX_RES_MEDIUM_CORE = 100;
// Default geometry values
const DEFAULT_RANGE_MIN = -5;
const DEFAULT_RANGE_MAX = 5;
// Geometry calculation constants
const COMPONENTS_PER_VERTEX = 3;
const VERTICES_PER_CELL = 36;
const INDICES_PER_CELL = 36;
const LAST_VERTEX_OFFSET_IN_QUAD = 3;
// 2D inequality cell check thresholds
const SATISFIED_CORNERS_THRESHOLD_HIGH = 3;
const SATISFIED_CORNERS_THRESHOLD_LOW = 2;
const RESOLUTION_THRESHOLD_FOR_CORNERS = 80;
// Boundary line constants
const MAX_LINE_RESOLUTION = 50;
const EPSILON = 1e-10;
const VERTICAL_CONNECTOR_DENSITY_FACTOR = 4;
// Label constants
const DEFAULT_LABEL_FONT_SIZE = 0.5;
// Performance optimization: Adaptive resolution based on device capabilities
function getAdaptiveResolution(requestedResolution) {
    // Check device capabilities
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$device$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobileDevice"])();
    const cores = navigator.hardwareConcurrency || MIN_CORES_FOR_MEDIUM_RES;
    if (isMobile || cores < MIN_CORES_FOR_MEDIUM_RES) {
        return Math.min(requestedResolution, MAX_RES_MOBILE_LOW_CORE);
    }
    if (cores >= MIN_CORES_FOR_HIGH_RES) {
        return requestedResolution;
    }
    return Math.min(requestedResolution, MAX_RES_MEDIUM_CORE);
}
function Inequality(param) {
    let { boundaryFunction, is2D = false, boundaryLine2D, xRange = [
        DEFAULT_RANGE_MIN,
        DEFAULT_RANGE_MAX
    ], yRange = [
        DEFAULT_RANGE_MIN,
        DEFAULT_RANGE_MAX
    ], zRange = [
        DEFAULT_RANGE_MIN,
        DEFAULT_RANGE_MAX
    ], resolution = 200, color = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLUE, boundaryColor, opacity = 0.1, boundaryLineWidth = 2, showBoundary = true, label, useMonoFont = true } = param;
    _s();
    const fontPath = useMonoFont ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONO_FONT_PATH"] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_PATH"];
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Adaptive resolution for performance
    const adaptiveResolution = getAdaptiveResolution(resolution);
    // Create optimized buffer geometry for the inequality region
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: This is a complex function, but it's necessary for the inequality visualization
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Inequality.useMemo[geometry]": ()=>{
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const vertices = new Float32Array(adaptiveResolution * adaptiveResolution * VERTICES_PER_CELL * COMPONENTS_PER_VERTEX); // Pre-allocate
            const indices = new Uint32Array(adaptiveResolution * adaptiveResolution * INDICES_PER_CELL); // Pre-allocate
            let vertexIndex = 0;
            let indexOffset = 0;
            // Define the step size based on resolution
            const xStep = (xRange[1] - xRange[0]) / adaptiveResolution;
            const yStep = (yRange[1] - yRange[0]) / adaptiveResolution;
            // Helper function to add a quad (two triangles) to the geometry - optimized
            const addQuad = {
                "Inequality.useMemo[geometry].addQuad": (p1, p2, p3, p4)=>{
                    const index = vertexIndex / COMPONENTS_PER_VERTEX;
                    // Add vertices directly to array
                    vertices[vertexIndex++] = p1[0];
                    vertices[vertexIndex++] = p1[1];
                    vertices[vertexIndex++] = p1[2];
                    vertices[vertexIndex++] = p2[0];
                    vertices[vertexIndex++] = p2[1];
                    vertices[vertexIndex++] = p2[2];
                    vertices[vertexIndex++] = p3[0];
                    vertices[vertexIndex++] = p3[1];
                    vertices[vertexIndex++] = p3[2];
                    vertices[vertexIndex++] = p4[0];
                    vertices[vertexIndex++] = p4[1];
                    vertices[vertexIndex++] = p4[2];
                    // Add indices for two triangles
                    indices[indexOffset++] = index;
                    indices[indexOffset++] = index + 1;
                    indices[indexOffset++] = index + 2;
                    indices[indexOffset++] = index;
                    indices[indexOffset++] = index + 2;
                    indices[indexOffset++] = index + LAST_VERTEX_OFFSET_IN_QUAD;
                }
            }["Inequality.useMemo[geometry].addQuad"];
            // Helper function to create all faces of a complete cell - optimized
            const addCompleteCell = {
                "Inequality.useMemo[geometry].addCompleteCell": (param)=>{
                    let { x1, y1, x2, y2, z1, z2 } = param;
                    // Only add visible faces for performance (basic culling)
                    // Bottom face (at minimum z)
                    addQuad([
                        x1,
                        y1,
                        z1
                    ], [
                        x2,
                        y1,
                        z1
                    ], [
                        x2,
                        y2,
                        z1
                    ], [
                        x1,
                        y2,
                        z1
                    ]);
                    // Top face (at maximum z)
                    addQuad([
                        x1,
                        y1,
                        z2
                    ], [
                        x1,
                        y2,
                        z2
                    ], [
                        x2,
                        y2,
                        z2
                    ], [
                        x2,
                        y1,
                        z2
                    ]);
                    // Side faces - only if on boundary
                    if (Math.abs(x1 - xRange[0]) < xStep) {
                        // Left face
                        addQuad([
                            x1,
                            y1,
                            z1
                        ], [
                            x1,
                            y1,
                            z2
                        ], [
                            x1,
                            y2,
                            z2
                        ], [
                            x1,
                            y2,
                            z1
                        ]);
                    }
                    if (Math.abs(x2 - xRange[1]) < xStep) {
                        // Right face
                        addQuad([
                            x2,
                            y1,
                            z1
                        ], [
                            x2,
                            y2,
                            z1
                        ], [
                            x2,
                            y2,
                            z2
                        ], [
                            x2,
                            y1,
                            z2
                        ]);
                    }
                    if (Math.abs(y1 - yRange[0]) < yStep) {
                        // Front face
                        addQuad([
                            x1,
                            y1,
                            z1
                        ], [
                            x2,
                            y1,
                            z1
                        ], [
                            x2,
                            y1,
                            z2
                        ], [
                            x1,
                            y1,
                            z2
                        ]);
                    }
                    if (Math.abs(y2 - yRange[1]) < yStep) {
                        // Back face
                        addQuad([
                            x1,
                            y2,
                            z1
                        ], [
                            x1,
                            y2,
                            z2
                        ], [
                            x2,
                            y2,
                            z2
                        ], [
                            x2,
                            y2,
                            z1
                        ]);
                    }
                }
            }["Inequality.useMemo[geometry].addCompleteCell"];
            if (is2D && boundaryLine2D) {
                // Handle 2D inequality (like x + y <= 10) visualized as extruded along z-axis
                const [a, b, c] = boundaryLine2D;
                // Optimized grid traversal with early termination
                for(let ix = 0; ix < adaptiveResolution; ix++){
                    for(let iy = 0; iy < adaptiveResolution; iy++){
                        const x1_0 = xRange[0] + ix * xStep;
                        const x2_0 = xRange[0] + (ix + 1) * xStep;
                        const y1_0 = yRange[0] + iy * yStep;
                        const y2_0 = yRange[0] + (iy + 1) * yStep;
                        // Quick check using center point for better performance
                        const centerX = (x1_0 + x2_0) / 2;
                        const centerY = (y1_0 + y2_0) / 2;
                        const centerValue = a * centerX + b * centerY + c;
                        // If center is far from boundary, we can make a quick decision
                        const cellDiagonal = Math.sqrt((x2_0 - x1_0) * (x2_0 - x1_0) + (y2_0 - y1_0) * (y2_0 - y1_0));
                        const distanceToLine = Math.abs(centerValue) / Math.sqrt(a * a + b * b);
                        if (centerValue <= 0 && distanceToLine > cellDiagonal) {
                            // Fully inside - add cell
                            addCompleteCell({
                                x1: x1_0,
                                y1: y1_0,
                                x2: x2_0,
                                y2: y2_0,
                                z1: zRange[0],
                                z2: zRange[1]
                            });
                        } else if (centerValue <= 0 || distanceToLine < cellDiagonal * 2) {
                            // Near boundary - check corners
                            const corner1Satisfies = a * x1_0 + b * y1_0 + c <= 0;
                            const corner2Satisfies = a * x2_0 + b * y1_0 + c <= 0;
                            const corner3Satisfies = a * x2_0 + b * y2_0 + c <= 0;
                            const corner4Satisfies = a * x1_0 + b * y2_0 + c <= 0;
                            const satisfiedCorners = (corner1Satisfies ? 1 : 0) + (corner2Satisfies ? 1 : 0) + (corner3Satisfies ? 1 : 0) + (corner4Satisfies ? 1 : 0);
                            if (satisfiedCorners >= SATISFIED_CORNERS_THRESHOLD_HIGH || satisfiedCorners >= SATISFIED_CORNERS_THRESHOLD_LOW && adaptiveResolution < RESOLUTION_THRESHOLD_FOR_CORNERS) {
                                addCompleteCell({
                                    x1: x1_0,
                                    y1: y1_0,
                                    x2: x2_0,
                                    y2: y2_0,
                                    z1: zRange[0],
                                    z2: zRange[1]
                                });
                            }
                        }
                    }
                }
            } else if (boundaryFunction) {
                // Handle 3D inequality (like z > f(x,y)) - simplified for performance
                for(let ix_0 = 0; ix_0 < adaptiveResolution; ix_0 += 2){
                    // Skip every other cell for performance
                    for(let iy_0 = 0; iy_0 < adaptiveResolution; iy_0 += 2){
                        const x1_1 = xRange[0] + ix_0 * xStep;
                        const x2_1 = xRange[0] + (ix_0 + 2) * xStep;
                        const y1_1 = yRange[0] + iy_0 * yStep;
                        const y2_1 = yRange[0] + (iy_0 + 2) * yStep;
                        // Sample the center point
                        const centerX_0 = (x1_1 + x2_1) / 2;
                        const centerY_0 = (y1_1 + y2_1) / 2;
                        const zBoundary = boundaryFunction(centerX_0, centerY_0);
                        if (zBoundary >= zRange[0] && zBoundary <= zRange[1]) {
                            // Create a quad at the boundary
                            addQuad([
                                x1_1,
                                y1_1,
                                zBoundary
                            ], [
                                x2_1,
                                y1_1,
                                zBoundary
                            ], [
                                x2_1,
                                y2_1,
                                zBoundary
                            ], [
                                x1_1,
                                y2_1,
                                zBoundary
                            ]);
                        }
                    }
                }
            }
            // Trim arrays to actual size used
            const finalVertices = new Float32Array(vertices.buffer, 0, vertexIndex);
            const finalIndices = new Uint32Array(indices.buffer, 0, indexOffset);
            geo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](finalVertices, COMPONENTS_PER_VERTEX));
            geo.setIndex(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](finalIndices, 1));
            geo.computeVertexNormals();
            return geo;
        }
    }["Inequality.useMemo[geometry]"], [
        is2D,
        boundaryLine2D,
        boundaryFunction,
        xRange,
        yRange,
        zRange,
        adaptiveResolution
    ]);
    // Material for the inequality region with performance optimizations
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Inequality.useMemo[material]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"] ? color : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color),
                transparent: true,
                opacity,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                depthWrite: false // Better transparency handling
            });
        }
    }["Inequality.useMemo[material]"], [
        color,
        opacity
    ]);
    // Generate boundary lines for rendering - optimized
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: This is a complex function, but it's necessary for the inequality visualization
    const boundarySegmentsGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Inequality.useMemo[boundarySegmentsGeometry]": ()=>{
            if (!((boundaryFunction || boundaryLine2D) && showBoundary)) {
                return;
            }
            const vertices_0 = [];
            const lineResolution = Math.min(adaptiveResolution, MAX_LINE_RESOLUTION); // Lower resolution for lines
            const xStep_0 = (xRange[1] - xRange[0]) / lineResolution;
            const yStep_0 = (yRange[1] - yRange[0]) / lineResolution;
            if (is2D && boundaryLine2D) {
                // For 2D inequalities, create a vertical boundary plane
                const [a_0, b_0, c_0] = boundaryLine2D;
                // Create boundary lines more efficiently
                if (Math.abs(b_0) > EPSILON) {
                    // Express y as a function of x
                    for(let ix_1 = 0; ix_1 <= lineResolution; ix_1++){
                        const x = xRange[0] + ix_1 * xStep_0;
                        const y = (-a_0 * x - c_0) / b_0;
                        if (y >= yRange[0] && y <= yRange[1] && ix_1 > 0) {
                            const prevX = xRange[0] + (ix_1 - 1) * xStep_0;
                            const prevY = (-a_0 * prevX - c_0) / b_0;
                            if (prevY >= yRange[0] && prevY <= yRange[1]) {
                                // Bottom edge
                                vertices_0.push(prevX, prevY, zRange[0], x, y, zRange[0]);
                                // Top edge
                                vertices_0.push(prevX, prevY, zRange[1], x, y, zRange[1]);
                            }
                        }
                    }
                    // Add vertical connectors
                    for(let i = 0; i <= lineResolution; i += Math.floor(lineResolution / VERTICAL_CONNECTOR_DENSITY_FACTOR)){
                        const x_0 = xRange[0] + i * xStep_0;
                        const y_0 = (-a_0 * x_0 - c_0) / b_0;
                        if (y_0 >= yRange[0] && y_0 <= yRange[1]) {
                            vertices_0.push(x_0, y_0, zRange[0], x_0, y_0, zRange[1]);
                        }
                    }
                } else if (Math.abs(a_0) > EPSILON) {
                    // Express x as a function of y
                    for(let iy_1 = 0; iy_1 <= lineResolution; iy_1++){
                        const y_1 = yRange[0] + iy_1 * yStep_0;
                        const x_1 = (-b_0 * y_1 - c_0) / a_0;
                        if (x_1 >= xRange[0] && x_1 <= xRange[1] && iy_1 > 0) {
                            const prevY_0 = yRange[0] + (iy_1 - 1) * yStep_0;
                            const prevX_0 = (-b_0 * prevY_0 - c_0) / a_0;
                            if (prevX_0 >= xRange[0] && prevX_0 <= xRange[1]) {
                                vertices_0.push(prevX_0, prevY_0, zRange[0], x_1, y_1, zRange[0]);
                                vertices_0.push(prevX_0, prevY_0, zRange[1], x_1, y_1, zRange[1]);
                            }
                        }
                    }
                }
            } else if (boundaryFunction) {
                // For 3D inequalities - create a wireframe grid
                const gridStep = Math.floor(lineResolution / 10);
                // Lines along x-axis
                for(let iy_2 = 0; iy_2 <= lineResolution; iy_2 += gridStep){
                    const y_2 = yRange[0] + iy_2 * yStep_0;
                    for(let ix_2 = 1; ix_2 <= lineResolution; ix_2++){
                        const x_2 = xRange[0] + ix_2 * xStep_0;
                        const prevX_1 = xRange[0] + (ix_2 - 1) * xStep_0;
                        const z = boundaryFunction(x_2, y_2);
                        const prevZ = boundaryFunction(prevX_1, y_2);
                        if (z >= zRange[0] && z <= zRange[1] && prevZ >= zRange[0] && prevZ <= zRange[1]) {
                            vertices_0.push(prevX_1, y_2, prevZ, x_2, y_2, z);
                        }
                    }
                }
                // Lines along y-axis
                for(let ix_3 = 0; ix_3 <= lineResolution; ix_3 += gridStep){
                    const x_3 = xRange[0] + ix_3 * xStep_0;
                    for(let iy_3 = 1; iy_3 <= lineResolution; iy_3++){
                        const y_3 = yRange[0] + iy_3 * yStep_0;
                        const prevY_1 = yRange[0] + (iy_3 - 1) * yStep_0;
                        const z_0 = boundaryFunction(x_3, y_3);
                        const prevZ_0 = boundaryFunction(x_3, prevY_1);
                        if (z_0 >= zRange[0] && z_0 <= zRange[1] && prevZ_0 >= zRange[0] && prevZ_0 <= zRange[1]) {
                            vertices_0.push(x_3, prevY_1, prevZ_0, x_3, y_3, z_0);
                        }
                    }
                }
            }
            if (vertices_0.length === 0) {
                return;
            }
            const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geom.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](vertices_0, COMPONENTS_PER_VERTEX));
            return geom;
        }
    }["Inequality.useMemo[boundarySegmentsGeometry]"], [
        showBoundary,
        adaptiveResolution,
        boundaryFunction,
        boundaryLine2D,
        is2D,
        xRange,
        yRange,
        zRange
    ]);
    // Default boundary color is the same as the region color but more opaque
    const finalBoundaryColor = boundaryColor || color;
    // Use frustum culling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Inequality.useFrame": ()=>{
            if (groupRef.current) {
                groupRef.current.frustumCulled = true;
            }
        }
    }["Inequality.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                frustumCulled: true,
                geometry: geometry,
                material: material
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/inequality.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            showBoundary && boundarySegmentsGeometry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                frustumCulled: true,
                geometry: boundarySegmentsGeometry,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                    color: finalBoundaryColor,
                    linewidth: boundaryLineWidth
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/three/inequality.tsx",
                    lineNumber: 350,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/inequality.tsx",
                lineNumber: 349,
                columnNumber: 52
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                anchorX: "center",
                anchorY: "middle",
                color: label.color || finalBoundaryColor,
                font: fontPath,
                fontSize: label.fontSize || DEFAULT_LABEL_FONT_SIZE,
                frustumCulled: true,
                position: label.position,
                children: label.text
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/inequality.tsx",
                lineNumber: 354,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/design-system/components/three/inequality.tsx",
        lineNumber: 344,
        columnNumber: 10
    }, this);
}
_s(Inequality, "leDXXPObCUQ2wDCHcMGB4r1s+J8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Inequality;
var _c;
__turbopack_context__.k.register(_c, "Inequality");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TableChairsAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$intersection$2f$use$2d$intersection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/hooks/esm/use-intersection/use-intersection.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$media$2d$query$2f$use$2d$media$2d$query$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as PauseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as PlayIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2d$reset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TimerResetIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer-reset.js [app-client] (ecmascript) <export default as TimerResetIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
// Constants for animation and layout
const MAX_TABLES_MOBILE = 2;
const MAX_TABLES_DESKTOP = 3;
const ANIMATION_INTERVAL_MS = 2000;
const INITIAL_SIDE_CHAIRS = 2;
const STAGGER_DELAY = 0.01;
const SPEED_HALF = 0.5;
const SPEED_NORMAL = 1;
const SPEED_FAST = 1.5;
const SPEED_VERY_FAST = 2;
const SPEED_VALUES = [
    SPEED_HALF,
    SPEED_NORMAL,
    SPEED_FAST,
    SPEED_VERY_FAST
];
const CHAIR_SIZE = 24;
const Z_INDEX_TABLE = 10;
const Z_INDEX_CHAIR = 20;
function TableChairsAnimation(param) {
    let { labels = {
        title: "Table and Chair Sequence Pattern",
        table: "Table",
        chair: "Chair"
    } } = param;
    _s();
    const [tableCount, setTableCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const deferredPlaying = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(isPlaying);
    const deferredTableCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(tableCount);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$media$2d$query$2f$use$2d$media$2d$query$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 640px)");
    const { ref, entry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$intersection$2f$use$2d$intersection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntersection"])({
        threshold: 0.1
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableChairsAnimation.useEffect": ()=>{
            if (entry) {
                setIsPlaying(entry.isIntersecting);
            }
        }
    }["TableChairsAnimation.useEffect"], [
        entry
    ]);
    const maxTables = isMobile ? MAX_TABLES_MOBILE : MAX_TABLES_DESKTOP;
    // Calculate chair count based on the formula U_n = 2n + 2
    const chairCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableChairsAnimation.useMemo[chairCount]": ()=>2 * deferredTableCount + 2
    }["TableChairsAnimation.useMemo[chairCount]"], [
        deferredTableCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableChairsAnimation.useEffect": ()=>{
            let interval;
            // Stop playing when maximum table count is reached
            if (deferredTableCount >= maxTables) {
                setIsPlaying(false);
                return;
            }
            if (deferredPlaying) {
                interval = setInterval({
                    "TableChairsAnimation.useEffect": ()=>{
                        setTableCount({
                            "TableChairsAnimation.useEffect": (prev)=>{
                                if (prev < maxTables) {
                                    return prev + 1;
                                }
                                return prev;
                            }
                        }["TableChairsAnimation.useEffect"]);
                    }
                }["TableChairsAnimation.useEffect"], ANIMATION_INTERVAL_MS / speed);
            }
            return ({
                "TableChairsAnimation.useEffect": ()=>clearInterval(interval)
            })["TableChairsAnimation.useEffect"];
        }
    }["TableChairsAnimation.useEffect"], [
        deferredPlaying,
        deferredTableCount,
        maxTables,
        speed
    ]);
    const resetAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TableChairsAnimation.useCallback[resetAnimation]": ()=>{
            setTableCount(1);
            setIsPlaying(true);
        }
    }["TableChairsAnimation.useCallback[resetAnimation]"], []);
    const togglePlayPause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TableChairsAnimation.useCallback[togglePlayPause]": ()=>{
            if (!isPlaying && tableCount >= maxTables) {
                // If at max table count and trying to play, restart from beginning
                setTableCount(1);
                setIsPlaying(true);
            } else {
                setIsPlaying(!isPlaying);
            }
        }
    }["TableChairsAnimation.useCallback[togglePlayPause]"], [
        isPlaying,
        tableCount,
        maxTables
    ]);
    // Constants for sizing and spacing
    const tableWidth = 100;
    const tableHeight = 80;
    const tableSpacing = 4; // Gap between tables
    const chairOffset = 8; // Distance of chair from table edge
    // Generate arrangement of tables and chairs
    const arrangement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableChairsAnimation.useMemo[arrangement]": ()=>{
            const tables = [];
            const chairs = [];
            // Calculate total width of all tables
            const totalWidth = deferredTableCount * tableWidth;
            // For single table
            if (deferredTableCount === 1) {
                tables.push({
                    id: 1,
                    x: 0,
                    y: 0,
                    width: tableWidth,
                    height: tableHeight
                });
                // Add 4 chairs around the table (positioned at midpoints of each side)
                chairs.push({
                    id: 1,
                    x: -CHAIR_SIZE - chairOffset,
                    y: tableHeight / 2 - CHAIR_SIZE / 2,
                    side: "left"
                }, {
                    id: 2,
                    x: tableWidth + chairOffset,
                    y: tableHeight / 2 - CHAIR_SIZE / 2,
                    side: "right"
                }, {
                    id: 3,
                    x: tableWidth / 2 - CHAIR_SIZE / 2,
                    y: -CHAIR_SIZE - chairOffset,
                    side: "top"
                }, {
                    id: 4,
                    x: tableWidth / 2 - CHAIR_SIZE / 2,
                    y: tableHeight + chairOffset,
                    side: "bottom"
                });
            } else {
                // For multiple tables
                for(let i = 0; i < deferredTableCount; i++){
                    tables.push({
                        id: i + 1,
                        x: i * (tableWidth + tableSpacing),
                        y: 0,
                        width: tableWidth,
                        height: tableHeight
                    });
                }
                // Add chairs on the left side of the leftmost table
                chairs.push({
                    id: 1,
                    x: -CHAIR_SIZE - chairOffset,
                    // No need to add spacing between tables for the first chair
                    y: tableHeight / 2 - CHAIR_SIZE / 2,
                    side: "left"
                });
                // Add chairs on the right side of the rightmost table
                chairs.push({
                    id: 2,
                    x: totalWidth + chairOffset + (deferredTableCount - 1) * tableSpacing,
                    // Add spacing between tables
                    y: tableHeight / 2 - CHAIR_SIZE / 2,
                    side: "right"
                });
                // Add chairs on the top of each table
                for(let i_0 = 0; i_0 < deferredTableCount; i_0++){
                    chairs.push({
                        id: INITIAL_SIDE_CHAIRS + 1 + i_0,
                        x: i_0 * tableWidth + tableWidth / 2 - CHAIR_SIZE / 2 + i_0 * tableSpacing,
                        // Add spacing between tables
                        y: -CHAIR_SIZE - chairOffset,
                        side: "top"
                    });
                }
                // Add chairs on the bottom of each table
                for(let i_1 = 0; i_1 < deferredTableCount; i_1++){
                    chairs.push({
                        id: INITIAL_SIDE_CHAIRS + 1 + deferredTableCount + i_1,
                        x: i_1 * tableWidth + tableWidth / 2 - CHAIR_SIZE / 2 + i_1 * tableSpacing,
                        // Add spacing between tables
                        y: tableHeight + chairOffset,
                        side: "bottom"
                    });
                }
            }
            return {
                tables,
                chairs
            };
        }
    }["TableChairsAnimation.useMemo[arrangement]"], [
        deferredTableCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: labels.title
                    }, void 0, false, {
                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: [
                            deferredTableCount,
                            " ",
                            labels.table,
                            " & ",
                            chairCount,
                            " ",
                            labels.chair
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-square w-full overflow-hidden rounded-lg border border-cyan-100 bg-cyan-50 p-4 sm:aspect-video dark:border-cyan-900 dark:bg-cyan-950",
                    ref: ref,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full flex-col items-center justify-center gap-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex w-full items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                style: {
                                    width: deferredTableCount * tableWidth + (deferredTableCount - 1) * tableSpacing,
                                    height: tableHeight
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "popLayout",
                                            children: arrangement.tables.map((table)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    className: "absolute rounded-md bg-teal-300 shadow-sm transition-colors hover:bg-teal-400 dark:bg-teal-500",
                                                    exit: {
                                                        opacity: 0,
                                                        scale: 0
                                                    },
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0
                                                    },
                                                    layout: true,
                                                    style: {
                                                        left: table.x,
                                                        top: table.y,
                                                        width: table.width,
                                                        height: table.height,
                                                        zIndex: Z_INDEX_TABLE
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 30,
                                                        delay: (table.id - 1) * STAGGER_DELAY // Stagger effect
                                                    }
                                                }, "table-".concat(table.id), false, {
                                                    fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 54
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "popLayout",
                                            children: arrangement.chairs.map((chair)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    className: "absolute rounded-full bg-cyan-300 shadow-sm transition-colors hover:bg-cyan-400 dark:bg-cyan-500",
                                                    exit: {
                                                        opacity: 0,
                                                        scale: 0
                                                    },
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0
                                                    },
                                                    layout: true,
                                                    style: {
                                                        left: chair.x,
                                                        top: chair.y,
                                                        width: CHAIR_SIZE,
                                                        height: CHAIR_SIZE,
                                                        zIndex: Z_INDEX_CHAIR
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 30,
                                                        delay: chair.id * STAGGER_DELAY // Stagger effect
                                                    }
                                                }, "chair-".concat(chair.id), false, {
                                                    fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 54
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "flex flex-col gap-4 px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col items-center justify-between gap-4 px-6 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "aria-label": "Reset",
                                        onClick: resetAnimation,
                                        size: "icon",
                                        variant: "outline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2d$reset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TimerResetIcon$3e$__["TimerResetIcon"], {
                                                className: "size-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "aria-label": isPlaying ? "Pause" : "Play",
                                        onClick: togglePlayPause,
                                        size: "icon",
                                        variant: isPlaying ? "outline" : "default",
                                        children: [
                                            isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseIcon$3e$__["PauseIcon"], {
                                                className: "size-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                                lineNumber: 271,
                                                columnNumber: 28
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__["PlayIcon"], {
                                                className: "size-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                                lineNumber: 271,
                                                columnNumber: 72
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: isPlaying ? "Pause" : "Play"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-2",
                                children: SPEED_VALUES.map((speedValue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "aria-label": "Set speed to ".concat(speedValue, "x"),
                                        onClick: ()=>setSpeed(speedValue),
                                        size: "sm",
                                        variant: speed === speedValue ? "default" : "outline",
                                        children: [
                                            speedValue,
                                            "x"
                                        ]
                                    }, speedValue, true, {
                                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                        lineNumber: 277,
                                        columnNumber: 45
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full border-t px-6 pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2",
                            children: Array.from({
                                length: maxTables
                            }).map((_, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "aria-label": "Set table count to ".concat(i_2 + 1),
                                    onClick: ()=>{
                                        setTableCount(i_2 + 1);
                                        setIsPlaying(false);
                                    },
                                    size: "sm",
                                    variant: tableCount === i_2 + 1 ? "default" : "outline",
                                    children: [
                                        i_2 + 1,
                                        " ",
                                        labels.table
                                    ]
                                }, "table-count-".concat(i_2 + 1), true, {
                                    fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                                    lineNumber: 287,
                                    columnNumber: 30
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/contents/subject/high-school/10/mathematics/sequence-series/sequence-concept/animation-table.tsx",
        lineNumber: 189,
        columnNumber: 10
    }, this);
}
_s(TableChairsAnimation, "++AEklYxpiBaEjgsW5UwfxYsNwQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$media$2d$query$2f$use$2d$media$2d$query$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$intersection$2f$use$2d$intersection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntersection"]
    ];
});
_c = TableChairsAnimation;
var _c;
__turbopack_context__.k.register(_c, "TableChairsAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/contents/bar-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>BarChart,
    "HistogramChart",
    ()=>HistogramChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function HistogramChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "7bfd555279140267579d8a5c4a2f4cb2a914107e152ed16b606c15e7d74924bd") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7bfd555279140267579d8a5c4a2f4cb2a914107e152ed16b606c15e7d74924bd";
    }
    const { title, description, data, chartConfig, yAxisLabel } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "name",
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            textAnchor: "middle"
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== yAxisLabel) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            dataKey: "value",
            label: {
                value: yAxisLabel,
                angle: -90,
                position: "insideLeft",
                style: t6
            },
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[11] = yAxisLabel;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
                lineNumber: 83,
                columnNumber: 33
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "value",
            radius: 0
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t8 = $[13];
        t9 = $[14];
    }
    let t10;
    if ($[15] !== data || $[16] !== t7) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            accessibilityLayer: true,
            barCategoryGap: 0,
            barGap: 0,
            data: data,
            children: [
                t4,
                t5,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[15] = data;
        $[16] = t7;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== chartConfig || $[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                className: "aspect-square",
                config: chartConfig,
                children: t10
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
                lineNumber: 102,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[18] = chartConfig;
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t3,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t3;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    return t12;
}
_c = HistogramChart;
function BarChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "7bfd555279140267579d8a5c4a2f4cb2a914107e152ed16b606c15e7d74924bd") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7bfd555279140267579d8a5c4a2f4cb2a914107e152ed16b606c15e7d74924bd";
    }
    const { title, description, data, chartConfig, yAxisLabel } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 163,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "name",
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            textAnchor: "middle"
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== yAxisLabel) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            dataKey: "value",
            label: {
                value: yAxisLabel,
                angle: -90,
                position: "insideLeft",
                style: t6
            },
            tickLine: false,
            tickMargin: 10
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[11] = yAxisLabel;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                indicator: "line"
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
                lineNumber: 196,
                columnNumber: 33
            }, void 0),
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 196,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "value",
            radius: 8
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 197,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t8 = $[13];
        t9 = $[14];
    }
    let t10;
    if ($[15] !== data || $[16] !== t7) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            accessibilityLayer: true,
            data: data,
            children: [
                t4,
                t5,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[15] = data;
        $[16] = t7;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== chartConfig || $[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                className: "aspect-square",
                config: chartConfig,
                children: t10
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
                lineNumber: 215,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[18] = chartConfig;
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t3,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/bar-chart.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t3;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    return t12;
}
_c1 = BarChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "HistogramChart");
__turbopack_context__.k.register(_c1, "BarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/triangle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Triangle",
    ()=>Triangle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Instances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)");
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
// Pre-calculate common values
const SPHERE_SEGMENTS = 8; // Reduced from 16
const ARC_SEGMENTS = 20; // Reduced from 30
// Angle and Quadrant constants
const DEGREES_IN_HALF_CIRCLE = 180;
const DEGREES_TO_RADIANS = Math.PI / DEGREES_IN_HALF_CIRCLE;
const DEGREES_IN_QUADRANT = 90;
const QUADRANTS_IN_CIRCLE = 4;
// Sizing and scaling constants
const BASE_FONT_SIZE = 0.12;
const FONT_SIZE_SCALE_FACTOR = 0.12;
const BASE_VERTEX_SIZE = 0.05;
const VERTEX_SIZE_SCALE_FACTOR = 0.05;
const ARC_RADIUS_SCALE_FACTOR = 0.2;
const ANGLE_LABEL_DISTANCE_SCALE_FACTOR = 0.3;
const MIN_SCALE_FACTOR = 1;
// Label offset multipliers
const LABEL_OFFSET_ADJACENT_Y = 1.5;
const LABEL_OFFSET_OPPOSITE_X = 4;
const LABEL_OFFSET_HYPOTENUSE_Y = 2;
const ANGLE_LABEL_POSITION_ADJUSTMENT = 0.5;
// Quadrant identifiers
const Q1 = 1;
const Q2 = 2;
const Q3 = 3;
const Q4 = 4;
// Singleton geometry instances for reuse
let sharedSphereGeometry = null;
const sharedMaterials = new Map();
function getSharedSphereGeometry() {
    if (!sharedSphereGeometry) {
        sharedSphereGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, SPHERE_SEGMENTS, SPHERE_SEGMENTS);
    }
    return sharedSphereGeometry;
}
function getSharedMaterial(color) {
    if (!sharedMaterials.has(color)) {
        sharedMaterials.set(color, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color
        }));
    }
    const material = sharedMaterials.get(color);
    if (!material) {
        throw new Error("Material not found for color: ".concat(color));
    }
    return material;
}
function Triangle(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(110);
    if ($[0] !== "cbee875bb554203bf3cadc95a82a3164c0dace71451bfd0d1681676d86436edc") {
        for(let $i = 0; $i < 110; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cbee875bb554203bf3cadc95a82a3164c0dace71451bfd0d1681676d86436edc";
    }
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== t0) {
        ({ angle: t1, size: t2, labels: t3, useMonoFont: t4, ...props } = t0);
        $[1] = t0;
        $[2] = props;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        props = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
    }
    const angle = t1 === undefined ? 45 : t1;
    const size = t2 === undefined ? 1 : t2;
    let t5;
    if ($[7] !== t3) {
        t5 = t3 === undefined ? {
            opposite: "Opposite",
            adjacent: "Adjacent",
            hypotenuse: "Hypotenuse"
        } : t3;
        $[7] = t3;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const labels = t5;
    const useMonoFont = t4 === undefined ? true : t4;
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const angleInRadians = angle * DEGREES_TO_RADIANS;
    const quadrant = Math.floor(angle / DEGREES_IN_QUADRANT) % QUADRANTS_IN_CIRCLE + Q1;
    const hypotenuse = size;
    const adjacent = Math.cos(angleInRadians) * hypotenuse;
    const opposite = Math.sin(angleInRadians) * hypotenuse;
    const fontPath = useMonoFont ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONO_FONT_PATH"] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_PATH"];
    const fontSize = BASE_FONT_SIZE * Math.max(MIN_SCALE_FACTOR, size * FONT_SIZE_SCALE_FACTOR);
    const baseColor = resolvedTheme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN_COLOR"].LIGHT : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN_COLOR"].DARK;
    const vertexSize = BASE_VERTEX_SIZE * Math.max(MIN_SCALE_FACTOR, size * VERTEX_SIZE_SCALE_FACTOR);
    const arcRadius = ARC_RADIUS_SCALE_FACTOR * Math.sqrt(size);
    const angleLabelDistance = ANGLE_LABEL_DISTANCE_SCALE_FACTOR * Math.sqrt(size);
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const origin = t6;
    let t7;
    if ($[10] !== adjacent) {
        t7 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](adjacent, 0, 0);
        $[10] = adjacent;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const adj = t7;
    let t8;
    if ($[12] !== adjacent || $[13] !== opposite) {
        t8 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](adjacent, opposite, 0);
        $[12] = adjacent;
        $[13] = opposite;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const opp = t8;
    let t9;
    if ($[15] !== adj) {
        t9 = [
            origin,
            adj
        ];
        $[15] = adj;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== adj || $[18] !== opp) {
        t10 = [
            adj,
            opp
        ];
        $[17] = adj;
        $[18] = opp;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== opp) {
        t11 = [
            opp,
            origin
        ];
        $[20] = opp;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t10 || $[23] !== t11 || $[24] !== t9) {
        t12 = [
            t9,
            t10,
            t11
        ];
        $[22] = t10;
        $[23] = t11;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    const triangleSideLines = t12;
    let pts;
    if ($[26] !== angleInRadians || $[27] !== arcRadius) {
        pts = [];
        for(let i = 0; i <= ARC_SEGMENTS; i++){
            const a = i / ARC_SEGMENTS * angleInRadians;
            pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(a) * arcRadius, Math.sin(a) * arcRadius, 0));
        }
        $[26] = angleInRadians;
        $[27] = arcRadius;
        $[28] = pts;
    } else {
        pts = $[28];
    }
    const triangleArcPoints = pts;
    let t13;
    if ($[29] !== triangleSideLines) {
        t13 = triangleSideLines.map(_temp);
        $[29] = triangleSideLines;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    const vertices = t13;
    let t14;
    if ($[31] !== vertices[0]) {
        t14 = {
            position: vertices[0],
            key: "origin"
        };
        $[31] = vertices[0];
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== vertices[1]) {
        t15 = {
            position: vertices[1],
            key: "adjacent"
        };
        $[33] = vertices[1];
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== vertices[2]) {
        t16 = {
            position: vertices[2],
            key: "opposite"
        };
        $[35] = vertices[2];
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t14 || $[38] !== t15 || $[39] !== t16) {
        t17 = [
            t14,
            t15,
            t16
        ];
        $[37] = t14;
        $[38] = t15;
        $[39] = t16;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    const triangleVertices = t17;
    let t18;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = getSharedSphereGeometry();
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    const sphereGeo = t18;
    let t19;
    if ($[42] !== baseColor) {
        t19 = getSharedMaterial(baseColor);
        $[42] = baseColor;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    const sphereMat = t19;
    const t20 = adjacent / 2;
    let adjacentLabelPos;
    let hypotenuseLabelPos;
    let oppositeLabelPos;
    if ($[44] !== adjacent || $[45] !== fontSize || $[46] !== opposite || $[47] !== quadrant || $[48] !== t20) {
        const adjacentMidpoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](t20, 0, 0);
        const oppositeMidpoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](adjacent, opposite / 2, 0);
        const hypotenuseMidpoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](adjacent / 2, opposite / 2, 0);
        adjacentLabelPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        oppositeLabelPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        hypotenuseLabelPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        bb0: switch(quadrant){
            case Q1:
                {
                    adjacentLabelPos.copy(adjacentMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -fontSize * LABEL_OFFSET_ADJACENT_Y, 0));
                    oppositeLabelPos.copy(oppositeMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](fontSize * LABEL_OFFSET_OPPOSITE_X, 0, 0));
                    hypotenuseLabelPos.copy(hypotenuseMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, fontSize * LABEL_OFFSET_HYPOTENUSE_Y, 0));
                    break bb0;
                }
            case Q2:
                {
                    adjacentLabelPos.copy(adjacentMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -fontSize * LABEL_OFFSET_ADJACENT_Y, 0));
                    oppositeLabelPos.copy(oppositeMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-fontSize * LABEL_OFFSET_OPPOSITE_X, 0, 0));
                    hypotenuseLabelPos.copy(hypotenuseMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, fontSize * LABEL_OFFSET_HYPOTENUSE_Y, 0));
                    break bb0;
                }
            case Q3:
                {
                    adjacentLabelPos.copy(adjacentMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, fontSize * LABEL_OFFSET_ADJACENT_Y, 0));
                    oppositeLabelPos.copy(oppositeMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-fontSize * LABEL_OFFSET_OPPOSITE_X, 0, 0));
                    hypotenuseLabelPos.copy(hypotenuseMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -fontSize * LABEL_OFFSET_HYPOTENUSE_Y, 0));
                    break bb0;
                }
            case Q4:
                {
                    adjacentLabelPos.copy(adjacentMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, fontSize * LABEL_OFFSET_ADJACENT_Y, 0));
                    oppositeLabelPos.copy(oppositeMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](fontSize * LABEL_OFFSET_OPPOSITE_X, 0, 0));
                    hypotenuseLabelPos.copy(hypotenuseMidpoint).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -fontSize * LABEL_OFFSET_HYPOTENUSE_Y, 0));
                    break bb0;
                }
            default:
        }
        $[44] = adjacent;
        $[45] = fontSize;
        $[46] = opposite;
        $[47] = quadrant;
        $[48] = t20;
        $[49] = adjacentLabelPos;
        $[50] = hypotenuseLabelPos;
        $[51] = oppositeLabelPos;
    } else {
        adjacentLabelPos = $[49];
        hypotenuseLabelPos = $[50];
        oppositeLabelPos = $[51];
    }
    let t21;
    if ($[52] !== adjacentLabelPos || $[53] !== hypotenuseLabelPos || $[54] !== oppositeLabelPos) {
        t21 = {
            adjacentLabelPos,
            oppositeLabelPos,
            hypotenuseLabelPos
        };
        $[52] = adjacentLabelPos;
        $[53] = hypotenuseLabelPos;
        $[54] = oppositeLabelPos;
        $[55] = t21;
    } else {
        t21 = $[55];
    }
    const labelPositions = t21;
    let t22;
    bb1: switch(quadrant){
        case Q1:
            {
                let t23;
                if ($[56] !== adjacent || $[57] !== opposite) {
                    t23 = Math.atan2(opposite, adjacent);
                    $[56] = adjacent;
                    $[57] = opposite;
                    $[58] = t23;
                } else {
                    t23 = $[58];
                }
                t22 = t23;
                break bb1;
            }
        case Q2:
        case Q3:
            {
                t22 = Math.atan2(opposite, adjacent) + Math.PI;
                break bb1;
            }
        default:
            {
                let t23;
                if ($[59] !== adjacent || $[60] !== opposite) {
                    t23 = Math.atan2(opposite, adjacent);
                    $[59] = adjacent;
                    $[60] = opposite;
                    $[61] = t23;
                } else {
                    t23 = $[61];
                }
                t22 = t23;
            }
    }
    const hypotenuseLabelRotation = t22;
    let t23;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ()=>{
            if (groupRef.current) {
                groupRef.current.frustumCulled = true;
            }
        };
        $[62] = t23;
    } else {
        t23 = $[62];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t23);
    let t24;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = [
            {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].CYAN,
                key: "adjacent"
            },
            {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ORANGE,
                key: "opposite"
            },
            {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ROSE,
                key: "hypotenuse"
            }
        ];
        $[63] = t24;
    } else {
        t24 = $[63];
    }
    const sideConfig = t24;
    let t25;
    if ($[64] !== triangleSideLines) {
        t25 = triangleSideLines.map((pts_1, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                color: sideConfig[i_0].color,
                frustumCulled: true,
                lineWidth: 2,
                points: pts_1
            }, sideConfig[i_0].key, false, {
                fileName: "[project]/packages/design-system/components/three/triangle.tsx",
                lineNumber: 413,
                columnNumber: 49
            }, this));
        $[64] = triangleSideLines;
        $[65] = t25;
    } else {
        t25 = $[65];
    }
    let t26;
    if ($[66] !== triangleArcPoints) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].VIOLET,
            frustumCulled: true,
            lineWidth: 2,
            points: triangleArcPoints
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/triangle.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[66] = triangleArcPoints;
        $[67] = t26;
    } else {
        t26 = $[67];
    }
    const t27 = Math.cos(angleInRadians / 2) * angleLabelDistance + (angle > DEGREES_IN_HALF_CIRCLE ? -1 : 1) * fontSize * ANGLE_LABEL_POSITION_ADJUSTMENT;
    const t28 = Math.sin(angleInRadians / 2) * angleLabelDistance;
    let t29;
    if ($[68] !== t27 || $[69] !== t28) {
        t29 = [
            t27,
            t28,
            0
        ];
        $[68] = t27;
        $[69] = t28;
        $[70] = t29;
    } else {
        t29 = $[70];
    }
    const t30 = "".concat(angle, "°");
    let t31;
    if ($[71] !== fontPath || $[72] !== fontSize || $[73] !== t29 || $[74] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "center",
            anchorY: "middle",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].VIOLET,
            font: fontPath,
            fontSize: fontSize,
            frustumCulled: true,
            position: t29,
            children: t30
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/triangle.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[71] = fontPath;
        $[72] = fontSize;
        $[73] = t29;
        $[74] = t30;
        $[75] = t31;
    } else {
        t31 = $[75];
    }
    let t32;
    if ($[76] !== fontPath || $[77] !== fontSize || $[78] !== labelPositions.adjacentLabelPos || $[79] !== labels.adjacent) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "center",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].CYAN,
            font: fontPath,
            fontSize: fontSize,
            frustumCulled: true,
            position: labelPositions.adjacentLabelPos,
            children: labels.adjacent
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/triangle.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[76] = fontPath;
        $[77] = fontSize;
        $[78] = labelPositions.adjacentLabelPos;
        $[79] = labels.adjacent;
        $[80] = t32;
    } else {
        t32 = $[80];
    }
    let t33;
    if ($[81] !== fontPath || $[82] !== fontSize || $[83] !== labelPositions.oppositeLabelPos || $[84] !== labels.opposite) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorY: "middle",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ORANGE,
            font: fontPath,
            fontSize: fontSize,
            frustumCulled: true,
            position: labelPositions.oppositeLabelPos,
            children: labels.opposite
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/triangle.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[81] = fontPath;
        $[82] = fontSize;
        $[83] = labelPositions.oppositeLabelPos;
        $[84] = labels.opposite;
        $[85] = t33;
    } else {
        t33 = $[85];
    }
    let t34;
    if ($[86] !== hypotenuseLabelRotation) {
        t34 = [
            0,
            0,
            hypotenuseLabelRotation
        ];
        $[86] = hypotenuseLabelRotation;
        $[87] = t34;
    } else {
        t34 = $[87];
    }
    let t35;
    if ($[88] !== fontPath || $[89] !== fontSize || $[90] !== labelPositions.hypotenuseLabelPos || $[91] !== labels.hypotenuse || $[92] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            anchorX: "center",
            anchorY: "middle",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ROSE,
            font: fontPath,
            fontSize: fontSize,
            frustumCulled: true,
            position: labelPositions.hypotenuseLabelPos,
            rotation: t34,
            children: labels.hypotenuse
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/triangle.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        $[88] = fontPath;
        $[89] = fontSize;
        $[90] = labelPositions.hypotenuseLabelPos;
        $[91] = labels.hypotenuse;
        $[92] = t34;
        $[93] = t35;
    } else {
        t35 = $[93];
    }
    const t36 = triangleVertices.length;
    let t37;
    if ($[94] !== triangleVertices || $[95] !== vertexSize) {
        t37 = triangleVertices.map((vertex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Instance"], {
                position: [
                    vertex.position.x,
                    vertex.position.y,
                    vertex.position.z
                ],
                scale: vertexSize
            }, vertex.key, false, {
                fileName: "[project]/packages/design-system/components/three/triangle.tsx",
                lineNumber: 495,
                columnNumber: 42
            }, this));
        $[94] = triangleVertices;
        $[95] = vertexSize;
        $[96] = t37;
    } else {
        t37 = $[96];
    }
    let t38;
    if ($[97] !== sphereMat || $[98] !== t37 || $[99] !== triangleVertices.length) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Instances"], {
            count: t36,
            frustumCulled: true,
            geometry: sphereGeo,
            material: sphereMat,
            visible: true,
            children: t37
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/triangle.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[97] = sphereMat;
        $[98] = t37;
        $[99] = triangleVertices.length;
        $[100] = t38;
    } else {
        t38 = $[100];
    }
    let t39;
    if ($[101] !== props || $[102] !== t25 || $[103] !== t26 || $[104] !== t31 || $[105] !== t32 || $[106] !== t33 || $[107] !== t35 || $[108] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: groupRef,
            ...props,
            children: [
                t25,
                t26,
                t31,
                t32,
                t33,
                t35,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/triangle.tsx",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[101] = props;
        $[102] = t25;
        $[103] = t26;
        $[104] = t31;
        $[105] = t32;
        $[106] = t33;
        $[107] = t35;
        $[108] = t38;
        $[109] = t39;
    } else {
        t39 = $[109];
    }
    return t39;
}
_s(Triangle, "onMrfpyDrZEyRbkJRsphU820ijY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Triangle;
function _temp(pts_0) {
    return pts_0[0];
}
var _c;
__turbopack_context__.k.register(_c, "Triangle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/lib/math.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCos",
    ()=>getCos,
    "getDegrees",
    ()=>getDegrees,
    "getRadians",
    ()=>getRadians,
    "getSin",
    ()=>getSin,
    "getTan",
    ()=>getTan
]);
const DEGREES_IN_HALF_CIRCLE = 180;
const DEGREES_TO_RADIANS = Math.PI / DEGREES_IN_HALF_CIRCLE;
const EPSILON = 1e-10;
function getRadians(angle) {
    return angle * DEGREES_TO_RADIANS;
}
function getDegrees(angle) {
    return angle / DEGREES_TO_RADIANS;
}
function getSin(angle) {
    return Math.sin(getRadians(angle));
}
function getCos(angle) {
    return Math.cos(getRadians(angle));
}
function getTan(angle) {
    // Check if cos is close to zero to handle tan(90°), tan(270°), etc.
    return Math.abs(Math.cos(getRadians(angle))) < EPSILON ? Number.POSITIVE_INFINITY : Math.tan(getRadians(angle));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/contents/triangle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Triangle",
    ()=>Triangle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$coordinate$2d$system$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/coordinate-system.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$triangle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/triangle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/math.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as MinusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$NumberField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/NumberField.mjs [app-client] (ecmascript)");
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
const CAMERA_Z_POSITION = 4;
function Triangle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "18d4d9a3020b9dfd3ce8037891a2283d3b490eff8237ed154e8c25563f755157") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "18d4d9a3020b9dfd3ce8037891a2283d3b490eff8237ed154e8c25563f755157";
    }
    const { title, description, angle: t1, size: t2, labels } = t0;
    const angle = t1 === undefined ? 45 : t1;
    const size = t2 === undefined ? 2 : t2;
    let t3;
    if ($[1] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== description) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t3 || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== angle || $[9] !== labels || $[10] !== size) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
            angle: angle,
            labels: labels,
            size: size
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[8] = angle;
        $[9] = labels;
        $[10] = size;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t5 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_c = Triangle;
function Content(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(55);
    if ($[0] !== "18d4d9a3020b9dfd3ce8037891a2283d3b490eff8237ed154e8c25563f755157") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "18d4d9a3020b9dfd3ce8037891a2283d3b490eff8237ed154e8c25563f755157";
    }
    const { angle, size, labels } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    const [angleValue, setAngleValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(angle);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0,
            0,
            CAMERA_Z_POSITION
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== angleValue || $[3] !== labels || $[4] !== size) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$coordinate$2d$system$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoordinateSystem"], {
                cameraPosition: t1,
                showOrigin: false,
                showZAxis: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$triangle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"], {
                    angle: angleValue,
                    labels: labels,
                    size: size
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
                    lineNumber: 103,
                    columnNumber: 98
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
                lineNumber: 103,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[2] = angleValue;
        $[3] = labels;
        $[4] = size;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== angleValue) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSin"])(angleValue).toFixed(2);
        $[6] = angleValue;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== angleValue || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "font-mono",
            variant: "outline",
            children: [
                "Sin (",
                angleValue,
                "°) = ",
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[8] = angleValue;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== angleValue) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCos"])(angleValue).toFixed(2);
        $[11] = angleValue;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== angleValue || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "font-mono",
            variant: "outline",
            children: [
                "Cos (",
                angleValue,
                "°) = ",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[13] = angleValue;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== angleValue || $[17] !== t) {
        t7 = Number.isFinite((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTan"])(angleValue)) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTan"])(angleValue).toFixed(2) : t("undefined");
        $[16] = angleValue;
        $[17] = t;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== angleValue || $[20] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "font-mono",
            variant: "outline",
            children: [
                "Tan (",
                angleValue,
                "°) =",
                " ",
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[19] = angleValue;
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== t4 || $[23] !== t6 || $[24] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-2 px-6",
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[22] = t4;
        $[23] = t6;
        $[24] = t8;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== angleValue) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "angle",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                className: "font-mono",
                variant: "outline",
                children: [
                    angleValue,
                    "°"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
                lineNumber: 182,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[27] = angleValue;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== angleValue) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadians"])(angleValue).toFixed(2);
        $[29] = angleValue;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t) {
        t13 = t("radian");
        $[31] = t;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== t12 || $[34] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "font-mono",
            variant: "outline",
            children: [
                t12,
                " ",
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[33] = t12;
        $[34] = t13;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    let t15;
    if ($[36] !== t11 || $[37] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[36] = t11;
        $[37] = t14;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    let t16;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            localeMatcher: "best fit"
        };
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "sr-only",
            children: "Angle"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    let t19;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "-ms-px flex aspect-square h-[inherit] cursor-pointer items-center justify-center rounded-s-md border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            slot: "decrement",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__["MinusIcon"], {
                "aria-hidden": "true",
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
                lineNumber: 241,
                columnNumber: 354
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            className: "w-full grow bg-background px-3 py-2 text-center font-mono text-foreground tabular-nums"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t19;
    } else {
        t18 = $[41];
        t19 = $[42];
    }
    let t20;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            className: "relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border border-input text-sm shadow-xs outline-none transition-[color,box-shadow] data-focus-within:border-ring data-disabled:opacity-50 data-focus-within:ring-[3px] data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:border-destructive data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40",
            children: [
                t18,
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "-me-px flex aspect-square h-[inherit] cursor-pointer items-center justify-center rounded-e-md border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                    slot: "increment",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                        "aria-hidden": "true",
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
                        lineNumber: 251,
                        columnNumber: 838
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
                    lineNumber: 251,
                    columnNumber: 495
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== angleValue) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$NumberField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
            formatOptions: t16,
            onChange: setAngleValue,
            value: angleValue,
            children: [
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[44] = angleValue;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== t15 || $[47] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-md flex-col gap-4 px-6",
            children: [
                t15,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[46] = t15;
        $[47] = t21;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t22 || $[50] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            className: "border-t px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col gap-4",
                children: [
                    t9,
                    t10,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
                lineNumber: 275,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/triangle.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[49] = t22;
        $[50] = t9;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== t2 || $[53] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                t23
            ]
        }, void 0, true);
        $[52] = t2;
        $[53] = t23;
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    return t24;
}
_s(Content, "BGaHNbaKlvIEWTh/2Ei5LQVzQmo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c1 = Content;
var _c, _c1;
__turbopack_context__.k.register(_c, "Triangle");
__turbopack_context__.k.register(_c1, "Content");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/unit-circle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnitCircle",
    ()=>UnitCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/math.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)");
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
// Optimized settings for performance
const UNIT_CIRCLE_SEGMENTS = 48; // Reduced from 64
const UNIT_ARC_SEGMENTS = 16; // Reduced from 24
const SPHERE_SEGMENTS = 8; // Low poly sphere
const SPHERE_RADIUS = 0.05;
const ARC_RADIUS = 0.3;
const LABEL_FONT_SIZE = 0.12;
const EPSILON = 1e-10;
// Label positioning constants
const ANGLE_LABEL_X_FACTOR = 0.5;
const ANGLE_LABEL_Y_FACTOR = 0.4;
const COS_LABEL_Y_OFFSET = -0.2;
const SIN_LABEL_X_OFFSET = 0.2;
const TAN_LABEL_POSITION = 1.1;
const THREE = 3;
const SQRT_3 = Math.sqrt(THREE);
_c = SQRT_3;
const TWO = 2;
const FOUR = 4;
const ONE = 1;
// Pre-calculate static circle points once
const STATIC_CIRCLE_POINTS = (()=>{
    const pts = [];
    for(let i = 0; i <= UNIT_CIRCLE_SEGMENTS; i++){
        const a = i / UNIT_CIRCLE_SEGMENTS * Math.PI * 2;
        pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(a), Math.sin(a), 0));
    }
    return pts;
})();
// Shared geometry instances
let sharedSphereGeometry = null;
const sharedMaterials = new Map();
function getSharedSphereGeometry() {
    if (!sharedSphereGeometry) {
        sharedSphereGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](SPHERE_RADIUS, SPHERE_SEGMENTS, SPHERE_SEGMENTS);
    }
    return sharedSphereGeometry;
}
function getSharedMaterial(color) {
    if (!sharedMaterials.has(color)) {
        sharedMaterials.set(color, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color
        }));
    }
    const material = sharedMaterials.get(color);
    if (!material) {
        throw new Error("Material not found for color: ".concat(color));
    }
    return material;
}
function UnitCircle(param) {
    let { angle = 45, showLabels = true, displayMode = "exact", precision = 2, useMonoFont = true, ...props } = param;
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const angleInRadians = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadians"])(angle);
    const sin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSin"])(angle);
    const cos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCos"])(angle);
    const tan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTan"])(angle);
    // Use precomputed circle outline points (static)
    const circlePoints = STATIC_CIRCLE_POINTS;
    // Memoize angle arc points with reduced segments
    const arcPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnitCircle.useMemo[arcPoints]": ()=>{
            const pts = [];
            for(let i = 0; i <= UNIT_ARC_SEGMENTS; i++){
                const a = i / UNIT_ARC_SEGMENTS * angleInRadians;
                pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(a) * ARC_RADIUS, Math.sin(a) * ARC_RADIUS, 0));
            }
            return pts;
        }
    }["UnitCircle.useMemo[arcPoints]"], [
        angleInRadians
    ]);
    // Format values according to display mode - memoize the function
    const formatValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnitCircle.useMemo[formatValue]": ()=>{
            return ({
                "UnitCircle.useMemo[formatValue]": (value)=>{
                    if (!Number.isFinite(value)) {
                        return t("undefined");
                    }
                    if (Math.abs(value) < EPSILON) {
                        return "0";
                    }
                    if (displayMode === "decimal") {
                        return value.toFixed(precision);
                    }
                    const absValue = Math.abs(value);
                    const sign = value < 0 ? "-" : "";
                    // Common trig values lookup table for performance
                    const commonValues = [
                        {
                            value: ONE / TWO,
                            display: "1/2"
                        },
                        {
                            value: Math.SQRT1_2,
                            display: "√2/2"
                        },
                        {
                            value: SQRT_3 / TWO,
                            display: "√3/2"
                        },
                        {
                            value: ONE,
                            display: "1"
                        },
                        {
                            value: SQRT_3,
                            display: "√3"
                        },
                        {
                            value: SQRT_3 / THREE,
                            display: "√3/3"
                        },
                        {
                            value: Math.SQRT2,
                            display: "√2"
                        },
                        {
                            value: ONE / FOUR,
                            display: "1/4"
                        },
                        {
                            value: THREE / FOUR,
                            display: "3/4"
                        }
                    ];
                    for (const { value: v, display } of commonValues){
                        if (Math.abs(absValue - v) < EPSILON) {
                            return "".concat(sign).concat(display);
                        }
                    }
                    return value.toFixed(precision);
                }
            })["UnitCircle.useMemo[formatValue]"];
        }
    }["UnitCircle.useMemo[formatValue]"], [
        displayMode,
        precision,
        t
    ]);
    // Memoize labels
    const labels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnitCircle.useMemo[labels]": ()=>({
                sin: "sin(".concat(angle, "°) = ").concat(formatValue(sin)),
                cos: "cos(".concat(angle, "°) = ").concat(formatValue(cos)),
                tan: "tan(".concat(angle, "°) = ").concat(formatValue(tan))
            })
    }["UnitCircle.useMemo[labels]"], [
        angle,
        sin,
        cos,
        tan,
        formatValue
    ]);
    const fontPath = useMonoFont ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONO_FONT_PATH"] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_PATH"];
    // Colors based on theme
    const circleColor = resolvedTheme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN_COLOR"].LIGHT : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGIN_COLOR"].DARK;
    // Pre-calculate positions
    const pointPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnitCircle.useMemo[pointPosition]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](cos, sin, 0)
    }["UnitCircle.useMemo[pointPosition]"], [
        cos,
        sin
    ]);
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnitCircle.useMemo[origin]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)
    }["UnitCircle.useMemo[origin]"], []);
    const cosPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnitCircle.useMemo[cosPoint]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](cos, 0, 0)
    }["UnitCircle.useMemo[cosPoint]"], [
        cos
    ]);
    // Line segments for better performance
    const lineSegments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UnitCircle.useMemo[lineSegments]": ()=>({
                radius: [
                    origin,
                    pointPosition
                ],
                sine: [
                    cosPoint,
                    pointPosition
                ],
                cosine: [
                    origin,
                    cosPoint
                ]
            })
    }["UnitCircle.useMemo[lineSegments]"], [
        origin,
        pointPosition,
        cosPoint
    ]);
    // Use frustum culling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "UnitCircle.useFrame": ()=>{
            if (groupRef.current) {
                groupRef.current.frustumCulled = true;
            }
        }
    }["UnitCircle.useFrame"]);
    // Get shared geometry and material
    const sphereGeometry = getSharedSphereGeometry();
    const sphereMaterial = getSharedMaterial(circleColor);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            rotation: [
                0,
                0,
                0
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    color: circleColor,
                    frustumCulled: true,
                    lineWidth: 2,
                    points: circlePoints
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].VIOLET,
                    frustumCulled: true,
                    lineWidth: 2,
                    points: arcPoints
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    anchorX: "center",
                    anchorY: "middle",
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].VIOLET,
                    font: fontPath,
                    fontSize: LABEL_FONT_SIZE,
                    frustumCulled: true,
                    position: [
                        Math.cos(angleInRadians / 2) * ANGLE_LABEL_X_FACTOR,
                        Math.sin(angleInRadians / 2) * ANGLE_LABEL_Y_FACTOR,
                        0
                    ],
                    visible: showLabels,
                    children: "".concat(angle, "°")
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    frustumCulled: true,
                    geometry: sphereGeometry,
                    material: sphereMaterial,
                    position: pointPosition
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ROSE,
                    frustumCulled: true,
                    lineWidth: 2,
                    points: lineSegments.radius
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ORANGE,
                    frustumCulled: true,
                    lineWidth: 2,
                    points: lineSegments.sine
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].CYAN,
                    frustumCulled: true,
                    lineWidth: 2,
                    points: lineSegments.cosine
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            anchorX: "center",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].CYAN,
                            font: fontPath,
                            fontSize: LABEL_FONT_SIZE,
                            frustumCulled: true,
                            position: [
                                cos / 2,
                                COS_LABEL_Y_OFFSET,
                                0
                            ],
                            children: labels.cos
                        }, void 0, false, {
                            fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            anchorX: "left",
                            anchorY: "middle",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ORANGE,
                            font: fontPath,
                            fontSize: LABEL_FONT_SIZE,
                            frustumCulled: true,
                            position: [
                                cos + SIN_LABEL_X_OFFSET,
                                sin / 2,
                                0
                            ],
                            children: labels.sin
                        }, void 0, false, {
                            fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ROSE,
                            font: fontPath,
                            fontSize: LABEL_FONT_SIZE,
                            frustumCulled: true,
                            position: [
                                TAN_LABEL_POSITION,
                                TAN_LABEL_POSITION,
                                0
                            ],
                            children: labels.tan
                        }, void 0, false, {
                            fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/design-system/components/three/unit-circle.tsx",
        lineNumber: 184,
        columnNumber: 10
    }, this);
}
_s(UnitCircle, "R6ClO75YJePdPzLSWYd+SMU52Wg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = UnitCircle;
var _c, _c1;
__turbopack_context__.k.register(_c, "SQRT_3");
__turbopack_context__.k.register(_c1, "UnitCircle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/contents/unit-circle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnitCircle",
    ()=>UnitCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$coordinate$2d$system$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/coordinate-system.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$unit$2d$circle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/unit-circle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/math.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as MinusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$NumberField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/NumberField.mjs [app-client] (ecmascript)");
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
const CAMERA_Z_POSITION = 4;
function UnitCircle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "974aa36bd6f82ffbf20fae31253e0cf67c6fec36f77fa83e7a37ab337bd93656") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "974aa36bd6f82ffbf20fae31253e0cf67c6fec36f77fa83e7a37ab337bd93656";
    }
    const { title, description, angle: t1 } = t0;
    const angle = t1 === undefined ? 45 : t1;
    let t2;
    if ($[1] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== description) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== angle) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
            angle: angle
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = angle;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c = UnitCircle;
function Content(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "974aa36bd6f82ffbf20fae31253e0cf67c6fec36f77fa83e7a37ab337bd93656") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "974aa36bd6f82ffbf20fae31253e0cf67c6fec36f77fa83e7a37ab337bd93656";
    }
    const { angle } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Common");
    const [angleValue, setAngleValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(angle);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0,
            0,
            CAMERA_Z_POSITION
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== angleValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$coordinate$2d$system$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoordinateSystem"], {
                cameraPosition: t1,
                showOrigin: false,
                showZAxis: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$unit$2d$circle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnitCircle"], {
                    angle: angleValue
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
                    lineNumber: 96,
                    columnNumber: 98
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
                lineNumber: 96,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[2] = angleValue;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== angleValue) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSin"])(angleValue).toFixed(2);
        $[4] = angleValue;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== angleValue || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "font-mono",
            variant: "outline",
            children: [
                "Sin (",
                angleValue,
                "°) = ",
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[6] = angleValue;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== angleValue) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCos"])(angleValue).toFixed(2);
        $[9] = angleValue;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== angleValue || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "font-mono",
            variant: "outline",
            children: [
                "Cos (",
                angleValue,
                "°) = ",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[11] = angleValue;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== angleValue || $[15] !== t) {
        t7 = Number.isFinite((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTan"])(angleValue)) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTan"])(angleValue).toFixed(2) : t("undefined");
        $[14] = angleValue;
        $[15] = t;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== angleValue || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "font-mono",
            variant: "outline",
            children: [
                "Tan (",
                angleValue,
                "°) =",
                " ",
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[17] = angleValue;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== t4 || $[21] !== t6 || $[22] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-2 px-6",
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[20] = t4;
        $[21] = t6;
        $[22] = t8;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== angleValue) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "angle",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                className: "font-mono",
                variant: "outline",
                children: [
                    angleValue,
                    "°"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
                lineNumber: 173,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[25] = angleValue;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== angleValue) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadians"])(angleValue).toFixed(2);
        $[27] = angleValue;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t) {
        t13 = t("radian");
        $[29] = t;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t12 || $[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "font-mono",
            variant: "outline",
            children: [
                t12,
                " ",
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t11 || $[35] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[34] = t11;
        $[35] = t14;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            localeMatcher: "best fit"
        };
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "sr-only",
            children: "Angle"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    let t19;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "-ms-px flex aspect-square h-[inherit] cursor-pointer items-center justify-center rounded-s-md border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            slot: "decrement",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__["MinusIcon"], {
                "aria-hidden": "true",
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
                lineNumber: 232,
                columnNumber: 354
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            className: "w-full grow bg-background px-3 py-2 text-center font-mono text-foreground tabular-nums"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[39] = t18;
        $[40] = t19;
    } else {
        t18 = $[39];
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            className: "relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border border-input text-sm shadow-xs outline-none transition-[color,box-shadow] data-focus-within:border-ring data-disabled:opacity-50 data-focus-within:ring-[3px] data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:border-destructive data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40",
            children: [
                t18,
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "-me-px flex aspect-square h-[inherit] cursor-pointer items-center justify-center rounded-e-md border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                    slot: "increment",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                        "aria-hidden": "true",
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
                        lineNumber: 242,
                        columnNumber: 838
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
                    lineNumber: 242,
                    columnNumber: 495
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== angleValue) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$NumberField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
            formatOptions: t16,
            onChange: setAngleValue,
            value: angleValue,
            children: [
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[42] = angleValue;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t15 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-md flex-col gap-4 px-6",
            children: [
                t15,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[44] = t15;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t22 || $[48] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            className: "border-t px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col gap-4",
                children: [
                    t9,
                    t10,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
                lineNumber: 266,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/unit-circle.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[47] = t22;
        $[48] = t9;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== t2 || $[51] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                t23
            ]
        }, void 0, true);
        $[50] = t2;
        $[51] = t23;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    return t24;
}
_s(Content, "BGaHNbaKlvIEWTh/2Ei5LQVzQmo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c1 = Content;
var _c, _c1;
__turbopack_context__.k.register(_c, "UnitCircle");
__turbopack_context__.k.register(_c1, "Content");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/arrow-helper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowHelper",
    ()=>ArrowHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/lib/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/_data/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ARROW_SEGMENTS = 16;
const ARROW_SEGMENT_OFFSET = 0.2;
// Shared geometry and material caches
const coneGeometryCache = new Map();
const materialCache = new Map();
function getSharedConeGeometry(size) {
    const key = "cone-".concat(size);
    if (!coneGeometryCache.has(key)) {
        // Reduced segments from 32 to 16 for better performance
        coneGeometryCache.set(key, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](size / 2, size, ARROW_SEGMENTS, 1));
    }
    const geometry = coneGeometryCache.get(key);
    if (!geometry) {
        throw new Error("Cone geometry not found for size: ".concat(size));
    }
    return geometry;
}
function getSharedMaterial(color) {
    const colorKey = color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"] ? color.getHexString() : color;
    if (!materialCache.has(colorKey)) {
        materialCache.set(colorKey, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"] ? color : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color)
        }));
    }
    const material = materialCache.get(colorKey);
    if (!material) {
        throw new Error("Material not found for color: ".concat(colorKey));
    }
    return material;
}
function ArrowHelper(param) {
    let { from = [
        0,
        0,
        0
    ], to, color = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].YELLOW, lineWidth = 2, showArrow = true, arrowSize = 0.5, label, labelPosition = "end", useMonoFont = true, ...props } = param;
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Memoize vector calculations
    const vectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArrowHelper.useMemo[vectors]": ()=>{
            const fromVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...from);
            const toVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...to);
            const direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(toVec, fromVec).normalize();
            const length = fromVec.distanceTo(toVec);
            return {
                fromVec,
                toVec,
                direction,
                length
            };
        }
    }["ArrowHelper.useMemo[vectors]"], [
        from,
        to
    ]);
    // Memoize label position calculation
    const labelPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArrowHelper.useMemo[labelPos]": ()=>{
            const midPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().addVectors(vectors.fromVec, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(vectors.direction).multiplyScalar(vectors.length / 2));
            const endPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(vectors.toVec);
            switch(labelPosition){
                case "start":
                    return vectors.fromVec.clone();
                case "middle":
                    return midPoint;
                default:
                    // Add slight offset for end position
                    return endPoint.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](ARROW_SEGMENT_OFFSET, ARROW_SEGMENT_OFFSET, ARROW_SEGMENT_OFFSET));
            }
        }
    }["ArrowHelper.useMemo[labelPos]"], [
        vectors,
        labelPosition
    ]);
    // Use shared geometry and material
    const coneGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArrowHelper.useMemo[coneGeometry]": ()=>showArrow ? getSharedConeGeometry(arrowSize) : null
    }["ArrowHelper.useMemo[coneGeometry]"], [
        showArrow,
        arrowSize
    ]);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArrowHelper.useMemo[material]": ()=>showArrow ? getSharedMaterial(color) : null
    }["ArrowHelper.useMemo[material]"], [
        showArrow,
        color
    ]);
    // Define the shaft points - from the start point to just before the cone
    const shaftPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArrowHelper.useMemo[shaftPoints]": ()=>[
                vectors.fromVec,
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](vectors.toVec.x - vectors.direction.x * arrowSize, vectors.toVec.y - vectors.direction.y * arrowSize, vectors.toVec.z - vectors.direction.z * arrowSize)
            ]
    }["ArrowHelper.useMemo[shaftPoints]"], [
        vectors,
        arrowSize
    ]);
    // Memoize cone position and quaternion
    const coneTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArrowHelper.useMemo[coneTransform]": ()=>{
            if (!showArrow) {
                return null;
            }
            const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](vectors.toVec.x - vectors.direction.x * arrowSize / 2, vectors.toVec.y - vectors.direction.y * arrowSize / 2, vectors.toVec.z - vectors.direction.z * arrowSize / 2);
            const quaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromUnitVectors(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), vectors.direction);
            return {
                position,
                quaternion
            };
        }
    }["ArrowHelper.useMemo[coneTransform]"], [
        showArrow,
        vectors,
        arrowSize
    ]);
    // Memoize font path
    const fontPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArrowHelper.useMemo[fontPath]": ()=>useMonoFont ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONO_FONT_PATH"] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$_data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_PATH"]
    }["ArrowHelper.useMemo[fontPath]"], [
        useMonoFont
    ]);
    // Enable frustum culling for the entire group
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ArrowHelper.useFrame": ()=>{
            if (groupRef.current) {
                groupRef.current.frustumCulled = true;
            }
        }
    }["ArrowHelper.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                color: color,
                frustumCulled: true,
                lineWidth: lineWidth,
                points: shaftPoints
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/arrow-helper.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            showArrow && coneGeometry && material && coneTransform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                frustumCulled: true,
                geometry: coneGeometry,
                material: material,
                position: coneTransform.position,
                quaternion: coneTransform.quaternion
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/arrow-helper.tsx",
                lineNumber: 117,
                columnNumber: 66
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                anchorX: "left",
                color: color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"] ? color.getStyle() : color,
                font: fontPath,
                fontSize: 0.5,
                frustumCulled: true,
                position: labelPos,
                visible: Boolean(label),
                children: label
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/three/arrow-helper.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/design-system/components/three/arrow-helper.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
_s(ArrowHelper, "VrYQFLZ33/T2l+sVMmQmT1wUPUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ArrowHelper;
var _c;
__turbopack_context__.k.register(_c, "ArrowHelper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/three/vector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Vector",
    ()=>Vector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$arrow$2d$helper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/three/arrow-helper.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Vector(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "181ebb7ce64651d14c60b3b7450ed8d7b5c2aa7b89c4733c821aa42299ec1c60") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "181ebb7ce64651d14c60b3b7450ed8d7b5c2aa7b89c4733c821aa42299ec1c60";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$three$2f$arrow$2d$helper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowHelper"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/three/vector.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
_c = Vector;
var _c;
__turbopack_context__.k.register(_c, "Vector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/contents/vector-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VectorChart",
    ()=>VectorChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function VectorChart(param) {
    let { title, description, vectors, labels = {
        xAxis: "x",
        yAxis: "y"
    } } = param;
    _s();
    // Transform the vectors data for the chart
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VectorChart.useMemo[data]": ()=>{
            // Find all unique x values from all vectors
            const allXValues = new Set();
            for (const vector of vectors){
                for (const point of vector.points){
                    allXValues.add(point.x);
                }
            }
            // Sort the x values
            const sortedXValues = [
                ...allXValues
            ].sort({
                "VectorChart.useMemo[data].sortedXValues": (a, b)=>a - b
            }["VectorChart.useMemo[data].sortedXValues"]);
            // Create data points for each x value
            return sortedXValues.map({
                "VectorChart.useMemo[data]": (x)=>{
                    const dataPoint = {
                        x
                    };
                    // Add the y value for each vector at this x point if it exists
                    for (const vector_0 of vectors){
                        const point_0 = vector_0.points.find({
                            "VectorChart.useMemo[data].point_0": (p)=>p.x === x
                        }["VectorChart.useMemo[data].point_0"]);
                        var _point_0_y;
                        dataPoint[vector_0.id] = (_point_0_y = point_0 === null || point_0 === void 0 ? void 0 : point_0.y) !== null && _point_0_y !== void 0 ? _point_0_y : null;
                    }
                    return dataPoint;
                }
            }["VectorChart.useMemo[data]"]);
        }
    }["VectorChart.useMemo[data]"], [
        vectors
    ]);
    // Create chart config with colors for each vector
    const chartConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VectorChart.useMemo[chartConfig]": ()=>{
            const config = {};
            vectors.forEach({
                "VectorChart.useMemo[chartConfig]": (vector_1, index)=>{
                    config[vector_1.id] = {
                        label: vector_1.name,
                        color: vector_1.color || "var(--chart-".concat(index + 1, ")")
                    };
                }
            }["VectorChart.useMemo[chartConfig]"]);
            return config;
        }
    }["VectorChart.useMemo[chartConfig]"], [
        vectors
    ]);
    // Process vectors to determine which points need arrow markers
    const processedVectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VectorChart.useMemo[processedVectors]": ()=>{
            return vectors.map({
                "VectorChart.useMemo[processedVectors]": (vector_2)=>{
                    // Need at least 2 points to determine direction
                    if (vector_2.points.length < 2) {
                        return {
                            ...vector_2,
                            startPoint: null,
                            endPoint: null,
                            arrowAtEnd: false,
                            arrowAtStart: false
                        };
                    }
                    const direction = vector_2.direction || "forward";
                    // Determine which points get the arrow markers based on direction
                    if (direction === "forward") {
                        // Arrow at the last point (default)
                        return {
                            ...vector_2,
                            startPoint: vector_2.points[0],
                            endPoint: vector_2.points.at(-1),
                            arrowAtEnd: true,
                            arrowAtStart: false
                        };
                    }
                    if (direction === "both") {
                        // Arrows at both ends
                        return {
                            ...vector_2,
                            startPoint: vector_2.points[0],
                            endPoint: vector_2.points.at(-1),
                            arrowAtEnd: true,
                            arrowAtStart: true
                        };
                    }
                    if (direction === "none") {
                        // No arrows at any end
                        return {
                            ...vector_2,
                            startPoint: vector_2.points[0],
                            endPoint: vector_2.points.at(-1),
                            arrowAtEnd: false,
                            arrowAtStart: false
                        };
                    }
                    // Arrow at the first point (backward direction)
                    return {
                        ...vector_2,
                        startPoint: vector_2.points.at(-1),
                        endPoint: vector_2.points[0],
                        arrowAtEnd: false,
                        arrowAtStart: true
                    };
                }
            }["VectorChart.useMemo[processedVectors]"]);
        }
    }["VectorChart.useMemo[processedVectors]"], [
        vectors
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                    config: chartConfig,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                        accessibilityLayer: true,
                        data: data,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {}, void 0, false, {
                                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: processedVectors.map((vector_3, index_0)=>{
                                    const color = vector_3.color || "var(--chart-".concat(index_0 + 1, ")");
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                                id: "arrow-end-".concat(vector_3.id),
                                                markerHeight: "8",
                                                markerWidth: "8",
                                                orient: "auto",
                                                refX: "10",
                                                refY: "5",
                                                viewBox: "0 0 10 10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 0 0 L 10 5 L 0 10 Z",
                                                    fill: color
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                                id: "arrow-start-".concat(vector_3.id),
                                                markerHeight: "8",
                                                markerWidth: "8",
                                                orient: "auto-start-reverse",
                                                refX: "10",
                                                refY: "5",
                                                viewBox: "0 0 10 10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 0 0 L 10 5 L 0 10 Z",
                                                    fill: color
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, "arrows-".concat(vector_3.id), true, {
                                        fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                        lineNumber: 126,
                                        columnNumber: 22
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "x",
                                tickFormatter: (value)=>{
                                    if (typeof value === "number") {
                                        return Number.isInteger(value) ? value.toString() : value.toFixed(2);
                                    }
                                    return value;
                                },
                                tickMargin: 8
                            }, void 0, false, {
                                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                label: {
                                    value: labels.yAxis,
                                    angle: -90,
                                    position: "insideLeft",
                                    style: {
                                        textAnchor: "middle"
                                    }
                                },
                                tickFormatter: (value_0)=>{
                                    if (typeof value_0 === "number") {
                                        return Number.isInteger(value_0) ? value_0.toString() : value_0.toFixed(2);
                                    }
                                    return value_0;
                                },
                                tickMargin: 8
                            }, void 0, false, {
                                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
                                content: (param)=>{
                                    let { active, payload } = param;
                                    if (active && payload && payload.length) {
                                        var _payload_;
                                        const xValue = (_payload_ = payload[0]) === null || _payload_ === void 0 ? void 0 : _payload_.payload.x;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
                                            children: payload.map((entry)=>{
                                                if (entry.value === null) {
                                                    return null;
                                                }
                                                const vectorName = entry.name;
                                                const yValue = entry.value;
                                                const color_0 = entry.color;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-2 shrink-0 rounded-[2px]",
                                                            style: {
                                                                backgroundColor: color_0
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 29
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: vectorName
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 29
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-auto font-mono tracking-tight",
                                                            children: [
                                                                "(",
                                                                xValue,
                                                                ", ",
                                                                yValue,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 29
                                                        }, void 0)
                                                    ]
                                                }, "tooltip-".concat(entry.name, "-").concat(entry.value), true, {
                                                    fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 26
                                                }, void 0);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                            lineNumber: 164,
                                            columnNumber: 22
                                        }, void 0);
                                    }
                                    return null;
                                }
                            }, void 0, false, {
                                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            processedVectors.map((vector_4, index_1)=>{
                                const color_1 = vector_4.color || "var(--chart-".concat(index_1 + 1, ")");
                                // Set marker properties based on direction
                                const markerProps = {};
                                if (vector_4.arrowAtEnd) {
                                    markerProps.markerEnd = "url(#arrow-end-".concat(vector_4.id, ")");
                                }
                                if (vector_4.arrowAtStart) {
                                    markerProps.markerStart = "url(#arrow-start-".concat(vector_4.id, ")");
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    connectNulls: true,
                                    dataKey: vector_4.id,
                                    dot: true,
                                    name: vector_4.name,
                                    stroke: color_1,
                                    strokeWidth: 2,
                                    style: {
                                        stroke: color_1,
                                        ...markerProps
                                    },
                                    type: vector_4.type || "monotone"
                                }, vector_4.id, false, {
                                    fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                    lineNumber: 198,
                                    columnNumber: 20
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {
                                    verticalAlign: "bottom"
                                }, void 0, false, {
                                    fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                    lineNumber: 204,
                                    columnNumber: 35
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/design-system/components/contents/vector-chart.tsx",
        lineNumber: 113,
        columnNumber: 10
    }, this);
}
_s(VectorChart, "j5LJq1U2/Ei7LCnLmE3c+8rodOI=");
_c = VectorChart;
var _c;
__turbopack_context__.k.register(_c, "VectorChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Diagram",
    ()=>Diagram,
    "RelationVisualizer",
    ()=>RelationVisualizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const SVG_PADDING = 20;
const ELLIPSE_RX = 50;
const ELLIPSE_RY = 90;
const ELLIPSE_GAP = 100;
const TEXT_PADDING = 15;
const LINE_OFFSET = 0.3;
const SLOT_CENTER_OFFSET = 0.5;
function Diagram(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "2f803dd0142a7a5f629097669d5d6abad1895ce571ee1d946848d85a21b71380") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2f803dd0142a7a5f629097669d5d6abad1895ce571ee1d946848d85a21b71380";
    }
    const { title, description, children } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c = Diagram;
// --- SVG Configuration ---
const svgWidth = 2 * ELLIPSE_RX * 2 + ELLIPSE_GAP + 2 * SVG_PADDING;
const svgHeight = 2 * ELLIPSE_RY + 2 * SVG_PADDING;
// Center X coordinates for the ellipses
const domainEllipseCx = SVG_PADDING + ELLIPSE_RX;
const codomainEllipseCx = domainEllipseCx + 2 * ELLIPSE_RX + ELLIPSE_GAP;
const ellipseCy = SVG_PADDING + ELLIPSE_RY; // Y center for both ellipses
// Calculate X coordinate for text within ellipses
const domainTextX = domainEllipseCx;
const codomainTextX = codomainEllipseCx;
// Helper to calculate Text Y position dynamically within an ellipse
const calculateTextY = (index, total, ry, cy)=>{
    // Calculate the effective height available for text
    const textHeightArea = ry * 2 - TEXT_PADDING * 2;
    // Calculate the height of each slot
    const slotHeight = textHeightArea / total;
    // Calculate the center Y of the slot, offset by top padding and ellipse center
    return cy - ry + TEXT_PADDING + slotHeight * (index + SLOT_CENTER_OFFSET);
};
function RelationVisualizer(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "2f803dd0142a7a5f629097669d5d6abad1895ce571ee1d946848d85a21b71380") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2f803dd0142a7a5f629097669d5d6abad1895ce571ee1d946848d85a21b71380";
    }
    const { domain, codomain, mappings, domainLabel: t1, codomainLabel: t2 } = t0;
    const domainLabel = t1 === undefined ? "X" : t1;
    const codomainLabel = t2 === undefined ? "Y" : t2;
    let coords;
    if ($[1] !== codomain || $[2] !== domain) {
        coords = {};
        domain.forEach((el, index)=>{
            coords[el.id] = {
                x: domainTextX,
                y: calculateTextY(index, domain.length, ELLIPSE_RY, ellipseCy)
            };
        });
        codomain.forEach((el_0, index_0)=>{
            coords[el_0.id] = {
                x: codomainTextX,
                y: calculateTextY(index_0, codomain.length, ELLIPSE_RY, ellipseCy)
            };
        });
        $[1] = codomain;
        $[2] = domain;
        $[3] = coords;
    } else {
        coords = $[3];
    }
    const elementCoords = coords;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
            id: "svgTitle",
            children: "Arrow diagram of relation between sets"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                id: "arrowhead-visualizer",
                markerHeight: "6",
                markerWidth: "8",
                orient: "auto-start-reverse",
                refX: "7",
                refY: "3",
                viewBox: "0 0 8 6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    className: "fill-foreground/80",
                    points: "0 0, 8 3, 0 6"
                }, void 0, false, {
                    fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
                    lineNumber: 140,
                    columnNumber: 147
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
                lineNumber: 140,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== domainLabel) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            className: "fill-foreground font-semibold text-sm",
            textAnchor: "middle",
            x: domainEllipseCx,
            y: SVG_PADDING - 10,
            children: domainLabel
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[6] = domainLabel;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            className: "fill-muted stroke-border",
            cx: domainEllipseCx,
            cy: ellipseCy,
            rx: ELLIPSE_RX,
            ry: ELLIPSE_RY,
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== codomainLabel) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            className: "fill-foreground font-semibold text-sm",
            textAnchor: "middle",
            x: codomainEllipseCx,
            y: SVG_PADDING - 10,
            children: codomainLabel
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[9] = codomainLabel;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            className: "fill-muted stroke-border",
            cx: codomainEllipseCx,
            cy: ellipseCy,
            rx: ELLIPSE_RX,
            ry: ELLIPSE_RY,
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 170,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== domain || $[13] !== elementCoords) {
        let t10;
        if ($[15] !== elementCoords) {
            t10 = (el_1)=>{
                var _elementCoords_el_1_id, _elementCoords_el_1_id1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    className: "fill-foreground font-medium text-sm",
                    dominantBaseline: "middle",
                    textAnchor: "middle",
                    x: (_elementCoords_el_1_id = elementCoords[el_1.id]) === null || _elementCoords_el_1_id === void 0 ? void 0 : _elementCoords_el_1_id.x,
                    y: (_elementCoords_el_1_id1 = elementCoords[el_1.id]) === null || _elementCoords_el_1_id1 === void 0 ? void 0 : _elementCoords_el_1_id1.y,
                    children: el_1.label
                }, "domain-".concat(el_1.id), false, {
                    fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
                    lineNumber: 179,
                    columnNumber: 21
                }, this);
            };
            $[15] = elementCoords;
            $[16] = t10;
        } else {
            t10 = $[16];
        }
        t9 = domain.map(t10);
        $[12] = domain;
        $[13] = elementCoords;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[17] !== codomain || $[18] !== elementCoords) {
        let t11;
        if ($[20] !== elementCoords) {
            t11 = (el_2)=>{
                var _elementCoords_el_2_id, _elementCoords_el_2_id1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    className: "fill-foreground font-medium text-sm",
                    dominantBaseline: "middle",
                    textAnchor: "middle",
                    x: (_elementCoords_el_2_id = elementCoords[el_2.id]) === null || _elementCoords_el_2_id === void 0 ? void 0 : _elementCoords_el_2_id.x,
                    y: (_elementCoords_el_2_id1 = elementCoords[el_2.id]) === null || _elementCoords_el_2_id1 === void 0 ? void 0 : _elementCoords_el_2_id1.y,
                    children: el_2.label
                }, "codomain-".concat(el_2.id), false, {
                    fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
                    lineNumber: 196,
                    columnNumber: 21
                }, this);
            };
            $[20] = elementCoords;
            $[21] = t11;
        } else {
            t11 = $[21];
        }
        t10 = codomain.map(t11);
        $[17] = codomain;
        $[18] = elementCoords;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[22] !== elementCoords || $[23] !== mappings) {
        let t12;
        if ($[25] !== elementCoords) {
            t12 = (mapping, index_1)=>{
                const startCoords = elementCoords[mapping.from];
                const endCoords = elementCoords[mapping.to];
                if (!(startCoords && endCoords)) {
                    return null;
                }
                const lineStartX = startCoords.x + ELLIPSE_RX * LINE_OFFSET;
                const lineEndX = endCoords.x - ELLIPSE_RX * LINE_OFFSET;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    className: "stroke-foreground/50",
                    markerEnd: "url(#arrowhead-visualizer)",
                    strokeWidth: "1.5",
                    x1: lineStartX,
                    x2: lineEndX,
                    y1: startCoords.y,
                    y2: endCoords.y
                }, "mapping-".concat(mapping.from, "-").concat(mapping.to, "-").concat(index_1), false, {
                    fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
                    lineNumber: 221,
                    columnNumber: 16
                }, this);
            };
            $[25] = elementCoords;
            $[26] = t12;
        } else {
            t12 = $[26];
        }
        t11 = mappings.map(t12);
        $[22] = elementCoords;
        $[23] = mappings;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[27] !== t10 || $[28] !== t11 || $[29] !== t5 || $[30] !== t7 || $[31] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-labelledby": "svgTitle",
                height: svgHeight,
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 ".concat(svgWidth, " ").concat(svgHeight),
                width: "100%",
                children: [
                    t3,
                    t4,
                    t5,
                    t6,
                    t7,
                    t8,
                    t9,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
                lineNumber: 237,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-and-non-function/diagram.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t11;
        $[29] = t5;
        $[30] = t7;
        $[31] = t9;
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    return t12;
}
_c1 = RelationVisualizer;
var _c, _c1;
__turbopack_context__.k.register(_c, "Diagram");
__turbopack_context__.k.register(_c1, "RelationVisualizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionAnalogy",
    ()=>FunctionAnalogy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as MinusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$NumberField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/NumberField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-katex/dist/react-katex.js [app-client] (ecmascript)");
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
const DEFAULT_INPUT = 5;
function FunctionAnalogy(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "8758bb0e5a024d61a788999428072a5370702b4e1f5ee1630ab9fb6aaf65c0a5") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8758bb0e5a024d61a788999428072a5370702b4e1f5ee1630ab9fb6aaf65c0a5";
    }
    const { title, description } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Machine, {}, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_c = FunctionAnalogy;
function Machine() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "8758bb0e5a024d61a788999428072a5370702b4e1f5ee1630ab9fb6aaf65c0a5") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8758bb0e5a024d61a788999428072a5370702b4e1f5ee1630ab9fb6aaf65c0a5";
    }
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_INPUT);
    const output = 2 * input + 1;
    const t0 = "x = ".concat(input);
    let t1;
    if ($[1] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "pointer-events-none",
            variant: "default",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineMath"], {
                math: t0
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
                lineNumber: 78,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
            className: "hidden size-4 sm:block"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__["ArrowDownIcon"], {
            className: "block size-4 sm:hidden"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center rounded-md bg-accent p-8 text-accent-foreground shadow-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineMath"], {
                math: "f(x) = 2x + 1"
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
                lineNumber: 99,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__["ArrowDownIcon"], {
            className: "block size-4 sm:hidden"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
            className: "hidden size-4 sm:block"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    const t7 = "f(x) = ".concat(output);
    let t8;
    if ($[8] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "pointer-events-none",
            variant: "secondary",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineMath"], {
                math: t7
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
                lineNumber: 113,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t1 || $[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-8 py-8 sm:flex-row",
                children: [
                    t1,
                    t2,
                    t3,
                    t4,
                    t5,
                    t6,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
                lineNumber: 121,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            localeMatcher: "best fit"
        };
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "sr-only",
            children: "Machine function"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "-ms-px flex aspect-square h-[inherit] cursor-pointer items-center justify-center rounded-s-md border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            slot: "decrement",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__["MinusIcon"], {
                "aria-hidden": "true",
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
                lineNumber: 147,
                columnNumber: 354
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            className: "w-full grow bg-background px-3 py-2 text-center font-mono text-foreground tabular-nums"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[15] = t12;
        $[16] = t13;
    } else {
        t12 = $[15];
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            className: "relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border border-input text-sm shadow-xs outline-none transition-[color,box-shadow] data-focus-within:border-ring data-disabled:opacity-50 data-focus-within:ring-[3px] data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:border-destructive data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40",
            children: [
                t12,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "-me-px flex aspect-square h-[inherit] cursor-pointer items-center justify-center rounded-e-md border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                    slot: "increment",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                        "aria-hidden": "true",
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
                        lineNumber: 157,
                        columnNumber: 838
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
                    lineNumber: 157,
                    columnNumber: 495
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== input) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
            className: "justify-center border-t",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$NumberField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                formatOptions: t10,
                onChange: setInput,
                value: input,
                children: [
                    t11,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
                lineNumber: 164,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/function-concept/analogy.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[18] = input;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== t15 || $[21] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t9,
                t15
            ]
        }, void 0, true);
        $[20] = t15;
        $[21] = t9;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    return t16;
}
_s(Machine, "SLmACv4Lf0ZyWDQUvHMHAv2g8mg=");
_c1 = Machine;
var _c, _c1;
__turbopack_context__.k.register(_c, "FunctionAnalogy");
__turbopack_context__.k.register(_c1, "Machine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionIllustration",
    ()=>FunctionIllustration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRightIcon>");
"use client";
;
;
;
;
;
function FunctionIllustration(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "8b2479c5f7d2c254283977e732b274d281940dce23ca2398f947ce3b95b6fa0d") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b2479c5f7d2c254283977e732b274d281940dce23ca2398f947ce3b95b6fa0d";
    }
    const { title, description, machineLabel, content } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== content.input) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "pointer-events-none",
            children: content.input
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[8] = content.input;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
            className: "hidden size-4 sm:block"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__["ArrowDownIcon"], {
            className: "block size-4 sm:hidden"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t5 = $[10];
        t6 = $[11];
    }
    let t7;
    if ($[12] !== machineLabel) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center rounded-md bg-accent p-8 text-accent-foreground",
            children: machineLabel
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[12] = machineLabel;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__["ArrowDownIcon"], {
            className: "block size-4 sm:hidden"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
            className: "hidden size-4 sm:block"
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t8 = $[14];
        t9 = $[15];
    }
    let t10;
    if ($[16] !== content.output) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "pointer-events-none",
            variant: "destructive",
            children: content.output
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this);
        $[16] = content.output;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t4 || $[20] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-8 py-8 sm:flex-row",
                children: [
                    t4,
                    t5,
                    t6,
                    t7,
                    t8,
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
                lineNumber: 94,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t4;
        $[20] = t7;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11 || $[23] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t3,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/packages/contents/subject/high-school/11/mathematics/function-composition-inverse-function/inverse-function/illustration.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t3;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    return t12;
}
_c = FunctionIllustration;
var _c;
__turbopack_context__.k.register(_c, "FunctionIllustration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/components/contents/scatter-diagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScatterDiagram",
    ()=>ScatterDiagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Scatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ScatterDiagram(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "c9bb2232008c47a5ab8e1753a2c4c7ce53585d72be0eb4e73daa329e03f062fd") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c9bb2232008c47a5ab8e1753a2c4c7ce53585d72be0eb4e73daa329e03f062fd";
    }
    const { title, description, xAxisLabel, yAxisLabel, xAxisDomain, datasets, calculateRegressionLine, regressionLineStyle, showResiduals } = t0;
    let t1;
    if ($[1] !== datasets || $[2] !== xAxisLabel || $[3] !== yAxisLabel) {
        t1 = datasets.reduce(_temp, {
            x: {
                label: xAxisLabel || "X"
            },
            y: {
                label: yAxisLabel || "Y"
            }
        });
        $[1] = datasets;
        $[2] = xAxisLabel;
        $[3] = yAxisLabel;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const chartConfig = t1;
    let regressionLineData;
    let regressionParams;
    if ($[5] !== calculateRegressionLine || $[6] !== datasets) {
        regressionParams = null;
        if (calculateRegressionLine) {
            const allPoints = datasets.flatMap(_temp2);
            regressionParams = calculateLeastSquares(allPoints);
            if (regressionParams && allPoints.length > 0) {
                const xValues = allPoints.map(_temp3);
                const xMin = Math.min(...xValues);
                const xMax = Math.max(...xValues);
                const { m, b } = regressionParams;
                const t2 = m * xMin + b;
                let t3;
                if ($[9] !== t2 || $[10] !== xMin) {
                    t3 = {
                        x: xMin,
                        y: t2
                    };
                    $[9] = t2;
                    $[10] = xMin;
                    $[11] = t3;
                } else {
                    t3 = $[11];
                }
                const t4 = m * xMax + b;
                let t5;
                if ($[12] !== t4 || $[13] !== xMax) {
                    t5 = {
                        x: xMax,
                        y: t4
                    };
                    $[12] = t4;
                    $[13] = xMax;
                    $[14] = t5;
                } else {
                    t5 = $[14];
                }
                let t6;
                if ($[15] !== t3 || $[16] !== t5) {
                    t6 = [
                        t3,
                        t5
                    ];
                    $[15] = t3;
                    $[16] = t5;
                    $[17] = t6;
                } else {
                    t6 = $[17];
                }
                regressionLineData = t6;
            }
        }
        $[5] = calculateRegressionLine;
        $[6] = datasets;
        $[7] = regressionParams;
        $[8] = regressionLineData;
    } else {
        regressionParams = $[7];
        regressionLineData = $[8];
    }
    let t2;
    if ($[18] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[18] = title;
        $[19] = t2;
    } else {
        t2 = $[19];
    }
    let t3;
    if ($[20] !== description) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[20] = description;
        $[21] = t3;
    } else {
        t3 = $[21];
    }
    let t4;
    if ($[22] !== t2 || $[23] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[22] = t2;
        $[23] = t3;
        $[24] = t4;
    } else {
        t4 = $[24];
    }
    let t5;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            vertical: false
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[25] = t5;
    } else {
        t5 = $[25];
    }
    let t6;
    if ($[26] !== xAxisDomain) {
        t6 = xAxisDomain === "min-max" ? [
            "dataMin",
            "dataMax"
        ] : undefined;
        $[26] = xAxisDomain;
        $[27] = t6;
    } else {
        t6 = $[27];
    }
    const t7 = xAxisLabel || "X";
    let t8;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            textAnchor: "middle"
        };
        $[28] = t8;
    } else {
        t8 = $[28];
    }
    let t9;
    if ($[29] !== t7) {
        t9 = {
            value: t7,
            position: "bottom",
            offset: 10,
            style: t8
        };
        $[29] = t7;
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    let t10;
    if ($[31] !== t6 || $[32] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "x",
            domain: t6,
            label: t9,
            tickFormatter: _temp4,
            tickMargin: 8,
            type: "number"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[31] = t6;
        $[32] = t9;
        $[33] = t10;
    } else {
        t10 = $[33];
    }
    const t11 = yAxisLabel || "Y";
    let t12;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            textAnchor: "middle"
        };
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            dataKey: "y",
            label: {
                value: t11,
                angle: -90,
                position: "insideLeft",
                style: t12
            },
            tickMargin: 8,
            type: "number"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[35] = t11;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltip"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                hideLabel: true
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
                lineNumber: 202,
                columnNumber: 34
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== datasets) {
        t15 = datasets.map(_temp5);
        $[38] = datasets;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== calculateRegressionLine || $[41] !== regressionLineData || $[42] !== (regressionLineStyle === null || regressionLineStyle === void 0 ? void 0 : regressionLineStyle.color) || $[43] !== (regressionLineStyle === null || regressionLineStyle === void 0 ? void 0 : regressionLineStyle.strokeDasharray)) {
        t16 = regressionLineData && calculateRegressionLine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            activeDot: false,
            data: regressionLineData,
            dataKey: "y",
            dot: false,
            stroke: (regressionLineStyle === null || regressionLineStyle === void 0 ? void 0 : regressionLineStyle.color) || "var(--chart-5)",
            strokeDasharray: regressionLineStyle === null || regressionLineStyle === void 0 ? void 0 : regressionLineStyle.strokeDasharray,
            strokeWidth: 2,
            type: "linear"
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 217,
            columnNumber: 60
        }, this);
        $[40] = calculateRegressionLine;
        $[41] = regressionLineData;
        $[42] = regressionLineStyle === null || regressionLineStyle === void 0 ? void 0 : regressionLineStyle.color;
        $[43] = regressionLineStyle === null || regressionLineStyle === void 0 ? void 0 : regressionLineStyle.strokeDasharray;
        $[44] = t16;
    } else {
        t16 = $[44];
    }
    let t17;
    if ($[45] !== datasets || $[46] !== regressionParams || $[47] !== showResiduals) {
        t17 = showResiduals && regressionParams && datasets.flatMap((dataset_1)=>dataset_1.points.map((point, index)=>{
                const yPredicted = regressionParams.m * point.x + regressionParams.b;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                    ifOverflow: "visible",
                    segment: [
                        {
                            x: point.x,
                            y: point.y
                        },
                        {
                            x: point.x,
                            y: yPredicted
                        }
                    ],
                    stroke: dataset_1.color,
                    strokeDasharray: "2 2"
                }, "".concat(dataset_1.name, "-residual-").concat(index), false, {
                    fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
                    lineNumber: 230,
                    columnNumber: 14
                }, this);
            }));
        $[45] = datasets;
        $[46] = regressionParams;
        $[47] = showResiduals;
        $[48] = t17;
    } else {
        t17 = $[48];
    }
    let t18;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegend"], {
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartLegendContent"], {
                className: "mt-6"
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
                lineNumber: 247,
                columnNumber: 33
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[49] = t18;
    } else {
        t18 = $[49];
    }
    let t19;
    if ($[50] !== t10 || $[51] !== t13 || $[52] !== t15 || $[53] !== t16 || $[54] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
            accessibilityLayer: true,
            children: [
                t5,
                t10,
                t13,
                t14,
                t15,
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[50] = t10;
        $[51] = t13;
        $[52] = t15;
        $[53] = t16;
        $[54] = t17;
        $[55] = t19;
    } else {
        t19 = $[55];
    }
    let t20;
    if ($[56] !== chartConfig || $[57] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                children: t19
            }, void 0, false, {
                fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
                lineNumber: 266,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[56] = chartConfig;
        $[57] = t19;
        $[58] = t20;
    } else {
        t20 = $[58];
    }
    let t21;
    if ($[59] !== t20 || $[60] !== t4) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t4,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[59] = t20;
        $[60] = t4;
        $[61] = t21;
    } else {
        t21 = $[61];
    }
    return t21;
}
_c = ScatterDiagram;
function _temp5(dataset_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
        data: dataset_0.points,
        fill: dataset_0.color,
        name: dataset_0.name
    }, dataset_0.name, false, {
        fileName: "[project]/packages/design-system/components/contents/scatter-diagram.tsx",
        lineNumber: 285,
        columnNumber: 10
    }, this);
}
function _temp4(value) {
    return value.toString();
}
function _temp3(p) {
    return p.x;
}
function _temp2(d) {
    return d.points;
}
function _temp(acc, dataset) {
    acc[dataset.name] = {
        label: dataset.name,
        color: dataset.color
    };
    return acc;
}
function calculateLeastSquares(points) {
    const n = points.length;
    if (n < 2) {
        return null;
    }
    let sumX = 0;
    let sumY = 0;
    let sumXy = 0;
    let sumX2 = 0;
    for (const p of points){
        sumX += p.x;
        sumY += p.y;
        sumXy += p.x * p.y;
        sumX2 += p.x * p.x;
    }
    const denominator = n * sumX2 - sumX * sumX;
    if (denominator === 0) {
        return null;
    }
    const m = (n * sumXy - sumX * sumY) / denominator;
    const b = (sumY - m * sumX) / n;
    return {
        m,
        b
    };
}
var _c;
__turbopack_context__.k.register(_c, "ScatterDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7dbe3613._.js.map