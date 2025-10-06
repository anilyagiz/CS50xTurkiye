module.exports = [
"[project]/packages/contents/_types/subject/material.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialBachelorSchema",
    ()=>MaterialBachelorSchema,
    "MaterialHighSchoolSchema",
    ()=>MaterialHighSchoolSchema,
    "MaterialListSchema",
    ()=>MaterialListSchema,
    "MaterialSchema",
    ()=>MaterialSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/schemas.js [app-rsc] (ecmascript)");
;
const MaterialListSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["array"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
    href: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](),
    items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["array"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](),
        href: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]()
    }))
}));
const MaterialHighSchoolSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enum"]([
    "mathematics",
    "physics",
    "chemistry",
    "biology",
    "geography",
    "economy",
    "history",
    "informatics",
    "geospatial",
    "sociology"
]);
const MaterialBachelorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enum"]([
    "ai-ds",
    "game-engineering",
    "computer-science",
    "technology-electro-medical",
    "political-science",
    "informatics-engineering",
    "international-relations"
]);
const MaterialSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["union"]([
    MaterialHighSchoolSchema,
    MaterialBachelorSchema
]);
}),
"[project]/packages/contents/_lib/subject/material.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMaterialIcon",
    ()=>getMaterialIcon,
    "getMaterialPath",
    ()=>getMaterialPath,
    "getMaterials",
    ()=>getMaterials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_types$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contents/_types/subject/material.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuitIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-rsc] (ecmascript) <export default as BrainCircuitIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CableIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cable.js [app-rsc] (ecmascript) <export default as CableIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartPieIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-rsc] (ecmascript) <export default as ChartPieIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-rsc] (ecmascript) <export default as CodeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeXmlIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-rsc] (ecmascript) <export default as CodeXmlIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$computer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/computer.js [app-rsc] (ecmascript) <export default as ComputerIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DraftingCompassIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/drafting-compass.js [app-rsc] (ecmascript) <export default as DraftingCompassIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__EarthIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-rsc] (ecmascript) <export default as EarthIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConicalIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-rsc] (ecmascript) <export default as FlaskConicalIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-rsc] (ecmascript) <export default as Gamepad2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HandshakeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-rsc] (ecmascript) <export default as HandshakeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HourglassIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hourglass.js [app-rsc] (ecmascript) <export default as HourglassIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LightbulbIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-rsc] (ecmascript) <export default as LightbulbIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrintIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paw-print.js [app-rsc] (ecmascript) <export default as PawPrintIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PiIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pi.js [app-rsc] (ecmascript) <export default as PiIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-rsc] (ecmascript) <export default as ScaleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$speech$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeechIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/speech.js [app-rsc] (ecmascript) <export default as SpeechIcon>");
;
;
function getMaterialPath(category, grade, material) {
    return `/subject/${category}/${grade}/${material}`;
}
async function getMaterials(path, locale) {
    try {
        // Strip leading slash if present for consistency
        const cleanPath = path.startsWith("/") ? path.substring(1) : path;
        const content = await __turbopack_context__.f({
            "@repo/contents/subject/high-school/10/biology/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/biology/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/biology/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/biology/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/biology/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/biology/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/chemistry/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/chemistry/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/chemistry/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/chemistry/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/chemistry/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/chemistry/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/history/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/history/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/history/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/history/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/history/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/history/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/mathematics/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/mathematics/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/mathematics/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/mathematics/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/mathematics/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/mathematics/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/physics/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/physics/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/physics/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/10/physics/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/10/physics/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/10/physics/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/biology/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/biology/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/biology/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/biology/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/biology/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/biology/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/chemistry/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/chemistry/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/chemistry/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/chemistry/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/chemistry/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/chemistry/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/economy/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/economy/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/economy/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/economy/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/economy/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/economy/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/geography/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/geography/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/geography/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/geography/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/geography/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/geography/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/history/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/history/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/history/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/history/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/history/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/history/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/mathematics/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/mathematics/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/mathematics/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/mathematics/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/mathematics/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/mathematics/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/physics/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/physics/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/physics/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/physics/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/physics/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/physics/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/sociology/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/sociology/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/sociology/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/11/sociology/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/11/sociology/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/11/sociology/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/biology/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/biology/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/biology/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/biology/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/biology/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/biology/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/chemistry/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/chemistry/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/chemistry/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/chemistry/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/chemistry/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/chemistry/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/economy/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/economy/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/economy/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/economy/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/economy/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/economy/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/geography/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/geography/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/geography/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/geography/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/geography/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/geography/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/history/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/history/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/history/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/history/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/history/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/history/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/mathematics/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/mathematics/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/mathematics/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/mathematics/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/mathematics/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/mathematics/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/physics/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/physics/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/physics/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/physics/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/physics/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/physics/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/sociology/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/sociology/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/sociology/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/high-school/12/sociology/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/high-school/12/sociology/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/high-school/12/sociology/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/university/bachelor/ai-ds/_data/en-material.ts": {
                id: ()=>"[project]/packages/contents/subject/university/bachelor/ai-ds/_data/en-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/university/bachelor/ai-ds/_data/en-material.ts [app-rsc] (ecmascript, async loader)")
            },
            "@repo/contents/subject/university/bachelor/ai-ds/_data/id-material.ts": {
                id: ()=>"[project]/packages/contents/subject/university/bachelor/ai-ds/_data/id-material.ts [app-rsc] (ecmascript, async loader)",
                module: ()=>__turbopack_context__.A("[project]/packages/contents/subject/university/bachelor/ai-ds/_data/id-material.ts [app-rsc] (ecmascript, async loader)")
            }
        }).import(`@repo/contents/${cleanPath}/_data/${locale}-material.ts`);
        const parsedContent = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_types$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MaterialListSchema"].parse(content.default);
        return parsedContent;
    } catch  {
        return [];
    }
}
function getMaterialIcon(material) {
    switch(material){
        case "mathematics":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PiIcon$3e$__["PiIcon"];
        case "physics":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DraftingCompassIcon$3e$__["DraftingCompassIcon"];
        case "chemistry":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConicalIcon$3e$__["FlaskConicalIcon"];
        case "biology":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrintIcon$3e$__["PawPrintIcon"];
        case "geography":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__EarthIcon$3e$__["EarthIcon"];
        case "economy":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartPieIcon$3e$__["ChartPieIcon"];
        case "history":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HourglassIcon$3e$__["HourglassIcon"];
        case "sociology":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$speech$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeechIcon$3e$__["SpeechIcon"];
        case "informatics":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeIcon$3e$__["CodeIcon"];
        case "geospatial":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"];
        case "ai-ds":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuitIcon$3e$__["BrainCircuitIcon"];
        case "game-engineering":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2Icon$3e$__["Gamepad2Icon"];
        case "political-science":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__["ScaleIcon"];
        case "computer-science":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeXmlIcon$3e$__["CodeXmlIcon"];
        case "technology-electro-medical":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CableIcon$3e$__["CableIcon"];
        case "informatics-engineering":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$computer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerIcon$3e$__["ComputerIcon"];
        case "international-relations":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HandshakeIcon$3e$__["HandshakeIcon"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LightbulbIcon$3e$__["LightbulbIcon"];
    }
}
}),
"[project]/packages/contents/subject/university/_data/subject.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSubjects",
    ()=>getSubjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_lib$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contents/_lib/subject/material.ts [app-rsc] (ecmascript)");
;
const BASE_PATH = "/subject/university";
const subjects = [
    {
        grade: [
            "bachelor"
        ],
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_lib$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMaterialIcon"])("ai-ds"),
        label: "ai-ds"
    },
    {
        grade: [
            "bachelor"
        ],
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_lib$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMaterialIcon"])("game-engineering"),
        label: "game-engineering"
    },
    {
        grade: [
            "bachelor"
        ],
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_lib$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMaterialIcon"])("computer-science"),
        label: "computer-science"
    },
    {
        grade: [
            "bachelor"
        ],
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_lib$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMaterialIcon"])("informatics-engineering"),
        label: "informatics-engineering"
    },
    {
        grade: [
            "bachelor"
        ],
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_lib$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMaterialIcon"])("technology-electro-medical"),
        label: "technology-electro-medical"
    },
    {
        grade: [
            "bachelor"
        ],
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_lib$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMaterialIcon"])("political-science"),
        label: "political-science"
    },
    {
        grade: [
            "bachelor"
        ],
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contents$2f$_lib$2f$subject$2f$material$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMaterialIcon"])("international-relations"),
        label: "international-relations"
    }
];
function getSubjects(grade) {
    const grades = new Set([
        "bachelor"
    ]);
    if (!grades.has(grade)) {
        return [];
    }
    return subjects.filter((subject)=>subject.grade.includes(grade)).map((subject)=>({
            icon: subject.icon,
            label: subject.label,
            href: `${BASE_PATH}/${grade}/${subject.label}`
        }));
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>BrainCircuit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
            key: "l5xja"
        }
    ],
    [
        "path",
        {
            d: "M9 13a4.5 4.5 0 0 0 3-4",
            key: "10igwf"
        }
    ],
    [
        "path",
        {
            d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
            key: "105sqy"
        }
    ],
    [
        "path",
        {
            d: "M3.477 10.896a4 4 0 0 1 .585-.396",
            key: "ql3yin"
        }
    ],
    [
        "path",
        {
            d: "M6 18a4 4 0 0 1-1.967-.516",
            key: "2e4loj"
        }
    ],
    [
        "path",
        {
            d: "M12 13h4",
            key: "1ku699"
        }
    ],
    [
        "path",
        {
            d: "M12 18h6a2 2 0 0 1 2 2v1",
            key: "105ag5"
        }
    ],
    [
        "path",
        {
            d: "M12 8h8",
            key: "1lhi5i"
        }
    ],
    [
        "path",
        {
            d: "M16 8V5a2 2 0 0 1 2-2",
            key: "u6izg6"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "13",
            r: ".5",
            key: "ry7gng"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "3",
            r: ".5",
            key: "1aiba7"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "21",
            r: ".5",
            key: "yhc1fs"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "8",
            r: ".5",
            key: "1e43v0"
        }
    ]
];
const BrainCircuit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("brain-circuit", __iconNode);
;
 //# sourceMappingURL=brain-circuit.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-rsc] (ecmascript) <export default as BrainCircuitIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrainCircuitIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/cable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Cable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",
            key: "trhst0"
        }
    ],
    [
        "path",
        {
            d: "M17 21v-2",
            key: "ds4u3f"
        }
    ],
    [
        "path",
        {
            d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",
            key: "1mo9zo"
        }
    ],
    [
        "path",
        {
            d: "M21 21v-2",
            key: "eo0ou"
        }
    ],
    [
        "path",
        {
            d: "M3 5V3",
            key: "1k5hjh"
        }
    ],
    [
        "path",
        {
            d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",
            key: "1dd30t"
        }
    ],
    [
        "path",
        {
            d: "M7 5V3",
            key: "1t1388"
        }
    ]
];
const Cable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("cable", __iconNode);
;
 //# sourceMappingURL=cable.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/cable.js [app-rsc] (ecmascript) <export default as CableIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CableIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cable.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ChartPie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
            key: "pzmjnu"
        }
    ],
    [
        "path",
        {
            d: "M21.21 15.89A10 10 0 1 1 8 2.83",
            key: "k2fpak"
        }
    ]
];
const ChartPie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("chart-pie", __iconNode);
;
 //# sourceMappingURL=chart-pie.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-rsc] (ecmascript) <export default as ChartPieIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartPieIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Code
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 18 6-6-6-6",
            key: "eg8j8"
        }
    ],
    [
        "path",
        {
            d: "m8 6-6 6 6 6",
            key: "ppft3o"
        }
    ]
];
const Code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("code", __iconNode);
;
 //# sourceMappingURL=code.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-rsc] (ecmascript) <export default as CodeIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>CodeXml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }
    ],
    [
        "path",
        {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }
    ],
    [
        "path",
        {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }
    ]
];
const CodeXml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("code-xml", __iconNode);
;
 //# sourceMappingURL=code-xml.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-rsc] (ecmascript) <export default as CodeXmlIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeXmlIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/computer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Computer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "14",
            height: "8",
            x: "5",
            y: "2",
            rx: "2",
            key: "wc9tft"
        }
    ],
    [
        "rect",
        {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2",
            key: "w68u3i"
        }
    ],
    [
        "path",
        {
            d: "M6 18h2",
            key: "rwmk9e"
        }
    ],
    [
        "path",
        {
            d: "M12 18h6",
            key: "aqd8w3"
        }
    ]
];
const Computer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("computer", __iconNode);
;
 //# sourceMappingURL=computer.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/computer.js [app-rsc] (ecmascript) <export default as ComputerIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputerIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$computer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$computer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/computer.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/drafting-compass.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>DraftingCompass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12.99 6.74 1.93 3.44",
            key: "iwagvd"
        }
    ],
    [
        "path",
        {
            d: "M19.136 12a10 10 0 0 1-14.271 0",
            key: "ppmlo4"
        }
    ],
    [
        "path",
        {
            d: "m21 21-2.16-3.84",
            key: "vylbct"
        }
    ],
    [
        "path",
        {
            d: "m3 21 8.02-14.26",
            key: "1ssaw4"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "2",
            key: "f1ur92"
        }
    ]
];
const DraftingCompass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("drafting-compass", __iconNode);
;
 //# sourceMappingURL=drafting-compass.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/drafting-compass.js [app-rsc] (ecmascript) <export default as DraftingCompassIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraftingCompassIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/drafting-compass.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Earth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
            key: "1djwo0"
        }
    ],
    [
        "path",
        {
            d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
            key: "1tzkfa"
        }
    ],
    [
        "path",
        {
            d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
            key: "14pb5j"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Earth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("earth", __iconNode);
;
 //# sourceMappingURL=earth.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-rsc] (ecmascript) <export default as EarthIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EarthIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>FlaskConical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
            key: "18mbvz"
        }
    ],
    [
        "path",
        {
            d: "M6.453 15h11.094",
            key: "3shlmq"
        }
    ],
    [
        "path",
        {
            d: "M8.5 2h7",
            key: "csnxdl"
        }
    ]
];
const FlaskConical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("flask-conical", __iconNode);
;
 //# sourceMappingURL=flask-conical.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-rsc] (ecmascript) <export default as FlaskConicalIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlaskConicalIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Gamepad2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "6",
            x2: "10",
            y1: "11",
            y2: "11",
            key: "1gktln"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "8",
            y1: "9",
            y2: "13",
            key: "qnk9ow"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "15.01",
            y1: "12",
            y2: "12",
            key: "krot7o"
        }
    ],
    [
        "line",
        {
            x1: "18",
            x2: "18.01",
            y1: "10",
            y2: "10",
            key: "1lcuu1"
        }
    ],
    [
        "path",
        {
            d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
            key: "mfqc10"
        }
    ]
];
const Gamepad2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("gamepad-2", __iconNode);
;
 //# sourceMappingURL=gamepad-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-rsc] (ecmascript) <export default as Gamepad2Icon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gamepad2Icon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Handshake
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m11 17 2 2a1 1 0 1 0 3-3",
            key: "efffak"
        }
    ],
    [
        "path",
        {
            d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
            key: "9pr0kb"
        }
    ],
    [
        "path",
        {
            d: "m21 3 1 11h-2",
            key: "1tisrp"
        }
    ],
    [
        "path",
        {
            d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
            key: "1uvwmv"
        }
    ],
    [
        "path",
        {
            d: "M3 4h8",
            key: "1ep09j"
        }
    ]
];
const Handshake = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("handshake", __iconNode);
;
 //# sourceMappingURL=handshake.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-rsc] (ecmascript) <export default as HandshakeIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandshakeIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Lightbulb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }
    ],
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ]
];
const Lightbulb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("lightbulb", __iconNode);
;
 //# sourceMappingURL=lightbulb.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-rsc] (ecmascript) <export default as LightbulbIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightbulbIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>MapPin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPinIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPinIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/paw-print.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>PawPrint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "11",
            cy: "4",
            r: "2",
            key: "vol9p0"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "8",
            r: "2",
            key: "17gozi"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "16",
            r: "2",
            key: "1v9bxh"
        }
    ],
    [
        "path",
        {
            d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
            key: "1ydw1z"
        }
    ]
];
const PawPrint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("paw-print", __iconNode);
;
 //# sourceMappingURL=paw-print.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/paw-print.js [app-rsc] (ecmascript) <export default as PawPrintIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PawPrintIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paw-print.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pi.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Pi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "9",
            x2: "9",
            y1: "4",
            y2: "20",
            key: "ovs5a5"
        }
    ],
    [
        "path",
        {
            d: "M4 7c0-1.7 1.3-3 3-3h13",
            key: "10pag4"
        }
    ],
    [
        "path",
        {
            d: "M18 20c-1.7 0-3-1.3-3-3V4",
            key: "1gaosr"
        }
    ]
];
const Pi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("pi", __iconNode);
;
 //# sourceMappingURL=pi.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pi.js [app-rsc] (ecmascript) <export default as PiIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pi.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Scale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "7g6ntu"
        }
    ],
    [
        "path",
        {
            d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "ijws7r"
        }
    ],
    [
        "path",
        {
            d: "M7 21h10",
            key: "1b0cd5"
        }
    ],
    [
        "path",
        {
            d: "M12 3v18",
            key: "108xh3"
        }
    ],
    [
        "path",
        {
            d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
            key: "3gwbw2"
        }
    ]
];
const Scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("scale", __iconNode);
;
 //# sourceMappingURL=scale.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-rsc] (ecmascript) <export default as ScaleIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/speech.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Speech
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
            key: "11atix"
        }
    ],
    [
        "path",
        {
            d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",
            key: "yol142"
        }
    ],
    [
        "path",
        {
            d: "M17 15a3.5 3.5 0 0 0-.025-4.975",
            key: "ssbmkc"
        }
    ]
];
const Speech = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("speech", __iconNode);
;
 //# sourceMappingURL=speech.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/speech.js [app-rsc] (ecmascript) <export default as SpeechIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpeechIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$speech$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$speech$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/speech.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_8f8b970f._.js.map