!
function(t, e) {
	"object" === typeof exports && "object" === typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define("vue-fixed-table", [], e) : "object" === typeof exports ? exports["vue-fixed-table"] = e() : t["vue-fixed-table"] = e()
}(this, function() {
	return function(t) {
		var e = {};

		function r(n) {
			if (e[n]) return e[n].exports;
			var i = e[n] = {
				i: n,
				l: false,
				exports: {}
			};
			t[n].call(i.exports, i, i.exports, r);
			i.l = true;
			return i.exports
		}
		r.m = t;
		r.c = e;
		r.d = function(t, e, n) {
			r.o(t, e) || Object.defineProperty(t, e, {
				configurable: false,
				enumerable: true,
				get: n
			})
		};
		r.n = function(t) {
			var e = t && t.__esModule ?
			function() {
				return t["default"]
			} : function() {
				return t
			};
			r.d(e, "a", e);
			return e
		};
		r.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		};
		r.p = "/dist/";
		return r(r.s = 29)
	}([function(t, e, r) {
		var n = r(23)("wks");
		var i = r(24);
		var o = r(1).Symbol;
		var s = "function" == typeof o;
		(t.exports = function(t) {
			return n[t] || (n[t] = s && o[t] || (s ? o : i)("Symbol." + t))
		}).store = n
	}, function(t) {
		var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = e)
	}, function(t, e, r) {
		var n = r(3);
		var i = r(12);
		t.exports = r(5) ?
		function(t, e, r) {
			return n.f(t, e, i(1, r))
		} : function(t, e, r) {
			t[e] = r;
			return t
		}
	}, function(t, e, r) {
		var n = r(4);
		var i = r(40);
		var o = r(41);
		var s = Object.defineProperty;
		e.f = r(5) ? Object.defineProperty : function(t, e, r) {
			n(t);
			e = o(e, true);
			n(r);
			if (i) try {
				return s(t, e, r)
			} catch (t) {}
			if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
			"value" in r && (t[e] = r.value);
			return t
		}
	}, function(t, e, r) {
		var n = r(11);
		t.exports = function(t) {
			if (!n(t)) throw TypeError(t + " is not an object!");
			return t
		}
	}, function(t, e, r) {
		t.exports = !r(18)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t) {
		var e = {}.hasOwnProperty;
		t.exports = function(t, r) {
			return e.call(t, r)
		}
	}, function(t) {
		t.exports = function(t, e, r, n, i) {
			var o;
			var s = t = t || {};
			var l = typeof t.
		default;
			if ("object" === l || "function" === l) {
				o = t;
				s = t.
			default
			}
			var a = "function" === typeof s ? s.options:
			s;
			if (e) {
				a.render = e.render;
				a.staticRenderFns = e.staticRenderFns
			}
			n && (a._scopeId = n);
			var c;
			if (i) {
				c = function(t) {
					(t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__);
					r && r.call(this, t);
					t && t._registeredComponents && t._registeredComponents.add(i)
				};
				a._ssrRegister = c
			} else r && (c = r);
			if (c) {
				var f = a.functional;
				var u = f ? a.render : a.beforeCreate;
				f ? a.render = function(t, e) {
					c.call(e);
					return u(t, e)
				} : a.beforeCreate = u ? [].concat(u, c) : [c]
			}
			return {
				esModule: o,
				exports: s,
				options: a
			}
		}
	}, function(t) {
		var e = Math.ceil;
		var r = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
		}
	}, function(t) {
		t.exports = function(t) {
			if (void 0 == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	}, function(t) {
		var e = t.exports = {
			version: "2.5.1"
		};
		"number" == typeof __e && (__e = e)
	}, function(t) {
		t.exports = function(t) {
			return "object" === typeof t ? null !== t : "function" === typeof t
		}
	}, function(t) {
		t.exports = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		}
	}, function(t) {
		t.exports = {}
	}, function(t, e, r) {
		var n = r(23)("keys");
		var i = r(24);
		t.exports = function(t) {
			return n[t] || (n[t] = i(t))
		}
	}, function(t, e) {
		"use strict";
		e["d"] = function() {
			return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
		};
		e["c"] = function() {
			return document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft
		};
		e["b"] = function(t) {
			let e;
			e = "string" === typeof t ? document.querySelectorAll(t) : t;
			let r = 0;
			(e = Array.prototype.slice.call(e, 0)).forEach(t = > {
				const e = t.offsetWidth;
				e > r && (r = e)
			});
			e.forEach(t = > {
				t.parentNode.style.width = r + "px"
			})
		};
		e["a"] = function(t, e) {
			const r = document.createElement("object");
			r.setAttribute("style", "position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;opacity: 0; pointer-events: none; z-index: -1;");
			r.onload = (() = > {
				r.contentDocument.defaultView.addEventListener("resize", e, false)
			});
			r.type = "text/html";
			t.appendChild(r);
			r.data = "about:blank";
			return r
		};
		e["g"] = function(t, e, r) {
			let n = null;
			const i = e || 200;
			return function(e) {
				n && window.clearTimeout(n);
				r && r.call(this);
				n = window.setTimeout(async() = > {
					await t.call(this, e);
					n = null
				}, i)
			}
		};
		e["f"] = function(t, e) {
			e || document;
			const r = e.querySelectorAll(t);
			return Array.prototype.slice.call(r, 0)
		};
		e["e"] = function(t, e) {
			if (!t || !e) return null;
			"float" === e && (e = "cssFloat");
			try {
				const r = document.defaultView.getComputedStyle(t, "");
				return t.style[e] || r ? r[e] : null
			} catch (r) {
				return t.style[e]
			}
		}
	}, function(t, e, r) {
		var n = r(1);
		var i = r(10);
		var o = r(17);
		var s = r(2);
		var l = function(t, e, r) {
				var a = t & l.F;
				var c = t & l.G;
				var f = t & l.S;
				var u = t & l.P;
				var h = t & l.B;
				var d = t & l.W;
				var v = c ? i : i[e] || (i[e] = {});
				var p = v["prototype"];
				var y = c ? n : f ? n[e] : (n[e] || {})["prototype"];
				var g, b, m;
				c && (r = e);
				for (g in r) {
					if ((b = !a && y && void 0 !== y[g]) && g in v) continue;
					m = b ? y[g] : r[g];
					v[g] = c && "function" != typeof y[g] ? r[g] : h && b ? o(m, n) : d && y[g] == m ?
					function(t) {
						var e = function(e, r, n) {
								if (this instanceof t) {
									switch (arguments.length) {
									case 0:
										return new t;
									case 1:
										return new t(e);
									case 2:
										return new t(e, r)
									}
									return new t(e, r, n)
								}
								return t.apply(this, arguments)
							};
						e["prototype"] = t["prototype"];
						return e
					}(m) : u && "function" == typeof m ? o(Function.call, m) : m;
					if (u) {
						(v.virtual || (v.virtual = {}))[g] = m;
						t & l.R && p && !p[g] && s(p, g, m)
					}
				}
			};
		l.F = 1;
		l.G = 2;
		l.S = 4;
		l.P = 8;
		l.B = 16;
		l.W = 32;
		l.U = 64;
		l.R = 128;
		t.exports = l
	}, function(t, e, r) {
		var n = r(39);
		t.exports = function(t, e, r) {
			n(t);
			if (void 0 === e) return t;
			switch (r) {
			case 1:
				return function(r) {
					return t.call(e, r)
				};
			case 2:
				return function(r, n) {
					return t.call(e, r, n)
				};
			case 3:
				return function(r, n, i) {
					return t.call(e, r, n, i)
				}
			}
			return function() {
				return t.apply(e, arguments)
			}
		}
	}, function(t) {
		t.exports = function(t) {
			try {
				return !!t()
			} catch (t) {
				return true
			}
		}
	}, function(t, e, r) {
		var n = r(11);
		var i = r(1).document;
		var o = n(i) && n(i.createElement);
		t.exports = function(t) {
			return o ? i.createElement(t) : {}
		}
	}, function(t, e, r) {
		var n = r(48);
		var i = r(9);
		t.exports = function(t) {
			return n(i(t))
		}
	}, function(t) {
		var e = {}.toString;
		t.exports = function(t) {
			return e.call(t).slice(8, -1)
		}
	}, function(t, e, r) {
		var n = r(8);
		var i = Math.min;
		t.exports = function(t) {
			return t > 0 ? i(n(t), 9007199254740991) : 0
		}
	}, function(t, e, r) {
		var n = r(1);
		var i = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
		t.exports = function(t) {
			return i[t] || (i[t] = {})
		}
	}, function(t) {
		var e = 0;
		var r = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
		}
	}, function(t) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(t, e, r) {
		var n = r(3).f;
		var i = r(6);
		var o = r(0)("toStringTag");
		t.exports = function(t, e, r) {
			t && !i(t = r ? t : t.prototype, o) && n(t, o, {
				configurable: true,
				value: e
			})
		}
	}, function(t, e, r) {
		var n = r(9);
		t.exports = function(t) {
			return Object(n(t))
		}
	}, function(t, e, r) {
		var n = r(7)(r(61), r(62), function() {
			r(60)
		}, null, null);
		t.exports = n.exports
	}, function(t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: true
		});
		var n = r(30);
		var i = r.n(n);
		var o = r(64);
		var s = r.n(o);
		var l = r(28);
		var a = r.n(l);
		e["default"] = {
			fixedTable: i.a,
			alignCell: s.a,
			scrollXbar: a.a
		}
	}, function(t, e, r) {
		var n = r(7)(r(32), r(63), function() {
			r(31)
		}, null, null);
		t.exports = n.exports
	}, function() {}, function(t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: true
		});
		var n = r(33);
		var i = r.n(n);
		var o = r(28);
		var s = r.n(o);
		var l = r(15);
		const a = navigator.userAgent;
		const c = /Firefox/.test(a);
		const f = -1 !== a.indexOf("Safari") && -1 === a.indexOf("Chrome");
		e["default"] = {
			components: {
				scrollxbar: s.a
			},
			props: {
				offsetLeft: {
					type: [String, Number],
				default:
					0
				},
				offsetTop: {
					type: [String, Number],
				default:
					0
				},
				scrollTarget: {},
				useTrans: Boolean,
				selfScroll: {
					type: Boolean,
				default:
					false
				}
			},
			data() {
				return {
					clientRect: {
						top: 0,
						left: 0,
						right: 0,
						bottom: 0
					},
					targetOffset: {
						top: 0,
						left: 0
					},
					fixed: {
						top: false,
						left: false,
						right: false
					},
					resizeObserver: void 0,
					hoverObserver: void 0,
					tbodyWidth: 0,
					tleftWidth: 0,
					tRightWidth: 0,
					topChanging: false,
					leftChanging: false,
					opacity: 1,
					scrolling: false,
					iframe: {}
				}
			},
			computed: {
				theadStyle() {
					return {
						transform: `translate3d(0px, $ {
							this.fixed.top && !this.topChanging ? -(this.clientRect.top - this.offsetTop) : 0
						}
						px, 1px)`
					}
				}, bodyStyle() {
					return {
						width: this.tbodyWidth + "px"
					}
				}, leftStyle() {
					return {
						transform: `translate3d($ {
							this.fixed.left && !this.leftChanging ? this.offsetLeft - this.clientRect.left : 0
						}
						px, 0px, 0px)`,
						width: "initial",
						opacity: this.offsetLeft - this.clientRect.left > this.tleftWidth ? this.opacity : 1
					}
				}, rightStyle() {
					return {
						transform: `translate3d($ {
							this.leftChanging ? 0 : -this.clientRect.right
						}
						px, 0px, 0px)`,
						width: "initial",
						opacity: this.opacity
					}
				}, cornerStyle() {
					return {
						transform: `translate3d(0px, $ {
							this.fixed.top && !this.topChanging ? -(this.clientRect.top - this.offsetTop) : 0
						}
						px, 1px)`
					}
				}, containerStyle() {
					return {
						zIndex: this.scrolling ? "1" : ""
					}
				}, scroller() {
					if (!this.scrollTarget) return window;
					let t;
					if (t = "string" === typeof this.scrollTarget ? document.querySelector(this.scrollTarget) : this.scrollTarget) {
						const e = Object(l["e"])(t, "position");
						"absolute" !== e && "fixed" !== e && (t.style.position = "relative")
					}
					this.getTargetOffsetParent(this.$refs.content, t);
					return t
				}, xScroller() {
					return this.$refs.content
				}, isFixLeft() {
					return !!this.$slots.leftThead
				}, isFixRight() {
					return !!this.$slots.rightThead
				}, isTransition() {
					return c || f || this.useTrans
				}
			},
			mounted() {
				this.resizeObserver = new MutationObserver(this.observerHandle);
				this.init()
			},
			activated() {
				this.init();
				i()(document.querySelectorAll("tbody tr.hover")).forEach(t = > {
					t.classList.remove("hover")
				})
			},
			deactivated() {
				this.destroyed()
			},
			beforeDestroy() {
				this.clientRect = {
					top: 0,
					left: 0,
					right: 0
				};
				this.destroyed()
			},
			methods: {
				init() {
					this.scroller.addEventListener("scroll", this.scrollHandle, false);
					this.scroller.addEventListener("mousewheel", this.scrollerMouseWheel, false);
					if (this.selfScroll) {
						this.xScroller.addEventListener("mousewheel", this.xScrollerMouseWheel, false);
						this.xScroller.addEventListener("scroll", this.scrollHandle, false)
					}
					this.selfScroll || this.scrollTarget ? this.iframe = Object(l["a"])(this.$refs.content, this.resizeHandel) : window.addEventListener("resize", this.resizeHandel, false);
					this.resizeObserver.observe(this.$refs.content, {
						childList: true,
						subtree: true,
						characterData: true
					});
					if (this.isFixLeft || this.isFixRight) {
						this.$el.addEventListener("mouseover", this.mouseOver, false);
						this.$el.addEventListener("mouseout", this.mouseLeave, false)
					}
					this.update()
				}, destroyed() {
					this.scroller.removeEventListener("scroll", this.scrollHandle);
					this.scroller.removeEventListener("mousewheel", this.scrollerMouseWheel);
					if (this.selfScroll) {
						this.xScroller.removeEventListener("mousewheel", this.xScrollerMouseWheel);
						this.xScroller.removeEventListener("scroll", this.scrollHandle)
					}
					if (this.isFixLeft || this.isFixRight) {
						this.$el.removeEventListener("mouseover", this.mouseOver);
						this.$el.removeEventListener("mouseout", this.mouseLeave)
					}
					this.resizeObserver.disconnect();
					if (this.selfScroll || this.scrollTarget) {
						this.iframe.removeEventListener("resize", this.resizeHandel);
						this.iframe.remove()
					}
					window.removeEventListener("resize", this.resizeHandel)
				}, hoverClass(t, e) {
					const r = t.target.closest("tr");
					if (!r) return;
					const n = r.rowIndex;
					const i = Object(l["f"])(`tbody tr: nth - child($ {
						n
					})`,
					this.$el);
					if (0 === i.length) return;
					i.forEach(t = > {
						t.classList[e]("hover")
					})
				}, mouseOver(t) {
					this.hoverClass(t, "add")
				}, mouseLeave(t) {
					this.hoverClass(t, "remove")
				}, getTargetOffsetParent(t, e) {
					let r = t.offsetTop;
					let n = t.offsetLeft;
					t = t.parentElement;
					while (t && t !== e) {
						r += t.offsetTop;
						n += t.offsetLeft;
						t = t.parentElement
					}
					this.targetOffset.left = n;
					this.targetOffset.top = r
				}, getPointOffsetParent() {
					const t = this.targetOffset.left;
					const e = this.targetOffset.top;
					let r = -this.scroller.clientWidth + this.tleftWidth + this.$refs.tbody.clientWidth + this.tRightWidth - this.scroller.scrollLeft;
					r <= 0 && (r = 0);
					return {
						top: e - (this.scrollTarget ? this.scroller.scrollTop : Object(l["d"])()),
						left: t - (this.scrollTarget ? this.scroller.scrollLeft : Object(l["c"])()),
						right: r
					}
				}, scrollPositionInit() {
					const {
						left: t,
						top: e
					} = this.clientRect;
					this.selfScroll ? this.$nextTick(() = > {
						this.$refs.content.scrollLeft = -this.clientRect.left
					}) : this.scrollTarget ? this.$nextTick(() = > {
						this.scroller.scrollLeft = -t;
						this.scroller.scrollTop = -e
					}) : scrollTo(t + this.tleftWidth, e)
				}, scrollerMouseWheel(t) {
					const e = t.target.closest(".scroll-container");
					if (e !== this.$refs.content && e !== document.body) return;
					t.preventDefault();
					let r;
					(r = this.scrollTarget ? this.scroller : document.scrollingElement).scrollTop += t.deltaY;
					r.scrollLeft -= t.deltaX
				}, xScrollerMouseWheel(t) {
					t.preventDefault();
					this.xScroller.scrollLeft += t.deltaX
				}, setScrollIng: Object(l["g"])(function() {
					this.scrolling = false
				}, 250),
				scrollHandle() {
					const t = this.$refs.tbody;
					if (!t) return;
					this.scrolling = true;
					this.setScrollIng();
					if (this.selfScroll) {
						const e = this.$refs.content;
						const {
							top: r
						} = t.getBoundingClientRect();
						const n = -e.scrollLeft;
						let i = this.tleftWidth + t.clientWidth + this.tRightWidth - e.clientWidth + n;
						i = i < 0 ? 0 : i;
						this.clientRect = {
							top: r,
							left: n,
							right: i,
							bottom: 0
						}
					} else if (this.scrollTarget) {
						const t = this.getPointOffsetParent();
						this.clientRect = {
							top: t.top,
							left: t.left,
							right: t.right,
							bottom: 0
						}
					} else {
						const {
							top: e,
							left: r,
							bottom: n,
							right: i
						} = t.getBoundingClientRect();
						const o = r - this.tleftWidth;
						let s = window.innerWidth - i - this.tRightWidth - (window.scrollbars.visible ? 9 : 0);
						s > 0 && (s = 0);
						this.clientRect = {
							top: e,
							left: o,
							bottom: n,
							right: -s
						}
					}
				},
				observerHandle: Object(l["g"])(function() {
					this.update()
				}, 0),
				resizeHandel: Object(l["g"])(function() {
					this.update();
					this.opacity = 1
				}, 0, function() {
					this.opacity = 0
				}),
				update() {
					if (this._isDestroyed) return;
					this.isFixLeft && this.$refs.leftClone && (this.tleftWidth = this.$refs.leftClone.clientWidth);
					this.isFixRight && this.$refs.rightClone && (this.tRightWidth = this.$refs.rightClone.clientWidth);
					this.$refs.content && (this.tbodyWidth = this.$refs.content.clientWidth - this.tleftWidth - this.tRightWidth);
					this.$nextTick(() = > {
						this.scrollHandle()
					})
				},
				transitionTop: Object(l["g"])(function() {
					this.topChanging = false
				}, 0),
				transitionLeft: Object(l["g"])(function() {
					this.leftChanging = false
				}, 0)
			},
			watch: {
				offsetLeft(t) {
					setTimeout(() = > {
						this.scrollHandle()
					}, 250)
				}, "clientRect.top": function(t) {
					this.fixed.top = t < this.offsetTop;
					if (t < 0 && this.isTransition) {
						this.topChanging = true;
						this.transitionTop()
					}
				},
				"clientRect.left": function(t) {
					this.fixed.left = t < this.offsetLeft;
					if (t < 0 && this.isTransition) {
						this.leftChanging = true;
						this.transitionLeft()
					}
				}
			}
		}
	}, function(t, e, r) {
		t.exports = {
		default:
			r(34), __esModule: true
		}
	}, function(t, e, r) {
		r(35);
		r(53);
		t.exports = r(10).Array.from
	}, function(t, e, r) {
		"use strict";
		var n = r(36)(true);
		r(37)(String, "String", function(t) {
			this._t = String(t);
			this._i = 0
		}, function() {
			var t = this._t;
			var e = this._i;
			var r;
			if (e >= t.length) return {
				value: void 0,
				done: true
			};
			r = n(t, e);
			this._i += r.length;
			return {
				value: r,
				done: false
			}
		})
	}, function(t, e, r) {
		var n = r(8);
		var i = r(9);
		t.exports = function(t) {
			return function(e, r) {
				var o = String(i(e));
				var s = n(r);
				var l = o.length;
				var a, c;
				if (s < 0 || s >= l) return t ? "" : void 0;
				return (a = o.charCodeAt(s)) < 55296 || a > 56319 || s + 1 === l || (c = o.charCodeAt(s + 1)) < 56320 || c > 57343 ? t ? o.charAt(s) : a : t ? o.slice(s, s + 2) : c - 56320 + (a - 55296 << 10) + 65536
			}
		}
	}, function(t, e, r) {
		"use strict";
		var n = r(38);
		var i = r(16);
		var o = r(42);
		var s = r(2);
		var l = r(6);
		var a = r(13);
		var c = r(43);
		var f = r(26);
		var u = r(52);
		var h = r(0)("iterator");
		var d = !([].keys && "next" in [].keys());
		var v = function() {
				return this
			};
		t.exports = function(t, e, r, p, y, g, b) {
			c(r, e, p);
			var m = function(t) {
					if (!d && t in S) return S[t];
					switch (t) {
					case "keys":
						return function() {
							return new r(this, t)
						};
					case "values":
						return function() {
							return new r(this, t)
						}
					}
					return function() {
						return new r(this, t)
					}
				};
			var x = e + " Iterator";
			var w = "values" == y;
			var O = false;
			var S = t.prototype;
			var L = S[h] || S["@@iterator"] || y && S[y];
			var _ = L || m(y);
			var T = y ? w ? m("entries") : _ : void 0;
			var E = "Array" == e && S.entries || L;
			var C, $, j;
			if (E && (j = u(E.call(new t))) !== Object.prototype && j.next) {
				f(j, x, true);
				n || l(j, h) || s(j, h, v)
			}
			if (w && L && "values" !== L.name) {
				O = true;
				_ = function() {
					return L.call(this)
				}
			}
			n && !b || !d && !O && S[h] || s(S, h, _);
			a[e] = _;
			a[x] = v;
			if (y) {
				C = {
					values: w ? _ : m("values"),
					keys: g ? _ : m("keys"),
					entries: T
				};
				if (b) for ($ in C) $ in S || o(S, $, C[$]);
				else i(i.P + i.F * (d || O), e, C)
			}
			return C
		}
	}, function(t) {
		t.exports = true
	}, function(t) {
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	}, function(t, e, r) {
		t.exports = !r(5) && !r(18)(function() {
			return 7 != Object.defineProperty(r(19)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e, r) {
		var n = r(11);
		t.exports = function(t, e) {
			if (!n(t)) return t;
			var r, i;
			if (e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
			if ("function" == typeof(r = t.valueOf) && !n(i = r.call(t))) return i;
			if (!e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(t, e, r) {
		t.exports = r(2)
	}, function(t, e, r) {
		"use strict";
		var n = r(44);
		var i = r(12);
		var o = r(26);
		var s = {};
		r(2)(s, r(0)("iterator"), function() {
			return this
		});
		t.exports = function(t, e, r) {
			t.prototype = n(s, {
				next: i(1, r)
			});
			o(t, e + " Iterator")
		}
	}, function(t, e, r) {
		var n = r(4);
		var i = r(45);
		var o = r(25);
		var s = r(14)("IE_PROTO");
		var l = function() {};
		var a = function() {
				var t = r(19)("iframe");
				var e = o.length;
				var n;
				t.style.display = "none";
				r(51).appendChild(t);
				t.src = "javascript:";
				(n = t.contentWindow.document).open();
				n.write("<script>document.F=Object<\/script>");
				n.close();
				a = n.F;
				while (e--) delete a["prototype"][o[e]];
				return a()
			};
		t.exports = Object.create ||
		function(t, e) {
			var r;
			if (null !== t) {
				l["prototype"] = n(t);
				r = new l;
				l["prototype"] = null;
				r[s] = t
			} else r = a();
			return void 0 === e ? r : i(r, e)
		}
	}, function(t, e, r) {
		var n = r(3);
		var i = r(4);
		var o = r(46);
		t.exports = r(5) ? Object.defineProperties : function(t, e) {
			i(t);
			var r = o(e);
			var s = r.length;
			var l = 0;
			var a;
			while (s > l) n.f(t, a = r[l++], e[a]);
			return t
		}
	}, function(t, e, r) {
		var n = r(47);
		var i = r(25);
		t.exports = Object.keys ||
		function(t) {
			return n(t, i)
		}
	}, function(t, e, r) {
		var n = r(6);
		var i = r(20);
		var o = r(49)(false);
		var s = r(14)("IE_PROTO");
		t.exports = function(t, e) {
			var r = i(t);
			var l = 0;
			var a = [];
			var c;
			for (c in r) c != s && n(r, c) && a.push(c);
			while (e.length > l) n(r, c = e[l++]) && (~o(a, c) || a.push(c));
			return a
		}
	}, function(t, e, r) {
		var n = r(21);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
			return "String" == n(t) ? t.split("") : Object(t)
		}
	}, function(t, e, r) {
		var n = r(20);
		var i = r(22);
		var o = r(50);
		t.exports = function(t) {
			return function(e, r, s) {
				var l = n(e);
				var a = i(l.length);
				var c = o(s, a);
				var f;
				if (t && r != r) {
					while (a > c) if ((f = l[c++]) != f) return true
				} else for (; a > c; c++) if ((t || c in l) && l[c] === r) return t || c || 0;
				return !t && -1
			}
		}
	}, function(t, e, r) {
		var n = r(8);
		var i = Math.max;
		var o = Math.min;
		t.exports = function(t, e) {
			return (t = n(t)) < 0 ? i(t + e, 0) : o(t, e)
		}
	}, function(t, e, r) {
		var n = r(1).document;
		t.exports = n && n.documentElement
	}, function(t, e, r) {
		var n = r(6);
		var i = r(27);
		var o = r(14)("IE_PROTO");
		var s = Object.prototype;
		t.exports = Object.getPrototypeOf ||
		function(t) {
			t = i(t);
			if (n(t, o)) return t[o];
			if ("function" == typeof t.constructor && t instanceof t.constructor) return t.constructor.prototype;
			return t instanceof Object ? s : null
		}
	}, function(t, e, r) {
		"use strict";
		var n = r(17);
		var i = r(16);
		var o = r(27);
		var s = r(54);
		var l = r(55);
		var a = r(22);
		var c = r(56);
		var f = r(57);
		i(i.S + i.F * !r(59)(function(t) {
			Array.from(t)
		}), "Array", {
			from: function(t) {
				var e = o(t);
				var r = "function" == typeof this ? this : Array;
				var i = arguments.length;
				var u = i > 1 ? arguments[1] : void 0;
				var h = void 0 !== u;
				var d = 0;
				var v = f(e);
				var p, y, g, b;
				h && (u = n(u, i > 2 ? arguments[2] : void 0, 2));
				if (void 0 == v || r == Array && l(v)) for (y = new r(p = a(e.length)); p > d; d++) c(y, d, h ? u(e[d], d) : e[d]);
				else for (b = v.call(e), y = new r; !(g = b.next()).done; d++) c(y, d, h ? s(b, u, [g.value, d], true) : g.value);
				y.length = d;
				return y
			}
		})
	}, function(t, e, r) {
		var n = r(4);
		t.exports = function(t, e, r, i) {
			try {
				return i ? e(n(r)[0], r[1]) : e(r)
			} catch (e) {
				var o = t["return"];
				void 0 !== o && n(o.call(t));
				throw e
			}
		}
	}, function(t, e, r) {
		var n = r(13);
		var i = r(0)("iterator");
		var o = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (n.Array === t || o[i] === t)
		}
	}, function(t, e, r) {
		"use strict";
		var n = r(3);
		var i = r(12);
		t.exports = function(t, e, r) {
			e in t ? n.f(t, e, i(0, r)) : t[e] = r
		}
	}, function(t, e, r) {
		var n = r(58);
		var i = r(0)("iterator");
		var o = r(13);
		t.exports = r(10).getIteratorMethod = function(t) {
			if (void 0 != t) return t[i] || t["@@iterator"] || o[n(t)]
		}
	}, function(t, e, r) {
		var n = r(21);
		var i = r(0)("toStringTag");
		var o = "Arguments" == n(function() {
			return arguments
		}());
		var s = function(t, e) {
				try {
					return t[e]
				} catch (t) {}
			};
		t.exports = function(t) {
			var e, r, l;
			return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = s(e = Object(t), i)) ? r : o ? n(e) : "Object" == (l = n(e)) && "function" == typeof e.callee ? "Arguments" : l
		}
	}, function(t, e, r) {
		var n = r(0)("iterator");
		var i = false;
		try {
			var o = [7][n]();
			o["return"] = function() {
				i = true
			};
			Array.from(o, function() {
				throw 2
			})
		} catch (t) {}
		t.exports = function(t, e) {
			if (!e && !i) return false;
			var r = false;
			try {
				var o = [7];
				var s = o[n]();
				s.next = function() {
					return {
						done: r = true
					}
				};
				o[n] = function() {
					return s
				};
				t(o)
			} catch (t) {}
			return r
		}
	}, function() {}, function(t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: true
		});
		var n = r(15);
		e["default"] = {
			data() {
				return {
					scrollWidth: 0,
					scrollLeft: 0,
					virtualPercent: 0,
					virtualMouseDownX: 0,
					virtualObserver: {},
					target: {},
					opacity: false,
					bottom: 0,
					iframe: {}
				}
			}, computed: {
				barLeft() {
					let t = this.scrollLeft * this.virtualPercent;
					isNaN(t) && (t = 0);
					return {
						transform: `translate3d($ {
							t
						}
						px, 0px, 0px)`,
						width: 100 * this.virtualPercent + "%"
					}
				}, style() {
					return {
						transform: `translate3d(0px, $ {
							-this.bottom
						}
						px, 0px)`,
						opacity: this.opacity ? 0 : 1
					}
				}
			},
			mounted() {
				this.bar = this.$refs.bar;
				this.target = this.$el.previousElementSibling;
				this.virtualObserver = new MutationObserver(this.refreshScroll);
				this.virtualObserver.observe(this.target, {
					childList: true,
					characterData: true,
					subtree: true
				});
				this.windowScrollHandle();
				["scroll", "resize"].forEach(t = > {
					window.addEventListener(t, this.windowScrollHandle, false)
				});
				this.target.addEventListener("scroll", this.targetScrollHandle, false);
				this.iframe = Object(n["a"])(this.target, this.refreshScroll)
			},
			async activated() {
				await this.$nextTick();
				this.target.scrollLeft = this.scrollLeft;
				this.windowScrollHandle()
			},
			destroyed() {
				this.target.removeEventListener("scroll", this.targetScrollHandle);
				["scroll", "resize"].forEach(t = > {
					window.removeEventListener(t, this.windowScrollHandle)
				});
				this.iframe.removeEventListener("resize", this.refreshScroll);
				this.iframe.remove();
				this.virtualObserver.disconnect()
			},
			methods: {
				setOpacityShow: Object(n["g"])(function() {
					this.opacity = false
				}, 100),
				windowScrollHandle: Object(n["g"])(async
				function() {
					const {
						bottom: t
					} = this.target.getBoundingClientRect();
					let e = t - document.documentElement.clientHeight;
					e < 0 && (e = 0);
					this.bottom = e;
					this.setOpacityShow()
				}, 100, function() {
					this.opacity = true
				}),
				targetScrollHandle() {
					this.scrollLeft = this.target.scrollLeft
				},
				refreshScroll: Object(n["g"])(function() {
					if (this._isDestroyed) return;
					this.scrollWidth = this.target.scrollWidth - (this.target.offsetWidth || this.target.clientWidth);
					(this.scrollLeft > this.scrollWidth || 0 === this.scrollWidth) && (this.scrollLeft = 0);
					this.virtualPercent = this.target.offsetWidth / this.target.scrollWidth;
					this.windowScrollHandle();
					this.targetScrollHandle()
				}, 100, function() {
					this.opacity = true
				}),
				barClickHandle(t) {
					const e = this.scrollLeft * this.virtualPercent;
					let r = t.offsetX - this.$refs.bar.offsetWidth - e;
					r < 0 && (r = -e + t.offsetX);
					this.scrollLeft += r / this.virtualPercent
				},
				barMouseDownHandle(t) {
					if (0 !== t.button) return;
					this.virtualMouseDownX = t.pageX;
					document.body.addEventListener("mousemove", this.mousemoveHandle, false);
					document.body.classList.add("no-select");
					document.body.addEventListener("mouseup", this.bodyMouseUpHandle, false)
				},
				mousemoveHandle(t) {
					const e = t.pageX - this.virtualMouseDownX, r = e / this.virtualPercent;
					e > 0 ? this.up(r) : this.down(-r);
					this.virtualMouseDownX = t.pageX
				},
				bodyMouseUpHandle() {
					document.body.removeEventListener("mousemove", this.mousemoveHandle, false);
					document.body.removeEventListener("mouseup", this.bodyMouseUpHandle, false);
					document.body.classList.remove("no-select")
				},
				down(t) {
					this.scrollLeft = this.scrollLeft - t > 0 ? this.scrollLeft - t : 0
				},
				up(t) {
					this.scrollLeft = this.scrollLeft + t > this.scrollWidth ? this.scrollWidth : this.scrollLeft + t
				}
			},
			watch: {
				scrollLeft: function(t) {
					this.target.scrollLeft = t
				}
			}
		}
	}, function(t) {
		t.exports = {
			render: function() {
				var t = this;
				var e = t.$createElement;
				var r = t._self._c || e;
				return r("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.bottom > 5 && t.virtualPercent < 1,
						expression: "bottom > 5 && virtualPercent < 1"
					}],
					ref: "scroller",
					staticClass: "virtual-scroll overhidden",
					style: t.style,
					on: {
						mousedown: function(e) {
							if (e.target !== e.currentTarget) return null;
							return t.barClickHandle(e)
						}
					}
				}, [r("div", {
					ref: "bar",
					staticClass: "virtual-scroll-bar",
					style: t.barLeft,
					on: {
						mousedown: t.barMouseDownHandle
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(t) {
		t.exports = {
			render: function() {
				var t = this;
				var e = t.$createElement;
				var r = t._self._c || e;
				return r("div", {
					staticClass: "rel"
				}, [r("div", {
					ref: "content",
					staticClass: "fixed-table-container",
					class: {
						"scroll-container": t.selfScroll
					},
					style: t.containerStyle
				}, [r("div", {
					staticClass: "flex"
				}, [t.isFixLeft ? r("table", {
					ref: "leftClone",
					staticClass: "fixed-table table-clone left",
					style: t.leftStyle
				}, [r("thead", {
					staticClass: "fixed-table corner",
					class: [{
						fixed: t.fixed.top
					}],
					style: t.cornerStyle
				}, [t._t("leftThead")], 2), r("tbody", [t._t("leftBody")], 2)]) : t._e(), r("table", {
					ref: "tbody",
					staticClass: "fixed-table  flex-grow",
					style: t.bodyStyle
				}, [r("thead", {
					ref: "thead",
					class: [{
						fixed: t.fixed.top
					}],
					style: t.theadStyle
				}, [t._t("thead")], 2), r("tbody", [t._t("tbody")], 2)]), t.isFixRight ? r("table", {
					ref: "rightClone",
					staticClass: "fixed-table table-clone right",
					style: t.rightStyle
				}, [r("thead", {
					staticClass: "fixed-table corner",
					class: [{
						fixed: t.fixed.top
					}],
					style: t.cornerStyle
				}, [t._t("rightThead")], 2), r("tbody", [t._t("rightBody")], 2)]) : t._e()])]), t.selfScroll ? r("scrollxbar") : t._e()], 1)
			},
			staticRenderFns: []
		}
	}, function(t, e, r) {
		var n = r(7)(r(66), r(67), function() {
			r(65)
		}, null, null);
		t.exports = n.exports
	}, function() {}, function(t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: true
		});
		var n = r(15);
		e["default"] = {
			name: "AlignCell",
			props: {
				dir: {
					type: String,
				default:
					"l"
				},
				tag: {
					type: String,
				default:
					"td"
				}
			},
			data() {
				return {
					observer: void 0
				}
			},
			async mounted() {
				this.calc();
				this.observer = new MutationObserver(this.calc);
				this.observer.observe(this.$refs.span, {
					childList: true,
					subtree: true,
					characterData: true
				})
			},
			destroyed() {
				this.observer.disconnect()
			},
			methods: {
				calc() {
					const t = this.$el.offsetParent;
					if (!t) return;
					const e = this.$el.cellIndex + 1;
					const r = t.querySelectorAll(`.align - cell: nth - child($ {
						e
					}) > span > span`);
					this.$nextTick(() = > {
						Object(n["b"])(r)
					})
				}
			},
			computed: {
				hasDom() {
					return this.$slots.
				default
				}
			}
		}
	}, function(t) {
		t.exports = {
			render: function() {
				var t = this.$createElement;
				var e = this._self._c || t;
				return e(this.tag, this._g(this._b({
					tag: "component",
					staticClass: "align-cell"
				}, "component", this.$attrs, false), this.$listeners), [e("span", {
					class: "align-cell-" + this.dir
				}, [e("span", {
					ref: "span"
				}, [this._t("default")], 2)])])
			},
			staticRenderFns: []
		}
	}])
});