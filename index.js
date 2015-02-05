/**
 * Created by kishore.relangi on 2/5/2015.
 */

$$$ = function(a){ return Array.prototype.slice.call(window.document.querySelectorAll(a)); };

Array.prototype.normalize = function() {
    debugger;
    var Self = this;
    for(var i=0; i<Self.length; i++){
        var t = Self.splice(i,1)[0];
        if (!Array.isArray(t))
            Self.splice(i,0,t);
        else
            t.reverse().forEach(function(a){
                Self.splice(i,0,a);
            });
    }
    return Self;
};

Array.prototype.toObject = function() {
    var Self = this;
    var results = {};
    for(var i=0; i<Self.length; i+=2){
        results[Self[i]] = Self[i+1];
    }
    return results;
};
