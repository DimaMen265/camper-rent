"use strict";(self.webpackChunkcamper_rent=self.webpackChunkcamper_rent||[]).push([[879],{3507:function(e,s,i){i.r(s),i.d(s,{default:function(){return P}});var t=i(4942),a=i(3433),c=i(9439),n=i(2791),r=i(938),l=i(7346),o=i(3733),d="FavoriteList_favoriteList__ArtbP",h="FavoriteList_favoriteItem__My6VM",_="FavoriteList_advertImage__h5oao",v="FavoriteList_advertContent__jVgul",j="FavoriteList_advertHeader__Bjglf",x="FavoriteList_headerFirst__oNjaE",m="FavoriteList_advertTitle__Tpyrt",u="FavoriteList_priceContainer__P01T1",N="FavoriteList_buttonFavorite__g7ZXv",f="FavoriteList_iconFavorite__ifavC",g="FavoriteList_iconFavoriteActive__7GxQe",F="FavoriteList_headerSecond__oqD3T",p="FavoriteList_subContainer__0HE9S",L="FavoriteList_iconStar__fyoIO",Z="FavoriteList_textRating__mjii+",w="FavoriteList_textLocation__PBv7z",S="FavoriteList_iconWrapper__9M9H-",b="FavoriteList_iconWrapperSecond__YbfQN",C="FavoriteList_description__efS+F",k="FavoriteList_detailsContainer__Yt0ZF",y="FavoriteList_detail__OcyNw",T="FavoriteList_detailHidden__T8Dr0",I="FavoriteList_detailText__6wD5K",H="FavoriteList_buttonShowMore__qVXc3",A="FavoriteList_noContainer__45-JG",M="FavoriteList_noTitle__fHT1l",O=i(7609),D=i(7483),E=i(184),J=function(){var e=(0,n.useState)([]),s=(0,c.Z)(e,2),i=s[0],J=s[1],P=(0,n.useState)(4),V=(0,c.Z)(P,2),X=V[0],q=V[1],B=i.slice(0,X).length,G=i.length;(0,n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"))||[];J(e)}),[]);var K=(0,n.useState)(!1),Q=(0,c.Z)(K,2),R=Q[0],W=Q[1],Y=(0,n.useState)(null),z=(0,c.Z)(Y,2),U=z[0],$=z[1];return(0,E.jsx)(E.Fragment,{children:0!==G?(0,E.jsxs)("div",{children:[(0,E.jsx)("ul",{className:d,children:i.map((function(e){return(0,E.jsxs)("li",{className:h,children:[(0,E.jsx)("img",{src:e.gallery[0],alt:"Advert",width:290,height:310,className:_}),(0,E.jsxs)("div",{className:v,children:[(0,E.jsxs)("div",{className:j,children:[(0,E.jsxs)("div",{className:x,children:[(0,E.jsx)("h2",{className:m,children:e.name}),(0,E.jsxs)("div",{className:u,children:[(0,E.jsxs)("h2",{className:m,children:["\u20ac",e.price,",00"]}),(0,E.jsx)("button",{type:"click",onClick:function(){return function(e){var s=[];s=-1===i.findIndex((function(s){return s._id===e._id}))?[].concat((0,a.Z)(i),[e]):i.filter((function(s){return s._id!==e._id})),J(s),localStorage.setItem("favorites",JSON.stringify(s))}(e)},className:N,children:(0,E.jsx)("svg",{width:24,height:24,className:(0,o.Z)(f,(0,t.Z)({},g,(s=e._id,i.some((function(e){return e._id===s}))))),children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-heart")})})})]})]}),(0,E.jsxs)("div",{className:F,children:[(0,E.jsxs)("div",{className:p,children:[(0,E.jsx)("svg",{width:16,height:16,className:L,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-star")})}),(0,E.jsx)("p",{className:Z,children:"".concat(e.rating,"(").concat(e.reviews.length," Reviews)")})]}),(0,E.jsxs)("div",{className:p,children:[(0,E.jsx)("svg",{width:16,height:16,className:S,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-location")})}),(0,E.jsx)("p",{className:w,children:e.location})]})]})]}),(0,E.jsxs)("p",{className:C,children:[e.description.split(" ").slice(0,10).join(" "),"..."]}),(0,E.jsxs)("div",{className:k,children:[(0,E.jsxs)("div",{className:(0,o.Z)(0!==e.adults&&y,0===e.adults&&T),children:[(0,E.jsx)("svg",{width:20,height:20,className:b,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-users")})}),(0,E.jsxs)("p",{className:I,children:[e.adults," adults"]})]}),(0,E.jsxs)("div",{className:(0,o.Z)(0!==e.children&&y,0===e.children&&T),children:[(0,E.jsx)("svg",{width:20,height:20,className:b,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-users")})}),(0,E.jsxs)("p",{className:I,children:[e.children," children"]})]}),(0,E.jsxs)("div",{className:(0,o.Z)(""!==e.transmission&&y,""===e.transmission&&T),children:[(0,E.jsx)("svg",{width:20,height:20,className:S,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-transmission")})}),(0,E.jsx)("p",{className:I,children:e.transmission})]}),(0,E.jsxs)("div",{className:(0,o.Z)(""!==e.engine&&y,""===e.engine&&T),children:[(0,E.jsx)("svg",{width:20,height:20,className:b,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-gas-station")})}),(0,E.jsx)("p",{className:I,children:e.engine})]}),(0,E.jsxs)("div",{className:(0,o.Z)(0!==e.kitchen&&y,0===e.kitchen&&T),children:[(0,E.jsx)("svg",{width:20,height:20,className:S,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-cutlery")})}),(0,E.jsx)("p",{className:I,children:"Kitchen"})]}),(0,E.jsxs)("div",{className:(0,o.Z)(0!==e.beds&&y,0===e.beds&&T),children:[(0,E.jsx)("svg",{width:20,height:20,className:S,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-bed")})}),(0,E.jsxs)("p",{className:I,children:[e.details.beds," beds"]})]}),(0,E.jsxs)("div",{className:y,children:[(0,E.jsx)("svg",{width:20,height:20,className:b,children:(0,E.jsx)("use",{href:"".concat(O.Z,"#icon-wind")})}),(0,E.jsx)("p",{className:I,children:"AC"})]})]}),(0,E.jsx)("button",{type:"click",onClick:function(){return function(e){$(e),W(!0)}(e._id)},className:H,children:"Show more"})]})]},e._id);var s}))}),R&&(0,E.jsx)(l.X,{advertId:U,onClose:function(){return W(!1)}}),0!==G&&G>=B&&G!==B&&(0,E.jsx)(r.t,{onClick:function(){q(X+4)}})]}):(0,E.jsxs)("div",{className:A,children:[(0,E.jsx)("img",{src:D,alt:"Camper"}),(0,E.jsx)("h1",{className:M,children:"No favorites adverts..."})]})})},P=function(){return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(J,{})})}}}]);
//# sourceMappingURL=879.8bece8aa.chunk.js.map