!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'tslib', 'ng.forms', 'ngx-translate.core', 'rxjs', 'wako-app.mobile-sdk', 'ng.core', 'ionic.angular'], e)
    : 'object' == typeof exports
    ? (exports.plugin = e(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : (t.plugin = e(
        t['ng.common'],
        t.tslib,
        t['ng.forms'],
        t['ngx-translate.core'],
        t.rxjs,
        t['wako-app.mobile-sdk'],
        t['ng.core'],
        t['ionic.angular']
      ));
})('undefined' != typeof self ? self : this, function (t, e, n, r, i, o, s, u) {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var i in t)
            n.d(
              r,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })({
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    '0S4P': function (e, n) {
      e.exports = t;
    },
    '17wl': function (t, n) {
      t.exports = e;
    },
    '3xDq': function (t, e) {
      t.exports = n;
    },
    TGDj: function (t, e) {
      t.exports = r;
    },
    Vgaj: function (t, e) {
      t.exports = i;
    },
    doF0: function (t, e) {
      t.exports = o;
    },
    vOrQ: function (t, e) {
      t.exports = s;
    },
    z1lQ: function (t, e) {
      t.exports = u;
    },
    zUnb: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'PluginModule', function () {
          return et;
        });
      var r = n('17wl'),
        i = n('0S4P'),
        o = n('z1lQ'),
        s = n('doF0'),
        u = n('TGDj');
      function c() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        Object(s.wakoLog)('plugin.premiumize-explorer', t);
      }
      var a = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(e, t),
            (e.hasApiKey = function () {
              return !!this.apikey;
            }),
            (e.setApiKey = function (t) {
              this.apikey = t;
            }),
            (e.getApiBaseUrl = function () {
              return 'https://www.premiumize.me/api';
            }),
            (e.getHeaders = function () {
              return { 'Content-Type': 'application/x-www-form-urlencoded' };
            }),
            (e.get = function (e, n, r) {
              return n || (n = {}), n.apikey || (n.apikey = this.apikey), t.get.call(this, e, n, r);
            }),
            (e.post = function (e, n, r) {
              return (
                e.match('apikey') || (e += '?apikey=' + this.apikey),
                t.request.call(this, { method: 'POST', url: this.getApiBaseUrl() + e, body: n, headers: this.getHeaders() }, r)
              );
            }),
            e
          );
        })(s.WakoBaseHttpService),
        l = (function () {
          function t() {}
          return (
            (t.submit = function (t) {
              return a.get('/folder/list', { id: t });
            }),
            t
          );
        })();
      function p(t) {
        return 'function' == typeof t;
      }
      var f = !1,
        h = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            f = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return f;
          }
        };
      function d(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      var b = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (h.useDeprecatedSynchronousErrorHandling) throw t;
            d(t);
          },
          complete: function () {}
        },
        y = (function () {
          return (
            Array.isArray ||
            function (t) {
              return t && 'number' == typeof t.length;
            }
          );
        })();
      function m(t) {
        return null !== t && 'object' == typeof t;
      }
      var g = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function (t, e) {
                      return e + 1 + ') ' + t.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        v = (function () {
          function t(t) {
            (this.closed = !1), (this._parentOrParents = null), (this._subscriptions = null), t && (this._unsubscribe = t);
          }
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this._parentOrParents,
                  r = this._unsubscribe,
                  i = this._subscriptions;
                if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t)) n.remove(this);
                else if (null !== n) for (var o = 0; o < n.length; ++o) n[o].remove(this);
                if (p(r))
                  try {
                    r.call(this);
                  } catch (c) {
                    e = c instanceof g ? _(c.errors) : [c];
                  }
                if (y(i)) {
                  o = -1;
                  for (var s = i.length; ++o < s; ) {
                    var u = i[o];
                    if (m(u))
                      try {
                        u.unsubscribe();
                      } catch (c) {
                        (e = e || []), c instanceof g ? (e = e.concat(_(c.errors))) : e.push(c);
                      }
                  }
                }
                if (e) throw new g(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case 'function':
                  n = new t(e);
                case 'object':
                  if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
              }
              var i = n._parentOrParents;
              if (null === i) n._parentOrParents = this;
              else if (i instanceof t) {
                if (i === this) return n;
                n._parentOrParents = [i, this];
              } else {
                if (-1 !== i.indexOf(this)) return n;
                i.push(this);
              }
              var o = this._subscriptions;
              return null === o ? (this._subscriptions = [n]) : o.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new t())),
            t
          );
        })();
      function _(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof g ? e.errors : e);
        }, []);
      }
      var w = (function () {
          return 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
        })(),
        S = (function (t) {
          function e(n, r, i) {
            var o = t.call(this) || this;
            switch (
              ((o.syncErrorValue = null), (o.syncErrorThrown = !1), (o.syncErrorThrowable = !1), (o.isStopped = !1), arguments.length)
            ) {
              case 0:
                o.destination = b;
                break;
              case 1:
                if (!n) {
                  o.destination = b;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof e
                    ? ((o.syncErrorThrowable = n.syncErrorThrowable), (o.destination = n), n.add(o))
                    : ((o.syncErrorThrowable = !0), (o.destination = new x(o, n)));
                  break;
                }
              default:
                (o.syncErrorThrowable = !0), (o.destination = new x(o, n, r, i));
            }
            return o;
          }
          return (
            r.__extends(e, t),
            (e.prototype[w] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var i = new e(t, n, r);
              return (i.syncErrorThrowable = !1), i;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(v),
        x = (function (t) {
          function e(e, n, r, i) {
            var o,
              s = t.call(this) || this;
            s._parentSubscriber = e;
            var u = s;
            return (
              p(n)
                ? (o = n)
                : n &&
                  ((o = n.next),
                  (r = n.error),
                  (i = n.complete),
                  n !== b &&
                    (p((u = Object.create(n)).unsubscribe) && s.add(u.unsubscribe.bind(u)), (u.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = u),
              (s._next = o),
              (s._error = r),
              (s._complete = i),
              s
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                h.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = h.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable) n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : d(t), this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  d(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  h.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if ((this.unsubscribe(), h.useDeprecatedSynchronousErrorHandling)) throw n;
                d(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!h.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
              try {
                e.call(this._context, n);
              } catch (r) {
                return h.useDeprecatedSynchronousErrorHandling ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0) : (d(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
            }),
            e
          );
        })(S),
        E = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(e);
            }),
            (e.prototype.notifyError = function (t, e) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.destination.complete();
            }),
            e
          );
        })(S),
        j = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (i.parent = e), (i.outerValue = n), (i.outerIndex = r), (i.index = 0), i;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(S);
      function O() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      var I = O(),
        k = (function () {
          return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
        })();
      var P = function (t) {
        if (t && 'function' == typeof t[k])
          return (
            (o = t),
            function (t) {
              var e = o[k]();
              if ('function' != typeof e.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
              return e.subscribe(t);
            }
          );
        if ((e = t) && 'number' == typeof e.length && 'function' != typeof e)
          return (
            (i = t),
            function (t) {
              for (var e = 0, n = i.length; e < n && !t.closed; e++) t.next(i[e]);
              t.complete();
            }
          );
        var e;
        if (
          (function (t) {
            return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
          })(t)
        )
          return (
            (r = t),
            function (t) {
              return (
                r
                  .then(
                    function (e) {
                      t.closed || (t.next(e), t.complete());
                    },
                    function (e) {
                      return t.error(e);
                    }
                  )
                  .then(null, d),
                t
              );
            }
          );
        if (t && 'function' == typeof t[I])
          return (
            (n = t),
            function (t) {
              for (var e = n[I](); ; ) {
                var r = e.next();
                if (r.done) {
                  t.complete();
                  break;
                }
                if ((t.next(r.value), t.closed)) break;
              }
              return (
                'function' == typeof e.return &&
                  t.add(function () {
                    e.return && e.return();
                  }),
                t
              );
            }
          );
        var n,
          r,
          i,
          o,
          s = m(t) ? 'an invalid object' : "'" + t + "'";
        throw new TypeError(
          'You provided ' + s + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
        );
      };
      function C(t) {
        return t;
      }
      function T(t) {
        return 0 === t.length
          ? C
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
      var A = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var r = this.operator,
              i = (function (t, e, n) {
                if (t) {
                  if (t instanceof S) return t;
                  if (t[w]) return t[w]();
                }
                return t || e || n ? new S(t, e, n) : new S(b);
              })(t, e, n);
            if (
              (i.add(
                r
                  ? r.call(i, this.source)
                  : this.source || (h.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable)
                  ? this._subscribe(i)
                  : this._trySubscribe(i)
              ),
              h.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && ((i.syncErrorThrowable = !1), i.syncErrorThrown))
            )
              throw i.syncErrorValue;
            return i;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              h.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    var e = t.destination;
                    if (t.closed || t.isStopped) return !1;
                    t = e && e instanceof S ? e : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }),
          (t.prototype.forEach = function (t, e) {
            var n = this;
            return new (e = M(e))(function (e, r) {
              var i;
              i = n.subscribe(
                function (e) {
                  try {
                    t(e);
                  } catch (n) {
                    r(n), i && i.unsubscribe();
                  }
                },
                r,
                e
              );
            });
          }),
          (t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t);
          }),
          (t.prototype[k] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 0 === t.length ? this : T(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var e = this;
            return new (t = M(t))(function (t, n) {
              var r;
              e.subscribe(
                function (t) {
                  return (r = t);
                },
                function (t) {
                  return n(t);
                },
                function () {
                  return t(r);
                }
              );
            });
          }),
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      })();
      function M(t) {
        if ((t || (t = h.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
      function B(t, e) {
        return function (n) {
          if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new q(t, e));
        };
      }
      var q = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new z(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        z = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.project = n), (i.count = 0), (i.thisArg = r || i), i;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(S);
      var D = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new H(t, this.project));
            }),
            t
          );
        })(),
        H = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.project = n), (r.index = 0), r;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              var r = this.innerSubscription;
              r && r.unsubscribe();
              var i = new j(this, e, n),
                o = this.destination;
              o.add(i),
                (this.innerSubscription = (function (t, e, n, r, i) {
                  if ((void 0 === i && (i = new j(t, void 0, void 0)), !i.closed)) return e instanceof A ? e.subscribe(i) : P(e)(i);
                })(this, t, 0, 0, i)),
                this.innerSubscription !== i && o.add(this.innerSubscription);
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this), this.unsubscribe();
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = null;
            }),
            (e.prototype.notifyComplete = function (e) {
              this.destination.remove(e), (this.innerSubscription = null), this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(e);
            }),
            e
          );
        })(E),
        V = n('vOrQ'),
        K = (function () {
          return function () {};
        })(),
        F = (function () {
          function t() {
            (this.storageCategory = 'plugin.premiumize_explorer_settings'),
              (this.settings$ = s.WakoSettingsService.onChangeByCategory(this.storageCategory));
          }
          return (
            (t.prototype.get = function () {
              return Object(r.__awaiter)(this, void 0, void 0, function () {
                var t, e;
                return Object(r.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, s.WakoSettingsService.getByCategory(this.storageCategory)];
                    case 1:
                      return (
                        (t = n.sent()),
                        (e = new K()),
                        t || (t = e),
                        Object.keys(e).forEach(function (n) {
                          void 0 === t[n] && (t[n] = e[n]);
                        }),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (t.prototype.set = function (t) {
              return Object(r.__awaiter)(this, void 0, void 0, function () {
                return Object(r.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, s.WakoSettingsService.setByCategory(this.storageCategory, t)];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (t.ɵprov = V['\u0275\u0275defineInjectable']({
              token: t,
              factory: (t.ɵfac = function (e) {
                return new (e || t)();
              })
            })),
            t
          );
        })(),
        L = n('Vgaj'),
        U = (function () {
          function t() {}
          return (
            (t.submit = function (t) {
              return a.get('/folder/delete', { id: t });
            }),
            t
          );
        })(),
        N = (function () {
          function t() {}
          return (
            (t.submit = function (t) {
              return a.get('/item/delete', { id: t });
            }),
            t
          );
        })(),
        W = (function () {
          function t(t) {
            (this.settingsService = t),
              this.settingsService.settings$.subscribe(function (t) {
                a.setApiKey(t.newValue.apiKey);
              });
          }
          return (
            (t.prototype.get = function (t) {
              var e = this;
              return Object(L.from)(this.settingsService.get()).pipe(
                (function t(e, n) {
                  return 'function' == typeof n
                    ? function (r) {
                        return r.pipe(
                          t(function (t, r) {
                            return ((i = e(t, r)), i instanceof A ? i : new A(P(i))).pipe(
                              B(function (e, i) {
                                return n(t, e, r, i);
                              })
                            );
                            var i;
                          })
                        );
                      }
                    : function (t) {
                        return t.lift(new D(e));
                      };
                })(function (n) {
                  return (
                    a.setApiKey(n.apiKey),
                    l.submit(t).pipe(
                      B(function (t) {
                        var n;
                        if ('error' === t.status) throw new Error(null !== (n = t.message) && void 0 !== n ? n : JSON.stringify(t));
                        var r = {
                          isRoot: 'root' === t.name,
                          title: 'root' === t.name ? 'Premiumize Explorer' : t.name,
                          folderId: t.folder_id,
                          parentId: t.parent_id,
                          label: t.name,
                          items: [],
                          goToParentAction: 'root' === t.name ? null : e.get(t.parent_id)
                        };
                        return (
                          t.content.forEach(function (t) {
                            if ('file' !== t.type || t.stream_link) {
                              var n = null;
                              'file' === t.type && (n = { id: t.id, size: t.size, link: t.link, streamLink: t.stream_link }),
                                r.items.push({
                                  id: t.id,
                                  createdAt: null,
                                  label: t.name,
                                  pluginId: 'plugin.premiumize-explorer',
                                  type: t.type,
                                  file: n,
                                  fetchChildren: 'folder' === t.type ? e.get(t.id) : null,
                                  deleteAction: 'folder' === t.type ? e.deleteFolderById(t.id) : e.deleteFileById(t.id)
                                });
                            }
                          }),
                          r
                        );
                      })
                    )
                  );
                })
              );
            }),
            (t.prototype.deleteFolderById = function (t) {
              return U.submit(t).pipe(
                B(function () {
                  return !0;
                })
              );
            }),
            (t.prototype.deleteFileById = function (t) {
              return N.submit(t).pipe(
                B(function () {
                  return !0;
                })
              );
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(V['\u0275\u0275inject'](F));
            }),
            (t.ɵprov = V['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Q = (function () {
          function t() {}
          return (
            (t.submit = function (t) {
              return a.post('/account/info' + (t ? '?apikey=' + t : ''), null, '15min');
            }),
            t
          );
        })();
      function R(t, e) {
        1 & t && V['\u0275\u0275element'](0, 'ion-spinner');
      }
      function Y(t, e) {
        if (1 & t) {
          var n = V['\u0275\u0275getCurrentView']();
          V['\u0275\u0275elementStart'](0, 'ion-item', 5),
            V['\u0275\u0275listener']('click', function () {
              return V['\u0275\u0275restoreView'](n), V['\u0275\u0275nextContext'](2).logout();
            }),
            V['\u0275\u0275elementStart'](1, 'ion-label', 6),
            V['\u0275\u0275text'](2),
            V['\u0275\u0275pipe'](3, 'translate'),
            V['\u0275\u0275elementEnd'](),
            V['\u0275\u0275elementEnd']();
        }
        2 & t && (V['\u0275\u0275advance'](2), V['\u0275\u0275textInterpolate'](V['\u0275\u0275pipeBind1'](3, 1, 'settings.logout')));
      }
      function Z(t, e) {
        if (
          (1 & t &&
            (V['\u0275\u0275elementContainerStart'](0),
            V['\u0275\u0275template'](1, Y, 4, 3, 'ion-item', 4),
            V['\u0275\u0275elementContainerEnd']()),
          2 & t)
        ) {
          var n = V['\u0275\u0275nextContext']();
          V['\u0275\u0275advance'](1), V['\u0275\u0275property']('ngIf', n.isAuth);
        }
      }
      function G(t, e) {
        if (1 & t) {
          var n = V['\u0275\u0275getCurrentView']();
          V['\u0275\u0275elementContainerStart'](0),
            V['\u0275\u0275elementStart'](1, 'ion-item', 5),
            V['\u0275\u0275listener']('click', function () {
              return V['\u0275\u0275restoreView'](n), V['\u0275\u0275nextContext']().login();
            }),
            V['\u0275\u0275elementStart'](2, 'ion-label'),
            V['\u0275\u0275text'](3),
            V['\u0275\u0275pipe'](4, 'translate'),
            V['\u0275\u0275elementEnd'](),
            V['\u0275\u0275elementEnd'](),
            V['\u0275\u0275elementStart'](5, 'ion-item', 5),
            V['\u0275\u0275listener']('click', function () {
              return V['\u0275\u0275restoreView'](n), V['\u0275\u0275nextContext']().openPremiumize();
            }),
            V['\u0275\u0275elementStart'](6, 'ion-label'),
            V['\u0275\u0275text'](7),
            V['\u0275\u0275pipe'](8, 'translate'),
            V['\u0275\u0275elementEnd'](),
            V['\u0275\u0275elementEnd'](),
            V['\u0275\u0275elementContainerEnd']();
        }
        2 & t &&
          (V['\u0275\u0275advance'](3),
          V['\u0275\u0275textInterpolate'](V['\u0275\u0275pipeBind1'](4, 2, 'settings.login')),
          V['\u0275\u0275advance'](4),
          V['\u0275\u0275textInterpolate'](V['\u0275\u0275pipeBind1'](8, 4, 'settings.noAccount')));
      }
      var $ = (function () {
          function t(t, e, n, r, i) {
            (this.settingsService = t),
              (this.alertController = e),
              (this.translateService = n),
              (this.toastService = r),
              (this.ngZone = i),
              (this.settings = null),
              (this.isLoading = !1),
              (this.isAuth = !1);
          }
          return (
            (t.prototype.ngOnInit = function () {
              return Object(r.__awaiter)(this, void 0, void 0, function () {
                var t;
                return Object(r.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (t = this), [4, this.settingsService.get()];
                    case 1:
                      return (t.settings = e.sent()), (this.isAuth = !!this.settings.apiKey), [2];
                  }
                });
              });
            }),
            (t.prototype.logout = function () {
              return Object(r.__awaiter)(this, void 0, void 0, function () {
                var t;
                return Object(r.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.settingsService.get()];
                    case 1:
                      return ((t = e.sent()).apiKey = null), [4, this.settingsService.set(t)];
                    case 2:
                      return e.sent(), this.ngOnInit(), [2];
                  }
                });
              });
            }),
            (t.prototype.login = function () {
              return Object(r.__awaiter)(this, void 0, void 0, function () {
                var t = this;
                return Object(r.__generator)(this, function (e) {
                  switch (e.label) {
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
                              handler: function (e) {
                                t.ngZone.run(function () {
                                  return Object(r.__awaiter)(t, void 0, void 0, function () {
                                    var t;
                                    return Object(r.__generator)(this, function (n) {
                                      switch (n.label) {
                                        case 0:
                                          (this.isLoading = !0), (n.label = 1);
                                        case 1:
                                          return n.trys.push([1, 4, 5, 6]), [4, Q.submit(e.apikey).toPromise()];
                                        case 2:
                                          return 'error' === n.sent().status
                                            ? (this.toastService.simpleMessage('settings.invalidApiKey'), [2])
                                            : ((this.settings.apiKey = e.apikey), [4, this.setSettings()]);
                                        case 3:
                                          return n.sent(), (this.isAuth = !!this.settings.apiKey), [3, 6];
                                        case 4:
                                          return (t = n.sent()), this.toastService.simpleMessage(t.toString()), [3, 6];
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
                      return e.sent().present(), [2];
                  }
                });
              });
            }),
            (t.prototype.openPremiumize = function () {
              s.BrowserService.open('https://www.premiumize.me/ref/922027689');
            }),
            (t.prototype.setSettings = function () {
              return Object(r.__awaiter)(this, void 0, void 0, function () {
                return Object(r.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.settingsService.set(this.settings)];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(
                V['\u0275\u0275directiveInject'](F),
                V['\u0275\u0275directiveInject'](o.AlertController),
                V['\u0275\u0275directiveInject'](u.TranslateService),
                V['\u0275\u0275directiveInject'](s.WakoToastService),
                V['\u0275\u0275directiveInject'](V.NgZone)
              );
            }),
            (t.ɵcmp = V['\u0275\u0275defineComponent']({
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
              template: function (t, e) {
                1 & t &&
                  (V['\u0275\u0275elementStart'](0, 'ion-list', 0),
                  V['\u0275\u0275elementStart'](1, 'ion-list-header'),
                  V['\u0275\u0275elementStart'](2, 'ion-label'),
                  V['\u0275\u0275element'](3, 'img', 1),
                  V['\u0275\u0275text'](4, ' Premiumize.me '),
                  V['\u0275\u0275template'](5, R, 1, 0, 'ion-spinner', 2),
                  V['\u0275\u0275elementEnd'](),
                  V['\u0275\u0275elementEnd'](),
                  V['\u0275\u0275elementStart'](6, 'ion-item'),
                  V['\u0275\u0275elementStart'](7, 'ion-label', 3),
                  V['\u0275\u0275text'](8),
                  V['\u0275\u0275pipe'](9, 'translate'),
                  V['\u0275\u0275elementEnd'](),
                  V['\u0275\u0275elementEnd'](),
                  V['\u0275\u0275template'](10, Z, 2, 1, 'ng-container', 2),
                  V['\u0275\u0275template'](11, G, 9, 6, 'ng-container', 2),
                  V['\u0275\u0275elementEnd']()),
                  2 & t &&
                    (V['\u0275\u0275advance'](5),
                    V['\u0275\u0275property']('ngIf', e.isLoading),
                    V['\u0275\u0275advance'](3),
                    V['\u0275\u0275textInterpolate1'](' ', V['\u0275\u0275pipeBind1'](9, 4, 'settings.explain'), ' '),
                    V['\u0275\u0275advance'](2),
                    V['\u0275\u0275property']('ngIf', e.isAuth),
                    V['\u0275\u0275advance'](1),
                    V['\u0275\u0275property']('ngIf', !e.isAuth));
              },
              directives: [o.IonList, o.IonListHeader, o.IonLabel, i.NgIf, o.IonItem, o.IonSpinner],
              pipes: [u.TranslatePipe],
              styles: [
                'ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:flex;align-items:center}ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .pm-icon[_ngcontent-%COMP%]{width:20px;display:inline;margin-right:10px}'
              ]
            })),
            t
          );
        })(),
        J = (function () {
          function t(t) {
            this.modalCtrl = t;
          }
          return (
            (t.prototype.ngOnInit = function () {}),
            (t.ɵfac = function (e) {
              return new (e || t)(V['\u0275\u0275directiveInject'](o.ModalController));
            }),
            (t.ɵcmp = V['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['app-settings-modal']],
              decls: 7,
              vars: 0,
              consts: [
                ['slot', 'secondary'],
                [3, 'click'],
                ['slot', 'icon-only', 'name', 'close']
              ],
              template: function (t, e) {
                1 & t &&
                  (V['\u0275\u0275elementStart'](0, 'ion-header'),
                  V['\u0275\u0275elementStart'](1, 'ion-toolbar'),
                  V['\u0275\u0275elementStart'](2, 'ion-buttons', 0),
                  V['\u0275\u0275elementStart'](3, 'ion-button', 1),
                  V['\u0275\u0275listener']('click', function () {
                    return e.modalCtrl.dismiss();
                  }),
                  V['\u0275\u0275element'](4, 'ion-icon', 2),
                  V['\u0275\u0275elementEnd'](),
                  V['\u0275\u0275elementEnd'](),
                  V['\u0275\u0275elementEnd'](),
                  V['\u0275\u0275elementEnd'](),
                  V['\u0275\u0275elementStart'](5, 'ion-content'),
                  V['\u0275\u0275element'](6, 'wk-settings'),
                  V['\u0275\u0275elementEnd']());
              },
              directives: [o.IonHeader, o.IonToolbar, o.IonButtons, o.IonButton, o.IonIcon, o.IonContent, $],
              styles: ['']
            })),
            t
          );
        })(),
        X = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (i.translate = e), (i.explorerService = n), (i.modalController = r), i;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.initialize = function () {
              return Object(r.__awaiter)(this, void 0, void 0, function () {
                return Object(r.__generator)(this, function (t) {
                  return c('plugin initialized'), [2];
                });
              });
            }),
            (e.prototype.afterInstall = function () {
              return Object(r.__awaiter)(this, void 0, void 0, function () {
                return Object(r.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        c('plugin installed'),
                        document.location.href.match('localhost:4200')
                          ? [2]
                          : [4, this.modalController.create({ component: J, backdropDismiss: !1 })]
                      );
                    case 1:
                      return [4, t.sent().present()];
                    case 2:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.afterUpdate = function () {
              c('plugin updated');
            }),
            (e.prototype.setTranslation = function (t, e) {
              this.translate.setDefaultLang(t), this.translate.use(t), this.translate.setTranslation(t, e);
            }),
            (e.prototype.customAction = function (t, e) {}),
            (e.prototype.afterEpisodeMiddleware = function (t, e) {
              return Promise.resolve(void 0);
            }),
            (e.prototype.afterMovieMiddleware = function (t) {
              return Promise.resolve(void 0);
            }),
            (e.prototype.afterShowMiddleware = function (t) {
              return Promise.resolve(void 0);
            }),
            (e.prototype.beforeEpisodeMiddleware = function (t, e) {
              return Promise.resolve(void 0);
            }),
            (e.prototype.beforeMovieMiddleware = function (t) {
              return Promise.resolve(void 0);
            }),
            (e.prototype.beforeShowMiddleware = function (t) {
              return Promise.resolve(void 0);
            }),
            (e.prototype.fetchExplorerFolderItem = function () {
              return this.explorerService.get().toPromise();
            }),
            (e.prototype.getFileActionButtons = function (t, e, n, r, i, o) {
              return Promise.resolve([]);
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(
                V['\u0275\u0275inject'](u.TranslateService),
                V['\u0275\u0275inject'](W),
                V['\u0275\u0275inject'](o.ModalController)
              );
            }),
            (e.ɵprov = V['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(s.PluginBaseService),
        tt = n('3xDq'),
        et = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(e, t),
            (e.pluginService = X),
            (e.settingsComponent = $),
            (e.ɵmod = V['\u0275\u0275defineNgModule']({ type: e })),
            (e.ɵinj = V['\u0275\u0275defineInjector']({
              factory: function (t) {
                return nt(t || e);
              },
              providers: Object(r.__spreadArrays)([X], s.WakoProviders, [F, W]),
              imports: [[i.CommonModule, tt.FormsModule, o.IonicModule.forRoot(), u.TranslateModule.forRoot()]]
            })),
            e
          );
        })(s.PluginBaseModule),
        nt = V['\u0275\u0275getInheritedFactory'](et);
      e.default = et;
    }
  });
});
