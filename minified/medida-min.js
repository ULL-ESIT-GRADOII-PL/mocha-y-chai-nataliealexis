function Medida(a,e){var t=/^\s*([-+]?\d+(?:\.\d*)?(?:e[-+]?\d+)?)\s*([a-zA-Z])\s*$/i,r=t.exec(a);r?(this.valor=parseFloat(r[1]),this.tipo=r[2]):(this.valor=a,this.tipo=e)}Medida.match=function(a){var e=XRegExp("^([ ]*) \n(?<val> [-+]?[0-9]+(.[0-9]+)?(?:e[+-]?[0-9]+)?) # val \n([ ]*) \n(?<tip> [a-zA-Z]) # tip \n([ ]*) \n(?<to> (to))? # to \n([ ]*) \n(?<para> [a-zA-Z]) # para \n([ ]*)$","x");return a=XRegExp.exec(a,e)},Medida.measures={},Medida.convertir=function(a){var e=Medida.measures;e.c=Celsius,e.f=Fahrenheit,e.k=Kelvin;var t=Medida.match(a);if(!t)return"Introduzca una temperatura valida: 330e-1 F to C";var r=t.val,n=t.tip.toLowerCase(),o=t.para.toLowerCase();try{var i=new e[n](r),d="to"+e[o].name;return i[d]().toFixed(2)+" "+e[o].name}catch(s){return console.log(s),'Desconozco como convertir desde "'+n+'" hasta "'+o+'"'}};