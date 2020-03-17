// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
  // Your code here
   var nodeList = [];
   function check(node) {
     if (node.classList && node.classList.contains(className)) {
       nodeList.push(node);
     }
     for (var i = 0; i < node.childNodes.length; i++) {
       check(node.childNodes[i]);
     }
   }
   check(document)
   console.log(nodeList);
   return nodeList;
};
