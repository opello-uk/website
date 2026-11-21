import { HtmlValidate } from 'html-validate';
import fs from 'fs';
import path from 'path';
const v = new HtmlValidate({
  extends: ['html-validate:recommended'],
  rules: {
    'no-inline-style': 0, 'require-sri': 0, 'attribute-allowed-values': 0,
    'no-unused-disable': 0, 'heading-level': 2, 'no-dup-id': 2,
    'element-required-attributes': 2, 'no-missing-references': 2
  }
});
const out = [];
function walk(d){ for (const e of fs.readdirSync(d,{withFileTypes:true})){ const p=path.join(d,e.name); if(e.isDirectory()) walk(p); else if(e.name.endsWith('.html')) out.push(p); } }
walk('build');
let pages=0, errs=0; const byRule={};
for (const f of out){
  const r = v.validateString(fs.readFileSync(f,'utf8'), f);
  pages++;
  for (const c of r.results?.[0]?.messages ?? []) {
    if (c.severity === 2) { errs++; byRule[c.ruleId]=(byRule[c.ruleId]||0)+1; console.log(`${f} [${c.ruleId}] L${c.line}: ${c.message}`); }
  }
}
console.log(`\n${pages} pages, ${errs} errors`, JSON.stringify(byRule));
