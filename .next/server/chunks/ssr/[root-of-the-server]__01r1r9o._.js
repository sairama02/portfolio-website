module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},71306,(a,b,c)=>{b.exports=a.r(18622)},79847,a=>{a.n(a.i(3343))},9185,a=>{a.n(a.i(29432))},72842,a=>{a.n(a.i(75164))},54897,a=>{a.n(a.i(30106))},56157,a=>{a.n(a.i(18970))},94331,a=>{a.n(a.i(60644))},15988,a=>{a.n(a.i(56952))},25766,a=>{a.n(a.i(77341))},29725,a=>{a.n(a.i(94290))},5785,a=>{a.n(a.i(90588))},74793,a=>{a.n(a.i(33169))},85826,a=>{a.n(a.i(37111))},21565,a=>{a.n(a.i(41763))},65911,a=>{a.n(a.i(8950))},25128,a=>{a.n(a.i(91562))},40781,a=>{a.n(a.i(49670))},69411,a=>{a.n(a.i(75700))},63081,a=>{a.n(a.i(276))},62837,a=>{a.n(a.i(40795))},34607,a=>{a.n(a.i(11614))},96338,a=>{a.n(a.i(21751))},50642,a=>{a.n(a.i(12213))},32242,a=>{a.n(a.i(22693))},88530,a=>{a.n(a.i(10531))},8583,a=>{a.n(a.i(1082))},38534,a=>{a.n(a.i(98175))},70408,a=>{a.n(a.i(9095))},22922,a=>{a.n(a.i(96772))},78294,a=>{a.n(a.i(71717))},16625,a=>{a.n(a.i(85034))},88648,a=>{a.n(a.i(68113))},51914,a=>{a.n(a.i(66482))},25466,a=>{a.n(a.i(91505))},23862,a=>a.a(async(b,c)=>{try{let b=await a.y("pg-587764f78a6c7a9c");a.n(b),c()}catch(a){c(a)}},!0),71224,a=>{a.v("/_next/static/media/icon.09vw~b1ph7uy1.png"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},1022,a=>{"use strict";let b={src:a.i(71224).default,width:1020,height:1020};a.s(["default",0,b])},33263,a=>a.a(async(b,c)=>{try{var d=a.i(23862),e=b([d]);[d]=e.then?(await e)():e;let f=a.g.__pool||new d.Pool({connectionString:process.env.DATABASE_URL});a.s(["pool",0,f]),c()}catch(a){c(a)}},!1),83997,a=>a.a(async(b,c)=>{try{var d=a.i(33263),e=b([d]);async function f(){return(await d.pool.query(`
    SELECT
      id,
      title,
      headline,
      description,
      details,
      tech_stack,
      live_url,
      github_url,
      display_order,
      image_url
    FROM projects
    WHERE is_published = true
    ORDER BY display_order ASC, created_at DESC
  `)).rows}[d]=e.then?(await e)():e,a.s(["getProjects",0,f]),c()}catch(a){c(a)}},!1),93189,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/components/portfolio/BasicPortfolio.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/portfolio/BasicPortfolio.js <module evaluation>","default")},91958,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/components/portfolio/BasicPortfolio.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/portfolio/BasicPortfolio.js","default")},64665,a=>{"use strict";a.i(93189);var b=a.i(91958);a.n(b)},96089,a=>a.a(async(b,c)=>{try{var d=a.i(33263),e=b([d]);async function f(){return(await d.pool.query(`
    SELECT
      id,
      company,
      role,
      location,
      description,
      start_date,
      end_date
    FROM experiences
    ORDER BY display_order ASC, created_at DESC
  `)).rows}[d]=e.then?(await e)():e,a.s(["getExperiences",0,f]),c()}catch(a){c(a)}},!1),86466,a=>a.a(async(b,c)=>{try{var d=a.i(7997),e=a.i(83997),f=a.i(64665),g=a.i(96089),h=b([e,g]);async function i(){let a=await (0,e.getProjects)(),b=await (0,g.getExperiences)();return(0,d.jsx)(f.default,{projects:a,experiences:b})}[e,g]=h.then?(await h)():h,a.s(["default",0,i]),c()}catch(a){c(a)}},!1),9795,a=>{a.n(a.i(86466))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__01r1r9o._.js.map