import{d as S,o as r,f as u,a as s,Q as c,R as q,T as V,r as v,U as h,V as I,W as j,c as y,w as H,_ as L,X as w,Y as _,i as p,Z as C,b as m,$ as g,g as N,v as P,k,a0 as T}from"./index-CaFPn9NO.js";import{N as M}from"./notyf.min-BkKPNi7r.js";const B={class:"max-w-md mx-auto mt-10 overflow-hidden bg-white rounded-lg shadow-lg"},R={class:"p-4"},U={class:"flex items-center"},G={class:"ml-4"},O={class:"text-xl font-bold"},F={class:"text-gray-600"},J={class:"mt-4 text-gray-700"},z={class:"mt-4 text-sm text-gray-500"},Q=S({__name:"CommentsCard",props:{name:{type:String,required:!0},category:{type:String,required:!0},text:{type:String,required:!0},date:{type:Object,required:!0}},setup(d){const i=d.date.toDate().toLocaleDateString();return(o,t)=>(r(),u("div",B,[s("div",R,[s("div",U,[t[0]||(t[0]=s("i",{class:"text-2xl text-blue-500 fas fa-user"},null,-1)),s("div",G,[s("h2",O,"Comentario de "+c(d.name),1),s("p",F,"Categoría: "+c(d.category),1)])]),s("p",J,c(d.text),1),s("div",z,[t[1]||(t[1]=s("i",{class:"fas fa-clock"},null,-1)),s("span",null,c(q(i)),1)])])]))}}),W={class:"container p-4 mx-auto font-poppins"},X={class:"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"},Y=["onClick"],Z={class:"mt-8"},K={class:"p-4 bg-white rounded-lg shadow-md"},ss={class:"font-semibold text-sky-800"},es={key:0,class:"flex flex-wrap justify-around space-y-4"},as={class:"mt-8"},os={class:"p-4 bg-white rounded-lg shadow-md"},ts={class:"mb-4"},cs=S({__name:"CommentsView",setup(d){const f=V(),i=v(""),o=v(""),t=v(),E=h(f,"comments"),D=I(E,n=>{t.value=[],n.docChanges().forEach(e=>{t.value.push({id:e.doc.id,name:e.doc.data().name,category:e.doc.data().category,text:e.doc.data().text,date:e.doc.data().createdAt})})},n=>console.log(n)),A=n=>{o.value=n},b=[{name:"Policías",desc:"Justos vs corruptos",icon:"fas fa-shield-alt"},{name:"Médicos",desc:"Éticos vs negligentes",icon:"fas fa-user-md"},{name:"Maestros",desc:"Inspiradores vs abusivos",icon:"fas fa-chalkboard-teacher"},{name:"Abogados",desc:"Defensores vs manipuladores",icon:"fas fa-gavel"},{name:"Ingenieros",desc:"Innovadores vs irresponsables",icon:"fas fa-cogs"},{name:"Constructores",desc:"Cumplidos vs fraudulentos",icon:"fas fa-hard-hat"},{name:"Empleados domésticos",desc:"Dedicados vs descuidados",icon:"fas fa-broom"},{name:"Programadores",desc:"Transparentes vs que crean malware",icon:"fas fa-laptop-code"},{name:"Taxistas",desc:"Honestos vs abusivos",icon:"fas fa-taxi"},{name:"Amigos",desc:"Leales vs traicioneros",icon:"fas fa-handshake"},{name:"Vecinos",desc:"Solidarios vs problemáticos",icon:"fas fa-users"},{name:"Parejas",desc:"Amorosas vs tóxicas",icon:"fas fa-heart"},{name:"Padres",desc:"Responsables vs negligentes",icon:"fas fa-users-cog"},{name:"Hijos",desc:"Agradecidos vs desobedientes",icon:"fas fa-child"},{name:"Gobiernos",desc:"Democráticos vs dictatoriales",icon:"fas fa-landmark"},{name:"Escuelas",desc:"De calidad vs mediocres",icon:"fas fa-school"},{name:"Bancos",desc:"Transparentes vs usureros",icon:"fas fa-university"},{name:"Tiendas",desc:"Honestas vs engañosas",icon:"fas fa-store"},{name:"Hospitales",desc:"Humanitarios vs mercantilistas",icon:"fas fa-hospital"},{name:"Artistas",desc:"Auténticos vs manipuladores",icon:"fas fa-palette"},{name:"Influencers",desc:"Educativos vs desinformadores",icon:"fas fa-broadcast-tower"},{name:"Medios de comunicación",desc:"Informativos vs amarillistas",icon:"fas fa-newspaper"},{name:"Productores de cine",desc:"Creativos vs explotadores",icon:"fas fa-film"},{name:"Escritores",desc:"Inspiradores vs plagiaristas",icon:"fas fa-feather-alt"},{name:"Ciudadanos",desc:"Cívicos vs irresponsables",icon:"fas fa-users"},{name:"Voluntarios",desc:"Comprometidos vs oportunistas",icon:"fas fa-hands-helping"},{name:"Activistas",desc:"Genuinos vs interesados",icon:"fas fa-flag"},{name:"ONG",desc:"Solidarias vs fraudulentas",icon:"fas fa-people-carry"},{name:"Supermercados",desc:"Justos vs abusivos",icon:"fas fa-cart-plus"},{name:"Restaurantes",desc:"Higiénicos vs sucios",icon:"fas fa-utensils"},{name:"Empresas tecnológicas",desc:"Innovadoras vs invasivas",icon:"fas fa-microchip"},{name:"Marcas de ropa",desc:"Eticas vs que explotan mano de obra",icon:"fas fa-tshirt"},{name:"Empresas ecológicas",desc:"Sostenibles vs hipócritas",icon:"fas fa-leaf"},{name:"Lideres religiosos",desc:"Ejemplares vs abusivos",icon:"fas fa-cross"},{name:"Comunidades religiosas",desc:"Inclusivas vs sectarias",icon:"fas fa-praying-hands"},{name:"Empresas de reciclaje",desc:"Comprometidas vs que contaminan",icon:"fas fa-recycle"},{name:"Agricultores",desc:"Sostenibles vs que usan químicos dañinos",icon:"fas fa-seedling"},{name:"Hackers",desc:"Éticos vs destructivos",icon:"fas fa-user-secret"},{name:"Plataformas digitales",desc:"Seguras vs invasivas",icon:"fas fa-cloud"},{name:"Líderes históricos",desc:"Visionarios vs autoritarios",icon:"fas fa-globe"},{name:"Otros",desc:"Diversos roles y perspectivas",icon:"fas fa-ellipsis-h"}],l=new M,$=async()=>{if(!k().getIsUserAuth){l.error({message:"Debe iniciar sesión para comentar.",position:{x:"right",y:"top"}});return}if(o.value===""){l.error("Por favor, selecciona una categoría.");return}if(i.value.trim()===""){l.error("El comentario no puede estar vacío.");return}try{await T(h(f,"comments"),{category:o.value,text:i.value,createdAt:new Date,name:k().getUserName}),i.value="",l.open({type:"success",background:"green",message:"Comentario agregado correctamente.",position:{x:"right",y:"top"},duration:8e3})}catch(n){console.log(n),l.error("Error al enviar el comentario.")}};return j(()=>D()),(n,e)=>(r(),y(L,null,{main:H(()=>{var x;return[s("div",W,[e[6]||(e[6]=s("h1",{class:"mb-8 text-3xl font-bold text-center"},"Elige la categoría a comentar",-1)),s("div",X,[(r(),u(_,null,w(b,a=>s("a",{href:"#comentar",class:g([a.name.toLowerCase()==o.value.toLowerCase()?"bg-sky-900 text-white":"bg-white","flex items-center justify-center p-4 rounded-lg shadow-md hover:bg-emerald-600 hover:text-white"]),onClick:ns=>A(a.name),key:a.name},[s("i",{class:g(["mr-2 text-2xl",a.icon])},null,2),m(" "+c(a.name),1)],10,Y)),64))]),e[7]||(e[7]=s("hr",{class:"my-4",id:"comentar"},null,-1)),s("div",Z,[e[2]||(e[2]=s("h2",{class:"mb-4 text-2xl font-semibold"},"Comentarios",-1)),s("div",K,[p(s("p",null,"Selecciona una categoría para ver los comentarios relacionados.",512),[[C,o.value==""]]),p(s("p",null,[e[1]||(e[1]=m("Su comentario será sobre la categoría: ")),s("span",ss,[m(c(o.value)+" ",1),s("i",{class:g((x=b.find(a=>a.name===o.value))==null?void 0:x.icon)},null,2)])],512),[[C,o.value!==""]])]),t.value?(r(),u("section",es,[(r(!0),u(_,null,w(t.value.filter(a=>a.category===o.value),a=>(r(),y(Q,{key:a.id,text:a.text,name:a.name,category:a.category,date:a.date},null,8,["text","name","category","date"]))),128))])):N("",!0)]),s("div",as,[e[5]||(e[5]=s("h2",{class:"mb-4 text-2xl font-semibold"},"Añadir un comentario",-1)),s("div",os,[s("div",ts,[e[3]||(e[3]=s("label",{for:"comment",class:"block mb-2 text-lg font-medium"},[s("i",{class:"mr-2 fas fa-comment-dots"}),m("Escribe tu comentario")],-1)),p(s("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a),id:"comment",rows:"4",placeholder:"Mi comentario es sobre los supermercados, el supermercado en el que yo asisto tiene los precios más bajos, pero el supermercado a 3 calles tiene los precios mas altos...",class:"w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[P,i.value]])]),s("button",{onClick:$,class:"px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"},e[4]||(e[4]=[s("i",{class:"mr-2 fas fa-paper-plane"},null,-1),m("Enviar ")]))])])])]}),_:1}))}});export{cs as default};
