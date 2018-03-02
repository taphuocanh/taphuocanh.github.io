# taphuocanh.github.io
My Blog on Github
```html
<!DOCTYPE html>
<html lang="en-US">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js'></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl"> 

<p>Today's welcome message is:</p>
<h1>{{myWelcome}}</h1>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("https://api.github.com/repos/taphuocanh/taphuocanh.github.io/git/blobs/8542be3dae41108a2953730ac89ba632629920e9")
    .then(function(response) {
        var data = decodeBase64(response.data.content);
        console.log(data);
        $scope.myWelcome = data.data;
    });
});
  
function Base64Decode(str, encoding = 'utf-8') {
    var bytes = base64js.toByteArray(str);
    return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
}
    
decodeBase64 = function(s) {
    var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
    var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(i=0;i<64;i++){e[A.charAt(i)]=i;}
    for(x=0;x<L;x++){
        c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
        while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
    }
    return r;
};
</script>

</body>
</html>

```
