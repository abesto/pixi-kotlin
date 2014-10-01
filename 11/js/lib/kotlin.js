'use strict';var Kotlin = {};
(function() {
  function b(a, b) {
    if (null != a && null != b) {
      for (var c in b) {
        b.hasOwnProperty(c) && (a[c] = b[c]);
      }
    }
  }
  function c(a) {
    for (var b = 0;b < a.length;b++) {
      if (null != a[b] && null == a[b].$metadata$ || a[b].$metadata$.type === Kotlin.TYPE.CLASS) {
        return a[b];
      }
    }
    return null;
  }
  function d(a, b, c) {
    for (var e = 0;e < b.length;e++) {
      if (null == b[e] || null != b[e].$metadata$) {
        var f = c(b[e]), d;
        for (d in f) {
          f.hasOwnProperty(d) && (!a.hasOwnProperty(d) || a[d].$classIndex$ < f[d].$classIndex$) && (a[d] = f[d]);
        }
      }
    }
  }
  function g(a, b) {
    var e = {};
    e.baseClasses = null == a ? [] : Array.isArray(a) ? a : [a];
    e.baseClass = c(e.baseClasses);
    e.classIndex = Kotlin.newClassIndex();
    e.functions = {};
    e.properties = {};
    if (null != b) {
      for (var f in b) {
        if (b.hasOwnProperty(f)) {
          var h = b[f];
          h.$classIndex$ = e.classIndex;
          "function" === typeof h ? e.functions[f] = h : e.properties[f] = h;
        }
      }
    }
    d(e.functions, e.baseClasses, function(a) {
      return a.$metadata$.functions;
    });
    d(e.properties, e.baseClasses, function(a) {
      return a.$metadata$.properties;
    });
    return e;
  }
  function h() {
    var a = this.object_initializer$();
    Object.defineProperty(this, "object", {value:a});
    return a;
  }
  function a(a) {
    return "function" === typeof a ? a() : a;
  }
  function e(a, b) {
    if (null != a && null == a.$metadata$ || a.$metadata$.classIndex < b.$metadata$.classIndex) {
      return!1;
    }
    var c = a.$metadata$.baseClasses, f;
    for (f = 0;f < c.length;f++) {
      if (c[f] === b) {
        return!0;
      }
    }
    for (f = 0;f < c.length;f++) {
      if (e(c[f], b)) {
        return!0;
      }
    }
    return!1;
  }
  function f(a, b) {
    return function() {
      if (null !== b) {
        var c = b;
        b = null;
        c.call(a);
      }
      return a;
    };
  }
  function n(a) {
    var b = {};
    if (null == a) {
      return b;
    }
    for (var c in a) {
      a.hasOwnProperty(c) && ("function" === typeof a[c] ? a[c].type === Kotlin.TYPE.INIT_FUN ? (a[c].className = c, Object.defineProperty(b, c, {get:a[c], configurable:!0})) : b[c] = a[c] : Object.defineProperty(b, c, a[c]));
    }
    return b;
  }
  var k = function() {
    return function() {
    };
  };
  Kotlin.TYPE = {CLASS:"class", TRAIT:"trait", OBJECT:"object", INIT_FUN:"init fun"};
  Kotlin.classCount = 0;
  Kotlin.newClassIndex = function() {
    var a = Kotlin.classCount;
    Kotlin.classCount++;
    return a;
  };
  Kotlin.createClassNow = function(a, c, e, f) {
    null == c && (c = k());
    b(c, f);
    a = g(a, e);
    a.type = Kotlin.TYPE.CLASS;
    e = null !== a.baseClass ? Object.create(a.baseClass.prototype) : {};
    Object.defineProperties(e, a.properties);
    b(e, a.functions);
    e.constructor = c;
    null != a.baseClass && (c.baseInitializer = a.baseClass);
    c.$metadata$ = a;
    c.prototype = e;
    Object.defineProperty(c, "object", {get:h, configurable:!0});
    return c;
  };
  Kotlin.createObjectNow = function(a, b, c) {
    a = new (Kotlin.createClassNow(a, b, c));
    a.$metadata$ = {type:Kotlin.TYPE.OBJECT};
    return a;
  };
  Kotlin.createTraitNow = function(a, c, e) {
    var f = function() {
    };
    b(f, e);
    f.$metadata$ = g(a, c);
    f.$metadata$.type = Kotlin.TYPE.TRAIT;
    f.prototype = {};
    Object.defineProperties(f.prototype, f.$metadata$.properties);
    b(f.prototype, f.$metadata$.functions);
    Object.defineProperty(f, "object", {get:h, configurable:!0});
    return f;
  };
  Kotlin.createClass = function(b, c, e, f) {
    function d() {
      var h = Kotlin.createClassNow(a(b), c, e, f);
      Object.defineProperty(this, d.className, {value:h});
      return h;
    }
    d.type = Kotlin.TYPE.INIT_FUN;
    return d;
  };
  Kotlin.createEnumClass = function(a, b, c, e, f) {
    f = f || {};
    f.object_initializer$ = function() {
      var a = c(), b = 0, e = [], f;
      for (f in a) {
        if (a.hasOwnProperty(f)) {
          var d = a[f];
          e[b] = d;
          d.ordinal$ = b;
          d.name$ = f;
          b++;
        }
      }
      a.values$ = e;
      return a;
    };
    f.values = function() {
      return this.object.values$;
    };
    f.valueOf_61zpoe$ = function(a) {
      return this.object[a];
    };
    return Kotlin.createClass(a, b, e, f);
  };
  Kotlin.createTrait = function(b, c, e) {
    function f() {
      var d = Kotlin.createTraitNow(a(b), c, e);
      Object.defineProperty(this, f.className, {value:d});
      return d;
    }
    f.type = Kotlin.TYPE.INIT_FUN;
    return f;
  };
  Kotlin.createObject = function(b, c, e) {
    return Kotlin.createObjectNow(a(b), c, e);
  };
  Kotlin.callGetter = function(a, b, c) {
    return b.$metadata$.properties[c].get.call(a);
  };
  Kotlin.callSetter = function(a, b, c, e) {
    b.$metadata$.properties[c].set.call(a, e);
  };
  Kotlin.isType = function(a, b) {
    return null == a || null == b ? !1 : a instanceof b ? !0 : null != b && null == b.$metadata$ || b.$metadata$.type == Kotlin.TYPE.CLASS ? !1 : e(a.constructor, b);
  };
  Kotlin.getCallableRefForMemberFunction = function(a, b) {
    return function() {
      return this[b].apply(this, arguments);
    };
  };
  Kotlin.getCallableRefForExtensionFunction = function(a) {
    return function() {
      var b = [this];
      Array.prototype.push.apply(b, arguments);
      return a.apply(null, b);
    };
  };
  Kotlin.getCallableRefForConstructor = function(a) {
    return function() {
      var b = Object.create(a.prototype);
      a.apply(b, arguments);
      return b;
    };
  };
  Kotlin.getCallableRefForTopLevelProperty = function(a, b, c) {
    var e = {};
    e.name = b;
    e.get = function() {
      return a[b];
    };
    c && (e.set_za3rmp$ = function(c) {
      a[b] = c;
    });
    return e;
  };
  Kotlin.getCallableRefForMemberProperty = function(a, b) {
    var c = {};
    c.name = a;
    c.get_za3rmp$ = function(b) {
      return b[a];
    };
    b && (c.set_wn2jw4$ = function(b, c) {
      b[a] = c;
    });
    return c;
  };
  Kotlin.getCallableRefForExtensionProperty = function(a, b, c) {
    var e = {};
    e.name = a;
    e.get_za3rmp$ = b;
    void 0 !== c && (e.set_wn2jw4$ = c);
    return e;
  };
  Kotlin.modules = {};
  Kotlin.definePackage = function(a, b) {
    var c = n(b);
    return null === a ? {value:c} : {get:f(c, a)};
  };
  Kotlin.defineRootPackage = function(a, b) {
    var c = n(b);
    c.$initializer$ = null === a ? k() : a;
    return c;
  };
  Kotlin.defineModule = function(a, b) {
    if (a in Kotlin.modules) {
      throw Error("Module " + a + " is already defined");
    }
    b.$initializer$.call(b);
    Object.defineProperty(Kotlin.modules, a, {value:b});
  };
})();
(function() {
  function b(a) {
    return function() {
      throw new TypeError(void 0 !== a ? "Function " + a + " is abstract" : "Function is abstract");
    };
  }
  function c(a) {
    var b = this.constructor;
    return this instanceof b && a instanceof b ? this.isEmpty() && a.isEmpty() || this.start === a.start && this.end === a.end && this.increment === a.increment : !1;
  }
  String.prototype.startsWith = function(a) {
    return 0 === this.indexOf(a);
  };
  String.prototype.endsWith = function(a) {
    return-1 !== this.indexOf(a, this.length - a.length);
  };
  String.prototype.contains = function(a) {
    return-1 !== this.indexOf(a);
  };
  Kotlin.equals = function(a, b) {
    return null == a ? null == b : Array.isArray(a) ? Kotlin.arrayEquals(a, b) : "object" == typeof a && void 0 !== a.equals_za3rmp$ ? a.equals_za3rmp$(b) : a === b;
  };
  Kotlin.hashCode = function(a) {
    if (null == a) {
      return 0;
    }
    if ("function" == typeof a.hashCode) {
      return a.hashCode();
    }
    var b = typeof a;
    if ("object" == b || "function" == b) {
      return "kotlinHashCodeValue$" in a || (b = 4294967296 * Math.random() | 0, Object.defineProperty(a, "kotlinHashCodeValue$", {value:b, enumerable:!1})), a.kotlinHashCodeValue$;
    }
    if ("number" == b) {
      return a | 0;
    }
    if ("boolean" == b) {
      return Number(a);
    }
    a = String(a);
    for (var c = b = 0;c < a.length;c++) {
      var d = a.charCodeAt(c), b = 31 * b + d | 0
    }
    return b;
  };
  Kotlin.toString = function(a) {
    return null == a ? "null" : Array.isArray(a) ? Kotlin.arrayToString(a) : a.toString();
  };
  Kotlin.arrayToString = function(a) {
    return "[" + a.join(", ") + "]";
  };
  Kotlin.compareTo = function(a, b) {
    var c = typeof a, d = typeof a;
    return Kotlin.isChar(a) && "number" == d ? Kotlin.primitiveCompareTo(a.charCodeAt(0), b) : "number" == c && Kotlin.isChar(b) ? Kotlin.primitiveCompareTo(a, b.charCodeAt(0)) : "number" == c || "string" == c ? a < b ? -1 : a > b ? 1 : 0 : a.compareTo_za3rmp$(b);
  };
  Kotlin.primitiveCompareTo = function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  Kotlin.isNumber = function(a) {
    return "number" == typeof a || a instanceof Kotlin.Long;
  };
  Kotlin.isChar = function(a) {
    return "string" == typeof a && 1 == a.length;
  };
  Kotlin.charInc = function(a) {
    return String.fromCharCode(a.charCodeAt(0) + 1);
  };
  Kotlin.charDec = function(a) {
    return String.fromCharCode(a.charCodeAt(0) - 1);
  };
  Kotlin.toShort = function(a) {
    return(a & 65535) << 16 >> 16;
  };
  Kotlin.toByte = function(a) {
    return(a & 255) << 24 >> 24;
  };
  Kotlin.toChar = function(a) {
    return String.fromCharCode(((a | 0) % 65536 & 65535) << 16 >>> 16);
  };
  Kotlin.numberToLong = function(a) {
    return a instanceof Kotlin.Long ? a : Kotlin.Long.fromNumber(a);
  };
  Kotlin.numberToInt = function(a) {
    return a instanceof Kotlin.Long ? a.toInt() : a | 0;
  };
  Kotlin.numberToShort = function(a) {
    return Kotlin.toShort(Kotlin.numberToInt(a));
  };
  Kotlin.numberToByte = function(a) {
    return Kotlin.toByte(Kotlin.numberToInt(a));
  };
  Kotlin.numberToDouble = function(a) {
    return+a;
  };
  Kotlin.numberToChar = function(a) {
    return Kotlin.toChar(Kotlin.numberToInt(a));
  };
  Kotlin.intUpto = function(a, b) {
    return new Kotlin.NumberRange(a, b);
  };
  Kotlin.intDownto = function(a, b) {
    return new Kotlin.Progression(a, b, -1);
  };
  Kotlin.RuntimeException = Kotlin.createClassNow();
  Kotlin.NullPointerException = Kotlin.createClassNow();
  Kotlin.NoSuchElementException = Kotlin.createClassNow();
  Kotlin.IllegalArgumentException = Kotlin.createClassNow();
  Kotlin.IllegalStateException = Kotlin.createClassNow();
  Kotlin.UnsupportedOperationException = Kotlin.createClassNow();
  Kotlin.IOException = Kotlin.createClassNow();
  Kotlin.throwNPE = function() {
    throw new Kotlin.NullPointerException;
  };
  Kotlin.Iterator = Kotlin.createClassNow(null, null, {next:b("Iterator#next"), hasNext:b("Iterator#hasNext")});
  var d = Kotlin.createClassNow(Kotlin.Iterator, function(a) {
    this.array = a;
    this.index = 0;
  }, {next:function() {
    return this.array[this.index++];
  }, hasNext:function() {
    return this.index < this.array.length;
  }, remove:function() {
    if (0 > this.index || this.index > this.array.length) {
      throw new RangeError;
    }
    this.index--;
    this.array.splice(this.index, 1);
  }}), g = Kotlin.createClassNow(d, function(a) {
    this.list = a;
    this.size = a.size();
    this.index = 0;
  }, {next:function() {
    return this.list.get(this.index++);
  }});
  Kotlin.Collection = Kotlin.createClassNow();
  Kotlin.Enum = Kotlin.createClassNow(null, function() {
    this.ordinal$ = this.name$ = void 0;
  }, {name:function() {
    return this.name$;
  }, ordinal:function() {
    return this.ordinal$;
  }, toString:function() {
    return this.name();
  }});
  Kotlin.PropertyMetadata = Kotlin.createClassNow(null, function(a) {
    this.name = a;
  });
  Kotlin.AbstractCollection = Kotlin.createClassNow(Kotlin.Collection, null, {addAll_xeylzf$:function(a) {
    var b = !1;
    for (a = a.iterator();a.hasNext();) {
      this.add_za3rmp$(a.next()) && (b = !0);
    }
    return b;
  }, removeAll_xeylzf$:function(a) {
    for (var b = !1, c = this.iterator();c.hasNext();) {
      a.contains_za3rmp$(c.next()) && (c.remove(), b = !0);
    }
    return b;
  }, retainAll_xeylzf$:function(a) {
    for (var b = !1, c = this.iterator();c.hasNext();) {
      a.contains_za3rmp$(c.next()) || (c.remove(), b = !0);
    }
    return b;
  }, containsAll_xeylzf$:function(a) {
    for (a = a.iterator();a.hasNext();) {
      if (!this.contains_za3rmp$(a.next())) {
        return!1;
      }
    }
    return!0;
  }, isEmpty:function() {
    return 0 === this.size();
  }, iterator:function() {
    return new d(this.toArray());
  }, equals_za3rmp$:function(a) {
    if (this.size() !== a.size()) {
      return!1;
    }
    var b = this.iterator();
    a = a.iterator();
    for (var c = this.size();0 < c--;) {
      if (!Kotlin.equals(b.next(), a.next())) {
        return!1;
      }
    }
    return!0;
  }, toString:function() {
    for (var a = "[", b = this.iterator(), c = !0, d = this.size();0 < d--;) {
      c ? c = !1 : a += ", ", a += b.next();
    }
    return a + "]";
  }, toJSON:function() {
    return this.toArray();
  }});
  Kotlin.AbstractList = Kotlin.createClassNow(Kotlin.AbstractCollection, null, {iterator:function() {
    return new g(this);
  }, remove_za3rmp$:function(a) {
    a = this.indexOf_za3rmp$(a);
    return-1 !== a ? (this.remove_za3lpa$(a), !0) : !1;
  }, contains_za3rmp$:function(a) {
    return-1 !== this.indexOf_za3rmp$(a);
  }});
  Kotlin.ArrayList = Kotlin.createClassNow(Kotlin.AbstractList, function() {
    this.array = [];
  }, {get_za3lpa$:function(a) {
    this.checkRange(a);
    return this.array[a];
  }, set_vux3hl$:function(a, b) {
    this.checkRange(a);
    this.array[a] = b;
  }, size:function() {
    return this.array.length;
  }, iterator:function() {
    return Kotlin.arrayIterator(this.array);
  }, add_za3rmp$:function(a) {
    this.array.push(a);
    return!0;
  }, add_vux3hl$:function(a, b) {
    this.array.splice(a, 0, b);
  }, addAll_xeylzf$:function(a) {
    var b = a.iterator(), c = this.array.length;
    for (a = a.size();0 < a--;) {
      this.array[c++] = b.next();
    }
  }, remove_za3lpa$:function(a) {
    this.checkRange(a);
    return this.array.splice(a, 1)[0];
  }, clear:function() {
    this.array.length = 0;
  }, indexOf_za3rmp$:function(a) {
    for (var b = 0;b < this.array.length;b++) {
      if (Kotlin.equals(this.array[b], a)) {
        return b;
      }
    }
    return-1;
  }, lastIndexOf_za3rmp$:function(a) {
    for (var b = this.array.length - 1;0 <= b;b--) {
      if (Kotlin.equals(this.array[b], a)) {
        return b;
      }
    }
    return-1;
  }, toArray:function() {
    return this.array.slice(0);
  }, toString:function() {
    return "[" + this.array.join(", ") + "]";
  }, toJSON:function() {
    return this.array;
  }, checkRange:function(a) {
    if (0 > a || a >= this.array.length) {
      throw new RangeError;
    }
  }});
  Kotlin.Runnable = Kotlin.createClassNow(null, null, {run:b("Runnable#run")});
  Kotlin.Comparable = Kotlin.createClassNow(null, null, {compareTo:b("Comparable#compareTo")});
  Kotlin.Appendable = Kotlin.createClassNow(null, null, {append:b("Appendable#append")});
  Kotlin.Closeable = Kotlin.createClassNow(null, null, {close:b("Closeable#close")});
  Kotlin.safeParseInt = function(a) {
    a = parseInt(a, 10);
    return isNaN(a) ? null : a;
  };
  Kotlin.safeParseDouble = function(a) {
    a = parseFloat(a);
    return isNaN(a) ? null : a;
  };
  Kotlin.arrayEquals = function(a, b) {
    if (a === b) {
      return!0;
    }
    if (!Array.isArray(b) || a.length !== b.length) {
      return!1;
    }
    for (var c = 0, d = a.length;c < d;c++) {
      if (!Kotlin.equals(a[c], b[c])) {
        return!1;
      }
    }
    return!0;
  };
  Kotlin.System = function() {
    var a = "", b = function(b) {
      void 0 !== b && (a = null === b || "object" !== typeof b ? a + b : a + b.toString());
    }, c = function(b) {
      this.print(b);
      a += "\n";
    };
    return{out:function() {
      return{print:b, println:c};
    }, output:function() {
      return a;
    }, flush:function() {
      a = "";
    }};
  }();
  Kotlin.println = function(a) {
    Kotlin.System.out().println(a);
  };
  Kotlin.print = function(a) {
    Kotlin.System.out().print(a);
  };
  Kotlin.RangeIterator = Kotlin.createClassNow(Kotlin.Iterator, function(a, b, c) {
    this.start = a;
    this.end = b;
    this.increment = c;
    this.i = a;
  }, {next:function() {
    var a = this.i;
    this.i += this.increment;
    return a;
  }, hasNext:function() {
    return 0 < this.increment ? this.i <= this.end : this.i >= this.end;
  }});
  Kotlin.NumberRange = Kotlin.createClassNow(null, function(a, b) {
    this.start = a;
    this.end = b;
    this.increment = 1;
  }, {contains:function(a) {
    return this.start <= a && a <= this.end;
  }, iterator:function() {
    return new Kotlin.RangeIterator(this.start, this.end, this.increment);
  }, isEmpty:function() {
    return this.start > this.end;
  }, equals_za3rmp$:c});
  Kotlin.NumberProgression = Kotlin.createClassNow(null, function(a, b, c) {
    this.start = a;
    this.end = b;
    this.increment = c;
  }, {iterator:function() {
    return new Kotlin.RangeIterator(this.start, this.end, this.increment);
  }, isEmpty:function() {
    return 0 < this.increment ? this.start > this.end : this.start < this.end;
  }});
  Kotlin.LongRangeIterator = Kotlin.createClassNow(Kotlin.Iterator, function(a, b, c) {
    this.start = a;
    this.end = b;
    this.increment = c;
    this.i = a;
  }, {next:function() {
    var a = this.i;
    this.i = this.i.add(this.increment);
    return a;
  }, hasNext:function() {
    return this.increment.isNegative() ? 0 <= this.i.compare(this.end) : 0 >= this.i.compare(this.end);
  }});
  Kotlin.LongRange = Kotlin.createClassNow(null, function(a, b) {
    this.start = a;
    this.end = b;
    this.increment = Kotlin.Long.ONE;
  }, {contains:function(a) {
    return 0 >= this.start.compare(a) && 0 >= a.compare(this.end);
  }, iterator:function() {
    return new Kotlin.LongRangeIterator(this.start, this.end, this.increment);
  }, isEmpty:function() {
    return 0 < this.start.compare(this.end);
  }, equals_za3rmp$:c});
  Kotlin.LongProgression = Kotlin.createClassNow(null, function(a, b, c) {
    this.start = a;
    this.end = b;
    this.increment = c;
  }, {iterator:function() {
    return new Kotlin.LongRangeIterator(this.start, this.end, this.increment);
  }, isEmpty:function() {
    return this.increment.isNegative() ? 0 > this.start.compare(this.end) : 0 < this.start.compare(this.end);
  }});
  Kotlin.CharRangeIterator = Kotlin.createClassNow(Kotlin.RangeIterator, function(a, b, c) {
    Kotlin.RangeIterator.call(this, a, b, c);
  }, {next:function() {
    var a = this.i;
    this.i += this.increment;
    return String.fromCharCode(a);
  }});
  Kotlin.CharRange = Kotlin.createClassNow(null, function(a, b) {
    this.start = a.charCodeAt(0);
    this.end = b.charCodeAt(0);
    this.increment = 1;
  }, {contains:function(a) {
    a = a.charCodeAt(0);
    return this.start <= a && a <= this.end;
  }, iterator:function() {
    return new Kotlin.CharRangeIterator(this.start, this.end, this.increment);
  }, isEmpty:function() {
    return this.start > this.end;
  }, equals_za3rmp$:c});
  Kotlin.CharNumberProgression = Kotlin.createClassNow(null, function(a, b, c) {
    this.start = a.charCodeAt(0);
    this.end = b.charCodeAt(0);
    this.increment = c;
  }, {iterator:function() {
    return new Kotlin.CharRangeIterator(this.start, this.end, this.increment);
  }, isEmpty:function() {
    return 0 < this.increment ? this.start > this.end : this.start < this.end;
  }});
  Kotlin.Comparator = Kotlin.createClassNow(null, null, {compare:b("Comparator#compare")});
  var h = Kotlin.createClassNow(Kotlin.Comparator, function(a) {
    this.compare = a;
  });
  Kotlin.comparator = function(a) {
    return new h(a);
  };
  Kotlin.collectionsMax = function(a, b) {
    if (a.isEmpty()) {
      throw Error();
    }
    for (var c = a.iterator(), d = c.next();c.hasNext();) {
      var h = c.next();
      0 > b.compare(d, h) && (d = h);
    }
    return d;
  };
  Kotlin.collectionsSort = function(a, b) {
    var c = void 0;
    void 0 !== b && (c = b.compare.bind(b));
    a instanceof Array && a.sort(c);
    for (var d = [], h = a.iterator();h.hasNext();) {
      d.push(h.next());
    }
    d.sort(c);
    c = 0;
    for (h = d.length;c < h;c++) {
      a.set_vux3hl$(c, d[c]);
    }
  };
  Kotlin.copyToArray = function(a) {
    var b = [];
    for (a = a.iterator();a.hasNext();) {
      b.push(a.next());
    }
    return b;
  };
  Kotlin.StringBuilder = Kotlin.createClassNow(null, function() {
    this.string = "";
  }, {append:function(a, b, c) {
    this.string = void 0 == b && void 0 == c ? this.string + a.toString() : void 0 == c ? this.string + a.toString().substring(b) : this.string + a.toString().substring(b, c);
    return this;
  }, reverse:function() {
    this.string = this.string.split("").reverse().join("");
    return this;
  }, toString:function() {
    return this.string;
  }});
  Kotlin.splitString = function(a, b, c) {
    return a.split(RegExp(b), c);
  };
  Kotlin.nullArray = function(a) {
    for (var b = [];0 < a;) {
      b[--a] = null;
    }
    return b;
  };
  Kotlin.numberArrayOfSize = function(a) {
    return Kotlin.arrayFromFun(a, function() {
      return 0;
    });
  };
  Kotlin.charArrayOfSize = function(a) {
    return Kotlin.arrayFromFun(a, function() {
      return "\x00";
    });
  };
  Kotlin.booleanArrayOfSize = function(a) {
    return Kotlin.arrayFromFun(a, function() {
      return!1;
    });
  };
  Kotlin.longArrayOfSize = function(a) {
    return Kotlin.arrayFromFun(a, function() {
      return Kotlin.Long.ZERO;
    });
  };
  Kotlin.arrayFromFun = function(a, b) {
    for (var c = Array(a), d = 0;d < a;d++) {
      c[d] = b(d);
    }
    return c;
  };
  Kotlin.arrayIndices = function(a) {
    return new Kotlin.NumberRange(0, a.length - 1);
  };
  Kotlin.arrayIterator = function(a) {
    return new d(a);
  };
  Kotlin.jsonFromTuples = function(a) {
    for (var b = a.length, c = {};0 < b;) {
      --b, c[a[b][0]] = a[b][1];
    }
    return c;
  };
  Kotlin.jsonAddProperties = function(a, b) {
    for (var c in b) {
      b.hasOwnProperty(c) && (a[c] = b[c]);
    }
    return a;
  };
})();
(function() {
  function b(a, b) {
    this.key = a;
    this.value = b;
  }
  function c(a) {
    for (a = a.entrySet().iterator();a.hasNext();) {
      var b = a.next();
      this.put_wn2jw4$(b.getKey(), b.getValue());
    }
  }
  function d(a) {
    if (null == a) {
      return "";
    }
    if ("string" == typeof a) {
      return a;
    }
    if ("function" == typeof a.hashCode) {
      return a = a.hashCode(), "string" == typeof a ? a : d(a);
    }
    if ("function" == typeof a.toString) {
      return a.toString();
    }
    try {
      return String(a);
    } catch (b) {
      return Object.prototype.toString.call(a);
    }
  }
  function g(a, b) {
    return a.equals_za3rmp$(b);
  }
  function h(a, b) {
    return null != b && "function" == typeof b.equals_za3rmp$ ? b.equals_za3rmp$(a) : a === b;
  }
  function a(a, b, c, d) {
    this[0] = a;
    this.entries = [];
    this.addEntry(b, c);
    null !== d && (this.getEqualityFunction = function() {
      return d;
    });
  }
  function e(a) {
    return function(b) {
      for (var c = this.entries.length, d, e = this.getEqualityFunction(b);c--;) {
        if (d = this.entries[c], e(b, d[0])) {
          switch(a) {
            case m:
              return!0;
            case p:
              return d;
            case r:
              return[c, d[1]];
          }
        }
      }
      return!1;
    };
  }
  function f(a) {
    return function(b) {
      for (var c = b.length, d = 0, e = this.entries.length;d < e;++d) {
        b[c + d] = this.entries[d][a];
      }
    };
  }
  function n(b, c) {
    var d = b[c];
    return d && d instanceof a ? d : null;
  }
  function k() {
    Kotlin.ComplexHashMap.call(this);
    this.orderedKeys = [];
    this.super_put_wn2jw4$ = this.put_wn2jw4$;
    this.put_wn2jw4$ = function(a, b) {
      this.containsKey_za3rmp$(a) || this.orderedKeys.push(a);
      return this.super_put_wn2jw4$(a, b);
    };
    this.super_remove_za3rmp$ = this.remove_za3rmp$;
    this.remove_za3rmp$ = function(a) {
      var b = this.orderedKeys.indexOf(a);
      -1 != b && this.orderedKeys.splice(b, 1);
      return this.super_remove_za3rmp$(a);
    };
    this.super_clear = this.clear;
    this.clear = function() {
      this.super_clear();
      this.orderedKeys = [];
    };
    this.keySet = function() {
      var a = new Kotlin.LinkedHashSet;
      a.map = this;
      return a;
    };
    this.values = function() {
      for (var a = new Kotlin.LinkedHashSet, b = 0, c = this.orderedKeys, d = c.length;b < d;b++) {
        a.add_za3rmp$(this.get_za3rmp$(c[b]));
      }
      return a;
    };
    this.entrySet = function() {
      for (var a = new Kotlin.LinkedHashSet, c = 0, d = this.orderedKeys, e = d.length;c < e;c++) {
        a.add_za3rmp$(new b(d[c], this.get_za3rmp$(d[c])));
      }
      return a;
    };
  }
  b.prototype.getKey = function() {
    return this.key;
  };
  b.prototype.getValue = function() {
    return this.value;
  };
  var l = "function" == typeof Array.prototype.splice ? function(a, b) {
    a.splice(b, 1);
  } : function(a, b) {
    var c, d, e;
    if (b === a.length - 1) {
      a.length = b;
    } else {
      for (c = a.slice(b + 1), a.length = b, d = 0, e = c.length;d < e;++d) {
        a[b + d] = c[d];
      }
    }
  }, m = 0, p = 1, r = 2;
  a.prototype = {getEqualityFunction:function(a) {
    return null != a && "function" == typeof a.equals_za3rmp$ ? g : h;
  }, getEntryForKey:e(p), getEntryAndIndexForKey:e(r), removeEntryForKey:function(a) {
    return(a = this.getEntryAndIndexForKey(a)) ? (l(this.entries, a[0]), a) : null;
  }, addEntry:function(a, b) {
    this.entries[this.entries.length] = [a, b];
  }, keys:f(0), values:f(1), getEntries:function(a) {
    for (var b = a.length, c = 0, d = this.entries.length;c < d;++c) {
      a[b + c] = this.entries[c].slice(0);
    }
  }, containsKey_za3rmp$:e(m), containsValue_za3rmp$:function(a) {
    for (var b = this.entries.length;b--;) {
      if (a === this.entries[b][1]) {
        return!0;
      }
    }
    return!1;
  }};
  var s = function(e, f) {
    var h = this, g = [], k = {}, m = "function" == typeof e ? e : d, p = "function" == typeof f ? f : null;
    this.put_wn2jw4$ = function(b, c) {
      var d = m(b), e, f = null;
      (e = n(k, d)) ? (d = e.getEntryForKey(b)) ? (f = d[1], d[1] = c) : e.addEntry(b, c) : (e = new a(d, b, c, p), g[g.length] = e, k[d] = e);
      return f;
    };
    this.get_za3rmp$ = function(a) {
      var b = m(a);
      if (b = n(k, b)) {
        if (a = b.getEntryForKey(a)) {
          return a[1];
        }
      }
      return null;
    };
    this.containsKey_za3rmp$ = function(a) {
      var b = m(a);
      return(b = n(k, b)) ? b.containsKey_za3rmp$(a) : !1;
    };
    this.containsValue_za3rmp$ = function(a) {
      for (var b = g.length;b--;) {
        if (g[b].containsValue_za3rmp$(a)) {
          return!0;
        }
      }
      return!1;
    };
    this.clear = function() {
      g.length = 0;
      k = {};
    };
    this.isEmpty = function() {
      return!g.length;
    };
    var q = function(a) {
      return function() {
        for (var b = [], c = g.length;c--;) {
          g[c][a](b);
        }
        return b;
      };
    };
    this._keys = q("keys");
    this._values = q("values");
    this._entries = q("getEntries");
    this.values = function() {
      for (var a = this._values(), b = a.length, c = new Kotlin.ArrayList;b--;) {
        c.add_za3rmp$(a[b]);
      }
      return c;
    };
    this.remove_za3rmp$ = function(a) {
      var b = m(a), c = null, d = null, e = n(k, b);
      if (e && (d = e.removeEntryForKey(a), null !== d && (c = d[1], !e.entries.length))) {
        a: {
          for (a = g.length;a--;) {
            if (d = g[a], b === d[0]) {
              break a;
            }
          }
          a = null;
        }
        l(g, a);
        delete k[b];
      }
      return c;
    };
    this.size = function() {
      for (var a = 0, b = g.length;b--;) {
        a += g[b].entries.length;
      }
      return a;
    };
    this.each = function(a) {
      for (var b = h._entries(), c = b.length, d;c--;) {
        d = b[c], a(d[0], d[1]);
      }
    };
    this.putAll_za3j1t$ = c;
    this.clone = function() {
      var a = new s(e, f);
      a.putAll_za3j1t$(h);
      return a;
    };
    this.keySet = function() {
      for (var a = new Kotlin.ComplexHashSet, b = this._keys(), c = b.length;c--;) {
        a.add_za3rmp$(b[c]);
      }
      return a;
    };
    this.entrySet = function() {
      for (var a = new Kotlin.ComplexHashSet, c = this._entries(), d = c.length;d--;) {
        var e = c[d];
        a.add_za3rmp$(new b(e[0], e[1]));
      }
      return a;
    };
  };
  Kotlin.HashTable = s;
  Kotlin.Map = Kotlin.createClassNow();
  Kotlin.HashMap = Kotlin.createClassNow(Kotlin.Map, function() {
    Kotlin.HashTable.call(this);
  });
  Kotlin.ComplexHashMap = Kotlin.HashMap;
  var t = Kotlin.createClassNow(Kotlin.Iterator, function(a, b) {
    this.map = a;
    this.keys = b;
    this.size = b.length;
    this.index = 0;
  }, {next:function() {
    return this.map[this.keys[this.index++]];
  }, hasNext:function() {
    return this.index < this.size;
  }}), u = Kotlin.createClassNow(Kotlin.Collection, function(a) {
    this.map = a;
  }, {iterator:function() {
    return new t(this.map.map, Object.keys(this.map.map));
  }, isEmpty:function() {
    return 0 === this.map.$size;
  }, contains:function(a) {
    return this.map.containsValue_za3rmp$(a);
  }});
  Kotlin.AbstractPrimitiveHashMap = Kotlin.createClassNow(Kotlin.Map, function() {
    this.$size = 0;
    this.map = Object.create(null);
  }, {size:function() {
    return this.$size;
  }, isEmpty:function() {
    return 0 === this.$size;
  }, containsKey_za3rmp$:function(a) {
    return void 0 !== this.map[a];
  }, containsValue_za3rmp$:function(a) {
    var b = this.map, c;
    for (c in b) {
      if (b[c] === a) {
        return!0;
      }
    }
    return!1;
  }, get_za3rmp$:function(a) {
    return this.map[a];
  }, put_wn2jw4$:function(a, b) {
    var c = this.map[a];
    this.map[a] = void 0 === b ? null : b;
    void 0 === c && this.$size++;
    return c;
  }, remove_za3rmp$:function(a) {
    var b = this.map[a];
    void 0 !== b && (delete this.map[a], this.$size--);
    return b;
  }, clear:function() {
    this.$size = 0;
    this.map = {};
  }, putAll_za3j1t$:c, entrySet:function() {
    var a = new Kotlin.ComplexHashSet, c = this.map, d;
    for (d in c) {
      a.add_za3rmp$(new b(d, c[d]));
    }
    return a;
  }, getKeySetClass:function() {
    throw Error("Kotlin.AbstractPrimitiveHashMap.getKetSetClass is abstract");
  }, keySet:function() {
    var a = new (this.getKeySetClass()), b = this.map, c;
    for (c in b) {
      a.add_za3rmp$(c);
    }
    return a;
  }, values:function() {
    return new u(this);
  }, toJSON:function() {
    return this.map;
  }});
  Kotlin.DefaultPrimitiveHashMap = Kotlin.createClassNow(Kotlin.AbstractPrimitiveHashMap, function() {
    Kotlin.AbstractPrimitiveHashMap.call(this);
  }, {getKeySetClass:function() {
    return Kotlin.DefaultPrimitiveHashSet;
  }});
  Kotlin.PrimitiveNumberHashMap = Kotlin.createClassNow(Kotlin.AbstractPrimitiveHashMap, function() {
    Kotlin.AbstractPrimitiveHashMap.call(this);
    this.$keySetClass$ = Kotlin.PrimitiveNumberHashSet;
  }, {getKeySetClass:function() {
    return Kotlin.PrimitiveNumberHashSet;
  }});
  Kotlin.PrimitiveBooleanHashMap = Kotlin.createClassNow(Kotlin.AbstractPrimitiveHashMap, function() {
    Kotlin.AbstractPrimitiveHashMap.call(this);
  }, {getKeySetClass:function() {
    return Kotlin.PrimitiveBooleanHashSet;
  }});
  k.prototype = Object.create(Kotlin.ComplexHashMap);
  Kotlin.LinkedHashMap = k;
  Kotlin.LinkedHashSet = Kotlin.createClassNow(Kotlin.AbstractCollection, function() {
    this.map = new Kotlin.LinkedHashMap;
  }, {size:function() {
    return this.map.size();
  }, contains_za3rmp$:function(a) {
    return this.map.containsKey_za3rmp$(a);
  }, iterator:function() {
    return new SetIterator(this);
  }, add_za3rmp$:function(a) {
    return null == this.map.put_wn2jw4$(a, !0);
  }, remove_za3rmp$:function(a) {
    return null != this.map.remove_za3rmp$(a);
  }, clear:function() {
    this.map.clear();
  }, toArray:function() {
    return this.map.orderedKeys.slice();
  }});
})();
Kotlin.Set = Kotlin.createClassNow(Kotlin.Collection);
var SetIterator = Kotlin.createClassNow(Kotlin.Iterator, function(b) {
  this.set = b;
  this.keys = b.toArray();
  this.index = 0;
}, {next:function() {
  return this.keys[this.index++];
}, hasNext:function() {
  return this.index < this.keys.length;
}, remove:function() {
  this.set.remove_za3rmp$(this.keys[this.index - 1]);
}});
Kotlin.AbstractPrimitiveHashSet = Kotlin.createClassNow(Kotlin.AbstractCollection, function() {
  this.$size = 0;
  this.map = {};
}, {size:function() {
  return this.$size;
}, contains_za3rmp$:function(b) {
  return!0 === this.map[b];
}, iterator:function() {
  return new SetIterator(this);
}, add_za3rmp$:function(b) {
  var c = this.map[b];
  this.map[b] = !0;
  if (!0 === c) {
    return!1;
  }
  this.$size++;
  return!0;
}, remove_za3rmp$:function(b) {
  return!0 === this.map[b] ? (delete this.map[b], this.$size--, !0) : !1;
}, clear:function() {
  this.$size = 0;
  this.map = {};
}, convertKeyToKeyType:function(b) {
  throw Error("Kotlin.AbstractPrimitiveHashSet.convertKeyToKeyType is abstract");
}, toArray:function() {
  for (var b = Object.keys(this.map), c = 0;c < b.length;c++) {
    b[c] = this.convertKeyToKeyType(b[c]);
  }
  return b;
}});
Kotlin.DefaultPrimitiveHashSet = Kotlin.createClassNow(Kotlin.AbstractPrimitiveHashSet, function() {
  Kotlin.AbstractPrimitiveHashSet.call(this);
}, {toArray:function() {
  return Object.keys(this.map);
}});
Kotlin.PrimitiveNumberHashSet = Kotlin.createClassNow(Kotlin.AbstractPrimitiveHashSet, function() {
  Kotlin.AbstractPrimitiveHashSet.call(this);
}, {convertKeyToKeyType:function(b) {
  return+b;
}});
Kotlin.PrimitiveBooleanHashSet = Kotlin.createClassNow(Kotlin.AbstractPrimitiveHashSet, function() {
  Kotlin.AbstractPrimitiveHashSet.call(this);
}, {convertKeyToKeyType:function(b) {
  return "true" == b;
}});
(function() {
  function b(c, d) {
    var g = new Kotlin.HashTable(c, d);
    this.addAll_xeylzf$ = Kotlin.AbstractCollection.prototype.addAll_xeylzf$;
    this.removeAll_xeylzf$ = Kotlin.AbstractCollection.prototype.removeAll_xeylzf$;
    this.retainAll_xeylzf$ = Kotlin.AbstractCollection.prototype.retainAll_xeylzf$;
    this.containsAll_xeylzf$ = Kotlin.AbstractCollection.prototype.containsAll_xeylzf$;
    this.add_za3rmp$ = function(b) {
      return!g.put_wn2jw4$(b, !0);
    };
    this.toArray = function() {
      return g._keys();
    };
    this.iterator = function() {
      return new SetIterator(this);
    };
    this.remove_za3rmp$ = function(b) {
      return null != g.remove_za3rmp$(b);
    };
    this.contains_za3rmp$ = function(b) {
      return g.containsKey_za3rmp$(b);
    };
    this.clear = function() {
      g.clear();
    };
    this.size = function() {
      return g.size();
    };
    this.isEmpty = function() {
      return g.isEmpty();
    };
    this.clone = function() {
      var h = new b(c, d);
      h.addAll_xeylzf$(g.keys());
      return h;
    };
    this.equals_za3rmp$ = function(b) {
      if (null === b || void 0 === b) {
        return!1;
      }
      if (this.size() === b.size()) {
        var a = this.iterator();
        for (b = b.iterator();;) {
          var c = a.hasNext(), d = b.hasNext();
          if (c != d) {
            break;
          }
          if (d) {
            if (c = a.next(), d = b.next(), !Kotlin.equals(c, d)) {
              break;
            }
          } else {
            return!0;
          }
        }
      }
      return!1;
    };
    this.toString = function() {
      for (var b = "[", a = this.iterator(), c = !0;a.hasNext();) {
        c ? c = !1 : b += ", ", b += a.next();
      }
      return b + "]";
    };
    this.intersection = function(h) {
      var a = new b(c, d);
      h = h.values();
      for (var e = h.length, f;e--;) {
        f = h[e], g.containsKey_za3rmp$(f) && a.add_za3rmp$(f);
      }
      return a;
    };
    this.union = function(b) {
      var a = this.clone();
      b = b.values();
      for (var c = b.length, d;c--;) {
        d = b[c], g.containsKey_za3rmp$(d) || a.add_za3rmp$(d);
      }
      return a;
    };
    this.isSubsetOf = function(b) {
      for (var a = g.keys(), c = a.length;c--;) {
        if (!b.contains_za3rmp$(a[c])) {
          return!1;
        }
      }
      return!0;
    };
  }
  Kotlin.HashSet = Kotlin.createClassNow(Kotlin.Set, function() {
    b.call(this);
  });
  Kotlin.ComplexHashSet = Kotlin.HashSet;
})();
(function(b) {
  b.Long = function(b, d) {
    this.low_ = b | 0;
    this.high_ = d | 0;
  };
  b.Long.IntCache_ = {};
  b.Long.fromInt = function(c) {
    if (-128 <= c && 128 > c) {
      var d = b.Long.IntCache_[c];
      if (d) {
        return d;
      }
    }
    d = new b.Long(c | 0, 0 > c ? -1 : 0);
    -128 <= c && 128 > c && (b.Long.IntCache_[c] = d);
    return d;
  };
  b.Long.fromNumber = function(c) {
    return isNaN(c) || !isFinite(c) ? b.Long.ZERO : c <= -b.Long.TWO_PWR_63_DBL_ ? b.Long.MIN_VALUE : c + 1 >= b.Long.TWO_PWR_63_DBL_ ? b.Long.MAX_VALUE : 0 > c ? b.Long.fromNumber(-c).negate() : new b.Long(c % b.Long.TWO_PWR_32_DBL_ | 0, c / b.Long.TWO_PWR_32_DBL_ | 0);
  };
  b.Long.fromBits = function(c, d) {
    return new b.Long(c, d);
  };
  b.Long.fromString = function(c, d) {
    if (0 == c.length) {
      throw Error("number format error: empty string");
    }
    var g = d || 10;
    if (2 > g || 36 < g) {
      throw Error("radix out of range: " + g);
    }
    if ("-" == c.charAt(0)) {
      return b.Long.fromString(c.substring(1), g).negate();
    }
    if (0 <= c.indexOf("-")) {
      throw Error('number format error: interior "-" character: ' + c);
    }
    for (var h = b.Long.fromNumber(Math.pow(g, 8)), a = b.Long.ZERO, e = 0;e < c.length;e += 8) {
      var f = Math.min(8, c.length - e), n = parseInt(c.substring(e, e + f), g);
      8 > f ? (f = b.Long.fromNumber(Math.pow(g, f)), a = a.multiply(f).add(b.Long.fromNumber(n))) : (a = a.multiply(h), a = a.add(b.Long.fromNumber(n)));
    }
    return a;
  };
  b.Long.TWO_PWR_16_DBL_ = 65536;
  b.Long.TWO_PWR_24_DBL_ = 16777216;
  b.Long.TWO_PWR_32_DBL_ = b.Long.TWO_PWR_16_DBL_ * b.Long.TWO_PWR_16_DBL_;
  b.Long.TWO_PWR_31_DBL_ = b.Long.TWO_PWR_32_DBL_ / 2;
  b.Long.TWO_PWR_48_DBL_ = b.Long.TWO_PWR_32_DBL_ * b.Long.TWO_PWR_16_DBL_;
  b.Long.TWO_PWR_64_DBL_ = b.Long.TWO_PWR_32_DBL_ * b.Long.TWO_PWR_32_DBL_;
  b.Long.TWO_PWR_63_DBL_ = b.Long.TWO_PWR_64_DBL_ / 2;
  b.Long.ZERO = b.Long.fromInt(0);
  b.Long.ONE = b.Long.fromInt(1);
  b.Long.NEG_ONE = b.Long.fromInt(-1);
  b.Long.MAX_VALUE = b.Long.fromBits(-1, 2147483647);
  b.Long.MIN_VALUE = b.Long.fromBits(0, -2147483648);
  b.Long.TWO_PWR_24_ = b.Long.fromInt(16777216);
  b.Long.prototype.toInt = function() {
    return this.low_;
  };
  b.Long.prototype.toNumber = function() {
    return this.high_ * b.Long.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
  };
  b.Long.prototype.toString = function(c) {
    c = c || 10;
    if (2 > c || 36 < c) {
      throw Error("radix out of range: " + c);
    }
    if (this.isZero()) {
      return "0";
    }
    if (this.isNegative()) {
      if (this.equals(b.Long.MIN_VALUE)) {
        var d = b.Long.fromNumber(c), g = this.div(d), d = g.multiply(d).subtract(this);
        return g.toString(c) + d.toInt().toString(c);
      }
      return "-" + this.negate().toString(c);
    }
    for (var g = b.Long.fromNumber(Math.pow(c, 6)), d = this, h = "";;) {
      var a = d.div(g), e = d.subtract(a.multiply(g)).toInt().toString(c), d = a;
      if (d.isZero()) {
        return e + h;
      }
      for (;6 > e.length;) {
        e = "0" + e;
      }
      h = "" + e + h;
    }
  };
  b.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  b.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  b.Long.prototype.getLowBitsUnsigned = function() {
    return 0 <= this.low_ ? this.low_ : b.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  b.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      return this.equals(b.Long.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
    }
    for (var c = 0 != this.high_ ? this.high_ : this.low_, d = 31;0 < d && 0 == (c & 1 << d);d--) {
    }
    return 0 != this.high_ ? d + 33 : d + 1;
  };
  b.Long.prototype.isZero = function() {
    return 0 == this.high_ && 0 == this.low_;
  };
  b.Long.prototype.isNegative = function() {
    return 0 > this.high_;
  };
  b.Long.prototype.isOdd = function() {
    return 1 == (this.low_ & 1);
  };
  b.Long.prototype.equals = function(b) {
    return this.high_ == b.high_ && this.low_ == b.low_;
  };
  b.Long.prototype.notEquals = function(b) {
    return this.high_ != b.high_ || this.low_ != b.low_;
  };
  b.Long.prototype.lessThan = function(b) {
    return 0 > this.compare(b);
  };
  b.Long.prototype.lessThanOrEqual = function(b) {
    return 0 >= this.compare(b);
  };
  b.Long.prototype.greaterThan = function(b) {
    return 0 < this.compare(b);
  };
  b.Long.prototype.greaterThanOrEqual = function(b) {
    return 0 <= this.compare(b);
  };
  b.Long.prototype.compare = function(b) {
    if (this.equals(b)) {
      return 0;
    }
    var d = this.isNegative(), g = b.isNegative();
    return d && !g ? -1 : !d && g ? 1 : this.subtract(b).isNegative() ? -1 : 1;
  };
  b.Long.prototype.negate = function() {
    return this.equals(b.Long.MIN_VALUE) ? b.Long.MIN_VALUE : this.not().add(b.Long.ONE);
  };
  b.Long.prototype.add = function(c) {
    var d = this.high_ >>> 16, g = this.high_ & 65535, h = this.low_ >>> 16, a = c.high_ >>> 16, e = c.high_ & 65535, f = c.low_ >>> 16, n;
    n = 0 + ((this.low_ & 65535) + (c.low_ & 65535));
    c = 0 + (n >>> 16);
    c += h + f;
    h = 0 + (c >>> 16);
    h += g + e;
    g = 0 + (h >>> 16);
    g = g + (d + a) & 65535;
    return b.Long.fromBits((c & 65535) << 16 | n & 65535, g << 16 | h & 65535);
  };
  b.Long.prototype.subtract = function(b) {
    return this.add(b.negate());
  };
  b.Long.prototype.multiply = function(c) {
    if (this.isZero() || c.isZero()) {
      return b.Long.ZERO;
    }
    if (this.equals(b.Long.MIN_VALUE)) {
      return c.isOdd() ? b.Long.MIN_VALUE : b.Long.ZERO;
    }
    if (c.equals(b.Long.MIN_VALUE)) {
      return this.isOdd() ? b.Long.MIN_VALUE : b.Long.ZERO;
    }
    if (this.isNegative()) {
      return c.isNegative() ? this.negate().multiply(c.negate()) : this.negate().multiply(c).negate();
    }
    if (c.isNegative()) {
      return this.multiply(c.negate()).negate();
    }
    if (this.lessThan(b.Long.TWO_PWR_24_) && c.lessThan(b.Long.TWO_PWR_24_)) {
      return b.Long.fromNumber(this.toNumber() * c.toNumber());
    }
    var d = this.high_ >>> 16, g = this.high_ & 65535, h = this.low_ >>> 16, a = this.low_ & 65535, e = c.high_ >>> 16, f = c.high_ & 65535, n = c.low_ >>> 16;
    c = c.low_ & 65535;
    var k, l, m, p;
    p = 0 + a * c;
    m = 0 + (p >>> 16);
    m += h * c;
    l = 0 + (m >>> 16);
    m = (m & 65535) + a * n;
    l += m >>> 16;
    m &= 65535;
    l += g * c;
    k = 0 + (l >>> 16);
    l = (l & 65535) + h * n;
    k += l >>> 16;
    l &= 65535;
    l += a * f;
    k += l >>> 16;
    l &= 65535;
    k = k + (d * c + g * n + h * f + a * e) & 65535;
    return b.Long.fromBits(m << 16 | p & 65535, k << 16 | l);
  };
  b.Long.prototype.div = function(c) {
    if (c.isZero()) {
      throw Error("division by zero");
    }
    if (this.isZero()) {
      return b.Long.ZERO;
    }
    if (this.equals(b.Long.MIN_VALUE)) {
      if (c.equals(b.Long.ONE) || c.equals(b.Long.NEG_ONE)) {
        return b.Long.MIN_VALUE;
      }
      if (c.equals(b.Long.MIN_VALUE)) {
        return b.Long.ONE;
      }
      var d = this.shiftRight(1).div(c).shiftLeft(1);
      if (d.equals(b.Long.ZERO)) {
        return c.isNegative() ? b.Long.ONE : b.Long.NEG_ONE;
      }
      var g = this.subtract(c.multiply(d));
      return d.add(g.div(c));
    }
    if (c.equals(b.Long.MIN_VALUE)) {
      return b.Long.ZERO;
    }
    if (this.isNegative()) {
      return c.isNegative() ? this.negate().div(c.negate()) : this.negate().div(c).negate();
    }
    if (c.isNegative()) {
      return this.div(c.negate()).negate();
    }
    for (var h = b.Long.ZERO, g = this;g.greaterThanOrEqual(c);) {
      for (var d = Math.max(1, Math.floor(g.toNumber() / c.toNumber())), a = Math.ceil(Math.log(d) / Math.LN2), a = 48 >= a ? 1 : Math.pow(2, a - 48), e = b.Long.fromNumber(d), f = e.multiply(c);f.isNegative() || f.greaterThan(g);) {
        d -= a, e = b.Long.fromNumber(d), f = e.multiply(c);
      }
      e.isZero() && (e = b.Long.ONE);
      h = h.add(e);
      g = g.subtract(f);
    }
    return h;
  };
  b.Long.prototype.modulo = function(b) {
    return this.subtract(this.div(b).multiply(b));
  };
  b.Long.prototype.not = function() {
    return b.Long.fromBits(~this.low_, ~this.high_);
  };
  b.Long.prototype.and = function(c) {
    return b.Long.fromBits(this.low_ & c.low_, this.high_ & c.high_);
  };
  b.Long.prototype.or = function(c) {
    return b.Long.fromBits(this.low_ | c.low_, this.high_ | c.high_);
  };
  b.Long.prototype.xor = function(c) {
    return b.Long.fromBits(this.low_ ^ c.low_, this.high_ ^ c.high_);
  };
  b.Long.prototype.shiftLeft = function(c) {
    c &= 63;
    if (0 == c) {
      return this;
    }
    var d = this.low_;
    return 32 > c ? b.Long.fromBits(d << c, this.high_ << c | d >>> 32 - c) : b.Long.fromBits(0, d << c - 32);
  };
  b.Long.prototype.shiftRight = function(c) {
    c &= 63;
    if (0 == c) {
      return this;
    }
    var d = this.high_;
    return 32 > c ? b.Long.fromBits(this.low_ >>> c | d << 32 - c, d >> c) : b.Long.fromBits(d >> c - 32, 0 <= d ? 0 : -1);
  };
  b.Long.prototype.shiftRightUnsigned = function(c) {
    c &= 63;
    if (0 == c) {
      return this;
    }
    var d = this.high_;
    return 32 > c ? b.Long.fromBits(this.low_ >>> c | d << 32 - c, d >>> c) : 32 == c ? b.Long.fromBits(d, 0) : b.Long.fromBits(d >>> c - 32, 0);
  };
  b.Long.prototype.equals_za3rmp$ = function(c) {
    return c instanceof b.Long && this.equals(c);
  };
  b.Long.prototype.compareTo_za3rmp$ = b.Long.prototype.compare;
  b.Long.prototype.inc = function() {
    return this.add(b.Long.ONE);
  };
  b.Long.prototype.dec = function() {
    return this.add(b.Long.NEG_ONE);
  };
  b.Long.prototype.valueOf = function() {
    return this.toNumber();
  };
  b.Long.prototype.plus = function() {
    return this;
  };
  b.Long.prototype.minus = b.Long.prototype.negate;
  b.Long.prototype.inv = b.Long.prototype.not;
  b.Long.prototype.rangeTo = function(c) {
    return new b.LongRange(this, c);
  };
})(Kotlin);
