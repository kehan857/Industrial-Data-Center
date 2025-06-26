import{d as G,f as d,r as _,o as O,n as X,_ as u,$ as a,k as c,a6 as l,a0 as o,Y as v,Z as r,G as Y,F as g,a3 as b,X as J,a1 as N}from"./vendor-DYmnM11n.js";import{a as z}from"./antd-Bkgtc1Na.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const W={class:"industry-map"},ee={class:"map-header"},ae={class:"header-left"},te={class:"page-title"},ne={class:"header-right"},se={class:"kpi-section"},oe={class:"kpi-card"},ce={class:"kpi-value"},le={class:"kpi-label"},ie={class:"main-content"},re={class:"stats-panel"},de={class:"ranking-list"},ue=["onClick"],pe={class:"rank"},ve={class:"name"},_e={class:"count"},me={class:"ranking-list"},fe={class:"rank"},he={class:"name"},ye={class:"count"},ke={class:"map-container"},ge={class:"stats-panel"},be={class:"total-count"},xe={class:"resource-grid"},$e={class:"resource-count"},Le={class:"resource-label"},Ce=["onClick"],Ie=G({__name:"IndustryMap",setup(Te){const S=N(),L=d(""),C=d("产业链地图"),B=d(""),m=d(!1),I=d(""),f=d(),x=d(),$=_([{label:"产业链数量",value:35},{label:"企业总数量",value:510},{label:"上游企业数量",value:210},{label:"中游企业数量",value:180},{label:"下游企业数量",value:120}]),D=_([{name:"石油化工",count:156},{name:"电子信息",count:143},{name:"装备制造",count:128},{name:"生物医药",count:95},{name:"新材料",count:87},{name:"新能源",count:76}]),E=_([{name:"制造业单项冠军企业",count:89},{name:"专精特新小巨人企业",count:156},{name:"高新技术企业",count:234},{name:"独角兽企业",count:12},{name:"上市公司",count:67}]),h=_({total:510,unfinanced:234,financing:187,listed:89}),F=_([{label:"企业",count:510},{label:"产业",count:35},{label:"方案",count:128},{label:"需求",count:89},{label:"专家",count:67},{label:"政策",count:45},{label:"知识",count:234}]),P=d([{key:"petrochemical",name:"石油化工",count:45},{key:"electronics",name:"电子信息",count:38},{key:"manufacturing",name:"装备制造",count:32},{key:"biotech",name:"生物医药",count:28}]),R=[{title:"序号",dataIndex:"index",key:"index",width:60,customRender:({index:e})=>e+1},{title:"产业链名称",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"企业数量",dataIndex:"count",key:"count",render:e=>`${e}家`}],U=e=>{e.trim()&&T(e)},T=e=>{B.value=e,C.value=`${e} - 产业链地图`,V(e),q(e),z.success(`已切换到${e}产业链视图`)},V=e=>{const n={石油化工:[{value:1},{value:156},{value:68},{value:54},{value:34}],电子信息:[{value:1},{value:143},{value:62},{value:49},{value:32}]}[e];n&&n.forEach((y,p)=>{$[p]&&y.value!==void 0&&($[p].value=y.value)})},w=()=>{f.value&&(f.value.innerHTML=`
    <div class="map-placeholder">
      <div class="map-title">中国产业链分布图</div>
      <div class="map-background">
        <svg width="100%" height="100%" viewBox="0 0 600 400" style="position: absolute; top: 0; left: 0;">
          <!-- 简化的中国地图轮廓 -->
          <defs>
            <pattern id="mapPattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <circle cx="10" cy="10" r="1" fill="#e8f5e8" opacity="0.3"/>
            </pattern>
          </defs>
          <path d="M100,80 L500,80 L520,120 L480,180 L520,220 L500,280 L450,320 L350,340 L250,320 L150,300 L100,250 L80,200 L90,150 Z" 
                fill="url(#mapPattern)" 
                stroke="#d0f0d0" 
                stroke-width="2"/>
        </svg>
      </div>
      <div class="provinces">
        ${[{name:"河南",count:950,x:45,y:40,color:"#ff6b6b"},{name:"山东",count:820,x:50,y:25,color:"#4ecdc4"},{name:"江苏",count:750,x:55,y:35,color:"#45b7d1"},{name:"广东",count:680,x:48,y:75,color:"#f9ca24"},{name:"浙江",count:620,x:58,y:45,color:"#6c5ce7"},{name:"四川",count:580,x:25,y:55,color:"#a0e7e5"}].map(e=>`
          <div class="province-marker" 
               style="left: ${e.x}%; top: ${e.y}%"
               data-province="${e.name}"
               data-count="${e.count}">
            <div class="marker-dot" style="background: ${e.color};">
              <div class="pulse"></div>
            </div>
            <div class="marker-label">${e.name}<br/><strong>${e.count}</strong></div>
          </div>
        `).join("")}
      </div>
    </div>
  `,f.value.querySelectorAll(".province-marker").forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation();const n=s.currentTarget.dataset.province;n&&H(n)}),e.addEventListener("mouseenter",s=>{const n=s.currentTarget.querySelector(".marker-dot");n&&(n.style.transform="scale(1.3)",n.style.zIndex="20")}),e.addEventListener("mouseleave",s=>{const n=s.currentTarget.querySelector(".marker-dot");n&&(n.style.transform="scale(1)",n.style.zIndex="10")})}))},q=e=>{w(),z.info(`地图已更新为${e}产业链分布`)},K=()=>{x.value&&(x.value.innerHTML=`
    <div class="pie-chart">
      <div class="chart-legend">
        <div class="legend-item">
          <span class="legend-color" style="background: #ff4d4f"></span>
          <span>未融资 ${h.unfinanced}</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background: #1890ff"></span>
          <span>融资中 ${h.financing}</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background: #52c41a"></span>
          <span>已上市 ${h.listed}</span>
        </div>
      </div>
    </div>
  `)},H=e=>{I.value=e,m.value=!0},Z=e=>{m.value=!1,S.push(`/insights/industry-chain/${e}`)};return O(()=>{X(()=>{w(),K()})}),(e,s)=>{const n=v("a-button"),y=v("a-input-search"),p=v("a-col"),M=v("a-row"),k=v("a-card"),j=v("a-table"),A=v("a-modal");return r(),u("div",W,[a("div",ee,[a("div",ae,[a("h1",te,l(C.value),1)]),a("div",ne,[c(y,{value:L.value,"onUpdate:value":s[0]||(s[0]=t=>L.value=t),placeholder:"产业链名称",style:{width:"300px"},onSearch:U},{enterButton:o(()=>[c(n,{type:"primary"},{default:o(()=>s[2]||(s[2]=[Y("搜索")])),_:1,__:[2]})]),_:1},8,["value"])])]),a("div",se,[c(M,{gutter:16},{default:o(()=>[(r(!0),u(g,null,b($,(t,i)=>(r(),J(p,{span:4,key:i},{default:o(()=>[a("div",oe,[a("div",ce,l(t.value),1),a("div",le,l(t.label),1)])]),_:2},1024))),128))]),_:1})]),a("div",ie,[c(M,{gutter:24},{default:o(()=>[c(p,{span:6},{default:o(()=>[a("div",re,[c(k,{title:"产业链排行",size:"small",class:"ranking-card"},{default:o(()=>[a("div",de,[(r(!0),u(g,null,b(D,(t,i)=>(r(),u("div",{key:i,class:"ranking-item",onClick:we=>T(t.name)},[a("span",pe,l(i+1),1),a("span",ve,l(t.name),1),a("span",_e,l(t.count)+"家",1)],8,ue))),128))])]),_:1}),c(k,{title:"企业类型排行",size:"small",class:"ranking-card"},{default:o(()=>[a("div",me,[(r(!0),u(g,null,b(E,(t,i)=>(r(),u("div",{key:i,class:"ranking-item"},[a("span",fe,l(i+1),1),a("span",he,l(t.name),1),a("span",ye,l(t.count)+"家",1)]))),128))])]),_:1})])]),_:1}),c(p,{span:12},{default:o(()=>[a("div",ke,[a("div",{ref_key:"mapContainer",ref:f,class:"china-map"},null,512)])]),_:1}),c(p,{span:6},{default:o(()=>[a("div",ge,[c(k,{title:"企业融资状态统计",size:"small",class:"chart-card"},{default:o(()=>[a("div",{ref_key:"financingChart",ref:x,class:"chart-container"},null,512),a("div",be,"总计 "+l(h.total),1)]),_:1}),c(k,{title:"要素资源数量",size:"small",class:"resources-card"},{default:o(()=>[a("div",xe,[(r(!0),u(g,null,b(F,(t,i)=>(r(),u("div",{key:i,class:"resource-item"},[a("div",$e,l(t.count),1),a("div",Le,l(t.label),1)]))),128))])]),_:1})])]),_:1})]),_:1})]),c(A,{open:m.value,"onUpdate:open":s[1]||(s[1]=t=>m.value=t),title:`${I.value}产业链`,width:"600px",footer:null},{default:o(()=>[c(j,{columns:R,"data-source":P.value,pagination:!1,size:"small"},{name:o(({record:t})=>[a("a",{onClick:i=>Z(t.key)},l(t.name),9,Ce)]),_:1},8,["data-source"])]),_:1},8,["open","title"])])}}}),Be=Q(Ie,[["__scopeId","data-v-1a9b956f"]]);export{Be as default};
