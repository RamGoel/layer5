(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[6305],{14925:function(e,n,t){var r=t(15301).w_;e.exports.r=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"}},{tag:"path",attr:{d:"M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"}}]})(e)}},28157:function(e,n,t){var r=t(15301).w_;e.exports.w=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"8 17 12 21 16 17"}},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"}},{tag:"path",attr:{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}}]})(e)}},62268:function(e,n,t){var r=t(15301).w_;e.exports.I=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}},92102:function(e,n,t){var r=t(92632);e.exports={MDXRenderer:r}},92632:function(e,n,t){var r=t(3515),a=t(861),l=t(38416),i=t(7071),o=["scope","children"];function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=t(67294),u=t(64983).mdx,d=t(76948).useMDXScope;e.exports=function(e){var n=e.scope,t=e.children,l=i(e,o),c=d(n),p=m.useMemo((function(){if(!t)return null;var e=s({React:m,mdx:u},c),n=Object.keys(e),l=n.map((function(n){return e[n]}));return r(Function,["_fn"].concat(a(n),[""+t])).apply(void 0,[{}].concat(a(l)))}),[t,n]);return m.createElement(p,s({},l))}},89725:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(67294),a=t(1597),l=t(80285),i=t(14925),o=t(25679),c=t(64423).default.div.withConfig({displayName:"Cardstyle__CardWrapper",componentId:"sc-1sunj6k-0"})(["\n    .post-block{\n        margin-bottom: 2rem;\n        border-radius: 0.5rem;\n        background-Color:",";\n        box-shadow: 0px 2px 6px 0px ",";\n        transition: all 0.3s ease-in;\n        &:hover{\n            box-shadow: 0px 2px 15px 4px ",";\n            .post-thumb-block{\n                .gatsby-image-wrapper, .old-gatsby-image-wrapper{\n                    transform: scale3d(1.1,1.1,1);\n                }\n            }\n            .readmore-btn{\n                color: ",";\n                svg{\n                    margin-left: 0.25rem;\n                    transform: scale(1.2);\n                }\n            }\n        } \n    }\n    .readmore-btn{\n        color: ",";\n\n    }\n    @media screen and (max-width:776px){\n\t\t.post-block{\n\t\t\twidth: auto;\n\t\t\tmargin: auto auto 2rem;\n\t\t}\n\t}\n\n    .post-thumb-block{\n        overflow: hidden;\n        height: 11.5rem;\n        border-top-right-radius: 0.5rem;\n        border-top-left-radius: 0.5rem;\n\n        .gatsby-image-wrapper, .old-gatsby-image-wrapper{\n            height:100%;\n            transition: all 0.3s ease-in;\n        }\n        img{\n            height: inherit;\n            max-height: 180px;\n            display: block;\n            text-align: center;\n            margin: auto;\n        }\n    }\n\n    .post-content-block{\n        padding: 1rem 2rem;\n        height: 8rem;\n    }\n\n    @media screen and (max-width: 1200px) and (min-width: 992px){\n        .post-thumb-block{\n            height: 12rem;\n            \n        }\n       \n        .post-content-block{\n            height: 10rem;\n        }\n           \n\n    }\n   \n\n    @media screen and (max-width: 670px) and (min-width: 560px){\n        .post-content-block{\n            height: 10rem;\n            \n        }\n    }\n\n    @media screen and (max-width: 350px){\n        .post-content-block{\n            height: 10rem;\n        }\n    }\n\n    .post-title{\n        font-size: 1.4rem;\n        font-weight: 400;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    .post-meta-block{\n        height: auto;\n        display: flex;\n\n        .author{\n            text-align: end;\n        }\n        .author, p{\n            color: ",";\n            font-size: 0.9rem;\n            font-weight: 400;\n            flex: auto;\n        }\n        .type{\n            text-align: end;\n            font-size: 1rem;\n            font-weight: 400;\n        }\n    }\n\n    .readmore-btn-wrapper{\n        display:flex;\n        justify-content: flex-start;\n    }\n\n    .readmore-btn::after{\n        content: '';\n        position: absolute;\n        margin: 0 1rem 2rem;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n    }\n    .readmore-btn, .external-link-btn{\n       color: ",";\n       display: flex;\n       flex: auto;\n       align-items: center;\n       transition: all 0.3s ease-in;\n       svg{\n           font-size: 1.5rem;\n           transition: all 0.3s;\n       }\n    }\n\n    .external-link-btn{\n        justify-content: flex-end;\n        svg{\n            font-size: 2rem;\n            padding: 0.25rem;\n            position: relative;\n        }\n\n        &:hover{\n            color: ",";\n            svg{\n                transform: scale(1.25);\n            }\n        }\n    }\n"],(function(e){return e.theme.DarkTheme?"#212121":"#FFFFFF"}),(function(e){return e.theme.DarkTheme?"#00d3a9":"rgba(0, 0, 0, 0.20)"}),(function(e){return e.theme.DarkTheme?"rgba(255, 255, 255, 0.9)":"rgba(0, 0, 0, 0.1)"}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.DarkTheme?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)"}),(function(e){return e.theme.DarkTheme?"rgb(255 255 255 / 40%)":"rgb(0 0 0 / 40%)"}),(function(e){return e.theme.secondaryColor})),s=function(e){var n=e.frontmatter,t=e.fields,s=e.theme;return r.createElement(c,{fixed:!!n.abstract},r.createElement("div",{className:"post-block"},r.createElement("div",{className:"post-thumb-block"},r.createElement(o.Z,Object.assign({},"dark"===s?n.darkthumbnail:n.thumbnail,{imgStyle:{objectFit:"contain"},alt:n.title}))),r.createElement("div",{className:"post-content-block"},r.createElement("h2",{className:"post-title"},n.title),r.createElement("div",{className:"post-meta-block"},n.date&&n.author&&r.createElement(r.Fragment,null,r.createElement("p",null,n.date),r.createElement("p",{className:"author"},n.author)),n.date&&!n.author&&r.createElement("p",null,n.date),!n.date&&n.author&&r.createElement("p",{className:"author"},n.author),!n.author&&n.type&&r.createElement("p",{className:"type"},n.type)),r.createElement("div",{className:"readmore-btn-wrapper"},t&&t.slug&&n.eurl&&r.createElement(r.Fragment,null,r.createElement(a.Link,{className:"readmore-btn",to:t.slug},"see more ",r.createElement(l.f,null)),r.createElement("a",{className:"external-link-btn",href:n.eurl,target:"_blank",rel:"noreferrer"},r.createElement(i.r,null))),t&&t.slug&&!n.eurl&&r.createElement(a.Link,{className:"readmore-btn",to:t.slug},"see more ",r.createElement(l.f,null)),!t&&!t.slug&&n.eurl&&r.createElement("a",{className:"external-link-btn",href:n.eurl,target:"_blank",rel:"noreferrer"},r.createElement(i.r,null))))))}},11777:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(67294),a=t(1597),l=t(80285),i=t(89725),o=t(64423).default.div.withConfig({displayName:"relatedPostsstyle__RelatedPostsWrapper",componentId:"sc-4o1l69-0"})(["\n    Button:hover{\n        box-shadow: none;\n    }\n    .widgets-title{\n        margin: 1rem 0 2rem 0.5rem;\n        h3{\n            font-size: 1.5rem;\n        }\n    }\n    @media screen and (max-width:500px){\n        .widgets-title{\n            h3{\n                text-align: center;\n            }\n        }\n    }\n\n    .cardCol{\n        padding: 0 1rem;\n    }\n    @media screen and (max-width: 992px) {\n        .cardCol{\n            padding: 0 1rem;\n            margin: auto;\n        }\n    }\n\n    .slick-list{\n        padding-top: 2px;\n        text-align: center;\n    }\n    @media screen and (max-width: 992px) {\n        .slick-list{\n            margin: 0;\t\n        }\n    }\n\n    .slick-arrow{\n        width: 4.8rem;\t\n        height: 5rem;\n    }\t\n    .slick-arrow:before{\t\n        color: ",";\n        font-size: 6rem;\n        display: inline-block;\n        height: 3rem;\n    }\n    .slick-arrow:hover:before{\t\n        color: ",';\n    }\n    .slick-prev:before{\t\n        content: "‹";\t\n        line-height: 0;\n        opacity: 1;\n        color: ',';\n        margin-left: -3rem;\n    }\n    .slick-next:before{\t\n        content: "›";\n        line-height: 0;\n        opacity: 1;\n        margin-left: 2rem;\n        color: ',";\n    }\n    .slick-disabled{\t\n        visibility: hidden;\n    }\n    .slick-dots li button:before {\n        font-size: 0.6rem;\n        color: ",";\n    }\n    .slick-dots li.slick-active button:before {\n        opacity: 1;\n        color: ",";\n    }\n\n    .post-meta-block{\n        text-align: left;\n    }\n\n    .post-content-block{\n        height: 10rem;\n\n        .post-title {\n            text-align: left;\n        }\n    }\n\n    .allBlogs{\n        height: 22rem;\n    }\n\n    @media screen and (min-width: 1200px) {\n        .post-content-block {\n            height: 8rem;\n        }\n\n        .allBlogs{\n            height: 19.5rem;\n        }\n    }\n\n    @media screen and (max-width: 720px) and (min-width: 385px){\n        .post-content-block{\n            height: 8rem;\n        }\n\n        .allBlogs{\n            height: 19.5rem;\n        }\n    }\n\n    .allBlogs_card{\n        display: inline-block;\n        height: inherit;\n        width: inherit;\n        border-radius: 0.5rem;\n        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);\n        transition: box-shadow 0.3s;\n\n        h2{\n            padding: 0.5rem 0;\n        }\n\n        a{\n            height: inherit;\n            width: inherit;\n            font-size: 1.8rem;\n            font-weight: 600;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            svg{\n                margin-left: 0px;\n                padding: 0.5rem 0 0.3rem;\n                font-size: 4rem;\n                transition: all 0.3s;\n            }\n        }\n        &:hover{\n            box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.2);\n            h2{\n                color: ",";\n            }\n            svg{\n                color: ",";\n                margin-left: 3px;\n                transform: scale(1.3);\n            }\n        }\n    }\n"],(function(e){return e.theme.primaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),c=t(37242),s=t(48538),m=function(e){var n=e.postType,t=e.relatedPosts,m=e.mainHead,u=e.lastCardHead,d=e.linkToAllItems;return r.createElement(o,null,r.createElement("div",{className:"widgets-title"},r.createElement("h3",null,m)),"undefined"!=typeof window&&r.createElement(s.Z,{dots:window.innerWidth<992,arrows:window.innerWidth>=992,infinite:!1,speed:"500",slidesToShow:window.innerWidth<=720?1:window.innerWidth<=991?2:3,slidesToScroll:1},"blogs"===n?t.map((function(e){var n=e.post;return r.createElement(c.JX,{className:"cardCol",xs:12,key:n.fields.slug},r.createElement(i.Z,{frontmatter:n.frontmatter,fields:n.fields}))})):t.map((function(e){return r.createElement(c.JX,{className:"cardCol",xs:12,key:e.fields.slug},r.createElement(i.Z,{frontmatter:e.frontmatter,fields:e.fields}))})),r.createElement(c.JX,{xs:12,lg:12,className:"allBlogs"},r.createElement("div",{className:"allBlogs_card"},r.createElement(a.Link,{to:d},r.createElement("h2",null,u),r.createElement(l.f,null))))))}},25679:function(e,n,t){"use strict";var r=t(63366),a=t(67294),l=t(93723),i=["childImageSharp","extension","publicURL","alt"];n.Z=function(e){var n=e.childImageSharp,t=e.extension,o=e.publicURL,c=e.alt,s=(0,r.Z)(e,i);return n||"svg"!==t?a.createElement(l.G,Object.assign({image:n.gatsbyImageData},s,{alt:c})):a.createElement("div",{className:"old-gatsby-image-wrapper"},a.createElement("img",{src:o,alt:c}))}},33754:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(67294),a=t(1597),l=t(51174),i=t.n(l),o=t(64423).default.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"sc-bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin-bottom: 2rem;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 1.5rem;\n                img{\n                    padding-left: 1rem;\n                    width: 3rem;\n                    filter: invert(",");\n\n                }\n            }\n        }\n        \n        .feature-image{\n            /* margin: 2rem auto; */\n            object-fit: contain;\n            justify-content: center; \n            \n            img{\n                max-height: 25rem;\n                /* max-width: 31rem; */\n                display: block;\n                margin-left: auto; \n                margin-right: auto; \n            }   \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;\n            align-items: center;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"],(function(e){return e.theme.meshInterfaceLogoFilter})),c=t(25679),s=t(46319),m=function(e,n){return r.createElement(r.Fragment,null,n?r.createElement(a.Link,{to:"/community/members/"+i()(e.name)},r.createElement("span",null,e.name)):r.createElement("span",null,e.name))},u=function(e){var n=e.category,t=e.title,l=e.img,u=e.feedlink,d=e.subtitle,p=e.author,g=e.thumbnail,h=e.superscript,f=e.date,x=!1;p&&(x=(0,a.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==p.name})));return r.createElement(o,null,r.createElement("div",{className:"page-header"},g&&r.createElement("div",{className:"feature-image"},r.createElement(c.Z,Object.assign({},g,{imgStyle:{objectFit:"contain"},alt:t}))),r.createElement("h1",{className:"page-title"},t,"  ",r.createElement("sup",{className:"supscript"},h),l&&u&&r.createElement("a",{href:u,target:"_blank",rel:"noreferrer"}," ",r.createElement("img",{src:l,alt:"RSS Feed"})," ")," "),d&&r.createElement("h3",null,d),n&&r.createElement("div",{className:"breadcrumbs"},r.createElement("span",null,r.createElement("h5",null,"Category:"),r.createElement("p",{key:n},r.createElement(a.Link,{to:"/blog/category/"+i()(n)},r.createElement("span",null,n)))),p&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"By:"),"Layer5 Team"===p.name?r.createElement("p",null,r.createElement("img",{src:s.Z,alt:"Layer5",width:"85"})," Team"):r.createElement("p",null,m(p,x)))),f&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"On:"),r.createElement("p",null,f)))),!n&&p&&r.createElement("div",{className:"breadcrumbs post"},r.createElement("h5",null,"By:"),r.createElement("span",null,m(p,x)),f&&r.createElement("span",null,r.createElement("h5",null,"On:"),r.createElement("p",null,f)))))}},48340:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var r=t(67294),a=t(64423),l=t(26052),i=t(9357),o=t(63941),c=t(92102),s=t(51500),m=t(1597),u=t(37242),d=t(33754),p=t(63689),g=t(28157),h=t(62268),f=a.default.div.withConfig({displayName:"Sidebar__NewsSidebarWrapper",componentId:"sc-11pgotr-0"})(["\n  \nButton{\n    margin: 0 0 1rem ;\n    @media screen and (max-width: 768px) {\n        display: block;\n        margin: 1rem auto;\n        }\n}\n.icon{\n    display: block;\n    margin: auto;\n}\n\n.media_block { \n  background-color: ",";\t\t\n  transition: 450ms all;\n    margin-bottom: 1rem;\n    border: 1px solid ",";\n    &:hover{\n        box-shadow: 0 2px 10px ",";;\n    }\n    padding: 12% 6% 12% 6%;\n    border-radius: 4%;\n    text-align: center;\n    h5{\n        font-weight: 700;\n        color: ","\n    }\n    p{\n        font-weight: 300;\n        color: ",";\n    }\n    @media screen and (max-width: 768px) {\n        margin: 6% 15%;\n        padding: 6% 10%;\n        }\n}\n\n  .cta{\n    box-shadow: 0 5px 16px 1px rgba(0, 0, 0, 0.1);\n    margin: 1rem auto 2rem;\n    border-top: solid 3px #00b39f;\n    border-radius: 2px;\n    padding: 1rem;\n    @media screen and (max-width: 768px) {\n      margin: 6% 15%;\n      padding: 6% 10%;\n      }\n\n    .cta_heading {\n      font-weight: 600;\n      text-align: center;\n  }\n\n  .cta_body {\n      display: flex;\n      flex-direction: column;\n\n      .cta_heading-heading {\n          filter: invert(0.5);\n          flex: 0 0 70%;\n          text-align: center;\n          font-size: 1.1rem;\n      }\n      .btn {\n        min-width: 100%;\n    }\n  }\n\n  @media (min-width: 510px) {\n    .cta_heading {\n      text-align: left;\n    }\n      .cta_body {\n          .cta_heading-heading {\n              margin-bottom: 1rem;\n              margin-top: 1rem;\n              text-align: left;\n          }\n      }\n  }\n}\n"],(function(e){return e.theme.DarkTheme?"#212121":"white"}),(function(e){return e.theme.shadowLightColor}),(function(e){return e.theme.DarkTheme?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.4)"}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.text})),x=function(e){return r.createElement(f,null,e.kit?r.createElement("a",{href:e.kit},r.createElement(p.default,{primary:!0,title:"Press Kit",external:!0},r.createElement(g.w,{size:21,className:"icon-left"}))):"",r.createElement(m.Link,{to:"/brand"},r.createElement(p.default,{secondary:!0,title:"Layer5 brand kit",external:!0})),r.createElement("a",{href:"mailto:press@layer5.io",target:"_blank",rel:"noreferrer"},r.createElement("div",{className:"media_block"},r.createElement("h5",null,"Media Contacts"),r.createElement("p",null,"Kate Suttons"),r.createElement(h.I,{size:40,className:"icon"}),r.createElement("p",null,"press@layer5.io"))),r.createElement(m.Link,{to:"/meshmap"},r.createElement("div",{className:"cta"},r.createElement("h4",{className:"cta_heading"},"MeshMap"),r.createElement("div",{className:"cta_body"},r.createElement("h3",{className:"cta_heading-heading"},"Your friendly cloud native visual editor."),r.createElement("div",{className:"chapter-link"},r.createElement(p.default,{primary:!0,title:"Try Now!",className:"btn",url:"/meshmap",external:!1}))))))},b=a.default.div.withConfig({displayName:"NewsSinglestyle__NewsPageWrapper",componentId:"sc-1ux2urp-0"})(["    \n.single-post-wrapper{\n    padding: 50px 0;\n}\n.single-post-block{\n    p{\n        line-height: 29px;\n        letter-spacing: 0.2px;\n        color: ",";\n    }\n    span{\n        span{\n        color: ",";\n        }\n    }\n    p+p{\n        margin-top: 30px;  \n    }\n}\n"],(function(e){return e.theme.text}),(function(e){return e.theme.text})),y=t(11777),M=function(e){var n=e.data.mdx,t=n.frontmatter,a=n.body,l=(0,m.useStaticQuery)("426370538");return r.createElement(b,null,r.createElement(d.Z,{title:t.title,subtitle:t.subtitle,category:t.category,author:{name:t.author},thumbnail:t.thumbnail,date:t.date}),r.createElement("div",{className:"single-post-wrapper"},r.createElement(u.W2,null,r.createElement("div",{className:"single-post-block"},r.createElement(u.X2,null,r.createElement(u.JX,{lg:10,md:9,xs:12},r.createElement(s.Iv,null,r.createElement(c.MDXRenderer,null,a))),r.createElement(u.JX,{lg:2,md:3,xs:12},r.createElement(x,{kit:t.presskit})))),a&&!a.slug&&t.eurl&&r.createElement("div",{style:{display:"flex"}},r.createElement("h5",null,"Read the full article on ",r.createElement("a",{href:t.eurl,target:"_blank",rel:"noopener noreferrer"},t.author))),r.createElement(y.Z,{postType:"news",relatedPosts:l.allMdx.nodes,mainHead:"Latest News",lastCardHead:"All News",linkToAllItems:"/company/news"}))))},E=t(42308),N=t(35085),w=t(38001),I=function(e){var n=e.data,t=(0,r.useState)(),c=t[0],s=t[1];return r.createElement(a.ThemeProvider,{theme:"dark"===c?w.k:w.Z},r.createElement(l.Z,null,r.createElement(N.Z,null),r.createElement(i.Z,{title:n.mdx.frontmatter.title,image:n.mdx.frontmatter.thumbnail.publicURL}),r.createElement(o.Z,{theme:c,themeSetter:function(e){s(e)}}),r.createElement(M,{data:n}),r.createElement(E.default,null)))}},51174:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},46319:function(e,n){"use strict";n.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYuOSA5My43OCI+PHRpdGxlPmxheWVyNS1ncmF5LW5vLXRyaW08L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iMTguNzYgMCAwIDAgMCA5My43OCA4OC45MSA5My43OCA4OC45MSA3NS4wMyAxOC43NiA3NS4wMyAxOC43NiAwIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIxMzUuODQgMCA5OC4zMyA5My43OCAxMTkuNzIgOTMuNzggMTQ1LjIyIDI4LjE0IDE2My4zOSA3NS4wMyAxMzIuMjIgNzUuMDMgMTI1LjIyIDkzLjc4IDE5Mi4xMSA5My43OCAxNTQuNTkgMCAxMzUuODQgMCIgc3R5bGU9ImZpbGw6IzNjNDk0ZiIvPjxwb2x5Z29uIHBvaW50cz0iMjE4LjU4IDMyLjgzIDE5NS4xNCAwIDE3MS42OSAwIDIwOS4yIDU2LjI3IDIwOS4yIDkzLjc4IDIyNy45NiA5My43OCAyMjcuOTYgNTYuMjcgMjY1LjQ3IDAgMjQyLjMyIDAgMjE4LjU4IDMyLjgzIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIyNzMuNTYgMTQuNzcgMjczLjU2IDE4Ljc2IDI3My41NiAzNy41MSAyNzMuNTYgNjAuMzkgMjczLjU2IDkzLjc4IDM2Mi40NiA5My43OCAzNjIuNDYgNzUuMDMgMjkyLjMyIDc1LjAzIDI5Mi4zMiA2MC4zOSAyOTIuMzIgNTYuMjcgMzQ2LjIxIDU2LjI3IDM0Ni4yMSAzNy41MSAyOTIuMzIgMzcuNTEgMjkyLjMyIDE4Ljc2IDM2Mi40NiAxOC43NiAzNjIuNDYgMCAyNzMuNTYgMCAyNzMuNTYgMTQuNzciIHN0eWxlPSJmaWxsOiMzYzQ5NGYiLz48cGF0aCBkPSJNMzkyLjkyLDE3Ljg4SDQ0MVYzNy4zOUgzOTguMTJsLjE4LDE3Ljg4aDEyLjg3bDM0LDM4LjUxaDIzLjE2bC0zNC0zOC41MWgxMy4yN2ExNC41NiwxNC41NiwwLDAsMCwxNC41Ny0xNC41NlYxNC41N0ExNC41NywxNC41NywwLDAsMCw0NDcuNTksMGgtNzNWOTMuNzhoMTguNzZaIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHJlY3QgaWQ9Il9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHg9IjUzNi42MSIgd2lkdGg9IjM2LjkzIiBoZWlnaHQ9IjE3Ljc5IiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBhdGggaWQ9Il9QYXRoXzIiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNNTc2LjksNTkuOTNWNTIuNTVjMC04LjQ4LTcuMTQtMTUuMzYtMTUuOTQtMTUuMzZoLTU5LjZWMzIuMzRINDc5LjU0djIxaDc1LjU0djYuNTdaIiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBvbHlnb24gaWQ9Il9QYXRoXzMiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBwb2ludHM9IjUwMS4zNiAyNi41MiA1MDEuMzYgMTcuNzkgNTMwLjU4IDE3Ljc5IDUzMC41OCAwIDQ3OS41NCAwIDQ3OS41NCAyNi41MiA1MDEuMzYgMjYuNTIiIHN0eWxlPSJmaWxsOiNhMGFhYWEiLz48cGF0aCBpZD0iX1BhdGhfNCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik01NTUuMDgsNjUuNjRWNzZINTI1Ljg2VjkzLjc4aDM2YzguMzEsMCwxNS02LjQ4LDE1LTE0LjQ4VjY1LjY0WiIgc3R5bGU9ImZpbGw6I2EwYWFhYSIvPjxwYXRoIGlkPSJfUGF0aF81IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgZD0iTTQ5OS42MSw2Ni42MVY3NmgyMC4yMlY5My43OGgtMjZjLTguMzEsMC0xNS02LjQ4LTE1LTE0LjQ4VjY2LjYxWiIgc3R5bGU9ImZpbGw6IzgyOGM4YyIvPjwvc3ZnPg=="},63405:function(e,n,t){var r=t(73897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,n,t){var r=t(6015),a=t(69617);function l(n,t,i){return a()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,n,t){var a=[null];a.push.apply(a,n);var l=new(Function.bind.apply(e,a));return t&&r(l,t.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},38416:function(e){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},e.exports.__esModule=!0,e.exports.default=e.exports},69617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},79498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},42281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,n,t){var r=t(63405),a=t(79498),l=t(86116),i=t(42281);e.exports=function(e){return r(e)||a(e)||l(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-news-single-js-e211a383bbbfc957748c.js.map