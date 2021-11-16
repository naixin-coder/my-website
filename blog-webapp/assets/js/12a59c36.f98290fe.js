"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4281],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return b}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(t),b=l,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return t?r.createElement(f,a(a({ref:n},i),{},{components:t})):r.createElement(f,a({ref:n},i))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8728:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return p}});var r=t(7462),l=t(3366),o=(t(7294),t(3905)),a=["components"],u={id:"react-source3",title:"React\u6e90\u7801\u6d45\u6790(\u4e09)"},s="React\u6253\u5305\u8fc7\u7a0b",c={unversionedId:"react/react-source3",id:"react/react-source3",isDocsHomePage:!1,title:"React\u6e90\u7801\u6d45\u6790(\u4e09)",description:"---",source:"@site/docs/react/react-source3.md",sourceDirName:"react",slug:"/react/react-source3",permalink:"/docs/react/react-source3",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/react/react-source3.md",tags:[],version:"current",frontMatter:{id:"react-source3",title:"React\u6e90\u7801\u6d45\u6790(\u4e09)"}},i=[{value:"\u5206\u6790\u5730\u5740 /rollup/build.js",id:"\u5206\u6790\u5730\u5740-rollupbuildjs",children:[],level:5}],d={toc:i};function p(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react\u6253\u5305\u8fc7\u7a0b"},"React\u6253\u5305\u8fc7\u7a0b"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.sosout.com/2018/08/12/react-source-analysis.html"},"React \u6e90\u7801\u5168\u65b9\u4f4d\u5256\u6790")),(0,o.kt)("h5",{id:"\u5206\u6790\u5730\u5740-rollupbuildjs"},"\u5206\u6790\u5730\u5740 /rollup/build.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u5bf9\u6bd4\u6838\u5fc3bundle\u7248\u672c\u53f7\uff0c\u4fdd\u8bc1\u6784\u5efa\u7684bundle\u7edf\u4e00\nasync function buildEverything() {\n  if (!argv['unsafe-partial']) {\n    await asyncRimRaf('build'); //\u5220\u9664\u4e0a\u4e00\u6b21\u6253\u5305\u751f\u6210\u7684\u6587\u4ef6\n  }\n\n  // Run them serially for better console output\n  // and to avoid any potential race conditions.\n\n  let bundles = [];\n  // eslint-disable-next-line no-for-of-loops/no-for-of-loops\n  for (const bundle of Bundles.bundles) {\n    bundles.push(\n      [bundle, UMD_DEV],\n      [bundle, UMD_PROD],\n      [bundle, UMD_PROFILING],\n      [bundle, NODE_DEV],\n      [bundle, NODE_PROD],\n      [bundle, NODE_PROFILING],\n      [bundle, RN_OSS_DEV],\n      [bundle, RN_OSS_PROD],\n      [bundle, RN_OSS_PROFILING]\n    );\n\n    if (__EXPERIMENTAL__) {\n      // FB specific builds are experimental-only.\n      bundles.push(\n        [bundle, FB_WWW_DEV],\n        [bundle, FB_WWW_PROD],\n        [bundle, FB_WWW_PROFILING],\n        [bundle, RN_FB_DEV],\n        [bundle, RN_FB_PROD],\n        [bundle, RN_FB_PROFILING]\n      );\n    }\n  }\n\n  if (!shouldExtractErrors && process.env.CIRCLE_NODE_TOTAL) {\n    // In CI, parallelize bundles across multiple tasks.\n    const nodeTotal = parseInt(process.env.CIRCLE_NODE_TOTAL, 10);\n    const nodeIndex = parseInt(process.env.CIRCLE_NODE_INDEX, 10);\n    bundles = bundles.filter((_, i) => i % nodeTotal === nodeIndex);\n  }\n\n  // eslint-disable-next-line no-for-of-loops/no-for-of-loops\n  for (const [bundle, bundleType] of bundles) {\n    await createBundle(bundle, bundleType);\n  }\n\n  await Packaging.copyAllShims();\n  await Packaging.prepareNpmPackages();\n\n  if (syncFBSourcePath) {\n    await Sync.syncReactNative(syncFBSourcePath);\n  } else if (syncWWWPath) {\n    await Sync.syncReactDom('build/facebook-www', syncWWWPath);\n  }\n\n  console.log(Stats.printResults());\n  if (!forcePrettyOutput) {\n    Stats.saveResults();\n  }\n\n  if (shouldExtractErrors) {\n    console.warn(\n      '\\nWarning: this build was created with --extract-errors enabled.\\n' +\n      'this will result in extremely slow builds and should only be\\n' +\n      'used when the error map needs to be rebuilt.\\n'\n    );\n  }\n}\n\n// \u6587\u4ef6\u5165\u53e3\nbuildEverything();\n")),(0,o.kt)("p",null,"buildEverything\u662f\u6587\u4ef6\u6267\u884c\u5165\u53e3\uff0c\u8fd9\u4e2a\u51fd\u6570\u4e3b\u8981\u662f\u7528\u6765\u5bf9\u6bd4\u6838\u5fc3bundle\u7248\u672c\u53f7\uff0c\u4fdd\u8bc1bundle\u7edf\u4e00\uff0c\u5728\u6bd4\u5bf9\u4e4b\u524d\u9700\u8981\u5220\u9664\u4e4b\u524d\u6253\u5305\u751f\u6210\u7684\u6587\u4ef6\u3002\u4e00\u5207\u90fd\u7b26\u5408\u540e\uff0c\u6267\u884ccreateBundle\u7528\u4e8e\u6253\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"async function createBundle(bundle, bundleType) {\n  if (shouldSkipBundle(bundle, bundleType)) {\n    return;\n  }\n\n  const filename = getFilename(bundle.entry, bundle.global, bundleType);\n  const logKey =\n    chalk.white.bold(filename) + chalk.dim(` (${bundleType.toLowerCase()})`);\n  const format = getFormat(bundleType);\n  const packageName = Packaging.getPackageName(bundle.entry);\n\n  //\u83b7\u53d6rollup input\u5b9e\u4f53\u914d\u7f6e\u6587\u4ef6\n  let resolvedEntry = require.resolve(bundle.entry);\n  const isFBBundle =\n    bundleType === FB_WWW_DEV ||\n    bundleType === FB_WWW_PROD ||\n    bundleType === FB_WWW_PROFILING;\n  if (isFBBundle) {\n    const resolvedFBEntry = resolvedEntry.replace('.js', '.fb.js');\n    if (fs.existsSync(resolvedFBEntry)) {\n      resolvedEntry = resolvedFBEntry;\n    }\n  }\n\n  const shouldBundleDependencies =\n    bundleType === UMD_DEV ||\n    bundleType === UMD_PROD ||\n    bundleType === UMD_PROFILING;\n  const peerGlobals = Modules.getPeerGlobals(bundle.externals, bundleType);\n  let externals = Object.keys(peerGlobals);\n  if (!shouldBundleDependencies) {\n    const deps = Modules.getDependencies(bundleType, bundle.entry);\n    externals = externals.concat(deps);\n  }\n  if (isFBBundle) {\n    // Add any mapped fb bundle externals\n    externals = externals.concat(Object.values(Bundles.fbBundleExternalsMap));\n  }\n\n  const importSideEffects = Modules.getImportSideEffects();\n  const pureExternalModules = Object.keys(importSideEffects).filter(\n    module => !importSideEffects[module]\n  );\n\n  //\u914d\u7f6erollup\n  const rollupConfig = {\n    input: resolvedEntry,\n    treeshake: {\n      pureExternalModules,\n    },\n    external(id) {\n      const containsThisModule = pkg => id === pkg || id.startsWith(pkg + '/');\n      const isProvidedByDependency = externals.some(containsThisModule);\n      if (!shouldBundleDependencies && isProvidedByDependency) {\n        return true;\n      }\n      return !!peerGlobals[id];\n    },\n    onwarn: handleRollupWarning,\n    plugins: getPlugins(\n      bundle.entry,\n      externals,\n      bundle.babel,\n      filename,\n      packageName,\n      bundleType,\n      bundle.global,\n      bundle.moduleType,\n      pureExternalModules\n    ),\n    // We can't use getters in www.\n    legacy:\n      bundleType === FB_WWW_DEV ||\n      bundleType === FB_WWW_PROD ||\n      bundleType === FB_WWW_PROFILING,\n  };\n  const [mainOutputPath, ...otherOutputPaths] = Packaging.getBundleOutputPaths(\n    bundleType,\n    filename,\n    packageName\n  );\n  const rollupOutputOptions = getRollupOutputOptions(\n    mainOutputPath,\n    format,\n    peerGlobals,\n    bundle.global,\n    bundleType\n  );\n\n  if (isWatchMode) {\n    rollupConfig.output = [rollupOutputOptions];\n    const watcher = rollup.watch(rollupConfig);\n    watcher.on('event', async event => {\n      switch (event.code) {\n        case 'BUNDLE_START':\n          console.log(`${chalk.bgYellow.black(' BUILDING ')} ${logKey}`);\n          break;\n        case 'BUNDLE_END':\n          for (let i = 0; i < otherOutputPaths.length; i++) {\n            await asyncCopyTo(mainOutputPath, otherOutputPaths[i]);\n          }\n          console.log(`${chalk.bgGreen.black(' COMPLETE ')} ${logKey}\\n`);\n          break;\n        case 'ERROR':\n        case 'FATAL':\n          console.log(`${chalk.bgRed.black(' OH NOES! ')} ${logKey}\\n`);\n          handleRollupError(event.error);\n          break;\n      }\n    });\n  } else {\n    console.log(`${chalk.bgYellow.black(' BUILDING ')} ${logKey}`);\n    try {\n      //\u6784\u5efarollup\u89c4\u5219\u8fdb\u884c\u6253\u5305\n      const result = await rollup.rollup(rollupConfig);\n      await result.write(rollupOutputOptions);\n    } catch (error) {\n      console.log(`${chalk.bgRed.black(' OH NOES! ')} ${logKey}\\n`);\n      handleRollupError(error);\n      throw error;\n    }\n    for (let i = 0; i < otherOutputPaths.length; i++) {\n      await asyncCopyTo(mainOutputPath, otherOutputPaths[i]);\n    }\n    console.log(`${chalk.bgGreen.black(' COMPLETE ')} ${logKey}\\n`);\n  }\n}\n")))}p.isMDXComponent=!0}}]);