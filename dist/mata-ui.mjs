import { defineComponent as K, computed as $, createElementBlock as s, openBlock as a, normalizeClass as b, renderSlot as p, ref as S, createCommentVNode as h, createElementVNode as r, withKeys as W, onMounted as Q, onUnmounted as R, createVNode as E, toDisplayString as g, Transition as L, withCtx as F, withDirectives as H, withModifiers as I, vModelText as J, Fragment as C, renderList as M, createTextVNode as B, getCurrentInstance as N, normalizeStyle as O, watch as G, resolveComponent as U, createBlock as D, Teleport as q, mergeProps as A } from "vue";
const X = ["disabled"], Y = /* @__PURE__ */ K({
  __name: "MButton",
  props: {
    type: { default: "default" },
    size: { default: "medium" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: k }) {
    const n = e, y = k, u = (i) => {
      n.disabled || y("click", i);
    }, m = $(() => {
      switch (n.type) {
        case "primary":
          return "bg-[#4CB9CF] text-white hover:bg-[#3da8be] active:bg-[#2f97ad]";
        case "danger":
          return "bg-[#FF6B6B] text-white hover:bg-[#ff5252] active:bg-[#e04848]";
        case "text":
          return "text-[#4CB9CF] hover:text-[#3da8be] hover:bg-[#4CB9CF]/10";
        default:
          return "bg-white border border-gray-300 text-gray-600 hover:border-[#4CB9CF] hover:text-[#4CB9CF]";
      }
    }), c = $(() => {
      switch (n.size) {
        case "small":
          return "px-2 py-1 text-xs";
        case "large":
          return "px-6 py-3 text-base";
        default:
          return "px-4 py-2 text-sm";
      }
    });
    return (i, x) => (a(), s("button", {
      class: b([
        "inline-flex items-center justify-center gap-1 rounded transition-all font-medium",
        m.value,
        c.value,
        { "opacity-50 cursor-not-allowed": e.disabled }
      ]),
      disabled: e.disabled,
      onClick: u
    }, [
      p(i.$slots, "default")
    ], 10, X));
  }
}), Z = { class: "relative" }, _ = {
  key: 0,
  class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
}, ee = ["value", "type", "placeholder", "disabled", "readonly"], te = {
  key: 2,
  class: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
}, le = /* @__PURE__ */ K({
  __name: "MInput",
  props: {
    modelValue: {},
    type: { default: "text" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "focus", "blur", "enter", "clear"],
  setup(e, { expose: k, emit: n }) {
    const y = n, u = S(), m = (i) => {
      const x = i.target;
      y("update:modelValue", x.value);
    }, c = () => {
      var i;
      y("update:modelValue", ""), y("clear"), (i = u.value) == null || i.focus();
    };
    return k({
      focus: () => {
        var i;
        return (i = u.value) == null ? void 0 : i.focus();
      },
      blur: () => {
        var i;
        return (i = u.value) == null ? void 0 : i.blur();
      }
    }), (i, x) => (a(), s("div", Z, [
      i.$slots.prefix ? (a(), s("div", _, [
        p(i.$slots, "prefix")
      ])) : h("", !0),
      r("input", {
        ref_key: "inputRef",
        ref: u,
        value: e.modelValue,
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        readonly: e.readonly,
        class: b([
          "w-full border rounded-lg text-sm transition-all focus:outline-none",
          i.$slots.prefix ? "pl-10" : "pl-4",
          e.clearable && e.modelValue ? "pr-10" : "pr-4",
          "py-2",
          e.disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : "bg-white",
          e.error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#FF9900]"
        ]),
        onInput: m,
        onFocus: x[0] || (x[0] = (v) => i.$emit("focus", v)),
        onBlur: x[1] || (x[1] = (v) => i.$emit("blur", v)),
        onKeyup: x[2] || (x[2] = W((v) => i.$emit("enter", v), ["enter"]))
      }, null, 42, ee),
      e.clearable && e.modelValue && !e.disabled ? (a(), s("button", {
        key: 1,
        class: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
        onClick: c
      }, [...x[3] || (x[3] = [
        r("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          r("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M6 18L18 6M6 6l12 12"
          })
        ], -1)
      ])])) : h("", !0),
      i.$slots.suffix && !(e.clearable && e.modelValue) ? (a(), s("div", te, [
        p(i.$slots, "suffix")
      ])) : h("", !0)
    ]));
  }
}), ne = {
  key: 0,
  class: "absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto"
}, ae = {
  key: 0,
  class: "p-2 border-b border-gray-100"
}, oe = { class: "py-1" }, se = ["onClick"], re = {
  key: 0,
  class: "px-4 py-3 text-sm text-gray-400 text-center"
}, ie = /* @__PURE__ */ K({
  __name: "MSelect",
  props: {
    modelValue: {},
    options: {},
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    placeholder: { default: "请选择" },
    disabled: { type: Boolean, default: !1 },
    filterable: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: k }) {
    const n = e, y = k, u = S(), m = S(!1), c = S(""), i = $(() => {
      const t = n.options.find((l) => l[n.valueKey] === n.modelValue);
      return t ? t[n.labelKey] : "";
    }), x = $(() => {
      if (!n.filterable || !c.value)
        return n.options;
      const t = c.value.toLowerCase();
      return n.options.filter(
        (l) => String(l[n.labelKey]).toLowerCase().includes(t)
      );
    }), v = () => {
      n.disabled || (m.value = !m.value, m.value || (c.value = ""));
    }, d = (t) => {
      t.disabled || (y("update:modelValue", t[n.valueKey]), y("change", t[n.valueKey], t), m.value = !1, c.value = "");
    }, f = (t) => {
      u.value && !u.value.contains(t.target) && (m.value = !1, c.value = "");
    };
    return Q(() => {
      document.addEventListener("click", f);
    }), R(() => {
      document.removeEventListener("click", f);
    }), (t, l) => (a(), s("div", {
      class: "relative",
      ref_key: "selectRef",
      ref: u
    }, [
      r("div", {
        class: b([
          "flex items-center justify-between px-4 py-2 border rounded-lg cursor-pointer transition-all",
          e.disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white hover:border-[#FF9900]",
          m.value ? "border-[#FF9900] ring-2 ring-[#FF9900]/20" : "border-gray-300",
          e.error ? "border-red-500" : ""
        ]),
        onClick: v
      }, [
        r("span", {
          class: b(["text-sm truncate", i.value ? "text-gray-700" : "text-gray-400"])
        }, g(i.value || e.placeholder), 3),
        (a(), s("svg", {
          class: b(["w-4 h-4 text-gray-400 transition-transform", m.value ? "rotate-180" : ""]),
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [...l[2] || (l[2] = [
          r("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 9l-7 7-7-7"
          }, null, -1)
        ])], 2))
      ], 2),
      E(L, { name: "select-dropdown" }, {
        default: F(() => [
          m.value ? (a(), s("div", ne, [
            e.filterable ? (a(), s("div", ae, [
              H(r("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (o) => c.value = o),
                type: "text",
                placeholder: "搜索...",
                class: "w-full px-3 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#FF9900]",
                onClick: l[1] || (l[1] = I(() => {
                }, ["stop"]))
              }, null, 512), [
                [J, c.value]
              ])
            ])) : h("", !0),
            r("div", oe, [
              (a(!0), s(C, null, M(x.value, (o) => (a(), s("div", {
                key: o[e.valueKey],
                class: b([
                  "px-4 py-2 text-sm cursor-pointer transition-colors",
                  e.modelValue === o[e.valueKey] ? "bg-[#FF9900]/10 text-[#FF9900]" : "text-gray-700 hover:bg-[#FF9900]/10 hover:text-[#FF9900]",
                  o.disabled ? "opacity-50 cursor-not-allowed" : ""
                ]),
                onClick: (w) => d(o)
              }, [
                p(t.$slots, "option", { option: o }, () => [
                  B(g(o[e.labelKey]), 1)
                ], !0)
              ], 10, se))), 128)),
              x.value.length ? h("", !0) : (a(), s("div", re, " 暂无数据 "))
            ])
          ])) : h("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
}), T = (e, k) => {
  const n = e.__vccOpts || e;
  for (const [y, u] of k)
    n[y] = u;
  return n;
}, de = /* @__PURE__ */ T(ie, [["__scopeId", "data-v-c5c7352f"]]), ce = { class: "bg-white rounded-lg overflow-hidden shadow-sm relative" }, ue = {
  key: 0,
  class: "absolute inset-0 bg-white/70 flex items-center justify-center z-10"
}, fe = { class: "text-[#4CB9CF]" }, ye = { class: "overflow-x-auto" }, me = { class: "w-full" }, he = { class: "bg-[#FFF1DD]" }, ge = {
  key: 0,
  class: "w-12 px-4 py-3"
}, xe = ["checked", "indeterminate"], ve = {
  key: 1,
  class: "w-16 px-4 py-3 text-left text-sm font-medium text-gray-600 whitespace-nowrap"
}, be = ["onClick"], ke = {
  key: 0,
  class: "px-4 py-3"
}, pe = ["checked", "onChange"], we = {
  key: 1,
  class: "px-4 py-3 text-sm text-gray-600 whitespace-nowrap"
}, Ce = { key: 0 }, $e = ["colspan"], Fe = { class: "flex flex-col items-center gap-2" }, Me = /* @__PURE__ */ K({
  __name: "MTable",
  props: {
    columns: {},
    data: {},
    rowKey: { default: "id" },
    loading: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !1 },
    showIndex: { type: Boolean, default: !1 },
    selectable: { type: Boolean, default: !1 },
    selectedKeys: { default: () => [] }
  },
  emits: ["row-click", "select", "select-all"],
  setup(e, { emit: k }) {
    const n = e, y = k, u = N(), m = (d) => {
      var t;
      return (t = u == null ? void 0 : u.proxy) != null && t.$t ? u.proxy.$t(d) : {
        "common.loading": "Loading...",
        "common.serialNumber": "#",
        "common.noData": "No Data"
      }[d] || d;
    }, c = $(() => n.data.length ? n.data.every((d) => n.selectedKeys.includes(d[n.rowKey || "id"])) : !1), i = $(() => {
      if (!n.data.length) return !1;
      const d = n.data.filter((f) => n.selectedKeys.includes(f[n.rowKey || "id"])).length;
      return d > 0 && d < n.data.length;
    }), x = (d) => {
      const f = d[n.rowKey || "id"];
      let t, l;
      n.selectedKeys.includes(f) ? (t = n.selectedKeys.filter((o) => o !== f), l = n.data.filter((o) => t.includes(o[n.rowKey || "id"]))) : (t = [...n.selectedKeys, f], l = n.data.filter((o) => t.includes(o[n.rowKey || "id"]))), y("select", t, l);
    }, v = (d) => {
      const f = d.target.checked;
      if (y("select-all", f), f) {
        const t = n.data.map((l) => l[n.rowKey || "id"]);
        y("select", t, n.data);
      } else
        y("select", [], []);
    };
    return (d, f) => (a(), s("div", ce, [
      E(L, { name: "fade" }, {
        default: F(() => [
          e.loading ? (a(), s("div", ue, [
            r("div", fe, g(m("common.loading")), 1)
          ])) : h("", !0)
        ]),
        _: 1
      }),
      r("div", ye, [
        r("table", me, [
          r("thead", he, [
            r("tr", null, [
              e.selectable ? (a(), s("th", ge, [
                r("input", {
                  type: "checkbox",
                  checked: c.value,
                  indeterminate: i.value,
                  onChange: v,
                  class: "w-4 h-4 rounded border-gray-300 accent-[#FF9900] focus:ring-[#FF9900]"
                }, null, 40, xe)
              ])) : h("", !0),
              e.showIndex ? (a(), s("th", ve, g(m("common.serialNumber")), 1)) : h("", !0),
              (a(!0), s(C, null, M(e.columns, (t) => (a(), s("th", {
                key: t.key,
                style: O({ width: t.width, minWidth: t.minWidth }),
                class: b([
                  "px-4 py-3 text-sm font-medium text-gray-600",
                  t.align === "center" ? "text-center" : t.align === "right" ? "text-right" : "text-left"
                ])
              }, g(t.title), 7))), 128))
            ])
          ]),
          r("tbody", null, [
            (a(!0), s(C, null, M(e.data, (t, l) => (a(), s("tr", {
              key: e.rowKey ? t[e.rowKey] : l,
              class: b([
                "border-t border-gray-100 transition-colors",
                e.stripe && l % 2 === 1 ? "bg-gray-50" : "",
                "hover:bg-[#4CB9CF]/5"
              ]),
              onClick: (o) => d.$emit("row-click", t, l)
            }, [
              e.selectable ? (a(), s("td", ke, [
                r("input", {
                  type: "checkbox",
                  checked: e.selectedKeys.includes(t[e.rowKey || "id"]),
                  onChange: (o) => x(t),
                  onClick: f[0] || (f[0] = I(() => {
                  }, ["stop"])),
                  class: "w-4 h-4 rounded border-gray-300 accent-[#FF9900] focus:ring-[#FF9900]"
                }, null, 40, pe)
              ])) : h("", !0),
              e.showIndex ? (a(), s("td", we, g(l + 1), 1)) : h("", !0),
              (a(!0), s(C, null, M(e.columns, (o) => (a(), s("td", {
                key: o.key,
                class: b([
                  "px-4 py-3 text-sm text-gray-600",
                  o.align === "center" ? "text-center" : o.align === "right" ? "text-right" : "text-left"
                ])
              }, [
                p(d.$slots, o.key, {
                  row: t,
                  index: l,
                  value: t[o.key]
                }, () => [
                  B(g(t[o.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 10, be))), 128)),
            !e.data || !e.data.length ? (a(), s("tr", Ce, [
              r("td", {
                colspan: (e.selectable ? 1 : 0) + (e.showIndex ? 1 : 0) + e.columns.length,
                class: "px-4 py-12 text-center text-gray-400"
              }, [
                p(d.$slots, "empty", {}, () => [
                  r("div", Fe, [
                    f[1] || (f[1] = r("svg", {
                      class: "w-12 h-12 text-gray-300",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      r("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "1",
                        d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      })
                    ], -1)),
                    r("span", null, g(m("common.noData")), 1)
                  ])
                ], !0)
              ], 8, $e)
            ])) : h("", !0)
          ])
        ])
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ T(Me, [["__scopeId", "data-v-1279379d"]]), Be = {
  key: 0,
  class: "fixed inset-0 z-[1000] flex items-center justify-center p-4"
}, Pe = {
  key: 0,
  class: "flex items-center justify-between px-6 py-4 border-b border-gray-100"
}, Ve = { class: "text-lg font-medium text-gray-800" }, je = {
  key: 1,
  class: "flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100"
}, ze = /* @__PURE__ */ K({
  __name: "MModal",
  props: {
    modelValue: { type: Boolean },
    title: { default: "" },
    size: { default: "medium" },
    customWidth: {},
    showClose: { type: Boolean, default: !0 },
    showFooter: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    showConfirm: { type: Boolean, default: !0 },
    cancelText: { default: "取消" },
    confirmText: { default: "确定" },
    confirmDisabled: { type: Boolean, default: !1 },
    closeOnClickModal: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    contentClass: { default: "" }
  },
  emits: ["update:modelValue", "confirm", "cancel", "open", "close"],
  setup(e, { emit: k }) {
    const y = (() => {
      if (!window.__modalManager__) {
        const f = {
          stack: [],
          initialized: !1,
          init() {
            this.initialized || (this.initialized = !0, document.addEventListener("keydown", (t) => {
              if (t.key === "Escape" && this.stack.length > 0) {
                const l = this.stack[this.stack.length - 1];
                l && l.canClose && (t.preventDefault(), l.close());
              }
            }));
          },
          add(t) {
            this.stack.push(t);
          },
          remove(t) {
            const l = this.stack.findIndex((o) => o.id === t);
            l > -1 && this.stack.splice(l, 1);
          }
        };
        window.__modalManager__ = f;
      }
      return window.__modalManager__;
    })();
    y.init();
    const u = N(), m = (u == null ? void 0 : u.uid) || Date.now(), c = e, i = k, x = $(() => {
      switch (c.size) {
        case "small":
          return "max-w-sm";
        case "large":
          return "max-w-2xl";
        case "full":
          return "max-w-[90vw] max-h-[90vh]";
        default:
          return "max-w-md";
      }
    }), v = () => {
      i("update:modelValue", !1), i("cancel"), i("close");
    }, d = () => {
      i("confirm");
    };
    return G(() => c.modelValue, (f) => {
      f ? (i("open"), y.add({
        id: m,
        close: v,
        canClose: c.closeOnPressEscape
      }), document.body.style.overflow = "hidden") : (y.remove(m), y.stack.length === 0 && (document.body.style.overflow = ""));
    }), R(() => {
      y.remove(m), y.stack.length === 0 && (document.body.style.overflow = "");
    }), (f, t) => {
      const l = U("MButton");
      return a(), D(q, { to: "body" }, [
        E(L, { name: "modal" }, {
          default: F(() => [
            e.modelValue ? (a(), s("div", Be, [
              r("div", {
                class: "absolute inset-0 bg-black/50 transition-opacity",
                onClick: t[0] || (t[0] = (o) => e.closeOnClickModal && v())
              }),
              r("div", {
                class: b([
                  "relative bg-white rounded-lg shadow-xl w-full transition-all",
                  x.value
                ]),
                style: O(e.customWidth ? { maxWidth: e.customWidth } : {})
              }, [
                (e.title || f.$slots.header) && e.showClose !== !1 ? (a(), s("div", Pe, [
                  p(f.$slots, "header", {}, () => [
                    r("h3", Ve, g(e.title), 1)
                  ], !0),
                  e.showClose ? (a(), s("button", {
                    key: 0,
                    class: "text-gray-400 hover:text-gray-600 transition-colors p-1 rounded hover:bg-gray-100",
                    onClick: v
                  }, [...t[1] || (t[1] = [
                    r("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      r("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    ], -1)
                  ])])) : h("", !0)
                ])) : h("", !0),
                r("div", {
                  class: b(["px-6 py-4", e.contentClass])
                }, [
                  p(f.$slots, "default", {}, void 0, !0)
                ], 2),
                e.showFooter ? (a(), s("div", je, [
                  p(f.$slots, "footer", {}, () => [
                    e.showCancel ? (a(), D(l, {
                      key: 0,
                      onClick: v
                    }, {
                      default: F(() => [
                        B(g(e.cancelText), 1)
                      ]),
                      _: 1
                    })) : h("", !0),
                    e.showConfirm ? (a(), D(l, {
                      key: 1,
                      type: "primary",
                      disabled: e.confirmDisabled,
                      onClick: d
                    }, {
                      default: F(() => [
                        B(g(e.confirmText), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])) : h("", !0)
                  ], !0)
                ])) : h("", !0)
              ], 6)
            ])) : h("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
}), Se = /* @__PURE__ */ T(ze, [["__scopeId", "data-v-92d64f98"]]), Te = { class: "flex items-center justify-between flex-wrap gap-4" }, De = {
  key: 0,
  class: "text-sm text-gray-500"
}, Ie = { class: "font-medium text-gray-700" }, Ee = { class: "flex items-center gap-2" }, Le = {
  key: 0,
  class: "flex items-center gap-2"
}, Ne = ["value"], Oe = ["value"], Ae = ["disabled"], We = {
  key: 0,
  class: "px-2 text-gray-400"
}, Re = ["onClick"], He = ["disabled"], Je = {
  key: 1,
  class: "flex items-center gap-2 ml-2"
}, Ue = { class: "text-sm text-gray-500" }, Qe = ["max"], Ge = { class: "text-sm text-gray-500" }, qe = /* @__PURE__ */ K({
  __name: "MPagination",
  props: {
    currentPage: {},
    pageSize: {},
    total: {},
    pageSizes: { default: () => [10, 20, 50, 100] },
    showTotal: { type: Boolean, default: !0 },
    showSizeChanger: { type: Boolean, default: !0 },
    showQuickJumper: { type: Boolean, default: !1 },
    pagerCount: { default: 7 }
  },
  emits: ["update:currentPage", "update:pageSize", "change"],
  setup(e, { emit: k }) {
    const n = e, y = k, u = N(), m = (t) => {
      var o;
      return (o = u == null ? void 0 : u.proxy) != null && o.$t ? u.proxy.$t(t) : {
        "pagination.total": "Total",
        "pagination.items": "Items",
        "pagination.itemsPerPage": " / Page",
        "pagination.jumpTo": "Go to",
        "pagination.page": "Page"
      }[t] || t;
    }, c = S(n.currentPage), i = $(() => Math.ceil(n.total / n.pageSize) || 1), x = $(() => {
      const t = [], l = i.value, o = n.currentPage, w = n.pagerCount;
      if (l <= w)
        for (let P = 1; P <= l; P++)
          t.push(P);
      else {
        const P = Math.floor(w / 2);
        let V = o - P, j = o + P;
        V <= 1 && (V = 1, j = w - 1), j >= l && (j = l, V = l - w + 2), V > 1 && (t.push(1), V > 2 && t.push("..."));
        for (let z = V; z <= j; z++)
          z > 0 && z <= l && t.push(z);
        j < l && (j < l - 1 && t.push("..."), t.push(l));
      }
      return t;
    }), v = (t) => {
      t < 1 || t > i.value || t === n.currentPage || (y("update:currentPage", t), y("change", t, n.pageSize), c.value = t);
    }, d = (t) => {
      const l = Number(t.target.value);
      y("update:pageSize", l), y("update:currentPage", 1), y("change", 1, l);
    }, f = () => {
      c.value && c.value >= 1 && c.value <= i.value && v(c.value);
    };
    return (t, l) => (a(), s("div", Te, [
      e.showTotal ? (a(), s("div", De, [
        B(g(m("pagination.total")) + " ", 1),
        r("span", Ie, g(e.total), 1),
        B(" " + g(m("pagination.items")), 1)
      ])) : h("", !0),
      r("div", Ee, [
        e.showSizeChanger ? (a(), s("div", Le, [
          r("select", {
            value: e.pageSize,
            class: "px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#FF9900]",
            onChange: d
          }, [
            (a(!0), s(C, null, M(e.pageSizes, (o) => (a(), s("option", {
              key: o,
              value: o
            }, g(o) + " " + g(m("pagination.itemsPerPage")), 9, Oe))), 128))
          ], 40, Ne)
        ])) : h("", !0),
        r("button", {
          disabled: e.currentPage <= 1,
          class: b([
            "w-8 h-8 flex items-center justify-center rounded border transition-colors",
            e.currentPage <= 1 ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-300 text-gray-600 hover:border-[#FF9900] hover:text-[#FF9900]"
          ]),
          onClick: l[0] || (l[0] = (o) => v(e.currentPage - 1))
        }, [...l[3] || (l[3] = [
          r("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            r("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })
          ], -1)
        ])], 10, Ae),
        (a(!0), s(C, null, M(x.value, (o) => (a(), s(C, { key: o }, [
          o === "..." ? (a(), s("span", We, "...")) : (a(), s("button", {
            key: 1,
            class: b([
              "w-8 h-8 flex items-center justify-center rounded border text-sm transition-colors",
              o === e.currentPage ? "bg-[#FF9900] text-white border-[#FF9900]" : "border-gray-300 text-gray-600 hover:border-[#FF9900] hover:text-[#FF9900]"
            ]),
            onClick: (w) => v(o)
          }, g(o), 11, Re))
        ], 64))), 128)),
        r("button", {
          disabled: e.currentPage >= i.value,
          class: b([
            "w-8 h-8 flex items-center justify-center rounded border transition-colors",
            e.currentPage >= i.value ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-300 text-gray-600 hover:border-[#FF9900] hover:text-[#FF9900]"
          ]),
          onClick: l[1] || (l[1] = (o) => v(e.currentPage + 1))
        }, [...l[4] || (l[4] = [
          r("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            r("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ])], 10, He),
        e.showQuickJumper ? (a(), s("div", Je, [
          r("span", Ue, g(m("pagination.jumpTo")), 1),
          H(r("input", {
            "onUpdate:modelValue": l[2] || (l[2] = (o) => c.value = o),
            type: "number",
            min: "1",
            max: i.value,
            class: "w-12 px-2 py-1 text-sm text-center border border-gray-300 rounded focus:outline-none focus:border-[#FF9900]",
            onKeyup: W(f, ["enter"])
          }, null, 40, Qe), [
            [
              J,
              c.value,
              void 0,
              { number: !0 }
            ]
          ]),
          r("span", Ge, g(m("pagination.page")), 1)
        ])) : h("", !0)
      ])
    ]));
  }
}), Xe = /* @__PURE__ */ T(qe, [["__scopeId", "data-v-213a4cf7"]]), Ye = ["disabled", "onClick"], Ze = { class: "flex items-center justify-center gap-2" }, _e = {
  key: 0,
  class: "inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-xs bg-red-500 text-white rounded-full"
}, et = /* @__PURE__ */ K({
  __name: "MTabs",
  props: {
    modelValue: {},
    tabs: {},
    block: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: k }) {
    const n = k, y = (u) => {
      u.disabled || (n("update:modelValue", u.value), n("change", u.value));
    };
    return (u, m) => (a(), s("div", {
      class: b(["flex gap-2 lg:gap-[15px]", e.block ? "w-full" : ""])
    }, [
      (a(!0), s(C, null, M(e.tabs, (c) => (a(), s("button", {
        key: c.value,
        disabled: c.disabled,
        class: b([
          "w-[100px] sm:w-[120px] lg:w-[142px] h-[40px] lg:h-[50px] text-[14px] lg:text-[16px] font-medium transition-all rounded-[10px]",
          // 选中状态
          e.modelValue === c.value ? "bg-[#FF9900] text-white" : "bg-[#FAFAFA] text-[#4D4D4D] hover:opacity-90 border border-[#E5E5E5]",
          // 禁用状态
          c.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          // 撑满宽度
          e.block ? "flex-1" : ""
        ]),
        onClick: (i) => y(c)
      }, [
        r("span", Ze, [
          p(u.$slots, `tab-${c.value}`, { tab: c }, () => [
            B(g(c.label), 1)
          ]),
          c.badge !== void 0 ? (a(), s("span", _e, g(c.badge), 1)) : h("", !0)
        ])
      ], 10, Ye))), 128))
    ], 2));
  }
}), tt = { class: "tree" }, lt = ["onClick"], nt = { class: "flex items-center gap-2 flex-1 min-w-0" }, at = ["onClick"], ot = {
  key: 1,
  class: "w-4 flex-shrink-0"
}, st = {
  key: 0,
  class: "flex-shrink-0"
}, rt = { class: "truncate text-[16px] text-[#4D4D4D]" }, it = { key: 0 }, dt = /* @__PURE__ */ K({
  __name: "MTree",
  props: {
    data: {},
    nodeKey: { default: "id" },
    labelKey: { default: "label" },
    childrenKey: { default: "children" },
    selectedKey: { default: null },
    expandedKeys: { default: () => [] },
    level: { default: 0 }
  },
  emits: ["select", "expand", "createClass"],
  setup(e, { emit: k }) {
    const n = e, y = k, u = (d) => n.expandedKeys.includes(d[n.nodeKey]), m = (d) => {
      y("select", d);
    }, c = (d) => {
      const f = d[n.nodeKey];
      y("expand", f, !u(d));
    }, i = (d) => {
      y("select", d);
    }, x = (d, f) => {
      y("expand", d, f);
    }, v = (d) => {
      y("createClass", d);
    };
    return (d, f) => {
      const t = U("MTree", !0);
      return a(), s("div", tt, [
        (a(!0), s(C, null, M(e.data, (l) => (a(), s("div", {
          key: l[e.nodeKey],
          class: "tree-node group"
        }, [
          r("div", {
            class: b([
              "flex items-center justify-between py-2 px-2 cursor-pointer rounded transition-colors",
              e.selectedKey === l[e.nodeKey] ? "bg-[#FFF3DD]" : "hover:bg-[#FFF3DD]"
            ]),
            style: O({ paddingLeft: `${e.level * 16 + 8}px` }),
            onClick: (o) => m(l)
          }, [
            r("div", nt, [
              l[e.childrenKey] !== void 0 ? (a(), s("span", {
                key: 0,
                class: "w-4 h-4 flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0",
                onClick: I((o) => c(l), ["stop"])
              }, [
                (a(), s("svg", {
                  class: b(["w-3 h-3 transition-transform", u(l) ? "rotate-90" : ""]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...f[1] || (f[1] = [
                  r("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M9 5l7 7-7 7"
                  }, null, -1)
                ])], 2))
              ], 8, at)) : (a(), s("span", ot)),
              p(d.$slots, "icon", {
                node: l,
                expanded: u(l)
              }, () => [
                l.icon ? (a(), s("span", st, g(l.icon), 1)) : h("", !0)
              ], !0),
              r("span", rt, g(l[e.labelKey]), 1)
            ]),
            r("div", {
              class: "flex items-center gap-1 flex-shrink-0",
              onClick: f[0] || (f[0] = I(() => {
              }, ["stop"]))
            }, [
              p(d.$slots, "actions", { node: l }, void 0, !0)
            ])
          ], 14, lt),
          E(L, { name: "tree-expand" }, {
            default: F(() => {
              var o;
              return [
                l[e.childrenKey] !== void 0 && u(l) ? (a(), s("div", it, [
                  (o = l[e.childrenKey]) != null && o.length ? (a(), D(t, {
                    key: 0,
                    data: l[e.childrenKey],
                    "node-key": e.nodeKey,
                    "label-key": e.labelKey,
                    "children-key": e.childrenKey,
                    "selected-key": e.selectedKey,
                    "expanded-keys": e.expandedKeys,
                    level: e.level + 1,
                    onSelect: i,
                    onExpand: x,
                    onCreateClass: v
                  }, {
                    icon: F((w) => [
                      p(d.$slots, "icon", A({ ref_for: !0 }, w), void 0, !0)
                    ]),
                    actions: F((w) => [
                      p(d.$slots, "actions", A({ ref_for: !0 }, w), void 0, !0)
                    ]),
                    _: 3
                  }, 8, ["data", "node-key", "label-key", "children-key", "selected-key", "expanded-keys", "level"])) : h("", !0)
                ])) : h("", !0)
              ];
            }),
            _: 2
          }, 1024)
        ]))), 128))
      ]);
    };
  }
}), ct = /* @__PURE__ */ T(dt, [["__scopeId", "data-v-2b4aae49"]]), ft = {
  install: (e) => {
    e.component("MButton", Y), e.component("MInput", le), e.component("MSelect", de), e.component("MTable", Ke), e.component("MModal", Se), e.component("MPagination", Xe), e.component("MTabs", et), e.component("MTree", ct);
  }
};
export {
  Y as MButton,
  le as MInput,
  Se as MModal,
  Xe as MPagination,
  de as MSelect,
  Ke as MTable,
  et as MTabs,
  ct as MTree,
  ft as default
};
