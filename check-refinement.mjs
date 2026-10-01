import {chromium} from '@playwright/test';
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
await page.goto('http://127.0.0.1:5173');
for(const id of ['about','skills','projects','certifications','education','contact']){await page.locator('#'+id).scrollIntoViewIfNeeded();await page.waitForTimeout(500);}
const contrast=await page.evaluate(()=>{
 const rgb=s=>(s.match(/[\d.]+/g)||[]).slice(0,3).map(Number);
 const luminance=rgb=>rgb.map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4}).reduce((a,x,i)=>a+x*[.2126,.7152,.0722][i],0);
 const failures=[];let count=0,min=99;
 for(const el of document.querySelectorAll('body *')){
  const text=[...el.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent.trim()).join(' ').trim();
  if(!text||!el.getClientRects().length||['SCRIPT','STYLE'].includes(el.tagName))continue;
  const style=getComputedStyle(el);if(style.visibility==='hidden')continue;
  let bg=[16,18,15];
  for(let p=el;p;p=p.parentElement){const st=getComputedStyle(p);const solid=st.backgroundColor;if(solid!=='rgba(0, 0, 0, 0)'&&solid!=='transparent'){bg=rgb(solid);break;}if(st.backgroundImage.includes('gradient')){const colors=(st.backgroundImage.match(/rgb\([^)]+\)/g)||[]).map(rgb);if(colors.length){bg=colors.sort((a,b)=>luminance(b)-luminance(a))[0];break;}}}
  const fg=rgb(style.color);if(fg.length!==3)continue;const a=luminance(fg),b=luminance(bg);const ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
  const large=parseFloat(style.fontSize)>=24||(parseFloat(style.fontSize)>=18.66&&Number(style.fontWeight)>=700);const target=large?3:4.5;
  count++;min=Math.min(min,ratio);if(ratio<target)failures.push({text:text.slice(0,55),selector:el.className,ratio:Number(ratio.toFixed(2)),target,fg:style.color,bg});
 }
 return{count,min:Number(min.toFixed(2)),failures};
});
console.log(JSON.stringify(contrast,null,2));
await page.setViewportSize({width:768,height:1024});
await page.locator('#projects').scrollIntoViewIfNeeded();await page.waitForTimeout(600);await page.screenshot({path:'.test-artifacts/tablet-projects.png'});
await page.setViewportSize({width:1440,height:1000});
await page.locator('#projects').scrollIntoViewIfNeeded();await page.waitForTimeout(600);await page.locator('#projects').screenshot({path:'.test-artifacts/projects-refined.png'});
await page.locator('#certifications').scrollIntoViewIfNeeded();await page.waitForTimeout(600);await page.locator('#certifications').screenshot({path:'.test-artifacts/credentials-refined.png'});
await browser.close();
if(contrast.failures.length)process.exitCode=1;
