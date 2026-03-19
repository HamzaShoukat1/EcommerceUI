module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/Store/features/cartSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "clearCart",
    ()=>clearCart,
    "decreaseQty",
    ()=>decreaseQty,
    "default",
    ()=>__TURBOPACK__default__export__,
    "increaseQty",
    ()=>increaseQty,
    "removeFromCart",
    ()=>removeFromCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
};
// ✅ helper (clean way)
const calculateTotals = (state)=>{
    let amount = 0;
    let qty = 0;
    state.cartItems.forEach((item)=>{
        amount += item.price * item.quantity;
        qty += item.quantity;
    });
    state.totalAmount = amount;
    state.totalQuantity = qty;
};
const CartSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "cart",
    initialState,
    reducers: {
        // ✅ ADD TO CART
        addToCart: (state, action)=>{
            const item = action.payload;
            const existing = state.cartItems.find((i)=>i.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cartItems.push({
                    ...item,
                    quantity: 1
                });
            }
            calculateTotals(state);
        },
        // ✅ REMOVE FROM CART
        removeFromCart: (state, action)=>{
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item)=>item.id !== id);
            calculateTotals(state);
        },
        // ✅ CLEAR CART
        clearCart: (state)=>{
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        },
        increaseQty: (state, action)=>{
            const item = state.cartItems.find((i)=>i.id === action.payload);
            if (item) item.quantity++;
            calculateTotals(state);
        },
        decreaseQty: (state, action)=>{
            const item = state.cartItems.find((i)=>i.id === action.payload);
            if (item && item.quantity > 1) item.quantity--;
            calculateTotals(state);
        }
    }
});
const { addToCart, removeFromCart, clearCart, increaseQty, decreaseQty } = CartSlice.actions;
const __TURBOPACK__default__export__ = CartSlice.reducer;
}),
"[project]/app/Store/localstorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDataFromBrowwer",
    ()=>getDataFromBrowwer,
    "saveDatainBrowser",
    ()=>saveDatainBrowser
]);
const getDataFromBrowwer = ()=>{
    try {
        const serializedState = localStorage.getItem('cart');
        if (!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log('failer', err);
        return undefined;
    }
};
const saveDatainBrowser = (state)=>{
    try {
        localStorage.setItem('cart', JSON.stringify(state)); //Browsers only store strings in localStorage.
    } catch (err) {
        console.log('failed', err);
        return undefined;
    }
};
}),
"[project]/app/Store/Store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Store",
    ()=>Store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Store$2f$features$2f$cartSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Store/features/cartSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Store$2f$localstorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Store/localstorage.ts [app-ssr] (ecmascript)");
;
;
;
const persistedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Store$2f$localstorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataFromBrowwer"])();
const Store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        cart: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Store$2f$features$2f$cartSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    preloadedState: {
        cart: persistedState
    }
});
Store.subscribe(()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Store$2f$localstorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDatainBrowser"])(Store.getState().cart);
});
}),
"[project]/app/Store/provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Store$2f$Store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Store/Store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Store$2f$Store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/app/Store/provider.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16a0bb3a._.js.map