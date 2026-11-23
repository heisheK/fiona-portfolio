const projects=[
  {
    kicker:'INTERACTIVE HERITAGE · 2026',title:'舞鱼灯',year:'2026',role:'体验设计 / 交互开发',output:'Web 互动装置 / 手势识别 / 3D 粒子',
    intro:'以大良鱼灯为核心，将“水面唤醒、钓起鱼影、观看制灯、领取鱼灯、放飞汇群”设计成连续体验。观众通过捏合、挥手、握拳与张掌推动仪式，屏幕反馈与非遗工艺影像同步发生。',
    hero:{type:'video',src:'./assets/projects/fish-lantern.mp4',poster:'./assets/projects/fish-lantern-poster.jpg'},
    highlights:[['体验路径','把五个环节收拢为一条无需说明书的参与路径。'],['交互机制','MediaPipe 手势总线驱动钓鱼、粒子聚散与鱼灯放飞。'],['技术实现','Three.js、GLB 模型、粒子效果和工艺视频在网页中协同运行。']],
    gallery:[
      {type:'image',src:'./assets/projects/fish-lantern-night.jpg',caption:'夜间鱼灯场景与水面氛围'},
      {type:'image',src:'./assets/projects/fish-gesture-pinch.jpg',caption:'捏合手势：画模与放线'},
      {type:'image',src:'./assets/projects/fish-gesture-ok.jpg',caption:'OK 手势：完成鱼灯并进入下一环节'}
    ]
  },
  {
    kicker:'AI COMMERCIAL · 2026',title:'爱奇艺 AI 创意',year:'2026',role:'AI 产品运营实习',output:'广告素材 / 模板适配 / 效果复盘',
    intro:'面向广告商业化创意生产，参与 AIGC 素材的生成与适配。工作覆盖创意方向拆解、不同尺寸的视觉版式、短视频素材以及投放反馈复盘，让生成内容更接近真实业务目标。',
    hero:{type:'video',src:'./assets/projects/iqiyi-commercial.mp4',poster:'./assets/projects/iqiyi-poster.jpg'},
    highlights:[['创意生产','围绕会员、互动玩法和内容 IP 设计不同广告表达。'],['多尺寸适配','将同一创意转译为横版视频、竖版素材与信息流落地页。'],['效果导向','结合素材表现识别有效元素，持续调整画面、文案与节奏。']],
    gallery:[
      {type:'video',src:'./assets/projects/iqiyi-vertical.mp4',portrait:true,caption:'互动玩法短视频素材'},
      {type:'image',src:'./assets/projects/iqiyi-case-01.jpg',portrait:true,caption:'真人与插画风格转换'},
      {type:'image',src:'./assets/projects/iqiyi-case-02.jpg',portrait:true,caption:'角色插画化效果展示'},
      {type:'image',src:'./assets/projects/iqiyi-case-03.jpg',portrait:true,caption:'紫色信息流版本'},
      {type:'image',src:'./assets/projects/iqiyi-case-04.jpg',portrait:true,caption:'轻量视觉版本'}
    ]
  },
  {
    kicker:'PRODUCT EXPERIENCE · 2026',title:'熨烫时间',year:'2026',role:'玩法策划 / 交互原型',output:'三组竖屏互动 Demo',
    intro:'围绕“把图案一点点完成”的满足感设计轻量互动玩法。委屈猫、夜光熊与海绵宝宝三条 Demo 分别呈现填充、熨烫与成形过程，节奏短、反馈直接，也保留了每条素材的独立叙事。',
    hero:{type:'video',src:'./assets/projects/ironing-bear.mp4',poster:'./assets/projects/ironing-bear-poster.jpg'},
    highlights:[['即时反馈','每一步操作都对应清晰的视觉变化，让完成过程成为内容。'],['系列化表达','同一玩法容纳不同角色与情境，形成可持续扩展的内容模板。'],['移动端节奏','竖屏构图、短时长和明确结果，适合碎片化体验。']],
    gallery:[
      {type:'video',src:'./assets/projects/ironing-cat.mp4',portrait:true,caption:'委屈猫｜最后几颗'},
      {type:'video',src:'./assets/projects/ironing-bear.mp4',portrait:true,caption:'被窝里藏了一只夜光熊'},
      {type:'video',src:'./assets/projects/ironing-sponge.mp4',portrait:true,caption:'闺蜜抢手机｜海绵宝宝成形'}
    ]
  },
  {
    kicker:'WORLD BUILDING · 2025',title:'New Babylon',year:'2025',role:'概念策划 / 视觉生成 / 剪辑',output:'AI 概念短片',
    intro:'以近未来都市、身份系统与技术秩序为线索完成世界观影像。项目关注空间、角色与镜头之间的视觉一致性，让生成片段不只停留在单张“漂亮画面”，而能共同建立叙事语境。',
    hero:{type:'video',src:'./assets/projects/new-babylon.mp4',poster:'./assets/projects/new-babylon-poster.jpg'},
    highlights:[['世界构建','用城市结构与身份规则建立近未来叙事背景。'],['视觉约束','统一材质、色调和角色特征，降低镜头间的跳脱感。'],['剪辑节奏','用空间转换与声音节拍连接不同生成片段。']],
    gallery:[]
  },
  {
    kicker:'AI SERIAL · 2025—2026',title:'洋葱社 AI 连续叙事',year:'2025—2026',role:'叙事策划 / 视觉生成 / 剪辑',output:'系列 AI 短片',
    intro:'以连续剧式结构探索角色一致性与跨集叙事。不同集数通过人物关系、场景线索与色调约束保持辨识度，并在生成结果之上重新组织镜头和节奏。',
    hero:{type:'video',src:'./assets/projects/onion-episode2.mp4'},
    highlights:[['跨集线索','将角色关系和关键场景作为系列内容的视觉锚点。'],['生成控制','通过提示词与参考图约束人物、服装和环境。'],['后期重组','对生成片段二次剪辑，建立清晰的情节推进。']],
    gallery:[
      {type:'video',src:'./assets/projects/onion-episode2.mp4',caption:'第二集｜连续叙事片段'},
      {type:'video',src:'./assets/projects/aigc-narrative.mp4',caption:'第八集｜连续叙事片段'},
      {type:'image',src:'./assets/projects/narrative-episode8.jpg',caption:'第八集视觉画面'}
    ]
  },
  {
    kicker:'CULTURE REIMAGINED · 2025',title:'文化再想象',year:'2025',role:'内容策划 / 视觉生成 / 剪辑',output:'文化科普动画',
    intro:'将春节非遗与秦始皇陵题材转译为更轻、更易传播的动画内容。视觉不复刻传统图像，而是通过角色化、场景化和短叙事建立新的观看入口。',
    hero:{type:'video',src:'./assets/projects/heritage-reimagined.mp4'},
    highlights:[['题材转译','从知识点中提取能够被角色和动作承载的核心信息。'],['视觉语气','用轻量动画降低历史文化内容的理解门槛。'],['传播结构','短时长、强画面节点，适应社交媒体观看节奏。']],
    gallery:[
      {type:'video',src:'./assets/projects/qin-story.mp4',caption:'秦始皇陵与兵马俑动画片段'},
      {type:'image',src:'./assets/projects/narrative-heritage.jpg',caption:'春节非遗视觉画面'},
      {type:'image',src:'./assets/projects/narrative-qin.jpg',caption:'历史题材角色设定'}
    ]
  },
  {
    kicker:'VERTICAL CAMPAIGN · 2025',title:'Cucumission',year:'2025',role:'创意策划 / 视觉生成 / 剪辑',output:'海外竖屏广告实验',
    intro:'围绕科幻任务语境完成竖屏广告实验。画面以强符号、快速信息切换和移动端构图为主，测试生成式视觉在海外短视频广告中的表达效率。',
    hero:{type:'video',src:'./assets/projects/cucumission.mp4'},
    highlights:[['竖屏优先','从人物尺度到信息层级均围绕移动端画幅组织。'],['视觉钩子','以科幻空间和任务叙事建立首屏吸引力。'],['节奏控制','在短时长内完成设定、行动与结果的表达。']],
    gallery:[{type:'image',src:'./assets/projects/narrative-tiktok.jpg',portrait:true,caption:'海外竖屏广告视觉测试'}]
  },
  {
    kicker:'BRAND EXPERIENCE · 2023',title:'Rose Planet',year:'2023',role:'概念策划 / 用户体验',output:'品牌虚拟体验 / 用户流程 / 视觉原型',
    intro:'围绕美妆与个性化护肤构想一座可探索的 Rose Planet。用户创建虚拟角色、识别皮肤需求、完成章节任务，并收集专属数字玫瑰，让品牌体验从单次购买延伸为持续探索。',
    hero:{type:'video',src:'./assets/projects/rose-planet.mp4',poster:'./assets/projects/rose-planet-poster.jpg'},
    highlights:[['进入方式','通过虚拟角色和皮肤状态选择完成个性化起点。'],['探索机制','社区、章节任务与数字玫瑰形成可持续的体验循环。'],['品牌连接','在任务节点中解锁对应护肤内容与定制产品建议。']],
    gallery:[
      {type:'image',src:'./assets/projects/rose-planet-flow.jpg',caption:'角色创建、皮肤识别与品牌向导'},
      {type:'image',src:'./assets/projects/rose-planet-features.jpg',caption:'社区、任务、数字玫瑰与护肤区域'}
    ]
  },
  {
    kicker:'CREATIVE STRATEGY · 2023',title:'城市自然任意门',year:'2023',role:'品牌策略 / 产品创意',output:'LVMH 校园创意挑战赛方案',
    intro:'为茶灵香水提出“通往城市自然生活任意门”方案。项目从品牌认知和年轻人的情绪需求出发，设计香水香薰一体化产品，并延伸到内容传播、自然主题快闪店与 AR 寻香体验。',
    hero:{type:'image',src:'./assets/projects/lvmh-cover.jpg'},
    highlights:[['产品概念','山茶花成为瓶内扩香结构，香水使用后可继续作为家居香薰。'],['内容传播','围绕自然、舒缓与东方原料组织社交媒体内容。'],['线下体验','快闪店结合 AR 打卡、3D 雨林场景与个性化标签。']],
    gallery:[
      {type:'image',src:'./assets/projects/lvmh-product.jpg',caption:'山茶花香水香薰一体化产品概念'},
      {type:'image',src:'./assets/projects/lvmh-ar.jpg',caption:'AR 寻香与线下体验构想'}
    ]
  },
  {
    kicker:'VIBE CODING · 2026',title:'Vibe Coding 小作品',year:'2026',role:'产品构想 / 原型实现',output:'微信小程序 / 浏览器工具',
    intro:'两个从实际需求出发快速落地的轻量产品。',
    hero:{type:'collection'},
    highlights:[],
    gallery:[
      {type:'image',src:'./assets/projects/pet-miniapp.jpg',caption:'动物主题微信小程序｜扫码体验'},
      {type:'link',src:'./tools/adresize.html',caption:'AdResize｜广告尺寸转换工具',detail:'上传母版、调整构图并一次导出四种尺寸'}
    ]
  }
];

const cards=[...document.querySelectorAll('.archive-card')];
const filters=[...document.querySelectorAll('.archive-filter')];
const visibleCount=document.querySelector('#visibleProjectCount');
const turnCurrent=document.querySelector('#turnCurrent');
const archiveGrid=document.querySelector('.archive-grid');
let turnIndex=0;
function updateTurn(index){
  turnIndex=(index+cards.length)%cards.length;
  cards.forEach((card,i)=>{card.classList.toggle('turn-active',i===turnIndex);card.classList.toggle('turn-before',i<turnIndex);card.classList.toggle('turn-after',i>turnIndex)});
  turnCurrent.textContent=String(turnIndex+1).padStart(2,'0');
  const video=cards[turnIndex].querySelector('video');
  cards.forEach(card=>{const item=card.querySelector('video');if(item&&item!==video){item.pause();item.currentTime=0}});
  if(video)video.play().catch(()=>{});
}
function moveTurn(step){updateTurn(turnIndex+step);cards[turnIndex].scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'})}
document.querySelector('#turnPrev').addEventListener('click',()=>moveTurn(-1));
document.querySelector('#turnNext').addEventListener('click',()=>moveTurn(1));
archiveGrid.addEventListener('scroll',()=>{
  clearTimeout(archiveGrid.turnTimer);
  archiveGrid.turnTimer=setTimeout(()=>{const center=archiveGrid.getBoundingClientRect().left+archiveGrid.clientWidth/2;let closest=0,distance=Infinity;cards.forEach((card,i)=>{const box=card.getBoundingClientRect();const value=Math.abs(box.left+box.width/2-center);if(value<distance){distance=value;closest=i}});updateTurn(closest)},70);
},{passive:true});
function applyFilter(filter){
  let count=0;
  cards.forEach(card=>{const visible=filter==='all'||card.dataset.category===filter;card.hidden=!visible;if(visible)count+=1});
  filters.forEach(button=>{const active=button.dataset.filter===filter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
  visibleCount.textContent=String(count).padStart(2,'0');
}
filters.forEach(button=>button.addEventListener('click',()=>applyFilter(button.dataset.filter)));

const dialog=document.querySelector('#caseDialog');
const caseHero=document.querySelector('#caseHero');
const caseGallery=document.querySelector('#caseGallery');
function openProject(index){
  const project=projects[index];
  dialog.classList.toggle('image-case',project.hero.type==='image');
  dialog.classList.toggle('collection-case',project.hero.type==='collection');
  document.querySelector('#caseKicker').textContent=project.kicker;
  document.querySelector('#caseTitle').textContent=project.title;
  document.querySelector('#caseIntro').textContent=project.intro;
  document.querySelector('#caseRole').textContent=project.role;
  document.querySelector('#caseOutput').textContent=project.output;
  document.querySelector('#caseYear').textContent=project.year;
  caseHero.innerHTML=project.hero.type==='video'
    ? `<video src="${project.hero.src}" poster="${project.hero.poster}" autoplay muted loop playsinline controls></video>`
    : project.hero.type==='collection'
      ? `<div class="vibe-collection-hero"><span>PET<br>MINI APP</span><i>×</i><span>AD<br>RESIZE</span></div>`
      : `<img src="${project.hero.src}" alt="${project.title} 项目主视觉">`;
  document.querySelector('#caseHighlights').innerHTML=project.highlights.map((item,i)=>`<article><small>0${i+1}</small><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('');
  caseGallery.innerHTML=project.gallery.map(item=>item.type==='link'
    ? `<a class="tool-tile" href="${item.src}" target="_blank" rel="noopener"><small>RUN IN BROWSER</small><b>AdResize</b><p>${item.detail}</p><span>打开工具</span></a>`
    : `<figure class="${item.portrait?'portrait':''}">${item.type==='video'?`<video src="${item.src}" autoplay muted loop playsinline controls preload="metadata"></video>`:`<img src="${item.src}" alt="${item.caption}" loading="lazy">`}<figcaption>${item.caption}</figcaption></figure>`).join('');
  dialog.classList.add('open');
  dialog.setAttribute('aria-hidden','false');
  document.body.classList.add('case-open');
  dialog.scrollTop=0;
}
cards.forEach((card,index)=>{
  const projectIndex=Number(card.dataset.open);
  const open=()=>openProject(projectIndex);
  card.addEventListener('click',open);
  card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open()}});
  const video=card.querySelector('video');
  if(video){card.addEventListener('pointerenter',()=>video.play().catch(()=>{}));card.addEventListener('pointerleave',()=>{video.pause();video.currentTime=0});card.addEventListener('focusin',()=>video.play().catch(()=>{}));card.addEventListener('focusout',()=>video.pause())}
});
function closeProject(){dialog.querySelectorAll('video').forEach(video=>video.pause());dialog.classList.remove('open');dialog.setAttribute('aria-hidden','true');document.body.classList.remove('case-open')}
document.querySelector('#closeCase').addEventListener('click',closeProject);
dialog.addEventListener('click',event=>{if(event.target===dialog)closeProject()});

const cursor=document.querySelector('#cursor');
document.addEventListener('pointermove',event=>{cursor.style.left=`${event.clientX}px`;cursor.style.top=`${event.clientY}px`});
cards.forEach(card=>{
  card.addEventListener('pointerenter',()=>cursor.classList.add('show'));
  card.addEventListener('pointerleave',()=>cursor.classList.remove('show'));
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting)entry.target.classList.add('in');
  });
},{threshold:.16});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));

const sectionNumber=document.querySelector('#sectionNumber');
const rail=document.querySelector('.side-index');
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const number=entry.target.dataset.section;
    sectionNumber.textContent=number;
    rail.style.setProperty('--progress',`${Math.max(16,(Number(number)+1)*24)}%`);
  });
},{threshold:.55});
document.querySelectorAll('[data-section]').forEach(section=>sectionObserver.observe(section));

const menuButton=document.querySelector('#menuButton');
const nav=document.querySelector('.topbar nav');
menuButton.addEventListener('click',()=>{nav.classList.toggle('open');document.body.classList.toggle('menu-open')});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');document.body.classList.remove('menu-open')}));

document.addEventListener('keydown',event=>{
  if(dialog.classList.contains('open')&&event.key==='Escape')closeProject();
  if(profilePanel.classList.contains('open')&&event.key==='Escape')closeProfile();
});
applyFilter('all');
updateTurn(0);

const skills=[
  ['AI PRODUCT','需求分析 · 业务流程 · 产品验收'],
  ['FIGMA / PRD','交互原型 · 产品文档 · 方案落地'],
  ['AIGC WORKFLOW','多模态生成 · Dify · Coze · n8n'],
  ['DATA','Python · SQL · Excel · Tableau'],
  ['PROMPT DESIGN','参数化提示词 · 效果评测 · Badcase'],
  ['VIBE CODING','快速原型 · 前端实现 · AI 协作']
];
const skillName=document.querySelector('#skillName');
const skillDetail=document.querySelector('#skillDetail');
const skillIndex=document.querySelector('#skillIndex');
const skillField=document.querySelector('#skillField');
document.querySelectorAll('.skill-node').forEach((node,index)=>{
  const select=()=>{
    document.querySelectorAll('.skill-node').forEach(item=>item.classList.remove('active'));
    node.classList.add('active');
    skillName.textContent=skills[index][0];
    skillDetail.textContent=skills[index][1];
    skillIndex.textContent=`${String(index+1).padStart(2,'0')} / 06`;
  };
  let moving=false;
  node.addEventListener('click',select);
  node.addEventListener('pointerdown',event=>{moving=true;node.setPointerCapture(event.pointerId);select()});
  node.addEventListener('pointermove',event=>{
    if(!moving)return;
    const box=skillField.getBoundingClientRect();
    const x=Math.max(8,Math.min(92,(event.clientX-box.left)/box.width*100));
    const y=Math.max(8,Math.min(88,(event.clientY-box.top)/box.height*100));
    node.style.setProperty('--x',`${x}%`);
    node.style.setProperty('--y',`${y}%`);
  });
  node.addEventListener('pointerup',()=>moving=false);
  node.addEventListener('pointercancel',()=>moving=false);
});

document.querySelectorAll('.experience-card').forEach(card=>card.addEventListener('click',()=>card.classList.toggle('flipped')));
const educationCard=document.querySelector('#educationCard');
educationCard.addEventListener('click',()=>{
  const alternate=educationCard.classList.toggle('alt');
  educationCard.querySelector('b').textContent=alternate?'IMU':'SJTU';
  educationCard.querySelector('span').textContent=alternate?'新闻学 · 本科':'数字文创与管理 · 硕士';
  educationCard.querySelector('i').textContent=alternate?'内蒙古大学 · 2020—2024':'上海交通大学 · 2025—2028';
});

const profilePanel=document.querySelector('#profilePanel');
const profileShade=document.querySelector('#profileShade');
function openProfile(){profilePanel.classList.add('open');profileShade.classList.add('open');profilePanel.setAttribute('aria-hidden','false');document.body.classList.add('case-open')}
function closeProfile(){profilePanel.classList.remove('open');profileShade.classList.remove('open');profilePanel.setAttribute('aria-hidden','true');document.body.classList.remove('case-open')}
document.querySelector('#openProfileHero').addEventListener('click',openProfile);
document.querySelector('#openProfileCore').addEventListener('click',openProfile);
document.querySelector('#closeProfile').addEventListener('click',closeProfile);
profileShade.addEventListener('click',closeProfile);

document.querySelectorAll('.magnetic').forEach(element=>{
  element.addEventListener('pointermove',event=>{
    const box=element.getBoundingClientRect();
    element.style.translate=`${(event.clientX-box.left-box.width/2)*.12}px ${(event.clientY-box.top-box.height/2)*.12}px`;
  });
  element.addEventListener('pointerleave',()=>element.style.translate='0 0');
});
