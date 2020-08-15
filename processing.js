
function processing(data){
    let str = "abcdefghijklmnopqrstuvwxyz";
    let obj = {
        a:[],
        b:[], 
        c:[],
        d:[], 
        e:[],
        f:[], 
        g:[],
        h:[],
        i:[],
        j:[],
        k:[],
        l:[],
        m:[], 
        n:[], 
        o:[],
        p:[], 
        q:[],
        r:[], 
        s:[],
        t:[],
        u:[],
        v:[],
        w:[],
        x:[],
        y:[], 
        z:[]
    }
    for(let i=0; i<data.length; i++){
        let en = data[i].en; // root en word
        let bn = data[i].bn; // bn of root en word
        let en_syns = data[i].en_syns; // en syn[] of root word
        let bn_syns = data[i].bn_syns; // bn syn[] of root word
        let val = {
            en,
            bn,
            en_syns,
            bn_syns
        }
        console.log(val);
        //for(let j=0; j<en_syns.length; j++){
            var word = en;
            //console.log("ty "+typeof(word));
            if(word.charAt(0) == "a"){
                obj.a.push(val);
            }else if(word.charAt(0) == "b"){
                obj.b.push(val);
            }else if(word.charAt(0) == "c"){
                obj.c.push(val);
            }else if(word.charAt(0) == "d"){
                obj.d.push(val);
            }else if(word.charAt(0) == "e"){
                obj.e.push(val);
            }else if(word.charAt(0) == "f"){
                obj.f.push(val);
            }else if(word.charAt(0) == "g"){
                obj.g.push(val);
            }else if(word.charAt(0) == "h"){
                obj.h.push(val);
            }else if(word.charAt(0) == "i"){
                obj.i.push(val);
            }else if(word.charAt(0) == "j"){
                obj.j.push(val);
            }else if(word.charAt(0) == "k"){
                obj.k.push(val);
            }else if(word.charAt(0) == "l"){
                obj.l.push(val);
            }else if(word.charAt(0) == "m"){
                obj.m.push(val);
            }else if(word.charAt(0) == "n"){
                obj.n.push(val);
            }else if(word.charAt(0) == "o"){
                obj.o.push(val);
            }else if(word.charAt(0) == "p"){
                obj.p.push(val);
            }else if(word.charAt(0) == "q"){
                obj.q.push(val);
            }else if(word.charAt(0) == "r"){
                obj.r.push(val);
            }else if(word.charAt(0) == "s"){
                obj.t.push(val);
            }else if(word.charAt(0) == "u"){
                obj.u.push(val);
            }else if(word.charAt(0) == "v"){
                obj.v.push(val);
            }else if(word.charAt(0) == "w"){
                obj.w.push(val);
            }else if(word.charAt(0) == "x"){
                obj.x.push(val);
            }else if(word.charAt(0) == "y"){
                obj.y.push(val);
            }else if(word.charAt(0) == "z"){
                obj.z.push(val);
            }else{
                ;
            }
        //}
    }
    
    const a = document.createElement('a');
    const blob = new Blob([JSON.stringify(obj)]);
    a.href = URL.createObjectURL(blob);
    a.download = 'sample-profile';                     //filename to download
    a.click();
}