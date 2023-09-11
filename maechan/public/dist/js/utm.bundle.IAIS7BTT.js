(()=>{var w=Object.create;var N=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var A=(e,s)=>()=>(s||e((s={exports:{}}).exports,s),s.exports);var C=(e,s,i,t)=>{if(s&&typeof s=="object"||typeof s=="function")for(let r of Z(s))!y.call(e,r)&&r!==i&&N(e,r,{get:()=>s[r],enumerable:!(t=G(s,r))||t.enumerable});return e};var I=(e,s,i)=>(i=e!=null?w(W(e)):{},C(s||!e||!e.__esModule?N(i,"default",{value:e,enumerable:!0}):i,e));var P=A((O,U)=>{var d=E.prototype,m="WGS 84";function E(e){e!==void 0&&(m=e),this.setEllipsoid(m)}d.convertLatLngToUtm=function(e,s,i){var t;if(this.status)return"No ecclipsoid data associated with unknown datum: "+m;if(!Number.isInteger(i))return"Precision is not integer number.";e=parseFloat(e),s=parseFloat(s);var r=s,h=this.toRadians(e),M=this.toRadians(r);r>=8&&r<=13&&e>54.5&&e<58||e>=56&&e<64&&r>=3&&r<12?t=32:(t=(r+180)/6+1,e>=72&&e<84&&(r>=0&&r<9?t=31:r>=9&&r<21?t=33:r>=21&&r<33?t=35:r>=33&&r<42&&(t=37))),t=parseInt(t);var g=(t-1)*6-180+3,k=this.toRadians(g),b=this.getUtmLetterDesignator(e),v=this.eccSquared/(1-this.eccSquared),q=this.a/Math.sqrt(1-this.eccSquared*Math.sin(h)*Math.sin(h)),S=Math.tan(h)*Math.tan(h),u=v*Math.cos(h)*Math.cos(h),a=Math.cos(h)*(M-k),R=this.a*((1-this.eccSquared/4-3*this.eccSquared*this.eccSquared/64-5*this.eccSquared*this.eccSquared*this.eccSquared/256)*h-(3*this.eccSquared/8+3*this.eccSquared*this.eccSquared/32+45*this.eccSquared*this.eccSquared*this.eccSquared/1024)*Math.sin(2*h)+(15*this.eccSquared*this.eccSquared/256+45*this.eccSquared*this.eccSquared*this.eccSquared/1024)*Math.sin(4*h)-35*this.eccSquared*this.eccSquared*this.eccSquared/3072*Math.sin(6*h)),f=parseFloat(.9996*q*(a+(1-S+u)*a*a*a/6+(5-18*S+S*S+72*u-58*v)*a*a*a*a*a/120)+5e5),n=parseFloat(.9996*(R+q*Math.tan(h)*(a*a/2+(5-S+9*u+4*u*u)*a*a*a*a/24+(61-58*S+S*S+600*u-330*v)*a*a*a*a*a*a/720)));return e<0&&(n+=1e7),n=T(n,i),f=T(f,i),{Easting:f,Northing:n,ZoneNumber:parseInt(t),ZoneLetter:b}};d.convertUtmToLatLng=function(e,s,i,t){var r=(1-Math.sqrt(1-this.eccSquared))/(1+Math.sqrt(1-this.eccSquared)),h=e-5e5,M=s,g=i,k=t,b;if(e===void 0)return"Please pass the UTMEasting!";if(s===void 0)return"Please pass the UTMNorthing!";if(i===void 0)return"Please pass the UTMZoneNumber!";if(t===void 0)return"Please pass the UTMZoneLetter!";["N","P","Q","R","S","T","U","V","W","X","Y","Z"].indexOf(k)!==-1?b=1:(b=0,M-=1e7);var v=(g-1)*6-180+3,q=this.eccSquared/(1-this.eccSquared),S=M/.9996,u=S/(this.a*(1-this.eccSquared/4-3*this.eccSquared*this.eccSquared/64-5*this.eccSquared*this.eccSquared*this.eccSquared/256)),a=u+(3*r/2-27*r*r*r/32)*Math.sin(2*u)+(21*r*r/16-55*r*r*r*r/32)*Math.sin(4*u)+151*r*r*r/96*Math.sin(6*u),R=this.toDegrees(a),f=this.a/Math.sqrt(1-this.eccSquared*Math.sin(a)*Math.sin(a)),n=Math.tan(a)*Math.tan(a),o=q*Math.cos(a)*Math.cos(a),D=this.a*(1-this.eccSquared)/Math.pow(1-this.eccSquared*Math.sin(a)*Math.sin(a),1.5),c=h/(f*.9996),p=a-f*Math.tan(a)/D*(c*c/2-(5+3*n+10*o-4*o*o-9*q)*c*c*c*c/24+(61+90*n+298*o+45*n*n-252*q-3*o*o)*c*c*c*c*c*c/720);p=this.toDegrees(p);var L=(c-(1+2*n+o)*c*c*c/6+(5-2*o+28*n-3*o*o+8*q+24*n*n)*c*c*c*c*c/120)/Math.cos(a);return L=v+this.toDegrees(L),{lat:p,lng:L}};d.getUtmLetterDesignator=function(e){return e=parseFloat(e),84>=e&&e>=72?"X":72>e&&e>=64?"W":64>e&&e>=56?"V":56>e&&e>=48?"U":48>e&&e>=40?"T":40>e&&e>=32?"S":32>e&&e>=24?"R":24>e&&e>=16?"Q":16>e&&e>=8?"P":8>e&&e>=0?"N":0>e&&e>=-8?"M":-8>e&&e>=-16?"L":-16>e&&e>=-24?"K":-24>e&&e>=-32?"J":-32>e&&e>=-40?"H":-40>e&&e>=-48?"G":-48>e&&e>=-56?"F":-56>e&&e>=-64?"E":-64>e&&e>=-72?"D":-72>e&&e>=-80?"C":"Z"};d.setEllipsoid=function(e){switch(e){case"Airy":this.a=6377563,this.eccSquared=.00667054;break;case"Australian National":this.a=6378160,this.eccSquared=.006694542;break;case"Bessel 1841":this.a=6377397,this.eccSquared=.006674372;break;case"Bessel 1841 Nambia":this.a=6377484,this.eccSquared=.006674372;break;case"Clarke 1866":this.a=6378206,this.eccSquared=.006768658;break;case"Clarke 1880":this.a=6378249,this.eccSquared=.006803511;break;case"Everest":this.a=6377276,this.eccSquared=.006637847;break;case"Fischer 1960 Mercury":this.a=6378166,this.eccSquared=.006693422;break;case"Fischer 1968":this.a=6378150,this.eccSquared=.006693422;break;case"GRS 1967":this.a=6378160,this.eccSquared=.006694605;break;case"GRS 1980":this.a=6378137,this.eccSquared=.00669438;break;case"Helmert 1906":this.a=6378200,this.eccSquared=.006693422;break;case"Hough":this.a=6378270,this.eccSquared=.00672267;break;case"International":this.a=6378388,this.eccSquared=.00672267;break;case"Krassovsky":this.a=6378245,this.eccSquared=.006693422;break;case"Modified Airy":this.a=6377340,this.eccSquared=.00667054;break;case"Modified Everest":this.a=6377304,this.eccSquared=.006637847;break;case"Modified Fischer 1960":this.a=6378155,this.eccSquared=.006693422;break;case"South American 1969":this.a=6378160,this.eccSquared=.006694542;break;case"WGS 60":this.a=6378165,this.eccSquared=.006693422;break;case"WGS 66":this.a=6378145,this.eccSquared=.006694542;break;case"WGS 72":this.a=6378135,this.eccSquared=.006694318;break;case"ED50":this.a=6378388,this.eccSquared=.00672267;break;case"WGS 84":case"EUREF89":case"ETRS89":this.a=6378137,this.eccSquared=.00669438;break;default:this.status=!0}};d.toDegrees=function(e){return e/Math.PI*180};d.toRadians=function(e){return e*Math.PI/180};function T(e,s){var i=Math.pow(10,s);return Math.round(e*i)/i}U.exports=E});var F=I(P());window.utmLatLng=new F.default("Everest");})();
//# sourceMappingURL=utm.bundle.IAIS7BTT.js.map
