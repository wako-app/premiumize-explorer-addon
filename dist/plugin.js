!(function (d, E) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = E(
        require('ionic.angular'),
        require('ng.common'),
        require('ng.core'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('tslib'),
        require('wako-app.mobile-sdk')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ionic.angular', 'ng.common', 'ng.core', 'ng.forms', 'ngx-translate.core', 'rxjs', 'tslib', 'wako-app.mobile-sdk'], E)
    : 'object' == typeof exports
    ? (exports.plugin = E(
        require('ionic.angular'),
        require('ng.common'),
        require('ng.core'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('tslib'),
        require('wako-app.mobile-sdk')
      ))
    : (d.plugin = E(
        d['ionic.angular'],
        d['ng.common'],
        d['ng.core'],
        d['ng.forms'],
        d['ngx-translate.core'],
        d.rxjs,
        d.tslib,
        d['wako-app.mobile-sdk']
      ));
})('undefined' != typeof self ? self : this, function (J, d, E, pe, he, de, be, ye) {
  return (function () {
    'use strict';
    var me = {
        300: function (a) {
          a.exports = J;
        },
        575: function (a) {
          a.exports = d;
        },
        13: function (a) {
          a.exports = E;
        },
        498: function (a) {
          a.exports = pe;
        },
        351: function (a) {
          a.exports = he;
        },
        435: function (a) {
          a.exports = de;
        },
        780: function (a) {
          a.exports = be;
        },
        107: function (a) {
          a.exports = ye;
        }
      },
      Z = {};
    function p(a) {
      var b = Z[a];
      if (void 0 !== b) return b.exports;
      var f = (Z[a] = { exports: {} });
      return me[a](f, f.exports, p), f.exports;
    }
    (p.d = function (a, b) {
      for (var f in b) p.o(b, f) && !p.o(a, f) && Object.defineProperty(a, f, { enumerable: !0, get: b[f] });
    }),
      (p.o = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }),
      (p.r = function (a) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(a, '__esModule', { value: !0 });
      });
    var q = {};
    return (
      (function () {
        p.r(q),
          p.d(q, {
            PluginModule: function () {
              return le;
            },
            default: function () {
              return nt;
            }
          });
        var a = p(780),
          b = p(575),
          f = p(300),
          m = p(107),
          j = p(351);
        function H() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          (0, m.wakoLog)('plugin.premiumize-explorer', t);
        }
        var P = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              (0, a.__extends)(e, t),
              (e.hasApiKey = function () {
                return !!this.apikey;
              }),
              (e.setApiKey = function (n) {
                this.apikey = n;
              }),
              (e.getApiBaseUrl = function () {
                return 'https://www.premiumize.me/api';
              }),
              (e.getHeaders = function () {
                return { 'Content-Type': 'application/x-www-form-urlencoded' };
              }),
              (e.get = function (n, r, i) {
                return r || (r = {}), r.apikey || (r.apikey = this.apikey), t.get.call(this, n, r, i, 5e4);
              }),
              (e.post = function (n, r, i) {
                return (
                  n.match('apikey') || (n += '?apikey=' + this.apikey),
                  t.request.call(this, { method: 'POST', url: this.getApiBaseUrl() + n, body: r, headers: this.getHeaders() }, i)
                );
              }),
              e
            );
          })(m.WakoBaseHttpService),
          ve = (function () {
            function t() {}
            return (
              (t.submit = function (e) {
                return P.get('/folder/list', { id: e });
              }),
              t
            );
          })();
        function g(t) {
          return (g = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              })(t);
        }
        function I(t, e, n) {
          return (I =
            'undefined' != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (i, s, u) {
                  var c = (function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = g(t)); );
                    return t;
                  })(i, s);
                  if (c) {
                    var l = Object.getOwnPropertyDescriptor(c, s);
                    return l.get ? l.get.call(u) : l.value;
                  }
                })(t, e, n || t);
        }
        function U(t, e) {
          return (U =
            Object.setPrototypeOf ||
            function (r, i) {
              return (r.__proto__ = i), r;
            })(t, e);
        }
        function T(t, e) {
          if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && U(t, e);
        }
        function F(t) {
          return (F =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
                })(t);
        }
        function w(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function Se(t, e) {
          return !e || ('object' !== F(e) && 'function' != typeof e) ? w(t) : e;
        }
        function C(t) {
          var e = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var i,
              r = g(t);
            if (e) {
              var s = g(this).constructor;
              i = Reflect.construct(r, arguments, s);
            } else i = r.apply(this, arguments);
            return Se(this, i);
          };
        }
        function v(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }
        function G(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function _(t, e, n) {
          return e && G(t.prototype, e), n && G(t, n), t;
        }
        function V(t) {
          return 'function' == typeof t;
        }
        var L = !1,
          y = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(t) {
              if (t) {
                var e = new Error();
                console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + e.stack);
              } else L && console.log('RxJS: Back to a better error behavior. Thank you. <3');
              L = t;
            },
            get useDeprecatedSynchronousErrorHandling() {
              return L;
            }
          };
        function O(t) {
          setTimeout(function () {
            throw t;
          }, 0);
        }
        var z = {
            closed: !0,
            next: function (e) {},
            error: function (e) {
              if (y.useDeprecatedSynchronousErrorHandling) throw e;
              O(e);
            },
            complete: function () {}
          },
          we = (function () {
            return (
              Array.isArray ||
              function (t) {
                return t && 'number' == typeof t.length;
              }
            );
          })();
        function Q(t) {
          return null !== t && 'object' == typeof t;
        }
        var B = (function () {
            function t(e) {
              return (
                Error.call(this),
                (this.message = e
                  ? ''.concat(e.length, ' errors occurred during unsubscription:\n').concat(
                      e
                        .map(function (n, r) {
                          return ''.concat(r + 1, ') ').concat(n.toString());
                        })
                        .join('\n  ')
                    )
                  : ''),
                (this.name = 'UnsubscriptionError'),
                (this.errors = e),
                this
              );
            }
            return (t.prototype = Object.create(Error.prototype)), t;
          })(),
          M = (function () {
            var e,
              t = (function () {
                function e(n) {
                  v(this, e),
                    (this.closed = !1),
                    (this._parentOrParents = null),
                    (this._subscriptions = null),
                    n && (this._unsubscribe = n);
                }
                return (
                  _(e, [
                    {
                      key: 'unsubscribe',
                      value: function () {
                        var r;
                        if (!this.closed) {
                          var i = this._parentOrParents,
                            s = this._unsubscribe,
                            u = this._subscriptions;
                          if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), i instanceof e))
                            i.remove(this);
                          else if (null !== i) for (var c = 0; c < i.length; ++c) i[c].remove(this);
                          if (V(s))
                            try {
                              s.call(this);
                            } catch (k) {
                              r = k instanceof B ? X(k.errors) : [k];
                            }
                          if (we(u))
                            for (var h = -1, Y = u.length; ++h < Y; ) {
                              var fe = u[h];
                              if (Q(fe))
                                try {
                                  fe.unsubscribe();
                                } catch (k) {
                                  (r = r || []), k instanceof B ? (r = r.concat(X(k.errors))) : r.push(k);
                                }
                            }
                          if (r) throw new B(r);
                        }
                      }
                    },
                    {
                      key: 'add',
                      value: function (r) {
                        var i = r;
                        if (!r) return e.EMPTY;
                        switch (typeof r) {
                          case 'function':
                            i = new e(r);
                          case 'object':
                            if (i === this || i.closed || 'function' != typeof i.unsubscribe) return i;
                            if (this.closed) return i.unsubscribe(), i;
                            if (!(i instanceof e)) {
                              var s = i;
                              (i = new e())._subscriptions = [s];
                            }
                            break;
                          default:
                            throw new Error('unrecognized teardown ' + r + ' added to Subscription.');
                        }
                        var c = i._parentOrParents;
                        if (null === c) i._parentOrParents = this;
                        else if (c instanceof e) {
                          if (c === this) return i;
                          i._parentOrParents = [c, this];
                        } else {
                          if (-1 !== c.indexOf(this)) return i;
                          c.push(this);
                        }
                        var l = this._subscriptions;
                        return null === l ? (this._subscriptions = [i]) : l.push(i), i;
                      }
                    },
                    {
                      key: 'remove',
                      value: function (r) {
                        var i = this._subscriptions;
                        if (i) {
                          var s = i.indexOf(r);
                          -1 !== s && i.splice(s, 1);
                        }
                      }
                    }
                  ]),
                  e
                );
              })();
            return (t.EMPTY = (((e = new t()).closed = !0), e)), t;
          })();
        function X(t) {
          return t.reduce(function (e, n) {
            return e.concat(n instanceof B ? n.errors : n);
          }, []);
        }
        var K = (function () {
            return 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
          })(),
          S = (function (t) {
            T(n, t);
            var e = C(n);
            function n(r, i, s) {
              var u;
              switch (
                (v(this, n),
                ((u = e.call(this)).syncErrorValue = null),
                (u.syncErrorThrown = !1),
                (u.syncErrorThrowable = !1),
                (u.isStopped = !1),
                arguments.length)
              ) {
                case 0:
                  u.destination = z;
                  break;
                case 1:
                  if (!r) {
                    u.destination = z;
                    break;
                  }
                  if ('object' == typeof r) {
                    r instanceof n
                      ? ((u.syncErrorThrowable = r.syncErrorThrowable), (u.destination = r), r.add(w(u)))
                      : ((u.syncErrorThrowable = !0), (u.destination = new N(w(u), r)));
                    break;
                  }
                default:
                  (u.syncErrorThrowable = !0), (u.destination = new N(w(u), r, i, s));
              }
              return u;
            }
            return (
              _(
                n,
                [
                  {
                    key: K,
                    value: function () {
                      return this;
                    }
                  },
                  {
                    key: 'next',
                    value: function (i) {
                      this.isStopped || this._next(i);
                    }
                  },
                  {
                    key: 'error',
                    value: function (i) {
                      this.isStopped || ((this.isStopped = !0), this._error(i));
                    }
                  },
                  {
                    key: 'complete',
                    value: function () {
                      this.isStopped || ((this.isStopped = !0), this._complete());
                    }
                  },
                  {
                    key: 'unsubscribe',
                    value: function () {
                      this.closed || ((this.isStopped = !0), I(g(n.prototype), 'unsubscribe', this).call(this));
                    }
                  },
                  {
                    key: '_next',
                    value: function (i) {
                      this.destination.next(i);
                    }
                  },
                  {
                    key: '_error',
                    value: function (i) {
                      this.destination.error(i), this.unsubscribe();
                    }
                  },
                  {
                    key: '_complete',
                    value: function () {
                      this.destination.complete(), this.unsubscribe();
                    }
                  },
                  {
                    key: '_unsubscribeAndRecycle',
                    value: function () {
                      var i = this._parentOrParents;
                      return (
                        (this._parentOrParents = null),
                        this.unsubscribe(),
                        (this.closed = !1),
                        (this.isStopped = !1),
                        (this._parentOrParents = i),
                        this
                      );
                    }
                  }
                ],
                [
                  {
                    key: 'create',
                    value: function (i, s, u) {
                      var c = new n(i, s, u);
                      return (c.syncErrorThrowable = !1), c;
                    }
                  }
                ]
              ),
              n
            );
          })(M),
          N = (function (t) {
            T(n, t);
            var e = C(n);
            function n(r, i, s, u) {
              var c;
              v(this, n), ((c = e.call(this))._parentSubscriber = r);
              var l,
                h = w(c);
              return (
                V(i)
                  ? (l = i)
                  : i &&
                    ((l = i.next),
                    (s = i.error),
                    (u = i.complete),
                    i !== z &&
                      (V((h = Object.create(i)).unsubscribe) && c.add(h.unsubscribe.bind(h)), (h.unsubscribe = c.unsubscribe.bind(w(c))))),
                (c._context = h),
                (c._next = l),
                (c._error = s),
                (c._complete = u),
                c
              );
            }
            return (
              _(n, [
                {
                  key: 'next',
                  value: function (i) {
                    if (!this.isStopped && this._next) {
                      var s = this._parentSubscriber;
                      y.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable
                        ? this.__tryOrSetError(s, this._next, i) && this.unsubscribe()
                        : this.__tryOrUnsub(this._next, i);
                    }
                  }
                },
                {
                  key: 'error',
                  value: function (i) {
                    if (!this.isStopped) {
                      var s = this._parentSubscriber,
                        u = y.useDeprecatedSynchronousErrorHandling;
                      if (this._error)
                        u && s.syncErrorThrowable
                          ? (this.__tryOrSetError(s, this._error, i), this.unsubscribe())
                          : (this.__tryOrUnsub(this._error, i), this.unsubscribe());
                      else if (s.syncErrorThrowable) u ? ((s.syncErrorValue = i), (s.syncErrorThrown = !0)) : O(i), this.unsubscribe();
                      else {
                        if ((this.unsubscribe(), u)) throw i;
                        O(i);
                      }
                    }
                  }
                },
                {
                  key: 'complete',
                  value: function () {
                    var i = this;
                    if (!this.isStopped) {
                      var s = this._parentSubscriber;
                      if (this._complete) {
                        var u = function () {
                          return i._complete.call(i._context);
                        };
                        y.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable
                          ? (this.__tryOrSetError(s, u), this.unsubscribe())
                          : (this.__tryOrUnsub(u), this.unsubscribe());
                      } else this.unsubscribe();
                    }
                  }
                },
                {
                  key: '__tryOrUnsub',
                  value: function (i, s) {
                    try {
                      i.call(this._context, s);
                    } catch (u) {
                      if ((this.unsubscribe(), y.useDeprecatedSynchronousErrorHandling)) throw u;
                      O(u);
                    }
                  }
                },
                {
                  key: '__tryOrSetError',
                  value: function (i, s, u) {
                    if (!y.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
                    try {
                      s.call(this._context, u);
                    } catch (c) {
                      return y.useDeprecatedSynchronousErrorHandling ? ((i.syncErrorValue = c), (i.syncErrorThrown = !0), !0) : (O(c), !0);
                    }
                    return !1;
                  }
                },
                {
                  key: '_unsubscribe',
                  value: function () {
                    var i = this._parentSubscriber;
                    (this._context = null), (this._parentSubscriber = null), i.unsubscribe();
                  }
                }
              ]),
              n
            );
          })(S),
          ke = (function (t) {
            T(n, t);
            var e = C(n);
            function n() {
              return v(this, n), e.apply(this, arguments);
            }
            return (
              _(n, [
                {
                  key: 'notifyNext',
                  value: function (i, s, u, c, l) {
                    this.destination.next(s);
                  }
                },
                {
                  key: 'notifyError',
                  value: function (i, s) {
                    this.destination.error(i);
                  }
                },
                {
                  key: 'notifyComplete',
                  value: function (i) {
                    this.destination.complete();
                  }
                }
              ]),
              n
            );
          })(S),
          ee = (function (t) {
            T(n, t);
            var e = C(n);
            function n(r, i, s) {
              var u;
              return v(this, n), ((u = e.call(this)).parent = r), (u.outerValue = i), (u.outerIndex = s), (u.index = 0), u;
            }
            return (
              _(n, [
                {
                  key: '_next',
                  value: function (i) {
                    this.parent.notifyNext(this.outerValue, i, this.outerIndex, this.index++, this);
                  }
                },
                {
                  key: '_error',
                  value: function (i) {
                    this.parent.notifyError(i, this), this.unsubscribe();
                  }
                },
                {
                  key: '_complete',
                  value: function () {
                    this.parent.notifyComplete(this), this.unsubscribe();
                  }
                }
              ]),
              n
            );
          })(S);
        function Ie() {
          return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
        }
        var R = Ie(),
          A = (function () {
            return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
          })(),
          te = function (e) {
            return e && 'number' == typeof e.length && 'function' != typeof e;
          };
        function ne(t) {
          return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
        }
        var re = function (e) {
          if (e && 'function' == typeof e[A])
            return (function (e) {
              return function (n) {
                var r = e[A]();
                if ('function' != typeof r.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
                return r.subscribe(n);
              };
            })(e);
          if (te(e))
            return (function (e) {
              return function (n) {
                for (var r = 0, i = e.length; r < i && !n.closed; r++) n.next(e[r]);
                n.complete();
              };
            })(e);
          if (ne(e))
            return (function (e) {
              return function (n) {
                return (
                  e
                    .then(
                      function (r) {
                        n.closed || (n.next(r), n.complete());
                      },
                      function (r) {
                        return n.error(r);
                      }
                    )
                    .then(null, O),
                  n
                );
              };
            })(e);
          if (e && 'function' == typeof e[R])
            return (function (e) {
              return function (n) {
                for (var r = e[R](); ; ) {
                  var i = r.next();
                  if (i.done) {
                    n.complete();
                    break;
                  }
                  if ((n.next(i.value), n.closed)) break;
                }
                return (
                  'function' == typeof r.return &&
                    n.add(function () {
                      r.return && r.return();
                    }),
                  n
                );
              };
            })(e);
          var n = Q(e) ? 'an invalid object' : "'".concat(e, "'"),
            r = 'You provided '.concat(n, ' where a stream was expected.') + ' You can provide an Observable, Promise, Array, or Iterable.';
          throw new TypeError(r);
        };
        function Ae(t) {
          return t;
        }
        function ie(t) {
          return 0 === t.length
            ? Ae
            : 1 === t.length
            ? t[0]
            : function (n) {
                return t.reduce(function (r, i) {
                  return i(r);
                }, n);
              };
        }
        var x = (function () {
          var t = (function () {
            function e(n) {
              v(this, e), (this._isScalar = !1), n && (this._subscribe = n);
            }
            return (
              _(e, [
                {
                  key: 'lift',
                  value: function (r) {
                    var i = new e();
                    return (i.source = this), (i.operator = r), i;
                  }
                },
                {
                  key: 'subscribe',
                  value: function (r, i, s) {
                    var u = this.operator,
                      c = (function (t, e, n) {
                        if (t) {
                          if (t instanceof S) return t;
                          if (t[K]) return t[K]();
                        }
                        return t || e || n ? new S(t, e, n) : new S(z);
                      })(r, i, s);
                    if (
                      (c.add(
                        u
                          ? u.call(c, this.source)
                          : this.source || (y.useDeprecatedSynchronousErrorHandling && !c.syncErrorThrowable)
                          ? this._subscribe(c)
                          : this._trySubscribe(c)
                      ),
                      y.useDeprecatedSynchronousErrorHandling && c.syncErrorThrowable && ((c.syncErrorThrowable = !1), c.syncErrorThrown))
                    )
                      throw c.syncErrorValue;
                    return c;
                  }
                },
                {
                  key: '_trySubscribe',
                  value: function (r) {
                    try {
                      return this._subscribe(r);
                    } catch (i) {
                      y.useDeprecatedSynchronousErrorHandling && ((r.syncErrorThrown = !0), (r.syncErrorValue = i)),
                        (function (t) {
                          for (; t; ) {
                            var r = t.destination;
                            if (t.closed || t.isStopped) return !1;
                            t = r && r instanceof S ? r : null;
                          }
                          return !0;
                        })(r)
                          ? r.error(i)
                          : console.warn(i);
                    }
                  }
                },
                {
                  key: 'forEach',
                  value: function (r, i) {
                    var s = this;
                    return new (i = oe(i))(function (u, c) {
                      var l;
                      l = s.subscribe(
                        function (h) {
                          try {
                            r(h);
                          } catch (Y) {
                            c(Y), l && l.unsubscribe();
                          }
                        },
                        c,
                        u
                      );
                    });
                  }
                },
                {
                  key: '_subscribe',
                  value: function (r) {
                    var i = this.source;
                    return i && i.subscribe(r);
                  }
                },
                {
                  key: A,
                  value: function () {
                    return this;
                  }
                },
                {
                  key: 'pipe',
                  value: function () {
                    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                    return 0 === i.length ? this : ie(i)(this);
                  }
                },
                {
                  key: 'toPromise',
                  value: function (r) {
                    var i = this;
                    return new (r = oe(r))(function (s, u) {
                      var c;
                      i.subscribe(
                        function (l) {
                          return (c = l);
                        },
                        function (l) {
                          return u(l);
                        },
                        function () {
                          return s(c);
                        }
                      );
                    });
                  }
                }
              ]),
              e
            );
          })();
          return (
            (t.create = function (e) {
              return new t(e);
            }),
            t
          );
        })();
        function oe(t) {
          if ((t || (t = y.Promise || Promise), !t)) throw new Error('no Promise impl found');
          return t;
        }
        function D(t, e) {
          return function (r) {
            if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
            return r.lift(new Fe(t, e));
          };
        }
        var Fe = (function () {
            function t(e, n) {
              v(this, t), (this.project = e), (this.thisArg = n);
            }
            return (
              _(t, [
                {
                  key: 'call',
                  value: function (n, r) {
                    return r.subscribe(new ze(n, this.project, this.thisArg));
                  }
                }
              ]),
              t
            );
          })(),
          ze = (function (t) {
            T(n, t);
            var e = C(n);
            function n(r, i, s) {
              var u;
              return v(this, n), ((u = e.call(this, r)).project = i), (u.count = 0), (u.thisArg = s || w(u)), u;
            }
            return (
              _(n, [
                {
                  key: '_next',
                  value: function (i) {
                    var s;
                    try {
                      s = this.project.call(this.thisArg, i, this.count++);
                    } catch (u) {
                      return void this.destination.error(u);
                    }
                    this.destination.next(s);
                  }
                }
              ]),
              n
            );
          })(S);
        function se(t, e) {
          return 'function' == typeof e
            ? function (n) {
                return n.pipe(
                  se(function (r, i) {
                    return (function (t, e) {
                      return t instanceof x ? t : new x(re(t));
                    })(t(r, i)).pipe(
                      D(function (s, u) {
                        return e(r, s, i, u);
                      })
                    );
                  })
                );
              }
            : function (n) {
                return n.lift(new Ke(t));
              };
        }
        var Ke = (function () {
            function t(e) {
              v(this, t), (this.project = e);
            }
            return (
              _(t, [
                {
                  key: 'call',
                  value: function (n, r) {
                    return r.subscribe(new We(n, this.project));
                  }
                }
              ]),
              t
            );
          })(),
          We = (function (t) {
            T(n, t);
            var e = C(n);
            function n(r, i) {
              var s;
              return v(this, n), ((s = e.call(this, r)).project = i), (s.index = 0), s;
            }
            return (
              _(n, [
                {
                  key: '_next',
                  value: function (i) {
                    var s,
                      u = this.index++;
                    try {
                      s = this.project(i, u);
                    } catch (c) {
                      return void this.destination.error(c);
                    }
                    this._innerSub(s, i, u);
                  }
                },
                {
                  key: '_innerSub',
                  value: function (i, s, u) {
                    var c = this.innerSubscription;
                    c && c.unsubscribe();
                    var l = new ee(this, s, u),
                      h = this.destination;
                    h.add(l),
                      (this.innerSubscription = (function (t, e, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ee(t, n, r);
                        if (!i.closed) return e instanceof x ? e.subscribe(i) : re(e)(i);
                      })(this, i, void 0, void 0, l)),
                      this.innerSubscription !== l && h.add(this.innerSubscription);
                  }
                },
                {
                  key: '_complete',
                  value: function () {
                    var i = this.innerSubscription;
                    (!i || i.closed) && I(g(n.prototype), '_complete', this).call(this), this.unsubscribe();
                  }
                },
                {
                  key: '_unsubscribe',
                  value: function () {
                    this.innerSubscription = null;
                  }
                },
                {
                  key: 'notifyComplete',
                  value: function (i) {
                    this.destination.remove(i),
                      (this.innerSubscription = null),
                      this.isStopped && I(g(n.prototype), '_complete', this).call(this);
                  }
                },
                {
                  key: 'notifyNext',
                  value: function (i, s, u, c, l) {
                    this.destination.next(s);
                  }
                }
              ]),
              n
            );
          })(ke),
          o = p(13),
          $e = (function () {
            return function () {};
          })(),
          W = (function () {
            function t() {
              (this.storageCategory = 'plugin.premiumize_explorer_settings'),
                (this.settings$ = m.WakoSettingsService.onChangeByCategory(this.storageCategory));
            }
            return (
              (t.prototype.get = function () {
                return (0, a.__awaiter)(this, void 0, void 0, function () {
                  var e, n;
                  return (0, a.__generator)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, m.WakoSettingsService.getByCategory(this.storageCategory)];
                      case 1:
                        return (
                          (e = r.sent()),
                          (n = new $e()),
                          e || (e = n),
                          Object.keys(n).forEach(function (i) {
                            void 0 === e[i] && (e[i] = n[i]);
                          }),
                          [2, e]
                        );
                    }
                  });
                });
              }),
              (t.prototype.set = function (e) {
                return (0, a.__awaiter)(this, void 0, void 0, function () {
                  return (0, a.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, m.WakoSettingsService.setByCategory(this.storageCategory, e)];
                      case 1:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              (t.ɵprov = o.ɵɵdefineInjectable({
                token: t,
                factory: (t.ɵfac = function (n) {
                  return new (n || t)();
                })
              })),
              t
            );
          })(),
          Ye = p(435),
          Je = (function () {
            function t() {}
            return (
              (t.submit = function (e) {
                return P.get('/folder/delete', { id: e });
              }),
              t
            );
          })(),
          Ze = (function () {
            function t() {}
            return (
              (t.submit = function (e) {
                return P.get('/item/delete', { id: e });
              }),
              t
            );
          })(),
          ue = (function () {
            function t(e) {
              (this.settingsService = e),
                this.settingsService.settings$.subscribe(function (n) {
                  P.setApiKey(n.newValue.apiKey);
                });
            }
            return (
              (t.prototype.get = function (e) {
                var n = this;
                return (0, Ye.from)(this.settingsService.get()).pipe(
                  se(function (r) {
                    return (
                      P.setApiKey(r.apiKey),
                      ve.submit(e).pipe(
                        D(function (i) {
                          var s;
                          if ('error' === i.status) throw new Error(null !== (s = i.message) && void 0 !== s ? s : JSON.stringify(i));
                          var u = {
                            isRoot: 'root' === i.name,
                            title: 'root' === i.name ? 'Premiumize Explorer' : i.name,
                            folderId: i.folder_id,
                            parentId: i.parent_id,
                            label: i.name,
                            items: [],
                            goToParentAction: 'root' === i.name ? null : n.get(i.parent_id)
                          };
                          return (
                            i.content.forEach(function (c) {
                              if ('file' !== c.type || c.stream_link) {
                                var l = null;
                                'file' === c.type && (l = { id: c.id, size: c.size, link: c.link, streamLink: c.stream_link }),
                                  u.items.push({
                                    id: c.id,
                                    createdAt: null,
                                    label: c.name,
                                    pluginId: 'plugin.premiumize-explorer',
                                    type: c.type,
                                    file: l,
                                    fetchChildren: 'folder' === c.type ? n.get(c.id) : null,
                                    deleteAction: 'folder' === c.type ? n.deleteFolderById(c.id) : n.deleteFileById(c.id)
                                  });
                              }
                            }),
                            u
                          );
                        })
                      )
                    );
                  })
                );
              }),
              (t.prototype.deleteFolderById = function (e) {
                return Je.submit(e).pipe(
                  D(function () {
                    return !0;
                  })
                );
              }),
              (t.prototype.deleteFileById = function (e) {
                return Ze.submit(e).pipe(
                  D(function () {
                    return !0;
                  })
                );
              }),
              (t.ɵfac = function (n) {
                return new (n || t)(o.ɵɵinject(W));
              }),
              (t.ɵprov = o.ɵɵdefineInjectable({ token: t, factory: t.ɵfac })),
              t
            );
          })(),
          Ge = (function () {
            function t() {}
            return (
              (t.submit = function (e) {
                return P.post('/account/info' + (e ? '?apikey=' + e : ''), null, '15min');
              }),
              t
            );
          })();
        function Qe(t, e) {
          1 & t && o.ɵɵelement(0, 'ion-spinner');
        }
        function Xe(t, e) {
          if (1 & t) {
            var n = o.ɵɵgetCurrentView();
            o.ɵɵelementStart(0, 'ion-item', 5),
              o.ɵɵlistener('click', function () {
                return o.ɵɵrestoreView(n), o.ɵɵnextContext(2).logout();
              }),
              o.ɵɵelementStart(1, 'ion-label', 6),
              o.ɵɵtext(2),
              o.ɵɵpipe(3, 'translate'),
              o.ɵɵelementEnd(),
              o.ɵɵelementEnd();
          }
          2 & t && (o.ɵɵadvance(2), o.ɵɵtextInterpolate(o.ɵɵpipeBind1(3, 1, 'settings.logout')));
        }
        function Ne(t, e) {
          if ((1 & t && (o.ɵɵelementContainerStart(0), o.ɵɵtemplate(1, Xe, 4, 3, 'ion-item', 4), o.ɵɵelementContainerEnd()), 2 & t)) {
            var n = o.ɵɵnextContext();
            o.ɵɵadvance(1), o.ɵɵproperty('ngIf', n.isAuth);
          }
        }
        function et(t, e) {
          if (1 & t) {
            var n = o.ɵɵgetCurrentView();
            o.ɵɵelementContainerStart(0),
              o.ɵɵelementStart(1, 'ion-item', 5),
              o.ɵɵlistener('click', function () {
                return o.ɵɵrestoreView(n), o.ɵɵnextContext().login();
              }),
              o.ɵɵelementStart(2, 'ion-label'),
              o.ɵɵtext(3),
              o.ɵɵpipe(4, 'translate'),
              o.ɵɵelementEnd(),
              o.ɵɵelementEnd(),
              o.ɵɵelementStart(5, 'ion-item', 5),
              o.ɵɵlistener('click', function () {
                return o.ɵɵrestoreView(n), o.ɵɵnextContext().openPremiumize();
              }),
              o.ɵɵelementStart(6, 'ion-label'),
              o.ɵɵtext(7),
              o.ɵɵpipe(8, 'translate'),
              o.ɵɵelementEnd(),
              o.ɵɵelementEnd(),
              o.ɵɵelementContainerEnd();
          }
          2 & t &&
            (o.ɵɵadvance(3),
            o.ɵɵtextInterpolate(o.ɵɵpipeBind1(4, 2, 'settings.login')),
            o.ɵɵadvance(4),
            o.ɵɵtextInterpolate(o.ɵɵpipeBind1(8, 4, 'settings.noAccount')));
        }
        var $ = (function () {
            function t(e, n, r, i, s) {
              (this.settingsService = e),
                (this.alertController = n),
                (this.translateService = r),
                (this.toastService = i),
                (this.ngZone = s),
                (this.settings = null),
                (this.isLoading = !1),
                (this.isAuth = !1);
            }
            return (
              (t.prototype.ngOnInit = function () {
                return (0, a.__awaiter)(this, void 0, void 0, function () {
                  var e;
                  return (0, a.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (e = this), [4, this.settingsService.get()];
                      case 1:
                        return (e.settings = n.sent()), (this.isAuth = !!this.settings.apiKey), [2];
                    }
                  });
                });
              }),
              (t.prototype.logout = function () {
                return (0, a.__awaiter)(this, void 0, void 0, function () {
                  var e;
                  return (0, a.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, this.settingsService.get()];
                      case 1:
                        return ((e = n.sent()).apiKey = null), [4, this.settingsService.set(e)];
                      case 2:
                        return n.sent(), this.ngOnInit(), [2];
                    }
                  });
                });
              }),
              (t.prototype.login = function () {
                return (0, a.__awaiter)(this, void 0, void 0, function () {
                  var n = this;
                  return (0, a.__generator)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [
                          4,
                          this.alertController.create({
                            header: 'API-Key / PIN',
                            inputs: [{ name: 'apikey', type: 'text', placeholder: 'API-Key / PIN', value: '' }],
                            buttons: [
                              { text: this.translateService.instant('settings.cancelButton'), role: 'cancel', cssClass: 'secondary' },
                              {
                                text: 'Ok',
                                handler: function (i) {
                                  n.ngZone.run(function () {
                                    return (0, a.__awaiter)(n, void 0, void 0, function () {
                                      var u;
                                      return (0, a.__generator)(this, function (c) {
                                        switch (c.label) {
                                          case 0:
                                            (this.isLoading = !0), (c.label = 1);
                                          case 1:
                                            return c.trys.push([1, 4, 5, 6]), [4, Ge.submit(i.apikey).toPromise()];
                                          case 2:
                                            return 'error' === c.sent().status
                                              ? (this.toastService.simpleMessage('settings.invalidApiKey'), [2])
                                              : ((this.settings.apiKey = i.apikey), [4, this.setSettings()]);
                                          case 3:
                                            return c.sent(), (this.isAuth = !!this.settings.apiKey), [3, 6];
                                          case 4:
                                            return (u = c.sent()), this.toastService.simpleMessage(u.toString()), [3, 6];
                                          case 5:
                                            return (this.isLoading = !1), [7];
                                          case 6:
                                            return [2];
                                        }
                                      });
                                    });
                                  });
                                }
                              }
                            ]
                          })
                        ];
                      case 1:
                        return r.sent().present(), [2];
                    }
                  });
                });
              }),
              (t.prototype.openPremiumize = function () {
                m.BrowserService.open('https://www.premiumize.me?ref=wako');
              }),
              (t.prototype.setSettings = function () {
                return (0, a.__awaiter)(this, void 0, void 0, function () {
                  return (0, a.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this.settingsService.set(this.settings)];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              }),
              (t.ɵfac = function (n) {
                return new (n || t)(
                  o.ɵɵdirectiveInject(W),
                  o.ɵɵdirectiveInject(f.AlertController),
                  o.ɵɵdirectiveInject(j.TranslateService),
                  o.ɵɵdirectiveInject(m.WakoToastService),
                  o.ɵɵdirectiveInject(o.NgZone)
                );
              }),
              (t.ɵcmp = o.ɵɵdefineComponent({
                type: t,
                selectors: [['wk-settings']],
                decls: 12,
                vars: 6,
                consts: [
                  ['lines', 'full'],
                  ['src', 'https://www.premiumize.me/icon.svg', 'alt', '', 1, 'pm-icon'],
                  [4, 'ngIf'],
                  [1, 'ion-text-wrap'],
                  ['button', '', 3, 'click', 4, 'ngIf'],
                  ['button', '', 3, 'click'],
                  ['color', 'danger']
                ],
                template: function (n, r) {
                  1 & n &&
                    (o.ɵɵelementStart(0, 'ion-list', 0),
                    o.ɵɵelementStart(1, 'ion-list-header'),
                    o.ɵɵelementStart(2, 'ion-label'),
                    o.ɵɵelement(3, 'img', 1),
                    o.ɵɵtext(4, ' Premiumize.me '),
                    o.ɵɵtemplate(5, Qe, 1, 0, 'ion-spinner', 2),
                    o.ɵɵelementEnd(),
                    o.ɵɵelementEnd(),
                    o.ɵɵelementStart(6, 'ion-item'),
                    o.ɵɵelementStart(7, 'ion-label', 3),
                    o.ɵɵtext(8),
                    o.ɵɵpipe(9, 'translate'),
                    o.ɵɵelementEnd(),
                    o.ɵɵelementEnd(),
                    o.ɵɵtemplate(10, Ne, 2, 1, 'ng-container', 2),
                    o.ɵɵtemplate(11, et, 9, 6, 'ng-container', 2),
                    o.ɵɵelementEnd()),
                    2 & n &&
                      (o.ɵɵadvance(5),
                      o.ɵɵproperty('ngIf', r.isLoading),
                      o.ɵɵadvance(3),
                      o.ɵɵtextInterpolate1(' ', o.ɵɵpipeBind1(9, 4, 'settings.explain'), ' '),
                      o.ɵɵadvance(2),
                      o.ɵɵproperty('ngIf', r.isAuth),
                      o.ɵɵadvance(1),
                      o.ɵɵproperty('ngIf', !r.isAuth));
                },
                directives: [f.IonList, f.IonListHeader, f.IonLabel, b.NgIf, f.IonItem, f.IonSpinner],
                pipes: [j.TranslatePipe],
                styles: [
                  'ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:flex;align-items:center}ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .pm-icon[_ngcontent-%COMP%]{width:20px;display:inline;margin-right:10px}'
                ]
              })),
              t
            );
          })(),
          ce = (function () {
            function t(e) {
              this.modalCtrl = e;
            }
            return (
              (t.prototype.ngOnInit = function () {}),
              (t.ɵfac = function (n) {
                return new (n || t)(o.ɵɵdirectiveInject(f.ModalController));
              }),
              (t.ɵcmp = o.ɵɵdefineComponent({
                type: t,
                selectors: [['app-settings-modal']],
                decls: 7,
                vars: 0,
                consts: [
                  ['slot', 'secondary'],
                  [3, 'click'],
                  ['slot', 'icon-only', 'name', 'close']
                ],
                template: function (n, r) {
                  1 & n &&
                    (o.ɵɵelementStart(0, 'ion-header'),
                    o.ɵɵelementStart(1, 'ion-toolbar'),
                    o.ɵɵelementStart(2, 'ion-buttons', 0),
                    o.ɵɵelementStart(3, 'ion-button', 1),
                    o.ɵɵlistener('click', function () {
                      return r.modalCtrl.dismiss();
                    }),
                    o.ɵɵelement(4, 'ion-icon', 2),
                    o.ɵɵelementEnd(),
                    o.ɵɵelementEnd(),
                    o.ɵɵelementEnd(),
                    o.ɵɵelementEnd(),
                    o.ɵɵelementStart(5, 'ion-content'),
                    o.ɵɵelement(6, 'wk-settings'),
                    o.ɵɵelementEnd());
                },
                directives: [f.IonHeader, f.IonToolbar, f.IonButtons, f.IonButton, f.IonIcon, f.IonContent, $],
                styles: ['']
              })),
              t
            );
          })(),
          ae = (function (t) {
            function e(n, r, i) {
              var s = t.call(this) || this;
              return (s.translate = n), (s.explorerService = r), (s.modalController = i), s;
            }
            return (
              (0, a.__extends)(e, t),
              (e.prototype.initialize = function () {
                return (0, a.__awaiter)(this, void 0, void 0, function () {
                  return (0, a.__generator)(this, function (n) {
                    return H('plugin initialized'), [2];
                  });
                });
              }),
              (e.prototype.afterInstall = function () {
                return (0, a.__awaiter)(this, void 0, void 0, function () {
                  return (0, a.__generator)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          H('plugin installed'),
                          document.location.href.match('localhost:4200')
                            ? [2]
                            : [4, this.modalController.create({ component: ce, backdropDismiss: !1 })]
                        );
                      case 1:
                        return [4, r.sent().present()];
                      case 2:
                        return r.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype.afterUpdate = function () {
                H('plugin updated');
              }),
              (e.prototype.setTranslation = function (n, r) {
                this.translate.setDefaultLang(n), this.translate.use(n), this.translate.setTranslation(n, r);
              }),
              (e.prototype.customAction = function (n, r) {}),
              (e.prototype.afterEpisodeMiddleware = function (n, r) {
                return Promise.resolve(void 0);
              }),
              (e.prototype.afterMovieMiddleware = function (n) {
                return Promise.resolve(void 0);
              }),
              (e.prototype.afterShowMiddleware = function (n) {
                return Promise.resolve(void 0);
              }),
              (e.prototype.beforeEpisodeMiddleware = function (n, r) {
                return Promise.resolve(void 0);
              }),
              (e.prototype.beforeMovieMiddleware = function (n) {
                return Promise.resolve(void 0);
              }),
              (e.prototype.beforeShowMiddleware = function (n) {
                return Promise.resolve(void 0);
              }),
              (e.prototype.fetchExplorerFolderItem = function () {
                return this.explorerService.get().toPromise();
              }),
              (e.prototype.getFileActionButtons = function (n, r, i, s, u, c) {
                return Promise.resolve([]);
              }),
              (e.ɵfac = function (r) {
                return new (r || e)(o.ɵɵinject(j.TranslateService), o.ɵɵinject(ue), o.ɵɵinject(f.ModalController));
              }),
              (e.ɵprov = o.ɵɵdefineInjectable({ token: e, factory: e.ɵfac })),
              e
            );
          })(m.PluginBaseService),
          tt = p(498),
          le = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              (0, a.__extends)(e, t),
              (e.pluginService = ae),
              (e.settingsComponent = $),
              (e.ɵfac = (function () {
                var n;
                return function (i) {
                  return (n || (n = o.ɵɵgetInheritedFactory(e)))(i || e);
                };
              })()),
              (e.ɵmod = o.ɵɵdefineNgModule({ type: e })),
              (e.ɵinj = o.ɵɵdefineInjector({
                providers: (0, a.__spreadArray)((0, a.__spreadArray)([ae], m.WakoProviders), [W, ue]),
                imports: [[b.CommonModule, tt.FormsModule, f.IonicModule.forRoot(), j.TranslateModule.forRoot()]]
              })),
              e
            );
          })(m.PluginBaseModule),
          nt = le;
      })(),
      q
    );
  })();
});
