/* @ds-bundle: {"format":4,"namespace":"GunaDesignSystem_f29ead","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Doodle","sourcePath":"components/core/Doodle.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NavBarIcon","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ArticleScreen","sourcePath":"ui_kits/blog/ArticleScreen.jsx"},{"name":"POSTS","sourcePath":"ui_kits/blog/BlogIndex.jsx"},{"name":"BlogIndex","sourcePath":"ui_kits/blog/BlogIndex.jsx"},{"name":"AboutScreen","sourcePath":"ui_kits/portfolio/AboutScreen.jsx"},{"name":"CaseStudy","sourcePath":"ui_kits/portfolio/CaseStudy.jsx"},{"name":"PortfolioHome","sourcePath":"ui_kits/portfolio/PortfolioHome.jsx"},{"name":"Placeholder","sourcePath":"ui_kits/portfolio/Shell.jsx"},{"name":"Eyebrow","sourcePath":"ui_kits/portfolio/Shell.jsx"},{"name":"Section","sourcePath":"ui_kits/portfolio/Shell.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/portfolio/Shell.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"b0753afa0791","components/core/Badge.jsx":"871b90606713","components/core/Button.jsx":"e17f316ed67e","components/core/Card.jsx":"8fd5bd200b3a","components/core/Doodle.jsx":"643422d5b157","components/core/Icon.jsx":"a34b0624a019","components/core/IconButton.jsx":"85c7ed64475f","components/core/Tag.jsx":"eec4090c7917","components/core/TextLink.jsx":"9de974e98427","components/feedback/Callout.jsx":"5f8faa68b438","components/feedback/Dialog.jsx":"cc4addb08683","components/feedback/Toast.jsx":"cefcb0e9da21","components/feedback/Tooltip.jsx":"69ca1dd5f2e7","components/forms/Checkbox.jsx":"16ed2112dff9","components/forms/Input.jsx":"7b50e3c4380b","components/forms/Radio.jsx":"c200a20a7c40","components/forms/Select.jsx":"22715ee14f92","components/forms/Switch.jsx":"d474ae5e8d9e","components/forms/Textarea.jsx":"6c069e5d642e","components/navigation/NavBar.jsx":"925159ec9047","components/navigation/Tabs.jsx":"b74b4e81b17e","ui_kits/blog/ArticleScreen.jsx":"020d2d61dcd4","ui_kits/blog/BlogIndex.jsx":"26303789483f","ui_kits/portfolio/AboutScreen.jsx":"713849264489","ui_kits/portfolio/CaseStudy.jsx":"ec31bccde4ef","ui_kits/portfolio/PortfolioHome.jsx":"08cbf639e437","ui_kits/portfolio/Shell.jsx":"ceab63ff09e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GunaDesignSystem_f29ead = window.GunaDesignSystem_f29ead || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  name = '',
  size = 44,
  ring = false,
  style,
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flex: 'none',
      background: 'var(--lav-200)',
      color: 'var(--lav-800)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: Math.round(size * 0.36),
      boxShadow: ring ? '0 0 0 3px var(--surface-card),0 0 0 4.5px var(--lav-300)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--ink-100)', 'var(--text-muted)'],
  lavender: ['var(--lav-100)', 'var(--lav-700)'],
  success: ['var(--status-success-bg)', 'var(--status-success-fg)'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning-fg)'],
  info: ['var(--status-info-bg)', 'var(--status-info-fg)'],
  danger: ['var(--status-danger-bg)', 'var(--status-danger-fg)']
};
function Badge({
  children,
  tone = 'lavender',
  dot = false,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.lavender;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: fg
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  plain: {
    bg: 'var(--surface-card)',
    bd: 'var(--border-hairline)'
  },
  lavender: {
    bg: 'var(--lav-100)',
    bd: 'transparent'
  },
  butter: {
    bg: 'var(--butter-200)',
    bd: 'transparent'
  },
  sky: {
    bg: 'var(--sky-200)',
    bd: 'transparent'
  },
  sage: {
    bg: 'var(--sage-200)',
    bd: 'transparent'
  },
  blush: {
    bg: 'var(--blush-200)',
    bd: 'transparent'
  },
  inverse: {
    bg: 'var(--surface-inverse)',
    bd: 'transparent'
  }
};
function Card({
  children,
  tone = 'plain',
  padding = 'md',
  elevation = 'sm',
  interactive = false,
  as = 'div',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.plain;
  const pad = padding === 'none' ? 0 : padding === 'sm' ? 'var(--space-5)' : padding === 'lg' ? 'var(--card-pad-lg)' : 'var(--card-pad)';
  const shadows = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const rest_shadow = shadows[elevation] ?? shadows.sm;
  const Tag = as === 'a' ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === 'a' ? href : undefined,
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      display: 'block',
      background: t.bg,
      color: tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-body)',
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-card)',
      padding: pad,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : rest_shadow,
      transform: interactive && hover ? 'translateY(var(--lift-hover))' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      textDecoration: 'none',
      overflow: 'hidden',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Doodle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = {
  underline: {
    vb: '0 0 200 14',
    el: /*#__PURE__*/React.createElement("path", {
      d: "M3 9.2c33-4.6 122-7.4 194-4.1",
      stroke: "currentColor",
      strokeWidth: "3.2",
      strokeLinecap: "round"
    })
  },
  underlineDouble: {
    vb: '0 0 200 20',
    el: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 7.4c36-4.8 121-6.9 194-3.6",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 16.2c40-3.6 106-4.8 172-2.6",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      opacity: ".7"
    }))
  },
  circle: {
    vb: '0 0 220 90',
    el: /*#__PURE__*/React.createElement("path", {
      d: "M128 8.5C81 3.6 33 11 15.5 27.5-2 44 12 68 48 78c36 10 106 8 141-9 22-10.6 27-27 12-38.5C186 20 166 13 143 9.6",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round"
    })
  },
  arrowCurve: {
    vb: '0 0 120 130',
    el: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 8c34 6 60 26 64 56 3 22-6 38-18 48",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M74 110L58 112L62 96",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  },
  arrowRight: {
    vb: '0 0 140 40',
    el: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 24c30-12 78-16 126-11",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M114 4l18 9-14 11",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  },
  squiggle: {
    vb: '0 0 200 16',
    el: /*#__PURE__*/React.createElement("path", {
      d: "M3 10c12-9 25 0 37-1s18-8 30-7 20 9 32 8 19-8 31-7 19 7 31 6",
      stroke: "currentColor",
      strokeWidth: "2.8",
      strokeLinecap: "round"
    })
  },
  star: {
    vb: '0 0 40 40',
    el: /*#__PURE__*/React.createElement("path", {
      d: "M20 4v32M4 20h32M8.5 8.5l23 23M31.5 8.5l-23 23",
      stroke: "currentColor",
      strokeWidth: "2.6",
      strokeLinecap: "round"
    })
  },
  bracket: {
    vb: '0 0 24 120',
    el: /*#__PURE__*/React.createElement("path", {
      d: "M18 4C9 10 6 26 6.6 60 7.2 94 10 110 18 116",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round"
    })
  }
};
function Doodle({
  shape = 'underline',
  color = 'primary',
  width = '100%',
  style,
  ...rest
}) {
  const p = PATHS[shape] || PATHS.underline;
  const stroke = color === 'accent' ? 'var(--doodle-accent)' : color === 'ink' ? 'var(--ink-400)' : 'var(--doodle-primary)';
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: p.vb,
    fill: "none",
    "aria-hidden": "true",
    preserveAspectRatio: "none",
    style: {
      width,
      display: 'block',
      color: stroke,
      overflow: 'visible',
      ...style
    }
  }, rest), p.el);
}
Object.assign(__ds_scope, { Doodle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Doodle.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Glyph path data is Lucide (ISC licensed, lucide.dev) — 24px grid, 2px stroke,
   round caps/joins. Matches the brand's soft, even-weight line style. */
const GLYPHS = {
  arrowRight: 'M5 12h14M12 5l7 7-7 7',
  arrowUpRight: 'M7 17 17 7M7 7h10v10',
  arrowLeft: 'M19 12H5M12 19l-7-7 7-7',
  chevronDown: 'm6 9 6 6 6-6',
  chevronRight: 'm9 18 6-6-6-6',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  plus: 'M5 12h14M12 5v14',
  minus: 'M5 12h14',
  search: 'M21 21l-4.34-4.34M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z',
  mail: 'M22 7 13.03 12.7a2 2 0 0 1-2.06 0L2 7M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  externalLink: 'M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
  clock: 'M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
  bookmark: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z',
  star: 'M11.5 3.2a.5.5 0 0 1 .9 0l2.2 4.5 5 .7a.5.5 0 0 1 .3.9l-3.6 3.5.9 5a.5.5 0 0 1-.8.5L12 16l-4.4 2.3a.5.5 0 0 1-.8-.5l.9-5-3.6-3.5a.5.5 0 0 1 .3-.9l5-.7Z',
  heart: 'M19 14c1.5-1.5 3-3.3 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z',
  user: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  fileText: 'M14 2v5h5M15 18H9M15 14H9M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z',
  layers: 'm12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5',
  sparkles: 'm12 3 1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9ZM19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8ZM5 3l.6 1.4L7 5l-1.4.6L5 7l-.6-1.4L3 5l1.4-.6Z',
  play: 'm6 4 14 8-14 8Z',
  github: 'M15 22v-4a3.7 3.7 0 0 0-1-2.9c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12.1 12.1 0 0 0-6 0C6.6 1.4 5.5 1.7 5.5 1.7a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 4 8.7c0 5 3 6.2 6 6.5-.4.4-.7 1-.8 1.6-.1.6-.1 1.2 0 1.8v3.4M9 19c-3 .9-3-1.6-5-2',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v1.8A6 6 0 0 1 16 8ZM6 9H2v12h4ZM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  quote: 'M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3M15 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3'
};
function Icon({
  name = 'arrowRight',
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = GLYPHS[name] || GLYPHS.arrowRight;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const ICON_NAMES = Object.keys(GLYPHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 14,
    fs: 'var(--fs-caption)',
    gap: 6,
    icon: 15
  },
  md: {
    h: 'var(--control-h)',
    px: 'var(--control-pad-x)',
    fs: 'var(--fs-small)',
    gap: 8,
    icon: 17
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 26,
    fs: 'var(--fs-body)',
    gap: 9,
    icon: 19
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    fg: 'var(--action-primary-text)',
    bd: 'transparent',
    hoverBg: 'var(--action-primary-hover)',
    pressBg: 'var(--action-primary-press)',
    sh: 'var(--shadow-sm)'
  },
  secondary: {
    bg: 'var(--action-secondary)',
    fg: 'var(--action-secondary-text)',
    bd: 'transparent',
    hoverBg: 'var(--action-secondary-hover)',
    pressBg: 'var(--action-secondary-press)',
    sh: 'none'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--text-brand)',
    bd: 'var(--border-default)',
    hoverBg: 'var(--action-ghost-hover)',
    pressBg: 'var(--action-secondary)',
    sh: 'none'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-body)',
    bd: 'transparent',
    hoverBg: 'var(--action-ghost-hover)',
    pressBg: 'var(--action-secondary)',
    sh: 'none'
  },
  inverse: {
    bg: 'var(--surface-inverse)',
    fg: 'var(--text-inverse)',
    bd: 'transparent',
    hoverBg: 'var(--ink-800)',
    pressBg: 'var(--ink-700)',
    sh: 'var(--shadow-sm)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const bg = disabled ? 'var(--ink-200)' : press ? v.pressBg : hover ? v.hoverBg : v.bg;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === 'a' ? href : undefined,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: `0 ${typeof s.px === 'number' ? s.px + 'px' : s.px}`,
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-body)',
      lineHeight: 1,
      color: disabled ? 'var(--text-faint)' : v.fg,
      background: bg,
      border: `1px solid ${disabled ? 'transparent' : v.bd}`,
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: disabled ? 'none' : press ? 'none' : v.sh,
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name = 'x',
  label,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = size === 'sm' ? 32 : size === 'lg' ? 46 : 38;
  const glyph = size === 'sm' ? 16 : size === 'lg' ? 22 : 19;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const bases = {
    ghost: {
      bg: 'transparent',
      fg: 'var(--text-body)',
      bd: 'transparent',
      hover: 'var(--action-ghost-hover)'
    },
    outline: {
      bg: 'var(--surface-card)',
      fg: 'var(--text-body)',
      bd: 'var(--border-default)',
      hover: 'var(--action-ghost-hover)'
    },
    solid: {
      bg: 'var(--action-primary)',
      fg: 'var(--action-primary-text)',
      bd: 'transparent',
      hover: 'var(--action-primary-hover)'
    }
  };
  const v = bases[variant] || bases.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: disabled ? 'transparent' : hover ? v.hover : v.bg,
      color: disabled ? 'var(--text-faint)' : v.fg,
      border: `1px solid ${v.bd}`,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: 0,
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: glyph
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  count,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1,
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--ink-900)' : hover && clickable ? 'var(--action-secondary)' : 'var(--surface-card)',
      color: selected ? 'var(--text-inverse)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--ink-900)' : 'var(--border-hairline)'}`,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      opacity: 0.6
    }
  }, count) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  children,
  href = '#',
  iconRight,
  tone = 'brand',
  underline = 'always',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'ink' ? hover ? 'var(--lav-700)' : 'var(--text-display)' : hover ? 'var(--text-link-hover)' : 'var(--text-link)';
  const showUnderline = underline === 'always' || underline === 'hover' && hover;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      color,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      textDecoration: showUnderline ? 'underline' : 'none',
      textDecorationThickness: '1.5px',
      textUnderlineOffset: '4px',
      textDecorationColor: hover ? 'var(--lav-500)' : 'var(--lav-300)',
      transition: 'color var(--dur-fast) var(--ease-standard),text-decoration-color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16,
    style: {
      transform: hover ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  }) : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--surface-subtle)',
    fg: 'var(--text-body)',
    accent: 'var(--ink-500)',
    icon: 'sparkles'
  },
  info: {
    bg: 'var(--status-info-bg)',
    fg: 'var(--ink-900)',
    accent: 'var(--status-info-fg)',
    icon: 'sparkles'
  },
  success: {
    bg: 'var(--status-success-bg)',
    fg: 'var(--ink-900)',
    accent: 'var(--status-success-fg)',
    icon: 'check'
  },
  warning: {
    bg: 'var(--status-warning-bg)',
    fg: 'var(--ink-900)',
    accent: 'var(--status-warning-fg)',
    icon: 'star'
  },
  danger: {
    bg: 'var(--status-danger-bg)',
    fg: 'var(--ink-900)',
    accent: 'var(--status-danger-fg)',
    icon: 'x'
  }
};
function Callout({
  children,
  title,
  tone = 'neutral',
  icon,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 14,
      background: t.bg,
      color: t.fg,
      padding: 'var(--space-5) var(--space-6)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      lineHeight: 1.6
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  children,
  title,
  description,
  open = true,
  onClose,
  footer,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      zIndex: 60
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-panel)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--card-pad-lg)',
      position: 'relative',
      animation: 'none',
      ...style
    }
  }, rest), onClose ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 'var(--lh-h3)',
      color: 'var(--text-display)',
      margin: 0,
      paddingRight: 32
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  children,
  title,
  tone = 'neutral',
  onDismiss,
  style,
  ...rest
}) {
  const fg = {
    neutral: 'var(--lav-400)',
    success: 'var(--sage-400)',
    danger: 'var(--blush-400)'
  }[tone] || 'var(--lav-400)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      minWidth: 280,
      maxWidth: 400,
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: fg,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === 'danger' ? 'x' : 'check',
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--ink-300)',
      lineHeight: 1.5
    }
  }, children) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--ink-400)',
      cursor: 'pointer',
      padding: 2,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  content,
  placement = 'top',
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      zIndex: 40,
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-md)',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked != null ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (checked == null) setInternal(!isOn);
    onChange && onChange(!isOn, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: isOn,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: description ? 2 : 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-xs)',
      background: isOn ? 'var(--action-primary)' : 'var(--surface-card)',
      border: `1px solid ${isOn ? 'var(--action-primary)' : 'var(--border-default)'}`,
      color: 'var(--text-inverse)',
      transition: 'var(--transition-control)'
    }
  }, isOn ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 3
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  hint,
  error,
  disabled = false,
  required = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-display)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger-fg)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h)',
      padding: '0 14px',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--ink-100)' : 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--status-danger-fg)' : focus ? 'var(--border-strong)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'var(--transition-control)'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--status-danger-fg)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: description ? 2 : 0,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: `1px solid ${checked ? 'var(--action-primary)' : 'var(--border-default)'}`,
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: checked ? 'var(--action-primary)' : 'transparent',
      transition: 'var(--transition-control)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  defaultValue,
  placeholder = 'Select…',
  hint,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-display)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h)',
      padding: '0 38px 0 14px',
      width: '100%',
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--ink-100)' : 'var(--surface-card)',
      border: `1px solid ${focus ? 'var(--border-strong)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'var(--transition-control)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 13,
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 17
  }))), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked != null ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (checked == null) setInternal(!isOn);
    onChange && onChange(!isOn, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      gap: 11,
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: isOn,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      background: isOn ? 'var(--action-primary)' : 'var(--ink-300)',
      transition: 'background-color var(--dur-base) var(--ease-standard)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--ink-000)',
      boxShadow: 'var(--shadow-xs)',
      transform: isOn ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out-soft)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  placeholder,
  value,
  defaultValue,
  rows = 4,
  hint,
  error,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-display)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: '12px 14px',
      width: '100%',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      background: disabled ? 'var(--ink-100)' : 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--status-danger-fg)' : focus ? 'var(--border-strong)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'var(--transition-control)'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--status-danger-fg)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand = 'Guna',
  links = [],
  action,
  active,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-7)',
      padding: 'var(--space-5) var(--space-7)',
      background: 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0] && (links[0].value || links[0]));
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 23,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-display)',
      textDecoration: 'none',
      flex: 'none'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, links.map(l => {
    const v = l.value || l,
      label = l.label || l,
      on = v === active;
    return /*#__PURE__*/React.createElement("a", {
      key: v,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(v);
      },
      style: {
        fontSize: 'var(--fs-small)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--text-display)' : 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, label);
  }), action));
}
function NavBarIcon({
  name
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: 20
  });
}
Object.assign(__ds_scope, { NavBar, NavBarIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(items[0] && (items[0].value || items[0]));
  const active = value != null ? value : internal;
  const pick = v => {
    if (value == null) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map(it => {
    const v = it.value || it;
    const label = it.label || it;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        background: 'none',
        border: 'none',
        padding: '0 0 14px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-small)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--text-display)' : 'var(--text-muted)',
        borderBottom: `2px solid ${on ? 'var(--action-primary)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Shell.jsx
try { (() => {
/** Neutral stand-in for photography the brand hasn't supplied yet. */
function Placeholder({
  label = 'Image',
  ratio = '16 / 10',
  tone = 'lavender',
  style
}) {
  const bg = tone === 'ink' ? 'var(--ink-200)' : tone === 'butter' ? 'var(--butter-200)' : 'var(--lav-200)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: bg,
      borderRadius: 'var(--radius-media)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--lav-700)',
      opacity: 0.7,
      ...style
    }
  }, label);
}
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-brand)',
      ...style
    }
  }, children);
}
function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-width-page)',
      margin: '0 auto',
      padding: '0 var(--gutter-page-wide)',
      ...style
    }
  }, children);
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      marginTop: 'var(--section-y)',
      padding: 'var(--space-9) 0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-display)'
    }
  }, "Guna"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "Product design, mostly. London.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      fontSize: 'var(--fs-small)'
    }
  }, ['Work', 'Writing', 'About'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "Email"))));
}
Object.assign(__ds_scope, { Placeholder, Eyebrow, Section, SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/ArticleScreen.jsx
try { (() => {
const PROSE = 'var(--max-width-prose)';
function ArticleScreen({
  post,
  onBack,
  onSubscribe
}) {
  const p = post || {
    title: 'The feature nobody asked us to remove',
    topic: 'Craft',
    date: '12 Sept 2026',
    read: '6 min'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "arrowLeft",
    onClick: onBack,
    style: {
      marginLeft: -12
    }
  }, "All writing")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: PROSE,
      margin: '0 auto',
      padding: '0 var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "lavender"
  }, p.topic), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, p.date, " \xB7 ", p.read, " read")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)',
      lineHeight: 'var(--lh-h1)',
      marginTop: 'var(--space-5)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)',
      paddingBottom: 'var(--space-6)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: "Guna R",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 600,
      color: 'var(--text-display)'
    }
  }, "Guna R"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, "Product designer"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    content: "Save for later"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "bookmark",
    label: "Save",
    variant: "outline",
    size: "sm"
  })), /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    content: "Copy link"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "externalLink",
    label: "Copy link",
    variant: "outline",
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-lead)',
      color: 'var(--text-display)'
    }
  }, "We deleted the habit tracker on a Thursday afternoon. Six months later, three people have noticed, and two of them work here."), /*#__PURE__*/React.createElement("p", null, "The tracker had been in the product for two years. It was, by any reasonable measure, finished: it had settings, it had a streak counter, it had an empty state somebody had clearly enjoyed writing. What it did not have was anyone using it past the second week."), /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    label: "Usage curve \u2014 weeks 1\u201312",
    ratio: "16 / 9",
    style: {
      margin: 'var(--space-2) 0'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "The argument for keeping it"), /*#__PURE__*/React.createElement("p", null, "Every argument for keeping a feature is a story about a person who would be upset. The stories are usually true and almost never load-bearing. Ours was a customer on an annual plan who had mentioned the tracker in a survey eighteen months earlier."), /*#__PURE__*/React.createElement(__ds_scope.Callout, {
    tone: "warning",
    title: "What we actually did"
  }, "Hid it behind a flag for four weeks, watched support, then removed the code. Nobody wrote in."), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, "What we learned", /*#__PURE__*/React.createElement(__ds_scope.Doodle, {
    shape: "underline",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -8,
      height: 11
    }
  }))), /*#__PURE__*/React.createElement("p", null, "Deleting is a research method. The flag period told us more about how the tracker was used than a year of analytics had, because absence is easier to notice than presence."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      paddingLeft: 'var(--space-6)',
      borderLeft: '2px solid var(--lav-300)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 1.4,
      color: 'var(--text-display)'
    }
  }, "The product got smaller and the week got easier to plan. Those turned out to be the same change."), /*#__PURE__*/React.createElement("p", null, "The habit tracker never came back. If you are wondering whether to remove something: put it behind a flag, wait a month, and read your support inbox instead of your dashboard.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)',
      padding: 'var(--space-7)',
      background: 'var(--lav-100)',
      borderRadius: 'var(--radius-panel)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("h3", null, "A note once a month"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "What I shipped, what broke, one thing I changed my mind about.")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onSubscribe,
    iconRight: "arrowRight"
  }, "Subscribe")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Read next"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    iconRight: "arrowRight",
    tone: "ink"
  }, "Research is mostly watching people be patient"), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    iconRight: "arrowRight",
    tone: "ink"
  }, "Tokens are a writing problem")))));
}
Object.assign(__ds_scope, { ArticleScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/BlogIndex.jsx
try { (() => {
const POSTS = [{
  title: 'The feature nobody asked us to remove',
  topic: 'Craft',
  date: '12 Sept 2026',
  read: '6 min',
  blurb: 'We deleted the habit tracker on a Thursday. Six months later, three people have noticed.',
  featured: true
}, {
  title: 'Research is mostly watching people be patient',
  topic: 'Research',
  date: '28 Aug 2026',
  read: '9 min',
  blurb: 'Eleven planning sessions, and the thing that mattered was on a sticky note every time.'
}, {
  title: 'Tokens are a writing problem',
  topic: 'Systems',
  date: '3 Aug 2026',
  read: '7 min',
  blurb: 'Half of design-system adoption is whether the names sound like the thing.'
}, {
  title: 'Against the second modal',
  topic: 'Craft',
  date: '19 Jul 2026',
  read: '4 min',
  blurb: 'If a decision needs two dialogs, it needed a page.'
}, {
  title: 'What I got wrong about onboarding',
  topic: 'Product',
  date: '2 Jul 2026',
  read: '11 min',
  blurb: 'Eleven screens became one question, and the question was the hard part.'
}];
const TOPICS = ['All', 'Craft', 'Research', 'Systems', 'Product'];
function BlogIndex({
  onOpen
}) {
  const [topic, setTopic] = React.useState('All');
  const list = POSTS.filter(p => topic === 'All' || p.topic === topic);
  const featured = list.find(p => p.featured);
  const rest = list.filter(p => p !== featured);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      paddingTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Writing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-2)',
      lineHeight: 'var(--lh-display-2)',
      marginTop: 'var(--space-4)',
      maxWidth: '16ch'
    }
  }, "Notes on making", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, "smaller things", /*#__PURE__*/React.createElement(__ds_scope.Doodle, {
    shape: "underline",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -8,
      height: 12
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-5)',
      maxWidth: 'var(--measure-lead)'
    }
  }, "Roughly monthly. Mostly about deleting things."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, TOPICS.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    selected: topic === t,
    onClick: () => setTopic(t),
    count: t === 'All' ? POSTS.length : POSTS.filter(p => p.topic === t).length
  }, t)))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, featured ? /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: "lavender",
    padding: "lg",
    interactive: true,
    as: "a",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(featured);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.8fr)',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "lavender"
  }, featured.topic), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, featured.date, " \xB7 ", featured.read)), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)',
      lineHeight: 1.65
    }
  }, featured.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    iconRight: "arrowRight"
  }, "Read it"))), /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    label: "Lead image",
    ratio: "4 / 3",
    style: {
      background: 'rgba(255,255,255,.6)'
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, rest.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(p);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '140px minmax(0,1fr) 120px',
      gap: 'var(--space-6)',
      alignItems: 'baseline',
      padding: 'var(--space-6) var(--space-2)',
      borderBottom: '1px solid var(--border-hairline)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, p.date), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 600,
      color: 'var(--text-display)',
      letterSpacing: 'var(--ls-heading)'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, p.blurb)), /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, p.topic)))))));
}
Object.assign(__ds_scope, { POSTS, BlogIndex });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/BlogIndex.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
const HELP = [{
  t: 'Product design',
  d: 'End-to-end work on one surface at a time: research, prototypes, the built thing.',
  tone: 'lavender',
  icon: 'layers'
}, {
  t: 'Design systems',
  d: 'Tokens, components and the documentation that keeps them honest.',
  tone: 'butter',
  icon: 'sparkles'
}, {
  t: 'Design reviews',
  d: 'A standing hour a week with your team, on whatever is currently stuck.',
  tone: 'sky',
  icon: 'quote'
}];
function AboutScreen({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      paddingTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    label: "Portrait",
    ratio: "1 / 1",
    style: {
      borderRadius: 'var(--radius-2xl)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Hello \u2014 I'm Guna"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, "I've been designing software for eight years, most recently at Superfocus, where I look after planning and everything that touches it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, "Before that: two fintechs, a research tool nobody has heard of, and a year of freelance work that taught me more than any of them. I like problems where the answer turns out to be less, not more.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['Superfocus', 'Ledger', 'Kiln'].map((n, i) => /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    key: n,
    name: n,
    size: 38,
    ring: true,
    style: {
      marginLeft: i ? -10 : 0
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)'
    }
  }, "Teams I've worked with"))))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      marginTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, "How I can help", /*#__PURE__*/React.createElement(__ds_scope.Doodle, {
    shape: "underline",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -8,
      height: 11
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, HELP.map(h => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: h.t,
    tone: h.tone,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lav-800)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: h.icon,
    size: 26,
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, h.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-3)',
      lineHeight: 1.6
    }
  }, h.d))))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      marginTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)',
      maxWidth: '36ch'
    }
  }, "Tell me roughly what you're working on. A sentence is plenty \u2014 I'll reply within a couple of days.")), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com"
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "What's this about?",
    options: ['A project', 'Design review', 'Something else'],
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    label: "Message",
    rows: 4,
    placeholder: "A sentence is plenty.",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Add me to the monthly note"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    iconRight: "arrowRight",
    onClick: onSubmit
  }, "Send")))))));
}
Object.assign(__ds_scope, { AboutScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
const FACTS = [['Role', 'Lead product designer'], ['Team', 'Two engineers, one PM'], ['Duration', 'Nine months'], ['Shipped', 'March 2025']];
const BODY = {
  Overview: ['Superfocus started as a to-do list that had been asked to become a calendar, a habit tracker and a journal. Nothing was wrong with any single screen; the product had simply stopped agreeing with itself.', 'We spent the first six weeks not designing. We watched eleven people plan their week, and every one of them kept a second, simpler list somewhere else — a sticky note, a phone memo, the back of a receipt.'],
  Process: ['We rebuilt the week view around the thing people were doing on paper: three commitments, written once. Everything else moved behind a single disclosure.', 'Nine rounds of prototypes went out to the same eleven people. The one that stuck was the plainest, which is usually how it goes.'],
  Outcome: ['Planning a week went from nine taps to two. Weekly retention rose 31% over the quarter after launch, and support tickets about the calendar dropped by roughly half.', 'The habit tracker never came back. Nobody has asked for it.']
};
function CaseStudy({
  onNavigate
}) {
  const [tab, setTab] = React.useState('Overview');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "arrowLeft",
    onClick: () => onNavigate('Home'),
    style: {
      marginLeft: -12
    }
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Case study \u2014 2025"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-2)',
      lineHeight: 'var(--lh-display-2)',
      marginTop: 'var(--space-4)'
    }
  }, "Superfocus, or how we", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, "deleted", /*#__PURE__*/React.createElement(__ds_scope.Doodle, {
    shape: "underlineDouble",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -12,
      height: 16
    }
  })), ' ', "half the app"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-lead)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-6)'
    }
  }, "A planning tool had grown into four products wearing one coat. We took it back down to one."))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    label: "Hero \u2014 week view, before and after",
    ratio: "21 / 9",
    style: {
      borderRadius: 'var(--radius-panel)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)',
      padding: 'var(--space-6) 0',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, FACTS.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 600,
      color: 'var(--text-display)',
      marginTop: 4
    }
  }, v))))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-prose)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    items: ['Overview', 'Process', 'Outcome'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-7)'
    }
  }, BODY[tab].map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, p)), tab === 'Outcome' ? /*#__PURE__*/React.createElement(__ds_scope.Callout, {
    tone: "info",
    title: "A caveat"
  }, "Retention figures are from the beta cohort of 4,200 accounts, not the full user base.") : null))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    label: "Week view \u2014 final",
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    label: "Disclosure pattern",
    ratio: "4 / 3",
    tone: "butter"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, ['Product strategy', 'Prototyping', 'Research', 'Design system'].map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: "neutral"
  }, t)))));
}
Object.assign(__ds_scope, { CaseStudy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/PortfolioHome.jsx
try { (() => {
const WORK = [{
  title: 'Superfocus',
  tag: 'Planning app',
  tone: 'lavender',
  blurb: 'A daily planner for people who resent planners. Took the week view from 9 taps to 2.',
  year: '2025'
}, {
  title: 'Ledger',
  tag: 'Fintech',
  tone: 'butter',
  blurb: 'Rebuilt onboarding around one question instead of eleven screens.',
  year: '2024'
}, {
  title: 'Fieldnote',
  tag: 'Research tool',
  tone: 'sky',
  blurb: 'Tagging and synthesis for teams that record more than they read.',
  year: '2024'
}, {
  title: 'Kiln',
  tag: 'Marketplace',
  tone: 'sage',
  blurb: 'A seller dashboard that a ceramicist can run from a phone, mid-glaze.',
  year: '2023'
}];
function PortfolioHome({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Product designer \xB7 London"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-2)',
      lineHeight: 'var(--lh-display-2)',
      marginTop: 'var(--space-4)'
    }
  }, "I design software that gets", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, "out of the way", /*#__PURE__*/React.createElement(__ds_scope.Doodle, {
    shape: "underline",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -8,
      height: 12
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-lead)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-lead)',
      marginTop: 'var(--space-6)'
    }
  }, "Eight years turning tangled products into things people finish using. Currently at Superfocus, occasionally available for short engagements."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    iconRight: "arrowRight",
    onClick: () => onNavigate('Work')
  }, "See the work"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "outline",
    iconLeft: "mail"
  }, "Get in touch"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    label: "Portrait",
    ratio: "4 / 5",
    style: {
      borderRadius: 'var(--radius-2xl)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Doodle, {
    shape: "arrowCurve",
    color: "accent",
    width: 78,
    style: {
      position: 'absolute',
      left: -62,
      bottom: 24,
      transform: 'scaleX(-1)'
    }
  })))), /*#__PURE__*/React.createElement(__ds_scope.Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", null, "Selected work"), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    iconRight: "arrowRight",
    onClick: e => {
      e.preventDefault();
      onNavigate('Work');
    }
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-7)'
    }
  }, WORK.map(w => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: w.title,
    tone: w.tone,
    padding: "lg",
    interactive: true,
    as: "a",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('CaseStudy');
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    label: w.title,
    ratio: "16 / 9",
    tone: "ink",
    style: {
      marginBottom: 'var(--space-6)',
      background: 'rgba(255,255,255,.55)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, w.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, w.year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)',
      lineHeight: 1.6
    }
  }, w.blurb), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-5)',
      fontSize: 'var(--fs-small)',
      fontWeight: 600,
      color: 'var(--text-display)'
    }
  }, "Read the case study ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowRight",
    size: 16
  })))))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    style: {
      marginTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      borderRadius: 'var(--radius-panel)',
      padding: 'var(--space-10) var(--space-9)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.8fr)',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--text-inverse)'
    }
  }, "A note once a month"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-300)',
      fontSize: 'var(--fs-body)',
      marginTop: 'var(--space-4)',
      maxWidth: '40ch'
    }
  }, "What I shipped, what broke, and one thing I changed my mind about. First Tuesday, nothing else.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "you@studio.com",
    style: {
      flex: 1,
      height: 'var(--control-h-lg)',
      padding: '0 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--ink-700)',
      background: 'var(--ink-800)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg"
  }, "Subscribe")))));
}
Object.assign(__ds_scope, { PortfolioHome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/PortfolioHome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Doodle = __ds_scope.Doodle;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NavBarIcon = __ds_scope.NavBarIcon;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ArticleScreen = __ds_scope.ArticleScreen;

__ds_ns.POSTS = __ds_scope.POSTS;

__ds_ns.BlogIndex = __ds_scope.BlogIndex;

__ds_ns.AboutScreen = __ds_scope.AboutScreen;

__ds_ns.CaseStudy = __ds_scope.CaseStudy;

__ds_ns.PortfolioHome = __ds_scope.PortfolioHome;

__ds_ns.Placeholder = __ds_scope.Placeholder;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
