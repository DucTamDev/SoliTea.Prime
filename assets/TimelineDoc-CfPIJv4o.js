import{s as y}from"./index-VSkbNLtX.js";import{s as _}from"./index-D9uuzpt6.js";import{B as $,a0 as z,s as w,o as u,a as g,F as T,r as C,y as v,e as n,x as f,k as b,d as O,g as h,b as m,w as r,h as p,t as c,f as B,n as S,_ as A}from"./index-CfhEF6aW.js";import"./index-BGSE6NIN.js";var q=({dt:e})=>`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${e("timeline.vertical.event.content.padding")};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${e("timeline.event.connector.size")};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${e("timeline.event.min.height")};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${e("timeline.event.marker.border.width")};
    border-style: solid;
    border-color: ${e("timeline.event.marker.border.color")};
    border-radius: ${e("timeline.event.marker.border.radius")};
    width: ${e("timeline.event.marker.size")};
    height: ${e("timeline.event.marker.size")};
    background: ${e("timeline.event.marker.background")};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${e("timeline.event.marker.content.border.radius")};
    width: ${e("timeline.event.marker.content.size")};
    height:${e("timeline.event.marker.content.size")};
    background: ${e("timeline.event.marker.content.background")};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("timeline.event.marker.border.radius")};
    box-shadow: ${e("timeline.event.marker.content.inset.shadow")};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${e("timeline.event.connector.color")};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${e("timeline.event.connector.size")};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${e("timeline.horizontal.event.content.padding")};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`,D={root:function(a){var s=a.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},K=$.extend({name:"timeline",style:q,classes:D}),F={name:"BaseTimeline",extends:w,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:K,provide:function(){return{$pcTimeline:this,$parentInstance:this}}},x={name:"Timeline",extends:F,inheritAttrs:!1,methods:{getKey:function(a,s){return this.dataKey?z(a,this.dataKey):s},getPTOptions:function(a,s){return this.ptm(a,{context:{index:s,count:this.value.length}})}}};function P(e,a,s,k,i,l){return u(),g("div",v({class:e.cx("root")},e.ptmi("root")),[(u(!0),g(T,null,C(e.value,function(d,o){return u(),g("div",v({key:l.getKey(d,o),class:e.cx("event"),ref_for:!0},l.getPTOptions("event",o)),[n("div",v({class:e.cx("eventOpposite",{index:o}),ref_for:!0},l.getPTOptions("eventOpposite",o)),[f(e.$slots,"opposite",{item:d,index:o})],16),n("div",v({class:e.cx("eventSeparator"),ref_for:!0},l.getPTOptions("eventSeparator",o)),[f(e.$slots,"marker",{item:d,index:o},function(){return[n("div",v({class:e.cx("eventMarker"),ref_for:!0},l.getPTOptions("eventMarker",o)),null,16)]}),o!==e.value.length-1?f(e.$slots,"connector",{key:0,item:d,index:o},function(){return[n("div",v({class:e.cx("eventConnector"),ref_for:!0},l.getPTOptions("eventConnector",o)),null,16)]}):b("",!0)],16),n("div",v({class:e.cx("eventContent"),ref_for:!0},l.getPTOptions("eventContent",o)),[f(e.$slots,"content",{item:d,index:o})],16)],16)}),128))],16)}x.render=P;const N={class:"grid grid-cols-12 gap-8"},V={class:"col-span-6"},j={class:"card"},I={class:"col-span-6"},L={class:"card"},M={class:"col-span-6"},E={class:"card"},R={class:"col-span-6"},H={class:"card"},G={class:"text-muted-color"},J={class:"col-span-full"},Q={class:"card"},U=["src","alt"],W={class:"col-span-full"},X={class:"card"},Y=O({__name:"TimelineDoc",setup(e){const a=h([{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),s=h(["2020","2021","2022","2023"]);return(k,i)=>{const l=x,d=_,o=y;return u(),g("div",N,[n("div",V,[n("div",j,[i[0]||(i[0]=n("div",{class:"mb-4 text-xl font-semibold"},"Left Align",-1)),m(l,{value:a.value},{content:r(t=>[p(c(t.item.status),1)]),_:1},8,["value"])])]),n("div",I,[n("div",L,[i[1]||(i[1]=n("div",{class:"mb-4 text-xl font-semibold"},"Right Align",-1)),m(l,{value:a.value,align:"right"},{content:r(t=>[p(c(t.item.status),1)]),_:1},8,["value"])])]),n("div",M,[n("div",E,[i[2]||(i[2]=n("div",{class:"mb-4 text-xl font-semibold"},"Alternate Align",-1)),m(l,{value:a.value,align:"alternate"},{content:r(t=>[p(c(t.item.status),1)]),_:1},8,["value"])])]),n("div",R,[n("div",H,[i[3]||(i[3]=n("div",{class:"mb-4 text-xl font-semibold"},"Opposite Content",-1)),m(l,{value:a.value},{opposite:r(t=>[n("small",G,c(t.item.date),1)]),content:r(t=>[p(c(t.item.status),1)]),_:1},8,["value"])])]),n("div",J,[n("div",Q,[i[5]||(i[5]=n("div",{class:"mb-4 text-xl font-semibold"},"Templating",-1)),m(l,{value:a.value,align:"alternate",class:"customized-timeline"},{marker:r(t=>[n("span",{class:"z-10 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-sm",style:B({backgroundColor:t.item.color})},[n("i",{class:S(t.item.icon)},null,2)],4)]),content:r(t=>[m(o,{class:"mt-4"},{title:r(()=>[p(c(t.item.status),1)]),subtitle:r(()=>[p(c(t.item.date),1)]),content:r(()=>[t.item.image?(u(),g("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${t.item.image}`,alt:t.item.name,width:"200",class:"shadow-sm"},null,8,U)):b("",!0),i[4]||(i[4]=n("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1)),m(d,{label:"Read more",text:""})]),_:2},1024)]),_:1},8,["value"])])]),n("div",W,[n("div",X,[i[7]||(i[7]=n("div",{class:"mb-4 text-xl font-semibold"},"Horizontal",-1)),i[8]||(i[8]=n("div",{class:"mb-2 font-semibold"},"Top Align",-1)),m(l,{value:s.value,layout:"horizontal",align:"top"},{content:r(t=>[p(c(t.item),1)]),_:1},8,["value"]),i[9]||(i[9]=n("div",{class:"mb-2 mt-4 font-semibold"},"Bottom Align",-1)),m(l,{value:s.value,layout:"horizontal",align:"bottom"},{content:r(t=>[p(c(t.item),1)]),_:1},8,["value"]),i[10]||(i[10]=n("div",{class:"mb-2 mt-4 font-semibold"},"Alternate Align",-1)),m(l,{value:s.value,layout:"horizontal",align:"alternate"},{opposite:r(()=>i[6]||(i[6]=[p("   ")])),content:r(t=>[p(c(t.item),1)]),_:1},8,["value"])])])])}}}),ie=A(Y,[["__scopeId","data-v-df89c176"]]);export{ie as default};
