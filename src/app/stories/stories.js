
var stories = angular.module("stories", []);
stories.directive('story',
function() {
  var directive = {};
  directove.restrict = 'E'; // E?
  directive.template = "<img src={{story.path}}>";
  directive.scope = {
    story: "=path"
  }
})

// directive.compile = function(element, attributes) {
//   element.html()
// }
