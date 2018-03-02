# taphuocanh.github.io
My Blog on Github
```html
<!DOCTYPE html>
<html lang="en-US">
	<header>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-sanitize.js"></script>
		<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js'></script>
		
		<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.17/marked.min.js"></script>
		<link rel="stylesheet"
		  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/vs2015.min.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
		<script>hljs.initHighlightingOnLoad();</script>
	</header>
	<body>

		<div ng-app="myApp" ng-controller="myCtrl"> 

		<p>Today's welcome message is:</p>
		<div  ng-bind-html="myHTML"></div>

		</div>

		<script>
		var renderer = new marked.Renderer();

		renderer.code = function(code, language){
		  return '<pre><code class="hljs ' + language + '">' + 
			hljs.highlight(language, code).value +
			'</code></pre>';
		};

		marked.setOptions({
			renderer: renderer,
		});
		var app = angular.module('myApp', ['ngSanitize']);
		app.controller('myCtrl', function($scope, $http) {
			$http.get("https://api.github.com/repos/taphuocanh/taphuocanh.github.io/contents/README.md")
			.then(function(response) {
				var data = marked(b64DecodeUnicode(response.data.content));
				console.log(data);
				$scope.myHTML = data;
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

		function b64DecodeUnicode(str) {
			return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
			}).join(''))
		}

		</script>

	</body>
</html>
```
